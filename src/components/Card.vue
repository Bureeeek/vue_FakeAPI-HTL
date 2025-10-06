<template>
  <article class="overflow-hidden rounded-xl bg-[#2f2a0c] text-[#fdf7d0] shadow-lg ring-1 ring-[#414320]/60 transition hover:-translate-y-1 hover:shadow-xl">
    <div class="h-80 w-full overflow-hidden bg-[#3a3410]">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="name"
        class="h-full w-full object-cover"
        loading="lazy"
        @error="handleImageError"
      />
      <div v-else class="h-full w-full bg-[#3a3410]" />
    </div>
    <div class="space-y-2 p-5">
      <h3 class="text-lg font-semibold uppercase tracking-wide text-white">{{ name }}</h3>
      <p v-if="email" class="text-sm text-[#ddd6a7]">{{ email }}</p>
      <p v-if="phone" class="text-sm text-[#c3bb8a]">{{ phone }}</p>
    </div>
  </article>
</template>

<script setup>
import { ref, watch } from "vue";

const FALLBACK_URL = "https://picsum.photos/200/300";

const props = defineProps({
  name: { type: String, required: true },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  image: { type: String, default: "" },
});

const imageSrc = ref("");

function resolveImage(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }
  return `${FALLBACK_URL}?random=${Math.random().toString(36).slice(2)}`;
}

imageSrc.value = resolveImage(props.image);

watch(
  () => props.image,
  (newValue) => {
    imageSrc.value = resolveImage(newValue);
  }
);

function handleImageError() {
  imageSrc.value = resolveImage("");
}
</script>
