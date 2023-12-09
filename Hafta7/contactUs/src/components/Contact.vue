<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex align-center justify-space-between">
        <v-col>
          <h1 class="mb-5">{{ title }}</h1>
          <v-form v-model="valid">
            <v-row class="ga-3">
              <v-text-field
                v-model="Message.firstName"
                type="text"
                label="First Name"
              ></v-text-field>
              <v-text-field
                v-model="Message.lastName"
                type="text"
                label="Last Name"
              ></v-text-field>
            </v-row>
            <v-row class="ga-3">
              <v-text-field
                v-model="Message.email"
                type="email"
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="Message.phoneNumber"
                type="phone"
                label="Phone Number"
              ></v-text-field>
            </v-row>
            <v-row class="ga-3">
              <v-text-field
                v-model="Message.subject"
                type="text"
                label="Subject"
              ></v-text-field>
            </v-row>
            <v-row class="ga-3">
              <v-textarea
                v-model="Message.message"
                label="Message"
              ></v-textarea>
            </v-row>
            <v-btn
              :loading="loading"
              type="submit"
              block
              class="mt-2"
              text="Submit"
              @click="sendMessage"
            ></v-btn>
          </v-form>
        </v-col>
        <v-col>
          <v-img
            :width="600"
            :height="600"
            cover
            src="https://img.freepik.com/premium-photo/purple-sky-background-with-abstract-violet-design_124507-13639.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {},
  },
  data() {
    return {
      messages: [],
      Message: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      },
    };
  },

  methods: {
    sendMessage() {
      this.messages.push(this.Message);
      this.$emit("message-sent", this.Message);
    },
  },
};
</script>
