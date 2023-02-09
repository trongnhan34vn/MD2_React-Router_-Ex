import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Invoices from './components/Invoices';
import { Route, Routes } from 'react-router-dom';
import Invoice from './components/Invoice';
import NewInvoice from './components/NewInvoice';
import Expense from './components/Expense';
import InvoiceId from './components/InvoiceId';

function App() {
  return (
    <div className="container">
      <HomePage />
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/invoices' element={<Invoices />}>
          <Route index element={<InvoiceId />} />
          <Route path='new' element={<NewInvoice />} />
          <Route path='/invoices/:invoiceid' element={<Invoice />} />
        </Route>
        <Route path='/expense' element={<Expense />} />
      </Routes>
    </div>
  );
}

export default App;
