let res = document.getElementById("res");                        // gets the div where the results will appear
        let count = 0;                                                   // sets the counter to 0 initially  
        let button1 = document.getElementById("count");                  // gets the button "click"
        let button2 = document.getElementById("rest");                   // gets the button "reset"
        function Clicked() {
            count++;        // adds 1 to the counter after every click
            res.innerHTML = `<p>${count}</p>`;    // updates the counter with the current count 
            };
        function Reset() {
            count = 0;    // sets counter to 0
            res.innerHTML = `<p>${count}</p>`;    // updates the counter
        };