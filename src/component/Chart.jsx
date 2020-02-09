import React from 'react';
import {Pie} from 'react-chartjs-2';

 class Chart extends React.Component {

      constructor(props) {
        super(props);
       this.state = {
          labels: ['January', 'February', 'March',
                   'April', 'May'],
          datasets: [
            {
              label: 'Rainfall',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data: [90, 59, 80, 81, 56]
            }
          ]
        }
     };
  render() {
    return (
      <div>
        <Pie
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

    </div>
    )
        }
    }
export default Chart;