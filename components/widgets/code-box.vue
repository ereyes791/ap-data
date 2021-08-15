<template>
  <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  components: {
    PrismEditor
  },
  data() {
    return{
      code:'',
    };
  },
  watch:{
    code(newCode){
      this.$store.commit('codeBuilderService/codeUpdate',newCode);
      console.log(newCode);
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.py); //returns html
    }
  },
  mounted()
  {
    this.code = this.$store.state.codeBuilderService.code
    console.log(languages);
  }
};
</script>

<style lang="scss">
.my-editor{
  background-color: #2f2e33;
}
</style>
