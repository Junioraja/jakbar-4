# 🏮 Museum Hidup Jakarta Barat

<div align="center">

![Jakarta Barat Heritage](https://img.shields.io/badge/Heritage-Jakarta%20Barat-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

**Jelajahi Warisan Budaya, Kuliner Legendaris, dan Kisah Akulturasi di Glodok**

[🚀 Demo](#) • [📖 Dokumentasi](#dokumentasi) • [🎨 Fitur](#-fitur-utama) • [💻 Instalasi](#-instalasi)

</div>

---

## � Tentang Proyek

**Museum Hidup Jakarta Barat** adalah platform digital interaktif yang mengajak Anda menjelajahi Glodok dan kawasan Jakarta Barat bukan sekadar sebagai tempat wisata kuliner, tetapi sebagai **museum yang hidup** - tempat di mana sejarah, budaya, dan tradisi masih bernapas di setiap sudutnya.

### 🎯 Misi Kami

- **🏛️ Melestarikan Warisan Budaya** - Mendokumentasikan dan mempromosikan warisan budaya Tionghoa-Indonesia
- **� Mengangkat Kuliner Legendaris** - Memperkenalkan kuliner turun-temurun yang penuh cerita
- **🤝 Merayakan Toleransi** - Menampilkan harmoni dan akulturasi budaya yang indah
- **📚 Edukasi Interaktif** - Memberikan pengalaman belajar yang menyenangkan tentang sejarah lokal

---

## ✨ Fitur Utama

### 🏛️ **Museum Hidup**
Konsep unik yang menghadirkan Glodok sebagai museum terbuka dengan:
- **Akulturasi Budaya** - Kisah perpaduan kuliner Tionghoa dan rempah Nusantara
- **Toleransi & Harmoni** - Cerita kerukunan antar budaya dan agama
- **Arsitektur Bersejarah** - Eksplorasi bangunan kolonial dan gaya Indische

### 📜 **Jejak Masa Lalu**
Timeline interaktif sejarah Glodok dari tahun 1610 hingga era modern:
- Timeline visual dengan animasi smooth
- Fakta-fakta unik tentang Glodok
- Profil arsitektur khas Tionghoa-Belanda

### 🍜 **Peta Rasa Kuliner**
Katalog lengkap kuliner legendaris dengan:
- **Kuliner Halal** - Cempedak Goreng, Gado-Gado Direksi, Rujak Shanghai, Kopi Es Tak Kie
- **The Old Masters** - Kuliner non-halal turun-temurun 3-4 generasi
- Rating, harga, lokasi, dan cerita di balik setiap hidangan
- Fitur favorit untuk menyimpan kuliner pilihan

### 👥 **Wajah Jakarta**
Profil pedagang legendaris dengan:
- Kisah hidup dan dedikasi mereka
- Quote inspiratif tentang warisan budaya
- Foto dan informasi toko mereka

### �️ **Panduan Jelajah**
Rute jalan kaki yang telah dirancang:
- **Heritage Walk (1 jam)** - Fokus arsitektur dan sejarah
- **Culinary Adventure (2 jam)** - Wisata kuliner lengkap
- Informasi transportasi (TransJakarta, KRL, Ojol, Mobil Pribadi)

### 📖 **Kamus Budaya**
Glosarium istilah budaya Tionghoa-Indonesia:
- Ciam Si, Pecinan, Cap Go Meh, Sekba, dan lainnya
- Penjelasan konteks penggunaan
- Membantu pemahaman budaya lokal

### 💰 **Estimasi Budget**
Kalkulator budget wisata:
- **Paket Pelajar Hemat** (Rp 50.000)
- **Paket Kenyang Sultan** (Rp 150.000)
- Tips hemat dan rekomendasi

### 📸 **Galeri Foto**
Koleksi foto berkualitas tinggi:
- Lightbox interaktif
- Foto arsitektur, festival, dan kehidupan sehari-hari
- Optimasi gambar dengan Sharp

---

## 🛠️ Teknologi

### 🎯 Core Framework
- **⚡ Next.js 16** - React framework dengan App Router
- **📘 TypeScript 5** - Type-safe development
- **� Tailwind CSS 4** - Utility-first CSS framework

### 🧩 UI & Animasi
- **� Framer Motion** - Smooth animations & transitions
- **🎨 shadcn/ui** - High-quality accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Radix UI** - Unstyled, accessible components

### 📊 Data & State Management
- **� Zustand** - Lightweight state management
- **� TanStack Query** - Data fetching & caching
- **�️ Prisma** - Type-safe ORM

### 🎨 Advanced Features
- **📊 Recharts** - Data visualization
- **📅 Date-fns** - Date utilities
- **🖼️ Sharp** - Image optimization
- **🎣 React Hook Form + Zod** - Form validation

---

## 🚀 Instalasi

### Prasyarat
- **Bun** >= 1.3.4 (atau Node.js >= 18)
- **Git**

### Langkah Instalasi

```bash
# 1. Clone repository
git clone https://github.com/username/jakbar-mulok4.git
cd jakbar-mulok4

# 2. Install dependencies
bun install

# 3. Setup database (opsional)
bun run db:push

# 4. Jalankan development server
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build untuk Production

```bash
# Build aplikasi
bun run build

# Jalankan production server
bun start
```

---

## 📁 Struktur Proyek

```
jakbar-mulok4/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage utama
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   └── ui/               # shadcn/ui components
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities & configs
├── public/
│   └── images/               # Asset gambar
├── prisma/                   # Database schema
├── package.json
└── README.md
```

---

## 🎨 Fitur Interaktif

### ✨ Animasi & Transisi
- **Parallax scrolling** pada hero section
- **Fade-in animations** saat scroll ke section
- **Hover effects** pada cards dan buttons
- **Smooth transitions** antar halaman

### 🎯 User Experience
- **Sticky navigation** dengan active state indicator
- **Mobile-responsive** dengan hamburger menu
- **Lightbox gallery** untuk foto
- **Favorite system** untuk menyimpan kuliner favorit
- **Smooth scroll** ke section tertentu

### 📱 Mobile-First Design
- Responsive di semua ukuran layar
- Touch-friendly interactions
- Optimized images untuk mobile
- Fast loading dengan lazy loading

---

## 🎨 Desain & Tema

### 🎨 Color Palette
- **Primary**: Red-Orange gradient (`from-red-600 to-orange-600`)
- **Secondary**: Green-Teal gradient (`from-green-600 to-teal-600`)
- **Background**: Warm gradients (`from-orange-50 via-white to-red-50`)
- **Accent**: Gold untuk elemen budaya Tionghoa

### 🖼️ Visual Identity
- **Ikon**: Lucide React dengan tema heritage
- **Typography**: System fonts dengan hierarchy yang jelas
- **Imagery**: Foto berkualitas tinggi dari Glodok
- **Spacing**: Generous whitespace untuk readability

---

## 📖 Dokumentasi

### Navigasi Utama
- **Beranda** - Hero section dengan CTA
- **Jelajahi** - Museum Hidup, Jejak Masa Lalu, Wajah Jakarta
- **Kuliner** - Peta Rasa dengan katalog lengkap
- **Panduan** - Panduan Jelajah, Kamus Budaya, Estimasi Budget
- **Galeri** - Koleksi foto
- **Kontak** - Informasi kontak

### Data Kuliner
Setiap item kuliner memiliki:
```typescript
{
  id: string
  name: string
  description: string
  price: number
  rating: number
  location: string
  image: string
  isHalal: boolean
  story: string
  generations?: number  // untuk Old Masters
}
```

### Rute Jalan Kaki
```typescript
{
  id: number
  name: string
  duration: string
  distance: string
  stops: string[]
  highlights: string[]
  bestTime: string
  image: string
}
```

---

## 🤝 Kontribusi

Kami sangat terbuka untuk kontribusi! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Ide Kontribusi
- 🗺️ Menambah rute jalan kaki baru
- 🍜 Menambah data kuliner legendaris
- 📸 Kontribusi foto berkualitas tinggi
- 🌐 Terjemahan ke bahasa lain
- 🎨 Perbaikan UI/UX

---

## 📝 Scripts

```bash
# Development
bun run dev          # Jalankan dev server di port 3000

# Build
bun run build        # Build untuk production

# Production
bun start            # Jalankan production server

# Database
bun run db:push      # Push schema ke database
bun run db:generate  # Generate Prisma Client
bun run db:migrate   # Jalankan migrations
bun run db:reset     # Reset database

# Linting
bun run lint         # Jalankan ESLint
```

---

## 🌟 Roadmap

### Phase 1 (Current) ✅
- [x] Landing page dengan hero section
- [x] Katalog kuliner halal & non-halal
- [x] Timeline sejarah interaktif
- [x] Profil pedagang legendaris
- [x] Panduan rute jalan kaki
- [x] Kamus budaya
- [x] Estimasi budget
- [x] Galeri foto dengan lightbox

### Phase 2 (Coming Soon) 🚧
- [ ] Integrasi Google Maps untuk navigasi
- [ ] Sistem booking tour guide
- [ ] Review & rating dari pengunjung
- [ ] Blog artikel tentang sejarah & budaya
- [ ] Augmented Reality (AR) untuk heritage tour
- [ ] Multi-language support (EN, CN)

### Phase 3 (Future) 🔮
- [ ] Mobile app (React Native)
- [ ] Virtual tour 360°
- [ ] Podcast cerita pedagang legendaris
- [ ] E-commerce untuk oleh-oleh khas
- [ ] Kolaborasi dengan Dinas Pariwisata DKI

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

---

## 👥 Tim

Dikembangkan dengan ❤️ oleh tim yang peduli dengan pelestarian warisan budaya Jakarta Barat.

---

## 📞 Kontak

- **Email**: info@museumhidupjakbar.id
- **Instagram**: [@museumhidupjakbar](https://instagram.com/museumhidupjakbar)
- **Website**: [www.museumhidupjakbar.id](https://museumhidupjakbar.id)

---

## 🙏 Acknowledgments

Terima kasih kepada:
- **Para pedagang legendaris Glodok** yang telah menjaga warisan budaya
- **Komunitas Jakarta Barat** yang mendukung pelestarian budaya
- **Fotografer** yang berkontribusi foto-foto indah
- **Open source community** untuk tools dan libraries yang luar biasa

---

<div align="center">

**🏮 Museum Hidup Jakarta Barat 🏮**

*Jelajahi Warisan, Rasakan Sejarah, Rayakan Keberagaman*

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/username/jakbar-mulok4)

</div>