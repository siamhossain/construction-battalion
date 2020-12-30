
        
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'This week',
            backgroundImage: 'gradient( 90deg, rgb(255,255,255) 0%, rgb(174,167,239) 53%, rgb(93,78,222) 91%)',
            borderColor: 'rgb(93, 78, 222)',
            data: [0, 10, 5, 2, 20, 30, 15]
        },
        {
            label: 'Last week',
            backgroundImage: 'gradient( 90deg, rgb(255,255,255) 0%, rgb(174,167,239) 53%, rgb(93,78,222) 91%)',
            borderColor: '#ffd477',
            data: [0, 10, 5, 2, 20, 30, 15]
        }]
    },

    // Configuration options go here
    options: {
        events: ['click']
    }
});

  
  