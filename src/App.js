import {useState} from 'react';
import records from './componet/records'
import Receipt from './componet/receipt'
import './App.css';

function App() {

  const [receipts, setReceipts] = useState(records)

  const info = receipts.map((rect,index) => {
    return(
     <Receipt 
     recpt = {rect}

     key={index}
     />
    )
  })

  return (
    <div>
       <h1>Hello</h1>


    <div className="App">
      

     {info}

    </div>
    </div>
  );
}

export default App;
