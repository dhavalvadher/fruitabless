import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRoutes from './routes/UserRoutes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes/AdminRoutes';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRoutes />} />

        <Route element={<PrivateRoutes />}>
          <Route exact path="/admin/*" element={<AdminRoutes />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
