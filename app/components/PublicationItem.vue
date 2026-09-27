<script setup lang="ts">
import type { Publication } from '~/data/profile'
import { profile } from '~/data/profile'

defineProps<{ publication: Publication, detailed?: boolean }>()
</script>

<template>
  <article class="rounded-box border border-base-300 bg-base-100 p-5 transition-colors hover:border-primary/40">
    <div class="mb-2 flex flex-wrap items-center gap-2 text-xs">
      <span class="badge badge-sm badge-primary badge-soft tabular-nums">{{ publication.year }}</span>
      <span v-if="publication.status" class="badge badge-sm badge-ghost">{{ publication.status }}</span>
      <span class="text-base-content/60 italic">{{ publication.venue }}</span>
    </div>
    <h3 class="text-lg leading-snug font-semibold">
      <a :href="publication.href" target="_blank" rel="noopener noreferrer" class="group hover:text-primary">
        {{ publication.title }}
        <AppIcon name="arrow" class="inline size-4 align-baseline opacity-50 transition-opacity group-hover:opacity-100" />
      </a>
    </h3>
    <p class="mt-2 text-sm text-base-content/70">
      <template v-for="(author, i) in publication.authors" :key="author">
        <strong v-if="author === profile.name" class="font-semibold text-base-content">{{ author }}</strong>
        <template v-else>{{ author }}</template>
        <template v-if="i < publication.authors.length - 1">, </template>
      </template>
    </p>
    <template v-if="detailed">
      <p v-if="publication.summary" class="mt-3 text-base-content/80">{{ publication.summary }}</p>
      <ul class="mt-3 flex flex-wrap gap-1.5">
        <li v-for="tag in publication.tags" :key="tag" class="badge badge-sm badge-outline text-base-content/60">{{ tag }}</li>
      </ul>
    </template>
  </article>
</template>
