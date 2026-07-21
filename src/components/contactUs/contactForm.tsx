"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Form, FormControl, FormField, FormItem, FormMessage, AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter, AlertDialogAction } from "@/components/ui"
import axios from "axios"
import { User, Mail, Phone, CheckCircle, MessageSquare, Loader2, Code2, Sparkles, Database, ShoppingCart, RefreshCw, LayoutTemplate, ShieldCheck } from 'lucide-react';
import React, { useEffect, useState } from "react"
import RenderField from "./renderField"
import { useAtom } from "jotai"
import { formAtom } from "@/lib/atoms"
import { motion, AnimatePresence } from "framer-motion"
import { BorderBeam } from "../ui/border-beam"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select an architecture type." }),
  description: z.string().min(10, { message: "Please share a few details about your goals." }),
})

const projectTypes = [
  { id: "SaaS & Custom Web Applications", label: "SaaS / MVP", icon: Code2 },
  { id: "AI & Automation", label: "AI & Agents", icon: Sparkles },
  { id: "Business, Marketing & E-commerce", label: "Web Platform", icon: LayoutTemplate },
  { id: "Internal Tool / Web App", label: "Internal Tools", icon: Database },
  { id: "Feature Development & System Upgrades", label: "Upgrades", icon: RefreshCw },
  { id: "Maintenance & Support", label: "Maintenance", icon: ShieldCheck }
];

const fields = [
    { name: "name", label: "Name", placeholder: "Your Name", type: "input", icon: User },
    { name: "email", label: "Work Email", placeholder: "founder@company.com", type: "input", icon: Mail },
    { name: "phone", label: "Phone (Optional)", placeholder: "Optional", type: "input", icon: Phone },
    { name: "description", label: "Project Scope", placeholder: `Example:
• Build an AI SaaS
• Improve an existing platform
• Launch an MVP in 4 weeks
• Add AI to our CRM`, type: "textarea", icon: MessageSquare }
] as const;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [chatFormData] = useAtom(formAtom);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: chatFormData.projectType || "",
      description: chatFormData.description || "",
    },
    mode: "onChange"
  })

  // Jotai hydration
  useEffect(() => {
    if (chatFormData.projectType) {
      form.setValue("projectType", chatFormData.projectType, { shouldValidate: true });
    }
    if (chatFormData.description) {
      form.setValue("description", chatFormData.description, { shouldValidate: true });
    }
  }, [chatFormData, form])

  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      await axios.post(`api/contacts/create`, data)
      setSuccess(true)
      form.reset();
    } catch(error) {
      if (axios.isAxiosError(error)) {
        form.setError("root", { message: error.response?.data?.error });
      } else {
        form.setError("root", { message: "An error occurred. Please try again." });
      }
    } finally {
      setLoading(false)
    }
  }
      
  return (
    <div className="w-full relative bg-card border border-border shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="px-4 py-6 sm:px-8 sm:py-10 relative z-10"> 
          
          <div className="mb-5 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Tell Us About Your Project</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              What are you looking to build?
            </p>
          </div>

          {/* Architecture Selection Grid */}
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem className="mb-5 sm:mb-8">
                <FormControl>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    {projectTypes.map((opt) => {
                      const isSelected = field.value === opt.id;
                      const Icon = opt.icon;
                      return (
                        <div 
                          key={opt.id}
                          onClick={() => field.onChange(opt.id)}
                          className={`cursor-pointer rounded-xl p-2 sm:p-3 flex flex-col items-center justify-center gap-1.5 sm:gap-2 transition-all border-2 ${
                            isSelected 
                              ? 'border-primary bg-primary/10 text-primary shadow-sm' 
                              : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:bg-muted'
                          }`}
                        >
                          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                          <span className={`text-[10px] sm:text-[11px] font-bold text-center ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {opt.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-4 sm:mb-5">
            <div className="sm:col-span-2">
              <RenderField field={fields[0]} form={form} />
            </div>
            <RenderField field={fields[1]} form={form} />
            <RenderField field={fields[2]} form={form} />
            <div className="sm:col-span-2">
              <RenderField field={fields[3]} form={form} />
            </div>
          </div>

          {form.formState.errors.root && (
            <div className="text-red-500 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              {form.formState.errors.root.message}
            </div>
          )}

          <Button 
            disabled={loading} 
            className="w-full py-5 sm:py-6 text-xs md:text-sm font-bold transition-all rounded-xl hover:scale-[1.01] shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground mt-2 sm:mt-4" 
            type="submit"
          >
            {loading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin mr-2" /> : "Request Engineering Proposal"} 
          </Button>
          
          <p className="text-center text-[9px] sm:text-[10px] text-muted-foreground pt-4 sm:pt-6 font-medium">
              We respect your privacy. NDAs are available upon request during discovery.
          </p>

        </form>
      </Form>

      {/* Decorative Borders */}
      <BorderBeam duration={8} size={300} borderWidth={2} className="from-transparent via-primary/50 to-transparent opacity-50" />
      
      {/* Success Modal */}
      <AlertDialog open={success} onOpenChange={setSuccess}>
        <AlertDialogContent className="rounded-2xl sm:rounded-3xl w-[90vw] sm:w-full max-w-md bg-card border-border p-4 sm:p-6">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center"
              >
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
              </motion.div>
              <span className="text-xl sm:text-2xl font-black text-foreground">Request Received</span>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
              Thank you for reaching out to <strong>Zelphine</strong>.<br /><br />
              <span className="text-left inline-block space-y-1">
                <span className="block mb-1 sm:mb-2">Here's what happens next:</span>
                <span className="block">✓ We'll review your requirements.</span>
                <span className="block">✓ We'll identify the right technical approach.</span>
                <span className="block">✓ We'll contact you within <strong>24 hours</strong>.</span>
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center pb-1 sm:pb-2 mt-3 sm:mt-4">
            <AlertDialogAction 
              onClick={() => setSuccess(false)}
              className="w-full sm:w-auto font-bold px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base bg-primary hover:bg-primary/90 rounded-full"
            >
              Back to site
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}