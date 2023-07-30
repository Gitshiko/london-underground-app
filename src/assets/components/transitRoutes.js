//import { useEffect, useState, useRef } from 'react';
import {data} from '../data/london-ug-data';
import TransitJourneyCost from './transitCost';
import FigureTransit from './transitFigure';
import TransitJourneyTime from './transitTime';

function TRoutes(props) {
    const destALines = props.destALines;
    const destBLines = props.destBLines;
    const {iDestA, iDestB} = props;   
        
    // console.log(destALines);
    // console.log(destBLines);
    // console.log(iDestA);
    // console.log(iDestB);
    
    // const [hasConnections, setHasConnections] = useState(false)         

    const mystations = [];
    for(let x = 0; x < data[0].stations.length; x++) {
        mystations.push(data[0].stations[x].Placemark.name)
    }
    // console.log(mystations);

    //find stations connected to A
    const aConnections = []; 
   
    for (let i = 0; i < data[0].stations.length; i++ ) {
        let common = destALines.filter(
            element => {
                return data[0].stations[i].servingLines.servingLine.includes(element);
            }
        );

        if (common.length > 0) {
            aConnections.push(data[0].stations[i].Placemark.name); 
        }
    }

    console.log(destALines);    
    // console.log(aConnections)

    //find stations connected to B 
    
    const bConnections = [];

    for (let i = 0; i < data[0].stations.length; i++ ) {
        let common = destBLines.filter(
            element => {
                return data[0].stations[i].servingLines.servingLine.includes(element);
            }
        );

        if (common.length > 0) {
            bConnections.push(data[0].stations[i].Placemark.name); 
        }

    }

    console.log(destBLines);
    // console.log(bConnections)

    let transitPoints = [];  

    transitPoints = aConnections.filter(
        element => {
            return bConnections.includes(element);
        }

    )

    console.log(transitPoints.length);   
   
    // obtain connecting lines to transit station      
     
    const transitIndex = mystations.indexOf(transitPoints[0])
    console.log(transitIndex);

    let transitLines = [];
    
    if (transitIndex !== -1 ) {
        transitLines = data[0].stations[transitIndex].servingLines.servingLine;
    } 

    console.log(transitLines);

   // determine connecting line between dest A and transit station
    let firstLeg = destALines.filter(
        element => {
            return transitLines.includes(element);
        }
    );
    console.log(firstLeg);  


    // determine connecting line between dest B and transit station
    let secondLeg = destBLines.filter(
        element => {
            return transitLines.includes(element);
        }
    );
    console.log(secondLeg); 

    return(
        <>        
            <div className='transit'>                  
                { 
                    transitPoints.length === 0 ? "Your journey has more than one transit stations. Click here for details."
                    :
                    <>
                        <div className='transit-list'>             
                            <div className= 'list'><span className = {firstLeg[0]}><b>'{firstLeg[0]}' line  --></b></span> Transit via <b>'{transitPoints[0]}'</b><span className={secondLeg[0]}><b>--> '{secondLeg[0]}' line </b></span></div>
                        </div> 
                        <FigureTransit firstLine = {firstLeg[0]} secondLine = {secondLeg[0]}/>                       
                    </>
                }                
            </div>                           
            { 
                transitPoints.length === 0 ? <TransitJourneyCost iDestA = {iDestA} iDestB = {iDestB}/>
                : 
                <>
                    <TransitJourneyCost iDestA = {iDestA} iDestB = {iDestB}/>                                           
                    <TransitJourneyTime iDestA = {iDestA} iDestB = {iDestB} iTransit = {transitIndex}/>
                </>
                    
            }     
        </>
    )

}

export default TRoutes;