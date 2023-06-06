import {APP_PREFIX_PATH, PAGES_PREFIX_PATH} from 'constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const pagesNavigationConfig =
    [
        {
            key: 'appsccv.PATIENT CCV',
            path: '',
            title: 'Tableau de bord',
            translateKey: 'nav.appsccv.tableau_de_bord',
            icon: '',
            type: NAV_ITEM_TYPE_TITLE,
            authority: [ADMIN, USER],
            subMenu: [

                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/auto_quesionnaire_covid`,
                    title: 'Auto-questionnaire COVID',
                    translateKey: 'nav.appsccv.auto_quesionnaire_covid',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },
                {
                    key: 'appsccv.PATIENT CCV',
                    path: `${APP_PREFIX_PATH}/questionnaire_J1`,
                    title: 'Questionnaire J1',
                    translateKey: 'nav.appsccv.questionnaire_J1',
                    icon: '',
                    type: NAV_ITEM_TYPE_ITEM,
                    authority: [ADMIN, USER],
                    subMenu: [],
                },





            ],




        },]
export default pagesNavigationConfig
