<script>
import Matches from "../components/Matches.vue";

export default {  
  components: {
    'matches': Matches
  },

  data() {
    return {
      requestType: 'fixtures'
    }
  },

  methods: {
    
  },

  async mounted() {
  }
}
</script>

<template>
  <matches :requestType="requestType" />
</template>
