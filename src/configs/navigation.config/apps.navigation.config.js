import {APP_PREFIX_PATH} from 'constants/route.constant'
import {NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_TITLE,} from 'constants/navigation.constant'
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
                    title: 'Programme personalisé',
                    translateKey: 'nav.appsccv.programme_personalisé',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.scc',
                    path: `${APP_PREFIX_PATH}/scc`,
                    title: 'Service de chirurgie cardiaque',
                    translateKey: 'nav.appsccv.scc',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.prepa',
                    path: `${APP_PREFIX_PATH}/preparatoire`,
                    title: 'Prépartion préparatoire',
                    translateKey: 'nav.appsccv.prepa',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.hospitalisation',
                    path: `${APP_PREFIX_PATH}/hospitalisation`,
                    title: 'Mon hospitalisation',
                    translateKey: 'nav.appsccv.hospitalisation',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.sortie',
                    path: `${APP_PREFIX_PATH}/sortie`,
                    title: 'Ma sortie',
                    translateKey: 'nav.appsccv.sortie',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.faq',
                    path: `${APP_PREFIX_PATH}/faq`,
                    title: 'Faq',
                    translateKey: 'nav.appsccv.faqs',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.document',
                    path: `${APP_PREFIX_PATH}/documents`,
                    title: 'Documents',
                    translateKey: 'nav.appsccv.document',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.apropos',
                    path: `${APP_PREFIX_PATH}/apropos`,
                    title: 'apropos',
                    translateKey: 'nav.appsccv.apropos',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },


            ],

        },]

export default appsNavigationConfig
