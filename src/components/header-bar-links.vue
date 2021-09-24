<template>
  <li><a :href="social.socialsLinks[index]"><i v-html="social.icons[index]"></i></a></li>
</template>

<script>
export default {
    name: 'HeaderBarLinks',
    props: {
        index: {
            type: Number,

        }
    },
    data() {
        return {
            social: { socialsLinks: ["htpps://twitter.com", "https://facebook.com",], icons: ['&#x1F426;', '&#x2671;']}
        }
    },
}
</script>

<style>

</style>