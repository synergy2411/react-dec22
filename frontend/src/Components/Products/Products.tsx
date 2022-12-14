import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

export const Overview = () => {
    const params = useParams();
    return <h3>Showing the Overview for Product : {params.productId} | QTY : ${params.qty}</h3>
}
export const Specification = () => <h3>The Specification Component Loaded</h3>

const Products = () => {

    return (
        <div>
            <h1>The Products Components</h1>

            <Link className='m-3' to="/products/p199/99/overview">Overview</Link>
            <Link to="/products/specification">Specification</Link>

            <hr />

            <Outlet />

            {/* <Routes>
                <Route path='/overview' element={<Overview />} />
                <Route path='/specification' element={<Specification />} />
            </Routes> */}
        </div>

    )

}

export default Products;