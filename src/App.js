import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';
import { configstore } from './admin/component/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'



function App() {
  const { store, persistor } = configstore()
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route exact path="/*" element={<UserRoutes />} />

            <Route element={<PrivateRoutes />}>
              <Route exact path="/admin/*" element={<AdminRoutes />} />
            </Route>


          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
