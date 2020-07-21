import Vue from 'vue';
import moment from 'moment';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import NavigationGuard from './router/navigationGuard';
import WebSocketClient from './websocket';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import './assets/styles/index.scss';
import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax, { });
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.prototype.moment = (date, format) => {
    return moment(date).format(format || 'YYYY-MM-DD HH:mm');
};

async function init() {
    const store = await createStore();

    store.auth = await getAuth(store);
    store.wsc = new WebSocketClient(store);

    store.wsc.on('connected', console.log);

    createVueInstance(store);
}

async function createStore() {
    const store = {
        host: process.env.VUE_APP_API_HOST,
        ws_host: process.env.VUE_APP_WS_HOST,
        auth: null,
        wsc: null,
    };

    router.beforeEach(NavigationGuard.bind(store));

    return store;
}

async function getAuth(store) {
    const response = await fetch(`${store.host}/account`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Accept': 'application/json' }
    });

    const result = await response.json();

    if (result && result.success) {
        return result;
    } else {
        return false;
    }
}

function createVueInstance(store) {
    new Vue({
        router,
        data: store,
        computed: {
            authenticated() { return !!this.auth; }
        },
        methods: {
            request: async function(options) {
                const response = await fetch(`${this.host}${options.path}`, {
                    credentials: 'include',
                    method: options.method,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: (options.body ? JSON.stringify(options.body) : undefined),
                });

                return response.json();
            },
            validateSession: async function() {
                const result = await this.request({
                    method: 'GET',
                    path: '/account',
                });

                if (result?.success) {
                    this.auth = result;
                    console.log('authenticated', this.auth);
                } else if (result?.success === false) {
                    this.auth = null;
                }
                //else server down?
            },
        },
        render: h => h(App)
    }).$mount('#app');
}

init();
