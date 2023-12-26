import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Layout from './Pages/Layout/Layout';
import Accounts from './Components/Accounts/Accounts';
import Transaction from './Components/Transactions/Transactions';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="accounts" element={<Accounts />} />
            <Route path="accounts/:id/transactions" element={<Transaction />} />
            {/* <Route path="api-testing" element={<ApiTesting />} />
            <Route path="fgt-testing" element={<FgtTesting />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
