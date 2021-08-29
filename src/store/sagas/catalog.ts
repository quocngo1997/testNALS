import axios from 'axios'
import { CATALOG_URL } from 'constant/api-constant'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { FetchCatalogFail, fetchCatalogSuccess, FETCH_CATALOGS, FETCH_CATALOG_DETAIL } from 'store/actions/catalog'
import { FetchCatalogDetailFail, fetchCatalogDetailSuccess } from './../actions/catalog'

function* fetchCatalogSaga(action) {
    const { payload } = action
    function fetchCatalogs() {
        const sortBy = payload.sortBy ? `&sortBy=${payload.sortBy}` : ''
        const orderBy = payload.orderBy ? `&orderBy=${payload.orderBy}` : ''
        const search = payload.search ? `&search=${payload.search}` : ''
        return axios.get(`${CATALOG_URL}?page=${payload.page}&limit=10${sortBy}${orderBy}${search}`)
    }
    try {
        const res = yield call(fetchCatalogs)
        yield put(fetchCatalogSuccess(res))
    } catch (error) {
        yield put(FetchCatalogFail(error))
    }
}

function* fetchCatalogDetailSaga(action) {
    const { payload } = action
    function fetchCatalog() {
        return axios.get(`${CATALOG_URL}/${payload.id}`)
    }
    try {
        const res = yield call(fetchCatalog)
        yield put(fetchCatalogDetailSuccess(res))
    } catch (error) {
        yield put(FetchCatalogDetailFail(error))
    }
}

export default function* catalogSendAll() {
    yield all([takeEvery(FETCH_CATALOGS, fetchCatalogSaga), takeEvery(FETCH_CATALOG_DETAIL, fetchCatalogDetailSaga)])
}
