<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="text-4xl text-white my-12">{{ msg }}</h1>

  <div class="my-12">
    <button
      type="button"
      @click="count++"
      class="bg-zinc-900 px-4 py-2 text-white rounded-lg transition border border-zinc-900 hover:border-indigo-500"
    >
      count is {{ count }}
    </button>
    <p class="text-white my-4">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="text-white my-4">
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      class="text-indigo-500 hover:text-indigo-600"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="text-white my-4">
    Install
    <a
      href="https://github.com/vuejs/language-tools"
      target="_blank"
      class="text-indigo-500 hover:text-indigo-600"
      >Volar</a
    >
    in your IDE for a better DX
  </p>
  <p class="text-zinc-500">
    Click on the Vite, Vue and Tailwind logos to learn more
  </p>
</template>
