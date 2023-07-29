import { useEffect, useState, useRef } from 'react';
//import {data} from '../data/codeshack-output';
import {data} from '../data/london-ug-data';
import TRoutes from './transitRoutes';
import DirectJourneyCost from './directCost';
import DirectJourneyTime from './directTime';



function CheckRoutes(props){
    let states = useRef(false);
    const{aIndex, bIndex} = props;
    console.log(aIndex);
    const [hasDirect, setHasDirect] = useState(states)
    
    let aLines = [];
    let bLines = [];
    let intersection = [];
          
    if (aIndex !== -1 && bIndex !== -1){
        //console.log(data[0].stations[aIndex].servingLines.servingLine.length);
        aLines = data[0].stations[aIndex].servingLines.servingLine;
        console.log(aLines);
        console.log(aLines.length)

        bLines = data[0].stations[bIndex].servingLines.servingLine;
        console.log(bLines);
        console.log(bLines.length)

        intersection = aLines.filter(
            element => {
            return bLines.includes(element);
            }
        );

    }

    console.log(intersection);

    useEffect (()=>{        
        if(intersection.length > 0){
            setHasDirect(true);               
        } else {
            setHasDirect(false);
        }
    }, [intersection.length]);
    

    console.log(hasDirect);

    const list = intersection.map((item, index) => { 
        return (
          <div key={index} className= 'dRouteList'>{index+ 1}. '{item}' line</div>
        )
    })
           

    return(
        <>
            <p className='drAvailability'>
                { hasDirect === true ? 'You have following options of direct routes.'
                :
                'Direct routes are not available for your journey.'
                }
            </p>
            <p style={{fontSize: '20px', padding: '0.5rem'}}>
                { hasDirect === true ? list
                :                
                'Please use the following transit route.'
                }
            </p>
            <p>
                {hasDirect === true ? <DirectJourneyCost iDestA = {aIndex} iDestB = {bIndex}/>
                :
                <TRoutes destALines = {aLines} destBLines = {bLines} iDestA = {aIndex} iDestB = {bIndex}/>
                }
            </p>
            <p>
                {hasDirect === true ? <DirectJourneyTime iDestA = {aIndex} iDestB = {bIndex}/>
                :
                ""
                }
            </p>
            
        </>
    )

}
export default CheckRoutes;