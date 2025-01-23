import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddPersonSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Personel Ekle
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Yeni Personel Ekle</SheetTitle>
          <SheetDescription>
            Personel bilgilerini girerek yeni bir personel ekleyebilirsiniz.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="personName" className="text-right">
              Ad Soyad
            </Label>
            <Input 
              id="personName" 
              className="col-span-3" 
              placeholder="Örn: Erman İkitemur"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="personAge" className="text-right">
              Yaş
            </Label>
            <Input 
              id="personAge" 
              className="col-span-3" 
              type="number"
              placeholder="Örn: 27"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="experienceYear" className="text-right">
              Deneyim Yılı
            </Label>
            <Input 
              id="experienceYear" 
              className="col-span-3" 
              type="number"
              placeholder="Örn: 8"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="licanceClass" className="text-right">
              Ehliyet Sınıfı
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Ehliyet sınıfı seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="B,A1">B,A1</SelectItem>
                <SelectItem value="B,A2">B,A2</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
                <SelectItem value="E">E</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="personStatus" className="text-right">
              Personel Durumu
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Personel durumu seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="inactive">İnaktif</SelectItem>
                <SelectItem value="onLeave">İzinli</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Kaydet</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
