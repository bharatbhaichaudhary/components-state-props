import { useState,useEffect } from "react"

function Tablerow(props){
    let [data, setdata]= useState({})

    useEffect(()=>{
       setdata(props.data)
    },[props])
    return(
        <tr>
            <td>
                {data.id}
            </td>
            <td>{data.name}</td>
            <td>{data.website}</td>
        </tr>
    )
}




export default Tablerow