import { useEffect, useState } from "react";


function Posts(){
    let [pos, setPos] = useState([]);

    useEffect(()=>{
   
     async function postsdata(){
        try{
        let postref = await fetch('https://jsonplaceholder.typicode.com/posts');
        let postJosndata = await postref.json();
        setPos(postJosndata)
        // console.log(postJosndata);
     } catch(err){
        console.log(err);
      }
      }
      postsdata()
    },[]);
    return <div>
        <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {
                  pos.map((e,i)=>{
                    return(
                        <tr>
                            <td>{e.userId}</td>
                            <td>{e.title}</td>
                            <td>{e.body}</td>
                        </tr>
                    )
                  })  
                }
            </tbody>
        </table>
    </div>
}
export default Posts