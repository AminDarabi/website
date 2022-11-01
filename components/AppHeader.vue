<template> 
<div class="mb-8 md:mb-32 navbar bg-slate-100 dark:bg-zinc-800">
  <div class="gap-4">
    <a href="/" class="w-12"><img src="~/assets/images/avatar.jpg" class="h-12 rounded-full"/></a>
    <a href="/" class="text-clip w-36 normal-case text-xl">Amin Darabi</a>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-bottom dropdown-end">
      <label tabindex="0" class="justify-end btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="justify-end h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50  dark:bg-zinc-800 rounded-box">
        <li :class="route === '/' ? instyle : outstyle">
          <a href="/"> Home </a>
        </li>
        <li :class="route === '/about' ? instyle : outstyle">
          <a href="/about">About</a>
        </li>
        <li :class="route === '/skills' ? instyle : outstyle">
          <a href="/skills">Skills</a>
        </li>
        <li :class="route === '/contact' ? instyle : outstyle">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li :class="route === '/' ? instyle : outstyle">
        <a href="/"> Home </a>
      </li>
      <li :class="route === '/about' ? instyle : outstyle">
        <a href="/about">About</a>
      </li>
      <li :class="route === '/skills' ? instyle : outstyle">
        <a href="/skills">Skills</a>
      </li>
      <li :class="route === '/contact' ? instyle : outstyle">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
const route = useRoute().path.toString()
const instyle = "text-blue-700 dark:text-white"
const outstyle = "hover:text-blue-700 dark:hover:text-white"
</script>