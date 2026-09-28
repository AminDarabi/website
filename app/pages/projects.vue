<script setup lang="ts">
import { projects, publications } from '~/data/profile'

useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects · Amin Darabi',
  description: 'Publications and research projects by Amin Darabi on low-precision training, efficient deep learning, foundation models, and bioinformatics.',
})
</script>

<template>
  <div class="page space-y-16 py-12">
    <section aria-labelledby="publications">
      <h1 id="publications" class="section-title text-3xl">Publications</h1>
      <div class="space-y-4">
        <PublicationItem v-for="pub in publications" :key="pub.href" :publication="pub" detailed />
      </div>
    </section>

    <section aria-labelledby="projects">
      <h2 id="projects" class="section-title">Selected projects</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="project in projects" :key="project.title" class="flex flex-col rounded-box border border-base-300 p-5">
          <div class="mb-2 flex flex-wrap items-center justify-between gap-2 text-xs text-base-content/60">
            <span>{{ project.kind }}</span>
            <span class="badge badge-sm badge-ghost">{{ project.status }}</span>
          </div>
          <h3 class="text-lg leading-snug font-semibold">
            <a v-if="project.href" :href="project.href" target="_blank" rel="noopener noreferrer" class="group hover:text-primary">
              {{ project.title }}
              <AppIcon name="arrow" class="inline size-4 align-baseline opacity-50 group-hover:opacity-100" />
            </a>
            <template v-else>{{ project.title }}</template>
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-base-content/75">{{ project.summary }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
