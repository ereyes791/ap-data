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
              <v-card-text>
                <p>
                  ---------- Test Case 1 ----------
                  <br/>
                  ---------- Test Case 2 ----------
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card>
                <v-card-text>
                  <p>
                    Params = [2,3,4]
                     <br/>
                    our Code: 4
                  </p>
                  <p>
                    Params = [2,3,4]
                     <br/>
                    your Code: 4
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
        >
          <v-icon left>
            mdi-play
          </v-icon>
          Run code
        </v-btn>
        <v-btn
          class="btn-submit">
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
