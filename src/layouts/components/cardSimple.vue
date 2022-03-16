<template>
    <div class="c-conatiner__stage">
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
        HelperText,
    }
})
export default class CardSimple extends Vue {
    
}
</script>
