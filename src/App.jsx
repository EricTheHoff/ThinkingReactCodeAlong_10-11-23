import './App.css';
import InvoiceTable from './components/InvoiceTable';
import ModeButtons from './components/ModeButtons';
import DescriptionCell from './components/DescriptionCell';

const TEST_DATA = [
  { id: 0, description: 'Content Plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy Writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website Design', rate: 50, hours: 5 },
  { id: 3, description: 'Website Development', rate: 100, hours: 5 },
];

function App() {
  return (
    <>
      <InvoiceTable
      initialInvoiceData={TEST_DATA}
      />
    </>
  )
}

export default App;
