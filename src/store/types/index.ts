import { Catalog } from 'interface/Catalog'
import { Action } from 'redux'

export interface AppAction extends Action {
    [x: string]: any
    payload?: any
}

export interface CatalogState {
    isLoading: boolean
    error?: string
    catalogs?: Catalog[]
}

export interface CatalogDetailState {
    isLoading: boolean
    error?: string
    catalogDetail?: Catalog
}
