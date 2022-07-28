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
      tableData1: [
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F2.png",
        "Name": " Arsenal ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F199.png",
        "Name": " Aston Villa ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F622.png",
        "Name": " Bournemouth ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F671.png",
        "Name": " Brentford ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F670.png",
        "Name": " Brighton ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F9.png",
        "Name": " Chelsea ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F567.png",
        "Name": " Crystal Palace ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F197.png",
        "Name": " Everton ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F211.png",
        "Name": " Fulham ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F571.png",
        "Name": " Leeds ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F572.png",
        "Name": " Leicester ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F18.png",
        "Name": " Liverpool ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F209.png",
        "Name": " Manchester City ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F21.png",
        "Name": " Manchester United ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F207.png",
        "Name": " Newcastle United ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F577.png",
        "Name": " Nottingham Forest ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F615.png",
        "Name": " Southampton ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F202.png",
        "Name": " Tottenham ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F198.png",
        "Name": " West Ham ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    },
    {
        "Position": "-",
        "SquadLogo": "https://image-service.onefootball.com/transform?w=21&h=21&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F203.png",
        "Name": " Wolves ",
        "Points": "0",
        "Played": " 0 ",
        "Winned": " 0 ",
        "Loosed": " 0 ",
        "Tie": " 0 ",
        "Goal Difference": " 0 "
    }
]
    }
  },

  mounted () {
    const options = {
      method: 'GET',
      url: 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021',
    //   headers: {
    //     'X-RapidAPI-Key': '1444ece9f5msh125fb1f7cc0f8c5p1d2f3bjsn40e719f58738',
    //     'X-RapidAPI-Host': 'football98.p.rapidapi.com'
      // }
    };

    axios.request(options).then((response) => {
      this.tableData = response.data.data.standings ;
    }).catch(function (error) {
      console.error(error);
    });
  }
}
</script>

<template>
    <league-table :tableData="tableData"></league-table>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
