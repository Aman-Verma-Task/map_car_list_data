import React, { useState, useEffect ,useGlobalContext} from 'react';
import moment from 'moment';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const carlist=[
  {
      id: 1,
      make: "Mitsubishi",
      model: "Lancer",
      type: "Used"
      },
      { id: 2, make: "Honda", model: "Vezel", type: "New" },
      { id: 3, make: "Honda", model: "Civic", type: "Used" },
      { id: 4, make: "Audi", model: "A3", type: "New"},
      { id: 5, make: "Audi", model: "A4", type: "Used" },
      { id: 6, make: "Audi", model: "A7", type: "New" },
      { id: 7, make: "BMW", model: "i8", type:"Used"}
  ]
 
 const PRICE_LIST = [
    { id: 1, price: 1000 },
    { id: 2, price: 2000 },
    { id: 3, price: 3000 },
    { id: 4, price: 4000 },
    { id: 5, price: 5000 },
    { id: 6, price: 6000 },
    { id: 7, price: 7000 }
    ];

  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered= carlist.filter((car) => {
    const terms = search.toLowerCase().split(' ');
    return terms.every((term) =>
      `${car.make} ${car.model}`.toLowerCase().includes(term)
    );
  });
  
  return (
    <>
      <div onChange={handleChange} >
      <div style={{paddingLeft:'20px'}}>
      <h1 style={{marginLeft:'700px'}}>{currentTime.format('h:mm:ss A')}</h1>
    </div>
   <div style={{paddingLeft:'30px',paddingTop:'50px'}}>
    <input style={{marginRight:'0'}} type='text' placeholder='search here' id='myinput'/>
   </div>

    <div style={{paddingTop:'30px', paddingLeft:'20px',width:'700px'}}>

    <Table striped bordered hover style={{width:'100vw'}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model </th>
          <th>Type</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody> 
        {
        filtered.map((value,index)=>{
          
  let temp = PRICE_LIST.find(element=> element.id === value.id)
  if(temp.PRICE_LIST) {
    value.PRICE_LIST = temp.PRICE_LIST;}
      return(
        <tr id='myUL'>
          <td>{value.id}</td> 
          <td>{value.make}</td>
          <td>{value.model}</td>
          <td>{value.type}</td>
          <td>{temp.price}</td>
        </tr>
        )
      })}
         
      </tbody>
    </Table>
    </div>
      </div>
    </>
  );
}

export default App;