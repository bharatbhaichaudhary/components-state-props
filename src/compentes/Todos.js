import { useState,useEffect } from "react";


function Todos(){
    let [todo, settodo] = useState([]);

    useEffect(()=>{
        async function todoapi(){
          try{
            let todoRef = await fetch('https://jsonplaceholder.typicode.com/todos');
            let todojosn = await todoRef.json()
            settodo(todojosn)
            // console.log(todojosn);
          }catch(err){
            console.log(err);
          }
        }
        todoapi()
    },[])
    return <div>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {
                   todo.map((e,i)=>{
                    return(
                        <tr>
                            <td>{e.userId}</td>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.completed}</td>
                        </tr>
                    )
                   }) 
                }
            </tbody>
        </table>
    </div>
}

export default Todos