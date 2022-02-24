import './App.css';
import MaterialTable from 'material-table';
import peopleData from './data';
import columns from './columns';
import * as V from 'victory'; 
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie } from 'victory';
import { VictoryTheme } from 'victory';
import { getPeopleInState, getStates, getPeopleInTimeZones, getBreakdownOfGenders } from './data-utils';

function App() {

  getBreakdownOfGenders(peopleData);

  return (
    <div className="App">
      <MaterialTable data={peopleData}
        columns={columns}
      />
      <VictoryChart
        domainPadding={15}
        theme={VictoryTheme.material}
      >
        <VictoryAxis 
          tickValues={[getStates(peopleData)]}
          style={{
            tickLabels: { fontSize: 6, angle: 45, padding: 15 },
          }}
          padding={100}
        />
        <VictoryAxis 
          dependentAxis
        />
        <VictoryBar 
          data={getPeopleInState(peopleData)}
          x='state'
          y='pop'
        />
      </VictoryChart>
      <VictoryPie 
        data={getBreakdownOfGenders(peopleData)}
        style={{
          labels: {
            fontSize: 6,
            angle: 45,
            padding: 15
          }
        }}
      />
    </div>
  );
}

export default App;
