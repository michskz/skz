document.addEventListener('DOMContentLoaded',function(){
    const listajson= [
      
          {
            "name":"Juan Pablo Isaza",
              "img":"https://pbs.twimg.com/profile_images/970156796341088256/agDv0nT8_400x400.jpg",
              "height": "1,89 metros",
              "birthday": "9 de agosto de 1994 ",
              "gender": "male",
              "hometown":"Bogotá, Colombia",
              "instrument":"Voz y Piano"
          },
          {
              "name": "Simon Vargas",
              "img":"https://i.pinimg.com/736x/f1/3d/18/f13d18d4168a24c45485f632eb87b25c.jpg",
              "height":"1,86 metros" ,
              "gender": "male",
              "hometown": "Bogotá, Colombia",
              "birthday":" 24 de octubre de 1993",
              "instrument":"Bajo"
              
              
          },
          {
              "name": "Juan Pablo Villamil",
              "img": "https://images.genius.com/5bf23767200f976cdb98a91b13accd8b.833x833x1.jpg",
              "height": " 1,85 metros",
              "birthday": "25 de julio de 1997",
              "gender": "Male",
              "hometown":" Bogotá, Colombia",
              "instrument":"Guitarra"
              
             
          },
          {
              "name": "Martin Vargas",
              "img":"https://i.pinimg.com/736x/5d/62/87/5d628766a6ea03565900f60189285f78.jpg",
              "height": "1,72 metros ",
              "birthday": "1 de setiembre de 1994",
              "gender": "male",
              "hometown": "Bogotá, Colombia",
              "instrument":"Bateria"
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
            <p>${nombre_lista.instrument}</p>
            
        </div>
     `
    );
    const main = document.querySelector("main");
    main.append(personajes)
    });
  }