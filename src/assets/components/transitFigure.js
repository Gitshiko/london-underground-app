function FigureTransit(props){
    const{firstLine, secondLine} = props;
    // console.log(firstLine);
    // console.log(secondLine);
    // console.log(typeof(firstLine));
    // console.log(typeof(secondLine));

    return(
        <>
        <div className="figureTransit">
            <div id="destAFigure"></div>
            <div className= {
                firstLine === 'Hammersmith & City' ? "pink"
                :
                firstLine === 'Circle' ? "yellow" 
                :
                firstLine === 'District' ? "green"
                :
                firstLine === 'Piccadilly' ? "blue"
                :
                firstLine === 'Metropolitan' ? "indigo"
                :
                firstLine === 'Northern' ? "black"
                :
                firstLine === 'Bakerloo' ? "brown"
                :
                firstLine === 'Jubilee' ? "grey"
                :
                firstLine === 'Central' ? "red"
                :
                firstLine === 'Waterloo & City' ? "lightblue"
                :
                firstLine === 'Victoria' ? "skyblue"
                :
                "purple"
                }                          
                  id="lineFigure"></div>
            <div id="destBFigure"></div>
            <div className= {
                secondLine === 'Hammersmith & City' ? "pink"
                :
                secondLine === 'Circle' ? "yellow" 
                :
                secondLine === 'District' ? "green"
                :
                secondLine === 'Piccadilly' ? "blue"
                :
                secondLine === 'Metropolitan' ? "indigo"
                :
                secondLine === 'Northern' ? "black"
                :
                secondLine === 'Bakerloo' ? "brown"
                :
                secondLine === 'Jubilee' ? "grey"
                :
                secondLine === 'Central' ? "red"
                :
                secondLine === 'Waterloo & City' ? "lightblue"
                :
                secondLine === 'Victoria' ? "skyblue"
                :
                "purple"
                }                          
                  id="lineFigure"></div>
            <div id="destTFigure"></div>
        </div>
        </>
    )


}
export default FigureTransit;