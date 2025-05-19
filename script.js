function calcularAltura(t) {
    return -5 * t * t + 10 * t + 2;
  }
  
  const tValores = [];
  const hValores = [];
  
  for (let t = 0; t <= 2.5; t += 0.1) {
    tValores.push(t.toFixed(1));
    hValores.push(calcularAltura(t).toFixed(2));
  }
  
  const ctx = document.getElementById('graficoParabola').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: tValores,
      datasets: [{
        label: 'Altura (m)',
        data: hValores,
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.1)',
        tension: 0.4,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tempo (s)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Altura (m)'
          },
          min: 0
        }
      }
    }
  });

  
  let chart;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('funcaoForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('entradaFuncao').value;
    const match = input.replace(/\s+/g, '').match(/^([-+]?\d*\.?\d*)x\^2([-+]\d*\.?\d*)x([-+]\d*\.?\d*)$/);

    if (!match) {
      alert("Digite a função no formato: ax^2 + bx + c (ex: -2x^2+4x+1)");
      return;
    }

    const a = parseFloat(match[1] || '1');
    const b = parseFloat(match[2] || '0');
    const c = parseFloat(match[3] || '0');

    const xVals = [];
    const yVals = [];

    for (let x = -10; x <= 10; x += 0.1) {
      xVals.push(x.toFixed(1));
      const y = a * x * x + b * x + c;
      yVals.push(y.toFixed(2));
    }

    if (chart) chart.destroy();

    const ctx = document.getElementById('graficoParabolas').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xVals,
        datasets: [{
          label: `f(x) = ${a}x² + ${b}x + ${c}`,
          data: yVals,
          borderColor: '#00796b',
          backgroundColor: 'rgba(0,121,107,0.1)',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: { display: true, text: 'x' }
          },
          y: {
            title: { display: true, text: 'f(x)' }
          }
        }
      }
    });
  });
});
