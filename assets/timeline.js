
var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: []
  }
  // axis: {
  //   x: {
  //     type: 'timeseries',
  //     tick: {
  //       format: '%Y-%m-%d'
  //     }
  //   }
  // }
});

var chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    columns: [],
    type: 'bar'
  }
  // axis: {
  //   x: {
  //     type: 'timeseries',
  //     tick: {
  //       format: '%Y-%m-%d'
  //     }
  //   }
  // }
});
