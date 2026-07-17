// ============================================================
// i18n.js — Multilingual Content (UZ / RU / EN)
// Abdullokh Tashpulatov Portfolio
// ============================================================

const i18nData = {
  uz: {
    nav: {
      about: "Men haqimda",
      portfolio: "Portfolio",
      skills: "Ko'nikmalar",
      services: "Xizmatlar",
      contact: "Bog'lanish",
    },
    hero: {
      label: "Abdullokh Tashpulatov tomonidan",
      title: "Kreativ Dizayner",
      subtitle: "& Visual Storyteller",
      description:
        "Brendlar uchun kuchli vizual identifikatsiya, video kontent va innovatsion digital yechimlar yarataman.",
      cta: "Ishlarimni ko'rish",
      cta2: "Bog'lanish",
    },
    about: {
      sectionLabel: "Men haqimda",
      title: "Vizual kommunikatsiya orqali biznesni rivojlantiraman",
      bio1:
        "Assalomu alaykum, men Abdullokh Tashpulatov — grafik dizayner, videograf va video montaj ustasiman. So'nggi 2+ yil davomida brendlar va kichik bizneslar uchun vizual yechimlar yaratib kelaman.",
      bio2:
        "Faoliyatim davomida brending, ijtimoiy tarmoqlar uchun dizaynlar, reklama materiallari, foto va video kontent, shuningdek, professional video montaj yo'nalishlarida ishladim.",
      bio3:
        "Har bir loyihada asosiy maqsadim nafaqat chiroyli ko'rinish yaratish, balki mijozning maqsadiga xizmat qiladigan samarali vizual kommunikatsiyani taqdim etishdir.",
      resumeBtn: "Rezyume yuklab olish",
      experience: "yil tajriba",
      projects: "loyiha",
      clients: "mijoz",
    },
    portfolio: {
      sectionLabel: "Portfolio",
      title: "Tanlangan Ishlar",
      filterAll: "Hammasi",
      filterBranding: "Branding",
      filterSmm: "SMM & Targeting",
      filterVideo: "Video & Motion",
      filterAi: "AI Art",
      filterUiux: "UI/UX",
      viewProject: "Loyihani ko'rish",
      viewAll: "Barcha ishlar",
    },
    testimonials: {
      sectionLabel: "Mijozlar fikri",
      title: "Ular nima deydi",
      leaveReview: "Fikr qoldirish",
      reviewFormTitle: "Sizning fikringiz",
      reviewFormSubtitle: "Hamkorligimiz haqida fikringizni bildiring — u bu sahifada paydo bo'lishi mumkin.",
      ratingLabel: "Baholang",
      reviewNamePlaceholder: "Ismingiz",
      reviewRolePlaceholder: "Kompaniya / Lavozim",
      reviewTextPlaceholder: "Hamkorligimiz haqida yozing...",
      reviewSubmitBtn: "Yuborish",
      reviewSending: "Yuborilmoqda...",
      reviewSuccessMsg: "✅ Rahmat! Fikringiz Telegramga yuborildi.",
      reviewErrorMsg: "❌ Xatolik yuz berdi. Qayta urinib ko'ring.",
      reviewConfigError: "⚠️ Bot sozlanmagan. Config.js faylini to'ldiring.",
      cancelBtn: "Bekor qilish",
      starsError: "Iltimos, baho bering.",
      reviewFieldsError: "Iltimos, barcha maydonlarni to'ldiring.",
    },
    skills: {
      sectionLabel: "Ko'nikmalar",
      title: "Dasturlar va Texnologiyalar",
      beginner: "Boshlang'ich",
      intermediate: "O'rta",
      advanced: "Yuqori",
      expert: "Ekspert",
    },
    services: {
      sectionLabel: "Xizmatlar",
      title: "Nima qila olaman",
      items: [
        {
          title: "Branding & Identifikatsiya",
          desc: "Logo, brandbook, korporativ identifikatsiya — brendingizni esda qolarli qilamiz.",
        },
        {
          title: "SMM & Targeting",
          desc: "Instagram dizayn, reklama kreativlari va target kampaniyalar — har bir post natija beradi.",
        },
        {
          title: "Video & Motion Design",
          desc: "Professional montaj, animatsiya va motion grafika — kontentingiz jonlanadi.",
        },
        {
          title: "AI Art & Innovation",
          desc: "Midjourney, Stable Diffusion va boshqa AI vositalar orqali noyob vizual yechimlar.",
        },
      ],
    },
    contact: {
      sectionLabel: "Bog'lanish",
      title: "Loyihangizni birga amalga oshiramiz",
      subtitle:
        "Yangi loyiha, hamkorlik yoki savol bo'lsa — yozing, tez javob beraman.",
      namePlaceholder: "Ismingiz",
      contactPlaceholder: "Telegram yoki Email",
      messagePlaceholder: "Loyiha haqida qisqacha aytib bering...",
      sendBtn: "Xabar yuborish",
      sending: "Yuborilmoqda...",
      successMsg: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog'lanaman.",
      errorMsg: "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
      aiChatBtn: "AI Chatbot",
      aiChatStatus: "Online",
      aiWelcome: "Assalomu alaykum! Men Abdullokhning AI yordamchisiman. Sizga qanday xizmatlar (branding, SMM, video, UI/UX) kerakligi haqida so'rashingiz mumkin. Sizga qanday yordam bera olaman?",
      aiInputPlaceholder: "Xabaringizni yozing...",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan",
    },
  },

  ru: {
    nav: {
      about: "Обо мне",
      portfolio: "Портфолио",
      skills: "Навыки",
      services: "Услуги",
      contact: "Контакт",
    },
    hero: {
      label: "Abdullokh Tashpulatov",
      title: "Креативный Дизайнер",
      subtitle: "& Visual Storyteller",
      description:
        "Создаю сильную визуальную идентичность, видео-контент и инновационные digital-решения для брендов.",
      cta: "Смотреть работы",
      cta2: "Связаться",
    },
    about: {
      sectionLabel: "Обо мне",
      title: "Развиваю бизнес через визуальную коммуникацию",
      bio1:
        "Привет, я Абдуллох Ташпулатов — графический дизайнер, видеограф и мастер видеомонтажа. Более 2 лет создаю визуальные решения для брендов и малого бизнеса.",
      bio2:
        "В своей деятельности я работал в направлениях брендинга, дизайна для социальных сетей, рекламных материалов, фото и видеоконтента, а также профессионального видеомонтажа.",
      bio3:
        "Главная цель в каждом проекте — не просто создать красивый внешний вид, но и предоставить эффективную визуальную коммуникацию, служащую цели клиента.",
      resumeBtn: "Скачать резюме",
      experience: "лет опыта",
      projects: "проектов",
      clients: "клиентов",
    },
    portfolio: {
      sectionLabel: "Портфолио",
      title: "Избранные Работы",
      filterAll: "Все",
      filterBranding: "Брендинг",
      filterSmm: "SMM & Таргет",
      filterVideo: "Видео & Моушн",
      filterAi: "AI Art",
      filterUiux: "UI/UX",
      viewProject: "Смотреть проект",
      viewAll: "Все работы",
    },
    testimonials: {
      sectionLabel: "Отзывы клиентов",
      title: "Что говорят клиенты",
      leaveReview: "Оставить отзыв",
      reviewFormTitle: "Ваш отзыв",
      reviewFormSubtitle: "Поделитесь впечатлением о нашем сотрудничестве — он может появиться на этой странице.",
      ratingLabel: "Оценить",
      reviewNamePlaceholder: "Ваше имя",
      reviewRolePlaceholder: "Компания / Должность",
      reviewTextPlaceholder: "Напишите о нашем сотрудничестве...",
      reviewSubmitBtn: "Отправить",
      reviewSending: "Отправляется...",
      reviewSuccessMsg: "✅ Спасибо! Ваш отзыв отправлен в Telegram.",
      reviewErrorMsg: "❌ Произошла ошибка. Попробуйте ещё раз.",
      reviewConfigError: "⚠️ Бот не настроен. Заполните файл config.js.",
      cancelBtn: "Отмена",
      starsError: "Пожалуйста, поставьте оценку.",
      reviewFieldsError: "Пожалуйста, заполните все поля.",
    },
    skills: {
      sectionLabel: "Навыки",
      title: "Программы и Технологии",
      beginner: "Начинающий",
      intermediate: "Средний",
      advanced: "Продвинутый",
      expert: "Эксперт",
    },
    services: {
      sectionLabel: "Услуги",
      title: "Что я могу сделать",
      items: [
        {
          title: "Брендинг & Идентификация",
          desc: "Логотип, брендбук, корпоративная идентичность — делаем ваш бренд запоминаемым.",
        },
        {
          title: "SMM & Таргетинг",
          desc: "Дизайн для Instagram, рекламные креативы и таргет-кампании — каждый пост даёт результат.",
        },
        {
          title: "Видео & Моушн Дизайн",
          desc: "Профессиональный монтаж, анимация и моушн-графика — ваш контент оживает.",
        },
        {
          title: "AI Art & Инновации",
          desc: "Уникальные визуальные решения с помощью Midjourney, Stable Diffusion и других AI-инструментов.",
        },
      ],
    },
    contact: {
      sectionLabel: "Контакт",
      title: "Реализуем ваш проект вместе",
      subtitle:
        "Новый проект, сотрудничество или вопрос — пишите, отвечу быстро.",
      namePlaceholder: "Ваше имя",
      contactPlaceholder: "Telegram или Email",
      messagePlaceholder: "Расскажите коротко о проекте...",
      sendBtn: "Отправить сообщение",
      sending: "Отправляется...",
      successMsg: "Сообщение успешно отправлено! Свяжусь с вами в ближайшее время.",
      errorMsg: "Произошла ошибка. Пожалуйста, попробуйте ещё раз.",
      aiChatBtn: "AI Чатбот",
      aiChatStatus: "Онлайн",
      aiWelcome: "Здравствуйте! Я ИИ-ассистент Абдуллоха. Вы можете спросить меня о его услугах (брендинг, SMM, видео, UI/UX). Чем я могу помочь?",
      aiInputPlaceholder: "Напишите сообщение...",
    },
    footer: {
      rights: "Все права защищены",
    },
  },

  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      skills: "Skills",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      label: "By Abdullokh Tashpulatov",
      title: "Creative Designer",
      subtitle: "& Visual Storyteller",
      description:
        "I craft strong visual identities, video content, and innovative digital solutions for brands that want to stand out.",
      cta: "View My Work",
      cta2: "Get in Touch",
    },
    about: {
      sectionLabel: "About Me",
      title: "Growing Businesses Through Visual Communication",
      bio1:
        "Hello, I'm Abdullokh Tashpulatov — a graphic designer, videographer, and video editor. For 2+ years I've been creating visual solutions for brands and small businesses.",
      bio2:
        "My work spans branding, social media design, advertising materials, photo and video content production, and professional video editing.",
      bio3:
        "In every project, my core goal is not just to create something beautiful, but to deliver effective visual communication that serves the client's objectives.",
      resumeBtn: "Download Resume",
      experience: "years experience",
      projects: "projects",
      clients: "clients",
    },
    portfolio: {
      sectionLabel: "Portfolio",
      title: "Selected Works",
      filterAll: "All",
      filterBranding: "Branding",
      filterSmm: "SMM & Targeting",
      filterVideo: "Video & Motion",
      filterAi: "AI Art",
      filterUiux: "UI/UX",
      viewProject: "View Project",
      viewAll: "All Works",
    },
    testimonials: {
      sectionLabel: "Testimonials",
      title: "What Clients Say",
      leaveReview: "Leave a Review",
      reviewFormTitle: "Your Review",
      reviewFormSubtitle: "Share your experience working together — it may appear on this page.",
      ratingLabel: "Rate",
      reviewNamePlaceholder: "Your name",
      reviewRolePlaceholder: "Company / Position",
      reviewTextPlaceholder: "Write about our collaboration...",
      reviewSubmitBtn: "Submit Review",
      reviewSending: "Sending...",
      reviewSuccessMsg: "✅ Thank you! Your review was sent to Telegram.",
      reviewErrorMsg: "❌ An error occurred. Please try again.",
      reviewConfigError: "⚠️ Bot not configured. Fill in config.js.",
      cancelBtn: "Cancel",
      starsError: "Please give a rating.",
      reviewFieldsError: "Please fill in all fields.",
    },
    skills: {
      sectionLabel: "Skills",
      title: "Tools & Technologies",
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert",
    },
    services: {
      sectionLabel: "Services",
      title: "What I Can Do",
      items: [
        {
          title: "Branding & Identity",
          desc: "Logo, brand book, corporate identity — making your brand unforgettable.",
        },
        {
          title: "SMM & Targeting",
          desc: "Instagram design, ad creatives, and targeted campaigns — every post drives results.",
        },
        {
          title: "Video & Motion Design",
          desc: "Professional editing, animation, and motion graphics — bringing your content to life.",
        },
        {
          title: "AI Art & Innovation",
          desc: "Unique visual solutions using Midjourney, Stable Diffusion, and other AI tools.",
        },
      ],
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Build Your Project Together",
      subtitle:
        "New project, collaboration, or question — write to me, I respond fast.",
      namePlaceholder: "Your name",
      contactPlaceholder: "Telegram or Email",
      messagePlaceholder: "Tell me briefly about your project...",
      sendBtn: "Send Message",
      sending: "Sending...",
      successMsg: "Message sent successfully! I'll get back to you soon.",
      errorMsg: "An error occurred. Please try again.",
      aiChatBtn: "AI Chatbot",
      aiChatStatus: "Online",
      aiWelcome: "Hello! I am Abdullokh's AI assistant. You can ask me about his services (branding, SMM, video, UI/UX). How can I help you today?",
      aiInputPlaceholder: "Type your message...",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};
