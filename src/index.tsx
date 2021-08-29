import { createBrowserHistory } from 'history'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { store } from 'store'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
