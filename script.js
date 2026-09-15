const chart = document.getElementById("average");

new Chart(chart, {

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
            label: "Electricity Used",
            data: [75, 72, 68, 66, 66, 65, 62],

            backgroundColor: "#80e7c1",
            borderRadius: 10,
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