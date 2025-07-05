// Ativa os tooltips do Bottstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Controla os botões do menu principal
const btnNavbarMenu = document.querySelector('#btn-navbar-menu');
const mainMenu = document.querySelector('#main-menu');
const btnMainMenu = document.querySelector('#btn-main-menu');

btnNavbarMenu.addEventListener('click',()=>{
    mainMenu.classList.toggle('active');
});

btnMainMenu.addEventListener('click',()=>{
    mainMenu.classList.toggle('active');
});

// Controla o Control-pannel
const btnCrtlPannel = document.querySelector('#btn-control-pannel');
const modalCrtlPannel = document.querySelector('#modal-control-pannel');

btnCrtlPannel.addEventListener('click',()=>{
    modalCrtlPannel.classList.toggle('active');
});

// Controla os Controllers do Control-pannel
const btnControllers = document.querySelectorAll('.btn-controllers');
const pannels = document.querySelectorAll('.pannels');

const cleanPannels = () => {
    pannels.forEach((pannel) => {
        pannel.classList.remove('active');
    });
};

btnControllers.forEach((btnController) =>{
    btnController.addEventListener('click', function(){
        cleanPannels();
        this.nextElementSibling.classList.toggle('active');
    })
})

// Controla Modal Camadas Auxiliares
if (document.getElementById('btn-camadas-auxiliares')) {
 document.getElementById('btn-camadas-auxiliares').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalCamadasAuxiliares = new bootstrap.Modal(document.getElementById('modal-camadas-auxiliares'));
  modalCamadasAuxiliares.show();
});   
}

if (document.getElementById('btn-tipos-mapas')) {
 // Controla Modal Tipos de Mapas
document.getElementById('btn-tipos-mapas').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalTiposMapas = new bootstrap.Modal(document.getElementById('modal-tipos-mapas'));
  modalTiposMapas.show();
});   
}

if (document.getElementById('btn-envio-email')) {
 // Controla Modal Tipos de Mapas
document.getElementById('btn-envio-email').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalEnvioEmail = new bootstrap.Modal(document.getElementById('modal-envio-email'));
  modalEnvioEmail.show();
});   
}


// ###### Autocommplete #############

// Função construtora de campos autocomplete
const addAutoComplete = (input, data, result) => {
  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase(); // Trim evita espaços acidentais
    result.innerHTML = ""; // Limpa os resultados anteriores

    if (!value) return;

    const filtered = data.filter(element =>
      element.toLowerCase().startsWith(value)
    );

    // Evita adicionar itens duplicados
    const uniqueFiltered = [...new Set(filtered)];

    uniqueFiltered.forEach(element => {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.textContent = element;
      item.onclick = () => {
        input.value = element;
        result.innerHTML = "";
      };
      result.appendChild(item);
    });
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !result.contains(e.target)) {
      result.innerHTML = "";
    }
  });
};

// Seleciona elementos do Automplete - campo Categoria
const inputCategoria = document.getElementById("auto-complete-input-categoria");
const categorias = ["Brasil", "Argentina", "Alemanha", "Chile", "Colômbia", "Peru", "Paraguai", "Uruguai", "Venezuela"];
const listCategoria = document.getElementById("auto-complete-list-categoria");

// Controla o Autocomplete do campo Categoria
addAutoComplete(inputCategoria, categorias, listCategoria); 

// Seleciona elementos do Automplete - campo Área
const inputArea = document.getElementById("auto-complete-input-area");
const areas = ["Brasil", "Argentina", "Alemanha", "Chile", "Colômbia", "Peru", "Paraguai", "Uruguai", "Venezuela"];
const listAreas = document.getElementById("auto-complete-list-area");

// Controla o Autocomplete do campo Área
addAutoComplete(inputArea, areas, listAreas);

const btnAlertaHistorico = document.querySelectorAll("#btn-alerta-historico button");

function cleanBtnAlerta() {
    btnAlertaHistorico.forEach((btn) =>{
        btn.classList.remove('active');
    })
}

btnAlertaHistorico.forEach((btn) =>{
    btn.addEventListener('click', function(){
        cleanBtnAlerta();
        this.classList.toggle('active');
    })
})