import './App.css';
import MaterialTable from 'material-table';
import peopleData from './data';
import columns from './columns';

function App() {
  return (
    <div className="App">
      <MaterialTable data={peopleData}
        columns={columns}
      />
    </div>
  );
}

export default App;
