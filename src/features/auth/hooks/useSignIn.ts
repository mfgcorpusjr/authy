import { useTransition } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import signInSchema from "@/features/auth/schemas/signInSchema";

type FormData = z.infer<typeof signInSchema>;

const useSignIn = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const signIn = (formData: FormData) => {
    console.log(formData);
  };

  return {
    form,
    signIn,
    isPending,
  };
};

export default useSignIn;
