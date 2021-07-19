
$(document).ready(function () {

    //Llamado a API de feriados nacionales del 2020
    $.ajax({
        type: "get",
        url: "https://www.feriadosapp.com/api/holidays.json",
        dataType: "json",

        success: function (datosFeriado) {

            //Si es exitoso, se crea una fila para cada feriado encontrado en el arreglo de los feriados
            // Cada feriado es un objeto
            let cuerpoTabla = "";

            datosFeriado.data.forEach(function(item){
                let filaTabla = "<tr>";
                console.log(item);
                
                let fecha = item.date.split("-");
                const mes = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dec"]

                filaTabla += `  <td>${parseInt(fecha[2])} de ${mes[parseInt(fecha[1]) - 1]} de ${fecha[0]} </td>`;
                filaTabla += `  <td>${item.title}</td>`;
                filaTabla += `  <td>${item.extra}</td>`;
                filaTabla += `  <td>${item.law}</td>`;

                console.log(1, item.date, item.title, item.extra, item.law);
                console.log(2, filaTabla);

                filaTabla += "</tr>";

                cuerpoTabla += filaTabla;
            });

            $("#tablaFeriados").html(cuerpoTabla)

        }
    });


});