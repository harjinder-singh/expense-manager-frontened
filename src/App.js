import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Layout from './Pages/Layout/Layout';
import Accounts from './Components/Accounts/Accounts';
import Transaction from './Components/Transactions/Transactions';
import LineChart from "./Components/Charts/LineChart";
import Users from "./Components/Users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="users" element={<Users />} />
            <Route path="users/:id/accounts" element={<Accounts />} />
            <Route path="accounts/:id/transactions" element={<Transaction />} />
            <Route path="charts" element={<LineChart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
