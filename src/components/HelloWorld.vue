<script setup lang="ts">
import { ref } from 'vue';
import Resume from './Resume.vue';

const isDarkMode = ref(true);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-300 rounded-xl',
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    ]"
  >
    <!-- Theme Toggle Button -->
    <button
      @click="toggleTheme"
      class="fixed top-4 right-4 p-2 rounded-full shadow-lg transition-colors duration-300"
      :class="[
        isDarkMode
          ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
          : 'bg-white hover:bg-gray-100 text-gray-800',
      ]"
    >
      <span class="sr-only">Toggle theme</span>
      <svg
        v-if="isDarkMode"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        v-else
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>

    <div class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <main
          class="rounded-xl overflow-hidden transition-colors duration-300"
          :class="[isDarkMode ? ' text-gray-100' : ' text-gray-900']"
        >
          <div class="p-4 sm:p-6 lg:p-8">
            <div
              class="prose max-w-none transition-colors duration-300"
              :class="[
                isDarkMode
                  ? 'prose-invert prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-code:text-pink-400'
                  : 'prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-pink-600',
              ]"
            >
              <Resume />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
/* 自定义暗色主题的其他样式 */
</style>
