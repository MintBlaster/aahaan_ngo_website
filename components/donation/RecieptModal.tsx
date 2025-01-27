// components/donation/RecieptModal.tsx
import { FC } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { Download, CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";
import { DownloadReceipt } from './DownloadReceipt';

interface ReceiptModalProps {
    isOpen: boolean;
    onClose: () => void;
    donationData: {
        name: string;
        email: string;
        amount: number;
        receiptId: string;
        date: string;
        paymentId?: string;
        orderId?: string;
        paymentMethod: string;
    };
    status: 'success' | 'failed' | 'pending';
    errorMessage?: string;
}

export const ReceiptModal: FC<ReceiptModalProps> = ({
                                                        isOpen,
                                                        onClose,
                                                        donationData,
                                                        status,
                                                        errorMessage
                                                    }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <div className="space-y-6">
                    {status === 'success' ? (
                        <>
                            <div className="text-center space-y-2">
                                <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Thank You!
                                </h2>
                                <p className="text-gray-600">
                                    Your donation of ₹{donationData.amount} has been received successfully.
                                </p>
                            </div>

                            <div className="space-y-2 text-sm text-gray-600">
                                <p>Receipt ID: {donationData.receiptId}</p>
                                <p>Date: {format(new Date(donationData.date), 'PPP')}</p>
                                {donationData.paymentId && (
                                    <p>Payment ID: {donationData.paymentId}</p>
                                )}
                            </div>

                            <DownloadReceipt donationData={donationData} />

                            <p className="text-xs text-gray-500 text-center">
                                A copy of the receipt has been sent to your email address.
                            </p>
                        </>
                    ) : status === 'failed' ? (
                        <div className="text-center space-y-4">
                            <XCircle className="mx-auto h-12 w-12 text-red-500" />
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Payment Failed
                                </h2>
                                <p className="text-gray-600">
                                    {errorMessage || "There was an error processing your donation. Please try again."}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        </div>
                    ) : (
                        <div className="text-center space-y-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto" />
                            <p className="text-gray-600">Processing your donation...</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
