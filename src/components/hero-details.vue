<template>
    <h2 class="heading-name">{{fullName}}</h2>
    <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="clonedHero.firstName">
    </div>
    <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="clonedHero.lastName">
    </div>
    <div>
        <label for="description">Description</label>
        <input type="text" id="description" v-model="clonedHero.description">
    </div>
    <div>
        <label for="id">Id</label>
        <input for="id" id="firstName" v-model="clonedHero.id" readonly>
    </div>
    <div>
        <label for="originDate">Origin date</label>
        <input type="date" id="originDate" v-model="clonedHero.originDate">
        <p>My origin date started on {{clonedHero.originDate}}</p>
    </div>
    <div>
        <label for="capeCounter">Cape Counter</label>
        <input type="number" id="capeCounter" v-model="clonedHero.capeCounter">
        <p>{{capeMessage}}</p>
    </div>
    <div class="actions">
        <button @click="saveHero"><i>&#x1F4BE;</i>Save</button>
        <button @click="cancelHero"><i>&#x238C;</i> Cancel</button>
    </div>
</template>

<script>

import { format } from "date-fns";
const displayDateFormat = 'MM/dd/yyyy';

export default {
    name: 'HeroDetails',
    props: {
        heroSel: {
            type: Object,
            default: () => {},
        }
    },
    data() {
        return {
            clonedHero: { ...this.heroSel },
            capeMessage: '',
        }
    },
    computed: {
        fullName(){
            return `${this.clonedHero.firstName} ${this.clonedHero.lastName}`;
        }
    },
    methods: {

        displayFormat(value){
            return format(value, displayDateFormat)
        },
        handleCapeCount(value){
            this.clonedHero.capeCounter = value<0 ? 0 : value;
            switch (value) {
                case 0:
                    this.capeMessage = "Where's my cape?";
                    break;
                case 1:
                    this.capeMessage = "One cape is all I need";
                    break;
                case 2:
                    this.capeMessage = "Always have a spare"
                    break;
                default:
                    this.capeMessage = "I can never have enough capes"
                    break;
            }
        },
        saveHero(){
            this.$emit('save', this.clonedHero);
        },
        cancelHero(){
            this.$emit('cancel')
        }

    },
    watch: {
        'clonedHero.capeCounter': {
            immediate: true,
            handler(newValue, oldValue){
                console.log(newValue + ',' + oldValue);
                this.handleCapeCount(newValue);
            }
        }
    },
}
</script>

<style>

</style>