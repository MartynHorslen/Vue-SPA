<script>
import { requestData } from '../api.js';
import moment from 'moment';

export default {  
  data() {
    return {
      moment: moment,
      loading: true,
      errors: false,
      dates: [],
      fixturesData: []
    }
  },

  methods: {
    async getNewsData() {
      this.loading = true;
      let url = 'https://football98.p.rapidapi.com/premierleague/fixtures/';
      let headers = {
        'X-RapidAPI-Key': '1444ece9f5msh125fb1f7cc0f8c5p1d2f3bjsn40e719f58738',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com'
      };
      let response = await requestData(url, headers);
      if (response.data) {
        this.fixturesData = response.data;
        this.loading = false;
      } else {
        
      }      
    },
    getUniqueDates() {
      let keys = Object.keys(this.fixturesData[0]);
      for (let key of keys){    
        for (let match of this.fixturesData[0][`${key}`]) {
          this.dates.push(match.MatchDay);
        }
      }
      this.dates = new Set(this.dates);
    }
  },

  async mounted() {
    await this.getNewsData();
    this.getUniqueDates();
  }
}
</script>

<template>
  <div class="container-fluid">
      <p v-if="loading">Loading...</p>
      <p v-if="errors">Server error. {{ errors }}</p>
    <div v-for="matches, key, index in fixturesData[0]">
      <h2>Game Week {{ key.replace( /^\D+/g, '') }}</h2>
      <div v-for="date in dates">
      <h4 v-if="matches.find(element => element.MatchDay == date)" v-text="moment(date, 'DD/MM/YYYY').format('dddd, LL')"></h4>
      <div class="table-responsive">
        <table class="table table-sm table-hover table-striped text-center">
          <tbody>
            <tr v-for="match in matches"><td v-if="match.MatchDay == date">{{ match.homeTeam }} vs {{ match.awayTeam }}</td></tr>
          </tbody>
        </table>
      </div>
      </div>
        
    </div>
  </div>
</template>

<style>
.date {
  font-size: 14px;
}
</style>
