<template>
  <section class="mx-auto max-w-6xl px-6 py-10">
    <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2 class="text-xl font-semibold text-gray-100">Personen</h2>
      <button
        class="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        type="button"
        @click="loadPersons"
        :disabled="loading"
      >
        <span v-if="loading">Laden...</span>
        <span v-else>Reload</span>
      </button>
    </div>

    <p v-if="loading" class="text-center text-sm text-[#ddd6a7]">Personen werden geladen...</p>

    <div
      v-else-if="error"
      class="rounded-lg border border-red-200 bg-red-50/90 p-6 text-center text-sm text-red-700"
    >
      <p class="font-medium">Fehler beim Laden der Daten.</p>
      <p class="mt-2">{{ error }}</p>
      <button
        class="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        type="button"
        @click="loadPersons"
      >
        Retry
      </button>
    </div>

    <div v-else>
      <div
        v-if="persons.length"
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Card
          v-for="person in persons"
          :key="person.id"
          :name="person.name"
          :email="person.email"
          :phone="person.phone"
          :image="person.image"
        />
      </div>
      <p v-else class="text-center text-sm text-[#ddd6a7]">Keine Personen gefunden.</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Card from "./Card.vue";

const API_URL = "https://fakerapi.it/api/v2/persons?_quantity=12";

const persons = ref([]);
const loading = ref(false);
const error = ref(null);

async function loadPersons() {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const json = await response.json();
    const rawPersons = Array.isArray(json?.data) ? json.data : [];

    persons.value = rawPersons.map((p, index) => {
      const firstname = p?.firstname ?? "";
      const lastname = p?.lastname ?? "";
      const name = `${firstname} ${lastname}`.trim();
      const email = p?.email ?? "";
      const phone = p?.phone ?? "";
      const imageFromApi = typeof p?.image === "string" && p.image.trim().length > 0 ? p.image : "";
      const fallbackImage = `https://picsum.photos/200/300?random=${index + 1}`;
      const image = imageFromApi || fallbackImage;

      return {
        id: p?.uuid ?? p?.id ?? `${firstname}-${lastname}-${index}`,
        name,
        email,
        phone,
        image,
      };
    });
  } catch (err) {
    console.error("Failed to load persons", err);
    error.value = err instanceof Error ? err.message : "Unbekannter Fehler";
    persons.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadPersons();
});
</script>
