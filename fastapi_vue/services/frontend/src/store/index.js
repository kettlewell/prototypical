import createPersistedState from "vuex-persistedstate";
//import * as Vue from 'vue';
import * as Vuex from 'vuex';

import notes from './modules/notes';
import users from './modules/users';


//Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        notes,
        users,
    },
    plugins: [createPersistedState()]
});
