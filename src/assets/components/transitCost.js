import {data} from '../data/london-ug-data'
import { useEffect, useState} from 'react';

function TransitJourneyCost(props){
    
    const {iDestA, iDestB} = props;
    const [cost, setCost] = useState(4.23);

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

    // cost calculation logic    
    useEffect(() => {                    
        if (zoneA < zoneB) {
            let newCost = 4.23 + 0.15*(zoneB - zoneA);
            setCost(newCost.toFixed(2));
        } else if (zoneA > zoneB) {
            let newCost = 4.23 + 0.17*(zoneA - zoneB);
            setCost(newCost.toFixed(2));
        }      
    }, [zoneA, zoneB]);

     
    console.log(cost);
    

    return(
        <>
            <p className = 'cost'>
                Cost: £{cost}
            </p>                 
        </>
    )
}

export default TransitJourneyCost;