import axios from "axios"

const urlBase = "https://erpbackaspnetcore31.azurewebsites.net/api/notas"

export default {
    namespaced: true,
    state: {
        notas: []
    },
    getters: {
        obtenerNotas: state => state.notas
    },
    mutations: {
        ACTUALIZAR_NOTAS: (state, notas) => state.notas = notas
    },
    actions: {
        consultarNotas: context => {
            axios.get(urlBase).then(r => {
                context.commit("ACTUALIZAR_NOTAS", r.data)
            })
        },
        agregarNota: context => {
            console.log("");
            // axios.post(urlBase, context.rootState.nota.obtenerNota)
        }
    }
}
