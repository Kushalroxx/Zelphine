"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Form, Loader, AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter, AlertDialogAction } from "@/components/ui"
import axios from "axios"
import { useRouter } from "nextjs-toploader/app"
import { User, Mail, Phone, CheckCircle, Briefcase, MessageSquare } from 'lucide-react';
import React from "react"
import RenderField from "./renderField"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is too short." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  description: z.string().min(10, { message: "Please tell us a bit more about the project." }),
})
interface FieldConfig {
    name: "name" | "email" | "phone" | "projectType" | "description";
    label: string;
    placeholder: string;
    type: "input" | "textarea" | "select";
    icon?: React.ElementType; 
    options?: string[];
}


const fields: FieldConfig[] = [
    { name: "name", label: "Full Name", placeholder: "Jane Doe", type: "input", icon: User },
    { name: "email", label: "Work Email", placeholder: "jane@company.com", type: "input", icon: Mail },
    { name: "phone", label: "Phone Number (optional)", placeholder: "+1 (555) 000-0000", type: "input", icon: Phone },
    { 
      name: "projectType", 
      label: "What are you looking to build?", 
      placeholder: "Select your project type", 
      type: "select", 
      icon: Briefcase,
      options: ["Web Application Development", "AI & Automation", "Product Design (UI/UX)", "Technical Consulting", "Other"]
    },
    { name: "description", label: "Describe your challenge", placeholder: " What are you building, scaling, or fixing?\n Mention current tech stack, pain points, or goals if possible.", type: "textarea", icon: MessageSquare }
]

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      description: "",
    },
  })

  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      const res = await axios.post(`api/contacts/create`, data)
      setSuccess(true)
      form.reset();
    } catch(error) {
       console.log(error);
       if (axios.isAxiosError(error)) {
        form.setError("name", { message: error.response?.data?.error });
       }
       form.setError("name", { message: "An error occurred. Please try again." });
    } finally {
      setLoading(false)
    }
  }
      
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> 
        <div className="grid md:grid-cols-2 gap-5">
            {fields.slice(0, 3).map((field, i) => (
                <div key={field.name} className={i === 2 ? "md:col-span-2" : ""}>
                    <RenderField field={field} form={form} />
                </div>
            ))}
        </div>

        <RenderField field={fields[3]} form={form} />
        <RenderField field={fields[4]} form={form} />

        <AlertDialog open={success} onOpenChange={setSuccess}>
          <AlertDialogContent className="rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="flex flex-col items-center justify-center gap-4 mb-4 pt-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
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

        <Button 
            disabled={loading} 
            className="w-full py-6 text-base font-bold transition-all rounded-xl" 
            type="submit"
        >
          {loading ? <Loader className="w-6 h-6 animate-spin" /> : "Discuss Your Challenge →"} 
        </Button>

        <p className="text-center text-xs text-slate-400 mt-4">
            Non-disclosure agreement (NDA) available upon request.
        </p>
      </form>
    </Form>
  )
}