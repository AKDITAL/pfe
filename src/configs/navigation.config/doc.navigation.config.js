import {APP_PREFIX_PATH, DOCS_PREFIX_PATH} from 'constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const qstNavigationConfig =  [
    {
        key: 'appsccv.PATIENT CCV',
        path: '',
        title: 'Questionnaires Medicaux',
        translateKey: 'nav.appsccv.questionnaires_medicaux',
        icon: '',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [







        ],




    },]


export default qstNavigationConfig
