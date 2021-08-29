import { Fragment } from 'react'
import AppRoutes from 'routes'

export default function AppLayout(): JSX.Element {
    return (
        <Fragment>
            <header className='p-3 mb-2 bg-primary text-white'>Header</header>
            <AppRoutes />
            <footer className='p-3 mb-2 bg-dark text-white'>Footer</footer>
        </Fragment>
    )
}
