import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Layout from './Pages/Layout/Layout';
import Accounts from './Components/Accounts/Accounts';
import Transaction from './Components/Transactions/Transactions';
import LineChart from "./Components/Charts/LineChart";
import Users from "./Components/Users/Users";
import Login from "./Components/Auth/Login";
import RequireAuth from "./Components/Auth/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id/accounts" element={<Accounts />} />
          <Route path="charts" element={<LineChart />} />
          <Route path="accounts/:id/transactions" element={<Transaction />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
