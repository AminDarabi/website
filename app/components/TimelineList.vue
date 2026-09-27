<script setup lang="ts">
import type { TimelineEntry } from '~/data/profile'

defineProps<{ entries: TimelineEntry[] }>()
</script>

<template>
  <ol class="relative space-y-8 border-l border-base-300 pl-6">
    <li v-for="entry in entries" :key="entry.title + entry.organization" class="relative">
      <span class="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 border-base-100 bg-primary" aria-hidden="true" />
      <div class="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 class="text-lg font-semibold">{{ entry.title }}</h3>
        <p class="text-sm tabular-nums text-base-content/60">{{ entry.start }} – {{ entry.end }}</p>
      </div>
      <p class="text-base-content/80">
        <span class="font-medium">{{ entry.organization }}</span> · {{ entry.location }}
      </p>
      <ul class="mt-2 list-disc space-y-1 pl-5 text-base-content/75 marker:text-base-content/30">
        <li v-for="detail in entry.details" :key="detail">{{ detail }}</li>
      </ul>
    </li>
  </ol>
</template>
