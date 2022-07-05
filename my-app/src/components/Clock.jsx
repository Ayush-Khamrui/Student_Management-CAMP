
import React, { useEffect, useState } from 'react'
import { Number } from './Number'
import { Word } from './Word';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; 

export const Clock = ({h24=true}) => {                  {/*VARIABLE DECLARED */}

    const [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day   , setDay   ] = useState(0);
    const [pm    , setPm    ] = useState(false);

    useEffect(()=> {                      {/*USED TO CHANGE THE VALUES OF VARIABLE*/}

        const update = () => {                  {/*FUNCTION BEING USED TO GET LIVE TIME AND UPDATE IN VARIABLES */}
            const date = new Date();
            let hour = date.getHours();
            if(!h24) {
                hour = (hour % 12) || 12;
            }
            setHour(hour);
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());
            setPm(date.getHours() >= 12);
        }

        update();

        const interval = setInterval(()=> {            {/*THIS CALLS THE UPDATE FUNCTION EVERY 1 second*/}
            update();
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    return (
        <div className='clock'>
            <div className='calendar'>
                {
                    days.map((value, index)=>(<Word key={value} value={value} hidden={index != day}/>))
                }
            </div>
            <div className='row'>
                <div className='hour'>
                    <Number value={hour}/>
                    <Word value={':'} />
                    <Number value={minute}/>
                    <Word value={':'} />
                    <Number value={second}/>
                </div>
                <div className='ampm'>
                    <Word value={'AM'} hidden={ pm} />
                    <Word value={'PM'} hidden={!pm} />
                </div>
            </div>
        </div>
    )
    
}
