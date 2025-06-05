let haveImage = false;
	//variável de controle, indica se uma imagem foi carregada
let loadedImage;
	//imagem carregada para envio

//listener do botão de upload
const btnUploadImg = document.getElementById('btn-upload-img');
const inputUploadImg = document.getElementById('input-upload-img');

btnUploadImg.addEventListener('click', () => {
	inputUploadImg.click();
});

//listener da janela de upload
const areaUploadImg = document.getElementById('newproject-upload-preview')

areaUploadImg.addEventListener('click', () => {
	inputUploadImg.click();
});

//função de leitura do arquivo
function lerArquivo(arquivo) {
	return new Promise((resolve, reject) => {
		//new Promise: programação assíncrona

		const leitura = new FileReader();
		//FileReader(): função do JS para ler arquivos

		leitura.onload = () => {
			//onload: evento disparado quando o arquivo é carregado com sucesso
			
			resolve({ url: leitura.result, nome: arquivo.name });
			//resolve do Promise, retorna a url e o nome do arquivo
		}
		
		leitura.onerror = () => {
			//onerror: evento disparado se o carregamento do arquivo falhar
			
			reject(`Erro na leitura do arquivo ${arquivo.name}`);
			//reject do Promise, retorna uma mensagem de erro
		}
		
		leitura.readAsDataURL(arquivo);
			//leitura do arquivo
	});
}

//preview da imagem carregada
const imagePreview = document.getElementById('image-preview');
const imageInfo = document.getElementById('uploaded-img-info');
const imageName = document.getElementById('uploaded-img-name');
const emptyPreview = document.getElementById('empty-preview');

inputUploadImg.addEventListener('change', async (evento) => {
	//listener no input do arquivo, disparado quando é enviado um arquivo
	//async: indica que há tarefas addíncronas na função
	
	const arquivo = evento.target.files[0];
	//add arquivo em constante
	//files[0] carrega o primeiro arquivo
	
	if (arquivo && arquivo.type.startsWith('image/')) {
	//validação se tem arquivo carregado e se é do tipo imagem
		
		try {
			//tentativa de execução em tarefas assincronas    

			const conteudoDoArquivo = await lerArquivo(arquivo);
			//execução da função de leitura
			//await faz com que o código espere a realização da tarefa

			imagePreview.src = conteudoDoArquivo.url;
			//altera a imagem do preview usando a url vinda da função de leitura

			imagePreview.style.display = "block";
			//exibe a imagem de preview

			imageName.textContent = conteudoDoArquivo.nome;
			//altera o texto com o nome do arquivo vindo da função de leitura

			imageInfo.style.display = "flex";
			//exibe o nome do arquivo

			emptyPreview.style.display = "none";
			//oculta o ícone de preview vazio

			loadedImage = conteudoDoArquivo.url;

			haveImage = true;
			//indica que existe uma imagem carregada

		} catch (erro) {
			//catch: executa ações caso a tentativa de execução falhe
			//(erro): objeto opcional, contém dados do erro

			console.error('Erro na leitura do arquivo');
			//mostra o erro no console

			alert('Erro na leitura do arquivo');
			//exibe um alerta para o usuário
		}
		
	} else {
		//else caso a validação do arquivo falhe
		imagePreview.style.display = "none";
		imageInfo.style.display = "none";
		emptyPreview.style.display = "block";
		alert('Erro na leitura do arquivo');
	}
});

//remover imagem
const removeImageBtn = document.getElementById('remove-image-btn');

removeImageBtn.addEventListener('click', (event) => {
	event.preventDefault();
	removeImage();
});

//função para remover imagem carregada
function removeImage() {
	imagePreview.src = '';
	imagePreview.style.display = "none";
	imageName.textContent = 'nome do arquivo carregado';
	imageInfo.style.display = "none";
	emptyPreview.style.display = "block";
	loadedImage = '';
	haveImage = false;
}