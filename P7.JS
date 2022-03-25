let blockMeilleurFilm = document.getElementById("meilleur-film")
let imageMeilleurFilm = blockMeilleurFilm.getElementsByClassName("mask-image1")[0]
let bouttonLireMeilleurFilm = blockMeilleurFilm.getElementsByClassName("lire")[0]
let bouttoninfoMeilleurFilm = blockMeilleurFilm.getElementsByClassName("plus-d-info")[0]

/* Initialisations carrousel meilleur film */

let fenettre_modale = document.getElementById('modale_meilleur_film')
let meilleurCarrousel = document.getElementById("meilleur-carrousel")
var meilleurFilmCarrousel = 0
let lesMeilleursFilms = []

/* Initialisations carrousel film action */

let blockFilmAction = document.getElementById("carrousel-categorie1")
let imagefilmAction = blockFilmAction.getElementsByClassName("image-carrousel")
var lesFilmsactionsCompteur = 0
let lesFilmActions = []

/* Initialisations carrousel film history */

let blockFilmHistory = document.getElementById("carrousel-categorie2")
let imagefilmHistory = blockFilmHistory.getElementsByClassName("image-carrousel")
var lesFilmsHistoryCompteur = 0
let lesFilmHistory = []

/* Initialisations carrousel film fantasy */

let blockFilmFantasy = document.getElementById("carrousel-categorie3")
let imagefilmFantasy = blockFilmFantasy.getElementsByClassName("image-carrousel")
var lesFilmsFantasyCompteur = 0
let lesFilmFantasy = []

let fermerModale = document.getElementById("fermer_modale")



function raffraichirCarrousel()
    {
     let imgMeilleurCarrousel = meilleurCarrousel.getElementsByClassName("image-carrousel")
    for(i = 0 ; i < imgMeilleurCarrousel.length ; i ++){
        imgMeilleurCarrousel[i].src = lesMeilleursFilms [i + meilleurFilmCarrousel].image_url
        let url = lesMeilleursFilms[i + meilleurFilmCarrousel].url
        imgMeilleurCarrousel[i].onclick = function(){
       
            detailCarrousel(url)
      
            


            
            
        }
    }}


function raffraichirCarrouselAction()
    {

    for(i = 0 ; i < imagefilmAction.length ; i ++){
        imagefilmAction[i].src = lesFilmActions [i + lesFilmsactionsCompteur].image_url
        let url = lesFilmActions[i + lesFilmsactionsCompteur].url
        imagefilmAction[i].onclick = function(){
       
            detailCarrousel(url)
      
            


            
            
        }
    }}


function raffraichirCarrouselHistory()
    {

    for(i = 0 ; i < imagefilmHistory.length ; i ++){
        imagefilmHistory[i].src = lesFilmHistory[i + lesFilmsHistoryCompteur].image_url
        let url = lesFilmHistory[i + lesFilmsHistoryCompteur].url
        imagefilmHistory[i].onclick = function(){
       
            detailCarrousel(url)
      
            


            
            
        }
    }}


function raffraichirCarrouselFantasy()
    {

    for(i = 0 ; i < imagefilmFantasy.length ; i ++){
        imagefilmFantasy[i].src = lesFilmFantasy[i + lesFilmsFantasyCompteur].image_url
        let url = lesFilmFantasy[i + lesFilmsFantasyCompteur].url
        imagefilmFantasy[i].onclick = function(){
       
            detailCarrousel(url)
      
            


            
            
        }
    }}


/* Button next et prev meilleur film*/

buttonNextCarrousel = meilleurCarrousel.getElementsByClassName("next swiper-button")[0]
buttonNextCarrousel.onclick = function()
    { meilleurFilmCarrousel ++

    // RAJOUTE 1 A L'INDEX MEILLEUR FILM CARROUSEL
        if (meilleurFilmCarrousel > 10 ) {meilleurFilmCarrousel = 0}
        raffraichirCarrousel()
        

    }

buttonPrevCarrousel = meilleurCarrousel.getElementsByClassName("prev swiper-button")[0]
buttonPrevCarrousel.onclick = function()
    { meilleurFilmCarrousel --
        if (meilleurFilmCarrousel < 0 ) {meilleurFilmCarrousel = 10}
        raffraichirCarrousel()
        

    }


/* prev next film actions */
buttonNextCarrousel = blockFilmAction.getElementsByClassName("next swiper-button")[0]
buttonNextCarrousel.onclick = function()
    { lesFilmsactionsCompteur ++
    
    // RAJOUTE 1 A L'INDEX MEILLEUR FILM CARROUSEL
        if (lesFilmsactionsCompteur > 10 ) {lesFilmsactionsCompteur = 0}
        raffraichirCarrouselAction()
        }

        
buttonPrevCarrousel = blockFilmAction.getElementsByClassName("prev swiper-button")[0]
buttonPrevCarrousel.onclick = function()
    { lesFilmsactionsCompteur --
        if (lesFilmsactionsCompteur < 0 ) {lesFilmsactionsCompteur = 10}
        raffraichirCarrouselAction()
            
    
        }


/* prev next film historique */
buttonNextCarrousel = blockFilmHistory.getElementsByClassName("next swiper-button")[0]
buttonNextCarrousel.onclick = function()
    { lesFilmsHistoryCompteur ++
    
    // RAJOUTE 1 A L'INDEX MEILLEUR FILM CARROUSEL
        if (lesFilmsHistoryCompteur > 10 ) {lesFilmsHistoryCompteur = 0}
        raffraichirCarrouselHistory()
        }

        
buttonPrevCarrousel = blockFilmHistory.getElementsByClassName("prev swiper-button")[0]
buttonPrevCarrousel.onclick = function()
    { lesFilmsHistoryCompteur --
        if (lesFilmsHistoryCompteur < 0 ) {lesFilmsHistoryCompteur = 10}
        raffraichirCarrouselHistory()
            
    
        }

/* prev next film fantasy */
buttonNextCarrousel = blockFilmFantasy.getElementsByClassName("next swiper-button")[0]
buttonNextCarrousel.onclick = function()
    { lesFilmsFantasyCompteur ++
    
    // RAJOUTE 1 A L'INDEX MEILLEUR FILM CARROUSEL
        if (lesFilmsFantasyCompteur > 10 ) {lesFilmsFantasyCompteur = 0}
        raffraichirCarrouselFantasy()
        }

        
buttonPrevCarrousel = blockFilmFantasy.getElementsByClassName("prev swiper-button")[0]
buttonPrevCarrousel.onclick = function()
    { lesFilmsFantasyCompteur --
        if (lesFilmsFantasyCompteur < 0 ) {lesFilmsFantasyCompteur = 10}
        raffraichirCarrouselFantasy()
            
    
        }



function detailCarrousel(url) {

        
        fetch(url)
        .then(reponse => {
            return(reponse.json())
        }).then(
            json =>{
                console.log(json)
              
                fenettre_modale.getElementsByTagName('span')[0].innerText = 'Titre : ' + json.title
                fenettre_modale.getElementsByTagName('span')[1].innerText = 'Genre : ' + json.genres
                fenettre_modale.getElementsByTagName('span')[2].innerText = 'Date : ' + json.year
                fenettre_modale.getElementsByTagName('span')[3].innerText = 'Rang : ' + json.imdb_score
                fenettre_modale.getElementsByTagName('span')[4].innerText = 'Score: ' + json.votes
                fenettre_modale.getElementsByTagName('span')[5].innerText = 'Réalisateur : ' + json.directors
                fenettre_modale.getElementsByTagName('span')[6].innerText = 'Acteur : ' + json.actors[0]
               
                document.getElementById('image-meilleur-film').src = json.image_url
                fenettre_modale.style.display = "flex";
            }
        )
    

   
        
    }
    fermerModale.onclick = function() {
        document.getElementsByClassName("modale")[0].style.display = "none";
    }




//imageMeilleurFilm.src = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page_size=15")
.then(reponse => {
    
    return(reponse.json())
}

)

.then(json => {
    console.log(json.results[0].image_url)
    imageMeilleurFilm.src = json.results[0].image_url
    bouttonLireMeilleurFilm.onclick = function() {
        detailCarrousel (json.results[0].url)
    }
    
    bouttoninfoMeilleurFilm.onclick = function(){
        detailCarrousel (json.results[0].url)


    }
    return(json.results)
})



.then(results => { console.log(results)
    lesMeilleursFilms = []
    results.forEach( element => {
 
        lesMeilleursFilms.push(element)
    }
        
    );
    raffraichirCarrousel()
})

// film d'action carrousel

fetch("http://localhost:8000/api/v1/titles/?genres=Action&page_size=15")
.then(reponse => {
    
    return(reponse.json())
}

)

.then(json => {


    
    return(json.results)
})



.then(results => { console.log(results)
    lesFilmActions = []
    results.forEach( element => {
 
        lesFilmActions.push(element)
    }
        
    );
    raffraichirCarrouselAction()
})



// film historique carrousel

fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=History&page_size=15&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
.then(reponse => {
    
    return(reponse.json())
}

)

.then(json => {


    
    return(json.results)
})



.then(results => { console.log(results)
    lesFilmHistory = []
    results.forEach( element => {
 
        lesFilmHistory.push(element)
    }
        
    );
    raffraichirCarrouselHistory()
})

// film Fantasy carrousel

fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Fantasy&page_size=15&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=")
.then(reponse => {
    
    return(reponse.json())
}

)

.then(json => {


    
    return(json.results)
})



.then(results => { console.log(results)
    lesFilmFantasy = []
    results.forEach( element => {
 
        lesFilmFantasy.push(element)
    }
        
    );
    raffraichirCarrouselFantasy()
})




console.log("Reponse en attente ...")

document.getElementsByClassName
