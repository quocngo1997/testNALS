import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCatalogDetailRequest } from 'store/actions/catalog'

const CatalogDetail = (props): JSX.Element => {
    const { fetchCatalogDetailRequest, catalogDetail } = props
    const id = window.location.pathname.split('/').pop()

    useEffect(() => {
        fetchCatalogDetailRequest({ id })
    }, [fetchCatalogDetailRequest, id])

    return catalogDetail.isLoading ? (
        <div className='container-fluid mb-2'>Loading...</div>
    ) : catalogDetail.error ? (
        <div className='container-fluid mb-2'>{catalogDetail.error}</div>
    ) : (
        <div className='media mb-2 container-fluid'>
            <img
                width={64}
                height={64}
                src={catalogDetail.catalogDetail?.image}
                alt={catalogDetail.catalogDetail?.title}
            />
            <div className='media-body'>
                <h5 className='mt-0 mb-1 title'>{catalogDetail.catalogDetail?.title}</h5>
                {catalogDetail.catalogDetail?.content}
            </div>
        </div>
    )
}

const mapState = (state) => {
    return { catalogDetail: state.catalogDetail }
}

const mapDispatch = { fetchCatalogDetailRequest }

export default connect(mapState, mapDispatch)(CatalogDetail)
