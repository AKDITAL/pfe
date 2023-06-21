import {DOCS_PREFIX_PATH} from 'constants/route.constant'
import {NAV_ITEM_TYPE_ITEM, NAV_ITEM_TYPE_TITLE,} from 'constants/navigation.constant'
import {ADMIN, USER} from 'constants/roles.constant'

const qstNavigationConfig = [
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
                key: 'docs.covid',
                path: `${DOCS_PREFIX_PATH}/covid`,
                title: 'Auto-questionnaire COVID',
                translateKey: 'nav.docs.auto_quesionnaire_covid',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {


                key: 'docs.questionnairej1',
                path: `${DOCS_PREFIX_PATH}/questionnaire-J1`,
                title: 'Questionnaire J-1',
                translateKey: 'nav.docs.questionnaire',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],
            },
            {

                key: 'docs.questionnaire',
                path: `${DOCS_PREFIX_PATH}/questionnaire`,
                title: 'Questionnaires Medicaux',
                translateKey: 'nav.docs.questionnaires_medicaux',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                subMenu: [],

            },
        ]
    },]


export default qstNavigationConfig
