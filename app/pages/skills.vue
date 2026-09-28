<script setup lang="ts">
import { courses, honours, skills } from '~/data/profile'

useSeoMeta({
  title: 'Skills',
  ogTitle: 'Skills · Amin Darabi',
  description: 'Technical skills, selected graduate courses, and honours of Amin Darabi.',
})
</script>

<template>
  <div class="page space-y-16 py-12">
    <section aria-labelledby="skills">
      <h1 id="skills" class="section-title text-3xl">Skills</h1>
      <dl class="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div v-for="skill in skills" :key="skill.group">
          <dt class="mb-2 text-sm font-medium tracking-wide text-base-content/60 uppercase">{{ skill.group }}</dt>
          <dd class="flex flex-wrap gap-1.5">
            <span v-for="item in skill.items" :key="item" class="rounded-field bg-base-200 px-2.5 py-1 text-sm">{{ item }}</span>
          </dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="honours">
      <h2 id="honours" class="section-title">Honours</h2>
      <ul class="space-y-4">
        <li v-for="honour in honours" :key="honour.title" class="flex gap-4">
          <span class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <AppIcon name="trophy" class="size-5" />
          </span>
          <div>
            <p class="font-semibold">{{ honour.title }}</p>
            <p class="text-base-content/75">{{ honour.detail }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section aria-labelledby="courses">
      <h2 id="courses" class="section-title">Selected courses</h2>
      <ul class="grid gap-x-8 sm:grid-cols-2">
        <li v-for="course in courses" :key="course.name" class="flex items-center justify-between gap-4 border-b border-base-300 py-2.5">
          <span>{{ course.name }}</span>
          <span class="badge badge-sm badge-primary badge-soft font-semibold">{{ course.grade }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
