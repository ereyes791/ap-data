<template>
<v-card
    elevation="6"
    id="content-card">
    <v-row>
      <v-col cols="7" sm="12" md="7">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              Flag:{{ contentObject.week }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ contentObject.title }}
            </v-list-item-title>
            <v-list-item-content>
              {{ contentObject.description }}
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-spacer ></v-spacer>
          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider class="spacer-black"></v-divider>
            <timeline-content 
            :timeLine="contentObject.timeLine" 
            :videos="contentObject.video"
            :papers="contentObject.paper"
            :algos="contentObject.algorithm"/>
          </div>
        </v-expand-transition>
      </v-col>
      <v-col cols="5" sm="12" md="5" class="btn-content-box">
        <v-card-actions >
          <v-row>
            <v-col cols="12" class="btn-wrapper">
              <v-btn
                outlined
                rounded
                text
                class="btn-primary"
                :to="contentObject.link"
                >
                Entrar
              </v-btn>
            </v-col>
            <v-col>
              <v-card
                class="content-sum"
                max-width="344"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      CONTENIDO:
                    </div>
                    <div class="content-info">
                      <v-icon>mdi-play</v-icon>
                      <span class="info-text">{{ contentObject.content.videoHours }} hours on-demand video</span>
                    </div>
                    <div class="content-info">
                      <v-icon>mdi-file</v-icon>
                      <span class="info-text">{{ contentObject.content.paper_ondemand }} on-demand documents</span>
                    </div>
                    <div class="content-info">
                      <v-icon>mdi-code-braces</v-icon>
                      <span class="info-text"> {{ contentObject.content.Algorithm }} algorithms</span>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import timelineContent from './timeline-content.vue'
export default {
  props:['contentObject'],
  components:{
    timelineContent,
  },
  computed:{
    computedcontentObject(){
      return this.$store.state.content.topicsSummary;
    }
  },
  watch:{
    computedcontentObject(ol,ne){
      console.log(ol,ne);
    }
  },
  data(){
    return {
      show: false,
      items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-play',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-file',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-code-braces',
      },
    ],
    }
  },
  mounted(){
    console.log('mounted content-box'+this.contentObject);
  }
}
</script>

<style lang="scss">
#content-card{
  margin-bottom: 3rem;
  .btn-wrapper{
    text-align:center;
    *{
      color:$white-color;
    }
    .btn-primary{
      background-color: $cobalt-color;
      border: .125rem solid transparent;
      width: 75%;
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
  .btn-content-box{
    margin-top: 3rem;
  }
  .content-sum{
    background-color: $white-color;
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
    .content-info{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 1rem;
      .info-text{
        margin-left: 1rem;
      }
    }
    .v-icon{
      font-size: 1rem;
    }
  }
}
</style>
