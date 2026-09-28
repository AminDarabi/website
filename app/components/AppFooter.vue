<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-20 border-t border-base-300 bg-base-200">
    <div class="page flex flex-col items-center justify-between gap-4 py-8 text-sm text-base-content/70 sm:flex-row">
      <p>© {{ year }} {{ profile.name }} · {{ profile.location }}</p>
      <SocialLinks compact />
    </div>
  </footer>
</template>
