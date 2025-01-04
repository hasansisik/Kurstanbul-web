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
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .refine((password) => {
        return /^(?=.*[!@#$%^&*.])(?=.*[A-Z]).*$/.test(password);
      }, "Şifre en az bir büyük harf ve bir özel karakter içermelidir"),
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Şifreler eşleşmiyor",
      });
    }
  });

export default function ResetPasswordPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Şifre başarıyla değiştirildi!", data);
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
              <h1 className="text-2xl font-bold tracking-tight">Şifre Sıfırlama</h1>
              <p className="text-sm text-muted-foreground">
                Yeni şifrenizi belirleyin
              </p>
            </div>
            <Form {...form}>
              <form
                className="flex flex-col gap-4 pb-5"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                {/* Password Input */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Yeni Şifre</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="●●●●●●●●" {...field} />
                      </FormControl>
                      <FormDescription>
                        Yeni şifrenizi girin
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Password Confirm Input */}
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Şifre Tekrar</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="●●●●●●●●" {...field} />
                      </FormControl>
                      <FormDescription>
                        Yeni şifrenizi tekrar girin
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Şifreyi Değiştir</Button>
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
