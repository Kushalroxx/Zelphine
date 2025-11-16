"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea, Loader, AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogHeader, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui"
import axios from "axios"
import { useRouter } from "nextjs-toploader/app"

import { User, Mail, Phone, CheckCircle } from 'lucide-react';
import React from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({message: "Please enter a valid email."}),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number."
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters."
  }),
})
interface FieldConfig {
    name: "name" | "email" | "phone" | "description";
    label: string;
    placeholder: string;
    component: typeof Input | typeof Textarea;
    icon?: React.ElementType; 
}

const fields: FieldConfig[] = [
    { name: "name", label: "Name", placeholder: "Enter your name", component: Input, icon: User },
    { name: "email", label: "Email", placeholder: "Enter your email", component: Input, icon: Mail },
    { name: "phone", label: "Phone Number", placeholder: "Enter your phone number", component: Input, icon: Phone },
    { name: "description", label: "Description", placeholder: "Tell us about your project", component: Textarea, }
]

export function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
          description: "",
        },
      })
      const onSubmit= async(data: z.infer<typeof formSchema>)=> {
        try{
          setLoading(true)
            const res = await axios.post(`api/contacts/create`,data)
            setSuccess(true)
            form.reset();
        }catch(error){
            console.log(error);
           if (axios.isAxiosError(error)) {
            form.setError("name", { message: error.response?.data?.error });
           }
           form.setError("name", { message: "An error occurred. Please try again." });
        }finally{
          setLoading(false)
        }
      }
      
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-6 rounded-2xl bg-card border border-border"> 
        {
          fields.map(({name,component:Component,label,placeholder,icon:Icon}) => ( 
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base text-gray-700 font-medium">{label}</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center"> 
                        {Icon && (
                            <Icon className="absolute left-3 w-5 h-5 text-gray-400" />
                        )}
                        <Component 
                            className={`
                                text-base w-full h-10 
                                ${Component === Textarea ? "h-28 pt-3" : "h-10"} // Adjust Textarea padding for icon
                                shadow-sm border border-gray-300 rounded-md
                                focus:ring-2 focus:ring-primary focus:border-transparent // Branded focus state
                                ${Icon ? "pl-10" : "pl-4"} // Add padding if icon exists
                            `} 
                            placeholder={placeholder} 
                            {...field} 
                        />
                    </div>
                  </FormControl>
                  <FormMessage className="text-sm text-red-500 mt-1" /> 
                </FormItem>
              )}
            />
          ))
        }
        <AlertDialog open={success} onOpenChange={setSuccess}>
      <AlertDialogContent>
        <AlertDialogHeader >
          <AlertDialogTitle className="flex items-center justify-center gap-1 mb-6" >
            <CheckCircle className="w-6 h-6 text-chart-2" />Inquiry Received!!🎉
          </AlertDialogTitle>
          <AlertDialogDescription >
            Thank you for connecting with <strong>ValetRex!</strong> <br /> <br /> We're thrilled to receive your message.
            Our team will carefully review your project details and get back to you within 1-2 business days to discuss next steps.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter >
          <AlertDialogAction 
            onClick={() => setSuccess(false)}
          >
            Awesome!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        <Button disabled={loading} className="w-full md:py-6 md:text-base font-semibold" type="submit">
          {loading ? <Loader className="w-20 h-5 " /> : "Get a Free Consultation"} 
        </Button>
      </form>
    </Form>
  )
}