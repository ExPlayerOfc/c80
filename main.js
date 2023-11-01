var array_nome_dos_colegas= [];

function enviar() {
    var mostrar_colegas_array= [];
    
    for(var q=1; q<= 4; q++) {
    var nome_dos_colegas=document.getElementById("nome"+q).value;
    console.log(nome_dos_colegas);
    array_nome_dos_colegas.push(nome_dos_colegas);
    }
    console.log(array_nome_dos_colegas);
    var comprimento_array_colegas= array_nome_dos_colegas.length;
    console.log(comprimento_array_colegas);

    for(var v=0; v<= comprimento_array_colegas; v++) {
    mostrar_colegas_array.push("<h4> Nome: " + array_nome_dos_colegas [v] + "</h4>");
    console.log(mostrar_colegas_array);
    }
    console.log(mostrar_colegas_array);
    document.getElementById("mostrar_com_virgula").innerHTML= mostrar_colegas_array;

    var remover_virgulas=mostrar_colegas_array.join(" ");
    console.log(remover_virgulas);
    document.getElementById("mostrar_sem_virgula").innerHTML= remover_virgulas;

    document.getElementById("botao_enviar").style.display="none";
    document.getElementById("botao_organizar").style.display="inline-block";
}

function organizar() {
    array_nome_dos_colegas.sort();
    console.log(array_nome_dos_colegas);

    var organizar_array_colega=[];

    var comprimento_array_colegas=nome_dos_colegas.length;
    console.log(comprimento_array_colegas);

    for(var v=0; v<= comprimento_array_colegas; v++) {
        mostrar_colegas_array.push("<h4> Nome: " + array_nome_dos_colegas [v] + "</h4>");
        console.log(organizar_array_colega);
        }

        var remover_virgulas=organizar_array_colega.join(" ");
        console.log(remover_virgulas);
        document.getElementById("mostrar_sem_virgula").innerHTML= remover_virgulas;
} 