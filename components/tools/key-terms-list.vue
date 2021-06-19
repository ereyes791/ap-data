<template>
  <section class="key-term-lists">
    <v-list class="list-key-terms-list">
      <v-list-group
        prepend-icon="mdi-minus"
        >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Key-Terms</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item-content
          v-for="keyTerm in keyTerms"
          class="list-content"
          :key="keyTerm.title">
          <v-list-item-title><b>{{ keyTerm.concept_name }} </b></v-list-item-title>
          <v-list-item-title>{{ keyTerm.concept }}</v-list-item-title>
        </v-list-item-content>
      </v-list-group>
    </v-list>
  </section>
</template>

<script>
  export default {
    data(){
      return{
      };
    },
    computed: {
      keyTerms(){
        let key = [];
        this.$store.state.content.topics[this.$route.params.id].videos
          .forEach(video=>{
              if(video.id === this.$route.params.uuid){
                console.log(video);
                key = video.keyTerms;
              }
          });
        return key;
      }
    },
mounted(){
}
}
</script>

<style lang="scss">
.list-key-terms-list{
  box-shadow:none !important;
  background: transparent !important;
  .list-content{
      padding-left: 3rem;
    }
    .v-list-item__title{
      white-space: none ;
    }
  }
</style>
