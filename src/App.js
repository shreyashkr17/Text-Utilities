import "./App.css";
import Navbar from "./Component/Navbar"
import TextForm from "./Component/TextForm";
import About from "./Component/About";
import Alert from "./Component/Alert";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0a028d';
      showAlert("Dark Mode has been Enabled","success")
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success")
    }
  }
  return (
    <>
      <Navbar title="TEXT UTILITIES" mode={mode} toggleMode={toggleMode} aboutText="ABOUT"/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm mode={mode}/>
        <About></About>
      </div>
    </>
  );
}

export default App;
