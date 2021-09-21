export default {
    namespaced: true,
    state: {
        nota: {
            titulo: "",
            contenido: ""
        }
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
