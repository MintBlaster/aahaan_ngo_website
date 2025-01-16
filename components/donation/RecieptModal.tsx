'use client';

import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DonationFormData } from "@/lib/types/donation";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface ReceiptModalProps {
    isOpen: boolean;
    onClose: () => void;
    donationData: DonationFormData;
}

export function ReceiptModal({ isOpen, onClose, donationData }: ReceiptModalProps) {
    const downloadPDF = () => {
        const doc = new jsPDF();

        // Header section
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Aahan NGO', 105, 20, { align: 'center' });

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Village Nagar, Kunihar, Solan, H.P., IN 173207', 105, 27, { align: 'center' });
        doc.text('Phone: +91 94592 44849 | Email: support@aahanngo.org', 105, 32, { align: 'center' });
        doc.line(20, 35, 190, 35); // Divider line

        // Title
        doc.setFontSize(16);
        doc.text('Donation Receipt', 105, 45, { align: 'center' });

        // Donation details table
        const startY = 55;
        (doc as any).autoTable({
            startY,
            head: [['Description', 'Details']],
            body: [
                ['Receipt ID', donationData.receiptId],
                ['Name', donationData.name],
                ['Email', donationData.email],
                ['Donation Amount', `Rs. ${donationData.amount.toLocaleString()}`],
                ['Date', new Date().toLocaleDateString()],
            ],
            theme: 'grid',
            headStyles: {
                fillColor: [14, 159, 105], // Emerald green
                textColor: 255,
                halign: 'center',
            },
            styles: {
                fontSize: 12,
            },
            columnStyles: {
                0: { fontStyle: 'bold', halign: 'left' },
                1: { halign: 'left' },
            },
        });

        // Thank you section
        const finalY = (doc as any).lastAutoTable.finalY + 10;
        doc.setFontSize(12);
        doc.text(
            'Thank you for your generous support! Your contribution helps us create meaningful change.',
            20,
            finalY
        );

        // Footer section
        const pageHeight = doc.internal.pageSize.height;
        doc.line(20, pageHeight - 30, 190, pageHeight - 30); // Divider line
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text('For any queries, contact us at support@aahanngo.org or call +91 94592 44849.', 105, pageHeight - 20, {
            align: 'center',
        });
        doc.text('Visit us at www.aahaan.org', 105, pageHeight - 15, { align: 'center' });

        // Save the PDF
        doc.save(`donation-receipt-${donationData.receiptId}.pdf`);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <div className="text-center space-y-6 p-6">
                    <h3 className="text-2xl font-semibold text-emerald-900">
                        Thank You for Your Donation!
                    </h3>
                    <p className="text-gray-600">
                        Your contribution of ₹{donationData.amount.toLocaleString()} has been received.
                    </p>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-sm text-emerald-800">
                            Receipt ID: {donationData.receiptId}
                        </p>
                    </div>

                    <button
                        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                        onClick={downloadPDF}
                    >
                        Download Receipt
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
