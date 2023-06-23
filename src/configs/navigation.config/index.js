import appsNavigationConfig from './apps.navigation.config'
import uiComponentNavigationConfig from './ui-components.navigation.config'
import pagesNavigationConfig from './pages.navigation.config'
import authNavigationConfig from './auth.navigation.config'
import qstNavigationConfig from './doc.navigation.config'
import docsNavigationConfig from "./doc.navigation.config";

const navigationConfig = [
    ...appsNavigationConfig,
   // ...pagesNavigationConfig,
  // ...authNavigationConfig,
    ...docsNavigationConfig,
]

export default navigationConfig
