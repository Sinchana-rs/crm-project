import { Bar } from "react-chartjs-2"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Legend)

function Analytics(){

const data={
labels:["New","Contacted","Converted"],
datasets:[
{
label:"Leads",
data:[14,7,1],
backgroundColor:"#f97316"
}
]
}

return(

<div>

<h1 className="text-3xl font-bold mb-6">Analytics</h1>

<div className="bg-white p-6 rounded shadow w-[600px]">

<Bar data={data}/>

</div>

</div>

)

}

export default Analytics