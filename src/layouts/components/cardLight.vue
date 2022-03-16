<template>
        <div class="card-contained-stage">
            <HelperText/>
            <Button/>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '../../components/ui/button';
import Media from '../../components/ui/media';
import HelperText from '../../components/ui/helperText';


@Component({
    components: {
        Button,
        HelperText,
    }
})
export default class CardLight extends Vue {
    
}
</script>
