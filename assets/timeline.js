
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


var chart3 = c3.generate({
  bindto: '#chart3',
  data: {
    columns: [
      ['data', 91.4]
    ],
    type: 'gauge',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
  },
  gauge: {
    //        label: {
    //            format: function(value, ratio) {
    //                return value;
    //            },
    //            show: false // to turn off the min/max labels.
    //        },
    //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
    //    max: 100, // 100 is default
    //    units: ' %',
    //    width: 39 // for adjusting arc thickness
  },
  color: {
    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
    threshold: {
      //            unit: 'value', // percentage is default
      //            max: 200, // 100 is default
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 180
  }
});


var chart4 = c3.generate({
  bindto:'#chart4',
  data: {
    xs: {
      customer: 'customer_x',
    },
    // iris data from R
    columns: [
      ["customer_x", 1.0, 1.0, 1.0, 3.0, 3.0, 4.0, 3, 3, 2, 3, 3, 3, 3, 3, 4, 4, 5, 2, 5, 2, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 6, 5, 1, 1, 1, 1, 1, 1, 3.0, 4, 1, 1, 1,3,3,3,3,5,5,5,6,6],
      ["customer", 0.21, 0.22, 0.23, 0.41, 0.43, 0.54, 0.35, 0.36, 0.27, 0.38, 0.32, 0.22, 0.42, 0.52, 0.6, 0.43, 0.43, 0.33, 0.33, 0.39, 0.28, 0.47, 0.2, 0.5, 0.2, 0.8, 0.7, 0.2, 0.26, 0.25, 0.2, 0.4, 0.1, 0.2, 0.24, 0.23, 0.2, 0.1, 0.26, 0.2, 0.3, 0.17, 0.2, 0.14, 0.16, 0.33, 0.54, 0.11, 0.12, 0.13,0.5,0.49,0.48,0.47,0.7,0.69,0.77,0.79,0.77],
    ],
    type: 'scatter'
  },
  axis: {
    x: {
      label: '# Photos Taken',
      tick: {
        fit: false
      }
    },
    y: {
      label: 'Relative time stayed'
    }
  }
});
