<template>
  <v-card
    elevation="6"
    id="content-card">
    <v-row class="card-rows">
      <v-col cols="12">
        <v-list-item-title class="headline mb-1">
            Algoritmos
        </v-list-item-title>
      </v-col>
      <v-col cols="12">
        <section class="video-section">
          <video-widget :videoId="videoId"/>
        </section>
        <key-terms-list/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import videoWidget from '~/components/widgets/video-widget.vue';
import keyTermsList from '~/components/tools/key-terms-list.vue';

export default {
  components:{
    videoWidget,
    keyTermsList
  },
  data(){
    return {
      videoId:null,
      keyTerms:null,
    };
  },
}
</script>

<style lang="scss">
  .card-rows{
    padding: 2rem;
    .headline{
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2.5rem;
    }
    .video-section{
      text-align: center;
    }
  }
</style>
