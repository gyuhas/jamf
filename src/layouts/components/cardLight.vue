<template>
    <div class="c-conatiner__stage-light">
            <HelperText/>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../components/ui/button.vue';
import Media from '../../components/ui/media.vue';
import HelperText from '../../components/ui/helperText.vue';


@Component({
    components: {
        HelperText,
    }
})
export default class CardLight extends Vue {
    
}
</script>
