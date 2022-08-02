<script>
import LeagueTable from "../components/LeagueTable.vue";
import { requestData } from '../api.js';

export default {
  components: {
    'league-table': LeagueTable
  },
  
  data() {
    return {
      tableData: [],
      season: 2022,
      loading: true,
      seasonData: []
    }
  },

  methods: {
    async getTableData() {
      this.loading = true;
      let url = 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=' + this.season;
      let response = await requestData(url);
      if (response) {
        this.tableData = response.data.data.standings;
        localStorage.tableData = JSON.stringify(response.data.data.standings);
        localStorage.season = this.season;
        this.loading = false;
      }   
    },

    async getSeasonData() {
      let url = 'https://api-football-standings.azharimm.site/leagues/eng.1/seasons';
      let response = await requestData(url);
      if (response) {
        this.seasonData = response.data.data.seasons;
        localStorage.seasonData = JSON.stringify(response.data.data.seasons);
      }      
    }
  },

  mounted () {
    if (localStorage.tableData && localStorage.seasonData) {
      this.tableData = JSON.parse(localStorage.tableData);
      this.seasonData = JSON.parse(localStorage.seasonData);
      this.season = localStorage.season;
      this.loading = false;
    } else {
      this.getTableData();
      this.getSeasonData();
    }
  }
}
</script>

<template>
  <div class="form-group py-2 container-fluid d-flex justify-content-end">
    <select name="season" id="season" class="form-select" v-model="season" @change="getTableData">
      <option v-for="season, index in seasonData" :value="season.year">{{ season.year }} - {{ season.year + 1}}</option>
    </select>
  </div>
  <league-table :tableData="tableData" :loading="loading" />
</template>

<style>
.form-select, option {
  width: 140px;
}
@media (min-width: 992px) {
  .league {
    max-width: 990px;
    margin: 0 auto;
    border: 1px solid lightgray;
  }
  .form-group {
    max-width: 990px;
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
