document.addEventListener('DOMContentLoaded',function(){
    const listajson= [
      
          {
              "name": "Harry Stiles",
              "img":"https://upload.wikimedia.org/wikipedia/commons/5/55/HarryStylesWembley170623_%2865_of_93%29_%2852982678051%29_%28cropped%29.jpg",
              "height": "1,83",
              "birthday": "01-02-1994",
              "gender": "male",
              "hometown":"Redditch, Reino Unido",
          },
          {
              "name": "Zayn Malik",
        "img":"https://cdn-3.expansion.mx/dims4/default/db7c0d7/2147483647/strip/true/crop/1000x1500+0+0/resize/1200x1800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F98%2Fd6%2F9def256044b59b68e3cc77dba775%2Fzayn-malik.jpg",
        "height":"1.75 m" ,
              "gender": "male",
              "hometown": "Bradford, Reino Unido",
              "birthday":"12-01-1993",
              
              
          },
          {
              "name": "Louis Tomlinson",
              "img": "https://static1.purepeople.com/articles/4/37/12/34/@/5355536-louis-tomlinson-a-la-premiere-de-as-it-1200x0-3.jpg",
              "height": "1.72 m",
              "birthday": "24-12-1991",
              "gender": "Male",
              "hometown":"Doncaster, Reino Unido",
              
             
          },
          {
              "name": "Liam Payne",
              "img": "https://m.media-amazon.com/images/M/MV5BMjM1NTA0NDYzM15BMl5BanBnXkFtZTgwNzg5OTYyNjM@._V1_.jpg",
              "height": " 1.78 m",
              "birthday": "29-09-1993",
              "gender": "Male",
              "hometown":"Wolverhampton, Reino Unido",
          },
          {
              "name": "Nial Horam",
              "img":"https://i.pinimg.com/originals/18/a6/b1/18a6b1929bc84a5df1d0eaaac266ed4a.jpg",
              "height": "1.73 m",
              "birthday": "13-10-1993",
              "gender": "male",
              "hometown": "Mullingar, Irlanda",
              }
            
             
         
      ]
    mostrarLista(listajson);
  });
  function mostrarLista(lista) {
    lista.forEach(nombre_lista => {
    const personajes = document.createRange().createContextualFragment(
        `
        <div id="tarjeta">
            <img src="${nombre_lista.img}" alt="">
            <p>${nombre_lista.name}</p>
            <p>${nombre_lista.gender}</p>
            <p>${nombre_lista.hometown}</p>
            <p>${nombre_lista.birthday}</p>
            <p>${nombre_lista.height}</p>
            
        </div>
     `
    );
    const main = document.querySelector("main");
    main.append(personajes)
    });
  }