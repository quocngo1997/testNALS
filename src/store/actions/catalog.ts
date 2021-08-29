import { AxiosResponse } from 'axios'
import { AppAction } from 'store/types'

export const FETCH_CATALOGS = 'FETCH_CATALOGS'
export const FETCH_CATALOGS_SUCCSS = 'FETCH_CATALOGS_SUCCSS'
export const FETCH_CATALOGS_FAIL = 'FETCH_CATALOGS_FAIL'

export const FETCH_CATALOG_DETAIL = 'FETCH_CATALOG_DETAIL'
export const FETCH_CATALOG_DETAIL_SUCCSS = 'FETCH_CATALOG_DETAIL_SUCCSS'
export const FETCH_CATALOG_DETAIL_FAIL = 'FETCH_CATALOG_DETAIL_FAIL'

interface Props {
    page?: number
    sortBy?: string
    orderBy?: string
    search?: string
}

export const fetchCatalogRequest = ({ page, sortBy, orderBy, search }: Props): AppAction => {
    return { type: FETCH_CATALOGS, payload: { page, sortBy, orderBy, search } }
}

export const fetchCatalogSuccess = (catalogs: AxiosResponse) => {
    return { type: FETCH_CATALOGS_SUCCSS, payload: catalogs.data }
}
export const FetchCatalogFail = (error) => {
    return { type: FETCH_CATALOGS_FAIL, payload: error }
}

export const fetchCatalogDetailRequest = ({ id }: { id: string }): AppAction => {
    return { type: FETCH_CATALOG_DETAIL, payload: { id } }
}

export const fetchCatalogDetailSuccess = (catalogDetail: AxiosResponse) => {
    return { type: FETCH_CATALOG_DETAIL_SUCCSS, payload: catalogDetail.data }
}
export const FetchCatalogDetailFail = (error) => {
    return { type: FETCH_CATALOG_DETAIL_FAIL, payload: error }
}
