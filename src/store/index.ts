import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import catalogReducer, { catalogDetailReducer } from './reducers/catalog'
import saga from './sagas/catalog'

const rootReducer = combineReducers({
    catalogs: catalogReducer,
    catalogDetail: catalogDetailReducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
