import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'

export default function AppRoutes(): JSX.Element {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} exact path={route.path} component={route.component} />
            ))}
        </Switch>
    )
}
