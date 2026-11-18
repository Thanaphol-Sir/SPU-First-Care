/**
 * SPU First Care - Authentication & Role-Based Access Control
 * รองรับ 3 บทบาทหลัก:
 * 1. นักศึกษา (Student)
 * 2. อาจารย์ / บุคลากร (Faculty / Staff)
 * 3. ทีมพยาบาลวิชาชีพ มหาวิทยาลัยศรีปทุม (Infirmary Medical Team)
 *
 * รองรับระบบลงทะเบียน (Registration) สำหรับนักศึกษา และ พนักงาน/อาจารย์ใหม่
 * พร้อมจัดเก็บข้อมูลลงใน LocalStorage อย่างสมบูรณ์
 */

const SPU_DEFAULT_USERS = [
    {
        id: "student-1",
        username: "66011234",
        email: "kanyarat.suk@spu.ac.th",
        password: "password123",
        role: "student",
        roleName: "นักศึกษา",
        roleBadge: "SPU Student",
        name: "กัญญารัตน์ สุขเจริญ",
        faculty: "คณะนิเทศศาสตร์",
        building: "อาคาร 9 ชั้น 8",
        phone: "089-123-4567",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        allergies: "ไม่มีประวัติแพ้ยา",
        badgeColor: "bg-pink-100 text-spu-pink",
        isDefault: true
    },
    {
        id: "faculty-1",
        username: "ajarn.somchai",
        email: "somchai.pr@spu.ac.th",
        password: "password123",
        role: "faculty",
        roleName: "อาจารย์ / บุคลากร",
        roleBadge: "SPU Faculty",
        name: "ผศ.ดร.สมชาย ปรีชาชาญ",
        faculty: "คณะนิเทศศาสตร์ (อาจารย์ประจำสาขา)",
        building: "อาคาร 9 ชั้น 8",
        phone: "081-987-6543",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        allergies: "แพ้ยาเพนิซิลลิน (Penicillin)",
        badgeColor: "bg-amber-100 text-amber-800",
        isDefault: true
    },
    {
        id: "nurse-1",
        username: "nurse.spu",
        email: "nurse@spu.ac.th",
        password: "nurse123",
        role: "nurse",
        roleName: "ทีมพยาบาลวิชาชีพ",
        roleBadge: "SPU Medical Team",
        licenseNo: "พว. 10293847",
        name: "พว.พัชรี สุวรรณมาศ",
        station: "ห้องพยาบาล อาคาร 4 ชั้น 1",
        building: "อาคาร 4 ชั้น 1",
        phone: "02-579-1111 ต่อ 1191",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80",
        department: "ศูนย์บริการพยาบาลและปฐมพยาบาล ม.ศรีปทุม",
        badgeColor: "bg-emerald-100 text-emerald-800",
        isDefault: true
    }
];

// ดึงรายชื่อผู้ใช้ที่ลงทะเบียนเพิ่มในเครื่องนี้
function SPU_getRegisteredUsers() {
    const raw = localStorage.getItem("spu_firstcare_registered_users");
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch(e) {
        console.error("Failed to parse spu_firstcare_registered_users", e);
        return [];
    }
}

// บันทึกรายชื่อผู้ใช้ลงทะเบียน
function SPU_saveRegisteredUsers(users) {
    localStorage.setItem("spu_firstcare_registered_users", JSON.stringify(users));
}

// รวมรายชื่อผู้ใช้ทั้งหมด (Default Seed + Registered Users)
function SPU_getAllUsers() {
    return [...SPU_DEFAULT_USERS, ...SPU_getRegisteredUsers()];
}

// ตัวแปร global SPU_AUTH_USERS สำหรับค้นหาผู้ใช้ (รักษาความเข้ากันได้)
let SPU_AUTH_USERS = SPU_getAllUsers();

function SPU_syncAuthUsers() {
    SPU_AUTH_USERS = SPU_getAllUsers();
    return SPU_AUTH_USERS;
}

// ตรวจสอบว่าอีเมลเป็นอีเมลของมหาวิทยาลัยศรีปทุม (@spumail.net, @spulive.net หรือ @spu.ac.th) หรือไม่
function SPU_isValidSpuEmail(email) {
    if (!email) return false;
    const lower = email.trim().toLowerCase();
    return lower.endsWith("@spumail.net") || lower.endsWith("@spulive.net") || lower.endsWith("@spu.ac.th");
}

// ฟังก์ชันลงทะเบียนผู้ใช้ใหม่ (นักศึกษา หรือ อาจารย์/บุคลากร)
function SPU_registerUser(data) {
    SPU_syncAuthUsers();
    const allUsers = SPU_getAllUsers();

    const username = (data.username || "").trim();
    const email = (data.email || "").trim().toLowerCase();
    const password = data.password || "";
    const name = (data.name || "").trim();
    const role = data.role === "faculty" ? "faculty" : "student";
    const staffType = data.staffType || (role === "faculty" ? "faculty" : "student");
    const faculty = (data.faculty || "").trim();
    const building = (data.building || "").trim();
    const phone = (data.phone || "").trim();
    const allergies = (data.allergies || "").trim() || "ไม่มีประวัติแพ้ยา";
    const authProvider = data.authProvider || "local";
    const avatar = data.avatar || (
        role === "student" 
            ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
            : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
    );

    // ตรวจสอบความถูกต้องของข้อมูล
    if (!username) {
        return { 
            success: false, 
            message: role === 'student' ? 'กรุณาระบุรหัสนักศึกษา' : 'กรุณาระบุชื่อผู้ใช้หรือรหัสบุคลากร' 
        };
    }
    if (!name) {
        return { success: false, message: 'กรุณากรอกชื่อและนามสกุลจริง' };
    }
    if (authProvider === "local" && (!password || password.length < 4)) {
        return { success: false, message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร' };
    }
    if (!phone) {
        return { success: false, message: 'กรุณาระบุเบอร์โทรศัพท์สำหรับติดต่อฉุกเฉิน' };
    }
    if (!faculty) {
        return { success: false, message: 'กรุณาเลือกคณะ / สาขา / หน่วยงาน' };
    }

    // ตรวจสอบรูปแบบอีเมลมหาวิทยาลัย (@spumail.net, @spulive.net, @spu.ac.th)
    if (email && !SPU_isValidSpuEmail(email)) {
        return {
            success: false,
            message: 'กรุณาใช้อีเมลมหาวิทยาลัยศรีปทุมที่ถูกต้อง (@spumail.net สำหรับ Google หรือ @spulive.net สำหรับ Microsoft)'
        };
    }

    // ตรวจสอบชื่อผู้ใช้/รหัสนักศึกษาซ้ำ
    const dupUsername = allUsers.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (dupUsername) {
        return { 
            success: false, 
            message: role === 'student' 
                ? `รหัสนักศึกษา "${username}" มีอยู่ในระบบแล้ว กรุณาเข้าสู่ระบบ` 
                : `ชื่อผู้ใช้ "${username}" มีอยู่ในระบบแล้ว กรุณาใช้ชื่ออื่น` 
        };
    }

    // ตรวจสอบอีเมลซ้ำ (ถ้ามีระบุ)
    if (email) {
        const dupEmail = allUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
        if (dupEmail) {
            return { 
                success: false, 
                message: `อีเมล "${email}" ได้ลงทะเบียนในระบบแล้ว กรุณาเข้าสู่ระบบ` 
            };
        }
    }

    // กำหนดชื่อและสีป้ายบทบาท
    let roleName = "นักศึกษา";
    let roleBadge = "SPU Student";
    let badgeColor = "bg-pink-100 text-spu-pink";

    if (role === "faculty") {
        if (staffType === "staff") {
            roleName = "เจ้าหน้าที่ / บุคลากร";
            roleBadge = "SPU Staff";
            badgeColor = "bg-sky-100 text-sky-800";
        } else if (staffType === "adjunct") {
            roleName = "อาจารย์พิเศษ";
            roleBadge = "Adjunct Lecturer";
            badgeColor = "bg-purple-100 text-purple-800";
        } else {
            roleName = "อาจารย์ประจำสาขา";
            roleBadge = "SPU Faculty";
            badgeColor = "bg-amber-100 text-amber-800";
        }
    }

    // กำหนดอีเมลเริ่มต้นหากไม่ได้ระบุ
    const finalEmail = email || (
        authProvider === 'microsoft' 
            ? `${username}@spulive.net` 
            : `${username}@spumail.net`
    );

    const newUser = {
        id: `user-${role}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        username: username,
        email: finalEmail,
        password: password || "sso_auth_spu",
        role: role,
        staffType: staffType,
        roleName: roleName,
        roleBadge: roleBadge,
        name: name,
        faculty: faculty,
        building: building || (role === 'student' ? 'อาคาร 9' : 'อาคาร 5'),
        phone: phone,
        avatar: avatar,
        allergies: allergies,
        badgeColor: badgeColor,
        authProvider: authProvider,
        isRegistered: true,
        createdAt: new Date().toISOString()
    };

    const registered = SPU_getRegisteredUsers();
    registered.unshift(newUser); // บัญชีใหม่สุดอยู่บน
    SPU_saveRegisteredUsers(registered);
    SPU_syncAuthUsers();

    // เข้าสู่ระบบด้วยบัญชีใหม่ทันที
    SPU_setCurrentUser(newUser);

    return { success: true, user: newUser };
}

// ลงทะเบียนหรือเข้าสู่ระบบด้วย Google หรือ Microsoft SSO
function SPU_authWithSSO(provider, ssoData) {
    SPU_syncAuthUsers();
    const allUsers = SPU_getAllUsers();
    const email = (ssoData.email || "").trim().toLowerCase();

    // ตรวจสอบโดเมนอีเมล
    if (!SPU_isValidSpuEmail(email)) {
        return {
            success: false,
            message: provider === 'google' 
                ? 'บัญชี Google ต้องเป็นอีเมล @spumail.net ของมหาวิทยาลัยศรีปทุม' 
                : 'บัญชี Microsoft ต้องเป็นอีเมล @spulive.net ของมหาวิทยาลัยศรีปทุม'
        };
    }

    // ตรวจสอบว่ามีผู้ใช้นี้อยู่แล้วหรือไม่
    const existing = allUsers.find(u => u.email.toLowerCase() === email);
    if (existing) {
        SPU_setCurrentUser(existing);
        return {
            success: true,
            user: existing,
            isExisting: true,
            message: `เข้าสู่ระบบด้วยบัญชี ${provider === 'google' ? 'Google' : 'Microsoft'} (${existing.email}) สำเร็จ!`
        };
    }

    // ถ้ายังไม่มี ให้สร้างบัญชีใหม่
    const username = email.split('@')[0];
    const role = ssoData.role || (isNaN(username.charAt(0)) ? 'faculty' : 'student');
    const faculty = ssoData.faculty || (role === 'student' ? 'คณะนิเทศศาสตร์' : 'คณะเทคโนโลยีสารสนเทศ');
    const building = ssoData.building || (role === 'student' ? 'อาคาร 9 ชั้น 8' : 'อาคาร 5 ชั้น 8');

    return SPU_registerUser({
        username: username,
        name: ssoData.name || (role === 'student' ? `นักศึกษา (${username})` : `อาจารย์ (${username})`),
        email: email,
        password: "sso_oauth_verified",
        phone: ssoData.phone || "089-123-4567",
        role: role,
        staffType: ssoData.staffType || 'faculty',
        faculty: faculty,
        building: building,
        allergies: ssoData.allergies || "ไม่มีประวัติแพ้ยา",
        avatar: ssoData.avatar || (
            provider === 'google'
                ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
                : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
        ),
        authProvider: provider
    });
}

// ลบบัญชีผู้ใช้ที่ลงทะเบียนไว้
function SPU_deleteRegisteredUser(userId) {
    let registered = SPU_getRegisteredUsers();
    registered = registered.filter(u => u.id !== userId);
    SPU_saveRegisteredUsers(registered);
    SPU_syncAuthUsers();

    const current = SPU_getCurrentUser();
    if (current && current.id === userId) {
        SPU_setCurrentUser(SPU_DEFAULT_USERS[0]);
    }
    return { success: true };
}

// Mock Realtime Database for requests (ซิงค์ระหว่างนักศึกษากับพยาบาล)
const SPU_DB = {
    // รายการแจ้งเหตุ SOS สด
    sosRequests: [
        {
            id: "SOS-901",
            callerName: "นายณัฐพล อินทร์จันทร์ (นักศึกษา)",
            building: "อาคาร 9",
            floor: "ชั้น 11 (Fitness)",
            symptom: "วูบหมดสติจากการออกกำลังกาย หายใจเหนื่อยหอบ",
            phone: "085-555-0199",
            urgency: "วิกฤต",
            status: "ทีมพยาบาลกำลังเดินทาง",
            timestamp: "10 นาทีที่แล้ว",
            eta: "ประมาณ 2 นาที",
            handledBy: "พว.พัชรี (อาคาร 4 ชั้น 1)"
        }
    ],

    // รายการคิวรอตรวจและจ่ายยา
    queueTickets: [
        {
            code: "A-04",
            studentName: "กัญญารัตน์ สุขเจริญ",
            symptom: "ปวดศีรษะไมเกรน มีไข้ต่ำๆ",
            medicine: "พาราเซตามอล 500mg (1 แผง)",
            status: "รอเรียกคิว",
            time: "14:30 น.",
            allergies: "ไม่มีประวัติแพ้ยา"
        },
        {
            code: "A-05",
            studentName: "นายธนวัฒน์ พงษ์ศิริ",
            symptom: "ปวดท้องแน่นจุกเสียด",
            medicine: "ยาธาตุน้ำขาว / ยาลดกรด",
            status: "รอเรียกคิว",
            time: "14:45 น.",
            allergies: "ไม่มีประวัติแพ้ยา"
        }
    ],

    // สถานะเตียง 6 เตียง ณ อาคาร 4 ชั้น 1
    beds: [
        { id: "01", name: "เตียง 01 (หญิง)", status: "available", occupant: null, time: null },
        { id: "02", name: "เตียง 02 (หญิง)", status: "occupied", occupant: "น.ส.วิภาดา รักษ์ดี (มีไข้หนาวสั่น)", time: "เข้าพักเมื่อ 13:10 น." },
        { id: "03", name: "เตียง 03 (หญิง)", status: "available", occupant: null, time: null },
        { id: "04", name: "เตียง 04 (ชาย)", status: "occupied", occupant: "นายกิตติศักดิ์ เจริญ (แผลข้อเท้าแพลง)", time: "เข้าพักเมื่อ 12:45 น." },
        { id: "05", name: "เตียง 05 (ชาย)", status: "occupied", occupant: "นายศุภชัย กลิ่นหอม (ปวดไมเกรนรุนแรง)", time: "เข้าพักเมื่อ 14:00 น." },
        { id: "06", name: "เตียง 06 (ชาย)", status: "available", occupant: null, time: null }
    ]
};

// จัดเก็บ/ดึงข้อมูลผู้ใช้ปัจจุบัน
function SPU_getCurrentUser() {
    SPU_syncAuthUsers();
    const saved = localStorage.getItem("spu_firstcare_user");
    if (saved) {
        try {
            const user = JSON.parse(saved);
            const matched = SPU_AUTH_USERS.find(u => u.id === user.id || u.username.toLowerCase() === (user.username || "").toLowerCase());
            if (matched) return matched;
        } catch(e) {
            console.error(e);
        }
    }
    // ค่าเริ่มต้น: บัญชีนักศึกษา
    return SPU_DEFAULT_USERS[0];
}

function SPU_setCurrentUser(user) {
    localStorage.setItem("spu_firstcare_user", JSON.stringify(user));
}

function SPU_logout() {
    localStorage.removeItem("spu_firstcare_user");
    showToast("ออกจากระบบเรียบร้อยแล้ว", "info");
    setTimeout(() => {
        location.reload();
    }, 600);
}

if (typeof window !== "undefined") {
    window.SPU_AUTH_USERS = SPU_AUTH_USERS;
    window.SPU_DB = SPU_DB;
    window.SPU_getAllUsers = SPU_getAllUsers;
    window.SPU_getRegisteredUsers = SPU_getRegisteredUsers;
    window.SPU_registerUser = SPU_registerUser;
    window.SPU_deleteRegisteredUser = SPU_deleteRegisteredUser;
    window.SPU_getCurrentUser = SPU_getCurrentUser;
    window.SPU_setCurrentUser = SPU_setCurrentUser;
    window.SPU_logout = SPU_logout;
    window.SPU_isValidSpuEmail = SPU_isValidSpuEmail;
    window.SPU_authWithSSO = SPU_authWithSSO;
}
