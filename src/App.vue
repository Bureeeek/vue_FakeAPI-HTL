<template>
  <main class="min-h-screen bg-[#1d1a04]">
    <header class="bg-[#2a2608] py-6 shadow-lg">
      <div class="mx-auto flex max-w-6xl items-center justify-end px-6">
        <h1 class="font-heading text-2xl uppercase tracking-[0.3rem] text-white sm:text-3xl">
          HTL Dornbirn 5bWI
        </h1>
      </div>
    </header>
    <section class="bg-gradient-to-b from-[#1d1a04] via-[#221d07] to-[#1d1a04] pb-16 pt-6">
      <CardList />
    </section>
  </main>
</template>

<script setup>
import CardList from "./components/CardList.vue";
</script>
