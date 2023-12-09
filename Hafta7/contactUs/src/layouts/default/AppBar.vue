<template>
  <v-app-bar :elevation="2" color="#6A1B9A">
    <v-app-bar-title @click="RouteHome">
      <v-icon icon="mdi-cloud" />
      Ocal Cloud
    </v-app-bar-title>
    <v-divider inset vertical></v-divider>
    <v-spacer></v-spacer>
    <v-btn text v-text="'Contact Us'" @click="RouteContact"></v-btn>
    <v-btn text v-text="'Panel'" @click="RoutePanel"></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    RouteHome() {
      this.$router.push("/");
    },
    RouteContact() {
      this.$router.push("/contact");
    },
    RoutePanel() {
      this.$router.push("/panel");
    },
  },
};
</script>
