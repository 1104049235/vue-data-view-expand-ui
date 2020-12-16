import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import powereditor from './modules/powereditor'
import settings from './modules/settings'
import image from './modules/image'
import scale from './modules/scale'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings,
    scale,
    powereditor,
    image
  },
  getters
})

export default store
