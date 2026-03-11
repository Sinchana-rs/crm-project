import { useState,useEffect } from "react"
import axios from "axios"

function Messages(){

const [messages,setMessages]=useState([])
const [message,setMessage]=useState("")

useEffect(()=>{
fetchMessages()
},[])

function fetchMessages(){
axios.get("http://localhost:5000/messages")
.then(res=>setMessages(res.data))
}

function sendMessage(){

axios.post("http://localhost:5000/messages",{
lead_id:1,
message
}).then(()=>{
fetchMessages()
setMessage("")
})

}

return(

<div>

<h1 className="text-3xl font-bold">Messages</h1>

<input
placeholder="Type message..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="border p-2 rounded mt-4"
/>

<button
onClick={sendMessage}
className="bg-orange-500 text-white px-4 py-2 ml-3 rounded">

Send

</button>

<ul className="mt-6">

{messages.map(msg=>(
<li key={msg.id}>{msg.message}</li>
))}

</ul>

</div>

)

}

export default Messages