export default {
    namespaced: true,
    state: {
        titulo: "",
        contenido: ""
    },
    getters: {
        obtenerNota: state => ({titulo: state.titulo, contenido: state.contenido}),
        obtenerTitulo: state => state.titulo,
        obtenerContenido: state => state.contenido
    },
    mutations: {
        EDITAR_NOTA: (state, nota) => state.nota = nota,
        EDITAR_TITULO: (state, titulo) => {
            state.titulo = titulo
        },
        EDITAR_CONTENIDO: (state, contenido) => {
            state.contenido = contenido
        },
        LIMPIAR_NOTA: (state) => {
            state.titulo = "",
            state.contenido = ""
        }
    },
    actions: {
        editarNota: (context, nota) => context.commit('EDITAR_NOTA', nota),
        editarTitulo: (context, titulo) => context.commit('EDITAR_TITULO', titulo),
        editarContenido: (context, contenido) => context.commit('EDITAR_CONTENIDO', contenido),
        limpiarNota: context => {
            context.commit('LIMPIAR_NOTA')
        },
    }
}
