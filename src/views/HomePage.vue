<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
</script>

<template>
  <main class="mx-auto max-w-xl text-center">
    <div class="my-12 flex w-full justify-around">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="w-24" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="w-24" alt="Vue logo" />
      </a>
      <a href="https://tailwindcss.com" target="_blank">
        <img src="@/assets/tailwind.svg" class="w-24" alt="TailwindCSS logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue + Tailwind" />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
