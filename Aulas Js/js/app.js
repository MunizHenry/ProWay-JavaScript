// alert("Olá Javascript")
// function exibirAlerta(valor){
//     alert(valor)
// }

// exibirAlerta("Este é um alerta feito por função")

// let exibirAlerta = function (valor){
//     alert(valor)
// }

// exibirAlerta("exibir mensagem função de expressão")

// let exibirAlerta = (valor) => {
//     alert(valor)
// }
// exibirAlerta("exibir mensagem função de expressão")

// var f = document.forms[0];
// f.addEventListener("submit", function (e) {
//     alert(f.a.value)
//     return false;
// })

// f.addEventListener("keyup", function (e) {
//     f.a.value = f.a.value.toUpperCase();
// })

// var professor = "henry"

// var estrutura2 = `
// <table>
//     <tr>
//         <td>${professor}</td>
//         <td>Manu\`s</td>
//         <td></td>
//     </tr>
// </table>
// `;

// alert(`Meu nome é ${professor} e tenho 37 anos`)

// let post = {
//     title: 'Título do valor',
//     except: 'Excessão do valor',
//     body: 'Corpo do valor',
//     tags: [
//         'Primeira linha',
//         'Segunda linha',
//         'Terceira linha'
//     ]
// }

// let { title, except, body, tags } = post;
// var postHTML = `<artitle>
// <header>

// <\header>
// <section>
//     <div>${except}</div>
//     <div>${body}</div>
//     </section>
//     <footer>
//         <ul>${tags.map(tag => `<li> ${tag}</li>`).join('\n')}</ul>
//     </footer>`;

// var div = document.querySelector('div');
// div.innerHTML = postHTML





//  operador de atribuição
// var nome = "Henry";
// nome += " Muniz"
// var nome2 ="Henry "

// v1 = 0;
// v2 = 30;

// alert (nome == nome2) --> compara se tem valores iguais 
// alert(v1 > v2) // verifica se v1 é maior que v2
// alert (v1 < v2)  // verifica se v1 é menor
// alert (v1 >= v2) // verifica se v1 é maior ou igual
// alert (v1 <= v2) // verifica se v1 é menor ou igual


//if e else

// if(v1 > v2){
//     alert ('verdadeiro')
// }else{
//     alert('false')
// }

// var destino = "Navegantes"
// // switch para fazer multiplas verificações  
// switch (destino) {
//     case "Navegantes": // valor de comparação
//         alert('o voo vai para Navegantes');
//         break;
//     case "São Paulo": // valor de comparação
//         alert("o voo vai paa sp");
//         break;
//     case "Curitiba": // valor de comparação
//         alert("o voo vai para Curitiba");
//         break;
//     default:
//         alert("selecionar um destino");
//         break;
// }

// for (let index = 0; index <= 100; index++) {
//     console.log (index)
// }

//inverso de 100 a 0
// for (let index = 100; index >= 0; index--) {
//     console.log (index)
// }

// var listaClientes = [
//     "José",
//     "João",
//     "Maria",
//     "Jonas"
// ];

// for ( clientes in listaClientes){
//     console.log (clientes) //clientes recebe o index (posição do objeto)
// }

// console.log (listaClientes[2]);

//imprime a lista de clientes 
// for ( clientes in listaClientes){
//     console.log (listaClientes [clientes]) //
// }

// for ( clientes in listaClientes){
//        console.log ( `${clientes} => ${listaClientes [clientes]}`) 
//      } //imprimindo clientes junto com a posição 

//laço condicional enquanto for verdadeira ele ainda continua repetindo
// var inc = 0
// while (inc < 10) {
//     console.log (inc);
//     inc++;
// }

// var inc = 0;
// do {
//     console.log (inc);
//     inc++;
// }while(inc < 10)

// for (let i = 0; i < listaClientes.length; i++) {
//     console.log(listaClientes[i])

// }




//iniciando jquery
$(function () {
    var estados = {
        '12': 'Acre',
        '27': 'Alagoas',
        '16': 'Amapá',
        '13': 'Amazonas',
        '29': 'Bahia',
        '23': 'Ceará',
        '53': 'Distrito Federal',
        '32': 'Espírito Santo',
        '52': 'Goías',
        '21': 'Maranhão',
        '51': 'Mato Grosso',
        '50': 'Mato Grosso do Sul',
        '31': 'Minas Gerais',
        '15': 'Pará',
        '25': 'Paraíba',
        '41': 'Paraná',
        '26': 'Pernambuco',
        '22': 'Piauí',
        '33': 'Rio de Janeiro',
        '24': 'Rio Grande do Norte',
        '43': 'Rio Grande do Sul',
        '11': 'Rondônia',
        '14': 'Roraíma',
        '42': 'Santa Catarina',
        '35': 'São Paulo',
        '28': 'Sergipe',
        '17': 'Tocantins'
    }

    let options = `<option value="">Selecione um estado</option>`

    for (index in estados) {
        options += `<option value="${index}">${estados[index]}</option>`;
    }

    $('select[name="estados"]').html(options);

    
    $('.estados').change(function () {
        let estado = $(this).val();
        $(this).addClass('estadosDoBrasil');
        console.log(estado);
    })
})
