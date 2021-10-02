<template>
  <div class="home">
    <AgregarNota />
    <TablaNotas />
  </div>
</template>

<script>
// @ is an alias to /src
import Entrada from '@/components/Entrada.vue'
import Boton from '@/components/Boton.vue'
import TablaNotas from '@/components/notas/tablaNotas.vue'
import AgregarNota from '@/components/notas/AgregarNota.vue'

export default {
  name: 'Home',
  components: {
    Entrada,
    Boton,
    TablaNotas,
    AgregarNota
  }
}
</script>
