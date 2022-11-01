<template> 
<div class="mb-8 navbar bg-slate-100 dark:bg-zinc-800">
  <div class="gap-4">
    <a href="/" class="w-12"><img src="~/assets/images/avatar.jpg" class="h-12 rounded-full"/></a>
    <a href="/" class="text-clip w-36 normal-case text-xl dark:text-gray-50">Amin Darabi</a>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-bottom dropdown-end">
      <label tabindex="0" class="justify-end btn btn-ghost md:hidden">
        <svg class="w-5 h-5 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50  dark:bg-zinc-800 rounded-box">
        <li :class="route === '/' ? instyle : outstyle">
          <a href="/" class="hover:bg-gray-700"> Home </a>
        </li>
        <li :class="route === '/about' ? instyle : outstyle">
          <a href="/about" class="hover:bg-gray-700">About</a>
        </li>
        <li :class="route === '/skills' ? instyle : outstyle">
          <a href="/skills" class="hover:bg-gray-700">Skills</a>
        </li>
        <li :class="route === '/contact' ? instyle : outstyle">
          <a href="/contact" class="hover:bg-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar-end hidden md:flex">
    <ul class="menu menu-horizontal p-0">
      <li :class="route === '/' ? instyle : outstyle">
        <a href="/" class="hover:bg-inherit"> Home </a>
      </li>
      <li :class="route === '/about' ? instyle : outstyle">
        <a href="/about" class="hover:bg-inherit">About</a>
      </li>
      <li :class="route === '/skills' ? instyle : outstyle">
        <a href="/skills" class="hover:bg-inherit">Skills</a>
      </li>
      <li :class="route === '/contact' ? instyle : outstyle">
        <a href="/contact" class="hover:bg-inherit">Contact</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
const route = useRoute().path.toString()
const instyle = "text-blue-700 dark:text-slate-50"
const outstyle = "dark:text-gray-300 hover:text-blue-700 dark:hover:text-slate-50"
</script>