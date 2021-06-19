<template>
  <v-card
    id="content-card-code">
    <section class="code-builder__main">
      <v-row>
        <v-col cols="6">
          <problem-assets/>
        </v-col>
        <v-col cols="6">
          <code-box/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <code-result-widget/>
        </v-col>
      </v-row>
    </section>
  </v-card>
</template>

<script>
import ProblemAssets from '~/components/widgets/problem-assets.vue';
import CodeBox from '~/components/widgets/code-box.vue';
import CodeResultWidget from '~/components/widgets/code-result-widget.vue';
import axios from 'axios';
import qs from 'qs';

export default {
  components:{
    ProblemAssets,
    CodeBox,
    CodeResultWidget
  },
  mounted(){
    console.log(this.$store.state.codeBuilderService.env);
  },
  methods:{
    runCode(){
      let data = qs.stringify({
        'client_secret': '79dabab812bee8d13da1718b7b9b7993503fd7ea',
        'source': 'def cero():\n  return 0\nprint(cero())',
        'lang': 'PYTHON'
        });
      const config = {
        method: 'post',
        url: 'https://api.hackerearth.com:443/code/run',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'http://localhost:3000',
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type, Authorization'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
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
