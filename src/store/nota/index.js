export default {
    namespaced: true,
    state: {
        nota: {
            titulo: "titulo 1"
        },
        titulo: "titulo 1"
    },
    getters: {
        obtenerNota: state => state.nota,
        obtenerTitulo: state => state.titulo
    },
    mutations: {
        EDITAR_NOTA: (state, nota) => state.nota = nota
    },
    actions: {
        editarNota: (context, nota) => context.commit('EDITAR_NOTA', nota)
    }
}
