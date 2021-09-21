import Vue from 'vue'
import Vuex from 'vuex'
import nota from './nota'
import notas from './notas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    nota,
    notas
    // {
    //   namespaced: true,
    //   state: {
    //       titulo: "titulo 1"
    //   },
    //   getters: {
    //       obtenerTitulo: state => state.titulo
    //   }
    // }
  }
})
