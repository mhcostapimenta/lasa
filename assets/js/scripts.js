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

// Controla Modal Camadas SIFAU
if (document.getElementById('btn-camadas-sifau')) {
 document.getElementById('btn-camadas-sifau').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalCamadasSifau = new bootstrap.Modal(document.getElementById('modal-camadas-sifau'));
  modalCamadasSifau.show();
});   
}

// Controla Modal Regioes
if (document.getElementById('btn-regioes')) {
 document.getElementById('btn-regioes').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalRegioes = new bootstrap.Modal(document.getElementById('modal-regioes'));
  modalRegioes.show();
});   
}

// Controla Modal Sobre Sifau
if (document.getElementById('btn-sobre')) {
 document.getElementById('btn-sobre').addEventListener('click', function(event) {
  event.preventDefault(); // impede o comportamento padrão do link
  var modalSobreSifau = new bootstrap.Modal(document.getElementById('modal-sobre-sifau'));
  modalSobreSifau.show();
});   
}

// Controla a listagem de áreas
const btnAreas = document.querySelectorAll('#btn-areas li');

if (btnAreas) {
    const cleanBtnAreas = () => {
        btnAreas.forEach((btnArea) => {
            btnArea.classList.remove('active');
        });
    };    
    btnAreas.forEach((btnArea) =>{
        btnArea.addEventListener('click', function(event){
            event.preventDefault();
            if (btnArea.classList.contains('active')) {
              this.classList.remove('active');  
            } else {
             cleanBtnAreas();
            this.classList.add('active');               
            }
        })
    })
}

// Painel Draggable
const dragDiv = document.getElementById("dragDiv");

  let isDragging = false;
  let offsetX, offsetY;

  dragDiv.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragDiv.offsetLeft;
    offsetY = e.clientY - dragDiv.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      dragDiv.style.left = (e.clientX - offsetX) + "px";
      dragDiv.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

////// Controla o painel suspenso Legenda das Camadas - SIFAU

const btnDragShow = document.getElementById('btn-drag-show');
const dragContent = document.getElementById('drag-content');

if (btnDragShow) {
    btnDragShow.addEventListener('click', function(){
        dragContent.classList.toggle('active');
    }) 
}