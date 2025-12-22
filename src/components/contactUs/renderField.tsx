import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "../ui";
interface FieldConfig {
    name: "name" | "email" | "phone" | "projectType" | "description";
    label: string;
    placeholder: string;
    type: "input" | "textarea" | "select";
    icon?: React.ElementType; 
    options?: string[];
}

export default function RenderField({ field, form }: { field: FieldConfig, form: any }) {
    return (
        <FormField
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
            <FormItem>
                <FormLabel className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    {field.label}
                </FormLabel>
                
                {field.type === "select" ? (
                     <Select value={formField.value} onValueChange={formField.onChange} defaultValue={formField.value}>
                        <FormControl>
                            <div className="relative flex items-center group">
                                {field.icon && (
                                    <field.icon className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10 pointer-events-none" />
                                )}
                                <SelectTrigger 
                                    className="py-6 w-full bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-xl pl-12 text-base text-slate-700 shadow-none data-[placeholder]:text-slate-400"
                                >
                                    <SelectValue placeholder={field.placeholder} />
                                </SelectTrigger>
                            </div>
                        </FormControl>
                        <SelectContent className="bg-white border-slate-100 rounded-xl shadow-xl">
                            {field.options?.map((opt) => (
                                <SelectItem 
                                    key={opt} 
                                    value={opt}
                                    className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 py-3 text-slate-700"
                                >
                                    {opt}
                                </SelectItem>
                            ))}
                        </SelectContent>
                     </Select>
                ) : (
                    <FormControl>
                        <div className="relative flex items-center group"> 
                            {field.icon && (
                                <field.icon className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
                            )}
                            
                            {field.type === "textarea" ? (
                                <Textarea 
                                    className="min-h-[120px] w-full bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl pl-12 py-3 text-base resize-none transition-all placeholder:text-slate-400 shadow-none"
                                    placeholder={field.placeholder}
                                    {...formField}
                                />
                            ) : (
                                <Input 
                                    className="h-12 w-full bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl pl-12 text-base transition-all placeholder:text-slate-400 shadow-none"
                                    placeholder={field.placeholder}
                                    {...formField}
                                />
                            )}
                        </div>
                    </FormControl>
                )}
                
                <FormMessage className="text-xs font-medium text-red-500 ml-1" /> 
            </FormItem>
            )}
        />
    )
}