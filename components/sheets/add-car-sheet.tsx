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

export function AddCarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Araç Ekle
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Yeni Araç Ekle</SheetTitle>
          <SheetDescription>
            Araç bilgilerini girerek yeni bir araç ekleyebilirsiniz.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Marka
            </Label>
            <Input id="brand" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model" className="text-right">
              Model
            </Label>
            <Input id="model" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="plate" className="text-right">
              Plaka
            </Label>
            <Input id="plate" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Kaydet</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
