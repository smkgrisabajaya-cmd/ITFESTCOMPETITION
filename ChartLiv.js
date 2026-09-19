const chartLiv = document.getElementById("chart-Liv");

new Chart(chartLiv, {

    type: "bar",

    data: {
        labels: [
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
            "Minggu"
        ],

        datasets: [{
            label: "Living Room-Electricity Used",
            data: [75, 72, 68, 66, 66, 65, 62],

            backgroundColor: "#80e7c1",
            borderRadius: 5,
            color:"white",
            borderColor: "#80e7c1"
        }]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        scales: {

            x: {
            },

            y: {
                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                }
            }

        },

        plugins: {

            tooltip: {
                callbacks: {

                    label: function(context) {
                        return context.dataset.label + ": " + context.raw + "%";
                    }

                }
            }

        }

    }

});