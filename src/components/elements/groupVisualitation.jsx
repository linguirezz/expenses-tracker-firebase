import Chart from '../chart'
import AvgExpenses from '../avgExpenses'
import TopExpenses from '../topExpenses'
function GroupVisualitation(){
    return(
        <div className="flex flex-col  justify-between m-auto w-fit h-full  z-3">
         <TopExpenses/>
         <Chart />
         <AvgExpenses/>
      </div>
    )
}
export default GroupVisualitation