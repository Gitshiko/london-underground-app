function FigureDirect(props){
    const{line} = props;
    console.log(line);
    console.log(typeof(line));

    return(
        <>
        <div className="figure">
            <div id="destAFigure"></div>
            <div className= {
                line === 'Hammersmith & City' ? "pink"
                :
                line === 'Circle' ? "yellow" 
                :
                line === 'District' ? "green"
                :
                line === 'Piccadilly' ? "blue"
                :
                line === 'Metropolitan' ? "indigo"
                :
                line === 'Northern' ? "black"
                :
                line === 'Bakerloo' ? "brown"
                :
                line === 'Jubilee' ? "grey"
                :
                line === 'Central' ? "red"
                :
                line === 'Waterloo & City' ? "lightblue"
                :
                line === 'Victoria' ? "skyblue"
                :
                "purple"
                }                          
                  id="lineFigure"></div>
            <div id="destBFigure"></div>
        </div>
        </>
    )


}
export default FigureDirect;