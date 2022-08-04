<script>
import { requestData } from '../api.js';

export default {  
  data() {
    return {
      loading: true,
      errors: false,
      newsData: []
    }
  },

  methods: {
    async getNewsData() {
      this.loading = true;
      let url = 'https://football98.p.rapidapi.com/premierleague/news';
      let headers = {
        'X-RapidAPI-Key': '1444ece9f5msh125fb1f7cc0f8c5p1d2f3bjsn40e719f58738',
        'X-RapidAPI-Host': 'football98.p.rapidapi.com'
      };
      let response = await requestData(url, headers);
      if (response.data) {
        this.newsData = response.data;
        localStorage.newsData = JSON.stringify(response.data);
        this.loading = false;
      }    
    }
  },

  mounted () {
    if (localStorage.newsData) {
      this.newsData = JSON.parse(localStorage.newsData);
      this.loading = false;
    } else {
      this.getNewsData();
    }
    
  }
}
</script>

<template>
  <main>
    <div class="container-fluid mt-3">
      <p v-if="loading">Loading...</p>
      <p v-if="errors">Server error. {{ errors }}</p>
      <a :href="news.NewsLink" target="_blank" v-for="news in newsData" class="card d-flex flex-row mb-1 text-decoration-none text-black">
        <div class="img-container"><img :src="news.Image" class="card-img" :alt="news.Title"></div>
        <div class="card-body justify-content-center">
          <p class="card-text mb-2" v-text="news.Title.length > 72 ? news.Title.slice(0, 72).trim() + '...' : news.Title"></p>
          <p class="published">{{ news.PublisherName.length > 19 ? news.PublisherName.slice(0, 19).trim() + '...' : news.PublisherName}} - {{ news.PublisherDate }}</p>
        </div>
      </a>
    </div>
  </main>
</template>

<style>
.card {
  height: 140px;
  border: 1px solid lightgray;
}
.card:hover {
  filter: brightness(0.85);
}
.img-container {
  flex: 1;
}

.card-body {
  flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-img {
    height: 100%;
    object-fit: cover;
}


.published {
  font-size: 11px;
  align-self: end;
  float: right;
}
@media (min-width: 576px) {
  .published {
    font-size: 14px;
  }
}

@media (min-width: 992px) {
  .container-fluid {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
  }

  .container-fluid>a {
    flex: 1 1 300px;
    max-width: 400px;
    height: 400px;
    flex-direction: column !important;
  }

  .card-img {
    height: 250px;
    object-position: top;
  }

}

@media (min-width: 1580px) {
  .container-fluid>a {
    flex: 1 1 375px;
  }
}
</style>
