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
        ACTUALIZAR_NOTAS: (state, notas) => {
            state.notas = notas
        },
        LIMPIAR_NOTA: (state) => {
            state.titulo = "",
            state.contenido = ""
        }
    },
    actions: {
        consultarNotas: context => {
            axios.get(urlBase).then(r => {
                context.commit("ACTUALIZAR_NOTAS", r.data)
            })
        },
        agregarNota: context => {
            // console.log(context.rootGetters['nota/obtenerNota']);
            // console.log(context.rootGetters['nota/obtenerNota'])
            axios.post(urlBase, context.rootGetters['nota/obtenerNota']).then(() => {
                context.dispatch('consultarNotas')
                context.dispatch('nota/limpiarNota', null, { root: true })
            })
        }
    }
}
