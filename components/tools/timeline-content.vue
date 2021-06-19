<template>
 <v-timeline
    align-top
    dense
    >
    <div class="video-wrapper"
      v-if="videos">
      <v-timeline-item
        icon="mdi-play"
        fill-dot
        v-for="video in videos" :key="video.id"
      >
        <v-list
          light
          class="timeline-card"
          >
          <v-list-item-title class="title">
            {{video.title}}
          </v-list-item-title >
          <div class=" text--primary">
            <p>
              {{video.description}}
            </p>
          <v-btn :to="video.link" class="link-to-content"> {{ video.title}}</v-btn>
          </div >
        </v-list>
      </v-timeline-item>
    </div>
    <div class="paper-wrapper"
        v-if="papers">
        <v-timeline-item
        icon="mdi-file"
        fill-dot
        v-for="paper in papers" :key="paper.id"
      >
        <v-list
          light
          class="timeline-card"
          >
          <v-list-item-title class="title">
            {{paper.title}}
          </v-list-item-title >
          <div class=" text--primary">
            <p>
              {{paper.description}}
            </p>
          <v-btn :to="paper.link" class="link-to-content"> {{ paper.linkText}}</v-btn>
          </div >
        </v-list>
      </v-timeline-item>
    </div>
    <div class="algo-wrapper"
        v-if="algos">
      <v-timeline-item
        icon="mdi-code-braces"
        fill-dot
        v-for="algo in algos" :key="algo.id"
      >
        <v-list
          light
          class="timeline-card"
          >
          <v-list-item-title class="title">
            {{algo.title}}
          </v-list-item-title >
          <div class=" text--primary">
            <p>
              {{algo.description}}
            </p>
          <v-btn :to="algo.link" class="link-to-content"> {{ algo.linkText}}</v-btn>
          </div >
        </v-list>
      </v-timeline-item>
    </div>
  </v-timeline>
</template>

<script>
export default {
  props:['timeLine','videos','papers','algos'],
  data(){
    return{
      linkTo:"/content/intro-programming/video/U3CGMyjzlvM",
    };
  },
  mounted(){
  }
}
</script>

<style lang="scss">
  .link-to-content{
    box-shadow: none;
    *{
      color:$cobalt-color !important;
    }
  }
  .spacer-black{
    border-color:$blue-black-color;
  }
  .theme--dark.v-timeline::before {
    background: $blue-black-color;
  }
 .v-timeline-item__dot{
    *{
      background-color: $white-color !important;
      border-color: $blue-black-color !important;
    }
 }
  .timeline-card {
    background-color: transparent !important;
    .link-to-content{
      outline: none;
      border: none;
      border-radius: 0;
      cursor: pointer;
      background: $cool-gray-color;
      margin-bottom: .25rem;
      text-align: unset;
      height: unset;
      padding: 0;
      white-space: normal;
      color: $cobalt-color;
      display: inline-block;
      text-decoration: none;
      letter-spacing: .0625rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .v-timeline:before {
      bottom: 0;
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
  }
</style>
