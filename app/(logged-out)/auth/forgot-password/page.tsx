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
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { forgotPassword } from "@/redux/actions/courseActions";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  courseEmail: z.string().email("Geçerli bir email adresi girin"),
});

export default function ForgotPasswordPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseEmail: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const actionResult = await dispatch(forgotPassword(data.courseEmail));

      if (forgotPassword.fulfilled.match(actionResult)) {
        toast({
          title: "Başarılı",
          description: "Şifre sıfırlama emaili gönderildi.",
        });
        router.push(`/auth/reset-password?courseEmail=${encodeURIComponent(data.courseEmail)}`);
      } else {
        toast({
          title: "Başarısız",
          description: actionResult.payload as string,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      toast({
        title: "Başarısız",
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
                  name="courseEmail"
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
