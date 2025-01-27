import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    BlobProvider
} from '@react-pdf/renderer';
import { format } from "date-fns";
import { ReactElement } from "react";

interface DownloadReceiptProps {
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
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff'
    },
    header: {
        marginBottom: 30,
        borderBottom: '1px solid #e2e8f0',
        paddingBottom: 20
    },
    title: {
        fontSize: 24,
        color: '#1a365d',
        textAlign: 'left',
        fontFamily: 'Helvetica-Bold',
        marginBottom: 4
    },
    subtitle: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 8,
    },
    section: {
        marginBottom: 25,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    organizationInfo: {
        width: '48%',
    },
    receiptInfo: {
        width: '48%',
        alignItems: 'flex-end',
    },
    sectionTitle: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#1a365d',
    },
    text: {
        fontSize: 10,
        color: '#334155',
        marginBottom: 4,
        lineHeight: 1.5,
    },
    boldText: {
        fontFamily: 'Helvetica-Bold',
        color: '#1a365d',
    },
    table: {
        width: '100%',
        marginTop: 10,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        minHeight: 35,
        alignItems: 'center',
    },
    tableHeader: {
        backgroundColor: '#f8fafc',
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
    },
    tableHeaderCell: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#1a365d',
        padding: 10,
    },
    tableCell: {
        fontSize: 10,
        padding: 10,
        color: '#334155',
    },
    totalRow: {
        backgroundColor: '#f8fafc',
        borderTopWidth: 2,
        borderTopColor: '#e2e8f0',
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
        borderTop: '1px solid #e2e8f0',
        paddingTop: 20,
    },
    footerText: {
        fontSize: 8,
        color: '#64748b',
        marginBottom: 4,
        textAlign: 'center',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        marginVertical: 20,
    }
});

const ReceiptDocument = ({ donationData }: DownloadReceiptProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.title}>DONATION RECEIPT</Text>
                <Text style={styles.subtitle}>Thank you for your contribution to our cause</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.organizationInfo}>
                    <Text style={styles.boldText}>Aahan NGO</Text>
                    <Text style={styles.text}>Village Nagar, Kunihar</Text>
                    <Text style={styles.text}>Solan, H.P., IN 173207</Text>
                    <Text style={styles.text}>Phone: +91 94592 44849</Text>
                    <Text style={styles.text}>Email: contact@aahan.org</Text>
                </View>
                <View style={styles.receiptInfo}>
                    <Text style={styles.text}>Receipt No: #{donationData.receiptId}</Text>
                    <Text style={styles.text}>
                        Issue Date: {format(new Date(donationData.date), 'MMMM dd, yyyy')}
                    </Text>
                    {donationData.paymentId && (
                        <Text style={styles.text}>Payment ID: {donationData.paymentId}</Text>
                    )}
                    {donationData.orderId && (
                        <Text style={styles.text}>Order ID: {donationData.orderId}</Text>
                    )}
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Donor Information</Text>
                <Text style={styles.text}>Name: {donationData.name}</Text>
                <Text style={styles.text}>Email: {donationData.email}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Donation Details</Text>
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.tableHeaderCell}>Description</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.tableHeaderCell, { textAlign: 'right' }]}>Amount</Text>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.tableCell}>Charitable Donation</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                                ₹{donationData.amount.toLocaleString()}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.tableRow, styles.totalRow]}>
                        <View style={{ flex: 2 }}>
                            <Text style={[styles.tableHeaderCell]}>Total Amount</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.tableHeaderCell, { textAlign: 'right' }]}>
                                ₹{donationData.amount.toLocaleString()}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <Text style={[styles.text, { marginTop: 10 }]}>
                Payment Method: {donationData.paymentMethod}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    This is a computer-generated receipt and does not require a physical signature.
                </Text>
                <Text style={styles.footerText}>
                    © 2024 Aahan NGO. All rights reserved.
                </Text>
            </View>
        </Page>
    </Document>
);

export function DownloadReceipt({ donationData }: DownloadReceiptProps): ReactElement {
    return (
        <BlobProvider document={<ReceiptDocument donationData={donationData} />}>
            {({ blob, url, loading, error }) => (
                <Button
                    variant="outline"
                    className="w-full"
                    disabled={loading}
                    onClick={() => {
                        if (url) {
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = `donation-receipt-${donationData.receiptId}.pdf`;
                            link.click();
                        }
                    }}
                >
                    <Download className="mr-2 h-4 w-4" />
                    {loading ? 'Generating Receipt...' : 'Download Receipt'}
                </Button>
            )}
        </BlobProvider>
    );
}