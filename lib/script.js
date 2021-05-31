window.onload = function () {
    let comDataStr = '000000000000013554576454474450000000000000000000000000000000000101001010001010000000000000000000000000000000000000000000000000';
//TODO получить в comDataStr данные из COM порта;

    let comData = comDataStr.split('');

    let arrLabels = [];
    let comDataBgColor = [];

    let comDataFiltered = comData.filter(function (elem){
        if(elem > 0) return true;
    })

// Задаем цвет точкам на графике
    for(let i = 0; i <= comData.length; i++) {
        arrLabels[i] = i;
        comDataBgColor[i] = 'yellow';

        if(Number(comData[i]) === Number(Math.max.apply(Math, comData))){
            comDataBgColor[i] = 'red';
        }
        if(Number(comData[i]) === Number(Math.min.apply(Math, comDataFiltered))){
            comDataBgColor[i] = 'green';
        }

        if(Number(comData[i]) === 0) {
            comDataBgColor[i] = 'grey';
        }

    }

// Создание графика chart.js
    const comChart = document.getElementById('comChart');
    new Chart(comChart, {
        type: 'line',
        data: {
            labels: arrLabels,
            datasets: [
                {
                    data: comData,
                    backgroundColor: comDataBgColor,
                    borderColor: [
                        'gray',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
                x: {
                    display: false,
                }
            },
            responsive: true,
            layout: {
                padding: 40,
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
        },
    });
}