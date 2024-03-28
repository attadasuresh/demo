import './App.css';
import axios from 'axios'
import React,{useEffect,useState} from 'react';


function App() {

  const[dbdata,setdbdata] = useState([]);

  useEffect(()=>{
    axios.get(`http://74.208.28.169:5000/user`)
    .then(res=>setdbdata(res.data))
     .catch(err=>console.log(err))
  })

  return (
    <div>
<ul>
  {dbdata.map(eachdata=>{
    return <li>
      <p>
        {eachdata.name}
      </p>
    </li>
  })}
</ul>

    </div>
  );
}

export default App;
