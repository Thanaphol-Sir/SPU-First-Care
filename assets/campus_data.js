/**
 * SPU First Care - Campus Map & Buildings Master Data
 * อ้างอิงข้อมูลสถานที่จริงจากแผนผังมหาวิทยาลัยศรีปทุม (บางเขน)
 * เบอร์โทรฉุกเฉิน: 025791111 ต่อ 1191
 */

const SPU_DATA = {
    emergencyNumber: "02-579-1111 ต่อ 1191",
    emergencyTel: "025791111,1191",
    infirmary: {
        name: "ห้องพยาบาล มหาวิทยาลัยศรีปทุม (SPU First Care)",
        building: "อาคาร 4",
        floor: "ชั้น 1",
        fullLocation: "อาคาร 4 ชั้น 1 มหาวิทยาลัยศรีปทุม (บางเขน)",
        operatingHours: "08:30 - 18:30 น. (จันทร์ - เสาร์)",
        totalBeds: 6,
        phone: "02-579-1111 ต่อ 1191"
    },

    // ข้อมูลอาคารทั้งหมดจากแผนผังมหาวิทยาลัย
    buildings: [
        {
            id: "bld-4",
            name: "อาคาร 4",
            tag: "ห้องพยาบาล SPU First Care",
            isInfirmary: true,
            etaFromInfirmary: "0 นาที (จุดบริการ)",
            floors: [
                { floor: "ชั้น 1", details: "ห้องพยาบาล มหาวิทยาลัยศรีปทุม (SPU First Care), เตียงพักฟื้น 6 เตียง, ห้องจ่ายยาและปฐมพยาบาล" }
            ]
        },
        {
            id: "bld-1",
            name: "อาคาร 1",
            tag: "ตึกอำนวยการ / นิติศาสตร์ / ศิลปศาสตร์ / ห้องบัวหลวงแกรนด์รูม",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 1-2 นาที",
            floors: [
                { floor: "ชั้น L", details: "สำนักงานทะเบียน, สำนักงานการคลัง" },
                { floor: "ชั้น 1", details: "สำนักงานทุนการศึกษา, สำนักงานวิชาการ, สำนักงานวิเทศสัมพันธ์" },
                { floor: "ชั้น 5", details: "ห้องบัวหลวงแกรนด์รูม (Bualuang Grand Room - ห้องประชุม/สัมมนาใหญ่)" },
                { floor: "ชั้น 7", details: "คณะนิติศาสตร์" },
                { floor: "ชั้น 9", details: "คณะการสร้างเจ้าของธุรกิจ" },
                { floor: "ชั้น 10", details: "คณะศิลปศาสตร์" }
            ]
        },
        {
            id: "bld-5",
            name: "อาคาร 5",
            tag: "วิศวกรรมศาสตร์ / IT / ศูนย์อาหาร 1",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 1 นาที",
            floors: [
                { floor: "ด้านข้าง อาคาร 5", details: "ศูนย์อาหาร 1 (Food Center 1)" },
                { floor: "ชั้น 2", details: "คณะวิศวกรรมศาสตร์" },
                { floor: "ชั้น 5", details: "วิทยาลัยโลจิสติกส์และซัพพลายเชน" },
                { floor: "ชั้น 8", details: "คณะเทคโนโลยีสารสนเทศ, สำนักวิชาศึกษาทั่วไป" },
                { floor: "ชั้น 11", details: "ICT Center" }
            ]
        },
        {
            id: "bld-9",
            name: "อาคาร 9",
            tag: "นิเทศศาสตร์ / บริหารธุรกิจ / บัญชี / ฟิตเนส",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 2 นาที",
            floors: [
                { floor: "ชั้น 8", details: "คณะนิเทศศาสตร์" },
                { floor: "ชั้น 9", details: "คณะบริหารธุรกิจ" },
                { floor: "ชั้น 10", details: "คณะบัญชี" },
                { floor: "ชั้น 11", details: "Fitness (ศูนย์ออกกำลังกาย)" },
                { floor: "ชั้น 12", details: "โรงยิม (Gymnasium)" }
            ]
        },
        {
            id: "bld-10",
            name: "อาคาร 10",
            tag: "ศูนย์อาหาร 2 / กิจการนักศึกษา / สุขภาวะ / ฟุตซอล",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 1-2 นาที",
            floors: [
                { floor: "ชั้น 1-3", details: "ศูนย์อาหาร 2 (Food Center 2)" },
                { floor: "ชั้น 5", details: "กลุ่มงานกิจการนักศึกษา, ศูนย์ให้คำปรึกษาสุขภาวะ" },
                { floor: "ด้านข้าง อาคาร 10", details: "สนามฟุตซอล" }
            ]
        },
        {
            id: "bld-11",
            name: "อาคาร 11",
            tag: "หอสมุด / ดิจิทัลมีเดีย / นานาชาติ / การบิน / U-Store / Convention Hall / Auditorium",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 2-3 นาที",
            floors: [
                { floor: "ชั้น G", details: "Zone A: พื้นที่นิทรรศการ A (Exhibition Area A) | Zone C: พื้นที่นิทรรศการ C (ทางเข้าหลัก Entrance)" },
                { floor: "ชั้น 2", details: "Zone A: สำนักงานรับสมัคร (Admissions) | Zone C: สำนักหอสมุด (Sripatum University Library)" },
                { floor: "ชั้น 3", details: "Zone A: Theater Room, ห้องเรียน, ร้าน U-Store by SPVi | Zone C: สำนักหอสมุด (Library)" },
                { floor: "ชั้น 4", details: "Zone A: ห้องประชุมอเนกประสงค์ 1-2 (Convention Hall 1-2) | Zone C: สำนักหอสมุด (Library)" },
                { floor: "ชั้น 5", details: "Zone A: ห้องเรียน (Classroom) | Zone C: ทางเข้าหลักสำนักหอสมุด (Library Main Entrance)" },
                { floor: "ชั้น 6", details: "Zone A: ห้องเรียน (Classroom) | Zone C: สำนักหอสมุด (Sripatum University Library)" },
                { floor: "ชั้น 7", details: "Zone A: คณะดิจิทัลมีเดีย, ห้องเรียน (School of Digital Media, Classroom) | Zone C: สำนักหอสมุด" },
                { floor: "ชั้น 8", details: "Zone A: คณะการสร้างเจ้าของธุรกิจ, ห้องเรียน (School of Entrepreneur) | Zone C: วิทยาลัยนานาชาติ (International College)" },
                { floor: "ชั้น 9", details: "Zone A: ห้องเรียน (Classroom) | Zone C: ห้องเรียน (Classroom)" },
                { floor: "ชั้น 10", details: "Zone A: ห้องเรียน (Classroom) | Zone C: วิทยาลัยการท่องเที่ยวและการบริการ (College of Tourism and Hospitality)" },
                { floor: "ชั้น 11", details: "Zone A: ห้องเรียน (Classroom) | Zone C: วิทยาลัยบัณฑิตศึกษาด้านการจัดการ (Graduate College of Management)" },
                { floor: "ชั้น 12", details: "Zone A: ห้องเรียน (Classroom) | Zone C: ห้องเรียน (Classroom)" },
                { floor: "ชั้น 12A", details: "Zone A: ห้องเรียน (Classroom) | Zone C: ห้องรับรอง (Function Room)" },
                { floor: "ชั้น 14", details: "Zone A: ห้องเรียนรวม 1-2 (Auditorium 1-2) | Zone C: ห้องประชุมสภามหาวิทยาลัย (Board Room)" }
            ]
        },
        {
            id: "bld-dspace",
            name: "SPU Dspace (สถานีกรมทหารราบที่ 11)",
            tag: "สถาปัตยกรรมศาสตร์ / ดิจิทัลมีเดีย",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 4-6 นาที (ข้ามสะพานเชื่อม)",
            floors: [
                { floor: "ชั้น 1", details: "คณะการออกแบบและสถาปัตยกรรมศาสตร์" },
                { floor: "ชั้น 2", details: "คณะดิจิทัลมีเดีย" }
            ]
        },
        {
            id: "bld-outdoor",
            name: "พื้นที่ส่วนกลาง / ประตู / ลานกิจกรรม",
            tag: "สถานีบางบัว / ประตู 1-2 / ลานจอดรถ / สระน้ำ",
            isInfirmary: false,
            etaFromInfirmary: "ประมาณ 1-3 นาที",
            floors: [
                { floor: "ประตู 1 (ประตูหลัก)", details: "หน้ามหาวิทยาลัย เชื่อมต่อสถานีรถไฟฟ้า BTS บางบัว" },
                { floor: "ประตู 2 (ประตูบางบัว)", details: "ทางเข้า-ออก ใกล้สถานีบางบัว" },
                { floor: "ลานกิจกรรมกลางแจ้ง", details: "ลานกิจกรรมอเนกประสงค์ ม.ศรีปทุม" },
                { floor: "สนามฟุตซอล", details: "ด้านข้างอาคาร 10" },
                { floor: "ลานจอดรถและสระน้ำ", details: "บริเวณรอบสระน้ำและลานจอดรถ" }
            ]
        }
    ],

    // รายชื่อคณะทั้งหมดจากแผนผัง
    faculties: [
        { name: "คณะนิติศาสตร์", building: "อาคาร 1", floor: "ชั้น 7", icon: "fa-scale-balanced" },
        { name: "คณะศิลปศาสตร์", building: "อาคาร 1", floor: "ชั้น 10", icon: "fa-book-open" },
        { name: "คณะการสร้างเจ้าของธุรกิจ", building: "อาคาร 1", floor: "ชั้น 9", icon: "fa-lightbulb" },
        { name: "คณะวิศวกรรมศาสตร์", building: "อาคาร 5", floor: "ชั้น 2", icon: "fa-gears" },
        { name: "วิทยาลัยโลจิสติกส์และซัพพลายเชน", building: "อาคาร 5", floor: "ชั้น 5", icon: "fa-truck-fast" },
        { name: "คณะเทคโนโลยีสารสนเทศ", building: "อาคาร 5", floor: "ชั้น 8", icon: "fa-laptop-code" },
        { name: "สำนักวิชาศึกษาทั่วไป", building: "อาคาร 5", floor: "ชั้น 8", icon: "fa-graduation-cap" },
        { name: "คณะนิเทศศาสตร์", building: "อาคาร 9", floor: "ชั้น 8", icon: "fa-bullhorn" },
        { name: "คณะบริหารธุรกิจ", building: "อาคาร 9", floor: "ชั้น 9", icon: "fa-briefcase" },
        { name: "คณะบัญชี", building: "อาคาร 9", floor: "ชั้น 10", icon: "fa-calculator" },
        { name: "คณะดิจิทัลมีเดีย", building: "อาคาร 11 ชั้น 7 / SPU Dspace ชั้น 2", floor: "ชั้น 7 และ Dspace ชั้น 2", icon: "fa-palette" },
        { name: "Sripatum University International College", building: "อาคาร 11", floor: "ชั้น 8", icon: "fa-globe" },
        { name: "วิทยาลัยการบิน การท่องเที่ยว และการบริการ", building: "อาคาร 11", floor: "ชั้น 10", icon: "fa-plane-departure" },
        { name: "วิทยาลัยบัณฑิตศึกษาด้านการจัดการ", building: "อาคาร 11", floor: "ชั้น 11", icon: "fa-user-tie" },
        { name: "คณะการออกแบบและสถาปัตยกรรมศาสตร์", building: "SPU Dspace", floor: "ชั้น 1", icon: "fa-compass-drafting" }
    ],

    // หน่วยงานบริการนักศึกษา
    services: [
        { name: "สำนักงานรับสมัคร", building: "อาคาร 11", floor: "ชั้น 2 (Zone A)" },
        { name: "สำนักงานทะเบียน", building: "อาคาร 1", floor: "ชั้น L" },
        { name: "สำนักงานการคลัง", building: "อาคาร 1", floor: "ชั้น L" },
        { name: "สำนักงานทุนการศึกษา", building: "อาคาร 1", floor: "ชั้น 1" },
        { name: "สำนักงานวิชาการ", building: "อาคาร 1", floor: "ชั้น 1" },
        { name: "สำนักงานวิเทศสัมพันธ์", building: "อาคาร 1", floor: "ชั้น 1" },
        { name: "กลุ่มงานกิจการนักศึกษา", building: "อาคาร 10", floor: "ชั้น 5" },
        { name: "ศูนย์ให้คำปรึกษาสุขภาวะ", building: "อาคาร 10", floor: "ชั้น 5" },
        { name: "ห้องบัวหลวงแกรนด์รูม (Bualuang Grand Room)", building: "อาคาร 1", floor: "ชั้น 5" },
        { name: "ห้องประชุมสภามหาวิทยาลัย (Board Room)", building: "อาคาร 11", floor: "ชั้น 14 (Zone C)" },
        { name: "ห้องเรียนรวม 1-2 (Auditorium 1-2)", building: "อาคาร 11", floor: "ชั้น 14 (Zone A)" },
        { name: "ห้องรับรอง (Function Room)", building: "อาคาร 11", floor: "ชั้น 12A (Zone C)" },
        { name: "วิทยาลัยบัณฑิตศึกษาด้านการจัดการ", building: "อาคาร 11", floor: "ชั้น 11 (Zone C)" },
        { name: "วิทยาลัยการท่องเที่ยวและการบริการ", building: "อาคาร 11", floor: "ชั้น 10 (Zone C)" },
        { name: "Convention Hall 1-2 (ห้องประชุมอเนกประสงค์)", building: "อาคาร 11", floor: "ชั้น 4 (Zone A)" },
        { name: "Theater Room & U-Store by SPVi", building: "อาคาร 11", floor: "ชั้น 3 (Zone A)" },
        { name: "พื้นที่นิทรรศการ A & C (Exhibition Area)", building: "อาคาร 11", floor: "ชั้น G (Zone A & C)" }
    ],

    // สิ่งอำนวยความสะดวก
    amenities: [
        { name: "ห้องพยาบาล (SPU First Care)", building: "อาคาร 4", floor: "ชั้น 1", highlight: true, note: "จุดบริการพยาบาลหลัก / ศูนย์สั่งการฉุกเฉิน" },
        { name: "ห้องบัวหลวงแกรนด์รูม (Bualuang Grand Room)", building: "อาคาร 1", floor: "ชั้น 5", highlight: false, note: "ห้องประชุมและสัมมนาใหญ่ อาคาร 1 ชั้น 5" },
        { name: "สำนักหอสมุด (Central Library)", building: "อาคาร 11", floor: "ชั้น 2-7 (ทางเข้าหลัก ชั้น 5 Zone C)", highlight: false, note: "หอสมุด ม.ศรีปทุม อาคาร 11" },
        { name: "U-Store by SPVi (ร้านจำหน่ายอุปกรณ์ Apple)", building: "อาคาร 11", floor: "ชั้น 3 (Zone A)", highlight: false, note: "ร้าน U-Store อาคาร 11" },
        { name: "Theater Room (ห้องฉายภาพยนตร์/เธียเตอร์)", building: "อาคาร 11", floor: "ชั้น 3 (Zone A)", highlight: false, note: "ห้องเธียเตอร์ อาคาร 11" },
        { name: "Convention Hall 1-2 (ห้องประชุมอเนกประสงค์)", building: "อาคาร 11", floor: "ชั้น 4 (Zone A)", highlight: false, note: "ห้องประชุมใหญ่และจัดกิจกรรม อาคาร 11" },
        { name: "Auditorium 1-2 (ห้องเรียนรวมขนาดใหญ่)", building: "อาคาร 11", floor: "ชั้น 14 (Zone A)", highlight: false, note: "ห้องเรียนรวมอาคาร 11 ชั้น 14" },
        { name: "ห้องประชุมสภามหาวิทยาลัย (Board Room)", building: "อาคาร 11", floor: "ชั้น 14 (Zone C)", highlight: false, note: "ห้องประชุมสภามหาวิทยาลัย อาคาร 11" },
        { name: "ห้องรับรอง (Function Room)", building: "อาคาร 11", floor: "ชั้น 12A (Zone C)", highlight: false, note: "ห้องรับรอง อาคาร 11" },
        { name: "พื้นที่นิทรรศการ A & C (Exhibition Area)", building: "อาคาร 11", floor: "ชั้น G (Zone A & C)", highlight: false, note: "ลานจัดแสดงนิทรรศการ ชั้น G อาคาร 11" },
        { name: "ศูนย์อาหาร 1", building: "ด้านข้าง อาคาร 5", floor: "ชั้น 1", highlight: false },
        { name: "ศูนย์อาหาร 2", building: "อาคาร 10", floor: "ชั้น 1-3", highlight: false },
        { name: "Fitness (ศูนย์ออกกำลังกาย)", building: "อาคาร 9", floor: "ชั้น 11", highlight: false },
        { name: "โรงยิม (Gymnasium)", building: "อาคาร 9", floor: "ชั้น 12", highlight: false },
        { name: "สนามฟุตซอล", building: "ด้านข้าง อาคาร 10", floor: "ลานกลางแจ้ง", highlight: false },
        { name: "ICT Center", building: "อาคาร 5", floor: "ชั้น 11", highlight: false }
    ],

    // ยาสามัญประจำบ้านยอดนิยมสำหรับรับบริการ
    commonMedicines: [
        { id: "med-1", name: "พาราเซตามอล (Paracetamol 500mg)", desc: "บรรเทาอาการปวด ลดไข้", category: "ยาลดไข้/แก้ปวด" },
        { id: "med-2", name: "คลอเฟนิรามีน (Chlorpheniramine)", desc: "แก้แพ้ ลดน้ำมูก คัน", category: "ยาแก้แพ้" },
        { id: "med-3", name: "ยาธาตุน้ำขาว / ยาลดกรด", desc: "แก้ปวดท้อง แน่นท้อง จุกเสียด ท้องอืด", category: "ยาระบบทางเดินอาหาร" },
        { id: "med-4", name: "เกลือแร่ ORS", desc: "ชดเชยน้ำและเกลือแร่จากการท้องเสีย อ่อนเพลีย", category: "ยาระบบทางเดินอาหาร" },
        { id: "med-5", name: "ไดเมนไฮดริเนต (Dimenhydrinate)", desc: "บรรเทาอาการเมารถ เวียนศีรษะ คลื่นไส้", category: "ยาแก้เวียนศีรษะ" },
        { id: "med-6", name: "ชุดอุปกรณ์ทำแผลเบื้องต้น", desc: "น้ำเกลือล้างแผล เบตาดีน พลาสเตอร์ ผ้าก๊อซ", category: "เวชภัณฑ์ทำแผล" }
    ]
};

if (typeof window !== "undefined") {
    window.SPU_DATA = SPU_DATA;
}
if (typeof module !== "undefined" && module.exports) {
    module.exports = SPU_DATA;
}

