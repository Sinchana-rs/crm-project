import { useState,useEffect } from "react"
import axios from "axios"

function Inventory(){

const [inventory,setInventory]=useState([])
const [name,setName]=useState("")
const [location,setLocation]=useState("")
const [price,setPrice]=useState("")

useEffect(()=>{
fetchInventory()
},[])

function fetchInventory(){

axios.get("http://localhost:5000/inventory")
.then(res=>setInventory(res.data))
.catch(err=>console.log(err))

}

function addInventory(){

if(name==="" || location==="" || price===""){
alert("Please fill all fields")
return
}

axios.post("http://localhost:5000/inventory",{
property_name:name,
location,
price,
owner_id:1
}).then(()=>{
fetchInventory()
setName("")
setLocation("")
setPrice("")
})

}

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Inventory</h1>

{/* Add Property Form */}

<div className="flex gap-3 mb-6">

<input
placeholder="Property"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 rounded w-52"
/>

<input
placeholder="Location"
value={location}
onChange={(e)=>setLocation(e.target.value)}
className="border p-2 rounded w-52"
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="border p-2 rounded w-40"
/>

<button
onClick={addInventory}
className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
>

Add Property

</button>

</div>

{/* Inventory Table */}

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/3">Property</th>
<th className="p-3 text-left w-1/3">Location</th>
<th className="p-3 text-left w-1/3">Price</th>

</tr>

</thead>

<tbody>

{inventory.map(item=>(

<tr key={item.id} className="border-t hover:bg-gray-50">

<td className="p-3">{item.property_name}</td>
<td className="p-3">{item.location}</td>
<td className="p-3">{item.price}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Inventory