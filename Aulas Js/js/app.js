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

var f = document.forms[0];
f.addEventListener("submit", function (e) {
    alert(f.a.value)
    return false;
})

f.addEventListener("keyup", function (e) {
    f.a.value = f.a.value.toUpperCase();
})

var professor = "henry"

var estrutura2 = `
<table>
    <tr>
        <td>${professor}</td>
        <td>Manu\`s</td>
        <td></td>
    </tr>
</table>
`;

alert(`Meu nome é ${professor} e tenho 37 anos`)

let post = {
    title: 'Título do valor',
    except: 'Excessão do valor',
    body: 'Corpo do valor',
    tags: [
        'Primeira linha',
        'Segunda linha',
        'Terceira linha'
    ]
}

let { title, except, body, tags } = post;
var postHTML = `<artitle>
<header>

<\header>
<section>
    <div>${except}</div>
    <div>${body}</div>
    </section>
    <footer>
        <ul>${tags.map(tag => `<li> ${tag}</li>`).join('\n')}</ul>
    </footer>`;

var div = document.querySelector('div');
div.innerHTML = postHTML