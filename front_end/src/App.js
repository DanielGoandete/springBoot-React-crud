import './App.css';
import React from 'react';
import User from './components/User';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import CreateUSer from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
function App() {


  return (
    <div className="App">
       <Router>
           <div className='container'>
              <Routes>
                 <Route path='/' element= {<User></User>}></Route>
                 <Route path='/user' element= {<User></User>}></Route>
                 <Route path='/addUser' element= {<CreateUSer></CreateUSer>}></Route>
                 <Route path='/updateUser/:id' element= {<UpdateUser></UpdateUser>}></Route>
              </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
