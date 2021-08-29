import { MenuPaths } from 'constant/app-constant'
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCatalogRequest } from 'store/actions/catalog'
import './style/index.css'

const HomePage = (props) => {
    const { fetchCatalogRequest, catalogs } = props
    const [page, setPage] = useState<number>(1)
    const [sortBy, setSortBy] = useState<string | undefined>()
    const [orderBy, setOrderby] = useState<string | undefined>()
    const [dataSearch, setDataSearch] = useState<string | undefined>()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        fetchCatalogRequest({ page, sortBy, orderBy, search: dataSearch })
    }, [fetchCatalogRequest, page, sortBy, orderBy, dataSearch])

    return catalogs.isLoading ? (
        <div className='container-fluid mb-2'>Loading...</div>
    ) : catalogs.error ? (
        <div className='container-fluid mb-2'>{catalogs.error}</div>
    ) : (
        <div className='container-fluid'>
            <div className='row'>
                <div className='mb-2 col-sm-6'>
                    <button
                        type='button'
                        className='btn btn-primary btn-sort'
                        onClick={(): void => setSortBy('createdAt')}>
                        Sort by createdAt
                    </button>
                    <button type='button' className='btn btn-secondary' onClick={(): void => setSortBy(undefined)}>
                        Cancel sort by createdAt
                    </button>
                </div>
                <div className='mb-2 col-sm-6'>
                    <button type='button' className='btn btn-primary btn-sort' onClick={(): void => setOrderby('desc')}>
                        Order by desc
                    </button>
                    <button type='button' className='btn btn-secondary' onClick={(): void => setOrderby(undefined)}>
                        Cancel order by desc
                    </button>
                </div>
            </div>
            <div className='mb-2 row'>
                <div className='col-sm-5'>
                    <input
                        ref={inputRef}
                        type='text'
                        className='form-control'
                        placeholder='Enter search data...'
                        defaultValue={dataSearch}
                    />
                </div>
                <button
                    type='button'
                    className='btn btn-primary col-sm-2'
                    onClick={(): void => {
                        if (inputRef.current) setDataSearch(inputRef.current.value)
                    }}>
                    Search
                </button>
            </div>
            <ul className='list-unstyled'>
                {catalogs.catalogs?.map((item, index) => (
                    <li className='media mb-3' key={index}>
                        <img width={64} height={64} src={item.image} alt={item.title} />
                        <div className='media-body'>
                            <Link className='mt-0 mb-1 title' to={`/${MenuPaths.catalog}/${item.id}`}>
                                {item.title}
                            </Link>
                            {item.content}
                        </div>
                    </li>
                ))}
            </ul>
            {/* Currently the api does not return the total record, so hardcode pagination */}
            <ul className='pagination'>
                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(page - 1)}>
                        <span aria-hidden='true'>&laquo;</span>
                    </button>
                </li>
                <li className={`page-item ${page === 1 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(1)}>
                        1
                    </button>
                </li>
                <li className={`page-item ${page === 2 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(2)}>
                        2
                    </button>
                </li>
                <li className={`page-item ${page === 3 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(3)}>
                        3
                    </button>
                </li>
                <li className={`page-item ${page === 4 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(4)}>
                        4
                    </button>
                </li>
                <li className={`page-item ${page === 5 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(5)}>
                        5
                    </button>
                </li>
                <li className={`page-item ${page === 6 ? 'active' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(6)}>
                        6
                    </button>
                </li>
                <li className={`page-item ${page === 6 ? 'disabled' : ''}`}>
                    <button className='page-link' onClick={(): void => setPage(page + 1)}>
                        <span aria-hidden='true'>&raquo;</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

const mapState = (state) => {
    return { catalogs: state.catalogs }
}

const mapDispatch = { fetchCatalogRequest }

export default connect(mapState, mapDispatch)(HomePage)
