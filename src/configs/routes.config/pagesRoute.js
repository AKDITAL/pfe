import React from 'react'
import {DOCS_PREFIX_PATH, PAGES_PREFIX_PATH} from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const pagesRoute = [
    {
        key: 'appsccv.covid',
        path: `${DOCS_PREFIX_PATH}/covid`,
        component: React.lazy(() => import('views/docs/qst')),
        authority: [ADMIN, USER],
    },
    {
        key: 'pages.accessDenied',
        path: '/access-denied',
        component: React.lazy(() => import('views/pages/AccessDenied')),
        authority: [ADMIN, USER],
    },
]

export default pagesRoute
