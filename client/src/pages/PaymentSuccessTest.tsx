/**
 * TEST ROUTE — /payment-success-test
 * Loads the PaymentSuccess receipt UI with mock data so you can verify
 * the PDF download, image capture, and layout without a real transaction.
 *
 * Remove or gate behind an env flag before going fully public.
 */

import { useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MapPin, Mail, Home, Loader2, ShieldCheck, FileDown, ImageDown } from "lucide-react";
import paystackLogo from "../assets/paystack.PNG";
import { toPng } from 'html-to-image';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Cast to any — avoids render-prop type mismatch in newer @react-pdf/renderer versions
const PDFLink = PDFDownloadLink as any;

// ─── Mock data ────────────────────────────────────────────────────────────────
const MOCK = {
  reference: 'MEDFINTECH_TEST_1741084800000_9999',
  amount: 5000,
  verified: true,
  status: 'success',
  type: 'ticket',
  item: 'general',
  customer: {
    name: 'Adewale Okonkwo',
    email: 'adewale.okonkwo@example.com',
  },
};

// ─── PDF styles (mirrored from PaymentSuccess) ────────────────────────────────
const pdfStyles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', backgroundColor: '#ffffff', padding: 0 },
  // Top accent bar
  accentBar: { height: 6, backgroundColor: '#16a34a' },
  // Header
  header: { backgroundColor: '#0f172a', paddingHorizontal: 32, paddingVertical: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  headerLeft: { flexDirection: 'column' },
  headerTitle: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', letterSpacing: 0.8 },
  headerSub: { color: '#94a3b8', fontSize: 8, marginTop: 3 },
  paidBadge: { backgroundColor: '#16a34a', borderRadius: 4, paddingHorizontal: 12, paddingVertical: 5 },
  paidText: { color: '#ffffff', fontSize: 9, fontWeight: 'bold', letterSpacing: 1.5 },
  // Body
  body: { paddingHorizontal: 32, paddingBottom: 28 },
  sectionLabel: { fontSize: 7.5, fontWeight: 'bold', color: '#16a34a', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, marginTop: 2 },
  sectionBox: { borderRadius: 6, borderWidth: 1, borderColor: '#e2e8f0', overflow: 'hidden', marginBottom: 16 },
  rowEven: { flexDirection: 'row', backgroundColor: '#f8fafc', paddingHorizontal: 12, paddingVertical: 9 },
  rowOdd: { flexDirection: 'row', backgroundColor: '#ffffff', paddingHorizontal: 12, paddingVertical: 9 },
  labelCell: { width: '40%', fontSize: 9, color: '#64748b' },
  valueCell: { flex: 1, fontSize: 9, fontWeight: 'bold', color: '#1e293b' },
  statusGreen: { color: '#16a34a', fontWeight: 'bold', fontSize: 9 },
  mono: { fontFamily: 'Courier', fontSize: 9 },
  // Amount
  amountBox: { backgroundColor: '#f0fdf4', borderWidth: 1.5, borderColor: '#16a34a', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  amountLabel: { fontSize: 10, color: '#15803d', fontWeight: 'bold' },
  amountSub: { fontSize: 7.5, color: '#4ade80', marginTop: 2 },
  amountValue: { fontSize: 26, color: '#15803d', fontWeight: 'bold' },
  // Footer
  footerDivider: { borderTopWidth: 1, borderTopColor: '#e2e8f0', marginBottom: 12 },
  footer: { fontSize: 7.5, color: '#94a3b8', textAlign: 'center', lineHeight: 1.8 },
  footerBold: { color: '#64748b', fontWeight: 'bold' },
});

function ReceiptPDF({ details, typeLabel, receiptDate, receiptTime }: {
  details: typeof MOCK;
  typeLabel: string;
  receiptDate: string;
  receiptTime: string;
}) {
  return (
    <Document title="MEDFINTECH 2026 — Payment Receipt (TEST)">
      <Page size="A5" style={pdfStyles.page}>

        {/* Green accent bar */}
        <View style={pdfStyles.accentBar} />

        {/* Dark header */}
        <View style={pdfStyles.header}>
          <View style={pdfStyles.headerLeft}>
            <Text style={pdfStyles.headerTitle}>MEDFINTECH CONFERENCE 2026</Text>
            <Text style={pdfStyles.headerSub}>Official Payment Receipt</Text>
          </View>
          <View style={pdfStyles.paidBadge}>
            <Text style={pdfStyles.paidText}>✓ PAID</Text>
          </View>
        </View>

        <View style={pdfStyles.body}>

          {/* Transaction Details */}
          <Text style={pdfStyles.sectionLabel}>Transaction Details</Text>
          <View style={pdfStyles.sectionBox}>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Receipt Date</Text>
              <Text style={pdfStyles.valueCell}>{receiptDate}</Text>
            </View>
            <View style={pdfStyles.rowOdd}>
              <Text style={pdfStyles.labelCell}>Receipt Time</Text>
              <Text style={pdfStyles.valueCell}>{receiptTime}</Text>
            </View>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Transaction Ref</Text>
              <Text style={[pdfStyles.valueCell, pdfStyles.mono]}>{details.reference}</Text>
            </View>
            <View style={pdfStyles.rowOdd}>
              <Text style={pdfStyles.labelCell}>Payment Gateway</Text>
              <Text style={pdfStyles.valueCell}>Paystack (Live)</Text>
            </View>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Payment Status</Text>
              <Text style={[pdfStyles.valueCell, pdfStyles.statusGreen]}>✓ Successful</Text>
            </View>
          </View>

          {/* Customer Details */}
          <Text style={pdfStyles.sectionLabel}>Customer Details</Text>
          <View style={pdfStyles.sectionBox}>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Full Name</Text>
              <Text style={pdfStyles.valueCell}>{details.customer.name}</Text>
            </View>
            <View style={pdfStyles.rowOdd}>
              <Text style={pdfStyles.labelCell}>Email Address</Text>
              <Text style={pdfStyles.valueCell}>{details.customer.email}</Text>
            </View>
          </View>

          {/* Item Purchased */}
          <Text style={pdfStyles.sectionLabel}>Item Purchased</Text>
          <View style={pdfStyles.sectionBox}>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Description</Text>
              <Text style={pdfStyles.valueCell}>{typeLabel}</Text>
            </View>
            <View style={pdfStyles.rowOdd}>
              <Text style={pdfStyles.labelCell}>Event Date</Text>
              <Text style={pdfStyles.valueCell}>7th March 2026</Text>
            </View>
            <View style={pdfStyles.rowEven}>
              <Text style={pdfStyles.labelCell}>Venue</Text>
              <Text style={pdfStyles.valueCell}>The Assembly, Ogbomoso, Oyo State</Text>
            </View>
          </View>

          {/* Amount */}
          <View style={pdfStyles.amountBox}>
            <View>
              <Text style={pdfStyles.amountLabel}>Total Amount Paid</Text>
              <Text style={pdfStyles.amountSub}>Payment confirmed by Paystack</Text>
            </View>
            <Text style={pdfStyles.amountValue}>N{Number(details.amount).toLocaleString()}</Text>
          </View>

          {/* Footer */}
          <View style={pdfStyles.footerDivider} />
          <Text style={pdfStyles.footer}>
            This is an official payment receipt for MEDFINTECH CONFERENCE 2026.{'\n'}
            Present this receipt (printed or digital) at the venue for accreditation.{'\n'}
            <Text style={pdfStyles.footerBold}>contact@medxverseapp.com</Text>{'  ·  '}09160965661
          </Text>

        </View>
      </Page>
    </Document>
  );
}

// ─── Test page ────────────────────────────────────────────────────────────────
export default function PaymentSuccessTest() {
  const [, setLocation] = useLocation();
  const [isSavingImg, setIsSavingImg] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  const paymentDetails = MOCK;

  const receiptDate = new Date().toLocaleDateString('en-NG', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const receiptTime = new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });

  const itemLabels: Record<string, string> = {
    student: 'Student General Admission',
    general: 'General Admission',
    vip: 'VIP Access',
    volunteer: 'Volunteer Pass',
  };
  const typeLabel = itemLabels[paymentDetails.item] || 'Conference Ticket';
  const fileName = `MEDFINTECH_Receipt_TEST.pdf`;

  const handleSaveImage = async () => {
    if (!receiptRef.current) return;
    setIsSavingImg(true);
    try {
      const dataUrl = await toPng(receiptRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        skipFonts: true,
        // Skip any <img> that is not already a data URL — prevents canvas security taint
        filter: (node: HTMLElement) => {
          if (node.tagName === 'IMG') {
            return (node as HTMLImageElement).src.startsWith('data:');
          }
          return true;
        },
      });
      const link = document.createElement('a');
      link.download = `MEDFINTECH_Receipt_TEST.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert('Could not save image. Please try again.');
    } finally {
      setIsSavingImg(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Test banner */}
        <div className="mb-6 bg-amber-50 border border-amber-300 rounded-xl px-4 py-3 flex items-center gap-2 text-amber-800 text-sm font-medium">
          <span className="text-lg">🧪</span>
          <span>Test mode — mock data only. No real transaction was made.</span>
        </div>

        {/* Success heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 ring-8 ring-green-50 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Registration Confirmed!</h1>
          <p className="text-slate-500 text-base max-w-sm mx-auto">
            Your ticket for MEDFINTECH CONFERENCE 2026 is secured.
          </p>
        </div>

        {/* Gateway badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full shadow-sm px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs text-slate-500 font-medium">Secured & processed via</span>
            <img src={paystackLogo} alt="Paystack" className="h-4 object-contain" />
          </div>
        </div>

        {/* Receipt card */}
        <Card className="mb-5 border-0 shadow-lg overflow-hidden">
          {/* Top green stripe */}
          <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-400" />
          <div ref={receiptRef} className="bg-white">
            <CardContent className="p-0">
              {/* Receipt header */}
              <div className="bg-slate-900 px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-base tracking-wide">MEDFINTECH CONFERENCE 2026</p>
                  <p className="text-slate-400 text-xs mt-0.5">Official Payment Receipt</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-md tracking-widest">
                  ✓ PAID
                </span>
              </div>

              <div className="px-6 py-5 space-y-5">
                {/* Transaction Details */}
                <div>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">Transaction Details</p>
                  <div className="rounded-xl border border-slate-100 overflow-hidden text-sm">
                    {[
                      ['Receipt Date', receiptDate],
                      ['Receipt Time', receiptTime],
                      ['Transaction Ref', paymentDetails.reference],
                      ['Payment Gateway', 'Paystack (Live)'],
                      ['Payment Status', '✓ Successful'],
                    ].map(([label, value], i) => (
                      <div key={label} className={`flex items-start gap-3 px-4 py-2.5 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <span className="w-36 flex-shrink-0 text-slate-400 text-xs pt-0.5">{label}</span>
                        <span className={`flex-1 font-semibold text-xs break-all ${
                          label === 'Payment Status' ? 'text-green-600' :
                          label === 'Transaction Ref' ? 'font-mono text-slate-700' : 'text-slate-800'
                        }`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">Customer Details</p>
                  <div className="rounded-xl border border-slate-100 overflow-hidden text-sm">
                    {[
                      ['Full Name', paymentDetails.customer.name],
                      ['Email Address', paymentDetails.customer.email],
                    ].map(([label, value], i) => (
                      <div key={label} className={`flex items-start gap-3 px-4 py-2.5 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <span className="w-36 flex-shrink-0 text-slate-400 text-xs pt-0.5">{label}</span>
                        <span className="flex-1 font-semibold text-xs text-slate-800 break-all">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Item Purchased */}
                <div>
                  <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">Item Purchased</p>
                  <div className="rounded-xl border border-slate-100 overflow-hidden text-sm">
                    {[
                      ['Description', typeLabel],
                      ['Event Date', '7th March 2026'],
                      ['Venue', 'The Assembly, Ogbomoso, Oyo State'],
                    ].map(([label, value], i) => (
                      <div key={label} className={`flex items-start gap-3 px-4 py-2.5 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <span className="w-36 flex-shrink-0 text-slate-400 text-xs pt-0.5">{label}</span>
                        <span className="flex-1 font-semibold text-xs text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amount box */}
                <div className="flex items-center justify-between bg-green-50 border-2 border-green-200 rounded-xl px-5 py-4">
                  <div>
                    <p className="text-xs font-bold text-green-700">Total Amount Paid</p>
                    <p className="text-[10px] text-green-500 mt-0.5">Payment confirmed by Paystack</p>
                  </div>
                  <p className="text-3xl font-extrabold text-green-700">
                    ₦{Number(paymentDetails.amount).toLocaleString()}
                  </p>
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="text-[10px] text-slate-400">MEDFINTECH CONFERENCE 2026 · Official Receipt</p>
                  <img src={paystackLogo} alt="Paystack" className="h-4 object-contain opacity-50" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Next steps */}
        <Card className="mb-6 border-0 shadow-md">
          <CardContent className="p-6">
            <h2 className="font-bold text-slate-900 mb-4">Next Steps</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Check your email for a digital confirmation of your registration.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                Download and save this receipt — present it at the accreditation desk.
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                Arrive at The Assembly, Ogbomoso by 8:30 AM on 7th March 2026.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <PDFLink
            document={<ReceiptPDF details={paymentDetails} typeLabel={typeLabel} receiptDate={receiptDate} receiptTime={receiptTime} />}
            fileName={fileName}
            className="flex-1"
          >
            {({ loading }: { loading: boolean }) => (
              <button
                disabled={loading}
                className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary via-green-500 to-primary bg-[length:200%_100%] hover:bg-right-center transition-all duration-500 shadow-lg hover:shadow-primary/40 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-2 px-5 py-3.5">
                  {loading ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <FileDown className="w-4 h-4 text-white" />}
                  <span className="text-white font-bold text-sm">{loading ? 'Preparing PDF…' : 'Download PDF Receipt'}</span>
                </div>
              </button>
            )}
          </PDFLink>

          <button
            onClick={handleSaveImage}
            disabled={isSavingImg}
            className="flex-1 group relative overflow-hidden rounded-xl bg-white border-2 border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="relative flex items-center justify-center gap-2 px-5 py-3.5">
              {isSavingImg ? <Loader2 className="w-4 h-4 text-primary animate-spin" /> : <ImageDown className="w-4 h-4 text-primary" />}
              <span className="text-primary font-bold text-sm">{isSavingImg ? 'Saving…' : 'Save as Image'}</span>
            </div>
          </button>

          <Button
            variant="outline"
            onClick={() => setLocation('/')}
            className="sm:w-auto flex items-center justify-center gap-2 py-3.5 h-auto px-5"
          >
            <Home className="w-4 h-4" />
            <span className="font-semibold text-sm">Home</span>
          </Button>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
          <p className="text-xs text-slate-400 mb-1">Need help with your booking?</p>
          <p className="text-sm font-medium text-slate-700">contact@medxverseapp.com</p>
          <p className="text-sm text-slate-500">09160965661 · 09033235676</p>
        </div>

      </div>
    </div>
  );
}
