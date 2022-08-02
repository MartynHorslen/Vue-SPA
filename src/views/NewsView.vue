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
        <div class="card-body d-flex flex-column justify-content-center">
          <p class="card-text mb-2" v-text="news.Title.length > 90 ? news.Title.slice(0, 90).trim() + '...' : news.Title"></p>
          <span class="published">{{ news.PublisherName }} - {{ news.PublisherDate }}</span>
        </div>
      </a>
    </div>
  </main>
</template>

<style>
.card {
  height: 140px;
}
.card:hover {
  filter: brightness(0.85);
}
.img-container {
  flex: 1;
}

.card-body {
  flex: 2;
}

.card-img {
    height: 100%;
    object-fit: cover;
}


.published {
  font-size: 12px;
  align-self: end;
}
</style>
