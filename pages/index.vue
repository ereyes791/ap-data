<template>
  <v-row justify="center" align="center">
    <jumbotron/>
    <content-box v-for="(topic,index) in topicsList" 
      :key="index" 
      :contentObject="topic"/>
  </v-row>
</template>

<script>
import jumbotron from './../components/tools/jumbotron.vue'
import contentBox from '~/components/tools/content-box.vue'

export default {
  components: {
    jumbotron,
    contentBox,
  },
  data(){
    return {
    }
  },
  computed:{
    topicsList(){
      return this.$store.state.content.topicsSummary;
    },
  },
  watch:{
    topicsList(old,n){
      console.log('watch '+old,n);
    },
  },
  methods:{
    testing(){
    this.$store.dispatch('content/getSubjectData');
    },
  },
  mounted(){
    this.testing();
    const test = [
      {
        tag:"Tooez",
        info: {name:"RTZ",
          team:"EG"}
      }, {
        tag:"Toohard",
        info: {name:"Puppey",
          team:"Secret"}
      }];
    const hashTest = test.reduce((map,value)=>{
        map[value.tag] =  value.info;
        return map;
      },{});
    console.log('index'+ JSON.stringify(this.topicsList[0]));
  }
}
</script>
<style lang="scss">
</style>
