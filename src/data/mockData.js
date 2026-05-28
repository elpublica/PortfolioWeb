// src/data/mockData.js

export const mockData = {
  perfil: {
    nombreCompleto: "Edgar Iván Vázquez Segovia",
    tituloProfesional:
      "Desarrollador Full Stack • Sistemas empresariales • API REST • Automatización de procesos",
    resumenProfesional:
      "Desarrollando soluciones empresariales, APIs REST, facturación electrónica e integraciones modernas para optimizar procesos.",
    ubicacion: "Ciudad Juárez, Chih.",
    correo: "ivanzur907@gmial.com",
    telefono: "8715780707",
  },

  redes: [
    {
      id: 1,
      plataforma: "GitHub",
      url: "https://github.com/elpublica",
      iconoClass: "pi pi-github",
    },
    {
      id: 2,
      plataforma: "LinkedIn",
      url: "https://linkedin.com/in/iván-vázquez-269084236/",
      iconoClass: "pi pi-linkedin",
    },
  ],

  proyectos: [
    {
      id: 1,
      nombre: "Sistema de Facturación CONTPAQi",
      resumenCorto:
        "Middleware para la automatización de timbrado y gestión contable.",
      tecnologias: ".NET, C#, SQL Server, CONTPAQi SDK",
      contextoProblema:
        "La empresa perdía 4 horas diarias procesando facturas de forma manual entre sistemas no integrados.",
      solucionImplementada:
        "Desarrollé una API en .NET que sincroniza el ERP directamente con el SDK de CONTPAQi usando arquitectura en capas.",
      resultadosLogros:
        "Reducción del 90% en errores humanos y automatización total del flujo contable.",
      imagenUrl:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      esPrivado: true,
    },
    {
      id: 2,
      nombre: "Chicken Crossy Road",
      resumenCorto: "Videojuego de habilidad desarrollado en Windows Forms.",
      tecnologias: "C#, .NET, WinForms, GDI+",
      contextoProblema:
        "La empresa perdía 4 horas diarias procesando facturas de forma manual entre sistemas no integrados.",
      solucionImplementada:
        "Desarrollé una API en .NET que sincroniza el ERP directamente con el SDK de CONTPAQi usando arquitectura en capas.",
      resultadosLogros:
        "Reducción del 90% en errores humanos y automatización total del flujo contable.",
      imagenUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      esPrivado: false,
      url: "https://github.com/tu-usuario/proyecto",
    },
    {
      id: 3,
      nombre: "Chicken Crossy Road",
      resumenCorto: "Videojuego de habilidad desarrollado en Windows Forms.",
      tecnologias: "C#, .NET, WinForms, GDI+",
      contextoProblema:
        "La empresa perdía 4 horas diarias procesando facturas de forma manual entre sistemas no integrados.",
      solucionImplementada:
        "Desarrollé una API en .NET que sincroniza el ERP directamente con el SDK de CONTPAQi usando arquitectura en capas.",
      resultadosLogros:
        "Reducción del 90% en errores humanos y automatización total del flujo contable.",
      imagenUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      esPrivado: false,
      url: "https://github.com/tu-usuario/proyecto",
    },
  ],

  experiencias: [
    {
      id: 1,
      puesto: "Software Developer",
      empresa: "Nombre de tu ex-empleo",
      periodo: "2023 - 2025",
      descripcion:
        "Desarrollo de integraciones contables y mantenimiento de sistemas ERP.",
    },
  ],

  conocimientos: [
    {
      id: 1,
      nombre: ".NET 8",
      iconoClass: "pi pi-code",
      categoria: "Tech Stack",
    },
    {
      id: 2,
      nombre: "Vue.js 3",
      iconoClass: "pi pi-desktop",
      categoria: "Tech Stack",
    },
    {
      id: 3,
      nombre: "SQL Server",
      iconoClass: "pi pi-database",
      categoria: "Tech Stack",
    },
  ],

  habilidades: [
    { id: 1, habilidad: "Resolución de problemas" },
    { id: 2, habilidad: "Trabajo en equipo" },
  ],

  estudios: [
    {
      id: 1,
      grado: "Ingeniería en Gestión y Desarrollo de Software",
      institucion: "Tu Universidad",
      fechaPeriodo: "2018 - 2022",
      esCertificacion: false,
    },
  ],
};
