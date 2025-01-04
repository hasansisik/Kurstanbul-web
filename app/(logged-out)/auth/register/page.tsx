"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  PersonStandingIcon,
  GalleryVerticalEnd,
  Car,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { PasswordInput } from "@/components/ui/password-input";
import { useRouter } from "next/navigation";

const accountTypeSchema = z.object({
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  companyAdress: z.string().optional(),
  companyNumber: z.string().optional(),
  acceptTerms: z
    .boolean({
      required_error: "You must accept the terms and conditions",
    })
    .refine((checked) => checked, "You must accept the terms and conditions"),
});

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .refine((password) => {
        // At least one uppercase letter and one special character
        return /^(?=.*[!@#$%^&*.])(?=.*[A-Z]).*$/.test(password);
      }, "Password must contain at least one uppercase letter and one special character"),
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["passwordConfirm"],
        message: "Passwords do not match",
      });
    }
  });

const baseSchema = z.object({
  email: z.string().email(),
});

const formSchema = baseSchema.and(accountTypeSchema).and(passwordSchema);

export default function RegisterPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      companyName: "",
      companyAdress: "",
      companyNumber: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Giriş Başarılı!", data);
    router.push("/dashboard");
  };

  const accountType = form.watch("accountType");
  const dobFromDate = new Date();
  dobFromDate.setFullYear(dobFromDate.getFullYear() - 100);

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
              <h1 className="text-2xl font-bold tracking-tight">Kayıt Ol</h1>
              <p className="text-sm text-muted-foreground">
                Hesabınızı oluşturmak için bilgilerinizi girin
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sürücü Kursu İsmi</FormLabel>
                      <FormControl>
                        <Input placeholder="Sürücü Kursu İsmi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Company Adress */}
                <FormField
                  control={form.control}
                  name="companyAdress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sürücü Kursu Adres</FormLabel>
                      <FormControl>
                        <Input placeholder="Sürücü Kursu Adresi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Company Adress */}
                <FormField
                  control={form.control}
                  name="companyNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sürücü Kursu Adres</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefon Numarası" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Password Input */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Şifre</FormLabel>
                      <FormControl>
                        <PasswordInput placeholder="●●●●●●●●" {...field} />
                      </FormControl>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Accept Terms Input */}
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-2 items-center">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Sürücü Kursu Anlaşması</FormLabel>
                      </div>
                      <FormDescription>
                        Kullanım Koşulları {""}
                        <Link
                          href="/terms"
                          className="text-primary hover:underline"
                        >
                          Şartlar ve Koşullar{" "}
                        </Link>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Kayıt Ol</Button>
              </form>
            </Form>
            <div className="flex items-center justify-center">
              <p className="text-sm">
                Zaten hesabınız var mı?{" "}
                <a href="/auth/login" className="text-primary font-bold">
                  Giriş Yap
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
