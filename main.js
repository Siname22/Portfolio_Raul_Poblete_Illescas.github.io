// Estructura de Datos
const portfolioData = {
    about: "Soy un Desarrollador Full Stack afincado en Madrid con más de 3 años de experiencia construyendo aplicaciones escalables. Mi core técnico reside en Angular para el frontend y Python para el backend, siempre con una mentalidad orientada a la infraestructura cloud (Docker, AWS, Linux/RHEL). Recientemente, he centrado mi carrera en la Inteligencia Artificial Generativa, integrando LLMs (APIs de OpenAI y Anthropic) para automatizar procesos complejos, reducir tiempos operativos y crear productos digitales más inteligentes.",
    
    projects: [
        {
            title: "BooksGallery",
            desc: "SPA desarrollada desde cero y lista para producción. Backend contenerizado y desplegado con Docker/Podman, consumiendo APIs RESTful optimizadas.",
            badges: ["Angular 15+", "Python", "Docker"]
        },
        {
            title: "Ecosistema IA & Classroom Organizer",
            desc: "Portfolio de herramientas en producción integrando LLMs para la automatización y organización académica.",
            badges: ["Claude API", "OpenAI API"]
        },
        {
            title: "CreacionCarpetasDriveScript",
            desc: "Script de automatización para la generación masiva de estructuras de carpetas en Google Drive mediante la API oficial.",
            badges: ["Python", "Google API"]
        },
        {
            title: "LTK Manager",
            desc: "Herramienta desarrollada para la gestión local de archivos y optimización de procesos (incluye dependencias de sistema y ejecutables generados).",
            badges: ["Python", "System"]
        },
        {
            title: "CreacionModManus",
            desc: "Script y estructura documental orientada a la identificación y modelado de estructuras de datos (Manus).",
            badges: ["Data Parsing", "Markdown"]
        }
    ],

    experience: [
        {
            role: "Técnico de Soporte IT - L1 Onsite",
            company: "IMPRESSIVE TECH",
            date: "Ene 2026 - Presente",
            desc: "Soporte y resolución de incidencias en entornos corporativos (Windows 10/11, Active Directory, ITSM). Automatización de tareas repetitivas mediante scripting para reducir tiempos de resolución."
        },
        {
            role: "Desarrollador Web",
            company: "TRAGSATEC",
            date: "Sep 2023 - Jul 2024",
            desc: "Lideré el mantenimiento evolutivo y monitorización de la plataforma web del Instituto de las Mujeres, garantizando disponibilidad 24/7. Desarrollé e implementé scripts de web scraping en Python, automatizando la extracción de datos críticos. Integré soluciones frontend con HTML/CSS y gestioné plataformas CMS orientadas a la escalabilidad."
        },
        {
            role: "Desarrollador Full Stack & SysAdmin",
            company: "ALETIA IT",
            date: "Ene 2023 - Abr 2023",
            desc: "Desarrollé aplicaciones web dinámicas con Angular (frontend) y Python (backend), comunicadas mediante APIs REST. Lideré la contenerización de aplicaciones con Docker y Podman en entornos RedHat. Gestioné el mantenimiento, configuración y monitorización de sistemas Linux/RHEL."
        },
        {
            role: "Consultor Tecnológico Junior",
            company: "ACCENTURE",
            date: "Abr 2022 - Jun 2022",
            desc: "Participé en un proyecto internacional de transferencia de conocimiento (España-Filipinas) centrado en arquitecturas de bases de datos y sistemas empresariales. Elaboré documentación técnica detallada de sistemas ERP (Oracle), facilitando la integración con equipos globales."
        }
    ]
};

// Funciones de Renderizado
function renderAbout() {
    document.getElementById('about-text').textContent = portfolioData.about;
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    let html = '';
    
    portfolioData.projects.forEach(proj => {
        let badgesHtml = proj.badges.map(b => `<span class="badge">${b}</span>`).join('');
        html += `
            <div class="project-card">
                <div style="margin-bottom: 1rem;">${badgesHtml}</div>
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

function renderExperience() {
    const timeline = document.getElementById('timeline-container');
    let html = '';
    
    portfolioData.experience.forEach(exp => {
        html += `
            <div class="timeline-item">
                <span class="time-date">${exp.date}</span>
                <h3 class="time-role">${exp.role}</h3>
                <p class="time-company">${exp.company}</p>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${exp.desc}</p>
            </div>
        `;
    });
    
    timeline.innerHTML = html;
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderAbout();
    renderProjects();
    renderExperience();
});