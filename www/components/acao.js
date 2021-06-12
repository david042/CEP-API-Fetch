window.onload = function(){
  const buscar = document.querySelector("#buscar");

  const opcoes = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }

  buscar.addEventListener("click",function(){
    fetch(`https://viacep.com.br/ws/01001000/json/`, opcoes)
      .then(response => {response.json()
        .then(data => {
          alert(`Logradouro: ${data["logradouro"]}`);
        })
      })
  });
}