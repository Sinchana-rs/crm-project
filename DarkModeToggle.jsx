import { useState,useEffect } from "react"
import { FaMoon,FaSun } from "react-icons/fa"

function DarkModeToggle(){

const [dark,setDark]=useState(false)

useEffect(()=>{
if(dark){
document.documentElement.classList.add("dark")
}else{
document.documentElement.classList.remove("dark")
}
},[dark])

return(

<button
onClick={()=>setDark(!dark)}
className="p-2 bg-gray-200 dark:bg-gray-700 rounded">

{dark ? <FaSun/> : <FaMoon/>}

</button>

)

}

export default DarkModeToggle