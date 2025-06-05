const ancLogo = document.getElementById('side-logo');
const ancPublicar = document.getElementById('side-publicar');
const ancFeed = document.getElementById('side-feed');
const ancPerfil = document.getElementById('side-perfil');
const ancSobre = document.getElementById('side-sobre');
const ancExit = document.getElementById('side-sair');
const winPublicar = document.getElementById('newproject');
const winContrucao = document.getElementById('underConstruction');

ancLogo.addEventListener('click', (event) => {
	event.preventDefault();
	winPublicar.style.display = 'none';
	winContrucao.style.display = 'flex';	
});

ancPublicar.addEventListener('click', (event) => {
	event.preventDefault();
	winContrucao.style.display = 'none';
	winPublicar.style.display = 'flex';
});

ancFeed.addEventListener('click', (event) => {
	event.preventDefault();
	winPublicar.style.display = 'none';
	winContrucao.style.display = 'flex';	
});

ancPerfil.addEventListener('click', (event) => {
	event.preventDefault();
	winPublicar.style.display = 'none';
	winContrucao.style.display = 'flex';	
});

ancSobre.addEventListener('click', (event) => {
	event.preventDefault();
	winPublicar.style.display = 'none';
	winContrucao.style.display = 'flex';	
});

ancExit.addEventListener('click', (event) => {
	event.preventDefault();
	winPublicar.style.display = 'none';
	winContrucao.style.display = 'flex';	
});