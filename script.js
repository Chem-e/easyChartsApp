 function userInputs() {
    
const xInputs=document.querySelectorAll(".xAxis input");
const xValues=[];
const yInputs=document.querySelectorAll(".yAxis input");
const yValues=[];

	xInputs.forEach(function(item){
    xValues.push(item.value);
})
	yInputs.forEach(function(item){
    yValues.push(item.value);
})
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: yValues,
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: xValues,
        }]
    },

    // Configuration options go here
    options: {}
});
}