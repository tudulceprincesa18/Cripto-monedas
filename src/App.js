import {React , useEffect, useState } from "react";
import axios from 'axios';
import Table from "./components/table/table";


function App() {
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
  }, [])


  if(isLoading)return <>  cargando... </>

  return (
    <div className="container">
      <div className="row">
      <h1 className=" row justify-content-center m-4"> Precio de las cripto monedas </h1>
      <Table coins={data}/>
      </div>
    </div> 
  );
}

export default App;
