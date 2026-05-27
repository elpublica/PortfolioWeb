<template>
  <div class="home-container background: red">
    <div v-if="perfil" class="content-wrapper">
      
     <Card class="profile-card shadow-lg mb-8">
    <template #content>

        <div
            v-if="perfil"
            class="profile-container"
        >

            <!-- Nombre -->
            <h1 class="name-text">
                {{ perfil.nombreCompleto }}
            </h1>

            <!-- Profesión mejorada -->
            <h2 class="job-tag">
                {{ perfil.tituloProfesional }}
            </h2>

            <!-- Tech Stack Dinámico -->
            <div class="tech-stack-container">
                <Chip
                    v-for="tech in techStack"
                    :key="tech.id"
                    :label="tech.nombre"
                    class="tech-chip"
                >
                    <template #icon>
                        <i :class="tech.iconoClass"></i>
                    </template>
                </Chip>
            </div>

            <!-- Resumen -->
            <div class="summary-container">
                <p class="profile-summary">
                    {{ perfil.resumenProfesional }}
                </p>
            </div>

            <!-- Información de contacto -->
            <div class="contact-info-row">

                <div class="contact-pill">
                    <i class="pi pi-map-marker"></i>
                    <span>{{ perfil.ubicacion }}</span>
                </div>

                <div class="contact-pill">
                    <i class="pi pi-envelope"></i>
                    <span>{{ perfil.correo }}</span>
                </div>

                <div class="contact-pill">
                    <i class="pi pi-phone"></i>
                    <span>{{ perfil.telefono }}</span>
                </div>

            </div>

            <!-- Redes Sociales -->
            <div class="flex justify-content-center gap-4 mt-5">
              <Button 
                v-for="red in redes" 
                :key="red.id"
                :icon="red.iconoClass" 
                rounded 
                size="large" 
                :class="['social-btn', getBtnClass(red.plataforma)]" 
                v-tooltip.top="red.plataforma"
                @click="abrirLink(red.url)" 
              />
              
              <Button 
                v-if="perfil"
                icon="pi pi-envelope" 
                severity="success" 
                rounded 
                size="large" 
                class="social-btn email-btn" 
                v-tooltip.top="'Enviar Correo'"
                @click="abrirLink('mailto:' + perfil.correo)" 
              />
            </div>

        </div>

    </template>
</Card>

      <div class="section-container mb-8">
        <h3 class="section-title"><i class="pi pi-code"></i> Proyectos Destacados</h3>
        <Carousel :value="proyectos" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000">
          <template #item="slotProps">
            <div class="project-item-card">
              <div class="project-image-container">
                <img :src="slotProps.data.imagenUrl || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500'" class="project-img" />
              </div>
              <div class="project-info">
                <h4 class="m-0 mb-2">{{ slotProps.data.nombre }}</h4>
                <p class="resumen">{{ slotProps.data.resumenCorto }}</p>
                <div class="tech-tags mt-auto">
                  <Tag v-for="tech in slotProps.data.tecnologias.split(',')" :key="tech" :value="tech.trim()" severity="secondary" />
                </div>
                <Button label="Ver Detalles" icon="pi pi-search" class="mt-3 p-button-sm w-full" outlined />
              </div>
            </div>
          </template>
        </Carousel>
      </div>

      <div class="section-container mb-8">
        <h3 class="section-title"><i class="pi pi-briefcase"></i> Trayectoria Profesional</h3>
        <Timeline :value="experiencias" align="alternate" class="customized-timeline">
          <template #marker>
            <span class="custom-marker shadow-2">
              <i class="pi pi-circle-fill"></i>
            </span>
          </template>
          <template #content="slotProps">
            <Card class="timeline-card">
              <template #title> {{ slotProps.item.puesto }} </template>
              <template #subtitle> {{ slotProps.item.empresa }} | {{ slotProps.item.periodo }} </template>
              <template #content>
                <p class="m-0">{{ slotProps.item.descripcion }}</p>
              </template>
            </Card>
          </template>
        </Timeline>
      </div>

      <div class="grid mb-8">
        <div class="col-12 md:col-6">
          <h3 class="section-title"><i class="pi pi-desktop"></i> Conocimientos</h3>
          <div class="flex flex-wrap gap-2">
            <Chip v-for="c in conocimientos" :key="c.id" :label="c.nombre" :icon="c.iconoClass" class="custom-chip" />
          </div>
        </div>

        <div class="col-12 md:col-6">
          <h3 class="section-title"><i class="pi pi-heart"></i> Habilidades Blandas</h3>
          <div class="flex flex-wrap gap-2">
            <Chip v-for="h in habilidades" :key="h.id" :label="h.habilidad" icon="pi pi-check" class="soft-chip" />
          </div>
        </div>
      </div>

      <div v-if="estudios.length > 0" class="section-container mb-8">
        <h3 class="section-title"><i class="pi pi-graduation-cap"></i> Formación Académica</h3>
        <div class="grid">
          <div v-for="edu in estudios" :key="edu.id" class="col-12 md:col-6 lg:col-4">
            <Card class="edu-card h-full shadow-2">
              <template #title> 
                <span class="text-xl font-bold text-white">{{ edu.grado }}</span> 
              </template>
              <template #content>
                <p class="text-primary font-semibold m-0" style="color: #34d399 !important;">
                  {{ edu.institucion }}
                </p>
                <div class="flex align-items-center mt-2 text-gray-300">
                  <i class="pi pi-calendar mr-2"></i>
                  <span>{{ edu.fechaPeriodo }}</span>
                </div>
                <div v-if="edu.esCertificacion" class="mt-3">
                  <Tag value="Certificación" severity="success" rounded />
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import api from '../services/api';
// Componentes PrimeVue
import Card from 'primevue/card';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Timeline from 'primevue/timeline';
import Chip from 'primevue/chip';

// Variables reactivas
const perfil = ref([]);
const redes = ref([]);
const proyectos = ref([]);
const experiencias = ref([]);
const conocimientos = ref([]);
const habilidades = ref([]);
const estudios = ref([]);

// Configuración responsiva para Carrusel
const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

onMounted(async () => {
  try {
    const [
      perfilRes,
      redesRes,
      proyectosRes,
      experienciasRes,
      conocimientosRes,
      habilidadesRes,
      estudiosRes
    ] = await Promise.all([
      api.getPerfil(),
      api.getRedesSociales(),
      api.getProyectos(),
      api.getExperiencias(),
      api.getConocimientos(),
      api.getHabilidades(),
      api.getEstudios()
    ]);

    perfil.value = perfilRes.data;
    redes.value = redesRes.data;
    proyectos.value = proyectosRes.data;
    experiencias.value = experienciasRes.data;
    conocimientos.value = conocimientosRes.data;
    habilidades.value = habilidadesRes.data;
    estudios.value = estudiosRes.data;

  } catch (e) {
    console.error('Error cargando datos', e);
  }
});

const techStack = computed(() => {
  return conocimientos.value.filter(
    x => x.categoria?.toLowerCase() === 'tech stack'
  );
});

const abrirLink = (url) => {
  if (url) {
    window.open(url, '_blank');
  }
};

// const getSocialColor = (plataforma) => {
//   const colors = {
//     'LinkedIn': '#0077b5',
//     'GitHub': '#333',
//     'Facebook': '#1877f2',
//     'Instagram': '#e4405f'
//   };
//   return colors[plataforma] || '#6366f1'; // Color por defecto
// };

const getBtnClass = (plataforma) => {
  if (!plataforma) return '';
  const p = plataforma.toLowerCase();
  if (p.includes('github')) return 'github-btn';
  if (p.includes('linkedin')) return 'linkedin-btn';
  if (p.includes('facebook')) return 'facebook-btn';
  return '';
};
</script>

<style scoped>
/* Títulos de sección */
.section-title {
  font-size: 1.8rem;
  color: #34d399;
  margin-bottom: 2rem;
  border-bottom: 2px solid #34d399;
  display: inline-block;
  padding-bottom: 5px;
}
/* Contenedor Principal de la Card */
.profile-card {
  background:
    radial-gradient(circle at top, rgba(52,211,153,0.08), transparent 35%),
    #18181b !important;
  border: 1px solid #27272a !important;
  border-radius: 20px;
  overflow: hidden;
}

/* =========================
   CONTENEDOR GENERAL
========================= */

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 4rem 2rem;
}

/* =========================
   NOMBRE
========================= */

.name-text {
  font-size: 3.5rem;
  font-weight: 800;

  background: linear-gradient(to right, #ffffff, #d4d4d8);

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;

  letter-spacing: -2px;

  margin: 0;
  margin-bottom: 1rem;
}

/* =========================
   PUESTO
========================= */

.job-tag {
  font-size: 1.3rem;
  text-shadow: 0 0 12px rgba(52, 211, 153, 0.35);
  color: #34d399;

  text-transform: uppercase;

  letter-spacing: 5px;

  font-weight: 600;

  margin-bottom: 3rem;
}

/* =========================
   RESUMEN
========================= */

.summary-container {
  max-width: 780px;

  margin-bottom: 3rem;
}

.profile-summary {
  color: #d4d4d8;

  font-size: 1.15rem;

  line-height: 2;

  margin: 0;
}

/* =========================
   CONTACTO
========================= */

.contact-info-row {
  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  align-items: center;

  gap: 1rem;

  width: 100%;

  margin-bottom: 3rem;
}

/* =========================
   PÍLDORAS
========================= */

.contact-pill {
  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.7rem;

  min-width: 280px;

  padding: 0.9rem 1.5rem;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  color: #e4e4e7;

  font-size: 0.95rem;

  transition: all 0.3s ease;
}

.contact-pill i {
  color: #34d399;

  font-size: 1rem;
}

.contact-pill:hover {
  transform: translateY(-3px);

  border-color: #34d399;

  background: rgba(52, 211, 153, 0.08);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

/* =========================
   REDES SOCIALES
========================= */

.social-container {
  display: flex;

  justify-content: center;

  align-items: center;

  flex-wrap: wrap;

  gap: 1.2rem;
}

/* =========================
   BOTONES SOCIALES
========================= */
/* .social-btn {
  width: 3.8rem !important;
  height: 3.8rem !important;
  margin: 0 0.5rem;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
} */

.social-btn {
  width: 4rem !important;
  height: 4rem !important;
  margin: 0 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: inline-flex !important;
  justify-content: center;
}

/* Colores por clase */
.github-btn { background-color: #333 !important; color: white !important; }
.linkedin-btn { background-color: #0077b5 !important; color: white !important; }
.email-btn { background-color: #34d399 !important; color: #1e1e1e !important; }

/* Efecto hover único para todos */
.social-btn:hover {
  transform: translateY(-5px) scale(1.1);
  filter: brightness(1.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

  .profile-container {
    padding: 3rem 1.5rem;
  }

  .name-text {
    font-size: 3.5rem;
  }

  .job-tag {
    font-size: 1rem;

    letter-spacing: 3px;
  }

  .profile-summary {
    font-size: 1rem;

    line-height: 1.8;
  }

  .contact-pill {
    width: 100%;

    max-width: 100%;
  }

  .social-container {
    gap: 1rem;
  }

  .social-btn {
    width: 3.5rem !important;

    height: 3.5rem !important;
  }
}

/*Tech Stack */
.tech-stack-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0 28px;
}

.tech-chip {
    background: rgba(0, 255, 170, 0.08);
    border: 1px solid rgba(0, 255, 170, 0.2);
    color: #38f9d7;
    border-radius: 999px;
    padding: 8px 14px;
    transition: all .3s ease;
}

.tech-chip:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 20px rgba(0,255,170,.25);
}

.tech-chip i {
    margin-right: 8px;
    font-size: 1rem;
}
/* Proyectos */
.project-item-card {
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: 12px;
  margin: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.project-img { width: 100%; height: 180px; object-fit: cover; }
.project-info { padding: 1.2rem; flex-grow: 1; display: flex; flex-direction: column; }
.resumen { color: #a1a1aa; font-size: 0.9rem; margin: 10px 0; }

/* Timeline */
.timeline-card { background: #18181b !important; border: 1px solid #27272a !important; margin-bottom: 1rem; }
.custom-marker {
  display: flex; width: 2rem; height: 2rem; align-items: center; justify-content: center;
  color: #34d399; border-radius: 50%;
}

/* Chips Dinámicos */
.custom-chip { background: #1e1e1e !important; border: 1px solid #34d399 !important; color: white !important; }
.soft-chip { background: #1e1e1e !important; border: 1px solid #6366f1 !important; color: white !important; }

/* Estudios */
.edu-card {
  background: #1e1e21 !important; /* Un gris ligeramente más claro que el fondo general */
  border: 1px solid #3f3f46 !important; /* Borde sutil para dar profundidad */
  transition: transform 0.2s;
}

.edu-card:hover {
  transform: translateY(-5px);
  border-color: #34d399 !important; /* Resalta el borde al pasar el mouse */
}

/* Asegura que el texto dentro de las cards sea legible */
:deep(.p-card-title), :deep(.p-card-content) {
  color: #fafafa !important;
}
</style>