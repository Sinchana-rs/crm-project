import { useEffect, useState } from "react"
import axios from "axios"

function Pipeline(){

const [leads,setLeads] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/leads")
.then(res=>{
setLeads(res.data)
})

},[])

const getLeads = (status)=>{
return leads.filter((lead)=>lead.status === status)
}

const Column = ({title,status}) => (

<div className="bg-gray-100 rounded-lg p-4 min-h-[400px] shadow">

<h2 className="font-bold text-lg mb-4 text-center">{title}</h2>

{getLeads(status).length === 0 ? (

<p className="text-gray-400 text-center text-sm">No Leads</p>

):( 

getLeads(status).map((lead)=>(

<div
key={lead.id}
className="bg-white p-3 mb-3 rounded shadow hover:shadow-lg transition"
>

<p className="font-semibold">{lead.name}</p>
<p className="text-sm text-gray-600">{lead.phone}</p>

</div>

))

)}

</div>

)

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-8">Sales Pipeline</h1>

<div className="grid grid-cols-1 md:grid-cols-5 gap-6">

<Column title="New" status="New"/>
<Column title="Contacted" status="Contacted"/>
<Column title="Visit Scheduled" status="Visit"/>
<Column title="Won" status="Won"/>
<Column title="Lost" status="Lost"/>

</div>

</div>

)

}

export default Pipeline