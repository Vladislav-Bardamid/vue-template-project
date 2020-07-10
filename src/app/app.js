import Vue from 'vue'
import AppLeftMenu from './left-menu/left-menu.vue';
import AppDashboard from './dashboard/dashboard.vue';
import AppMessages from './messages/messages.vue';
import AppPeopleAll from './people/people-all/people-all.vue';
import AppOnboardModal from './onboard-modal/onboard-modal.vue';
import AppHeader from './header/header.vue';
import Router from './router';

Vue.component(AppHeader);

export default {
    name: 'app',
    components: {
        AppLeftMenu,
        AppDashboard,
        AppMessages,
        AppPeopleAll,
        AppOnboardModal
    },
    router: Router
}