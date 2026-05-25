<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const proyectos = ref([]);

const obtenerProyectos = async () => {
  try {
    // RECUERDA: Cambia el puerto (7123 por ejemplo) por el que te de tu Visual Studio
    const response = await axios.get('https://localhost:7007/api/Proyectos');
    proyectos.value = response.data;
  } catch (error) {
    console.error("Error al conectar con la API:", error);
  }
};

onMounted(() => {
  obtenerProyectos();
});
</script>

<template>
  <div class="container">
    <h1>Edgar Iván Vázquez Segovia</h1>
    <h3>Software Engineer | Full Stack Developer</h3>
    
    <div v-if="proyectos.length > 0">
      <div v-for="p in proyectos" :key="p.id" class="card">
        <h3>{{ p.nombre }}</h3>
        <p><strong>Área:</strong> {{ p.area }}</p>
      </div>
    </div>
    <p v-else>Cargando proyectos o API apagada...</p>
  </div>
</template>

<style scoped>
.container { padding: 20px; font-family: sans-serif; }
.card { border: 1px solid #ccc; padding: 15px; margin-bottom: 10px; border-radius: 8px; }
</style>