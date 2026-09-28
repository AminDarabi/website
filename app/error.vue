<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({ title: props.error.status === 404 ? 'Page not found' : 'Error', robots: 'noindex' })
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <AppHeader />
    <main class="page flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p class="font-serif text-6xl font-semibold text-primary">{{ error.status }}</p>
      <h1 class="mt-4 text-2xl font-semibold">
        {{ error.status === 404 ? 'This page does not exist.' : 'Something went wrong.' }}
      </h1>
      <button class="btn btn-primary mt-8" @click="clearError({ redirect: '/' })">Back to home</button>
    </main>
    <AppFooter />
  </div>
</template>
