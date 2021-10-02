<template>
    <section>
        <div>
            <!-- <input v-model="obtenerTitulo" @change="cambioNota"> -->
            <!-- <input v-model="obtenerNota.titulo"> -->
            <input v-model="titulo">
            <input v-model="contenido">
            <!-- <input v-model="obtenerContenido"> -->
            <!-- <input v-model="qwe.a"> -->
            <!-- <div>
                {{qwe.a}}
            </div> -->
        </div>
        <div>
            <!-- <input v-model="obtenerContenido" @change="cambioNota"> -->
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
            asd: {
                a: ""
            }
        }
    },
    computed: {
        titulo: {
            get() {
                return this.obtenerTitulo

            },
            set(value) {
                this.editarTitulo(value)
            }
        },
        contenido: {
            get() {
                return this.obtenerContenido
            },
            set(value) {
                this.editarContenido(value)
            }
        },
        qwe: {
            get() {
                return this.asd
            },
            set(value) {
                console.log("value: " + value)
                this.asd.a = value
            }
        },
        // obtenerNota: {
        //     get() {
        //         return this.nota
        //     },
        //     set(value) {
        //         console.log(value)
        //         // this.$store.dispatch("nota/obtenerNota", value)
        //     }
        // },
        ...mapGetters({
            obtenerTitulo: "nota/obtenerTitulo",
            obtenerContenido: "nota/obtenerContenido"
        }),
        // obtenerTitulo: {
        //     get() {
        //         // return this.titulo
        //         return this.$store.getters["nota/obtenerNota"]
        //     },
        //     set(value) {
        //         // this.titulo = value
        //         this.$store.dispatch("nota/obtenerNota", value)
        //     }
        // },
        // obtenerContenido: {
        //     get() {
        //         return this.titulo
        //         // return this.$store.getters["nota/obtenerNota"]
        //     },
        //     set(value) {
        //         // this.titulo = value
        //         this.$store.dispatch("nota/obtenerNota", value)
        //     }
        // }
        // ...mapGetters({
        //     nota: "nota/obtenerNota"
        // })
    },
    methods: {
        ...mapActions({
            agregarNota: "notas/agregarNota",
            editarNota: "nota/editarNota",
            editarTitulo: "nota/editarTitulo",
            editarContenido: "nota/editarContenido" 
        }),
        cambioNota() {
            console.log("cambioNota")
        }
    }
}
</script>
