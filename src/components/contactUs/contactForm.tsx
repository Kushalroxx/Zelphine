"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Form, FormControl, FormField, FormItem, FormMessage, AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter, AlertDialogAction } from "@/components/ui"
import axios from "axios"
import { User, Mail, Phone, CheckCircle, MessageSquare, ArrowRight, ArrowLeft, Loader2, Code2, Sparkles, Database, ShoppingCart, RefreshCw, Briefcase } from 'lucide-react';
import React, { useEffect, useState } from "react"
import RenderField from "./renderField"
import { useAtom } from "jotai"
import { formAtom } from "@/lib/atoms"
import { motion, AnimatePresence } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }).or(z.literal("")),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  description: z.string().min(10, { message: "Please tell us a bit more about the project." }),
})

const projectTypes = [
  { id: "Custom SaaS Platform / MVP", label: "SaaS / MVP", icon: Code2 },
  { id: "AI Agents & Workflow Automation", label: "AI & Automation", icon: Sparkles },
  { id: "Internal Business Tools (CRM/ERP)", label: "Internal Tools", icon: Database },
  { id: "E-commerce & Marketplace ", label: "E-commerce", icon: ShoppingCart },
  { id: "Legacy Modernization", label: "Modernization", icon: RefreshCw },
  { id: "Other / Consulting", label: "Other / Consulting", icon: Briefcase }
];

interface FieldConfig {
    name: "name" | "email" | "phone" | "description";
    label: string;
    placeholder: string;
    type: "input" | "textarea";
    icon?: React.ElementType; 
}

const fields: FieldConfig[] = [
    { name: "name", label: "Full Name", placeholder: "Jane Doe", type: "input", icon: User },
    { name: "email", label: "Work Email", placeholder: "jane@company.com", type: "input", icon: Mail },
    { name: "phone", label: "Phone Number (optional)", placeholder: "+1 (555) 000-0000", type: "input", icon: Phone },
    { name: "description", label: "Describe your challenge", placeholder: "What are you building, scaling, or fixing?\nMention current tech stack, pain points, or goals.", type: "textarea", icon: MessageSquare }
]

export function ContactForm() {
  const [step, setStep] = useState(0);
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

  useEffect(() => {
    if (chatFormData.projectType) form.setValue("projectType", chatFormData.projectType);
    if (chatFormData.description) form.setValue("description", chatFormData.description);
  }, [chatFormData, form])

  const watchProjectType = form.watch("projectType");
  const watchDescription = form.watch("description");
  const isStep1Complete = watchProjectType && watchDescription && watchDescription.length >= 10;

  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      await axios.post(`api/contacts/create`, data)
      setSuccess(true)
      form.reset();
      setStep(0);
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
    <div className="w-full relative">
      {/* Animated Progress Bar */}
      <div className="flex gap-2 mb-8 w-full">
        <motion.div 
          className="h-1.5 flex-1 rounded-full bg-primary"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        />
        <motion.div 
          className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
        />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> 
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Interactive Project Details */}
            {step === 0 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Step 1 Messaging */}
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Details</h3>
                  <p className="text-slate-500 mt-1">Select your objective and briefly describe your requirements.</p>
                </div>

                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {projectTypes.map((opt, i) => {
                              const isSelected = field.value === opt.id;
                              const Icon = opt.icon;
                              return (
                                <motion.div 
                                  key={opt.id}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  onClick={() => field.onChange(opt.id)}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className={`cursor-pointer rounded-xl p-3 py-5 flex flex-col items-center justify-center gap-3 transition-colors border-2 ${
                                    isSelected 
                                      ? 'border-primary bg-primary/5 text-primary' 
                                      : 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                                  }`}
                                >
                                  <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : 'text-slate-400'}`} />
                                  <span className={`text-xs font-semibold text-center ${isSelected ? 'text-foreground' : 'text-slate-500'}`}>
                                    {opt.label}
                                  </span>
                                </motion.div>
                              )
                            })}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <RenderField field={fields[3]} form={form} />
                </motion.div>

                {/* Fixed Overflow: Standard block button */}
                <div className="pt-2">
                  <Button 
                    type="button" 
                    onClick={() => setStep(1)}
                    disabled={!isStep1Complete}
                    className={`w-full py-6 text-base font-bold transition-all rounded-xl flex items-center justify-center gap-2 ${!isStep1Complete ? 'opacity-50 grayscale' : 'hover:scale-[1.02]'}`}
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Personal Info */}
            {step === 1 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Step 2 Messaging */}
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
                  <p className="text-slate-500 mt-1">Where should our engineering team send the proposal?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                        <RenderField field={fields[0]} form={form} />
                    </div>
                    <RenderField field={fields[1]} form={form} />
                    <RenderField field={fields[2]} form={form} />
                </div>

                {/* Fixed Overflow: Flex-col on mobile, Flex-row on desktop */}
                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep(0)}
                    className="w-full sm:w-auto py-6 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2 sm:mr-0" />
                    <span className="sm:hidden">Back</span>
                  </Button>
                  
                  <Button 
                    disabled={loading} 
                    className="w-full sm:flex-1 py-6 text-base font-bold transition-all rounded-xl hover:scale-[1.02] shadow-lg" 
                    type="submit"
                  >
                    {loading ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : "Submit Request →"} 
                  </Button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Alert Dialog (unchanged) */}
          <AlertDialog open={success} onOpenChange={setSuccess}>
            <AlertDialogContent className="rounded-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="flex flex-col items-center justify-center gap-4 mb-4 pt-4">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                  >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <span className="text-2xl font-bold text-slate-900">Request Received</span>
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center text-lg text-slate-600">
                  Thank you for contacting <strong>Zelphine</strong>.<br/> 
                  Our engineering team is reviewing your details. We will respond within 24 hours.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex justify-center sm:justify-center pb-4">
                <AlertDialogAction 
                  onClick={() => setSuccess(false)}
                  className="w-full sm:w-auto font-bold !text-white px-8 bg-primary text-slate hover:bg-primary/90 rounded-full"
                >
                  Close
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <p className="text-center text-xs text-slate-400 mt-4">
              Non-disclosure agreement (NDA) available upon request.
          </p>
        </form>
      </Form>
    </div>
  )
}