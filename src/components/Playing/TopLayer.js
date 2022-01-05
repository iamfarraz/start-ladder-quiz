import './TopLayer.css'
import React, { useState, useEffect } from 'react';

function TopLayer(props) {
    const {updateTotalTime,index,taskArray,timeOn}=props
    const [sec, setsec] = useState(0);
    
    useEffect(() => {
        console.log("use Effect")
        let interval = null;
        if (timeOn) {
            interval = setInterval(() => {
                setsec(sec + 1)
            }, 1000)
        }
        else { console.log("set time is offf") }

        return () => {
            clearInterval(interval);
            updateTotalTime(sec);
        }
    }, [sec])
   return (
       <div className='TopLayer'>
           <div className='topic_box'>
               <div className='topic'>Topic</div>
               <div className='topic_name'>
                   {!taskArray[index]
                       ? "Loading"
                       : taskArray[index].category
                   }
               </div>
           </div>
           <div className='time_box'>
               <div className='minute'>
                   <div className='value'>{("0" + Math.floor(sec / 60)).slice(-2)}</div>
                   <div className='unit'>MIN</div>
               </div>
               <div className='divider'>:</div>
               <div className='second'>
                   <div className='value'>{("0" + sec % 60).slice(-2)}</div>
                   <div className='unit'>SEC</div>
               </div>
           </div>

       </div>
   ); 

};
export default TopLayer;
