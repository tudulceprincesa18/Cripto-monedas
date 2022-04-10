import React from "react";


function Table({coins}) {
    return (
        <table className="table">
            <thead>
                <tr> 
                    <td> Image </td>
                    <td> Name </td>
                    <td> Price change 24 hours </td>
                    <td> Circulating supply </td>
                    <td> Ath change percentage </td>
                </tr>
            </thead>
            <tbody>
                {coins.map(coin => (
                    <tr key={coin.id}>
                        <td>
                            <img src={coin.image} style={{width: "50px", height:"50px"}}/>
                        </td>
                        <td>
                            {coin.name}
                        </td>
                        <td>
                            {coin.price_change_24h}
                        </td>
                        <td>
                            {coin.circulating_supply}
                        </td>
                        <td>
                            {coin.ath_change_percentage}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
  }
  
  export default Table;