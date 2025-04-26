import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { thumbSchema } from "../validation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image } from "lucide-react";
import * as yup from "yup";

interface Props {
  onSubmitCallback?: (values: yup.InferType<typeof thumbSchema>) => void;
}

export const ThumbForm: React.FC<Props> = ({ onSubmitCallback }) => {
  const form = useForm<yup.InferType<typeof thumbSchema>>({
    resolver: yupResolver(thumbSchema),
    defaultValues: { thumb: [] },
  });
  const onSubmit = React.useCallback(
    (values: yup.InferType<typeof thumbSchema>) =>
      onSubmitCallback && onSubmitCallback(values),
    [onSubmitCallback, form]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="thumb"
          render={({ field }) => (
            <FormItem className="w-full flex justify-center items-center flex-col">
              <FormLabel>Upload Profile Picture</FormLabel>
              <FormControl className="w-fit">
                <FileUpload
                  className="w-fit"
                  value={field.value}
                  onValueChange={(file) => {
                    field.onChange([file[file.length - 1]]);
                  }}
                  accept="image/*"
                >
                  <FileUploadDropzone className="border-none">
                    <FileUploadTrigger asChild>
                      {field.value?.at(0) ? (
                        <Avatar className="size-36 border shadow-2xl shadow-foreground/50">
                          <AvatarImage
                            src={URL.createObjectURL(
                              field.value?.at(0) as File
                            )}
                            className="aspect-square object-cover object-center"
                            alt={field.value[0].name}
                          />
                          <AvatarFallback className="flex justify-center items-center">
                            <Image className="size-14 text-foreground" />
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar className="size-36 border ">
                          <AvatarFallback className="flex justify-center items-center">
                            <Image className="size-14 text-foreground" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </FileUploadTrigger>
                  </FileUploadDropzone>
                </FileUpload>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" size={"lg"} type="submit">
          Next
        </Button>
      </form>
    </Form>
  );
};
