console.log ('Começou')

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=1f2b4c523d49548c3ac1d97f81b36aea&language=pt-BR')
   .then(res => res.json ())
   .then(data => {
        console.log ('Imprimindo filmes')
        let str = ''
        for (let i = 0; i < data.results.length; i++) {
            let filme = data.results[i]
            str += `<div class="card col-md-4 m-2" style="width: 18rem;" id="card">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                </div>
                </div>`
        }
        document.getElementById('tela').innerHTML = str

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = data.results.filter(filme => filme.title.toLowerCase().includes(searchTerm));
    let filteredStr = '';

    for (let i = 0; i < filteredResults.length; i++) {
        let filme = filteredResults[i];
        filteredStr += `<div class="card col-md-4 m-2" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${filme.title}</h5>
                <p class="card-text">${filme.overview}</p>
                <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
            </div>
            </div>`;
    }

    document.getElementById('tela').innerHTML = filteredStr;
});
   })
   
console.log ('Terminou')

