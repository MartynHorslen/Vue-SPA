<script>
import LeagueTable from "../components/LeagueTable.vue";
import axios from 'axios';
export default {
  components: {
    'league-table': LeagueTable
  },
  
  data() {
    return {
      tableData: [],
      season: 2022,
      loading: true
    }
  },

  methods: {
    getTableData() {
      this.loading = true;
      const options = {
        method: 'GET',
        url: 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=' + this.season
      };

      axios.request(options).then((response) => {
        this.tableData = response.data.data.standings;
        this.loading = false;
      }).catch(function (error) {
        console.error(error);
      });
    },
  },

  mounted () {
    this.getTableData();
  }
}
</script>

<template>
  <div class="form-group py-2 d-flex justify-content-end">
    <select name="season" id="season" class="form-select" v-model="season" @change="getTableData">
      <option value="2022">2022 - 2023</option>
      <option value="2021">2021 - 2022</option>
      <option value="2020">2020 - 2021</option>
      <option value="2019">2019 - 2020</option>
    </select>
  </div>
  <league-table :tableData="tableData" :loading="loading" />
</template>

<style>
.form-select, option {
  width: 140px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
