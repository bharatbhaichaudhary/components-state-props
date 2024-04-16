import {useState,useEffect} from "react";
import './comments.css'


function Commentdata(){

let [comment, setcomment] = useState([]);

useEffect(()=>{
    try{
        async function commentapidata(){
            let comref = await fetch('https://jsonplaceholder.typicode.com/comments')
            let comdata = await comref.json()
            setcomment(comdata)
        }
        commentapidata()
    }
    catch(err){
        console.log(err);
    }
},[])

return <div className="comme">
    <table>
        <thead>
            <tr>
                <th>post id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {
              comment.map((e,i)=>{
                return(
                    <tr>
                        <td>{e.postId}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.body}</td>
                    </tr>
                )
              })  
            }
        </tbody>
    </table>
</div>
}

export default Commentdata