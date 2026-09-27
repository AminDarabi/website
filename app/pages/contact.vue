<script setup lang="ts">
import { profile } from '~/data/profile'

useSeoMeta({
  title: 'Contact',
  ogTitle: 'Contact · Amin Darabi',
  description: 'How to get in touch with Amin Darabi.',
})

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', value: 'github.com/AminDarabi', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', value: 'linkedin.com/in/amindarabi', href: profile.linkedin, icon: 'linkedin' },
] as const
</script>

<template>
  <div class="page py-12">
    <h1 class="section-title text-3xl">Contact</h1>
    <p class="max-w-2xl text-lg text-base-content/80">
      I'm always happy to talk about efficient training, low-precision arithmetic, GPU kernels, or research
      collaborations. The best way to reach me is by email.
    </p>

    <ul class="mt-8 grid max-w-2xl gap-3">
      <li v-for="c in channels" :key="c.label">
        <a
          :href="c.href"
          :target="c.href.startsWith('http') ? '_blank' : undefined"
          :rel="c.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="group flex items-center gap-4 rounded-box border border-base-300 p-4 transition-colors hover:border-primary/50 hover:bg-base-200"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <AppIcon :name="c.icon" class="size-5" />
          </span>
          <span class="min-w-0">
            <span class="block text-sm text-base-content/60">{{ c.label }}</span>
            <span class="block truncate font-medium group-hover:text-primary">{{ c.value }}</span>
          </span>
          <AppIcon name="arrow" class="ml-auto size-4 shrink-0 opacity-40 group-hover:opacity-100" />
        </a>
      </li>
    </ul>

    <p class="mt-8 flex items-center gap-1.5 text-base-content/60">
      <AppIcon name="pin" class="size-4" /> Based in {{ profile.location }}
    </p>
  </div>
</template>
