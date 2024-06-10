const biblioteca =  [];
let livro = {};
let opcao = 0;

console.log("1. Para inserir um novo livro:")
console.log("2. Para deletar um livro:")
console.log("3. Para vizualizar todos os livros:")

process.stdin.on("data", function (data) {
    let entrada = data.toString().trim();

    if (!opcao) {
        opcao = Number(entrada);
        console.log("Digite 'enter' para continuar:")
    }
    else {
        switch (opcao) {
            case 1: 
            if (!livro.nome) {
                livro.nome = entrada;
                console.log("Digite o tamanho:")
            }
            else if (!livro.tamanho) {
                livro.tamanho = entrada;
                console.log("Digite o autor")
            }
            else if (!livro.autor) {
                livro.autor = entrada;
                console.log("Digite o gênero:")
            }
            else {
                livro.genero = entrada;
                biblioteca.push(livro);
                livro = {};
                opcao = 0;
                console.log("Livro inserido com sucesso!")
            }
                break;
            case 2:
                break;
            case 3:
                biblioteca.forEach(livro => {
                    console.log(livro)
                })
                opcao = 0;
                break;
            default:
                console.log("Opção inválida");
                opcao = 0;
                break;
        }
    }
})