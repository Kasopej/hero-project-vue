<template>
  <ul class="hero-list-group">
    <li class="hero-list-name" @click="select">{{hero.firstName}}</li>
    <li>{{hero.description}}</li>
  </ul> <!-- Made remote changes -->
</template>

<script>
export default { //exporting
    name: 'HeroList',
    props: {

      hero: {
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
