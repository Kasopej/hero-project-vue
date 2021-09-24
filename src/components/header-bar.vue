<template>
    <nav>
        <div class="header-bar-brand">
            <HeaderBarBrand 
            :brand="links.brand"
            />
        </div>
        <div class="header-bar-links">
            <ul>
                <HeaderBarLinks 
                v-for="id in index"
                :key="id"
                :index="id"
                />
            </ul>
        </div>
    </nav>
</template>

<script>

import HeaderBarLinks from '@/components/header-bar-links';
import HeaderBarBrand from '@/components/header-bar-brand';

export default {
    name: 'HeaderBar',
    data() {
        return {
            links: {brand: ['https://home.com', "/logo.png"]},
            index: [0,1],
        }
    },
    components: {HeaderBarLinks, HeaderBarBrand}
}
</script>

<style>

</style>