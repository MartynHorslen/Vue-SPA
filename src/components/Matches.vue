<script>
import moment from 'moment';
import { requestData } from '../api.js';

export default {
    props: {
        requestType: {
            type: String
        }
    },

    data(){
        return {
            requestData: [],
            dates: [],
            loading: true,
            errors: false,
            moment: moment,
            hasData: false
        }
    },

    methods: {
        async getRequestData() {
            this.loading = true;
            let url = 'https://football98.p.rapidapi.com/premierleague/'+ this.requestType;
            let headers = {
                'X-RapidAPI-Key': '1444ece9f5msh125fb1f7cc0f8c5p1d2f3bjsn40e719f58738',
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
            };
            let response = await requestData(url, headers);
            if (response.data) {
                this.requestData = response.data;
                localStorage[this.requestType] = JSON.stringify(response.data);
                this.loading = false;
            } else {
                console.log('There was an API error. Please check request quata.');
            }      
        },
        getUniqueDates() {
        let keys = Object.keys(this.requestData[0]);
        for (let key of keys){    
            for (let match of this.requestData[0][`${key}`]) {
            this.dates.push(match.MatchDay);
            }
        }
        this.dates = new Set(this.dates);
        },

        dataCheck() {
            this.hasData = Object.entries(this.requestData[0]).length;
        }
    },

    async mounted() {
      if (localStorage[this.requestType]) {
        this.requestData = JSON.parse(localStorage[this.requestType]);
        this.loading = false;
      } else {
          await this.getRequestData();
      }
      this.getUniqueDates();
      this.dataCheck();
    }
}
</script>

<template>
  <div class="container-fluid mt-3 fixtures">
      <p v-if="loading">Loading...</p>
      <p v-if="errors">Server error. {{ errors }}</p>
      <p v-if="! hasData && ! loading">There is no data yet.</p>
    <div v-for="matches, key, index in requestData[0]">
      <h2>Game Week {{ key.replace( /^\D+/g, '') }}</h2>
      <div class="mb-3" v-for="date in dates">
      <h4 v-if="matches.find(element => element.MatchDay == date)" v-text="moment(date, 'DD/MM/YYYY').format('dddd, LL')" class="text-center"></h4>
      <div v-if="matches.find(element => element.MatchDay == date)" class="table-responsive">
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
@media (min-width: 992px) {
  .fixtures {
    flex-direction: row;
    justify-content: center;
    gap:60px;
  }
}
</style>