"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd,Car } from "lucide-react";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Geçerli bir email adresi girin"),
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
    console.log("Şifre sıfırlama emaili gönderildi!", data);
    router.push("/auth/login");
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple text-primary-foreground">
              <Car className="size-4" />
            </div>
            Kurstanbul.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-bold tracking-tight">Şifremi Unuttum</h1>
              <p className="text-sm text-muted-foreground">
                Şifre sıfırlama bağlantısı için email adresinizi girin
              </p>
            </div>
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
                      <FormDescription>
                        Kayıtlı email adresinizi girin
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Şifre Sıfırlama Bağlantısı Gönder</Button>
              </form>
            </Form>
            <div className="flex items-center justify-center pb-5">
              <p className="text-sm">
                Giriş yapmak için{" "}
                <a href="/auth/login" className="text-primary font-bold">
                  tıklayın
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/auth-b-3.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
