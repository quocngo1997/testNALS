import { MenuPaths } from 'constant/app-constant'
import CatalogDetail from 'pages/catalog/CatalogDetail'
import HomePage from 'pages/home'

export const routes = [
    { path: '/', component: HomePage },
    { path: `/${MenuPaths.catalog}/:id`, component: CatalogDetail }
]
