<template>
  <div class="home">
    <div v-if="perfil" class="hero">
      <h1>{{ perfil.nombreCompleto }}</h1>
      <p class="title">{{ perfil.tituloProfesional }}</p>
      <p class="location">📍 {{ perfil.ubicacion }}</p>
    </div>
    <div v-else>
      <p>Conectando con la API...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../services/api';

const perfil = ref(null);

onMounted(async () => {
  try {
    const response = await api.getPerfil();
    perfil.value = response.data;
  } catch (error) {
    console.error("Hubo un error al llamar a la API:", error);
  }
});
</script>

<style scoped>
.hero { text-align: center; margin-top: 50px; }
.title { font-size: 1.5rem; color: #42b983; }
</style>