import {data} from '../data/london-ug-data'
import { useEffect, useState} from 'react';

function DirectJourneyTime(props){
    
    const {iDestA, iDestB} = props;
    const [time, setTime] = useState(4);

    console.log(typeof(iDestA));
    console.log(iDestB);

    let zoneA;
    let zoneB;  

    if (iDestA !== -1 && iDestB !== -1) {    
        zoneA = data[0].stations[iDestA].zones.zone;
        zoneB = data[0].stations[iDestB].zones.zone;
    }

    console.log('zoneA', zoneA);
    console.log('zoneB', zoneB); 
    
    useEffect(() => {                    
        if (zoneA !== zoneB) {
            let newTime = 4 + 3*(Math.abs(zoneB - zoneA));
            setTime(newTime);
        }    
    }, [zoneA, zoneB]);
     
    console.log(time);    

    return(
        <>
            <p style={{fontSize: '20px'}}>
                Total journey time is {time} minutes.
            </p>                 
        </>
    )
}

export default DirectJourneyTime;