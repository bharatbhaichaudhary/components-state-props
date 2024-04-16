import { useState, useEffect } from "react";
import Tablerow from './Tablerow'

function Apitabel() {
  let [a, aset] = useState([]);

  useEffect(() => {
    async function datafetch() {
     try{
        let ref = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await ref.json();
        aset(data)
     }
     catch(err){
        console.log(err);
     }
    }
    datafetch()
  }, []);

  return <div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <td>website</td>
            </tr>
        </thead>
        <tbody>
            {
                a.map((e,i)=>{
                    return(
                   <Tablerow data={e}/>
                    )
                })
            }
        </tbody>
    </table>
  </div>;
}

export default Apitabel;
