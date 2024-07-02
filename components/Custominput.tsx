import React from 'react'
import { Input } from "./ui/input";
import {
  FormControl ,FormField,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Control, FieldPath, Form } from 'react-hook-form';
import {z} from 'zod'
import { authFormSchema } from '@/lib/utils';
interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string
}
const Custominput = ({control , name , label , placeholder}
    :CustomInput) => {
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
             <div className="form-item">
               <FormLabel  className="form-label">
                {label}
               </FormLabel>
               <div className="flex w-full flex-col">
                <FormControl>
                    <Input placeholder={placeholder}
                    className="input-class"{...field}/>
                </FormControl>
                <FormMessage className = "form-message mt-2" />
               </div>
             </div>
          )}
        />
  )
}

export default Custominput