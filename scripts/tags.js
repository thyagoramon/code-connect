const tagInput = document.getElementById('input-tags');
	//input de adição das tags

const tagList = document.getElementById('form-tags-list');
	//div ondes as tags ficam agrupadas

let tagAdded = [];
	//lista das tags adicionadas

//controle para quando o input está ativo
let isAddingTag = false;

tagInput.addEventListener('focus', () => {
	isAddingTag = true;
});

tagInput.addEventListener('blur', () => {
	isAddingTag = false;
});

//adicionar tag
//listener da tecla enter para adicionar a tag
document.addEventListener('keydown', function (event) {
	if (isAddingTag === true && event.key === 'Enter') {
		event.preventDefault();
		addTag();
	}
});

function addTag() {
	//conteúdo do input
	let tag = tagInput.value.trim();
	let tagId = gerarIdTag(tag);

	if (!tag) {
		//verifica se o input está vazio
		alert('Digite um nome para a tag')
	} else if (tagAdded.includes(tagId)) {
		//verifica se a tag já foi adicionada
		alert('Está tag já foi adicionada');
		tagInput.value = "";
	} else {
		//adiciona a tag na lista, adiciona no html, limpa o input
		tagAdded.push(tagId);

		//cria a div da tag
		let newTag = document.createElement('div');
		newTag.id = `tag-${tagId}`;
		newTag.classList.add('form-tag');
		newTag.dataset.tag = `${tagId}`;
		tagList.appendChild(newTag);

		//seleciona a div criada
		newTag = document.getElementById(`tag-${tagId}`);

		//cria o paragrafo
		let tagP = document.createElement('p');
		tagP.innerText = `${tag}`;
		newTag.appendChild(tagP);

		//cria o botão
		let tagButton = document.createElement('button');
		tagButton.classList.add('btn-x');
		tagButton.dataset.tag = `${tagId}`;
		tagButton.innerText = 'x';
		newTag.appendChild(tagButton);

		tagInput.value = "";
	}
}

//remover tag
tagList.addEventListener('click', function (event) {
	//listener no elemento pai, pois a tag é criada via JS
	
	const target = event.target;
	//salva o elemento que dispara o listener em uma const
	
	if (target.classList.contains('btn-x')) {
		//verifica se o target é o botão de remover a tag
		
		event.preventDefault();
		
		let id = target.dataset.tag;
		//pega a id da tag a ser removida
		
		removeTag(id);
		//função de remoção com a id
	}
});

//função para remover a tag
function removeTag(id) {
	const tag = document.getElementById(`tag-${id}`);
	//seleciona a tag via id

	tag.remove();
	//remove a tag da lista
	
	let index = tagAdded.indexOf(id);
	tagAdded.splice(index, 1);
	//remove a tag da lista de tags
}

//extras
function gerarIdTag(nome) {
	return nome.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}