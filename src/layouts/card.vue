<template>
<div id="card">
    <div class="card-container">
        <component :is="currentComp"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardSimple from './components/cardSimple';
import CardImageMiddle from './components/cardImageMiddle';
import CardImageTop from './components/cardImageTop';
import CardLight from './components/cardLight';


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
