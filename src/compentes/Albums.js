import {useState, useEffect} from 'react'

function Albums(){
    let [albu, setAlb]= useState([]);

    useEffect(()=>{
     async function albumsapi(){
      try{
        let albref = await fetch('https://jsonplaceholder.typicode.com/albums');
        let albdata = await albref.json()
        setAlb(albdata)
        console.log(albdata);
      }
      catch(err){
        console.log(err);
      }
     }
     albumsapi()
    },[])

    return <div>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {
                    albu.map((l,i)=>{
                       return (
                        <tr>
                        <td>{l.userId}</td>
                        <td>{l.id}</td>
                        <td>{l.title}</td>
                    </tr>
                       )
                    })
                }
            </tbody>
        </table>
    </div>
}
export default Albums