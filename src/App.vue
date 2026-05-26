<template>
  <div id="app">
    <nav>
      <router-link to="/">Mi CV</router-link> |
      <router-link to="/admin">Administración</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
/* Estilos globales */
nav { padding: 20px; text-align: center; }
a { font-weight: bold; color: #2c3e50; text-decoration: none; margin: 0 10px; }
a.router-link-exact-active { color: #42b983; }
</style>