# SPU First Care - Production Static Build (Ready to Deploy)

ชุดไฟล์ Static (HTML / CSS / JavaScript / Images) สำหรับนำไปอัปโหลดขึ้น Web Hosting ได้ทันที 100%

## โครงสร้างไฟล์ในชุด Build:
- `index.html` — หน้าเว็บหลักของระบบ SPU First Care
- `assets/`
  - `auth.js` — ระบบยืนยันตัวตนและการจัดการสิทธิ์ 3 บทบาท
  - `campus_data.js` — ข้อมูลผังอาคาร จุดสังเกต ยาสามัญ และพิกัด ม.ศรีปทุม
  - `map_base64.js` — แผนผังสำรองความเร็วสูง
  - `spu_campus_map.jpg` — รูปภาพแผนผังมหาวิทยาลัยศรีปทุม
- `.htaccess` — สำหรับโฮสติ้ง Apache / cPanel / DirectAdmin
- `netlify.toml` — สำหรับ Netlify
- `vercel.json` — สำหรับ Vercel
- `robots.txt` — สำหรับ Search Engine

## วิธีนำไปใช้งานตามประเภทโฮสติ้ง:

### 1. โฮสติ้งทั่วไป (cPanel / DirectAdmin / Plesk / FileZilla)
- อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดนี้เข้าไปที่โฟลเดอร์ `public_html` หรือ `www`
- สามารถเข้าใช้งานผ่านชื่อโดเมนของคุณได้ทันที

### 2. Netlify (ฟรี & เร็วที่สุด)
- เข้าเว็บ https://app.netlify.com/drop
- ลากโฟลเดอร์ `dist` นี้ไปวาง หรืออัปโหลดไฟล์ `spu-first-care-dist.zip`

### 3. Vercel
- เข้าเว็บ https://vercel.com/new แล้วอิมพอร์ตโฟลเดอร์ `dist` นี้

### 4. GitHub Pages
- สร้าง Repository แล้วนำไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไปที่ Branch `main`
- เปิดใช้งานที่ Settings > Pages > เลือก Deploy from main branch
