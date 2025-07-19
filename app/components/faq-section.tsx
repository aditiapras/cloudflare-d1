export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Pertanyaan <br className="hidden lg:block" /> Yang Sering{" "}
              <br className="hidden lg:block" />
              Ditanyakan
            </h2>
            <p>
              Temukan jawaban untuk pertanyaan umum seputar pendaftaran dan
              program pendidikan di REJIS.
            </p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">
                Bagaimana cara mendaftar di REJIS?
              </h3>
              <p className="text-muted-foreground mt-4">
                Pendaftaran dapat dilakukan secara online melalui website resmi
                atau datang langsung ke sekolah. Proses pendaftaran dibuka
                setiap tahun untuk tahun ajaran baru.
              </p>

              <ol className="list-outside list-decimal space-y-2 pl-4">
                <li className="text-muted-foreground mt-4">
                  Kunjungi website ppdb.yayasanrejis.sch.id untuk pendaftaran
                  online atau datang langsung ke kampus.
                </li>
                <li className="text-muted-foreground mt-4">
                  Lengkapi formulir pendaftaran dan siapkan dokumen yang
                  diperlukan.
                </li>
                <li className="text-muted-foreground mt-4">
                  Ikuti tes seleksi dan wawancara sesuai jadwal yang telah
                  ditentukan.
                </li>
              </ol>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                Apa saja jenjang pendidikan yang tersedia?
              </h3>
              <p className="text-muted-foreground mt-4">
                REJIS menyediakan jenjang pendidikan lengkap mulai dari KB/TK,
                SD Islam Terpadu (SDIT), SMP Islam (SMPI), hingga SMA Islam
                (SMAI) dengan kurikulum terintegrasi.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                Apa keunggulan program Tahfidz di REJIS?
              </h3>
              <p className="text-muted-foreground my-4">
                Program Tahfidz Al-Quran adalah program unggulan REJIS dengan
                metode pembelajaran yang efektif dan menyenangkan, dibimbing
                oleh ustadz dan ustadzah berpengalaman.
              </p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">
                  Metode pembelajaran yang disesuaikan dengan kemampuan dan usia
                  siswa untuk hasil optimal.
                </li>
                <li className="text-muted-foreground">
                  Target hafalan yang jelas dengan sistem evaluasi berkala untuk
                  memantau perkembangan siswa.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                Bagaimana cara menghubungi pihak sekolah?
              </h3>
              <p className="text-muted-foreground mt-4">
                Anda dapat menghubungi kami melalui WhatsApp di berbagai nomor
                sesuai jenjang pendidikan, atau datang langsung ke kampus untuk
                konsultasi dan informasi lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
