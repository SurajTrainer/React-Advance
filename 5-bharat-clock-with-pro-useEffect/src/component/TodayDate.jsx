import { useEffect } from "react";
import { useState } from "react";


function TodayDate() {

   const [time, setTime] =  useState(new Date())

   useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        },1000)
        return () => {
            clearInterval(intervalId)
        }
   },[])

    return (
        <div className="">
  <p className="lead">This is the current Day - {time.toLocaleDateString()}, Time - {time.toLocaleTimeString()}</p>
 
</div>
    )
}

export default TodayDate;