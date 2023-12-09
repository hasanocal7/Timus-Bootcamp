<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div>
        <ul>
          <li v-for="(message, index) in messages" :key="index">
            {{ message.firstName }} {{ message.lastName }}:
            {{ message.message }}
          </li>
        </ul>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const messages = ref([]);

const messageSent = (message) => {
  messages.value.push(message);
};

onMounted(() => {
  this.$on("message-sent", messageSent);
});
</script>
