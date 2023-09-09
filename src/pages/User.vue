<template>
<div class="min-w-sreen">
    <div class="mb-6">
        <user-filter-box></user-filter-box>
    </div>
    <div class="mb-6">
        <UserTable></UserTable>
    </div>
</div>  
</template>

<script setup lang="ts">
import UserFilterBox from '../components/UserFilterBox.vue';
import UserTable from '../components/UserTable.vue';
</script>

<style>

</style>