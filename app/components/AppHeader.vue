<script setup lang="ts">
const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-base-300 bg-base-100/85 backdrop-blur">
    <nav class="page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3" aria-label="Main">
      <NuxtLink to="/" class="flex items-center gap-3 font-serif text-lg font-semibold">
        <img src="/images/avatar.webp" alt="" width="36" height="36" class="size-9 rounded-full ring-1 ring-base-300">
        Amin Darabi
      </NuxtLink>
      <ul class="-mx-2 flex flex-wrap gap-x-1 text-sm">
        <li v-for="item in nav" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="block rounded-field px-2.5 py-1.5 text-base-content/70 transition-colors hover:bg-base-200 hover:text-base-content"
            exact-active-class="!text-primary font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
