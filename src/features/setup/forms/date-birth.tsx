import { useForm } from "react-hook-form";
import { dateBirthSchema } from "../validation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Field } from "../components";

interface Props {
  onSubmitCallback?: (values: yup.InferType<typeof dateBirthSchema>) => void;
  prev?: () => void;
}

export const DateBirthForm: React.FC<Props> = ({ onSubmitCallback, prev }) => {
  const form = useForm<yup.InferType<typeof dateBirthSchema>>({
    resolver: yupResolver(dateBirthSchema),
    defaultValues: { date_birth: undefined },
  });
  const onSubmit = React.useCallback(
    (values: yup.InferType<typeof dateBirthSchema>) =>
      onSubmitCallback && onSubmitCallback(values),
    [onSubmitCallback, form]
  );
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] flex flex-col gap-4"
      >
        <Field
          control={form}
          type="date"
          name="date_birth"
          placeholder="Date of birth"
          label="Date of birth"
          displayErrorMessage
        />
        <div className="flex w-full gap-2">
          <Button className="flex-1" size={"lg"} onClick={prev} type="button">
            Prev
          </Button>
          <Button className="flex-1" size={"lg"} type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};
