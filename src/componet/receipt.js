import {useState} from 'react';

function Receipt (prop){
  let food = prop.recpt
 let payment = food.paid

  const [satisfied, setSatified] = useState(payment)

  function checkPayment(){
    setSatified((bill)=>(bill == true ? "satisfied" : "notSatisfied"))
  }

return(

    <div className='containerOfReceipt'>
    
      <div className="btn">
        <button className="payCheck" onClick={checkPayment}>check for payment</button>
        </div>
      <div>
           <div> <h2>{food.person}</h2> </div>
            <div><h5>Main: {food.order.main}</h5></div>
            <div> <h5>Protein: {food.order.protein}</h5></div>
            <div><h5>Rice: {food.order.rice}</h5></div>
            <div><h5>Sauce: {food.order.sauce}</h5></div>
            <div><h5>Drink: {food.order.drink}</h5></div>
            <div><h5>Cost: {food.order.cost}</h5></div>
          
        </div>    
      
    <h3>{satisfied}</h3>

    </div>
)

}

export default Receipt