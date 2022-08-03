<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    'navigation': Navigation
  },  
}
</script>

<template>
  <navigation />

  <RouterView />
</template>
