<template>
<div>
    <button @click="actualizarNota()">Editar</button>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "Boton",
    methods: {
        ...mapActions({
            editarNota: "nota/editarNota"
        }),
        actualizarNota() {
            this.editarNota({titulo: 'titulo 2'})
        }
    }
}
</script>
