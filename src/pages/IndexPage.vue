<template>
  <q-page class="flex flex-center">
    jhshgs
    user
    <q-input outlined v-model="form.user"  />
    pass
    <q-input outlined v-model="form.pass" />
    <q-btn color="white" text-color="black" label="Submit"  @click="sendlogs(form)"/>
    {{ logs }}
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from "../boot/axios";

export default defineComponent({
  name: 'IndexPage',

  setup(){
    let form =ref({
      user:null,
      pass:null,
    });
    let logs=ref();
  const sendlogs = (payload) => {
 
  return new Promise((resolve, reject) => {
    api
      .post("api.php", { info: payload })
      .then((response) => {
         logs.value = response.data.Result;
      })
      .catch((error) => {
        reject(error);
      });
  });
};
    return{
      form,
      sendlogs,
      logs

    }
  }
})
</script>
