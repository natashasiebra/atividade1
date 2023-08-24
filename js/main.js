var nome = window.document.getElementById('nome')
var botao = window.document.getElementById('botao')
botao.addEventListener('click',clicar_botao)



function clicar_botao(){
    var elemento_bisavo = document.getElementById('container');
    var elemento_avo = document.createElement('table');
    var elemento_pai = document.createElement('tr');
    var elemento_filho = document.createElement('th');
    var elemento_filho2 = document.createElement('th');
    var botao_apaga = document.createElement('input');
    var texto = document.createTextNode(nome.value);

    elemento_avo.setAttribute("id","avo");
    botao_apaga.setAttribute("type","button");
    botao_apaga.setAttribute("value","Apagar");
    botao_apaga.setAttribute("id","apagar");
    botao_apaga.setAttribute("onclick","click");


    function click(){
        document.getELementById('avo').style.display="none";
        document.getElementById('avo').style.display="hidden";

    }
    elemento_filho.appendChild(texto);
    elemento_filho2.appendChild(botao_apaga);
    elemento_bisavo.appendChild(elemento_avo);
    elemento_avo.appendChild(elemento_pai);
    elemento_pai.appendChild(elemento_filho);
    elemento_pai.appendChild(elemento_filho2);
}