$(function () {//iniciando do escopo jquary

    function consultaNoticias() {
        $.ajax({
            url: 'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=7aa66c89ccf6457a88087c3fd6df6e23',
            method: 'GET',
            daType: 'JSON',
            success: function (data) {
                let estruturaNoticias ='';
                let noticias = data.articles;
                for (index in data.articles) {
                     estruturaNoticias += `
                    <div class="col s10 m6">
                                    <div class="card">
                                        <div class="card-image">
                                            <img
                                                src="${noticias[index].urlToImage}">
                                            </div>
                                            <div class="card-content">
                                            <span class="card-title">${noticias[index].title}</span>
                                            <p>${noticias[index].content}</p>
                                        </div>
                                        <div class="card-action">
                                            <a href="${noticias[index].url}" target="_blank">LER NOTICIA</a>
                                        </div>
                                    </div>
                                </div>
                    `;
               

                }

                //renderizar conteudos
                $('#carregaNoticias').html(estruturaNoticias)

            }

        })
    }

    consultaNoticias();

}) //final do escopo jquary

