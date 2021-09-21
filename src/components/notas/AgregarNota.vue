<template>
    <section>
        <div>
            <input v-model="obtenerTitulo" @change="cambio">
        </div>
        <div>
            <input v-model="obtenerTitulo" @change="cambio">
        </div>
        <div>
            <button @click="agregarNota">agregar</button>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "AgregarNota",
    data() {
        return {
            nota: {},
            titulo: ""
        }
    },
    computed: {
        obtenerTitulo: {
            get() {
                return this.titulo
                // return this.$store.getters["nota/obtenerNota"]
            },
            set(value) {
                this.titulo = value
                console.log("value: ", value)
                // this.$store.dispatch("nota/obtenerNota", value)
            }
        }
        // ...mapGetters({
        //     nota: "nota/obtenerNota"
        // })
    },
    methods: {
        ...mapActions({
            agregarNota: "notas/agregarNota"
        }),
        cambio() {
            console.log("cambio")
        }
    }
}
</script>