// ============================================================
// portfolio-data.js — Portfolio Items & Testimonials Data
// Abdullokh Tashpulatov Portfolio
// ============================================================

const portfolioItems = [
  // ── BRANDING ──────────────────────────────────────────────
  {
    id: 1,
    category: "branding",
    image: "assets/images/portfolio_branding.jpg",
    title: {
      uz: "FiRSTiFY Brandbook",
      ru: "FiRSTiFY Брендбук",
      en: "FiRSTiFY Brandbook",
    },
    tags: { uz: "Branding · Logo · Identifikatsiya", ru: "Брендинг · Лого · Идентичность", en: "Branding · Logo · Identity" },
    task: {
      uz: "Yangi startap uchun to'liq brand identifikatsiyasini yaratish — logodan tortib barcha korporativ materiallargacha.",
      ru: "Создание полной бренд-идентичности для нового стартапа — от логотипа до всех корпоративных материалов.",
      en: "Create a complete brand identity for a new startup — from logo to all corporate materials.",
    },
    solution: {
      uz: "Minimal va zamonaviy tipografikaga asoslangan vizual sistema: logo, rang palitrasi, tipografika, biznes karta, letterhead, ijtimoiy tarmoq shablonlari.",
      ru: "Визуальная система на основе минимальной и современной типографики: логотип, цветовая палитра, типографика, визитки, бланки, шаблоны для соцсетей.",
      en: "A minimal, modern typography-driven visual system: logo, color palette, typography, business cards, letterhead, social media templates.",
    },
    result: {
      uz: "Mijoz brendi bozorga kuchli vizual identifikatsiya bilan chiqdi, ijtimoiy tarmoqlarda tanilish 40% ga oshdi.",
      ru: "Бренд клиента вышел на рынок с сильной визуальной идентичностью, узнаваемость в социальных сетях выросла на 40%.",
      en: "The client's brand launched with strong visual identity, increasing social media recognition by 40%.",
    },
    type: "image",
  },
  {
    id: 2,
    category: "branding",
    image: "assets/images/portfolio_branding.jpg",
    title: { uz: "Restoran Logo Dizayni", ru: "Дизайн Логотипа Ресторана", en: "Restaurant Logo Design" },
    tags: { uz: "Logo · Poligrafiya", ru: "Лого · Полиграфия", en: "Logo · Print" },
    task: {
      uz: "Milliy taomlar restorani uchun zamonaviy va traditional elementlarni birlashtirgan logo yaratish.",
      ru: "Создание логотипа для ресторана национальной кухни, сочетающего современные и традиционные элементы.",
      en: "Create a logo for a national cuisine restaurant combining modern and traditional elements.",
    },
    solution: {
      uz: "Qo'lda chizilgan tipografika va geometrik naqsh elementi asosida noyob identifikatsiya tizimi.",
      ru: "Уникальная система идентичности на основе рукописной типографики и геометрического орнаментального элемента.",
      en: "A unique identity system based on hand-drawn typography and a geometric ornamental element.",
    },
    result: {
      uz: "Logo restoran brendini aniq belgiladi va barcha print materiallarda muvaffaqiyatli qo'llanildi.",
      ru: "Логотип чётко определил бренд ресторана и успешно применён во всех печатных материалах.",
      en: "The logo clearly defined the restaurant's brand and was successfully applied across all print materials.",
    },
    type: "image",
  },

  // ── SMM & TARGETING ───────────────────────────────────────
  {
    id: 3,
    category: "smm",
    image: "assets/images/portfolio_smm.jpg",
    title: {
      uz: "Instagram Vizual Identifikatsiya",
      ru: "Визуальная Идентичность Instagram",
      en: "Instagram Visual Identity",
    },
    tags: { uz: "SMM · Instagram · Kontent", ru: "SMM · Instagram · Контент", en: "SMM · Instagram · Content" },
    task: {
      uz: "Kiyim brendi uchun Instagram sahifasini vizual jihatdan yaxlit va professional ko'rinishga keltirish.",
      ru: "Приведение страницы Instagram бренда одежды к визуально целостному и профессиональному виду.",
      en: "Transform a clothing brand's Instagram page into a visually cohesive, professional feed.",
    },
    solution: {
      uz: "Bir xil rang palitrasi, font tanlovi va grid layout asosida oylik kontent kalendariga asoslanib 30+ post va stories shablon yaratish.",
      ru: "Создание 30+ шаблонов постов и историй на основе единой цветовой палитры, подбора шрифтов и grid-раскладки для ежемесячного контент-календаря.",
      en: "Designed 30+ post and story templates based on a unified color palette, font selection and grid layout for a monthly content calendar.",
    },
    result: {
      uz: "3 oy ichida follower soni 2x oshdi, engagement rate 5.8% ga ko'tarildi.",
      ru: "За 3 месяца количество подписчиков удвоилось, уровень вовлечённости вырос до 5,8%.",
      en: "Followers doubled in 3 months, engagement rate rose to 5.8%.",
    },
    type: "image",
  },
  {
    id: 4,
    category: "smm",
    image: "assets/images/portfolio_smm.jpg",
    title: {
      uz: "Meta Ads Kreativ Kampaniya",
      ru: "Креативная Кампания Meta Ads",
      en: "Meta Ads Creative Campaign",
    },
    tags: { uz: "Targeting · Meta Ads · Kreativ", ru: "Таргетинг · Meta Ads · Креатив", en: "Targeting · Meta Ads · Creative" },
    task: {
      uz: "Online do'kon uchun Black Friday kampaniyasida konversiyani oshiradigan reklama kreativlari tayyorlash.",
      ru: "Подготовка рекламных креативов для Black Friday кампании интернет-магазина, повышающих конверсию.",
      en: "Prepare ad creatives for an online store's Black Friday campaign to increase conversions.",
    },
    solution: {
      uz: "A/B test uchun 12 ta turli kreativ varianti: video, carousel va statik banner formatlarida.",
      ru: "12 различных вариантов креативов для A/B тестирования в форматах видео, карусели и статичных баннеров.",
      en: "12 different creative variants for A/B testing in video, carousel, and static banner formats.",
    },
    result: {
      uz: "Eng yaxshi kreativ varianti 3.2% CTR va ROAS 4.1 ko'rsatkichiga erishdi.",
      ru: "Лучший вариант креатива достиг CTR 3,2% и ROAS 4,1.",
      en: "The best creative variant achieved a 3.2% CTR and 4.1 ROAS.",
    },
    type: "image",
  },

  // ── AI ART ────────────────────────────────────────────────
  {
    id: 5,
    category: "ai",
    image: "assets/images/portfolio_ai.jpg",
    title: {
      uz: "AI Editorial Portret Seriya",
      ru: "AI Серия Эдиториальных Портретов",
      en: "AI Editorial Portrait Series",
    },
    tags: { uz: "Midjourney · AI Art · Editorial", ru: "Midjourney · AI Art · Editorial", en: "Midjourney · AI Art · Editorial" },
    task: {
      uz: "Fashion brendning lookbook'i uchun studio fotosessiya o'rniga AI yordamida editorial sifatida portretlar yaratish.",
      ru: "Создание с помощью AI редакционных портретов для лукбука fashion-бренда вместо студийной фотосессии.",
      en: "Generate AI editorial portraits for a fashion brand's lookbook as an alternative to a studio photoshoot.",
    },
    solution: {
      uz: "Midjourney v6 + custom prompt engineering orqali brendning rang va estetikasiga mos 20 ta yaxlit portret seriyasi.",
      ru: "Серия из 20 цельных портретов, соответствующих цветовой гамме и эстетике бренда, созданных с помощью Midjourney v6 и кастомного prompt-инжиниринга.",
      en: "A cohesive series of 20 portraits matching the brand's color and aesthetics, created via Midjourney v6 with custom prompt engineering.",
    },
    result: {
      uz: "Studio fotosessiya narxidan 70% tejamkorlik bilan brendning eng yuqori sifatli lookbook'i tayyorlandi.",
      ru: "Подготовлен лукбук бренда высочайшего качества с экономией 70% по сравнению со стоимостью студийной фотосессии.",
      en: "The brand's highest-quality lookbook was delivered at 70% savings compared to studio photoshoot costs.",
    },
    type: "image",
  },
  {
    id: 6,
    category: "ai",
    image: "assets/images/portfolio_ai.jpg",
    title: {
      uz: "AI Mahsulot Vizualizatsiya",
      ru: "AI Визуализация Продукта",
      en: "AI Product Visualization",
    },
    tags: { uz: "AI Art · Mahsulot · Vizualizatsiya", ru: "AI Art · Продукт · Визуализация", en: "AI Art · Product · Visualization" },
    task: {
      uz: "Skincare brend uchun mahsulot fotosuratlari va lifestyle kontentini AI orqali yaratish.",
      ru: "Создание фотографий продукта и лайфстайл-контента для бренда по уходу за кожей с помощью AI.",
      en: "Generate product photos and lifestyle content for a skincare brand using AI tools.",
    },
    solution: {
      uz: "RunwayML va Stable Diffusion kombinatsiyasida 15 ta mahsulot scena, packaging visualization va lifestyle shot.",
      ru: "15 сцен продукта, визуализация упаковки и лайфстайл-снимки в комбинации RunwayML и Stable Diffusion.",
      en: "15 product scenes, packaging visualizations, and lifestyle shots using a combination of RunwayML and Stable Diffusion.",
    },
    result: {
      uz: "E-commerce sahifasida konversiya 28% ga oshdi, qayta buyurtmalar soni ikki baravarga ko'paydi.",
      ru: "Конверсия на странице электронной коммерции выросла на 28%, количество повторных заказов удвоилось.",
      en: "E-commerce page conversion rate increased by 28%, repeat orders doubled.",
    },
    type: "image",
  },

  // ── UI/UX ─────────────────────────────────────────────────
  {
    id: 7,
    category: "uiux",
    image: "assets/images/portfolio_uiux.jpg",
    title: {
      uz: "Telegram Bot UI Dizayni",
      ru: "Дизайн UI Telegram Бота",
      en: "Telegram Bot UI Design",
    },
    tags: { uz: "UI/UX · Telegram Bot · Dizayn", ru: "UI/UX · Telegram Bot · Дизайн", en: "UI/UX · Telegram Bot · Design" },
    task: {
      uz: "Online do'kon uchun Figma da to'liq Telegram bot interfeysini va user flow ni loyihalash.",
      ru: "Проектирование полного интерфейса Telegram-бота и пользовательского пути для интернет-магазина в Figma.",
      en: "Design a complete Telegram bot interface and user flow in Figma for an online store.",
    },
    solution: {
      uz: "50+ ekran wireframe, interaktiv prototip va button/menu hierarchiya tizimi bilan to'liq Figma dizayn tizimi.",
      ru: "Полная дизайн-система Figma с более чем 50 экранными вайрфреймами, интерактивным прототипом и системой иерархии кнопок/меню.",
      en: "A complete Figma design system with 50+ screen wireframes, interactive prototype, and button/menu hierarchy.",
    },
    result: {
      uz: "Bot ishga tushgandan keyin buyurtmalar 35% ga oshdi va mijoz onboarding vaqti 2 daqiqadan 45 soniyaga tushdi.",
      ru: "После запуска бота заказы выросли на 35%, а время онбординга клиента сократилось с 2 минут до 45 секунд.",
      en: "After bot launch, orders increased 35% and customer onboarding time dropped from 2 minutes to 45 seconds.",
    },
    type: "image",
  },
  {
    id: 8,
    category: "uiux",
    image: "assets/images/portfolio_uiux.jpg",
    title: {
      uz: "Landing Page Dizayni",
      ru: "Дизайн Landing Page",
      en: "Landing Page Design",
    },
    tags: { uz: "UI/UX · Landing · Web", ru: "UI/UX · Landing · Web", en: "UI/UX · Landing · Web" },
    task: {
      uz: "Fitness markazi uchun konversiyaga mo'ljallangan landing page dizaynini yaratish.",
      ru: "Создание дизайна landing page, ориентированного на конверсию, для фитнес-центра.",
      en: "Create a conversion-focused landing page design for a fitness center.",
    },
    solution: {
      uz: "CTA ierarxiyasiga asoslanib qurilgan bir sahifali dizayn: hero, xizmatlar, narxlar, testimonials, forma — mobil birinchi yondashuv.",
      ru: "Одностраничный дизайн на основе иерархии CTA: хиро, услуги, цены, отзывы, форма — с мобильным подходом.",
      en: "A single-page design built on CTA hierarchy: hero, services, pricing, testimonials, form — with mobile-first approach.",
    },
    result: {
      uz: "A/B test da yangi dizayn lead generation ni 52% ga oshirdi.",
      ru: "В A/B-тесте новый дизайн увеличил лидогенерацию на 52%.",
      en: "In A/B testing, the new design increased lead generation by 52%.",
    },
    type: "image",
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Jasur Yusupov",
    role: { uz: "FiRSTiFY Asoschisi", ru: "Основатель FiRSTiFY", en: "Founder, FiRSTiFY" },
    text: {
      uz: "Abdullokh bizning brendimizni butunlay yangi darajaga ko'tardi. Brandbook sifati va tezligi bizni hayratda qoldirdi. Professional, ijodiy va ishonchli hamkor!",
      ru: "Абдуллох поднял наш бренд на совершенно новый уровень. Качество брендбука и скорость работы нас поразили. Профессиональный, творческий и надёжный партнёр!",
      en: "Abdullokh took our brand to a completely new level. The quality of the brand book and speed of work amazed us. A professional, creative, and reliable partner!",
    },
    avatar: null,
    stars: 5,
  },
  {
    id: 2,
    name: "Malika Rahimova",
    role: { uz: "Marketing Menejeri, Kiyim brend", ru: "Маркетинг-менеджер, Бренд одежды", en: "Marketing Manager, Fashion Brand" },
    text: {
      uz: "Instagram sahifamiz Abdullokh bilan ishlashdan keyin tanib bo'lmaydigan darajada o'zgardi. Follower soni uchdan bir oyda ikki barobarga oshdi. Kreativlik va natijaga yo'naltirilgan yondashuvi ajoyib!",
      ru: "Наша страница Instagram после работы с Абдуллохом изменилась до неузнаваемости. Количество подписчиков утроилось за три месяца. Потрясающий творческий и результатно-ориентированный подход!",
      en: "Our Instagram page changed beyond recognition after working with Abdullokh. Follower count tripled in three months. Amazing creative and results-driven approach!",
    },
    avatar: null,
    stars: 5,
  },
  {
    id: 3,
    name: "Bobur Nazarov",
    role: { uz: "Online do'kon egasi", ru: "Владелец интернет-магазина", en: "Online Store Owner" },
    text: {
      uz: "Telegram bot interfeysini shunchaki chiroyli emas, balki ishlashi oson va konversiyaga yo'naltirilgan qilib loyihaladi. Bot ishga tushgandan keyin buyurtmalar keskin oshdi.",
      ru: "Интерфейс Telegram-бота спроектировал не просто красиво, а удобным и ориентированным на конверсию. После запуска бота заказы резко выросли.",
      en: "Designed the Telegram bot interface not just beautifully, but easy to use and conversion-focused. Orders increased sharply after the bot launched.",
    },
    avatar: null,
    stars: 5,
  },
];

// ── SKILLS ────────────────────────────────────────────────────
const skillsData = [
  {
    category: { uz: "Adobe Creative Suite", ru: "Adobe Creative Suite", en: "Adobe Creative Suite" },
    icon: "🎨",
    tools: [
      { name: "Photoshop", level: "expert", icon: "Ps" },
      { name: "Illustrator", level: "expert", icon: "Ai" },
      { name: "After Effects", level: "advanced", icon: "Ae" },
      { name: "Premiere Pro", level: "advanced", icon: "Pr" },
      { name: "InDesign", level: "intermediate", icon: "Id" },
    ],
  },
  {
    category: { uz: "UI/UX & Web", ru: "UI/UX & Web", en: "UI/UX & Web" },
    icon: "🖥️",
    tools: [
      { name: "Figma", level: "advanced", icon: "Fg" },
      { name: "Webflow", level: "intermediate", icon: "Wf" },
      { name: "HTML/CSS", level: "intermediate", icon: "W3" },
    ],
  },
  {
    category: { uz: "AI Tools", ru: "AI Инструменты", en: "AI Tools" },
    icon: "🤖",
    tools: [
      { name: "Midjourney", level: "expert", icon: "Mj" },
      { name: "Stable Diffusion", level: "advanced", icon: "SD" },
      { name: "RunwayML", level: "advanced", icon: "Rw" },
      { name: "Leonardo AI", level: "intermediate", icon: "La" },
    ],
  },
  {
    category: { uz: "Marketing & Analytics", ru: "Маркетинг & Аналитика", en: "Marketing & Analytics" },
    icon: "📊",
    tools: [
      { name: "Meta Ads Manager", level: "advanced", icon: "MA" },
      { name: "Google Analytics", level: "intermediate", icon: "GA" },
      { name: "Canva Pro", level: "expert", icon: "Ca" },
    ],
  },
];
