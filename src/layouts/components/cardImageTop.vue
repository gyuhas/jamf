<template>
    <div class="c-conatiner__stage">
            <Media/>
            <HelperText/>
            <Button/>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../components/ui/button.vue';
import Media from '../../components/ui/media.vue';
import HelperText from '../../components/ui/helperText.vue';


@Component({
    components: {
        Button,
        Media,
        HelperText,
    }
})
export default class CardImageTop extends Vue {
    
}
</script>

