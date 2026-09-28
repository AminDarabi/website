<script setup lang="ts">
import { profile } from '~/data/profile'

const route = useRoute()
const { siteUrl } = useRuntimeConfig().public

useHead({
  titleTemplate: title => (title ? `${title} · ${profile.name}` : profile.name),
  link: [{ rel: 'canonical', href: () => `${siteUrl}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}` }],
})

useSeoMeta({
  description: profile.tagline,
  ogSiteName: profile.name,
  ogType: 'website',
  ogUrl: () => `${siteUrl}${route.path}`,
  ogImage: `${siteUrl}/images/og.jpg`,
  ogImageAlt: `Portrait of ${profile.name}`,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-30 btn btn-sm">
      Skip to content
    </a>
    <AppHeader />
    <main id="main" class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
