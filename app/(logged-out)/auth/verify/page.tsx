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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  verificationCode: z.string(),
});

export default function AuthenticationPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { verificationCode: "" },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Giriş Başarılı!", data);
    router.push("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Email Doğrula</h1>
        <p className="text-sm text-muted-foreground">
          Maili doğrulamak için bilgileri girin.
        </p>
      </div>
      <div>
        <Form {...form}>
          <form
            className="flex flex-col gap-4 pb-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="verificationCode"
              render={({ field }) => (
                <div className="flex justify-center">
                  <FormItem>
                    <FormLabel>Doğrulama Kodu</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        onChange={(value) => field.onChange(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>Doğrulama Kodu girin</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <Button type="submit">Email Doğrula</Button>
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
