"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
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
import { useAppDispatch } from "@/redux/hook";
import { login } from "@/redux/actions/companyActions";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((password) => {
      // At least one uppercase letter and one special character
      return /^(?=.*[!@#$%^&*.])(?=.*[A-Z]).*$/.test(password);
    }, "Password must contain at least one uppercase letter and one special character"),
});

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const loginData = {
        courseEmail: data.email,
        password: data.password,
      };

      const actionResult = await dispatch(login(loginData));

      if (login.fulfilled.match(actionResult)) {
        toast({
          title: "Giriş Başarılı",
          description: "Dashboard sayfasına yönlendiriliyorsunuz.",
        });
        router.push("/dashboard");
      } else {
        toast({
          title: "Giriş Başarısız",
          description: actionResult.payload as string,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Giriş Başarısız",
        description: error.message,
        variant: "destructive",
      });
    }
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
              <h1 className="text-2xl font-bold tracking-tight">Giriş Yap</h1>
              <p className="text-sm text-muted-foreground">
                Hesabınıza erişmek için email ve şifrenizi girin
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
                      <FormDescription>Email adresinizi girin</FormDescription>
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
                      <div className="flex items-center">
                        <FormLabel>Şifre</FormLabel>
                        <a
                          href="/auth/forgot-password"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                         Şifremi Unuttum?
                        </a>
                      </div>
                      <FormControl>
                        <PasswordInput placeholder="●●●●●●●●" {...field} />
                      </FormControl>
                      <FormDescription>Şifrenizi girin</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Giriş Yap</Button>
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
