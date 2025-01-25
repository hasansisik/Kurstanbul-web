"use client";
import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/tables/car-tables/columns";
import { CarTable } from "@/components/tables/car-tables/car-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Car } from "@/constants/data";
import { AddCarSheet } from "@/components/sheets/add-car-sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { User, Building2, CalendarIcon } from "lucide-react";

const breadcrumbItems = [
  { title: "Anasayfa", link: "/dashboard" },
  { title: "Aday Dönem Kayıt", link: "/dashboard/candidate" },
];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: paramsProps) {
  const [filters, setFilters] = useState({
    donem: "",
    grup: "",
    sube: "",
  });

  const [showResults, setShowResults] = useState(false);
  const [paymentType, setPaymentType] = useState<"ucretli" | "ucretsiz" | null>(null);

  const handleFilter = (value: string, type: "donem" | "grup" | "sube") => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleClear = () => {
    setFilters({
      donem: "",
      grup: "",
      sube: "",
    });
    setShowResults(false);
  };

  const handleList = () => {
    if (filters.donem && filters.grup && filters.sube) {
      setShowResults(true);
    }
  };

  const handlePaymentTypeChange = (type: "ucretli" | "ucretsiz") => {
    setPaymentType(type === paymentType ? null : type);
  };

  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const offset = (page - 1) * pageLimit;

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Aday Dönem Kayıt`}
            description="Kurumunuza ait adayları kayıt etme"
          />
          <AddCarSheet />
        </div>
        
        {!showResults && (
          <div className="flex flex-col gap-4 p-4 border rounded-lg bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select onValueChange={(value) => handleFilter(value, "donem")}>
                <SelectTrigger>
                  <SelectValue placeholder="Dönem Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025 - Şubat">2025 - Şubat</SelectItem>
                  <SelectItem value="2025 - Mart">2025 - Mart</SelectItem>
                  <SelectItem value="2025 - Nisan">2025 - Nisan</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleFilter(value, "grup")}>
                <SelectTrigger>
                  <SelectValue placeholder="Grup Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Grup 1">Grup 1</SelectItem>
                  <SelectItem value="Grup 2">Grup 2</SelectItem>
                  <SelectItem value="Grup 3">Grup 3</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value) => handleFilter(value, "sube")}>
                <SelectTrigger>
                  <SelectValue placeholder="Şube Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A Şubesi">A Şubesi</SelectItem>
                  <SelectItem value="B Şubesi">B Şubesi</SelectItem>
                  <SelectItem value="C Şubesi">C Şubesi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={handleClear}>
                Temizle
              </Button>
              <Button onClick={handleList}>Listele</Button>
            </div>
          </div>
        )}

        <div className="mt-4">
          {showResults && (
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                      alt="Profil"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">Erman İkitemur</h3>
                      <p className="text-sm text-muted-foreground">
                        ikitemurerman@mybestmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <span>Temizle</span>
                    </Button>
                    <Button>Aday Ekle</Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-between">
                  <div className="flex items-center gap-8 text-sm">
                    <div>
                      <span className="text-muted-foreground">Dönem: </span>
                      <span className="font-medium">{filters.donem}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Grup: </span>
                      <span className="font-medium">{filters.grup}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Şube: </span>
                      <span className="font-medium">{filters.sube}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="ucretli" 
                          checked={paymentType === "ucretli"}
                          onCheckedChange={() => handlePaymentTypeChange("ucretli")}
                        />
                        <Label htmlFor="ucretli">Ücretli</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="ucretsiz" 
                          checked={paymentType === "ucretsiz"}
                          onCheckedChange={() => handlePaymentTypeChange("ucretsiz")}
                        />
                        <Label htmlFor="ucretsiz">Ücretsiz</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Aday Kimlik Bilgileri
                      </CardTitle>
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <Label>T.C. Kimlik No</Label>
                      <Input placeholder="T.C. Kimlik No giriniz" />
                    </div>
                    <div className="space-y-2">
                      <Label>Doğum Tarihi</Label>
                      <div className="relative">
                        <Input type="date" className="pl-10" />
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Seri No</Label>
                      <Input placeholder="Seri no giriniz" />
                    </div>
                    <div className="space-y-2">
                      <Label>Adı Soyadı</Label>
                      <Input placeholder="Adı soyadı giriniz" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="border-b">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Dönem Bilgileri</CardTitle>
                      <Building2 className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <Label>Mevcut Sürücü Belgesi Sınıfı</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sınıf seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sinif-a">A Sınıfı</SelectItem>
                          <SelectItem value="sinif-b">B Sınıfı</SelectItem>
                          <SelectItem value="sinif-c">C Sınıfı</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Mevcut Sürücü Belge No</Label>
                      <Input placeholder="Belge no giriniz" />
                    </div>
                    <div className="space-y-2">
                      <Label>İstenilen Sürücü Belgesi Sınıfı</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sınıf seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sinif-a">A Sınıfı</SelectItem>
                          <SelectItem value="sinif-b">B Sınıfı</SelectItem>
                          <SelectItem value="sinif-c">C Sınıfı</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Cep Telefon Numarası</Label>
                      <Input placeholder="Telefon numarası giriniz" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
