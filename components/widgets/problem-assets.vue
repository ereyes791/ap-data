<template v-slot:extension>
  <section class="code-problem">
  <v-card>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-code-brackets
        </v-icon>
          Problema
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-lock
          </v-icon>
          Solucion
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text
              v-if="problem">
              <p>
              {{ problem.problem_aproach +' \n'+ problem.problem_example }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
              {{ problem.problem_solved_explained}}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </section>
</template>

<script>
import tabsCodeProblems from '../tools/tabs-code-problems.vue'

export default {
  components: { tabsCodeProblems },
  data(){
    return{
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  computed:{
    problem(){
      let data = null;
      this.$store.state.content.topics[this.$route.params.id].algorithms
        .forEach(algo=>{
            if(algo.id === this.$route.params.uuid){
              console.log(algo);
              data = algo.data;
            }
        });
      return data;
    },
  }
}
</script>

<style>
.theme--dark.v-card {
    background-color: transparent;
}
.v-application .primary--text {
    color: #1976d2 !important;
    caret-color: #1976d2 !important;
}
</style>
