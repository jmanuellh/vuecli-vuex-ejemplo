<template>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Titulo</th>
                <th>Contenido</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="nota in notas" :key="nota.id">
                <td>{{nota.id}}</td>
                <td>{{nota.titulo}}</td>
                <td>{{nota.contenido}}</td>
                <td><button>Botón</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "tablaNotas",
    computed: {
        ...mapGetters({
            notas: "notas/obtenerNotas"
        })
    },
    mounted() {
        this.consultarNotas();
    },
    methods: {
        ...mapActions({
            consultarNotas: "notas/consultarNotas"
        })
    }
}
</script>
