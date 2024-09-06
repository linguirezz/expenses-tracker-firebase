function Expenses ({title,amount,date}){
    console.log(date)
    return(<div className="w-full">
        {/* list child */}
        <div className="w-full h-14 border border-t-0 border-x-0 flex items-center justify-between">
        <div className="flex h-full p-2 b">
            <div className="w-10 h-10 border mr-2"></div>
            <div className="flex flex-col ">
                <span className="">{title}</span>
                <span className="text-sm capitalize text-slate-500">{date}</span>
            </div>
        </div>
        <div className="flex  w-[40%] justify-evenly items-center ">
            <div className="text-sm mr-3 text-red-700">Rp {amount}</div>
            <div className="hover:cursor-pointer">:</div>
        </div>
    </div>
    </div>
        
    )
}
export default Expenses