<script setup>
import { MyFooter } from '@packages/ui'; 
</script>

<template>
  <main class="min-h-screen bg-slate-50 flex items-center justify-center p-6">
    <section class="max-w-md w-full bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-8 border border-slate-100 text-center">
      <header class="space-y-2">
        <h1 class="text-2xl font-black text-slate-900 tracking-tight">
          Conference Ticket Generator
        </h1>
        <p class="text-slate-500 font-medium text-balance">
          Configuración lista para el monorepo.
        </p>
      </header>
      
      <div class="mt-8 pt-6 border-t border-slate-50 flex flex-col items-center gap-4">
        <div class="flex -space-x-2">
          <span class="h-10 w-10 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm">VUE</span>
          <span class="h-10 w-10 rounded-full bg-sky-500 border-4 border-white flex items-center justify-center text-[10px] text-white font-bold shadow-sm">TW4</span>
        </div>
        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Ready to Code</p>
      </div>
    </section>
  </main>

  <MyFooter />
</template>