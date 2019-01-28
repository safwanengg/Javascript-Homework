// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach((Aliensightings) => {
    var row = tbody.append("tr");
    Object.entries(Aliensightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Date Input

var FilterTable1 = d3.select("#filter-btn1");

FilterTable1.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");

// Get the value property of the input element
  var inputValue1 = inputElement1.property("value");

  console.log(inputValue1);
  
  var filteredData1 = tableData.filter(sighting => sighting.datetime === inputValue1);

  console.log(filteredData1);
}); 

// City Input 

var FilterTable2 = d3.select("#filter-btn2");  
FilterTable2.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement2 = d3.select("#city");

// Get the value property of the input element
  var inputValue2 = inputElement2.property("value");

  console.log(inputValue2);
 
  var filteredData2 = tableData.filter(sighting => sighting.city === inputValue2);

  console.log(filteredData2);
});     

// State Input 

var FilterTable3 = d3.select("#filter-btn3");  
FilterTable3.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement3 = d3.select("#state");

// Get the value property of the input element
  var inputValue3 = inputElement3.property("value");

  console.log(inputValue3);
 
  var filteredData3 = tableData.filter(sighting => sighting.state === inputValue3);

  console.log(filteredData3);
});     

// Country Input 

var FilterTable4 = d3.select("#filter-btn4");  
FilterTable4.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement4 = d3.select("#country");

// Get the value property of the input element
  var inputValue4 = inputElement4.property("value");

  console.log(inputValue4);
 
  var filteredData4 = tableData.filter(sighting => sighting.country === inputValue4);

  console.log(filteredData4);
});     

// Shape Input 

var FilterTable5 = d3.select("#filter-btn5");  
FilterTable5.on("click", function() {
  
    // Prevent the page from refreshing
  d3.event.preventDefault();

// Select the input element and get the raw HTML node
  var inputElement5 = d3.select("#shape");

// Get the value property of the input element
  var inputValue5 = inputElement5.property("value");

  console.log(inputValue5);
 
  var filteredData5 = tableData.filter(sighting => sighting.shape === inputValue5);

  console.log(filteredData5);
});     