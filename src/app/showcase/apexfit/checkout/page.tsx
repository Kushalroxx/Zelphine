"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import Link from "next/link";
import { QrCode, ShieldCheck, Lock, CreditCard, Landmark, Smartphone, Check } from "lucide-react";

// Shadcn UI Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AgencyPopup from "@/components/apexfit/agencyPopup";

// Added dynamic benefits to fill the left column with value
const PRICING_DATA = {
  essential: {
    name: "Essential",
    monthly: 2500,
    annual: 2000,
    benefits: ["Access to main gym floor", "Standard locker room access", "1 Group class per month"]
  },
  elite: {
    name: "Elite",
    monthly: 3500,
    annual: 3000,
    benefits: ["Unlimited gym access", "All group training classes", "Sauna & recovery area", "1 Guest pass per month"]
  },
  ultimate: {
    name: "Ultimate",
    monthly: 5500,
    annual: 5000,
    benefits: ["24/7 Priority Access", "Personal Trainer (2x/month)", "Premium Recovery Spa", "Unlimited Guest Passes"]
  },
};

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedPlan = searchParams.get("plan") || "";
  const billingCycle = searchParams.get("billing") || "monthly";

  const isValidPlan = selectedPlan && Object.keys(PRICING_DATA).includes(selectedPlan);

  useEffect(() => {
    if (!isValidPlan && selectedPlan) {
      router.replace("/");
    }
  }, [isValidPlan, selectedPlan, router]);

  if (!isValidPlan) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#CCFF00] font-black uppercase tracking-widest animate-pulse">
        Initializing Secure Environment...
      </div>
    );
  }

  const activePlanData = PRICING_DATA[selectedPlan as keyof typeof PRICING_DATA];
  const isAnnual = billingCycle === "annual" || billingCycle === "yearly";

  const baseMonthlyPrice = activePlanData.monthly;
  const activeMonthlyPrice = isAnnual ? activePlanData.annual : activePlanData.monthly;

  const subtotal = isAnnual ? baseMonthlyPrice * 12 : baseMonthlyPrice;
  const totalDue = isAnnual ? activeMonthlyPrice * 12 : activeMonthlyPrice;
  const totalSavings = subtotal - totalDue;
  const [showAlert, setShowAlert] = useState(false);
  const [alertConfig, setAlertConfig] = useState({ title: "", description: "", buttonText: "", autoFillMessage: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertConfig({
      title: "Transaction Simulated",
      description: "You just experienced a high-converting, friction-free checkout flow. In a live production environment, we seamlessly wire this up to Stripe, Razorpay, or custom banking APIs. Want a seamless payment experience for your customers?",
      buttonText: "Upgrade My Checkout",
      autoFillMessage: "Hi Zelphine team, I just tested your simulated checkout flow. I'm interested in having a high-converting, secure payment gateway engineered for my own platform. Let's discuss."
    });
    setShowAlert(true);
  };
  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F4F6] font-sans selection:bg-[#CCFF00] selection:text-black flex flex-col md:flex-row">
      <AgencyPopup showAlert={showAlert} setShowAlert={setShowAlert} alertConfig={alertConfig} />
      {/* LEFT COLUMN: Order Summary */}
      <div className="w-full md:w-5/12 bg-[#0A0A0A] p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#CCFF00] to-transparent opacity-50"></div>

        <div>
          <Link href="/showcase/apexfit" className="text-2xl font-black uppercase tracking-tighter text-white mb-12 block w-fit">
            Apex<span className="text-[#CCFF00]">Fit.</span>
          </Link>

          <div className="mb-8">
            {/* FIXED: Stronger Heading */}
            <h2 className="text-xl font-medium text-white mb-1">Activate {activePlanData.name} Membership</h2>
            <p className="text-[#9CA3AF] text-sm">
              <span className="font-mono text-2xl font-bold text-white">₹{totalDue}</span>
              {isAnnual ? " per year" : " per month"}
            </p>
          </div>

          <div className="space-y-4 bg-[#121212] rounded-lg p-5 border border-white/5 shadow-inner mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-[#9CA3AF] text-sm">{activePlanData.name} Plan ({isAnnual ? "12 Months" : "1 Month"})</span>
              <span className="font-mono text-white text-sm">₹{subtotal}</span>
            </div>

            {isAnnual && (
              <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[#CCFF00]">
                <span className="text-xs uppercase tracking-widest font-bold">Annual Discount Applied</span>
                <span className="font-mono text-sm">-₹{totalSavings}</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <span className="font-medium text-white">Total due today</span>
              <span className="font-mono text-lg text-white font-bold">₹{totalDue}</span>
            </div>
          </div>

          {/* FIXED: Added Value Proposition / Benefits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">What's Included</h4>
            <ul className="space-y-3">
              {activePlanData.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                  <Check className="w-4 h-4 text-[#CCFF00] mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 space-y-4">
          {/* FIXED: Added Refund/Billing Note */}
          <div className="text-xs text-[#9CA3AF]/70 leading-relaxed border-l-2 border-white/10 pl-3">
            <strong className="text-[#9CA3AF] block mb-1">14-Day Money-Back Guarantee</strong>
            If you're not satisfied within your first two weeks, we'll refund your payment in full. Cancel your renewal at any time via the Member Portal.
          </div>
          <div className="text-xs text-[#9CA3AF] flex items-center gap-3 pt-4 border-t border-white/5">
            <ShieldCheck className="w-6 h-6 text-[#CCFF00]/50" />
            <p>Secure 256-bit encrypted checkout.</p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Payment Gateway Form */}
      <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#050505] relative">
        <div className="max-w-md w-full mx-auto relative z-10">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white flex items-center justify-between">
                Contact Information
                <span className="text-xs text-[#9CA3AF] font-normal">Have an account? <Link href="/showcase/apexfit/member-portal" className="text-[#CCFF00] hover:underline">Log in</Link></span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#9CA3AF]">First name</Label>
                  <Input id="firstName" required className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#9CA3AF]">Last name</Label>
                  <Input id="lastName" required className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#9CA3AF]">Email address</Label>
                <Input id="email" type="email" required className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#9CA3AF]">Phone number</Label>
                <Input id="phone" type="tel" required className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12 font-mono" placeholder="+91 98765 43210" />
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-medium text-white">Payment Method</h3>

              <Tabs defaultValue="upi" className="w-full">
                {/* FIXED: Tactile, Selectable Cards Instead of a Pill */}
                <TabsList className="grid w-full grid-cols-3 gap-3 bg-transparent p-0 h-auto border-none mb-6">
                  <TabsTrigger
                    value="card"
                    className="py-4 flex flex-col items-center justify-center gap-2 border transition-all duration-300 data-[state=active]:border-[#CCFF00] data-[state=active]:bg-[#CCFF00]/10 data-[state=active]:text-[#CCFF00] border-white/10 bg-[#121212] text-[#9CA3AF] hover:border-white/30 rounded-md"
                  >
                    <CreditCard className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Card</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="upi"
                    className="py-4 flex flex-col items-center justify-center gap-2 border transition-all duration-300 data-[state=active]:border-[#CCFF00] data-[state=active]:bg-[#CCFF00]/10 data-[state=active]:text-[#CCFF00] border-white/10 bg-[#121212] text-[#9CA3AF] hover:border-white/30 rounded-md"
                  >
                    <Smartphone className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">UPI</span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="netbanking"
                    className="py-4 flex flex-col items-center justify-center gap-2 border transition-all duration-300 data-[state=active]:border-[#CCFF00] data-[state=active]:bg-[#CCFF00]/10 data-[state=active]:text-[#CCFF00] border-white/10 bg-[#121212] text-[#9CA3AF] hover:border-white/30 rounded-md"
                  >
                    <Landmark className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Netbank</span>
                  </TabsTrigger>
                </TabsList>

                {/* CARD TAB */}
                <TabsContent value="card" className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <Label className="text-[#9CA3AF]">Card Information</Label>
                    <div className="relative">
                      <Input required placeholder="Card number" className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12 font-mono pl-10 rounded-b-none" />
                      <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-[#9CA3AF]" />
                    </div>
                    <div className="flex -mt-2">
                      <Input required placeholder="MM / YY" className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12 font-mono rounded-none rounded-bl-md border-t-0 border-r-0 w-1/2" />
                      <Input required placeholder="CVC" className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12 font-mono rounded-none rounded-br-md border-t-0 w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[#9CA3AF]">Cardholder Name</Label>
                    <Input required placeholder="Name on card" className="bg-[#121212] border-white/10 text-white focus-visible:ring-[#CCFF00] h-12" />
                  </div>
                </TabsContent>

                {/* UPI TAB */}
                <TabsContent value="upi" className="animate-in fade-in duration-300">
                </TabsContent>

                {/* NETBANKING TAB */}
                <TabsContent value="netbanking" className="space-y-4 animate-in fade-in duration-300">
                  <div className="space-y-2">
                    <Label className="text-[#9CA3AF]">Select Bank</Label>
                    <Select required>
                      <SelectTrigger className="w-full bg-[#121212] border border-white/10 px-3 h-12 text-white text-sm focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#050505] rounded-md transition-all">
                        <SelectValue placeholder="Choose your bank..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#121212] border border-white/10 text-white">
                        <SelectItem value="hdfc" className="focus:bg-white/10 focus:text-white cursor-pointer">HDFC Bank</SelectItem>
                        <SelectItem value="icici" className="focus:bg-white/10 focus:text-white cursor-pointer">ICICI Bank</SelectItem>
                        <SelectItem value="sbi" className="focus:bg-white/10 focus:text-white cursor-pointer">State Bank of India</SelectItem>
                        <SelectItem value="axis" className="focus:bg-white/10 focus:text-white cursor-pointer">Axis Bank</SelectItem>
                        <SelectItem value="kotak" className="focus:bg-white/10 focus:text-white cursor-pointer">Kotak Mahindra Bank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* FIXED: Stronger CTA Button */}
            <div className="pt-4">
              <Button type="submit" className="w-full h-14 bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90 font-bold text-lg rounded-md flex items-center justify-center gap-2 transition-all">
                <Lock className="w-4 h-4" />
                Secure Payment • ₹{totalDue}
              </Button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#CCFF00] font-black uppercase tracking-widest animate-pulse">
        Initializing Secure Checkout...
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}