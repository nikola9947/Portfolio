/* =========================
   Helpers
========================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* =========================
   I18N (DE / EN)
========================= */
const I18N = {
  de: {
    "nav.about": "ÜBER MICH",
    "nav.portfolio": "PORTFOLIO",
    "nav.resume": "LEBENSLAUF",
    "nav.contact": "KONTAKT",

    "hero.kicker": "Hallo, ich bin",
    "hero.sub": "UND DAS IST MEINE VITA",

    "section.about": "Über mich",
    "section.portfolio": "Portfolio",
    "section.resume": "Lebenslauf",
    "section.contact": "Kontakt",

    "about.body": `
      <p>
        Ich bin 26 Jahre alt und studiere <strong>Visualisierung und Interaktion in digitalen Medien</strong> –
        mit einer fundierten technischen Basis als ausgebildeter <strong>Industriemechaniker</strong>.
        Diese Kombination aus praktischer Engineering-Erfahrung und digitaler Design-Ausbildung hilft mir,
        Probleme sowohl pragmatisch als auch kreativ zu lösen.
      </p>
      <p>
        Ich spreche <strong>Deutsch und Englisch</strong> fließend, schriftlich wie mündlich,
        und arbeite gerne in Umgebungen, die kontinuierliches Lernen und interdisziplinäres Denken fördern.
        Ich habe große Neugier, neue Fähigkeiten in unterschiedlichen Bereichen zu erwerben –
        von <strong>handwerklichen Tätigkeiten</strong> wie Verputzen, Fliesenlegen und Holzarbeiten,
        bis hin zu <strong>digitalen Tools</strong> wie Adobe Creative Suite, Cinema 4D und Blender.
      </p>
      <p>
        Als <strong>visueller Lerner</strong> begeistert mich das Erstellen intuitiver und immersiver
        digitaler Erlebnisse. Mein langfristiges Ziel ist es, im Bereich <strong>UI/UX Design</strong>
        zu arbeiten – mit Fokus auf <strong>AR- und VR-Anwendungen</strong>, die insbesondere
        Mitarbeitenden und Auszubildenden helfen, komplexe Prozesse durch visuelle und interaktive Methoden
        besser zu verstehen. Gut gestaltete Interfaces können Verständnis, Effizienz und Wissenstransfer
        stark verbessern.
      </p>
    `,

    "p.spaceelevator.title": "Wie funktioniert ein Weltraumaufzug",
    "p.spaceelevator.desc": "Entwicklung und Produktion eines Erklärfilms in Form einer 3D Animation.",

    "p.basics3d.title": "Grundlagen 3D Design",
    "p.basics3d.desc": "Titelbild & Layout für das Technikmagazin „Science Vision“ (Print).",

    "p.basicsdesign.title": "Grundlagen Design",
    "p.basicsdesign.desc": "Rechter Populismus in Europa und Deutschland",

    "p.pafilm.title": "Film",
    "p.pafilm.desc": "Filmprojekt / Filmproduktion.",

    "cv.title": "Beruflicher Werdegang und Schulbildung",
    "cv.col.date": "Zeitraum",
    "cv.col.item": "Einstellungsart/Ausbildung",
    "cv.now": "Jetzt",

    "cv.1": "Realschule, Herrieden",
    "cv.2": "Berufsausbildung Industriemechanikerin, Robert Bosch GmbH, Ansbach",
    "cv.3": "Berufsoberschule, Ansbach",
    "cv.4": "Work&Travel, Australien",
    "cv.5": "Verkäuferin und Kassenfachkraft, C&A, Ansbach",
    "cv.6": "Kassenfachkraft, BGU-Baumarkt, Ansbach",
    "cv.7": "Duale Studentin Bauingenieurwesen, DB E&C, Nürnberg",
    "cv.8": "Einrichterin, Oechsler AG, Ansbach",
    "cv.9": "Verkäuferin und Kassenfachkraft, C&A, Ansbach",
    "cv.10": "Studentin Visualisierung und Interaktion in digitalen Medien, Ansbach",
    "cv.11": "Hauswirtschaftliche Hilfskraft, BRK, Ansbach",

    "cert.title": "Zeugnisse",

    "ui.prev": "Vorheriges Bild",
    "ui.next": "Nächstes Bild",
    "ui.prevPage": "Vorherige Seite",
    "ui.nextPage": "Nächste Seite",
    "ui.copy": "Kopieren",
    "ui.downloadPdf": "PDF herunterladen",
    "ui.downloadProject": "Projekt herunterladen",

    "copy.ok": "In die Zwischenablage kopiert.",
    "copy.fail": "Kopieren fehlgeschlagen. Bitte manuell kopieren.",

    "contact.mail": "E-Mail",
    "contact.phone": "Telefon",
    "contact.address": "Adresse"
  },

  en: {
    "nav.about": "ABOUT ME",
    "nav.portfolio": "PORTFOLIO",
    "nav.resume": "RESUME",
    "nav.contact": "CONTACT",

    "hero.kicker": "Hello, I’m",
    "hero.sub": "AND THIS IS MY RESUME",

    "section.about": "About Me",
    "section.portfolio": "Portfolio",
    "section.resume": "Resume",
    "section.contact": "Contact",

    "about.body": `
      <p>
        I am a 26-year-old student specializing in <strong>Visualization and Interaction in Digital Media</strong>,
        with a strong technical foundation as a trained <strong>industrial mechanic</strong>.
        This combination of hands-on engineering experience and digital design education allows me to approach problems
        from both a practical and creative perspective.
      </p>
      <p>
        I am fluent in <strong>English and German</strong>, both spoken and written, and I thrive in environments
        where continuous learning and interdisciplinary thinking are encouraged. I have a strong curiosity for
        acquiring new skills across different fields — ranging from <strong>construction work</strong> such as
        plastering walls, laying tiles, and woodworking, to <strong>digital tools and software</strong> including
        Adobe Creative Suite, Cinema 4D, and Blender.
      </p>
      <p>
        As a <strong>visual learner</strong>, I am particularly passionate about creating intuitive and immersive
        digital experiences. My long-term goal is to work in <strong>UI and UX design</strong>, with a focus on
        <strong>AR and VR applications</strong>, enabling users—especially workers and trainees—to learn complex
        processes through visual and interactive methods. I strongly believe that well-designed visual interfaces can
        significantly enhance understanding, efficiency, and knowledge transfer in both educational and professional contexts.
      </p>
    `,

    "p.spaceelevator.title": "How does a Space Elevator work",
    "p.spaceelevator.desc": "Development and production of an explanatory film in the form of a 3D animation.",

    "p.basics3d.title": "Basics 3D Design",
    "p.basics3d.desc": "Title image & layout for the tech magazine “Science Vision” (Print).",

    "p.basicsdesign.title": "Basics Design",
    "p.basicsdesign.desc": "Right-wing populism in Europe and Germany",

    "p.pafilm.title": "Film",
    "p.pafilm.desc": "Film production project.",

    "cv.title": "Professional experience and education",
    "cv.col.date": "Period",
    "cv.col.item": "Position / Education",
    "cv.now": "Present",

    "cv.1": "Secondary school, Herrieden",
    "cv.2": "Apprenticeship as industrial mechanic, Robert Bosch GmbH, Ansbach",
    "cv.3": "Vocational upper secondary school (BOS), Ansbach",
    "cv.4": "Work & Travel, Australia",
    "cv.5": "Sales assistant & cashier, C&A, Ansbach",
    "cv.6": "Cashier, BGU DIY store, Ansbach",
    "cv.7": "Dual study program (Civil Engineering), DB E&C, Nuremberg",
    "cv.8": "Machine setter, Oechsler AG, Ansbach",
    "cv.9": "Sales assistant & cashier, C&A, Ansbach",
    "cv.10": "Student (Visualization and Interaction in Digital Media), Ansbach",
    "cv.11": "Housekeeping assistant, BRK, Ansbach",

    "cert.title": "Certificates",

    "ui.prev": "Previous image",
    "ui.next": "Next image",
    "ui.prevPage": "Previous page",
    "ui.nextPage": "Next page",
    "ui.copy": "Copy",
    "ui.downloadPdf": "Download PDF",
    "ui.downloadProject": "Download project",

    "copy.ok": "Copied to clipboard.",
    "copy.fail": "Copy failed. Please copy manually.",

    "contact.mail": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address"
  }
};

const LANG_KEY = "site_lang";
let currentLang = localStorage.getItem(LANG_KEY) || "de";

function t(key) {
  return I18N?.[currentLang]?.[key] ?? key;
}

function slideText(val) {
  if (typeof val === "string") return val;
  if (val && typeof val === "object") return val[currentLang] ?? val.en ?? val.de ?? "";
  return "";
}

/* =========================
   Apply translations
========================= */
function applyI18n() {
  document.documentElement.lang = currentLang;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (typeof val === "string") el.textContent = val;
  });

  $$("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const val = t(key);
    if (typeof val === "string") el.innerHTML = val;
  });

  $$("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr") || "";
    spec.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (!attr || !key) return;
      el.setAttribute(attr.trim(), t(key.trim()));
    });
  });

  const label = $("#langLabel");
  if (label) label.textContent = currentLang.toUpperCase();
}

/* =========================
   Basic UI
========================= */
function initMobileNav() {
  const navToggle = $("#navToggle");
  const navLinks = $("#navLinks");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

function initAccordions() {
  $$("[data-accordion]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-accordion");
      const panel = document.getElementById(id);
      if (!panel) return;

      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("is-collapsed", isOpen);
    });
  });
}

function initFooterYear() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initLanguageToggle() {
  const toggle = $("#langToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
    localStorage.setItem(LANG_KEY, currentLang);

    applyI18n();
    refreshAllCarousels();

    const copyHint = $("#copyHint");
    if (copyHint) copyHint.textContent = "";
  });
}

/* =========================
   Modals
========================= */
const openVideo = $("#openVideo");
const videoModal = $("#videoModal");
const closeModal = $("#closeModal");
const projectVideo = $("#projectVideo");

const openPAFilm = $("#openPAFilm");
const paModal = $("#paModal");
const closePAModal = $("#closePAModal");
const paVideo = $("#paVideo");

const vrModal = $("#vrModal");
const closeVRModal = $("#closeVRModal");
const vrVideo = $("#vrVideo");

const YT_VIDEO_ID = "F_UIO_9s44o";
const YT_VIDEO_ID_PA = "7z4yD3w_1ZQ";

function openYouTubeModal(modalEl, iframeEl, videoId) {
  if (!modalEl || !iframeEl) return;
  modalEl.classList.add("is-open");
  iframeEl.src =
    "https://www.youtube.com/embed/" +
    videoId +
    "?autoplay=1&modestbranding=1&rel=0";
}

function closeYouTubeModal(modalEl, iframeEl) {
  if (!modalEl || !iframeEl) return;
  modalEl.classList.remove("is-open");
  iframeEl.src = "";
}

function openVRModal(videoId) {
  openYouTubeModal(vrModal, vrVideo, videoId);
}

function closeVRModalFunc() {
  closeYouTubeModal(vrModal, vrVideo);
}

function initVideoModals() {
  if (openVideo && videoModal && projectVideo) {
    openVideo.addEventListener("click", () => {
      openYouTubeModal(videoModal, projectVideo, YT_VIDEO_ID);
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      closeYouTubeModal(videoModal, projectVideo);
    });
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeYouTubeModal(videoModal, projectVideo);
      }
    });
  }

  if (openPAFilm && paModal && paVideo) {
    openPAFilm.addEventListener("click", () => {
      openYouTubeModal(paModal, paVideo, YT_VIDEO_ID_PA);
    });
  }

  if (closePAModal) {
    closePAModal.addEventListener("click", (e) => {
      e.preventDefault();
      closeYouTubeModal(paModal, paVideo);
    });
  }

  if (paModal) {
    paModal.addEventListener("click", (e) => {
      if (e.target === paModal) {
        closeYouTubeModal(paModal, paVideo);
      }
    });
  }

  if (closeVRModal) {
    closeVRModal.addEventListener("click", (e) => {
      e.preventDefault();
      closeVRModalFunc();
    });
  }

  if (vrModal) {
    vrModal.addEventListener("click", (e) => {
      if (e.target === vrModal) {
        closeVRModalFunc();
      }
    });
  }

  window.__closeVideoModal = () => closeYouTubeModal(videoModal, projectVideo);
  window.__closePAModal = () => closeYouTubeModal(paModal, paVideo);
  window.__closeVRModal = closeVRModalFunc;
}

/* =========================
   Carousel data
========================= */
const CAROUSELS = {
  design: [
    {
      type: "image",
      src: "assets/Design_Screenshot_1.png",
      title: { de: "Styleguide für Mampfi´s Ikarus Schokolade", en: "Styleguide for Mampfi´s Ikarus chocolate bar" },
      text: {
        de: "Gestaltung eines neuen Logos sowie ein zugehöriges Corporate Design Konzept für den neuen Schokoriegel.",
        en: "Design of a new logo as well as a corresponding corporate design concept for the new chocolate bar."
      }
    },
    { type: "image", src: "assets/Design_Screenshot_2.png", title: { de: "Maximale und minimale Größe des Logos", en: "Maximum and minimum size of the logo" }, text: { de: "", en: "" } },
    { type: "image", src: "assets/Design_Screenshot_3.png", title: { de: "Zugelassene Farben des Logos", en: "Allowed colors" }, text: { de: "", en: "" } },
    { type: "image", src: "assets/Design_Screenshot_4.png", title: { de: "Anwendungsbeispiele (positiv/negativ)", en: "Positive and negative application examples" }, text: { de: "", en: "" } },
    { type: "image", src: "assets/Design_Screenshot_5.png", title: { de: "Rückseite der Verpackung", en: "Backside of the packaging" }, text: { de: "", en: "" } },
    { type: "image", src: "assets/Design_Screenshot_6.png", title: { de: "Schokoriegel MockUp", en: "Chocolate bar mockup" }, text: { de: "", en: "" } },
    { type: "image", src: "assets/Design_Screenshot_7.png", title: { de: "Verpackung MockUp", en: "Packaging mockup" }, text: { de: "", en: "" } }
  ],

  photo: [
    { type: "image", src: "assets/Fotografie.png", title: { de: "Fotografie", en: "Photography" }, text: { de: "Surreale Inszenierung des Alltags", en: "Surreal staging of everyday life" } },
    { type: "image", src: "assets/Kontextbild 1.png", title: { de: "Fotografie", en: "Photography" }, text: { de: "Porträt im Sommerlicht", en: "Portrait in summer light" } },
    { type: "image", src: "assets/Kontextbild 2.png", title: { de: "Fotografie", en: "Photography" }, text: { de: "Detailbild", en: "Detail shot" } }
  ],

  "3DSurfaces": [
    { type: "image", src: "assets/Screenshot1.png", title: { de: "Cat Skull Mask", en: "Cat Skull Mask" }, text: { de: "3D Modell mit PBR-Material", en: "3D model with PBR material" } },
    { type: "image", src: "assets/Screenshot2.png", title: { de: "Cat Skull Mask", en: "Cat Skull Mask" }, text: { de: "3D Modell mit PBR-Material", en: "3D model with PBR material" } },
    { type: "image", src: "assets/Screenshot3.png", title: { de: "Cat Skull Mask", en: "Cat Skull Mask" }, text: { de: "3D Modell mit PBR-Material", en: "3D model with PBR material" } }
  ],

  VR: [
    { type: "image", src: "assets/Screenshot 1.png", title: { de: "Übersicht", en: "Overview" }, text: { de: "Unity XR Umgebung", en: "Unity XR environment" } },
    { type: "image", src: "assets/Screenshot 2.png", title: { de: "Workspace", en: "Workspace" }, text: { de: "Szene / Setup", en: "Scene setup" } },
    { type: "youtube", src: "ACxAIGchNCU", title: { de: "Gameplay", en: "Gameplay" }, text: { de: "Gameplay-Aufnahme", en: "Gameplay recording" } },
    { type: "image", src: "assets/Screenshot 3.png", title: { de: "UI Guidance", en: "UI guidance" }, text: { de: "Schritt-für-Schritt Anleitung", en: "Step-by-step instructions" } },
    { type: "image", src: "assets/Screenshot 4.png", title: { de: "Bauteile Getriebe", en: "Gearbox parts" }, text: { de: "Übersicht der Bauteile", en: "Parts overview" } },
    { type: "image", src: "assets/Screenshot 5.png", title: { de: "Welle 1", en: "Shaft 1" }, text: { de: "Fertig montierte Welle", en: "Fully assembled shaft" } }
  ],

  zeugnis_bos: [
    { type: "image", src: "assets/Zeugnis_BOS.png", title: { de: "Zeugnis BOS", en: "Certificate (BOS)" }, text: { de: "Seite 1", en: "Page 1" } },
    { type: "image", src: "assets/Zeugnis_BOS_2.png", title: { de: "Zeugnis BOS", en: "Certificate (BOS)" }, text: { de: "Seite 2", en: "Page 2" } }
  ],

  zeugnis_cunda: [
    { type: "image", src: "assets/Zeugnis_CundA.png", title: { de: "Arbeitszeugnis C&A", en: "Certificate (C&A)" }, text: { de: "Seite 1", en: "Page 1" } },
    { type: "image", src: "assets/Zeugnis_CundA_2.png", title: { de: "Arbeitszeugnis C&A", en: "Certificate (C&A)" }, text: { de: "Seite 2", en: "Page 2" } }
  ],

  zeugnis_th: [
    { type: "image", src: "assets/Zeugnis_TH_1.png", title: { de: "TH Zeugnis", en: "TH certificate" }, text: { de: "Seite 1", en: "Page 1" } },
    { type: "image", src: "assets/Zeugnis_TH_2.png", title: { de: "TH Zeugnis", en: "TH certificate" }, text: { de: "Seite 2", en: "Page 2" } },
    { type: "image", src: "assets/Zeugnis_TH_3.png", title: { de: "TH Zeugnis", en: "TH certificate" }, text: { de: "Seite 3", en: "Page 3" } },
    { type: "image", src: "assets/Zeugnis_TH_4.png", title: { de: "TH Zeugnis", en: "TH certificate" }, text: { de: "Seite 4", en: "Page 4" } },
    { type: "image", src: "assets/Zeugnis_TH_5.png", title: { de: "TH Zeugnis", en: "TH certificate" }, text: { de: "Seite 5", en: "Page 5" } }
  ],

  zeugnis_hs_ansbach: [
    { type: "image", src: "assets/Zeugnis_HS_Ansbach_1.png", title: { de: "Zeugnis HS Ansbach", en: "HS Ansbach certificate" }, text: { de: "Seite 1", en: "Page 1" } },
    { type: "image", src: "assets/Zeugnis_HS_Ansbach_2.png", title: { de: "Zeugnis HS Ansbach", en: "HS Ansbach certificate" }, text: { de: "Seite 2", en: "Page 2" } },
    { type: "image", src: "assets/Zeugnis_HS_Ansbach_3.png", title: { de: "Zeugnis HS Ansbach", en: "HS Ansbach certificate" }, text: { de: "Seite 3", en: "Page 3" } },
  ]
};

/* =========================
   Carousel rendering
========================= */
function createMedia(slide) {
  if (slide.type === "youtube") {
    const wrapper = document.createElement("div");
    wrapper.className = "carousel-youtube";

    const img = document.createElement("img");
    img.className = "carousel-media carousel-img";
    img.src = "https://img.youtube.com/vi/" + slide.src + "/hqdefault.jpg";
    img.alt = slideText(slide.title) || "Video";

    const play = document.createElement("div");
    play.className = "youtube-play";

    wrapper.appendChild(img);
    wrapper.appendChild(play);

    wrapper.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openVRModal(slide.src);
    });

    return wrapper;
  }

  if (slide.type === "video") {
    const v = document.createElement("video");
    v.className = "carousel-media";
    v.src = slide.src;
    v.controls = true;
    v.playsInline = true;
    v.preload = "metadata";
    return v;
  }

  const img = document.createElement("img");
  img.className = "carousel-media carousel-img";
  img.src = slide.src;
  img.alt = slideText(slide.title) || "Slide";
  img.loading = "lazy";
  return img;
}

const carouselStates = new Map();

function initCarousel(card) {
  const key = card.getAttribute("data-carousel");
  const slides = CAROUSELS[key];
  if (!slides || !slides.length) return;

  const titleEl = $(".project-title", card);
  const textEl = $(".project-desc", card);
  const dotsWrap = $(".carousel-dots", card);
  const btnPrev = $(".carousel-btn.prev", card);
  const btnNext = $(".carousel-btn.next", card);
  const imgEl = $(".carousel-img", card);
  const contentEl = $(".carousel-content", card);

  if (!dotsWrap) return;

  let index = 0;

  function renderDots() {
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (i === index ? " is-active" : "");
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        goTo(i);
      });
      dotsWrap.appendChild(dot);
    });
  }

  function stopVideoIfAny() {
    const v = $("video", card);
    if (v) {
      v.pause();
      v.currentTime = 0;
    }

    const iframe = $("iframe", card);
    if (iframe) {
      iframe.src = "";
    }
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    const slide = slides[index];

    stopVideoIfAny();

    if (contentEl) {
      contentEl.innerHTML = "";
      contentEl.appendChild(createMedia(slide));
    } else if (imgEl) {
      if (slide.type === "image") {
        imgEl.src = slide.src;
        imgEl.alt = slideText(slide.title) || `${key} ${index + 1}`;
      }
    }

    if (titleEl) titleEl.textContent = slideText(slide.title);
    if (textEl) textEl.textContent = slideText(slide.text);
    renderDots();

    carouselStates.set(card, { goTo, getIndex: () => index });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(index - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(index + 1);
    });
  }

  goTo(0);
}

function initAllCarousels() {
  carouselStates.clear();
  $$(".project-carousel[data-carousel]").forEach(initCarousel);
}

function refreshAllCarousels() {
  carouselStates.forEach((state) => {
    const idx = state.getIndex();
    state.goTo(idx);
  });
}

/* =========================
   Lightbox
========================= */
function initLightbox() {
  const lightbox = $("#imageLightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxClose = $("#lightboxClose");

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    if (lightboxImg) lightboxImg.src = "";
  }

  document.addEventListener("click", (e) => {
    const clickedImage = e.target.closest(".carousel-img, .zoomable-img");
    if (!clickedImage || !lightbox || !lightboxImg) return;

    if (e.target.closest(".carousel-btn") || e.target.closest(".dot") || e.target.closest(".carousel-youtube")) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    lightboxImg.src = clickedImage.src;
    lightbox.classList.add("is-open");
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", (e) => {
      e.preventDefault();
      closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.__closeLightbox = closeLightbox;
}

/* =========================
   Copy buttons
========================= */
function initCopyButtons() {
  const copyHint = $("#copyHint");

  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    const text = btn.getAttribute("data-copy") || "";

    try {
      await navigator.clipboard.writeText(text);
      if (copyHint) copyHint.textContent = t("copy.ok");
    } catch {
      if (copyHint) copyHint.textContent = t("copy.fail");
    }
  });
}

/* =========================
   Escape key
========================= */
function initEscapeKey() {
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    window.__closeVideoModal?.();
    window.__closePAModal?.();
    window.__closeVRModal?.();
    window.__closeLightbox?.();
  });
}

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
  initMobileNav();
  initAccordions();
  initFooterYear();
  initLanguageToggle();
  initVideoModals();
  initAllCarousels();
  initLightbox();
  initCopyButtons();
  initEscapeKey();
});