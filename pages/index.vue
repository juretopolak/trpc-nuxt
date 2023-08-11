<script setup lang="ts">
const { $client } = useNuxtApp()

const hello = await $client.hello.useQuery({ text: 'client3' })
</script>

<template>
  <div>
    <p>{{ hello.data?.value?.greeting }}</p>
    <p>test</p>
  </div>
</template>