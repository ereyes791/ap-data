<template>
  <v-navigation-drawer
     permanent
     expand-on-hover
     absolute
     id="navbar-horizontal">
       <v-list-item class="px-2">
         <v-list-item-avatar>
           <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
         </v-list-item-avatar>
         <v-list-item-title class="title">
             Sandra Adams
         </v-list-item-title>
       </v-list-item>
       <v-divider></v-divider>
       <v-list
          nav
          dense>
         <v-list-item :to="item.to" v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{item.title}}
          </v-list-item-title>
         </v-list-item>
       </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return {
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'My Account',
          to: '/inspire'
        }
      ],
    }
  }
}
</script>

<style lang="scss">
  #navbar-horizontal{
    background-color: $blue-black-color;
    position: fixed;
  }
</style>
