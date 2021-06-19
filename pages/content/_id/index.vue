<template>
  <div class="main-section">
    <section class="subject-content">
        <header class="jumbotron-subject">
          <span class="topic">Tema:</span>
          <span class="title-topic">{{ data.title }}</span>
          <p class="description">{{ data.description }}
          </p>
          <span class="title">Porcetanje de completitud</span>
        </header>
        <v-progress-linear
          v-model="data.skill"
          color="blue-grey"
          height="25"
        >
          <template v-slot:default="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
    </section>
    <section class="content-table">
      <v-card
        id="content-card">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-12">
            CONTENIDO:
          </div>
          <v-divider class="spacer-black"></v-divider>
          <timeline-content
            :videos="data.videos"
            :papers="data.papers"
            :algos="data.algorithms"/>
        </v-list-item-content>
      </v-list-item>
     </v-card>
    </section>
  </div>
</template>

<script>
import timelineContent from '~/components/tools/timeline-content.vue';
export default {
  components:{
    timelineContent
  },
  data(){
    return{
      data:this.$store.state.content.topics[this.$route.params.id],
    }
  },
}
</script>

<style lang="scss">
  .subject-content{
    padding: 3rem 0 3rem 0;
    color: $white-color;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 6rem 0 6rem;
    background-image: url("//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/7vztwsHm7aveL29tXFlTXh/9ec4f9470e12edf85f910c1d1f2d0c9f/DSGN-1158_Hero-BG_1180x624.jpg");
    background-repeat: no-repeat;
    height:60vh;
    margin-bottom: 4rem;
    .jumbotron-subject{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      *{
        margin-bottom: 1rem;
      }
      .topic{
        text-transform: uppercase;
        font-size: 1.5rem;
      }
      .title-topic{
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0.0125em;
        font-family: "Roboto", sans-serif;
      }
      .description{
        font-size: 1.2rem;
      }
    }
  }
</style>
