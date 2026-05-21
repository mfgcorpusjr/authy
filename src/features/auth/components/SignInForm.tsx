"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import FormInput from "@/components/forms/FormInput";

import useSignIn from "@/features/auth/hooks/useSignIn";

export default function SignInForm() {
  const { form, signIn, isPending } = useSignIn();

  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>

        <CardDescription>Please sign in to access your account</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(signIn)}
        >
          <FormInput
            name="username"
            control={form.control}
            placeholder="Username"
          />

          <FormInput
            type="password"
            name="password"
            control={form.control}
            placeholder="Password"
          />

          <Button disabled={isPending}>
            {isPending && <Spinner data-icon="inline-start" />}
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
