import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { ChevronRight, Calendar, User } from "lucide-react";
import { Link } from "react-router";

// Data berita sekolah untuk simulasi API
const mockBlogPosts = [
  {
    id: 1,
    title: "Penerimaan Peserta Didik Baru 2025/2026",
    excerpt:
      "Informasi lengkap mengenai pendaftaran siswa baru untuk tahun ajaran 2025/2026 di semua jenjang pendidikan REJIS.",
    author: "Administrator",
    date: "2024-11-15",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "PPDB",
    readTime: "5 menit baca",
  },
  {
    id: 2,
    title: "Kegiatan Pembelajaran Tahfidz Al-Quran",
    excerpt:
      "Program unggulan REJIS dalam membentuk generasi penghafal Al-Quran dengan metode pembelajaran yang menyenangkan.",
    author: "Tim Tahfidz",
    date: "2024-11-10",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Akademik",
    readTime: "8 menit baca",
  },
  {
    id: 3,
    title: "Prestasi Siswa SMPI REJIS di Olimpiade Sains",
    excerpt:
      "Siswa SMPI REJIS meraih juara dalam kompetisi olimpiade sains tingkat kabupaten dengan prestasi yang membanggakan.",
    author: "Humas REJIS",
    date: "2024-11-05",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Prestasi",
    readTime: "6 menit baca",
  },
  {
    id: 4,
    title: "Program Ekstrakurikuler Unggulan",
    excerpt:
      "Beragam kegiatan ekstrakurikuler yang mengembangkan bakat dan minat siswa dalam bidang olahraga, seni, dan sains.",
    author: "Koordinator Ekskul",
    date: "2024-10-28",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Ekstrakurikuler",
    readTime: "7 menit baca",
  },
  {
    id: 5,
    title: "Fasilitas Pembelajaran Modern",
    excerpt:
      "REJIS dilengkapi dengan fasilitas pembelajaran modern termasuk laboratorium komputer, perpustakaan digital, dan ruang multimedia.",
    author: "Tim Fasilitas",
    date: "2024-10-20",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Fasilitas",
    readTime: "5 menit baca",
  },
  {
    id: 6,
    title: "Kegiatan Bakti Sosial Ramadhan",
    excerpt:
      "Program bakti sosial siswa REJIS dalam menyambut bulan suci Ramadhan dengan berbagi kepada masyarakat sekitar.",
    author: "OSIS REJIS",
    date: "2024-10-15",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Kegiatan",
    readTime: "4 menit baca",
  },
  {
    id: 7,
    title: "Workshop Parenting untuk Orang Tua",
    excerpt:
      "Program workshop parenting yang menghadirkan pakar pendidikan untuk membantu orang tua dalam mendidik anak di era digital.",
    author: "Komite Sekolah",
    date: "2024-10-08",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Workshop",
    readTime: "6 menit baca",
  },
  {
    id: 8,
    title: "Kunjungan Industri Siswa SMAI REJIS",
    excerpt:
      "Kegiatan kunjungan industri untuk memberikan wawasan dunia kerja dan mempersiapkan siswa menghadapi tantangan masa depan.",
    author: "Guru Pembimbing",
    date: "2024-09-25",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    category: "Kunjungan",
    readTime: "8 menit baca",
  },
];

export default function BlogSection() {
  // Get featured posts (first 2) and regular posts
  const featuredPosts = mockBlogPosts.slice(0, 2);
  const regularPosts = mockBlogPosts.slice(2, 8);

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Berita & Kegiatan Terbaru REJIS
          </h2>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group relative block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"
                } overflow-hidden`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {post.category.toUpperCase()}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="mb-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    updated on{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group block transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="space-y-3">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-white/20 backdrop-blur-sm px-2 py-1 text-xs font-medium text-white">
                      {post.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    updated on{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    on{" "}
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full bg-teal-100 border-teal-200 text-teal-700 hover:bg-teal-200 px-8"
          >
            <Link to="/berita">Lihat Semua Berita</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
