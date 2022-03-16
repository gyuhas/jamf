<template>
<div id="card">
    <div class="c-container">
        <component :is="currentComp"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardSimple from './components/cardSimple.vue';
import CardImageMiddle from './components/cardImageMiddle.vue';
import CardImageTop from './components/cardImageTop.vue';
import CardLight from './components/cardLight.vue';


@Component({
    components: {
        CardImageMiddle,
        CardSimple,
        CardImageTop,
        CardLight,
    }
})
export default class Card extends Vue {
    get currentComp(): string {
        return this.$store.state.currentComp;
    }
    
}
</script>
