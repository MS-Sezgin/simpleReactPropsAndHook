import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';


//App componentinden search componentine props ile 2 tane method yolluyorum.
//Bu methodlardan birisi Resident componentine gidecek veriyi diğeri Error companentine gidecek veriyi, App componentte set ediyorlar.
//Sonrasında alt componentlere bu verileri yolluyorum



function App() {

  //------------------Search comptan gelen veriyi tutan variable-------------------\\
  const [item, setİtem] = useState([[]]);
  const setState = (param) => {setİtem(param);}

  //------------------Search comptan gelen hata mesajını tutan variable-------------------\\
  const [errMessage,setErrMessage]=useState("")
  const errMessageFunc=(param)=>{setErrMessage(param);}

  //------------------timeout-------------------\\
  setTimeout(() => {setErrMessage(" ")}, 5000);

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setState={setState} errMessageFunc={errMessageFunc}/>
        <Error errMessage={errMessage}/>
        <ResidentsList item={item}/>
      </div>
    </div>
  );
}

export default App;
