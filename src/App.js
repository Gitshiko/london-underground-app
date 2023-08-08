import './App.css';
import {data} from './assets/data/london-ug-data'
import {useState} from 'react';
import CheckRoutes from './assets/components/directRoute'

//console.log(data[0].stations[1].Placemark.name)
// console.log(data[0].stations[1].servingLines)
// console.log(data[0].stations[1].zones)
// console.log(data[0].stations.length)


//creating mystations array that has all the stations
const mystations = [];
for(let x = 0; x < data[0].stations.length; x++) {
  mystations.push(data[0].stations[x].Placemark.name)
}

//console.log(mystations)

function App() {
  const [myDestinationA, setMyDestinationA] = useState('');
  const [myDestinationB, setMyDestinationB] = useState('');

  // let states = useRef().current;

  // Switching on and off the displaying of destination lists starts here

  //listA shown by onClick 'Select' in 'From'
  const [showLiA, setShowLiA] = useState(false);
  
  function setShowListA(){
    setMyDestinationA('');
    setShowLiA(true);
    setShowSelectedA(true);  
  };

  //list B shown by onClick 'Select' in 'To'
  const [showLiB, setShowLiB] = useState(false);
  
  function setShowListB(){
    setMyDestinationB('');
    setShowLiB(true);
    setShowSelectedB(true);      
  };

  //Hide listA/listB and show modal content with 'Submit' button onClick 
  const [showModal, setShowModal] =useState(false);

  let lists = document.querySelectorAll('.destAB');

  function setShowListAB(){
    setShowLiA(false);
    setShowLiB(false);
    setShowModal(true);    
    lists.forEach((listItem) => {
      listItem.classList.add('no-click')
    })
  };

  //Hide selected A and B with 'Reset' button onClick 
  const [showSelectedA, setShowSelectedA] = useState(false);
  console.log(showSelectedA);
  

  const [showSelectedB, setShowSelectedB] = useState(false);
  console.log(showSelectedB);

  function resetAB(){
    lists.forEach((listItem)=>{
      if( listItem.classList.contains('no-click')){
        listItem.classList.remove('no-click')
      }
    })
    setShowSelectedA(false);
    setShowSelectedB(false);
    setShowLiA(false);
    setShowLiB(false);
    setShowModal(false);
    setMyDestinationA('');
    setMyDestinationB('');

    // states = false;   
  };

  //selecting dest A from the list @ onclick
  function selectDestinationA(e){
    console.log(e.target.innerHTML);
    setMyDestinationA(e.target.innerHTML);   
    console.log(myDestinationA);   
  };

  //selecting dest B from the list @ onclick
  function selectDestinationB(e){
    console.log(e.target.innerHTML);
    setMyDestinationB(e.target.innerHTML);
    console.log(myDestinationB);   
  };

  //creating the list of destinationsA from the stations array
  const destinationListA = mystations.map((station, index) => 
    { return (
        <li key={index} onClick={(e) => selectDestinationA(e)}>{station}</li>
    )
    }
  );

  // console.log(myDestinationA);

  //creating the list of destinationsB from the stations array
  const destinationListB = mystations.map((station, index) => 
    { return (
      <li key={index} onClick={(e) => selectDestinationB(e)}>{station}</li>
    )
    }
  ); 

  const destAIndex = mystations.indexOf(myDestinationA);
  const destBIndex = mystations.indexOf(myDestinationB);

  console.log(destAIndex);
  console.log(destBIndex);

  return (
    <div className="app-container">

      <div className="app-header">
        <div className="icon"><img src="images/lug.jpg" alt="London Underground Logo" /></div>
        <h1>London Underground Navigator</h1>             
      </div>

      <main className='mainContent'>
        <div className='permanentContent'>
          <div className="from">
            <h3>FROM</h3>
            <div className="destinationA">
              <p className="destAB" onClick={setShowListA}>{showSelectedA ? myDestinationA : 'CLICK HERE TO SELECT' }</p>
              <ul className="destLists" style={{display: showLiA ? 'block' : 'none'}}>
              {destinationListA}
              </ul>
            </div>          
          </div>

          <div className="to">
            <h3>TO</h3>
            <div className="destinationB">             
              <p className="destAB" onClick={setShowListB}>{showSelectedB ? myDestinationB : 'CLICK HERE TO SELECT' }</p>
              <ul className="destLists" style={{display: showLiB ? 'block' : 'none'}}>
              {destinationListB}
              </ul>
            </div>
          </div>

          <div className="buttons">
            {/* submit button  */}
            <div className='submitButton'>
              {/* <button className={showLiA && showLiB ? '' : 'no-click'}onClick={setShowListAB}>SUBMIT</button> */}
              <button className={myDestinationA === '' || myDestinationB === '' ? 'no-click' : ''} onClick={setShowListAB}>SUBMIT</button>
            </div>
            {/* reset button */}
            <div className='submitButton'>
              <button onClick={resetAB}>RESET</button>
            </div>
          </div>
        </div>

        <div className='modalContent' style={{visibility: showModal ? 'visible' : 'hidden'}}>
          <div id='modal'>
            <CheckRoutes aIndex={destAIndex} bIndex={destBIndex}/>
          </div>                     
        </div>

      </main>
    </div>
  );
}

export default App;
