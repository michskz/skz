document.addEventListener('DOMContentLoaded',function(){
    const listajson= [
      
          {
              "name": "Bang Chan",
              "img":"https://media1.tenor.com/m/L1psp33-8iIAAAAC/bang-chan-stray-kids.gif",
              "height": "1,71",
              "birthday": "03-10-1997",
              "gender": "male",
              "position":"leader",
              "hometown":"Sydney,Australia",
          },
          {
              "name": "Lee know",
        "img":"https://64.media.tumblr.com/c7abea7dc5f7766fad014515c23e24f1/f511622417b4f465-79/s400x600/65d6c3eec2bb609deca277e94e4c322961e30701.gif",
        "height":"1,71" ,
              "gender": "male",
              "hometown": "Seul,Korea",
              "birthday":"25-10-1998",
              "position":"dancer",
              
          },
          {
              "name": "Changbin",
        "img": "https://64.media.tumblr.com/c4ef1572e512b2b6f40ecc1aa3e9be03/bf6347d8cd2e6705-a2/s400x600/66dae33f574173942048d5c3f7d2066ab5ab5b1d.gif",
              "height": "1,69",
              "birthday": "11-08-1999",
              "gender": "Male",
              "hometown":"Seul,Korea",
              "position":"Raper"
             
          },
          {
              "name": "Hyunjin",
        "img": "https://i.pinimg.com/originals/19/82/b5/1982b5eed73f94806f004343d8db5949.gif",
              "height": "1,79",
              "birthday": "20-03-2000",
              "gender": "Male",
              "hometown":"Seul,Korea",
              "position":"Visual"
          },
          {
              "name": "Han",
        "img":"https://64.media.tumblr.com/893e064d122b5edf80e31d1f4732b914/c1ac93dad064e0f9-47/s400x600/e107c2f502b8a1cf36ff5a4c6a28d977d3ed9f2b.gifv",
              "height": "1,69",
              "birthday": "14-09-2000",
              "gender": "male",
              "hometown": "Seul,Korea",
              "position":"Producer"
              
          },
          {
              "name": "Felix",
        "img":"https://favim.com/pd/s11/orig/8/818/8184/81842/gif-red-aesthetic-stray-kids-Favim.com-8184290.gif",
              "height": "1,71",
              "birthday": "15-09-2000",
              "gender": "male",
              "hometown": "Sydney,Australia",
               "position":"Dancer"
          },
          {
              "name": "Seungmin",
        "img":"https://64.media.tumblr.com/ec09b8eac6519e2b72c624a83e9f7999/eac009549b37fcab-0c/s540x810/ac7c3c9755a31d1ab42e6885f746145696d79aba.gif",
              "height": "1,77",
              "birthday": "22-09-2000",
              "gender": "male",
              "hometown": "Seul,Korea",
              "position":"vocal"
          },
          {
              "name": "I.N",
        "img":"https://64.media.tumblr.com/0b9f75b6fbe36b85591f4eef25c42f02/6e20819756c8c88f-2b/s400x600/ac63bd47d14bae0560415e4694e1050d70034c43.gif",
              "height": "1,70",
              "birthday": "08-02-2001",
              "gender": "male",
              "hometown": "Busan,Korea",
              "position":"vocal"
            },
            {

            
              "name": "Woojin  ex-miembro",
        "img":"https://i.pinimg.com/originals/61/57/d9/6157d94de800fe75aee23dddfe3039d4.gif",
              "height": "1,75",
              "birthday": "08-04-1997",
              "gender": "male",
              "hometown": "Seul,Korea",
              "position":"vocal"
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
            <p>${nombre_lista.position}</p>
            <p>${nombre_lista.height}</p>
            
        </div>
     `
    );
    const main = document.querySelector("main");
    main.append(personajes)
    });
  }