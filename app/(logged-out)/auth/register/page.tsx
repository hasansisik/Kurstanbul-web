"use client";

import { Button } from "@/components/ui/button";
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
import { PasswordInput } from "@/components/ui/password-input";
import { useEffect, useState } from "react";
import { Car } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { register } from "@/redux/actions/courseActions";
import { Checkbox } from "@/components/ui/checkbox";

const passwordSchema = z
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
        message: "Parolalar uyuşmuyor",
      });
    }
  });

const baseSchema = z.object({
  courseEmail: z.string().email("Geçerli bir email girin"),
  companyName: z.string().min(1, "Sürücü kursu ismi zorunludur"),
  companyAdress: z.string().min(1, "Sürücü kursu adresi zorunludur"),
  companyNumber: z.string().min(1, "Sürücü kursu telefonu zorunludur"),
  acceptTerms: z
    .boolean()
    .refine((checked) => checked, "Kullanım koşullarını kabul etmelisiniz"),
});

const formSchema = baseSchema.and(passwordSchema);

export default function RegisterPage() {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const className = document.body.className;
    setIsDarkMode(className.includes("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const className = document.body.className;
          setIsDarkMode(className.includes("dark"));
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseEmail: "",
      companyName: "",
      companyAdress: "",
      companyNumber: "",
      password: "",
      passwordConfirm: "",
      acceptTerms: false,
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const registerData = {
        courseName: data.companyName,
        courseEmail: data.courseEmail,
        courseAdress: data.companyAdress,
        courseTel: data.companyNumber,
        password: data.password,
      };

      const actionResult = await dispatch(register(registerData));
      
      if (register.fulfilled.match(actionResult)) {
        toast({
          title: "Kayıt Başarılı",
          description: "Email doğrulama sayfasına yönlendiriliyorsunuz.",
        });
        router.push(`/auth/verify?courseEmail=${encodeURIComponent(data.courseEmail)}`);
      } else {
        toast({
          title: "Kayıt Başarısız",
          description: actionResult.payload as string,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Kayıt Başarısız",
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
          <div className="w-full max-w-md ">
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
                <FormField
                  control={form.control}
                  name="courseEmail"
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
                <FormField
                  control={form.control}
                  name="companyNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sürücü Kursu Telefon</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefon Numarası" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                        <Link href="/terms" className="text-primary underline">
                          Şartlar ve Koşullar
                        </Link>
                      </div>
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
                <Link href="/auth/login" className="text-primary font-bold">
                  Giriş Yap
                </Link>
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
