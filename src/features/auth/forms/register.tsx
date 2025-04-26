import { Form } from "@/components/ui/form";
import React from "react";
import { Field } from "../components";
import { Button } from "@/components/ui/button";
import { useRegister } from "../hooks";
import { Spinner } from "@/components/ui/spinner";

interface Props {}

export const RegisterForm: React.FC<Props> = ({}) => {
  const { form, onSubmit, isLoading } = useRegister();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] flex flex-col gap-4"
      >
        <Field
          control={form}
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          displayErrorMessage
        />
        <Field
          control={form}
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          displayErrorMessage
        />
        <Field
          control={form}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          displayErrorMessage
        />
        <Button
          disabled={isLoading}
          type="submit"
          size={"lg"}
          className="w-full"
        >
          {isLoading ? (
            <Spinner size={"small"} className="text-background" />
          ) : (
            `Sign Up`
          )}
        </Button>
      </form>
    </Form>
  );
};
