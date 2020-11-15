<template>
  <div class="home">
    <p v-if="visible">Maintenant vous me voyez {{message}}</p>
    <button v-on:click="foo()">
      ok
    </button>
    <!--div v-background="red">salutsalut</div-->
    <Todos message="Nouvelle tâche a faire!"></Todos>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import {Background} from '@/directives/background.directive';
import Todos from '@/components/todos.vue'; // @ is an alias to /src
import axios from 'axios'
import VueAxios from 'vue-axios'

@Component({
  components: {
    Todos
  },
  directives:{
    //Background
  },
  mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (console.log(response.data)))
        .catch(error => console.error(error))
        //.finally(() => this.loading = false)
  }
})
export default class Home extends Vue {

  message= 'test';
  visible = true;
  foo(){
    this.visible = !this.visible;
  }
}
</script>
