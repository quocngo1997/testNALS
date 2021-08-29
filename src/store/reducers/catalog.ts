import {
    FETCH_CATALOGS,
    FETCH_CATALOGS_FAIL,
    FETCH_CATALOGS_SUCCSS,
    FETCH_CATALOG_DETAIL,
    FETCH_CATALOG_DETAIL_FAIL,
    FETCH_CATALOG_DETAIL_SUCCSS
} from 'store/actions/catalog'
import { AppAction, CatalogDetailState, CatalogState } from 'store/types'

const initialListState: CatalogState = { isLoading: true }

export default function catalogReducer(state = initialListState, action: AppAction): CatalogState {
    switch (action.type) {
        case FETCH_CATALOGS:
            return { isLoading: true }
        case FETCH_CATALOGS_SUCCSS:
            return { isLoading: false, catalogs: action.payload }
        case FETCH_CATALOGS_FAIL:
            return { isLoading: false, error: action.payload.response.data }
        default:
            break
    }
    return state
}

const initialDetailState: CatalogDetailState = { isLoading: true }

export function catalogDetailReducer(state = initialDetailState, action: AppAction): CatalogDetailState {
    switch (action.type) {
        case FETCH_CATALOG_DETAIL:
            return { isLoading: true }
        case FETCH_CATALOG_DETAIL_SUCCSS:
            return { isLoading: false, catalogDetail: action.payload }
        case FETCH_CATALOG_DETAIL_FAIL:
            return { isLoading: false, error: action.payload.response.data }
        default:
            break
    }
    return state
}
