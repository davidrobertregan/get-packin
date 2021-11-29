import './App.css';
import Login from "./Login"
import Signup from './Signup';
import Header from "./Header"
import GearContainer from './GearContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react"


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          setCurrentUser(user)
          setAuthChecked(true)
        })
      } else {
        setAuthChecked(true)
      }
    })
  }, [])
  
  if(!authChecked) {return <div></div>}
  return (
    <>
    { currentUser ?
    <div className="App" >
      <Header />
      <GearContainer />
    </div>
    :
    <div>
      <Login setCurrentUser={setCurrentUser}/>
      <Signup setCurrentUser={setCurrentUser}/>
    </div>
    }
    </>
  );
}
export default App;
