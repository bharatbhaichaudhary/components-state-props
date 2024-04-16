import React from "react";
import './tabel.css'

function Tabeldata(){
    return(
       <div className="tabel-data">
         <table className="border">
            <thead className="t-head">
                    <tr>
                        <th> Sr. </th>
                        <th>Name</th>
                        <th>Id</th>
                        <th>Pass</th>
                    </tr>
            </thead>
            <tbody t-body>
                <tr className="border">
                    <td> 1</td>
                    <td>bharat</td>
                    <td>123</td>
                    <td>abcd</td>
                </tr>
                <tr>
                    <td> 1</td>
                    <td>bharat</td>
                    <td>123</td>
                    <td>abcd</td>
                </tr>
                <tr>
                    <td> 1</td>
                    <td>bharat</td>
                    <td>123</td>
                    <td>abcd</td>
                </tr>
                <tr>
                    <td> 1</td>
                    <td>bharat</td>
                    <td>123</td>
                    <td>abcd</td>
                </tr>
                <tr>
                    <td> 1</td>
                    <td>bharat</td>
                    <td>123</td>
                    <td>abcd</td>
                </tr>
            </tbody>
         </table>
       </div>
    )
}

export default Tabeldata