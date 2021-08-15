<template>
  <v-card
    id="content-card-code">
    <section class="code-builder__main">
      <v-row>
        <v-col cols="6">
          <problem-assets :problem="algorithmData"/>
        </v-col>
        <v-col cols="6">
          <code-box />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <code-result-widget :info="algorithmData"/>
        </v-col>
      </v-row>
    </section>
  </v-card>
</template>

<script>
import ProblemAssets from '~/components/widgets/problem-assets.vue';
import CodeBox from '~/components/widgets/code-box.vue';
import CodeResultWidget from '~/components/widgets/code-result-widget.vue';

export default {
  components:{
    ProblemAssets,
    CodeBox,
    CodeResultWidget
  },
  computed:{
    algorithmData(){
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
  },
  mounted(){
    this.$store.commit('codeBuilderService/codeUpdate',this.algorithmData.initial_code);
    console.log(this.$store.state.codeBuilderService.env);
  },
  methods:{
    runCode(){
    }
  }
}
</script>

<style lang="scss">
  #content-card-code{
    background-color: $cool-gray-color;
    margin-top: 5vw;
    .code-builder__main{
      *:not(.my-editor){
        background-color: transparent;
      }
      margin: 1vw;
      .theme--dark.v-tabs > .v-tabs-bar 
      .v-tab:not(.v-tab--active), 
      .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, 
      .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, 
      .theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled {
        color: $blue-black-color;
      }
      .v-card__text{
        color: $blue-black-color;
      }
      .v-application .primary--text {
        color: #3A5199 !important;
        caret-color: #3A5199 !important;
      }
    }
  }
</style>
