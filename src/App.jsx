
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

const Page_num= 1;
function App() {

  

 
  const [state, setState]= useState([])
  const [page, setPage]= useState(Page_num);

useEffect(()=>{
  getdata()
},[page])

// useEffect(()=>{
//   console.log(state)
// },[state])

const getdata = ()=>{
  axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=1000`).then((res)=>{
    setState(res.data.data);
   // console.log(res.data.data)
 //   console.log(state)
  })
}
//console.log(state[0].data)

const scrolltoend=()=>{
  setPage(page+1)
}



window.onscroll= function (){

  if(window.innerHeight+document.documentElement.scrollTop
    === document.documentElement.offsetHeight){

      scrolltoend()
    }
}

  return (
    <div className="App">
      
      {
        state.length>0 && state.map((e,i)=>
        <div key={i} >
          <h3>Id:{e._id} </h3>
          <h3>Name:{e.name}</h3>
          <h3>Trips:{e.trips}</h3>
        </div>
        )
      }
    </div>
  );
}

export default App;
