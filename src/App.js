import React, { Fragment } from 'react';
import './App.css';
import UseState from './useState'
import UseEffect from './useEffect'
import UseMemo from './useMemo'
import NameProvider from './nameProvider'
import UseContext from './useContext'

function App() {
  return (
    <div className="App">
      <Fragment>
         <UseState/> 
         <UseEffect/> 
         <UseMemo/>
        <NameProvider>
          <UseContext/>
        </NameProvider>
      </Fragment>
    </div>
  );
}

export default App;
