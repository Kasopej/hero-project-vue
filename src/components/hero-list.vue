<template>
  <ul class="hero-list-group">
    <li class="hero-list-name" @click="select">{{hero.firstName}}</li>
    <li>{{hero.description}}</li>
  </ul> <!-- More changes! --> <!-- Made even more changes -->
</template>

<script>
export default { //exporting
    name: 'HeroList', //Local change in main branch
    props: {
// Made changes in MAIN branch
      hero: { // Made another remote change
        type: Object,
        default: () => {},
      }
  //Kept making changes loally!
    },
    methods: {

      select(){
        this.$emit('select')
        },

    },
}
</script>

<style>

</style>
