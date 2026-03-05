import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AirCambridgeLogo from "@/components/AirCambridgeLogo";
import { formatCurrency } from "@/lib/locations";
import * as htmlToImage from "html-to-image";
import { pdf } from "@react-pdf/renderer";

interface PassportOrder {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  duration: "5" | "10";
  pages: "32" | "64";
  base: number;
  fastTrackFee: number;
  total: number;
}

export default function PassportSuccess() {
  const [order, setOrder] = useState<PassportOrder | null>(null);
  const [txRef, setTxRef] = useState<string | null>(null);
  const [isDownloadingImage, setIsDownloadingImage] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [, setLocation] = useLocation();
  const receiptRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("aircambridge-passport-order");
    if (stored) {
      try {
        const parsed: PassportOrder = JSON.parse(stored);
        setOrder(parsed);
      } catch {
        // ignore
      }
    }

    const params = new URLSearchParams(window.location.search);
    const txRefParam = params.get("tx_ref") || params.get("txRef") || params.get("transaction_id");
    if (txRefParam) {
      setTxRef(txRefParam);
    }
  }, []);

  const handleDownloadImage = async () => {
    if (!receiptRef.current) return;
    setIsDownloadingImage(true);
    try {
      const dataUrl = await htmlToImage.toPng(receiptRef.current, { quality: 1.0 });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `aircambridge-passport-receipt-${txRef || Date.now()}.png`;
      link.click();
    } catch {
      // silent — user can retry
    } finally {
      setIsDownloadingImage(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!order) return;
    setIsDownloadingPdf(true);
    try {
      const { Document, Page, Text, View, StyleSheet } = await import("@react-pdf/renderer");

      const styles = StyleSheet.create({
        page: { padding: 24, fontSize: 11, fontFamily: "Helvetica" },
        header: { marginBottom: 16, borderBottomWidth: 1, paddingBottom: 8 },
        title: { fontSize: 18, marginBottom: 4 },
        section: { marginBottom: 12 },
        row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
        label: { fontWeight: "bold" },
      });

      const ReceiptDoc = (
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.header}>
              <Text style={styles.title}>AirCambridge Passport Express Receipt</Text>
              <Text>Transaction Ref: {txRef || "N/A"}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Customer</Text>
              <Text>{order.fullName}</Text>
              <Text>{order.email}</Text>
              <Text>{order.phone}</Text>
              {order.dateOfBirth && <Text>Date of Birth: {order.dateOfBirth}</Text>}
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Items</Text>
              <Text>
                Passport Express: {order.duration} years, {order.pages} pages
              </Text>
            </View>

            <View style={styles.section}>
              <View style={styles.row}>
                <Text>Base fee</Text>
                <Text>{formatCurrency(order.base, "NGN")}</Text>
              </View>
              <View style={styles.row}>
                <Text>Fast tracking, registration, processing & logistics</Text>
                <Text>{formatCurrency(order.fastTrackFee, "NGN")}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Total Paid (NGN)</Text>
                <Text style={styles.label}>{formatCurrency(order.total, "NGN")}</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Payment Details</Text>
              <Text>Payment method: Paystack</Text>
              <Text>Currency: NGN</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Support</Text>
              <Text>AirCambridge Jet</Text>
              <Text>Email: info@aircambridge.com</Text>
            </View>
          </Page>
        </Document>
      );

      const blob = await pdf(ReceiptDoc).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `aircambridge-passport-receipt-${txRef || Date.now()}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch {
      // silent — user can retry
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  if (!order) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="py-8 text-center space-y-4">
            <p className="text-lg font-semibold">Receipt not available</p>
            <p className="text-sm text-muted-foreground">
              We couldn't find your passport order details. Please contact support if you believe this is an error.
            </p>
            <Button onClick={() => setLocation("/passport-booking")}>
              Back to Passport Booking
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 space-y-8">
        <div className="text-center space-y-2">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-primary">Passport Express</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Payment Successful</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Your payment has been received. You can download your receipt as an image or PDF, or keep a copy for your records.
          </p>
        </div>

        <div ref={receiptRef} className="bg-white rounded-2xl shadow-lg border p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between gap-4 border-b pb-4">
            <div className="flex items-center gap-3">
              <AirCambridgeLogo />
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>Transaction Ref:</p>
              <p className="font-mono text-xs font-semibold">{txRef || "N/A"}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-sm">Customer</p>
              <p>{order.fullName}</p>
              <p>{order.email}</p>
              <p>{order.phone}</p>
              {order.dateOfBirth && <p>Date of Birth: {order.dateOfBirth}</p>}
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-sm">Business</p>
              <p>AirCambridge Jet</p>
              <p>MM2, Ikeja Airport, Lagos, Nigeria</p>
              <p>info@aircambridge.com</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="font-semibold text-sm">Items</p>
            <div className="flex justify-between text-sm">
              <span>Passport Express: {order.duration} years, {order.pages} pages</span>
              <span>{formatCurrency(order.base + order.fastTrackFee, "NGN")}</span>
            </div>
          </div>

          <div className="space-y-1 text-sm border-t pt-4">
            <div className="flex justify-between">
              <span>Base fee</span>
              <span>{formatCurrency(order.base, "NGN")}</span>
            </div>
            <div className="flex justify-between">
              <span>Fast tracking, registration, processing & logistics</span>
              <span>{formatCurrency(order.fastTrackFee, "NGN")}</span>
            </div>
            <div className="flex justify-between font-semibold text-base mt-2">
              <span>Total Paid (NGN)</span>
              <span>{formatCurrency(order.total, "NGN")}</span>
            </div>
          </div>

          <div className="space-y-1 text-sm border-t pt-4">
            <p className="font-semibold text-sm">Payment Details</p>
            <p>Payment method: Paystack</p>
            <p>Currency: NGN</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleDownloadImage} disabled={isDownloadingImage}>
            {isDownloadingImage ? "Generating Image..." : "Download as Image"}
          </Button>
          <Button variant="outline" onClick={handleDownloadPdf} disabled={isDownloadingPdf}>
            {isDownloadingPdf ? "Generating PDF..." : "Download as PDF"}
          </Button>
          <Button variant="ghost" onClick={() => setLocation("/passport-booking")}>New Passport Order</Button>
        </div>
      </div>
    </div>
  );
}
