import { FaBell } from "react-icons/fa"
import DarkModeToggle from "./DarkModeToggle"

function Header(){

return(

<div className="flex justify-between items-center mb-6">

<input
placeholder="Search..."
className="border p-2 rounded w-64"
/>

<div className="flex items-center gap-4">

<FaBell className="text-xl"/>
<DarkModeToggle/>

</div>

</div>

)

}

export default Header