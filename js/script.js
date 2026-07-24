/* ==========================================================================
   Configuración de Tailwind CSS (CDN)
   Debe ejecutarse justo después de cargar el script del CDN de Tailwind,
   por eso este archivo se referencia inmediatamente a continuación de él
   en el <head> del documento.
   ========================================================================== */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                tertiary: "#2FB6E0",
                "on-tertiary": "#ffffff",
                "tertiary-container": "#E0F7FF",
                "on-tertiary-container": "#0B4B66",
                "tertiary-fixed": "#E0F7FF",
                "tertiary-fixed-dim": "#2FB6E0",
                "on-tertiary-fixed": "#0B4B66",
                "on-tertiary-fixed-variant": "#0B4B66",

                primary: "#1E6FD9",
                "on-primary": "#ffffff",
                "primary-container": "#0B2545",
                "on-primary-container": "#ffffff",
                "primary-fixed": "#DCEBFC",
                "primary-fixed-dim": "#8FC4FF",
                "on-primary-fixed": "#0B2545",
                "on-primary-fixed-variant": "#123A6B",
                "inverse-primary": "#8FC4FF",

                secondary: "#5AC8FA",
                "on-secondary": "#072035",
                "secondary-container": "#E4F6FF",
                "on-secondary-container": "#0B2545",
                "secondary-fixed": "#E4F6FF",
                "secondary-fixed-dim": "#5AC8FA",
                "on-secondary-fixed": "#0B2545",
                "on-secondary-fixed-variant": "#123A6B",

                "outline-variant": "#D7E3F0",
                outline: "#94A9C4",

                "surface-container-highest": "#D9E7F5",
                "surface-container-high": "#E4EEF9",
                "surface-container": "#EEF4FB",
                "surface-container-low": "#F7FAFD",
                "surface-container-lowest": "#ffffff",
                "surface-variant": "#EAF1FA",
                "surface-dim": "#F2F6FB",
                "surface-bright": "#ffffff",
                surface: "#ffffff",
                "on-surface": "#0B2545",
                "on-surface-variant": "#4B5A72",

                "on-background": "#0B2545",
                background: "#ffffff",

                "inverse-surface": "#0B2545",
                "inverse-on-surface": "#ffffff",

                error: "#DC2626",
                "on-error": "#ffffff",
                "error-container": "#FEE2E2",
                "on-error-container": "#7F1D1D",

                dark: {
                    "tertiary": "#5DC5E8",
                    "on-tertiary": "#003544",
                    "tertiary-container": "#0B4B66",
                    "on-tertiary-container": "#C0EEFF",

                    "primary": "#8FC4FF",
                    "on-primary": "#003060",
                    "primary-container": "#1E6FD9",
                    "on-primary-container": "#DCEBFC",

                    "secondary": "#7DD4FF",
                    "on-secondary": "#003544",
                    "secondary-container": "#004D66",
                    "on-secondary-container": "#E4F6FF",

                    "outline-variant": "#1c3050",
                    "outline": "#5a7090",

                    "surface-container-highest": "#2a3f5c",
                    "surface-container-high": "#1c3050",
                    "surface-container": "#162740",
                    "surface-container-low": "#0f1d32",
                    "surface-container-lowest": "#0a1628",
                    "surface-variant": "#162740",
                    "surface-dim": "#0a1628",
                    "surface-bright": "#1c3050",
                    "surface": "#0f1d32",
                    "on-surface": "#e2eaf4",
                    "on-surface-variant": "#8e9eb5",

                    "on-background": "#e2eaf4",
                    "background": "#0a1628",

                    "inverse-surface": "#e2eaf4",
                    "inverse-on-surface": "#0a1628",

                    "error": "#FFB4AB",
                    "on-error": "#690005",
                    "error-container": "#93000A",
                    "on-error-container": "#FFDAD6"
                }
            },
            borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
            spacing: { "stack-md": "24px", "section-padding": "120px", gutter: "24px", "stack-sm": "8px", "margin-mobile": "20px", "stack-lg": "64px", "container-max": "1200px" },
            fontFamily: {
                "display-lg": ["Plus Jakarta Sans"], "body-md": ["Inter"], code: ["Geist"],
                "display-lg-mobile": ["Plus Jakarta Sans"], "headline-md": ["Plus Jakarta Sans"],
                "body-lg": ["Inter"], "label-mono": ["Geist"], headline: ["Plus Jakarta Sans"],
                display: ["Plus Jakarta Sans"], body: ["Inter"], label: ["Geist"]
            },
            fontSize: {
                "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
                "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
                code: ["14px", { lineHeight: "1.6", fontWeight: "400" }],
                "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "800" }],
                "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "700" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
                "label-mono": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }]
            }
        }
    }
};

/* ==========================================================================
   Lógica de la interfaz
   Se ejecuta una vez que el DOM está listo.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
    initNavActiveState();
});

/**
 * Habilita el desplazamiento suave para todos los enlaces internos (#anchor).
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/**
 * Revela cada sección con una animación de aparición al entrar en el viewport.
 */
function initScrollReveal() {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
}

/**
 * Marca como activo el link del nav en el que se hizo click (subrayado + color),
 * quitando el estado activo del resto. Al cargar la página, activa el link que
 * corresponda al hash actual de la URL (o "Inicio" por defecto).
 */
function initNavActiveState() {
    const navLinks = document.querySelectorAll('header nav .nav-link');
    if (!navLinks.length) return;

    function setActiveLink(link) {
        navLinks.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', () => setActiveLink(link));
    });

    const currentHash = window.location.hash;
    const initialLink = Array.from(navLinks).find((l) => l.getAttribute('href') === currentHash) || navLinks[0];
    setActiveLink(initialLink);
}

/**
 * Intercepta el envío del formulario de contacto (no hay backend conectado)
 * y muestra una confirmación de demo al usuario.
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Este formulario es una demo — conectalo a un backend o a un servicio de formularios para recibir mensajes reales.');
        contactForm.reset();
    });
}

/**
 * Inicializa el modo oscuro: lee la preferencia guardada, respeta la
 * preferencia del sistema si no hay nada guardado, y configura el toggle.
 */
function initDarkMode() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const sunIcon = toggle.querySelector('.icon-sun');
    const moonIcon = toggle.querySelector('.icon-moon');

    function applyTheme(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
        if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    }

    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    applyTheme(getPreferredTheme());

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        const next = !isDark;
        applyTheme(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    });
}
