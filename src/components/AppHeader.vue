<template>
  <v-app>

    <v-toolbar app dark class="Primary">
      <v-toolbar-title v-text="'Weather'"></v-toolbar-title>
    </v-toolbar>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Day
            </th>
            <th class="text-left">
              Mintemp
            </th>
            <th class="text-left">
              Maxtemp
            </th>
            <th class="text-left">
              pressure
            </th>
            <th class="text-left">
              Humidity
            </th>
            <th class="text-left">
              Breeze
            </th>
            <th class="text-left">
              Precipitation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center">
      <v-btn rounded
             color="primary"
             dark>
        Refresh data
      </v-btn>
    </div>
  </v-app>
</template>

<script>
// import axios from 'axios'
// import { devServer } from '../../vue.config'
export default {
}
</script>
<style scoped>

</style>
