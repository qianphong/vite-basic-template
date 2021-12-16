<script lang="ts" setup>
defineProps({
  name: String,
})
</script>
<template>
  <footer class="fixed bottom-0" w="full" text="center" p="y-2">
    <DarkToggle />
    <div class="mx-auto opacity-25 text-sm">[{{ name }} Layout]</div>
  </footer>
</template>
