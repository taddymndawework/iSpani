// ─── iSpani Student Data ────────────────────────────────────────────────────
const STUDENTS = [
  {
    id: 1,
    firstName: "Lethabo",
    lastName: "Khumalo",
    age: 21,
    university: "University of Johannesburg",
    degreeType: "BSc",
    degreeName: "Computer Science",
    yearOfStudy: 2,
    service: "Web Development",
    serviceCategory: "webdev",
    bio: "Passionate about building clean, responsive websites that look great on all devices. I specialise in front-end development using React and modern CSS. Every project I take on gets my full attention to detail.",
    hourlyRate: 200,
    callRate: 150,
    rating: 4.9,
    reviewCount: 14,
    available: true,
    discount: 15,
    softSkills: ["Communication", "Problem Solving", "Attention to Detail"],
    achievements: ["Dean's Merit List 2023", "UJ Hackathon 2nd Place", "Google Developer Student Club Member"],
    experience: [
      { title: "Web Design Volunteer", org: "Non-Profit Org – Soweto", year: "2023" },
      { title: "Junior Developer Intern", org: "TechSpark Solutions", year: "2024" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80"
    ],
    photo: "Images/Lethabo Khumalo.jpg",
    reviews: [
      { company: "Cape Town Bakery", rating: 5, text: "Lethabo built our website in 3 days. Absolutely stunning work and great communication throughout.", date: "Mar 2025" },
      { company: "Joburg Logistics SA", rating: 5, text: "Delivered exactly what we asked for. Would hire again without hesitation.", date: "Feb 2025" },
      { company: "StyleHub Durban", rating: 4, text: "Great front-end work, very responsive and professional.", date: "Jan 2025" }
    ]
  },
  {
    id: 2,
    firstName: "Sipho",
    lastName: "Ndlovu",
    age: 23,
    university: "University of Pretoria",
    degreeType: "BIT",
    degreeName: "Information Technology",
    yearOfStudy: 3,
    service: "Database Management",
    serviceCategory: "database",
    bio: "I design and optimise SQL and NoSQL databases for businesses of all sizes. My focus is clean schema design, query optimisation, and data integrity. I've worked with MySQL, PostgreSQL, and MongoDB.",
    hourlyRate: 180,
    callRate: 120,
    rating: 4.7,
    reviewCount: 9,
    available: true,
    discount: null,
    softSkills: ["Analytical Thinking", "Reliability", "Teamwork"],
    achievements: ["Top student in Database Systems module", "CompTIA A+ Certified"],
    experience: [
      { title: "Database Intern", org: "GovTech Initiatives", year: "2023" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&q=80",
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&q=80",
      "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=400&q=80"
    ],
    photo: "Images/Sipho Ndlovu.jpg",
    reviews: [
      { company: "RetailPro SA", rating: 5, text: "Sipho restructured our entire database. Performance improved by 60%. Exceptional!", date: "Feb 2025" },
      { company: "MediTrack Clinics", rating: 4, text: "Solid knowledge of SQL. Helped us build a reporting system quickly.", date: "Jan 2025" }
    ]
  },
  {
    id: 3,
    firstName: "Amahle",
    lastName: "Dlamini",
    age: 22,
    university: "Cape Peninsula University of Technology",
    degreeType: "BTech",
    degreeName: "Information Systems",
    yearOfStudy: 3,
    service: "Data Analysis",
    serviceCategory: "data",
    bio: "I transform raw data into actionable insights using Python, Excel, and Power BI. Whether you need a sales dashboard or trend analysis, I can build it fast and present it clearly.",
    hourlyRate: 160,
    callRate: 100,
    rating: 4.8,
    reviewCount: 11,
    available: true,
    discount: 20,
    softSkills: ["Critical Thinking", "Communication", "Creativity"],
    achievements: ["CPUT Data Science Competition Winner 2024", "Microsoft Excel Expert Certification"],
    experience: [
      { title: "Data Analyst Intern", org: "FinSight Analytics", year: "2024" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80"
    ],
    photo: "Images/Amahle Dlamini.jpg",
    reviews: [
      { company: "AgriData SA", rating: 5, text: "Amahle's Power BI dashboard transformed how we see our farm data. Brilliant!", date: "Mar 2025" },
      { company: "UrbanStats", rating: 5, text: "Fast, accurate and very professional. Highly recommend.", date: "Feb 2025" },
      { company: "SmallBiz Hub", rating: 4, text: "Great work on our sales analysis. Clear explanations.", date: "Jan 2025" }
    ]
  },
  {
    id: 4,
    firstName: "Thabo",
    lastName: "Mokoena",
    age: 24,
    university: "Wits University",
    degreeType: "BSc Hons",
    degreeName: "Computer Science",
    yearOfStudy: 4,
    service: "Cybersecurity",
    serviceCategory: "cybersecurity",
    bio: "I help businesses identify vulnerabilities and harden their systems. Services include basic penetration testing, security audits, firewall configuration advice, and staff training on phishing awareness.",
    hourlyRate: 300,
    callRate: 200,
    rating: 4.9,
    reviewCount: 7,
    available: false,
    discount: null,
    softSkills: ["Integrity", "Attention to Detail", "Resilience"],
    achievements: ["CEH (Certified Ethical Hacker) in progress", "Wits Cyber Cup Finalist 2024", "TryHackMe Top 5% SA"],
    experience: [
      { title: "Security Intern", org: "CyberShield Africa", year: "2024" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&q=80",
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400&q=80"
    ],
    photo: "Images/Thabo Mokoena.jpg",
    reviews: [
      { company: "Finserve SA", rating: 5, text: "Thabo found 3 critical vulnerabilities in our network. Professional and thorough.", date: "Feb 2025" },
      { company: "LegalHub Africa", rating: 5, text: "Security audit was detailed and report was clearly written.", date: "Jan 2025" }
    ]
  },
  {
    id: 5,
    firstName: "Nomsa",
    lastName: "Sithole",
    age: 20,
    university: "Durban University of Technology",
    degreeType: "Diploma",
    degreeName: "ICT: Network Engineering",
    yearOfStudy: 2,
    service: "Network Setup & Support",
    serviceCategory: "networking",
    bio: "I set up and troubleshoot small business networks — WiFi, LAN, router configuration, VPN setup, and basic server administration. Fast, reliable, and available weekends.",
    hourlyRate: 140,
    callRate: 100,
    rating: 4.6,
    reviewCount: 5,
    available: true,
    discount: 10,
    softSkills: ["Punctuality", "Problem Solving", "Adaptability"],
    achievements: ["Cisco CCNA in progress", "DUT Dean's List 2024"],
    experience: [
      { title: "IT Support Volunteer", org: "Community Centre – Umlazi", year: "2023" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
      "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?w=400&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&q=80"
    ],
    photo: "Images/Nomsa Sithole.jpg",
    reviews: [
      { company: "Local Gym Durban", rating: 5, text: "Nomsa set up our entire WiFi network in one afternoon. Incredible value!", date: "Mar 2025" },
      { company: "Print & Copy Shop", rating: 4, text: "Fixed our network issue quickly and explained the problem clearly.", date: "Feb 2025" }
    ]
  },
  {
    id: 6,
    firstName: "Keanu",
    lastName: "Roberts",
    age: 22,
    university: "Tshwane University of Technology",
    degreeType: "BEng Tech",
    degreeName: "Computer Systems",
    yearOfStudy: 3,
    service: "Mobile App Development",
    serviceCategory: "appdev",
    bio: "I build Android apps using Kotlin and cross-platform apps with Flutter. From simple utility apps to small business tools — I bring ideas to life on mobile with clean UIs and solid code.",
    hourlyRate: 250,
    callRate: 150,
    rating: 4.7,
    reviewCount: 8,
    available: true,
    discount: null,
    softSkills: ["Creativity", "Time Management", "Collaboration"],
    achievements: ["TUT App Dev Challenge Winner 2024", "Google Play Published App – 1,200 downloads"],
    experience: [
      { title: "Android Developer Freelancer", org: "Independent", year: "2022–present" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      "https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?w=400&q=80",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&q=80"
    ],
    photo: "Images/Karabo Mahlangu.jpg",
    reviews: [
      { company: "FoodieDeals App", rating: 5, text: "Keanu built us a beautiful Flutter app on time and within budget. Exceptional.", date: "Feb 2025" },
      { company: "PropWatch SA", rating: 4, text: "Great Android dev skills. App runs perfectly.", date: "Jan 2025" }
    ]
  },
  {
    id: 7,
    firstName: "Amina",
    lastName: "Ali",
    age: 21,
    university: "North-West University",
    degreeType: "BSc",
    degreeName: "Information Technology",
    yearOfStudy: 2,
    service: "IT Support & Troubleshooting",
    serviceCategory: "itsupport",
    bio: "I provide hands-on IT support for small businesses — hardware troubleshooting, software installation, virus removal, system setup, and printer/network fixes. Quick, friendly, and professional.",
    hourlyRate: 120,
    callRate: 80,
    rating: 4.5,
    reviewCount: 16,
    available: true,
    discount: null,
    softSkills: ["Patience", "Communication", "Dependability"],
    achievements: ["CompTIA A+ Certified", "Microsoft Office Specialist"],
    experience: [
      { title: "Campus IT Help Desk Volunteer", org: "NWU IT Department", year: "2023–present" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400&q=80",
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=400&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=400&q=80",
      "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=400&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80"
    ],
    photo: "Images/Zanele Mthembu.jpg",
    reviews: [
      { company: "Corner Café Potchefstroom", rating: 5, text: "Amina fixed our POS system issue in under an hour. Will definitely call again.", date: "Mar 2025" },
      { company: "Law Office M&N", rating: 4, text: "Fast response, sorted all our laptop issues. Very professional.", date: "Feb 2025" }
    ]
  },
  {
    id: 8,
    firstName: "Lwazi",
    lastName: "Zulu",
    age: 23,
    university: "Stellenbosch University",
    degreeType: "BSc",
    degreeName: "Computer Science",
    yearOfStudy: 3,
    service: "Web Development",
    serviceCategory: "webdev",
    bio: "Full-stack developer comfortable with Node.js, Express, React, and PostgreSQL. I build complete web applications from database to UI. Clean code, responsive design, and solid documentation included.",
    hourlyRate: 220,
    callRate: 150,
    rating: 4.8,
    reviewCount: 10,
    available: true,
    discount: null,
    softSkills: ["Leadership", "Problem Solving", "Thoroughness"],
    achievements: ["Stellenbosch Entrepreneurship Award 2024", "Built and launched 2 live e-commerce sites"],
    experience: [
      { title: "Full-Stack Freelancer", org: "Independent (Western Cape)", year: "2022–present" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=400&q=80",
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=400&q=80",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&q=80"
    ],
    photo: "Images/Lwazi Zulu.jpg",
    reviews: [
      { company: "Vineyard Tours CC", rating: 5, text: "Lwazi built our entire booking platform in 2 weeks. Brilliant developer.", date: "Feb 2025" },
      { company: "Cape Craft Studio", rating: 5, text: "Exceptional full-stack work. Our site went from basic to world-class.", date: "Jan 2025" }
    ]
  },
  {
    id: 9,
    firstName: "Nicole",
    lastName: "Du Plessis",
    age: 20,
    university: "UNISA",
    degreeType: "BCom",
    degreeName: "Information Systems",
    yearOfStudy: 2,
    service: "Data Analysis",
    serviceCategory: "data",
    bio: "I create professional Excel dashboards, pivot table reports, and Google Sheets automations for small businesses. If your data is messy, I'll clean it and make it speak to you.",
    hourlyRate: 130,
    callRate: 80,
    rating: 4.6,
    reviewCount: 6,
    available: true,
    discount: 25,
    softSkills: ["Accuracy", "Initiative", "Empathy"],
    achievements: ["UNISA Academic Excellence Bursary 2024"],
    experience: [],
    workPhotos: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      "https://images.unsplash.com/photo-1502767089025-6572583495b9?w=400&q=80",
      "https://images.unsplash.com/photo-1541823709867-1b206113181a?w=400&q=80"
    ],
    photo: "Images/Thandeka Cele.jpg",
    reviews: [
      { company: "Spaza Shop Network", rating: 5, text: "Nicole's Excel dashboard saved us 5 hours per week on reporting. Amazing!", date: "Mar 2025" }
    ]
  },
  {
    id: 10,
    firstName: "Ethan",
    lastName: "Van Staden",
    age: 24,
    university: "University of KwaZulu-Natal",
    degreeType: "BSc Hons",
    degreeName: "Computer Science",
    yearOfStudy: 4,
    service: "Mobile App Development",
    serviceCategory: "appdev",
    bio: "iOS and Android developer with a strong UI/UX eye. I've published 2 apps on the App Store and Google Play. Specialise in consumer apps, booking systems, and small business tools.",
    hourlyRate: 280,
    callRate: 180,
    rating: 4.9,
    reviewCount: 12,
    available: true,
    discount: null,
    softSkills: ["Vision", "Persistence", "User Empathy"],
    achievements: ["UKZN Vice-Chancellor's Merit Award", "2 Published Apps", "AppStar Africa Finalist 2024"],
    experience: [
      { title: "iOS Developer Intern", org: "Sanlam Digital", year: "2024" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80",
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=400&q=80",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=400&q=80"
    ],
    photo: "Images/Musa Vilakazi.jpg",
    reviews: [
      { company: "Kasi Eats", rating: 5, text: "Ethan's app is genuinely beautiful and works flawlessly. Worth every cent.", date: "Feb 2025" },
      { company: "BookMySlot SA", rating: 5, text: "Professional, communicative, delivered ahead of schedule. A+", date: "Jan 2025" }
    ]
  },
  {
    id: 11,
    firstName: "Dineo",
    lastName: "Sefatsa",
    age: 21,
    university: "University of the Free State",
    degreeType: "BSc",
    degreeName: "Applied Mathematics & Computer Science",
    yearOfStudy: 3,
    service: "Cybersecurity",
    serviceCategory: "cybersecurity",
    bio: "I specialise in network security assessments, basic vulnerability scanning, and setting up secure WiFi environments for small businesses. I also conduct staff cybersecurity awareness workshops.",
    hourlyRate: 220,
    callRate: 150,
    rating: 4.7,
    reviewCount: 4,
    available: true,
    discount: null,
    softSkills: ["Ethics", "Diligence", "Curiosity"],
    achievements: ["Cybersecurity Awareness Ambassador – UFS", "Hack The Box Rank: Pro Hacker"],
    experience: [
      { title: "IT Security Volunteer", org: "UFS IS Department", year: "2024" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&q=80",
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    ],
    photo: "Images/Dineo Sefatsa.jpg",
    reviews: [
      { company: "Insurance Brokers UFS area", rating: 5, text: "Dineo's security audit was eye-opening. Great report and recommendations.", date: "Feb 2025" }
    ]
  },
  {
    id: 12,
    firstName: "Iman",
    lastName: "Khan",
    age: 22,
    university: "Mangosuthu University of Technology",
    degreeType: "Diploma",
    degreeName: "Information and Communications Technology",
    yearOfStudy: 3,
    service: "Network Setup & Support",
    serviceCategory: "networking",
    bio: "Expert at configuring routers, switches, VLANs and setting up small office networks from scratch. I've helped over 20 small businesses in KZN get connected. Available on weekdays and weekends.",
    hourlyRate: 130,
    callRate: 90,
    rating: 4.8,
    reviewCount: 19,
    available: true,
    discount: null,
    softSkills: ["Reliability", "Friendliness", "Work Ethic"],
    achievements: ["MUT Outstanding Student Award 2024", "Cisco Networking Academy Graduate"],
    experience: [
      { title: "Network Technician Intern", org: "Telkom KZN", year: "2023" },
      { title: "Freelance Network Setup", org: "Independent – 20+ clients", year: "2022–present" }
    ],
    workPhotos: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
      "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=400&q=80"
    ],
    funPhotos: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=400&q=80",
      "https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?w=400&q=80"
    ],
    photo: "Images/Bongani Nkosi.jpg",
    reviews: [
      { company: "Umlazi Community Centre", rating: 5, text: "Iman is our go-to for everything networking. Reliable and honest.", date: "Mar 2025" },
      { company: "KZN Auto Parts", rating: 5, text: "Set up 6 workstations in one day. Brilliant work!", date: "Feb 2025" },
      { company: "Print & Pack Durban", rating: 5, text: "Fixed our WiFi dead zones. Excellent service.", date: "Jan 2025" }
    ]
  }
];

// Cart & Wishlist (session state)
let cart = JSON.parse(localStorage.getItem('ispani_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ispani_wishlist') || '[]');

function saveCart() { localStorage.setItem('ispani_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('ispani_wishlist', JSON.stringify(wishlist)); }

function addToCart(studentId, type = 'service') {
  const student = STUDENTS.find(s => s.id === studentId);
  if (!student) return;
  const existing = cart.find(i => i.studentId === studentId && i.type === type);
  if (existing) { existing.qty += 1; }
  else {
    const rate = type === 'call' ? student.callRate : student.hourlyRate;
    const discount = student.discount && type === 'service' ? student.discount : null;
    const discountedRate = discount ? Math.round(rate * (1 - discount / 100)) : rate;
    cart.push({ studentId, type, name: `${student.firstName} ${student.lastName}`, service: type === 'call' ? 'Discovery Call' : student.service, rate, discount, discountedRate, qty: 1, photo: student.photo });
  }
  saveCart();
  updateBadges();
  showToast(`${type === 'call' ? 'Call booking' : 'Service'} added to cart!`);
}

function removeFromCart(studentId, type) {
  cart = cart.filter(i => !(i.studentId === studentId && i.type === type));
  saveCart();
  updateBadges();
}

function toggleWishlist(studentId) {
  const idx = wishlist.indexOf(studentId);
  if (idx > -1) { wishlist.splice(idx, 1); saveWishlist(); return false; }
  else { wishlist.push(studentId); saveWishlist(); return true; }
}

function isInWishlist(id) { return wishlist.includes(id); }
function isInCart(id, type) { return cart.some(i => i.studentId === id && i.type === type); }

function cartTotal() {
  return cart.reduce((sum, i) => sum + i.discountedRate * i.qty, 0);
}

function updateBadges() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cart.reduce((s, i) => s + i.qty, 0);
    el.style.display = cart.length ? 'flex' : 'none';
  });
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length ? 'flex' : 'none';
  });
}

function showToast(msg) {
  let toast = document.getElementById('ispani-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ispani-toast';
    toast.style.cssText = 'position:fixed;bottom:28px;right:28px;background:#1a7a3a;color:#fff;padding:14px 22px;border-radius:12px;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:500;z-index:9999;box-shadow:0 8px 24px rgba(26,122,58,0.35);transform:translateY(80px);opacity:0;transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1)';
    document.body.appendChild(toast);
  }
  toast.textContent = '✓  ' + msg;
  setTimeout(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; }, 10);
  setTimeout(() => { toast.style.transform = 'translateY(80px)'; toast.style.opacity = '0'; }, 2800);
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="star filled">★</span>';
    else if (i === full && half) html += '<span class="star half">★</span>';
    else html += '<span class="star empty">☆</span>';
  }
  return html;
}

function getServiceLabel(cat) {
  const map = { webdev: 'Web Development', database: 'Database Management', data: 'Data Analysis', cybersecurity: 'Cybersecurity', networking: 'Network Setup & Support', appdev: 'Mobile App Development', itsupport: 'IT Support' };
  return map[cat] || cat;
}

function formatRate(r) { return `R${r.toLocaleString()}`; }
