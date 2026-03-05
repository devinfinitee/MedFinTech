import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MapPin, Mail, Phone, Home, Loader2, ShieldCheck, FileDown, ImageDown } from "lucide-react";
import { PaystackService } from '@/lib/paystack';
import paystackLogo from "../assets/paystack.PNG";
import { toPng } from 'html-to-image';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Cast to any — avoids render-prop type mismatch in newer @react-pdf/renderer versions
const PDFLink = PDFDownloadLink as any;

// ─── PDF styles ───────────────────────────────────────────────────────────────
const pdfStyles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', backgroundColor: '#ffffff', padding: 0 },
  accentBar: { height: 6, backgroundColor: '#16a34a' },
  header: { backgroundColor: '#0f172a', paddingHorizontal: 32, paddingVertical: 22, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  headerLeft: { flexDirection: 'column' },
  headerTitle: { color: '#ffffff', fontSize: 13, fontWeight: 'bold', letterSpacing: 0.8 },
  headerSub: { color: '#94a3b8', fontSize: 8, marginTop: 3 },
  paidBadge: { backgroundColor: '#16a34a', borderRadius: 4, paddingHorizontal: 12, paddingVertical: 5 },
  paidText: { color: '#ffffff', fontSize: 9, fontWeight: 'bold', letterSpacing: 1.5 },
  body: { paddingHorizontal: 32, paddingBottom: 28 },
  sectionLabel: { fontSize: 7.5, fontWeight: 'bold', color: '#16a34a', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 8, marginTop: 2 },
  sectionBox: { borderRadius: 6, borderWidth: 1, borderColor: '#e2e8f0', overflow: 'hidden', marginBottom: 16 },
  rowEven: { flexDirection: 'row', backgroundColor: '#f8fafc', paddingHorizontal: 12, paddingVertical: 9 },
  rowOdd: { flexDirection: 'row', backgroundColor: '#ffffff', paddingHorizontal: 12, paddingVertical: 9 },
  labelCell: { width: '40%', fontSize: 9, color: '#64748b' },
  valueCell: { flex: 1, fontSize: 9, fontWeight: 'bold', color: '#1e293b' },
  statusGreen: { color: '#16a34a', fontWeight: 'bold', fontSize: 9 },
  mono: { fontFamily: 'Courier', fontSize: 9 },
  amountBox: { backgroundColor: '#f0fdf4', borderWidth: 1.5, borderColor: '#16a34a', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  amountLabel: { fontSize: 10, color: '#15803d', fontWeight: 'bold' },
  amountSub: { fontSize: 7.5, color: '#4ade80', marginTop: 2 },
  amountValue: { fontSize: 26, color: '#15803d', fontWeight: 'bold' },
  footerDivider: { borderTopWidth: 1, borderTopColor: '#e2e8f0', marginBottom: 12 },
  footer: { fontSize: 7.5, color: '#94a3b8', textAlign: 'center', lineHeight: 1.8 },
  footerBold: { color: '#64748b', fontWeight: 'bold' },
});

// ─── PDF Receipt Document ─────────────────────────────────────────────────────
function ReceiptPDF({ details, typeLabel, receiptDate, receiptTime }: {
  details: any;
  typeLabel: string;
  receiptDate: string;
  receiptTime: string;
}) {
  return (
    <Document title="MEDFINTECH 2026 — Payment Receipt">
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
              <Text style={[pdfStyles.valueCell, pdfStyles.mono]}>{details?.reference || '—'}</Text>
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
              <Text style={pdfStyles.valueCell}>{details?.customer?.name || '—'}</Text>
            </View>
            <View style={pdfStyles.rowOdd}>
              <Text style={pdfStyles.labelCell}>Email Address</Text>
              <Text style={pdfStyles.valueCell}>{details?.customer?.email || '—'}</Text>
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
            <Text style={pdfStyles.amountValue}>
              N{details?.amount ? Number(details.amount).toLocaleString() : '—'}
            </Text>
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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PaymentSuccess() {
  const [, setLocation] = useLocation();
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSavingImg, setIsSavingImg] = useState(false);
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference') || urlParams.get('trxref');
    const type = urlParams.get('type');
    const item = urlParams.get('item');

    if (reference) {
      verifyPayment(reference, type, item);
    } else {
      setIsVerifying(false);
    }
  }, []);

  const verifyPayment = async (reference: string, type: string | null, item: string | null) => {
    try {
      const verification = await PaystackService.verifyPayment(reference);
      setPaymentDetails({ ...verification, type, item, reference });
    } catch {
      setPaymentDetails({ type, item, reference, verified: false });
    } finally {
      setIsVerifying(false);
    }
  };

  const receiptDate = new Date().toLocaleDateString('en-NG', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  const receiptTime = new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });

  const getTypeLabel = () => {
    if (paymentDetails?.type === 'ticket') {
      const itemLabels: Record<string, string> = {
        student: 'Student General Admission',
        general: 'General Admission',
        vip: 'VIP Access',
        volunteer: 'Volunteer Pass',
      };
      return itemLabels[paymentDetails?.item] || 'Conference Ticket';
    }
    if (paymentDetails?.type === 'accommodation') return 'Hotel Accommodation — The Willows Nest';
    return 'MEDFINTECH Conference 2026';
  };

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
      link.download = `MEDFINTECH_Receipt_${paymentDetails?.reference || 'payment'}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert('Could not save image. Please try again.');
    } finally {
      setIsSavingImg(false);
    }
  };

  const typeLabel = getTypeLabel();
  const fileName = `MEDFINTECH_Receipt_${paymentDetails?.reference || 'payment'}.pdf`;

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-lg text-slate-600 font-medium">Verifying your payment…</p>
          <p className="text-sm text-slate-400 mt-1">Please do not close this page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">

        {/* Success heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 ring-8 ring-green-50 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {paymentDetails?.type === 'ticket' ? 'Registration Confirmed!'
              : paymentDetails?.type === 'accommodation' ? 'Booking Confirmed!'
              : 'Payment Successful!'}
          </h1>
          <p className="text-slate-500 text-base max-w-sm mx-auto">
            {paymentDetails?.type === 'ticket'
              ? 'Your ticket for MEDFINTECH CONFERENCE 2026 is secured.'
              : paymentDetails?.type === 'accommodation'
              ? 'Your accommodation at The Willows Nest Hotel has been reserved.'
              : 'Your payment has been completed successfully.'}
          </p>
        </div>

        {/* Paystack badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full shadow-sm px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs text-slate-500 font-medium">Secured & processed via</span>
            <img src={paystackLogo} alt="Paystack" className="h-4 object-contain" />
          </div>
        </div>

        {/* ─── Receipt Card (also captured by html-to-image) ─── */}
        <Card className="mb-5 border-0 shadow-md overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-400" />

          {/* The div that gets captured as image */}
          <div ref={receiptRef} className="bg-white">
            <CardContent className="p-6">
              {/* Receipt header row */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Payment Receipt
                </h2>
                <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  ✓ PAID
                </span>
              </div>

              {/* Detail tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Amount Paid</p>
                  <p className="text-2xl font-extrabold text-slate-900">
                    ₦{paymentDetails?.amount ? Number(paymentDetails.amount).toLocaleString() : '—'}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Payment Status</p>
                  <span className="inline-flex items-center gap-1.5 text-green-700 font-bold text-sm">
                    <CheckCircle className="w-4 h-4" /> Successful
                  </span>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Customer Name</p>
                  <p className="font-semibold text-slate-800 text-sm">{paymentDetails?.customer?.name || '—'}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">Email</p>
                  <p className="font-semibold text-slate-800 text-sm truncate">{paymentDetails?.customer?.email || '—'}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs text-slate-400 mb-1">Transaction Reference</p>
                  <p className="font-mono font-semibold text-slate-800 text-sm break-all">{paymentDetails?.reference || '—'}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 sm:col-span-2">
                  <p className="text-xs text-slate-400 mb-1">Receipt Date & Time</p>
                  <p className="font-semibold text-slate-800 text-sm">{receiptDate} · {receiptTime}</p>
                </div>
              </div>

              {/* Item & event info */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                <p className="text-xs text-primary font-bold uppercase tracking-wide mb-3">Item Purchased</p>
                <p className="font-semibold text-slate-800 mb-3">{typeLabel}</p>
                <div className="space-y-1.5 text-sm text-slate-500">
                  <p className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-primary" /> 7th March 2026 · 9:00 AM – 4:00 PM</p>
                  <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> The Assembly, Ogbomoso, Oyo State</p>
                </div>
              </div>

              {/* Powered-by footer inside receipt */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-400">MEDFINTECH CONFERENCE 2026 · Official Receipt</p>
                <img src={paystackLogo} alt="Paystack" className="h-4 object-contain opacity-60" />
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6 border-0 shadow-md">
          <CardContent className="p-6">
            <h2 className="font-bold text-slate-900 mb-4">Next Steps</h2>
            <ul className="space-y-3">
              {paymentDetails?.type === 'ticket' ? (
                <>
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
                </>
              ) : (
                <>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    The Willows Nest Hotel will contact you within 24 hours to confirm your booking.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    Keep your phone accessible for the hotel's confirmation call.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <Mail className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    Download and save this receipt as proof of payment.
                  </li>
                </>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* PDF download */}
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

          {/* Image download */}
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

          {/* Home */}
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

