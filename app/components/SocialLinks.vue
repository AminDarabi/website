<script setup lang="ts">
import { profile } from '~/data/profile'

defineProps<{ compact?: boolean }>()

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
] as const
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li v-for="link in links" :key="link.label">
      <a
        :href="link.href"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
        :aria-label="compact ? link.label : undefined"
        :class="compact ? 'btn btn-ghost btn-sm btn-square' : 'btn btn-sm'"
      >
        <AppIcon :name="link.icon" class="size-4" />
        <span v-if="!compact">{{ link.label }}</span>
      </a>
    </li>
  </ul>
</template>
