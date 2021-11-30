import './App.css';
import Login from "./Login"
import Signup from './Signup';
import Header from "./Header"
import GearContainer from './GearContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("/api/me")
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
      <Header setCurrentUser={setCurrentUser}/>
      <GearContainer />
    </div>
    :
    <Container className="pt-5">
      <h1 style={{textAlign: "center"}}>⛺️ Get Packin'</h1>
      <Login setCurrentUser={setCurrentUser}/>
      <Signup setCurrentUser={setCurrentUser}/>
    </Container>
    }
    </>
  );
}
export default App;
