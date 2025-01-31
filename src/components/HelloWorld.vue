<script setup lang="ts">
import Resume from './Resume.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <main class="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div class="p-4 sm:p-6 lg:p-8">
          <div
            class="prose prose-lg prose-invert max-w-none prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-code:text-pink-400 prose-pre:bg-gray-900 prose-pre:border-gray-700"
          >
            <Resume />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
/* 自定义暗色主题的其他样式 */
</style>
