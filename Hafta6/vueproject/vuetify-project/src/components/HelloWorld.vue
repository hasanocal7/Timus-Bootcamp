<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-text-field
        v-model="name"
        :label="nameLabel"
        :variant="variant"
      ></v-text-field>
      <v-btn @click="sendName(name)">Send Name</v-btn>
      <h3 :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        {{ name }}
      </h3>
      <h3>{{ fullName }}</h3>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      midName: "",
      surName: "Öcal",
      nameLabel: "Name",
      variant: "outlined",
      activeColor: "green",
      fontSize: 25,
    };
  },
  computed: {
    fullName() {
      return this.name + this.midName + this.surName;
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    sendName(val) {
      console.log(this.nameLabel);
      this.alertBig(val);
    },
    alertBig(val) {
      alert(val);
    },
  },
  watch: {
    name(val, oldVal) {
      console.log("val: " + val, "oldVal: " + oldVal);
    },
  },
};
</script>
