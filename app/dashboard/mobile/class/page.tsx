"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import PageContainer from "@/components/layout/page-container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

const breadcrumbItems = [
  { title: "Anasayfa", link: "/dashboard" },
  { title: "Kanban", link: "/dashboard/kanban" },
];

const formSchema = z.object({
  emails: z.array(
    z.object({
      value: z
        .string()
        .email({ message: "Lütfen geçerli bir mail adresi girin." }),
    })
  ),
});

type FormValues = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ value: "" }],
    },
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "emails",
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Uygulama Ders Kayıt`}
            description="Adaylarınızı mail adreslerini ekleyerek ücretsiz şekilde uygulama üzerinden ders ve sınavlardan yararlanabilirler."
          />
          <Button type="submit" size="sm" onClick={() => append({ value: "" })}>
            ＋ Kaydet
          </Button>{" "}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center space-x-2">
              {fields.map((field, index) => (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`emails.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="E-posta adresi girin" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => append({ value: "" })}
              >
                Mail Ekle
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </PageContainer>
  );
}
