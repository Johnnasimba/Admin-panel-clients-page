import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/header/header.component';
import ClientsList from './components/clients-list/client-list.component';
import ClientProfile from './components/client-profile/client-profile.component';
import Footer from  './components/footer/footer.component';

const App = () => {
  const [client, setClient] = useState([]);

  const getData=()=>{

    fetch('http://localhost:5000/client'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setClient([myJson])
      });
     
  }
  useEffect(()=>{
    getData()
    
  },[])
  client.map((item) => {
    return console.log(item[0].results[0].picture)
  })
 

  return (
    <div className="admin-panel-client-page">
      <Header />
      <div className="client-container">
            <ClientsList client={client}/>
            <ClientProfile client={client} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
