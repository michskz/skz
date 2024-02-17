document.addEventListener('DOMContentLoaded',function(){
    const listajson= [
      
          {
            "name":"Crhistopher Brayan Velez Muñoz",
              "img":"https://i0.wp.com/i.pinimg.com/736x/be/36/55/be3655f222769d07004bf053bedc2486.jpg?resize=160,120",
              "height": "1.80 m",
              "birthday": "23 de noviembre de 1995 ",
              "gender": "male",
              "hometown":"Nueva Jersey, Estados Unidos",
          },
          {
              "name": "Richard Jasel Camacho Puello",
              "img":"https://i.pinimg.com/736x/5c/dd/55/5cdd5573c7592941e80ae7ea0b14ec77.jpg",
              "height":"1.77 m" ,
              "gender": "male",
              "hometown": "new york, EEUU",
              "birthday":"22 de enero de 1997",
              
              
          },
          {
              "name": "Zabdiel de Jesus",
              "img": "https://media.gq.com.mx/photos/652dce8c327727db0a0232aa/master/pass/Zabdiel_CNCO_solista.jpg",
              "height": "1.85 m",
              "birthday": "13 de diciembre de 1997",
              "gender": "Male",
              "hometown":"Bayamon,Puerto Rico",
              
             
          },
          {
              "name": "Joel Pimentel de Leon",
              "img": "https://i.pinimg.com/originals/77/8a/9b/778a9b15fd598dba570ebd4e0fe70d45.jpg",
              "height": " 1.80 m",
              "birthday": "28 de febrero de 1999",
              "gender": "Male",
              "hometown":"Hesperia, California, Estados Unidos",
          },
          {
              "name": "Erick Brian Colon Arista",
              "img":"https://i.pinimg.com/236x/99/7c/dc/997cdc7c26c14be291a5a225f240ff0e.jpg",
              "height": "1.75 m",
              "birthday": " 3 de enero de 2001",
              "gender": "male",
              "hometown": "Habana,Cuba",
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