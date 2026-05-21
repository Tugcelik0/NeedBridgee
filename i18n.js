// NeedBridge — TR/EN Language System
// Tüm site metinleri burada. Değiştirmek istediğin bir metin varsa
// sadece bu dosyayı düzenle.

const LANG = {
  en: {
    // NAV
    nav_problems: "Problem Board",
    nav_solvers: "Solver Directory",
    nav_how: "How It Works",
    nav_pricing: "Pricing",
    nav_bulletin: "Bulletin",
    nav_signin: "Sign in",
    nav_join: "Join free →",

    // HOMEPAGE HERO
    hero_tag: "A new kind of procurement platform",
    hero_h1: "Your team has a problem.",
    hero_h2: "A startup has the solution.",
    hero_em: "NeedBridge closes the gap.",
    hero_desc: "Any department — procurement, IT, operations, HR, finance — can post a problem anonymously and receive proposals from startups and innovators worldwide. Fast, structured, and protected.",
    hero_cta_seeker: "Post a problem →",
    hero_cta_solver: "Offer a solution",
    hero_early: "Early access — free until October 2026",

    // ROLE CARDS
    seeker_label: "Seeker",
    seeker_title: "For Companies",
    seeker_sub: "You have a problem to solve",
    seeker_desc: "Any department in your company can post a procurement need anonymously. Define your budget, timeline, and solution type. Receive structured proposals from startups worldwide.",
    seeker_f1: "Anonymous listing — company name protected",
    seeker_f2: "Structured proposals with pricing and timeline",
    seeker_f3: "Pilot escrow protection",
    seeker_f4: "Zero commission for companies — ever",

    solver_label: "Solver",
    solver_title: "For Startups & Innovators",
    solver_sub: "You have a solution to offer",
    solver_desc: "Browse real corporate procurement needs. Apply with your proposal. Your identity stays hidden until a company formally requests a meeting.",
    solver_f1: "Google-indexed profile from day one",
    solver_f2: "Full problem details and requirements",
    solver_f3: "90-day protection against inactive listings",
    solver_f4: "Verified supplier badge on closed deals",

    // HOW IT WORKS SECTION
    how_tag: "How it works",
    how_h: "Simple for both sides.",
    how_em: "Protected for both sides.",
    how_desc: "The same platform serves Seekers and Solvers — with a transparent process designed so neither side can game the system.",
    how_tab_seeker: "🏢 As a Seeker",
    how_tab_solver: "🚀 As a Solver",

    how_s1_label: "Post",
    how_s1_title: "Publish your problem",
    how_s1_desc: "Describe what you need in a structured form. Set your budget, deadline, and whether you're open to a pilot. Your company name is never shown to Solvers at this stage.",
    how_s1_d1: "✓ Free to post — no credit card",
    how_s1_d2: "✓ Company identity protected until meeting approval",
    how_s1_d3: "✓ Define roles: Listing Owner + Budget Approver",

    how_s2_label: "Review",
    how_s2_title: "Receive proposals",
    how_s2_desc: "Solvers apply with a structured proposal: solution summary, pricing, and timeline. You see what they offer — but not who they are — until you invite them to a meeting.",

    how_s3_label: "Meet",
    how_s3_title: "Schedule a meeting on-platform",
    how_s3_desc: "Invite the Solvers you like. Meetings are logged on NeedBridge, creating a legal record of the introduction. Invite your Budget Approver to the budget discussion stage.",

    how_s4_label: "Pilot",
    how_s4_title: "Run a protected pilot",
    how_s4_desc: "Agree on pilot scope and payment. The fee is held in escrow and released when the Solver delivers. Neither side takes payment risk.",

    how_s5_label: "Close",
    how_s5_title: "Sign and close",
    how_s5_desc: "Manage the contract through NeedBridge. The full process is documented. Zero commission for Seekers.",

    how_v1_label: "Profile",
    how_v1_title: "Build your profile",
    how_v1_desc: "Add your solution categories and case studies. Your profile is indexed on Google — visibility from day one.",

    how_v2_label: "Discover",
    how_v2_title: "Find matching problems",
    how_v2_desc: "Filter by budget, region, and solution type. Get weekly email alerts for new problems in your area.",

    how_v3_label: "Apply",
    how_v3_title: "Submit your proposal",
    how_v3_desc: "Send your pricing, timeline, and solution summary. Your identity stays hidden until the Seeker approves a meeting.",
    how_v3_d1: "✓ Identity hidden until meeting approved",
    how_v3_d2: "✓ Seeker expected to respond within 48 hours",

    how_v4_label: "Track",
    how_v4_title: "Track your pipeline",
    how_v4_desc: "Every application tracked in real time. If a Seeker goes silent for 90 days, the platform alerts them automatically — protecting you from wasted effort.",

    how_v5_label: "Close",
    how_v5_title: "Deliver, get paid",
    how_v5_desc: "The pilot payment is held in escrow and released when you deliver. Every closed deal adds a verified reference to your profile.",

    // LINKEDIN SECTION
    li_tag: "Spread the word",
    li_h: "Seekers can share their problem",
    li_em: "directly on LinkedIn.",
    li_desc: "When you post a problem on NeedBridge, share it to your LinkedIn network with one click. Your startup connections see it, apply, and your problem gets solved faster.",
    li_btn: "Share on LinkedIn",
    li_cta: "Post a problem first",

    // SAMPLE PROBLEMS SECTION
    sample_tag: "Example listings",
    sample_h: "What kinds of problems",
    sample_em: "get posted here?",
    sample_desc: "Any department. Any industry. Any size of problem. Here are a few examples of the types of needs companies post on NeedBridge.",
    sample_label: "Sample content",
    sample_open: "Open",
    sample_apply: "Apply",
    sample_budget: "Budget",
    sample_deadline: "Deadline",

    // EARLY ACCESS
    early_tag: "Join NeedBridge",
    early_h: "Be among the first.",
    early_em: "Free until October 2026.",
    early_desc: "We're in early access. Every feature is free — no credit card, no commitment. Join as a Seeker to post problems or as a Solver to offer solutions.",
    early_seeker: "🏢 I'm a Seeker",
    early_solver: "🚀 I'm a Solver",
    early_btn: "Join free →",
    early_note: "Free until October 2026 · No spam · Cancel anytime",

    // TRUST
    trust_tag: "Platform trust",
    trust_h: "Built so neither side",
    trust_em: "can bypass the platform.",
    trust_desc: "Five interlocking mechanisms make staying on NeedBridge more valuable than leaving it.",
    trust_1_t: "Proposal anonymity",
    trust_1_b: "Seekers see solution pitches — not solver identities. Identities revealed only after a formal meeting is approved.",
    trust_1_e: "→ The introduction happens on NeedBridge",
    trust_2_t: "Meeting records",
    trust_2_b: "Every meeting is logged — date, time, participants. Legal proof of the introduction. Covered by a 24-month clause.",
    trust_2_e: "→ Bypassing creates legal risk",
    trust_3_t: "Pilot escrow",
    trust_3_b: "Pilot fees held in escrow. Released on delivery. Neither side takes payment risk.",
    trust_3_e: "→ Deliver first, payment follows",
    trust_4_t: "90-day action rule",
    trust_4_b: "Automated alerts at 30, 60, 90 days after budget discussion. At day 90, the listing suspends and the deposit is forfeited.",
    trust_4_e: "→ Dead listings cost money",
    trust_5_t: "Solver reputation lock",
    trust_5_b: "Verified badge and priority matching are platform-exclusive. Bypassing the platform means losing this permanently.",
    trust_5_e: "→ Long-term cost of leaving",
    trust_6_t: "Anomaly detection",
    trust_6_b: "Unusual patterns are flagged — repeated profile views with no action, or a Solver later listing that Seeker as a client.",
    trust_6_e: "→ Bypassing is harder than staying",

    // FOOTER
    footer_desc: "Where corporate problems meet startup solutions. Structured. Anonymous. Protected.",
    footer_platform: "Platform",
    footer_seekers: "For Seekers",
    footer_solvers: "For Solvers",
    footer_problems: "Problem Board",
    footer_directory: "Solver Directory",
    footer_bulletin: "Bulletin",
    footer_pricing: "Pricing",
    footer_post: "Post a problem",
    footer_how_s: "How it works",
    footer_plans_s: "Seeker plans",
    footer_trust: "Trust & safety",
    footer_profile: "Create a profile",
    footer_how_v: "How it works",
    footer_plans_v: "Solver plans",
    footer_pipeline: "Pipeline dashboard",
    footer_copy: "© 2026 NeedBridge. All rights reserved.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_contact: "Contact",

    // PROBLEMS PAGE
    pb_eyebrow: "Problem Board",
    pb_h: "Real problems.",
    pb_em: "Open for solutions.",
    pb_desc: "Companies post real procurement needs anonymously. Every listing has a defined budget, deadline, and solution type. First 10 visible free — join as a Solver to see all.",
    pb_search: "Search problems, sectors, technologies...",
    pb_all: "All",
    pb_free_banner: "Early access — fully free until October 2026. No credit card needed.",
    pb_by_cat: "By category",
    pb_region: "Region",
    pb_budget: "Budget range",
    pb_weekly: "Weekly digest",
    pb_weekly_desc: "New problems in your category every Monday.",
    pb_weekly_sub: "Subscribe free →",
    pb_seeker_cta_t: "Are you a Seeker?",
    pb_seeker_cta_d: "Post your procurement problem. Reach solvers across 47 countries. Free.",
    pb_seeker_cta_btn: "Post a problem →",
    pb_count: "problems",
    pb_apps: "applications",
    pb_pilot: "Pilot OK",
    pb_apply_btn: "Details & Apply",
    pb_save: "Save",
    pb_lock_title: "Join as a Solver to see all problems",
    pb_lock_sub: "Free until October 2026. No payment needed.",
    pb_lock_btn: "Join free as a Solver →",

    // JOIN PAGE
    join_tag: "Early access",
    join_h: "Create your account",
    join_sub: "Free until October 2026. No credit card needed.",
    join_solver_tab: "🚀 I'm a Solver",
    join_seeker_tab: "🏢 I'm a Seeker",
    join_name: "Full name",
    join_email: "Work email",
    join_company: "Company / Startup name",
    join_cat: "Primary solution category",
    join_sector: "Your industry",
    join_country: "Country",
    join_btn: "Create free account →",
    join_terms: "By joining you agree to our",
    join_or: "or",
    join_linkedin: "Continue with LinkedIn",
    join_success_h: "You're on the list!",
    join_success_d: "Welcome to NeedBridge. We'll send you an activation link within 24 hours.",

    // PRICING
    pr_tag: "Pricing",
    pr_h: "Start free.",
    pr_em: "Grow together.",
    pr_desc: "Free for everyone until October 2026. After that: Seekers always post for free. Solvers pay to connect.",
    pr_free_alert: "Early access: every feature is free until October 2026. No credit card required.",
    pr_monthly: "Monthly",
    pr_annual: "Annual",
    pr_save: "Save 20%",
    pr_solver_tab: "🚀 Solver plans",
    pr_seeker_tab: "🏢 Seeker plans",

    // HOW IT WORKS PAGE
    hiw_h: "How NeedBridge",
    hiw_em: "actually works.",
    hiw_desc: "Two sides. One platform. A transparent process designed to protect both Seekers and Solvers from first contact to closed deal.",
    hiw_seeker_btn: "🏢 I'm a Seeker",
    hiw_solver_btn: "🚀 I'm a Solver",
  },

  tr: {
    nav_problems: "İlan Panosu",
    nav_solvers: "Çözüm Rehberi",
    nav_how: "Nasıl Çalışır",
    nav_pricing: "Fiyatlandırma",
    nav_bulletin: "Bülten",
    nav_signin: "Giriş yap",
    nav_join: "Ücretsiz katıl →",

    hero_tag: "Yeni nesil bir tedarik platformu",
    hero_h1: "Ekibinizin çözmek istediği bir sorun var.",
    hero_h2: "Bir girişimin çözümü var.",
    hero_em: "NeedBridge aradaki köprüdür.",
    hero_desc: "Satın alma, BT, operasyon, İK, finans — şirketinizdeki herhangi bir departman problemi anonim olarak yayınlayabilir ve dünya genelindeki girişimlerden teklif alabilir. Hızlı, yapılandırılmış ve güvenceli.",
    hero_cta_seeker: "Problem ilanı aç →",
    hero_cta_solver: "Çözüm sun",
    hero_early: "Erken erişim — Ekim 2026'ya kadar ücretsiz",

    seeker_label: "Seeker",
    seeker_title: "Şirketler için",
    seeker_sub: "Çözmek istediğiniz bir sorun var",
    seeker_desc: "Şirketinizdeki herhangi bir departman tedarik ihtiyacını anonim olarak yayınlayabilir. Bütçenizi, tarihinizi ve çözüm tipini belirleyin. Dünya genelindeki girişimlerden yapılandırılmış teklifler alın.",
    seeker_f1: "Anonim ilan — şirket adı korumalı",
    seeker_f2: "Fiyat ve takvim içeren yapılandırılmış teklifler",
    seeker_f3: "Pilot escrow güvencesi",
    seeker_f4: "Şirketlere sıfır komisyon — hiçbir zaman",

    solver_label: "Solver",
    solver_title: "Girişimler ve inovatörler için",
    solver_sub: "Sunabileceğiniz bir çözüm var",
    solver_desc: "Gerçek kurumsal tedarik ihtiyaçlarını inceleyin. Teklifinizle başvurun. Kimliğiniz, bir şirket resmi olarak görüşme talep edene kadar gizli kalır.",
    solver_f1: "İlk günden Google'da indexlenen profil",
    solver_f2: "Tam problem tanımı ve teknik gereksinimler",
    solver_f3: "Hareketsiz ilanlara karşı 90 gün koruma",
    solver_f4: "Kapanan anlaşmalarda doğrulanmış tedarikçi rozeti",

    how_tag: "Nasıl çalışır",
    how_h: "Her iki taraf için basit.",
    how_em: "Her iki taraf için güvenceli.",
    how_desc: "Aynı platform hem Seeker'lara hem Solver'lara hizmet eder — hiçbir tarafın sistemi atlayamayacağı şeffaf bir süreçle.",
    how_tab_seeker: "🏢 Seeker olarak",
    how_tab_solver: "🚀 Solver olarak",

    how_s1_label: "İlan",
    how_s1_title: "Probleminizi yayınlayın",
    how_s1_desc: "İhtiyacınızı yapılandırılmış bir formda tanımlayın. Bütçenizi, son tarihinizi ve pilot kabul edip etmediğinizi belirtin. Şirket adınız bu aşamada Solver'lara hiçbir zaman gösterilmez.",
    how_s1_d1: "✓ İlan açmak ücretsiz — kredi kartı gerekmez",
    how_s1_d2: "✓ Şirket kimliği görüşme onayına kadar korumalı",
    how_s1_d3: "✓ Roller tanımlayın: İlan Sahibi + Bütçe Onaylayıcı",

    how_s2_label: "İncele",
    how_s2_title: "Teklifleri değerlendirin",
    how_s2_desc: "Solver'lar yapılandırılmış teklifle başvurur: çözüm özeti, fiyat ve takvim. Ne sunduklarını görürsünüz — ama kim olduklarını, onları görüşmeye davet edene kadar bilmezsiniz.",

    how_s3_label: "Görüşme",
    how_s3_title: "Platform üzerinden görüşme planlayın",
    how_s3_desc: "Beğendiğiniz Solver'lara davet gönderin. Görüşmeler NeedBridge'de kayıt altına alınır — hukuki kanıt oluşturur. Bütçe görüşmesi aşamasına Bütçe Onaylayıcınızı dahil edin.",

    how_s4_label: "Pilot",
    how_s4_title: "Güvenceli pilot çalışma başlatın",
    how_s4_desc: "Pilot kapsamı ve ödemesi üzerinde anlaşın. Bedel escrow'da tutulur, Solver teslim ettiğinde otomatik serbest bırakılır. Her iki taraf için ödeme riski sıfırdır.",

    how_s5_label: "Anlaşma",
    how_s5_title: "İmzalayın ve kapatın",
    how_s5_desc: "Sözleşmeyi NeedBridge üzerinden yönetin. Tüm süreç belgelenmiş olur. Seeker'lara komisyon yoktur.",

    how_v1_label: "Profil",
    how_v1_title: "Profilinizi oluşturun",
    how_v1_desc: "Çözüm kategorilerinizi ve referans projelerinizi ekleyin. Profiliniz Google'da indexlenir — ilk günden görünürlük.",

    how_v2_label: "Keşfet",
    how_v2_title: "Eşleşen problemleri bulun",
    how_v2_desc: "Bütçe, bölge ve çözüm tipine göre filtreleyin. Kategorinizdeki yeni ilanlar için haftalık e-posta bildirimi alın.",

    how_v3_label: "Başvur",
    how_v3_title: "Teklifinizi gönderin",
    how_v3_desc: "Fiyatınızı, takviminizi ve çözüm özetinizi gönderin. Kimliğiniz Seeker görüşmeyi onaylayıncaya kadar gizli kalır.",
    how_v3_d1: "✓ Kimlik görüşme onaylanana kadar gizlidir",
    how_v3_d2: "✓ Seeker 48 saat içinde yanıt vermesi beklenir",

    how_v4_label: "Takip",
    how_v4_title: "Pipeline'ınızı takip edin",
    how_v4_desc: "Her başvuru gerçek zamanlı takip edilir. Seeker 90 gün sessiz kalırsa platform otomatik uyarı gönderir — boşa harcanan efora karşı koruma.",

    how_v5_label: "Anlaşma",
    how_v5_title: "Teslim et, ödemeni al",
    how_v5_desc: "Pilot ödemesi escrow'da tutulur, teslimatta serbest bırakılır. Her kapanan anlaşma profilinize doğrulanmış referans ekler.",

    li_tag: "Duyurun",
    li_h: "Seeker'lar problemi",
    li_em: "LinkedIn'de paylaşabilir.",
    li_desc: "NeedBridge'de ilan açtıktan sonra tek tıkla LinkedIn ağınızla paylaşabilirsiniz. Girişim bağlantılarınız görür, başvurur ve probleminiz daha hızlı çözülür.",
    li_btn: "LinkedIn'de paylaş",
    li_cta: "Önce ilan açın",

    sample_tag: "Örnek ilanlar",
    sample_h: "Hangi tür problemler",
    sample_em: "burada yayınlanır?",
    sample_desc: "Her departman. Her sektör. Her büyüklükte ihtiyaç. İşte şirketlerin NeedBridge'de yayınladığı ihtiyaç türlerinden birkaç örnek.",
    sample_label: "Örnek içerik",
    sample_open: "Açık",
    sample_apply: "Başvur",
    sample_budget: "Bütçe",
    sample_deadline: "Son tarih",

    early_tag: "NeedBridge'e katılın",
    early_h: "İlk üyeler arasında olun.",
    early_em: "Ekim 2026'ya kadar ücretsiz.",
    early_desc: "Erken erişim dönemindeyiz. Her özellik ücretsiz — kredi kartı yok, taahhüt yok. Seeker olarak problem yayınlayın veya Solver olarak çözüm sunun.",
    early_seeker: "🏢 Seeker'ım",
    early_solver: "🚀 Solver'ım",
    early_btn: "Ücretsiz katıl →",
    early_note: "Ekim 2026'ya kadar ücretsiz · Spam yok · İstediğinizde iptal",

    trust_tag: "Platform güvencesi",
    trust_h: "Hiçbir tarafın",
    trust_em: "sistemi atlayamayacağı yapı.",
    trust_desc: "Beş birbirine kilitli mekanizma, platformda kalmayı ayrılmaktan daha değerli kılar.",
    trust_1_t: "Başvuru anonimliği",
    trust_1_b: "Seeker'lar çözüm tekliflerini görür — Solver kimliklerini değil. Kimlikler yalnızca resmi görüşme onayından sonra açılır.",
    trust_1_e: "→ Tanışma anı NeedBridge'de gerçekleşir",
    trust_2_t: "Görüşme kaydı",
    trust_2_b: "Her görüşme kayıt altına alınır — tarih, saat, katılımcılar. Hukuki kanıt niteliğindedir. 24 aylık madde ile güvence altında.",
    trust_2_e: "→ Platformu atlamak hukuki risk yaratır",
    trust_3_t: "Pilot escrow",
    trust_3_b: "Pilot bedeli escrow'da tutulur. Solver teslim ettiğinde otomatik serbest bırakılır. Her iki taraf için ödeme riski sıfırdır.",
    trust_3_e: "→ Önce teslim et, ödeme takip eder",
    trust_4_t: "90 gün aksiyon kuralı",
    trust_4_b: "Bütçe görüşmesi sonrası 30/60/90. günlerde otomatik uyarı. 90. günde hareketsiz kalınırsa ilan askıya alınır ve depozito tutulur.",
    trust_4_e: "→ Ölü ilanın bir maliyeti var",
    trust_5_t: "Solver itibar kilidi",
    trust_5_b: "Doğrulanmış rozet ve öncelikli eşleştirme platforma özgüdür. Platformu atlayan Solver bunu kalıcı olarak kaybeder.",
    trust_5_e: "→ Ayrılmanın uzun vadeli maliyeti",
    trust_6_t: "Anomali tespiti",
    trust_6_b: "Olağandışı örüntüler işaretlenir — tekrarlayan profil görüntülemeleri, sonradan müşteri olarak ekleme.",
    trust_6_e: "→ Platformu atlamak kalmaktan daha zordur",

    footer_desc: "Kurumsal problemler startup çözümleriyle buluşur. Yapılandırılmış. Anonim. Güvenceli.",
    footer_platform: "Platform",
    footer_seekers: "Şirketler için",
    footer_solvers: "Girişimler için",
    footer_problems: "İlan Panosu",
    footer_directory: "Çözüm Rehberi",
    footer_bulletin: "Bülten",
    footer_pricing: "Fiyatlandırma",
    footer_post: "İlan aç",
    footer_how_s: "Nasıl çalışır",
    footer_plans_s: "Seeker planları",
    footer_trust: "Güven ve güvenlik",
    footer_profile: "Profil oluştur",
    footer_how_v: "Nasıl çalışır",
    footer_plans_v: "Solver planları",
    footer_pipeline: "Pipeline takibi",
    footer_copy: "© 2026 NeedBridge. Tüm hakları saklıdır.",
    footer_privacy: "Gizlilik",
    footer_terms: "Kullanım Şartları",
    footer_contact: "İletişim",

    pb_eyebrow: "İlan Panosu",
    pb_h: "Gerçek problemler.",
    pb_em: "Çözüme açık.",
    pb_desc: "Şirketler gerçek tedarik ihtiyaçlarını anonim olarak yayınlar. Her ilanın bütçesi, son tarihi ve çözüm tipi bellidir. İlk 10 ücretsiz görünür — tümünü görmek için Solver olarak katılın.",
    pb_search: "İlan, sektör veya teknoloji ara...",
    pb_all: "Tümü",
    pb_free_banner: "Erken erişim — Ekim 2026'ya kadar tamamen ücretsiz. Kredi kartı gerekmez.",
    pb_by_cat: "Kategoriye göre",
    pb_region: "Bölge",
    pb_budget: "Bütçe aralığı",
    pb_weekly: "Haftalık özet",
    pb_weekly_desc: "Her Pazartesi kategorinizdeki yeni ilanlar.",
    pb_weekly_sub: "Ücretsiz abone ol →",
    pb_seeker_cta_t: "Siz de Seeker mısınız?",
    pb_seeker_cta_d: "Tedarik probleminizi yayınlayın. Ücretsiz.",
    pb_seeker_cta_btn: "İlan aç →",
    pb_count: "ilan",
    pb_apps: "başvuru",
    pb_pilot: "Pilot OK",
    pb_apply_btn: "Detaylar & Başvur",
    pb_save: "Kaydet",
    pb_lock_title: "Tüm ilanları görmek için Solver olarak katılın",
    pb_lock_sub: "Ekim 2026'ya kadar ücretsiz. Ödeme gerekmez.",
    pb_lock_btn: "Solver olarak ücretsiz katıl →",

    join_tag: "Erken erişim",
    join_h: "Hesabınızı oluşturun",
    join_sub: "Ekim 2026'ya kadar ücretsiz. Kredi kartı gerekmez.",
    join_solver_tab: "🚀 Solver'ım",
    join_seeker_tab: "🏢 Seeker'ım",
    join_name: "Ad Soyad",
    join_email: "İş e-postası",
    join_company: "Şirket / Girişim adı",
    join_cat: "Birincil çözüm kategorisi",
    join_sector: "Sektörünüz",
    join_country: "Ülke",
    join_btn: "Ücretsiz hesap oluştur →",
    join_terms: "Katılarak kabul etmiş olursunuz:",
    join_or: "veya",
    join_linkedin: "LinkedIn ile devam et",
    join_success_h: "Listeye eklendiniz!",
    join_success_d: "NeedBridge'e hoş geldiniz. Aktivasyon bağlantısını 24 saat içinde e-postanıza göndereceğiz.",

    pr_tag: "Fiyatlandırma",
    pr_h: "Ücretsiz başlayın.",
    pr_em: "Birlikte büyüyelim.",
    pr_desc: "Ekim 2026'ya kadar herkes için ücretsiz. Sonrasında: Seeker'lar her zaman ücretsiz ilan açar. Solver'lar bağlantı kurmak için plan seçer.",
    pr_free_alert: "Erken erişim: Ekim 2026'ya kadar her özellik ücretsiz. Kredi kartı gerekmez.",
    pr_monthly: "Aylık",
    pr_annual: "Yıllık",
    pr_save: "%20 tasarruf",
    pr_solver_tab: "🚀 Solver planları",
    pr_seeker_tab: "🏢 Seeker planları",

    hiw_h: "NeedBridge",
    hiw_em: "nasıl çalışır?",
    hiw_desc: "İki taraf. Tek platform. Her iki tarafı da ilk temastan anlaşmaya kadar koruyan şeffaf bir süreç.",
    hiw_seeker_btn: "🏢 Seeker'ım",
    hiw_solver_btn: "🚀 Solver'ım",
  }
};

// Sample problems — bilingual
const SAMPLE_PROBLEMS = [
  {
    id:1,
    dept: {en:"HR Department", tr:"İnsan Kaynakları Departmanı"},
    co: {en:"Anonymous · Large enterprise", tr:"Anonim · Büyük ölçekli şirket"},
    sector: {en:"Financial Services · Europe", tr:"Finans · Avrupa"},
    title: {
      en:"Employee onboarding automation platform for a distributed workforce",
      tr:"Dağıtık çalışan yapısı için işe alım otomasyon platformu"
    },
    desc: {
      en:"Our HR team manages onboarding for 200+ new hires per year across 6 countries. We need a SaaS platform that automates document collection, e-signature, compliance training assignment, and system access provisioning — integrated with our existing HRIS.",
      tr:"İK ekibimiz 6 ülkede yılda 200'den fazla yeni çalışanın işe alım sürecini yönetiyor. Belge toplama, e-imza, uyum eğitimi atama ve sistem erişimi gibi adımları otomatize eden, mevcut İKYS sistemimize entegre bir SaaS platformuna ihtiyacımız var."
    },
    budget:"€45,000",
    deadline:{en:"Jul 30, 2026", tr:"30 Tem 2026"},
    tags:{en:["SaaS","HR Tech","HRIS Integration","E-Signature"], tr:["SaaS","İK Tech","İKYS Entegrasyonu","E-İmza"]},
    av:"HR", avbg:"#e6f1fb", avco:"#185fa5"
  },
  {
    id:2,
    dept: {en:"Maintenance & Operations", tr:"Bakım & Operasyon"},
    co: {en:"Anonymous · Aviation", tr:"Anonim · Havacılık"},
    sector: {en:"Aviation · Global", tr:"Havacılık · Global"},
    title: {
      en:"Predictive maintenance software for ground support equipment fleet",
      tr:"Yer destek ekipmanları filosu için arıza tahmini yazılımı"
    },
    desc: {
      en:"We operate a fleet of 340 ground support equipment units across 12 airports. We need an AI-based predictive maintenance solution that monitors sensor data in real time and flags equipment before failure, reducing unplanned downtime.",
      tr:"12 havalimanında 340 araçlık yer destek ekipmanı filosu işletiyoruz. Sensör verilerini gerçek zamanlı izleyen, arızadan önce uyarı veren ve plansız duruş süresini azaltan yapay zeka tabanlı bir arıza tahmini çözümüne ihtiyacımız var."
    },
    budget:"€120,000",
    deadline:{en:"Aug 15, 2026", tr:"15 Ağu 2026"},
    tags:{en:["AI/ML","Predictive Maintenance","IoT","Aviation"], tr:["YZ/ML","Arıza Tahmini","IoT","Havacılık"]},
    av:"AV", avbg:"#eeedfe", avco:"#3C3489"
  },
  {
    id:3,
    dept: {en:"Claims Department", tr:"Hasar Departmanı"},
    co: {en:"Anonymous · Insurance", tr:"Anonim · Sigorta"},
    sector: {en:"Insurance · Turkey", tr:"Sigorta · Türkiye"},
    title: {
      en:"Automated vehicle damage assessment system using image recognition",
      tr:"Görüntü tanıma ile otomatik araç hasar tespit sistemi"
    },
    desc: {
      en:"Our claims team processes 15,000+ vehicle damage claims per month. We need an image recognition system that can estimate repair costs from photos submitted by policyholders — reducing manual assessment time and improving consistency.",
      tr:"Hasar ekibimiz ayda 15.000'den fazla araç hasar talebini işliyor. Poliçe sahiplerinin gönderdiği fotoğraflardan onarım maliyetini tahmin eden, manuel değerlendirme süresini azaltan ve tutarlılığı artıran bir görüntü tanıma sistemine ihtiyacımız var."
    },
    budget:"€85,000",
    deadline:{en:"Sep 1, 2026", tr:"1 Eyl 2026"},
    tags:{en:["Computer Vision","InsurTech","Damage Assessment","AI"], tr:["Bilgisayarlı Görü","InsurTech","Hasar Tespiti","YZ"]},
    av:"IN", avbg:"#faeeda", avco:"#633806"
  },
  {
    id:4,
    dept: {en:"Procurement Department", tr:"Satın Alma Departmanı"},
    co: {en:"Anonymous · Automotive", tr:"Anonim · Otomotiv"},
    sector: {en:"Automotive · Germany / Turkey", tr:"Otomotiv · Almanya / Türkiye"},
    title: {
      en:"Torque angle measurement device for assembly line quality control",
      tr:"Montaj hattı kalite kontrol için tork açı ölçüm cihazı"
    },
    desc: {
      en:"We need a handheld or inline torque angle measurement device for bolted joint verification on our engine assembly line. Must integrate with our MES via OPC-UA and generate traceable quality records per serial number.",
      tr:"Motor montaj hattımızdaki cıvatalı bağlantıları doğrulamak için el tipi veya inline tork açı ölçüm cihazına ihtiyacımız var. OPC-UA üzerinden MES'e entegre olmalı ve seri numarası başına izlenebilir kalite kaydı oluşturmalı."
    },
    budget:"€60,000",
    deadline:{en:"Jul 15, 2026", tr:"15 Tem 2026"},
    tags:{en:["Measurement Device","OPC-UA","Quality Control","Automotive"], tr:["Ölçüm Cihazı","OPC-UA","Kalite Kontrol","Otomotiv"]},
    av:"OT", avbg:"#e8f2ec", avco:"#1a6b4a"
  },
  {
    id:5,
    dept: {en:"IT Department", tr:"BT Departmanı"},
    co: {en:"Anonymous · Retail", tr:"Anonim · Perakende"},
    sector: {en:"Retail · EMEA", tr:"Perakende · EMEA"},
    title: {
      en:"Inventory reconciliation SaaS connecting ERP and warehouse management systems",
      tr:"ERP ve depo yönetim sistemlerini birleştiren stok mutabakat SaaS'ı"
    },
    desc: {
      en:"Our retail operations run on 3 separate ERP systems across different regions with no real-time inventory sync. We need a middleware SaaS that reconciles stock data across systems, eliminates manual exports, and provides a single source of truth for inventory.",
      tr:"Perakende operasyonlarımız farklı bölgelerde 3 ayrı ERP sistemi üzerinde çalışıyor ve gerçek zamanlı stok senkronizasyonu yok. Sistemler arasında stok verisini mutabık kılan, manuel dışa aktarmaları ortadan kaldıran ve tek bir gerçek stok kaynağı sağlayan bir middleware SaaS'a ihtiyacımız var."
    },
    budget:"€70,000",
    deadline:{en:"Aug 30, 2026", tr:"30 Ağu 2026"},
    tags:{en:["SaaS","ERP Integration","Inventory","Middleware"], tr:["SaaS","ERP Entegrasyon","Stok","Middleware"]},
    av:"RT", avbg:"#fdeaea", avco:"#b83232"
  },
  {
    id:6,
    dept: {en:"Operations & Logistics", tr:"Operasyon & Lojistik"},
    co: {en:"Anonymous · Food & Beverage", tr:"Anonim · Gıda & İçecek"},
    sector: {en:"FMCG · Turkey", tr:"FMCG · Türkiye"},
    title: {
      en:"Real-time route optimisation platform for last-mile distribution fleet",
      tr:"Son mil dağıtım filosu için gerçek zamanlı rota optimizasyon platformu"
    },
    desc: {
      en:"We operate 180 delivery vehicles across 3 cities. Our current routing is manual and doesn't account for real-time traffic, customer time windows, or vehicle capacity constraints. We need a route optimisation platform that reduces total distance by at least 15%.",
      tr:"3 şehirde 180 dağıtım aracı işletiyoruz. Mevcut rotalama manuel ve gerçek zamanlı trafik, müşteri zaman penceresi veya araç kapasite kısıtlarını hesaba katmıyor. Toplam mesafeyi en az %15 azaltan bir rota optimizasyon platformuna ihtiyacımız var."
    },
    budget:"€55,000",
    deadline:{en:"Jul 30, 2026", tr:"30 Tem 2026"},
    tags:{en:["Route Optimisation","Last-Mile","Fleet Management","SaaS"], tr:["Rota Optimizasyonu","Son Mil","Filo Yönetimi","SaaS"]},
    av:"GI", avbg:"#fff0eb", avco:"#a0441a"
  },
];

// Current language
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('nb_lang', lang);
  applyLang();
}

function getLang() {
  return localStorage.getItem('nb_lang') || navigator.language.startsWith('tr') ? 'tr' : 'en';
}

function t(key) {
  return LANG[currentLang][key] || LANG['en'][key] || key;
}

function applyLang() {
  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, t(key));
    } else {
      el.textContent = t(key);
    }
  });

  // Update html lang
  document.documentElement.lang = currentLang;

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Dispatch event for page-specific updates
  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: currentLang } }));
}

function initLang() {
  const saved = localStorage.getItem('nb_lang');
  const browser = navigator.language.startsWith('tr') ? 'tr' : 'en';
  currentLang = saved || browser;
  applyLang();
}
