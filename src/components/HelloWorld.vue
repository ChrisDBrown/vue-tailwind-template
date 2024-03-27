<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

defineProps({
  msg: String,
});

const store = useCounterStore();
</script>

<template>
  <h1 class="my-12 text-4xl text-white">{{ msg }}</h1>

  <div class="my-12">
    <button
      type="button"
      @click="store.increment"
      class="rounded-lg border border-zinc-900 bg-zinc-900 px-4 py-2 text-white transition hover:border-indigo-500"
    >
      count is {{ store.count }}
    </button>
    <p class="my-4 text-white">
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="my-4 text-white">
    Check out
    <a
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      class="text-indigo-500 hover:text-indigo-600"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="my-4 text-white">
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
