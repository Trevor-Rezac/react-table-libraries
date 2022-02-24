import './App.css';
import MaterialTable from 'material-table';
import peopleData from './data';
import columns from './columns';
import * as V from 'victory'; 
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { VictoryTheme } from 'victory';

function App() {

  //need a function that maps through every person in our peopleData array
  //this function counts the number of people who live in a state
  //if a person does not have their state already counted, then we add their state to the counter, and count the person
  //if a person has their state counted, we increment the count by one.
  //finally, we return the counter
  // const countingHashMap = peopleData.reduce((accumulator, person) => {
  //   if (accumulator[person.state]) {
  //     accumulator[person.state]++;
  //   } else {
  //     accumulator[person.state] = 1;
  //   }
  //   console.log(accumulator);
  //   return accumulator;
  // }, {});

  function getPeopleInState(arr) {
    const countingHashMap = arr.reduce((accumulator, person) => {
      if (accumulator[person.state]) {
        accumulator[person.state]++;
      } else {
        accumulator[person.state] = 1;
      }
      
      return accumulator;
    }, {});
    
    const keysArr = Object.entries(countingHashMap);
    
    const finalArr = keysArr.map((key) => {
      return { 
        state: key[0],
        pop: key[1] 
      };
    });
    
    return finalArr;
  }

  function getStates(arr) {
    const statesArr = [];
    for (let person of arr) {
      if (statesArr.includes(person.state)) {
        () => {};
      } else {
        statesArr.push(person.state);
      }
    }
    // console.log(statesArr);
    return statesArr;
  }
  
  const numberArr = [];
  for (let i = 1; i <= 48; i++) {
    numberArr.push(i);
  }

  console.log(numberArr);
  getStates(peopleData);

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
    </div>
  );
}

export default App;
