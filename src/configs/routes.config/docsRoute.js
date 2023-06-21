import React from 'react'
import { DOCS_PREFIX_PATH } from 'constants/route.constant'

const docsRoute = [
    {
        key: 'docs.questionnaire',
        path: `${DOCS_PREFIX_PATH}/questionnaire`,
        component: React.lazy(() => import('views/docs/bot')),
        authority: [],
    },
    {
        key: 'docs.covid',
        path: `${DOCS_PREFIX_PATH}/covid`,
        component: React.lazy(() => import('views/docs/covid')),
        authority: [],
    },
    {
        key: 'docs.questionnairej1',
        path: `${DOCS_PREFIX_PATH}/questionnaire-J1`,
        component: React.lazy(() => import('views/docs/qst')),
        authority: [],
    },
    {
        key: 'docs.changeLog',
        path: `${DOCS_PREFIX_PATH}/changelog`,
        component: React.lazy(() => import('views/docs/ChangeLog')),
        authority: [],
    },
]

export default docsRoute
