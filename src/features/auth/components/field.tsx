import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import React, { HTMLInputTypeAttribute } from "react";
import { UseFormReturn } from "react-hook-form";

interface Props {
  control: UseFormReturn<any>;
  name: string;
  label?: string;
  description?: string;
  displayErrorMessage?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export const Field: React.FC<Props> = ({
  control,
  name,
  label,
  description,
  displayErrorMessage,
  placeholder,
  type = "text",
}) => {
  return (
    <FormField
      control={control.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {type === "password" ? (
              <PasswordInput
                placeholder={placeholder}
                {...field}
                className="w-full"
              />
            ) : (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                className="w-full"
              />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {displayErrorMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
