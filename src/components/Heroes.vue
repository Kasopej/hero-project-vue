<template>
  <div v-if="message" class="message">
    {{message}}
  </div>
  <div class="heroes-list-container" v-if="!selectedHero">
      <HeroList 
      v-for="hero in heroes" 
      :key="hero.id" 
      :hero="hero" 
      @select="selectHero(hero)"/>
  </div>
  <div class="hero-details" v-if="selectedHero">
    <HeroDetails 
    :heroSel="selectedHero"
    @save="saveHero"
    @cancel="cancelHero"
    />
  </div>
</template>

<script>

import HeroList from "./hero-list.vue";
import HeroDetails from "./hero-details.vue";
import { ourHeroes } from "../shared/data";


export default {
    name: 'Heroes',
    data() {
        return {
            heroes: [],
            message: '',
            selectedHero: undefined,
        }
    },
    components: {HeroList, HeroDetails},
    created() {
        this.loadHeroes();
    },
    methods: {
        async getHeroes() {
            return new Promise(resolve => {
            setTimeout(() => resolve(ourHeroes), 1500);
            });
        },

        async loadHeroes() {
            this.heroes = [];
            this.message = 'getting the heroes, please be patient';
            this.heroes = await this.getHeroes();
            this.message = '';
        },
        selectHero(value){
          this.selectedHero = value;
        },
        saveHero(hero){
          const index = this.heroes.findIndex(h => h.id === hero.id);
          this.heroes.splice(index, 1, hero);
          this.heroes = [...this.heroes];
          this.selectedHero = undefined;
        },
        cancelHero(){
          this.selectedHero = undefined;
        }

    },
}
</script>

<style>
  
</style>