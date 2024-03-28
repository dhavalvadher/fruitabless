import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../../admin/container/Products/Products';
import Layout from '../../admin/component/Layout/Layout';
import Reviews from '../../admin/container/Reviews/Reviews';
import Category from '../../admin/container/Category/Category';
import { Provider } from 'react-redux';
import { configstore } from '../../admin/component/redux/store';
import Conter from '../../admin/container/Counter/Conter';



function AdminRoutes(props) {
    const store = configstore()
    return (
        <div>
            <Provider store={store}>
            <Layout>
                <Routes>
                    <Route exact path="/Products" element={<Products />} />
                    <Route exact path="/Reviews" element={<Reviews />} />
                    <Route exact path="/Category" element={<Category/>}/>
                    <Route exact path="/Counter" element={<Conter/>}/>
                </Routes>
            </Layout>
            </Provider>
        </div>
    );
}

export default AdminRoutes;


