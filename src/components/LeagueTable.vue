<script>
  export default {
    props: {
      tableData: {
        type: Object
      },
      loading: {
        type: Boolean
      }
    }
  }
</script>

<template>
  <div class="table-responsive league">
    <table class="table table-hover table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Pos</th>
          <th scope="col">Team</th>
          <th scope="col">Pld</th>
          <th scope="col" class="d-none d-sm-table-cell">Won</th>
          <th scope="col" class="d-none d-sm-table-cell">Drawn</th>
          <th scope="col" class="d-none d-sm-table-cell">Lost</th>
          <th scope="col" class="d-none d-sm-table-cell">For</th>
          <th scope="col" class="d-none d-sm-table-cell">Against</th>
          <th scope="col">GD</th>
          <th scope="col">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="10" class="text-start">Loading...</td>
        </tr>
        <tr v-if="! loading" v-for="team, index in tableData" key="index">
          <th scope="row">{{ team.stats[8].displayValue }}</th>
          <td class="d-flex" nowrap><img :src="team.team.logos[0].href" class="team-logo" /><span class="flex-grow-1">{{ team.team.shortDisplayName }}</span></td>
          <td>{{ team.stats[3].displayValue }}</td>
          <td class="d-none d-sm-table-cell">{{ team.stats[0].displayValue }}</td>
          <td class="d-none d-sm-table-cell">{{ team.stats[2].displayValue }}</td>
          <td class="d-none d-sm-table-cell">{{ team.stats[1].displayValue }}</td>
          <td class="d-none d-sm-table-cell">{{ team.stats[4].displayValue }}</td>
          <td class="d-none d-sm-table-cell">{{ team.stats[5].displayValue }}</td>
          <td>{{ team.stats[9].displayValue }}</td>
          <td>{{ team.stats[6].displayValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .team-logo {
    width:30px;
    height: 30px;
  }
  .table {
    --bs-table-hover-bg: rgba(0, 0, 0, 0.15);
  }
  .league tbody tr:nth-child(5){
    border-bottom: 1px solid darkslategrey;
    border-top: 1px solid darkslategrey;
  }
  .league tbody tr:nth-child(17){
    border-bottom: 1px solid darkslategrey;
  }
  .league .table>:not(caption)>*>* {
    border-bottom-width: 0;
  }
</style>