<template>
    <div class="flex flex-col min-h-screen w-screen justify-between bg-slate-50 dark:bg-zinc-900 font-serif">
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Amin Darabi',
  meta: [
    { name: 'Amin Darabi', content: 'Personal website.'},
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>