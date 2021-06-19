<template>
  <section class="paper-section">
    <v-row id="control-panel">
      <v-col col="4" class="icon__left"><v-icon x-large @click="goBackPage()">mdi-arrow-left-bold</v-icon></v-col>
      <v-col col="4" class="icon__center">{{ currentPage }} / {{ numPages }}</v-col>
      <v-col col="4" class="icon__right"><v-icon x-large @click="goNextPage()">mdi-arrow-right-bold</v-icon> </v-col>
    </v-row>
    <pdf
      :src="src"
      :page="currentPage"/>
  </section>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  data(){
    return{
      src:pdf.createLoadingTask("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"),
      currentPage: 1,
      pageCount: 0,
      numPages: null,
    }
  },
  mounted(){
    console.log(this.src)
    console.log(pdf)
    this.src.promise.then(pdf => {
      console.log(pdf)
      this.numPages = pdf._pdfInfo.numPages;
    });
  },
  methods:{
    goNextPage(){
      this.currentPage < this.numPages? this.currentPage++: null;
    },
    goBackPage(){
      this.currentPage > 1? this.currentPage--: null;
    }
  }
}
</script>

<style lang="scss">
  .paper-section{
    padding: 2rem;
    .icon{
      color: $blue-black-color;
      &__left{
       text-align: left;
      }
      &__right{
       text-align: right;
      }
      &__center{
       text-align: center;
      }

    }
    #control-panel{
      padding-bottom: 2rem;
    }
  }
</style>
