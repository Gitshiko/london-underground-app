import {data} from '../data/london-ug-data'
import { useEffect, useState} from 'react';

function TransitJourneyTime(props){
    
    const {iDestA, iDestB, iTransit} = props;
    const [timeLeg1, setTimeLeg1] = useState(4);
    const [timeLeg2, setTimeLeg2] = useState(4);    

    console.log(typeof(iDestA));
    console.log(iDestB);
    console.log(iTransit);

    let zoneA;
    let zoneB;  
    let zoneT;

    if (iDestA !== -1 && iDestB !== -1 && iTransit !== -1) {    
        zoneA = data[0].stations[iDestA].zones.zone;
        zoneB = data[0].stations[iDestB].zones.zone;
        zoneT = data[0].stations[iTransit].zones.zone;
    }

    console.log('zoneA', zoneA);
    console.log('zoneB', zoneB); 
    console.log('zoneT', zoneT); 
    
    useEffect(() => {                    
        if (zoneA !== zoneT) {
            let newTime = 4 + 3*(Math.abs(zoneT - zoneA));
            setTimeLeg1(newTime);
        }    
    }, [zoneA, zoneT]);

    useEffect(() => {                    
        if (zoneB !== zoneT) {
            let newTime = 4 + 3*(Math.abs(zoneT - zoneB));
            setTimeLeg2(newTime);
        }    
    }, [zoneB, zoneT]);
     
    // console.log(time);    

    return(
        <>
        <p style={{fontSize: '20px'}}>
            Total journey time is {timeLeg1 + timeLeg2} minutes.
        </p>                  
        </>
    )
}

export default TransitJourneyTime;