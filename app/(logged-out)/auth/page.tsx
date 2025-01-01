import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h3 className="flex items-center">
        Hoşgeldiniz Sitemize !
      </h3>
      <div className="flex gap-3 items-center">
        <Button asChild>
          <Link href="/login">Giriş Yap</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Kayıt Ol</Link>
        </Button>
      </div>
    </div>
  );
}
