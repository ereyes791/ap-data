  <template v-slot:extension>
    <v-tabs
      v-model="tab"
      align-with-title
      >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
        >
        {{ item }}
      </v-tab>
    </v-tabs>
  </template>
<script>
export default {
  data(){
    return{
      items: [
        'web', 'shopping'
      ],
    }
  }
}
</script>

<style>

</style>
