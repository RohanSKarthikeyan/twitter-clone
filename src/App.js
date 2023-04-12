
import './App.css';
import Feed from './Feed';
import SidePane from './SidePane';
import Widgets from './Widgets';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="app">
    <SidePane />
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
