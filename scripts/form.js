//elementos
const publishButton = document.getElementById('btn-publish');
const cancelButton = document.getElementById('btn-cancel');

//função para publicar projeto
async function publishProject(projectName, projectDescription, projectTags, projectImage) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const deuCerto = Math.random() > 0.5;
			if (deuCerto) {
				resolve('projeto publicado com sucesso');
				console.log(projectName);
				console.log(projectDescription);
				console.log(projectTags);
				console.log(projectImage);
				alert('projeto publicado com sucesso');
				cancelPublish();
			} else {
				reject('falha ao publicar o projeto');
				alert('falha ao publicar o projeto');
			}
		}, 500);
	});
}

//listener do botão de publicar
publishButton.addEventListener('click', async (event) => {
	event.preventDefault();

	//leitura dos dados
	const tagList = document.getElementById('form-tags-list');
	let inputName = document.getElementById('input-nome');
	let inputDescription = document.getElementById('input-descricao');
	let projectName = inputName.value.trim();
	let projectDescription = inputDescription.value.trim();
	let projectImage = loadedImage;
	let projectTags = Array.from(tagList.querySelectorAll('p')).map((tag) => tag.textContent);
		//cria um array a partir das tags

	if (
		//verificações
		haveImage === true
		&& projectName !== ''
		&& projectDescription !== ''
		&& projectTags.length !== 0
		&& projectImage
	) {
		try {
			const result = await publishProject(projectName, projectDescription, projectTags, projectImage);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	} else {
		alert('adicione imagem, nome, descrição e no mínimo uma tag ao projeto');
	}
});

//listener do botão de descartar
cancelButton.addEventListener('click', (event) => {
	event.preventDefault();
	cancelPublish();
});

//função de descartar
function cancelPublish() {
	const tagList = document.getElementById('form-tags-list');
	const form = document.getElementById('newproject-form');
	
	form.reset();
	projectTags = [];
	tagList.innerHTML = '';
	tagAdded = [];
	removeImage();
}