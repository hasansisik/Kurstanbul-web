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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AddClassSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Sınıf Ekle
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Yeni Sınıf Ekle</SheetTitle>
          <SheetDescription>
            Sınıf bilgilerini girerek yeni bir sınıf ekleyebilirsiniz.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="classType" className="text-right">
              Ders Tipi
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Ders tipi seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trafficEnvironment">Trafik ve Çevre Bilgisi</SelectItem>
                <SelectItem value="firstAid">İlk Yardım</SelectItem>
                <SelectItem value="vehicleTechnique">Araç Tekniği</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="className" className="text-right">
              Sınıf Adı
            </Label>
            <Input id="className" className="col-span-3" placeholder="Örn: Derslik-1" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="roomQuota" className="text-right">
              Kontenjan
            </Label>
            <Input 
              id="roomQuota" 
              className="col-span-3" 
              type="number" 
              placeholder="Örn: 15"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="registerDate" className="text-right">
              Kayıt Tarihi
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start text-left font-normal",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Tarih seçin</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="classStatus" className="text-right">
              Sınıf Durumu
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Sınıf durumu seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="inactive">İnaktif</SelectItem>
                <SelectItem value="maintenance">Bakımda</SelectItem>
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
