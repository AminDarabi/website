<script setup lang="ts">
import { bio, education, experience } from '~/data/profile'

useSeoMeta({
  title: 'About',
  ogTitle: 'About · Amin Darabi',
  description: 'Bio, research experience, and education of Amin Darabi.',
})
</script>

<template>
  <div class="page space-y-16 py-12">
    <section aria-labelledby="bio">
      <h1 id="bio" class="section-title text-3xl">About me</h1>
      <div class="max-w-3xl space-y-4 text-lg leading-relaxed text-base-content/85">
        <p v-for="(paragraph, i) in bio" :key="i">{{ paragraph }}</p>
      </div>
    </section>

    <section aria-labelledby="experience">
      <h2 id="experience" class="section-title">Experience</h2>
      <TimelineList :entries="experience" />
    </section>

    <section aria-labelledby="education">
      <h2 id="education" class="section-title">Education</h2>
      <TimelineList :entries="education" />
    </section>
  </div>
</template>
