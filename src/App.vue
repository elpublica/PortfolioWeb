<template>
  <div class="layout-wrapper my-app-dark">
    <Menubar :model="items" class="custom-navbar sticky-nav">
      <template #start>
        <div class="logo-container">
          <span class="logo-text">EI<b>V</b>S</span>
        </div>
      </template>
      <template #item="{ item, props }">
        <router-link v-if="item.to" :to="item.to" v-bind="props.action" class="nav-link">
          <span :class="item.icon" class="mr-2" />
          <span>{{ item.label }}</span>
        </router-link>
      </template>
    </Menubar>

    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Menubar from 'primevue/menubar';

const items = ref([
    { label: 'Portafolio', icon: 'pi pi-user', to: '/' },
    { label: 'Administración', icon: 'pi pi-cog', to: '/admin' }
]);

onMounted(() => {
  document.documentElement.classList.add('my-app-dark');
});
</script>

<style>
/* 1. Estilos Globales de Reseteo */
html, body {
  margin: 0;
  padding: 0;
  background-color: #09090b; /* Fondo ultra oscuro */
  color: #fafafa;
  font-family: var(--font-family);
}

.my-app-dark {
  min-height: 100vh;
}

/* 2. NAVBAR ESTILO GLASSMORPHISM */
.custom-navbar {
  /* Fondo oscuro traslúcido */
  background: rgba(9, 9, 11, 0.8) !important; 
  backdrop-filter: blur(12px); /* El efecto de desenfoque de fondo */
  -webkit-backdrop-filter: blur(12px);
  
  /* Borde sutil en lugar del gris fuerte */
  border: none !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  
  border-radius: 0 !important;
  padding: 0.8rem 2rem !important;
  transition: all 0.3s ease;
}

/* Hacerlo pegajoso al hacer scroll */
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1100;
}

/* 3. LOGO Y TEXTOS */
.logo-text {
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: #34d399; /* El verde de tu Hero */
  margin-right: 2rem;
}

.logo-text b {
  color: #ffffff;
  font-weight: 800;
}

/* 4. LINKS DE NAVEGACIÓN */
.nav-link {
  color: #a1a1aa !important; /* Gris suave para los links */
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  color: #34d399 !important; /* Resalte en verde al pasar el mouse */
  background: transparent !important;
}

/* Estilo para el link activo (donde estás parado) */
.router-link-active {
  color: #ffffff !important;
  border-bottom: 2px solid #34d399;
}

/* 5. CONTENEDOR DE CONTENIDO */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem; /* Más espacio arriba para que el Hero respire */
  padding-top: 3rem;
}
</style>