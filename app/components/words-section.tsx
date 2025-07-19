import { Button } from "~/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function WordsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Visi & Misi Yayasan REJIS dalam membentuk generasi Islami yang
            unggul dan berakhlak mulia.
          </h2>
          <div className="space-y-6">
            <p>
              Menjadi Lembaga Dakwah dan Pendidikan Islam terkemuka dan modern dalam 
              mencerahkan dan mencerdaskan kehidupan bangsa guna membentuk masyarakat 
              Indonesia yang beriman, berilmu, beramal, dan bertaqwa menuju izzul Islam wal muslimin.
            </p>
            <p>
              REJIS.{" "}
              <span className="font-bold">Mengawal dan membela aqidah Islamiyah</span>{" "}
              berdasarkan Al-Qur'an dan Sunnah Rasul serta menegakkan nilai-nilai 
              kemanusiaan sesuai ajaran Islam demi kesejahteraan umat dan bangsa 
              lahir dan batin.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link to="/tentang">
                <span>Pelajari Lebih Lanjut</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
