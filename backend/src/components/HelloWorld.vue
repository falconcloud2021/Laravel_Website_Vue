<script setup>
import { ref, computed } from 'vue'
const test = computed(() => store.state.test)

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <p> {{ test }} </p>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit 
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: rgb(250, 210, 210);
}
</style>
