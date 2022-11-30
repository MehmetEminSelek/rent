<template>
  <title>Kira Takip Sistemi</title>
  
  <v-app id="inspire" dark>
    <v-app-bar color="grey-darken-4" :elevation="3" :density="comfortable">
      <v-app-bar-title>Kira Takip Sistemi</v-app-bar-title>
      <span class="mr-5">
        <DigitalClock />
      </span>
      <v-btn stacked variant="tonal">
        <v-icon icon="mdi-login"></v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-4" v-model="drawer" expand-on-hover rail>
  
      <v-list color="yellow-lighten-1">
        <v-list-item prepend-icon="mdi-home-city" value="apartments"> Apartmanlarım</v-list-item>
        <v-list-item prepend-icon="mdi-door" value="shared">Kiracılarım</v-list-item>
        <v-list-item prepend-icon="mdi-island" value="starred">Arsalarım</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer app bottom fixed padless>
      <v-row justify="center">
        KÖPPPPPEK © 2022
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import digitalClock from './components/digitalClock.vue'
export default {
  data: () => ({
    drawer: null,
    primary: '#ffbe0b',
    secondary: '#292929',
    comfortable: 'comfortable',
  }),
}

</script>
