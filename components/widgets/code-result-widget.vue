<template>
<section class="code-problem__result">
<v-card>
<v-row>
  <v-col cols="8">
  <v-tabs vertical>
    <v-tab>
      <v-icon left>
        mdi-code-braces
      </v-icon>
        Raw Output
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-code-brackets
        </v-icon>
        Custom Output
      </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text
                v-for="(raw,index) in rawOutput"
                :key="index">
                <p>
                {{ raw }}
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card>
                <v-card-text
                  v-for="(test,index) in testResults" 
                  :key="index">
                  <p>
                    Params = {{ params[index] }}
                     <br/>
                    our Code: {{ test }}
                  </p>
                  <p>
                    Params = {{ params[index] }}
                     <br/>
                    your Code: {{ customOutput[index] }}
                  </p>
                </v-card-text>
              </v-card>
            </v-card>
          </v-tab-item>
    </v-tabs>
  </v-col>
  <v-col
    cols="4"
    class="btn-wrapper">
    <v-row
        align="center"
        justify="space-around"
        class="btn-code"
      >
        <v-btn
          tile
          class="btn-runcode"
          v-on:click="click"
        >
          <v-icon left>
            mdi-play
          </v-icon>
          Run code
        </v-btn>
        <v-btn
          class="btn-submit"
          v-on:click="submitCode">
          Submit
        </v-btn>
    </v-row>
  </v-col>
</v-row>
</v-card>
</section>
</template>

<script>
export default {
  props:['info'],
  data(){
    return{
    }
  },
  computed: {
    rawOutput(){
      return this.$store.state.codeBuilderService.rawOutput
    },
    customOutput(){
      return this.$store.state.codeBuilderService.customOutput; 
    },
    testResults(){
      const results = this.info.tests_results_output;
      return JSON.parse(results);
    },
    params(){
      const params = this.info.tests_input; 
      return JSON.parse(params); 
    }
  },
  methods:{
    click(){
      this.$store.dispatch('codeBuilderService/requestRunCode',this.info);
    },
    submitCode(){
      // playing with the data.
      const response = this.$store.state.codeBuilderService.response;
      const output = response.data.run_status.output;
      const arrayOutput = output.split('\n');
      let customOutput = [];
      let rawOutput = ['----------Test 1-----------'];
      let switchBoolean = false;
      let testCounter = 2;
      arrayOutput.forEach((output,index)=>{
        console.log(index,arrayOutput.length);
        if(index + 1 >= arrayOutput.length) return;
        if(switchBoolean){
          customOutput.push(output)
          switchBoolean = false; 
        }else if(output === '---------------------'){
          switchBoolean = true;
          rawOutput.push(`----------Test ${testCounter}-----------`);
          testCounter++;
        }else{
          rawOutput.push(output);
          switchBoolean = false; 
        }
      });
      console.log(rawOutput);
      console.log(customOutput);
    }
  },
}
</script>

<style lang="scss">
  .btn-wrapper{
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    position: relative;
    .btn-code{
      .v-application .success {
        background-color: $cobalt-color !important;
        border-color: $cobalt-color !important;
      }
      .btn-submit{
        background-color: $blue-black-color !important;
      }
      .btn-runcode{
        background-color:$cobalt-color !important;
      }
    }
  }
</style>
