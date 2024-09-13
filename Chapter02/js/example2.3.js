//initialize function called when script loads
function initialize(){
    cities();
};

//Me practicing the code for using one array of objects instead of two arrays.
var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior'
        population: 27244
    }
];
/*trying single array method

//function to create a table with cities and their populations
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create an HTML table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

end of trying single array method */
/*
These items here are using javascript language to write html language that creates the header row AND populates it with the string 
at the end of the .innerHTML method.  It writes that string to the innerHTML element! Which is a thing, perhaps a node.
*/

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.querySelector("#mydiv");
    mydiv.appendChild(table);
};

window.onload = initialize();