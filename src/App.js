import {React , useEffect, useState } from "react";
import axios from 'axios';
import Table from "./components/table/table";
import Loader from "./components/Loader/Loader";




function App() {

  const [search, setSearch] = useState("");
  
  const [isLoading, setisLoading] = useState(false)

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      setisLoading(true)

      const request = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1")
      setData(request.data)
      setisLoading(false)

    } catch (error) {
      alert("ocurrio un error al recuperar los datos")
    }

  } 
  
  useEffect( () => {
    getData()
  }, [''])


  if(isLoading)return <>  cargando... <Loader/> </>

  return (
    <div className="container">
      <div className="row">
      <h1 className=" row justify-content-center m-4"> Cripto currencies price </h1>
      <input type='text' placeholder='Search a coin' className='form-control bg-ligth border-0 m-3 text-center'
      onChange={ e => setSearch(e.target.value)} />
      <Table coins={data} search={search}/>
      </div>
    </div> 
  );
}

export default App;
