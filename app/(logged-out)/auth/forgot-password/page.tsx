"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordPage() {
  const router = useRouter();
   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       email: "",
     },
   });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Giriş Başarılı!", data);
    router.push("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Şifremi Unuttum</h1>
        <p className="text-sm text-muted-foreground">
          Şifrenizi sıfırlamak için mail adresinizi girin.
        </p>
      </div>
      <div>
        <Form {...form}>
          <form
            className="flex flex-col gap-4 pb-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="ornek@hotmail.com" {...field} />
                  </FormControl>
                  <FormDescription>Email adresinizi girin</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Şifremi Sıfırla</Button>
          </form>
        </Form>
        <div className="flex items-center justify-center pb-5">
          <p className="text-sm">
            Hesabınız yok mu?{" "}
            <a href="/auth/register" className="text-primary font-bold">
              Kayıt Ol
            </a>
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              VEYA devam etmek için
            </span>
          </div>
        </div>
      </div>
    </>
  );
}