import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Hesap</h3>
        <p className="text-sm text-muted-foreground">
        Hesabınızı kişiselleştirmek için e-posta adresinizi güncelleyebilir, şifrenizi değiştirebilir ve tercih ettiğiniz dili seçebilirsiniz.
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
