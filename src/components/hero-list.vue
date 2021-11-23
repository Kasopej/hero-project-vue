<template>
  <ul class="hero-list-group">
    <li class="hero-list-name" @click="select">{{hero.firstName}}</li>
    <li>{{hero.description}}</li>
  </ul>
</template>

<script>
export default { //exporting!!!!!!!!!
    name: 'HeroList',
    props: {

      hero: {
        type: Object,
        default: () => {},
      }

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
