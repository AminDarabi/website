<script setup lang="ts">
import { experience, profile, publications } from '~/data/profile'

const { siteUrl } = useRuntimeConfig().public

useSeoMeta({
  title: null,
  ogTitle: `${profile.name} — ${profile.headline}`,
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': profile.name,
      'url': siteUrl,
      'image': `${siteUrl}/images/amin-darabi.jpg`,
      'jobTitle': profile.headline,
      'description': profile.tagline,
      'email': `mailto:${profile.email}`,
      'address': { '@type': 'PostalAddress', 'addressLocality': 'Montreal', 'addressCountry': 'CA' },
      'affiliation': profile.affiliations.map(a => ({ '@type': 'Organization', 'name': a.label, 'url': a.href })),
      'sameAs': [profile.github, profile.linkedin],
    }),
  }],
})
</script>

<template>
  <div>
    <section class="page grid items-center gap-10 pt-12 pb-16 md:grid-cols-[1fr_15rem] md:pt-20">
      <div>
        <p class="text-sm font-medium tracking-widest text-primary uppercase">{{ profile.headline }}</p>
        <h1 class="mt-2 text-4xl font-semibold sm:text-5xl">{{ profile.name }}</h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-base-content/80">{{ profile.tagline }}</p>

        <ul class="mt-5 flex flex-wrap gap-2" aria-label="Affiliations">
          <li v-for="a in profile.affiliations" :key="a.label">
            <a :href="a.href" target="_blank" rel="noopener noreferrer" class="badge badge-outline hover:badge-primary">{{ a.label }}</a>
          </li>
        </ul>

        <p class="mt-5 flex items-center gap-1.5 text-sm text-base-content/60">
          <AppIcon name="pin" class="size-4" /> {{ profile.location }}
        </p>

        <div class="mt-6">
          <SocialLinks />
        </div>
      </div>

      <picture class="order-first mx-auto w-48 md:order-none md:w-full">
        <source srcset="/images/amin-darabi.webp" type="image/webp">
        <img
          src="/images/amin-darabi.jpg"
          :alt="`Portrait of ${profile.name}`"
          width="640"
          height="896"
          fetchpriority="high"
          class="aspect-[5/7] w-full rounded-box object-cover shadow-lg ring-1 ring-base-300"
        >
      </picture>
    </section>

    <section class="page pb-14" aria-labelledby="interests">
      <h2 id="interests" class="section-title">Research interests</h2>
      <ul class="flex flex-wrap gap-2">
        <li v-for="interest in profile.interests" :key="interest" class="rounded-field bg-base-200 px-3 py-1.5 text-sm">
          {{ interest }}
        </li>
      </ul>
    </section>

    <section class="page pb-14" aria-labelledby="now">
      <h2 id="now" class="section-title">Currently</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <div v-for="job in experience" :key="job.organization" class="rounded-box border border-base-300 p-5">
          <p class="text-sm text-base-content/60">{{ job.start }} – {{ job.end }}</p>
          <h3 class="mt-1 text-lg font-semibold">{{ job.title }}</h3>
          <p class="font-medium text-primary">{{ job.organization }}</p>
          <p class="mt-2 text-sm text-base-content/75">{{ job.details.join(' ') }}</p>
        </div>
      </div>
    </section>

    <section class="page" aria-labelledby="pubs">
      <h2 id="pubs" class="section-title">Selected publications</h2>
      <div class="space-y-4">
        <PublicationItem v-for="pub in publications" :key="pub.href" :publication="pub" />
      </div>
      <NuxtLink to="/research" class="btn btn-ghost btn-sm mt-6 text-primary">
        Research &amp; projects <AppIcon name="right" class="size-4" />
      </NuxtLink>
    </section>
  </div>
</template>
