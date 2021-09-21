<template>
    <div>
        <input type="text" v-model="nota.titulo" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Entrada",
    computed: {
        // ...mapState({
        //     titulo: state => state.nota.titulo
        // })
        ...mapGetters({
            nota: "nota/obtenerNota"
        })
    }
}
</script>