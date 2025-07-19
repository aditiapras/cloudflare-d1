export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            REJIS dalam Angka
          </h2>
          <p>
            Prestasi dan pencapaian Yayasan REJIS dalam mengembangkan pendidikan 
            Islam berkualitas dan membentuk generasi yang beriman, berilmu, 
            dan berakhlak mulia.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">1500+</div>
            <p>Siswa Aktif</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">25+</div>
            <p>Tahun Berpengalaman</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">95%</div>
            <p>Tingkat Kelulusan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
