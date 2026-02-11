# 📝 Panduan Kustomisasi Portfolio

## 🎯 Cara Mengganti Nama dan Informasi Personal

### 1. Edit File `src/data/personal.js`
```javascript
const personal = {
  name: 'Nama Anda',                    // ← Ganti dengan nama Anda
  title: 'Full Stack Developer',        // ← Ganti dengan title/posisi Anda
  subtitle: 'Deskripsi singkat Anda',   // ← Ganti dengan subtitle
  bio: 'Bio lengkap Anda...',           // ← Ganti dengan bio Anda
  location: 'Kota, Negara',             // ← Ganti dengan lokasi Anda
  email: 'email@anda.com',              // ← Ganti dengan email Anda
  phone: '+62 xxx-xxxx-xxxx',           // ← Ganti dengan nomor HP Anda
  // ... dst
};
```

## 🖼️ Cara Mengganti Foto Profil

### 1. Siapkan foto profil Anda
- Format: JPG, PNG, atau WebP
- Ukuran: 400x400 pixels (persegi)
- Nama file: `profile.jpg` (atau nama lain)

### 2. Letakkan di folder `public/`
```
public/
├── profile.jpg  ← Foto profil Anda di sini
└── ...
```

### 3. Update referensi di `src/data/personal.js`
```javascript
avatar: '/profile.jpg',  // ← Sesuaikan dengan nama file foto Anda
```

## 📁 Cara Mengganti Foto Projects

### 1. Siapkan foto-foto project Anda
- Format: JPG, PNG, atau WebP  
- Ukuran: 500x300 pixels (rasio 5:3)
- Nama file sesuai dengan yang ada di `src/data/projects.js`

### 2. Letakkan di folder `public/project-images/`
```
public/project-images/
├── ecommerce.jpg      ← Foto E-Commerce Platform
├── taskmanager.jpg    ← Foto Task Management App
├── weather.jpg        ← Foto Weather Dashboard
├── lms.jpg           ← Foto Learning Management System
├── realestate.jpg    ← Foto Real Estate Platform
└── portfolio.jpg     ← Foto Portfolio Website
```

### 3. Atau ganti nama file di `src/data/projects.js`
```javascript
{
  name: 'Project Name',
  image: '/project-images/nama-foto-anda.jpg',  // ← Ganti sesuai nama file
  // ...
}
```

## 📄 Cara Mengganti CV

### 1. Siapkan file CV Anda
- Format: PDF
- Nama file: `CV-Nama-Anda.pdf`

### 2. Letakkan di folder `public/`
```
public/
├── CV-Nama-Anda.pdf  ← File CV Anda di sini
└── ...
```

### 3. Update referensi di `src/data/personal.js`
```javascript
resume: '/CV-Nama-Anda.pdf',  // ← Sesuaikan dengan nama file CV Anda
```

## 🔗 Fitur yang Sudah Berfungsi

### ✅ Tombol "View My Work"
- Otomatis mengarah ke halaman Projects (`/projects`)
- Menggunakan React Router navigation

### ✅ Tombol "Download CV"  
- Otomatis mendownload file CV dari folder `public/`
- Nama file download: `CV-Ahmad-Rizki.pdf` (bisa diganti)

### ✅ Fallback Image
- Jika foto tidak ditemukan, akan menampilkan placeholder
- Tidak akan error jika file gambar hilang

## 🚀 Cara Menjalankan

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Jalankan development server:**
   ```bash
   npm start
   ```

3. **Build untuk production:**
   ```bash
   npm run build
   ```

## 📂 Struktur File Penting

```
portfolio/
├── public/
│   ├── profile.jpg              ← Foto profil
│   ├── CV-Nama-Anda.pdf        ← File CV
│   └── project-images/          ← Folder foto projects
│       ├── ecommerce.jpg
│       ├── taskmanager.jpg
│       └── ...
├── src/
│   ├── data/
│   │   ├── personal.js          ← Data personal (nama, bio, dll)
│   │   ├── projects.js          ← Data projects
│   │   └── skills.js            ← Data skills & organizations
│   └── pages/
│       ├── Home.js              ← Halaman utama
│       ├── Projects.js          ← Halaman projects
│       └── ...
└── ...
```

## 💡 Tips

1. **Ukuran File:** Jaga ukuran gambar tetap kecil (< 500KB) untuk performa optimal
2. **Nama File:** Gunakan nama file tanpa spasi, gunakan dash (-) atau underscore (_)
3. **Format:** JPG untuk foto, PNG untuk gambar dengan transparansi
4. **Backup:** Selalu backup file asli sebelum mengganti

## 🆘 Troubleshooting

**Q: Foto tidak muncul?**
A: Pastikan nama file dan path sudah benar, dan file ada di folder `public/`

**Q: CV tidak bisa didownload?**  
A: Pastikan file CV ada di folder `public/` dan nama file sesuai di `personal.js`

**Q: Error saat build?**
A: Jalankan `npm install` ulang dan pastikan semua dependencies terinstall