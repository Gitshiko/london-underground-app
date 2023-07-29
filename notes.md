app-container
    header
        logo - App.js
        h1 - App.js

    main - App.js
        permanent-content - App.js
            from - child1.js
                h2(From)
                fromContent
                    destination1(p)
                    dropdown1(could be type to search or both) - child2.js
            to - child1.js
                h2(To)
                toContent
                    destination2(p)
                    dropdown2(could be type to search or both) - child2.js

            Submit/Search button - child1.js


        search-output (a modal from display: block/none or js modal)
            first-level(div)
                direct route available (div>p) keep-hidden
                    direct route line is/ lines are: (p)
                        link1                            
                        link2                            
                        link3                            
                direct route not available (div>p) keep-hidden  
                    There are indirect routes 
                        details(link) 
            second-level
                    station1 cicle1 line cicle2 station2 
                    station1 cicle1 line cicle-mid connecting-station
                    connecting-station cicle-mid line cicle2  station2 



                    
