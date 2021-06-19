<template>
  <section class="video-widget">
    <youtube :video-id="videoId" ref="youtube"
      @paused="pausing"
      @ended="ending"
      @ready="ready"
      @buffering ="buff"
      @playing="playing"/>
  </section>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
  export default {
    props: ['videoId'],
    data(){
      return{
      };
    },
    components: {},
    mounted(){
    },
    beforeDestroy(){
    },
    methods:{
      playVideo() {
      this.player.playVideo()
    },
    buff(){
      console.log('buffering!!')
    },
    playing() {
      console.log('\o/ we are watching!!!')
    },
    ending() {
      console.log('ended video');
    },
    pausing(){
      console.log('video on pause');
    },
    ready(){
      console.log('video ready');
    }
    },
  }
</script>

<style>

</style>
