import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "~/components/magicui/border-beam";

export default function FeaturesSection() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Program Tahfidz Al-Quran",
    },
    "item-2": {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Kurikulum Terintegrasi",
    },
    "item-3": {
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Pembinaan Karakter",
    },
    "item-4": {
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Pengembangan Bakat",
    },
  };

  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Program Unggulan REJIS
          </h2>
          <p>
            REJIS menghadirkan berbagai program pendidikan yang mengintegrasikan 
            kurikulum nasional dengan nilai-nilai Islam untuk membentuk generasi 
            yang beriman, berilmu, dan berakhlak mulia.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <BookOpen className="size-4" />
                  Program Tahfidz Al-Quran
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Program unggulan REJIS dalam membentuk generasi penghafal Al-Quran 
                dengan metode pembelajaran yang menyenangkan dan efektif, didukung 
                oleh ustadz dan ustadzah yang berpengalaman.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <GraduationCap className="size-4" />
                  Kurikulum Terintegrasi
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Menggabungkan kurikulum Diknas dengan kurikulum pesantren untuk 
                menghasilkan lulusan yang unggul dalam akademik dan kuat dalam 
                pondasi keagamaan sesuai Ahlussunnah Wal Jama'ah.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Users className="size-4" />
                  Pembinaan Karakter
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Program pembinaan akhlak dan karakter Islami yang komprehensif 
                untuk membentuk siswa yang tidak hanya cerdas secara intelektual 
                tetapi juga memiliki kepribadian yang mulia dan berakhlak karimah.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Award className="size-4" />
                  Pengembangan Bakat
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Beragam kegiatan ekstrakurikuler dan program pengembangan bakat 
                dalam bidang sains, olahraga, seni, dan teknologi untuk 
                mengoptimalkan potensi setiap siswa sesuai minat dan bakatnya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <img
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
