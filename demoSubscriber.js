// let Chart;
const fullData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  values: [50, 100, 150, 200, 250, 300]
};
// const ctx = document.getElementById('myChart').getContext('2d');
// let chart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: fullData.labels,
//     datasets: [{
//       label: 'Subscribers',
//       data: fullData.values,
//       borderColor: 'blue',
//       borderWidth: 2,
//       fill: false
//     }]
//   }
// });

document.getElementById('monthFilter').addEventListener('change', function() {
  const value = this.value;
  let labels = [], data = [];

  if (value === 'q1') {
    labels = fullData.labels.slice(0, 3);
    data = fullData.values.slice(0, 3);
  } else if (value === 'q2') {
    labels = fullData.labels.slice(3, 6);
    data = fullData.values.slice(3, 6);
  } else {
    labels = fullData.labels;
    data = fullData.values;
  }
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
});

let count = 0;

function simulateSubscriber() {
  count++;
  document.getElementById('count').innerText = count;

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const type = ["Daily", "Weekly", "Monthly"][Math.floor(Math.random() * 3)];

  const table = document.getElementById('subscriberTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = count;
  newRow.insertCell(1).innerText = date;
  newRow.insertCell(2).innerText = time;
  newRow.insertCell(3).innerText = type;
}

let growthChart=1;
const ct = document.getElementById('growthChart').getContext('2d');
  new Chart(ct, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
      datasets: [{
        label: 'Subscribers',
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: 'rgba(0,123,255,0.2)',
        borderColor: 'rgba(0,123,255,1)',
        borderWidth: 2
      }]
    }
  });