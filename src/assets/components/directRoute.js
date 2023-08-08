import { useEffect, useState, useRef } from 'react';
import {data} from '../data/london-ug-data';
import TRoutes from './transitRoutes';
import DirectJourneyCost from './directCost';
import DirectJourneyTime from './directTime';
import FigureDirect from './directFigure';



function CheckRoutes(props){
    let states = useRef(false);
    const{aIndex, bIndex} = props;
    console.log(aIndex);
    const [hasDirect, setHasDirect] = useState(states)
    
    let aLines = [];
    let bLines = [];
    let intersection = [];
          
    // Get lines connected to destA and destB and get the intersection
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

    // check if there is a direct route (an intersection of connected lines) 
    useEffect (()=>{        
        if(intersection.length > 0){
            setHasDirect(true);               
        } else {
            setHasDirect(false);
        }
    }, [intersection.length]);    

    console.log(hasDirect);

    // writing direct route into a list

    const list = intersection.map((item, index) => { 
        return (
            <>
            <div className="dRouteList">
                {/* color is added by a className (which is equal to line name) */}
                <div key={index} className= {item}>{index+ 1}. '{item}' line</div>
                <FigureDirect line = {item}/>                
            </div>
            </>          
        )
    })  
         
    return(
        <div>
            <p className='drAvailability'>
                { hasDirect === true ? 'Available direct routes:'
                :
                'No direct routes!'
                }
            </p>
            <p style={{fontSize: '17px'}}>
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
            
        </ div>
    )

}
export default CheckRoutes;