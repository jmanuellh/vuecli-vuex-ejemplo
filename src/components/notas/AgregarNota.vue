<template>
    <section>
        <div>
            <input v-model="nota.titulo">
        </div>
        <div>
            <input v-model="nota.contenido">
        </div>
        <div>
            <button @click="agregarNota()">agregar</button>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

</script>

<script>


export default {
    name: "AgregarNota",
    computed: {
        ...mapGetters({
            nota: "nota/obtenerNota"
        })
    },
    methods: {
        ...mapActions({
            agregarNota: "notas/agregarNota"
        })
    }
}
</script>