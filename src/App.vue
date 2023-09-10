<template>

<!-- <SessionLayout></SessionLayout> -->
<component :is="$route.meta.layout || 'div'"></component>
</template>

<script setup lang="ts">
// import SessionLayout from "./layouts/SessionLayout.vue"
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>