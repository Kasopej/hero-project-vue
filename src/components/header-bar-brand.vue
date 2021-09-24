<template>
    <a :href="brand[0]">
        <img :src="brand[1]" alt="Logo" :style="imgBrandStyles">
    </a>
</template>

<script>
export default {
    name: 'HeaderBarBrand',
    props: {
        brand: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            imgBrandStyles: {width: "40px", height: "40px",}
        }
    },
}
</script>

<style>

</style>