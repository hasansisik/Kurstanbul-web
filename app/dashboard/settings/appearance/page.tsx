import { Separator } from "@/components/ui/separator"
import { AppearanceForm } from "./appearance-form"

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Görünüm</h3>
        <p className="text-sm text-muted-foreground">
        Tema,Karanlık veya aydınlık tema seçin,metinleri daha rahat okuyabilmek için yazı boyutunu ayarlayın.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
