import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import ArrowComponent from './components/ArrowComponent';
import FunctionComponent from './components/FunctionComponent';
import Timer from './components/Timer';
import React, { Fragment, Component, unstable_Profiler as Profiler} from "react";


const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="App">
            <Timer/>
            <ClassComponent/>
            <ArrowComponent/>
            <FunctionComponent/>

        </div>
    );
  }
}

export default App;
