import {APP_PREFIX_PATH, UI_COMPONENTS_PREFIX_PATH} from 'constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'
import {ADMIN, USER} from 'constants/roles.constant'

const appsNavigationConfig =
    [
        {
            key: 'appsccv',
            path: 'http://localhost:3000/',
            title: 'HomePage',
            translateKey: 'nav.appsccv.homepage',
            icon: '',
            type: NAV_ITEM_TYPE_TITLE,
            authority: [ADMIN, USER],
            subMenu: [

                {
                    key: 'appsccv.progperso',
                    path: `${APP_PREFIX_PATH}/programme-personalise`,
                    title: 'programme personalisé',
                    translateKey: 'nav.appsccv.progperso',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.scc',
                    path: `${APP_PREFIX_PATH}/service_de_chirurgie_cardiaque`,
                    title: 'Service de chirurgie cardiaque',
                    translateKey: 'nav.appsccv.scc',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.pp',
                    path: `${APP_PREFIX_PATH}/pp`,
                    title: 'Prépartion préparatoire',
                    translateKey: 'nav.appsccv.pp',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/mon_hospitalisation`,
                    title: 'mon hospitalisation',
                    translateKey: 'nav.appsccv.mon_hospitalisation',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${UI_COMPONENTS_PREFIX_PATH}/typography`,
                    title: 'Ma sortie',
                    translateKey: 'nav.appsccv.ma_sortie',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/faq`,
                    title: 'Faq',
                    translateKey: 'nav.appsccv.faq',
                    icon: 'navigation',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/documents`,
                    title: 'Documents',
                    translateKey: 'nav.appsccv.documents',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/apropos`,
                    title: 'A propos',
                    translateKey: 'nav.appsccv.apropos',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],


                },

            ],




},]

export default appsNavigationConfig
