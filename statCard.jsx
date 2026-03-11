function StatCard({title,value,icon}){

return(

<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

<div className="flex justify-between">

<div>
<p className="text-gray-500">{title}</p>
<h2 className="text-2xl font-bold">{value}</h2>
</div>

<div className="text-2xl">
{icon}
</div>

</div>

</div>

)

}

export default StatCard