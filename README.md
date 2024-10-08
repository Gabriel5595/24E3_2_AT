# Installed packages

* npm install react-router-dom
* npm i react-responsive-modal

# Instruções

1. ~~Configuração Inicial do Projeto~~
Inicie criando um novo projeto React e configure seu ambiente de desenvolvimento. Configure o roteamento básico utilizando o React Router para gerenciar a navegação entre as diferentes páginas do seu sistema.

2. ~~Tela de Listagem de hotéis~~
Desenvolva a tela principal do sistema, onde será exibida uma lista de hotéis. Cada hotel deve ser apresentado em um card que mostre informações como o nome do hotel, uma imagem representativa, a classificação em estrelas (de 1 a 5), a cidade, o estado e o preço da diária. Para gerenciar os dados dos hotéis, utilize o localStorage para armazenar e recuperar as informações. Quando a aplicação for iniciada, recupere os dados salvos e os exiba-os corretamente na tela de listagem.

3. ~~Tela de Detalhes do Hotel~~
Crie uma tela de detalhes que será exibida quando o usuário clicar em um card de hotel. Nesta tela, mostre informações detalhadas sobre o hotel selecionado, incluindo o nome, uma descrição completa, até quatro imagens adicionais, a cidade, o estado, o preço da diária e uma descrição detalhada dos itens e serviços oferecidos pelo hotel. Utilize o localStorage para armazenar e recuperar esses detalhes.

4. ~~Navegação entre Listagem e Detalhes~~
Implemente a funcionalidade de navegação para permitir que, ao clicar em um card de hotel na tela de listagem, o usuário seja direcionado para a tela de detalhes do hotel correspondente. Assegure-se de que a navegação entre as páginas funcione corretamente e que os dados exibidos na tela de detalhes correspondam ao hotel selecionado.

5. ~~Cadastro de hotéis: Formulário~~
Desenvolva um formulário de cadastro para permitir a adição de novos hotéis ao sistema. O formulário deve incluir campos para o nome do hotel, imagem, classificação em estrelas, cidade, estado, preço da diária e uma descrição detalhada dos itens e serviços oferecidos. Garanta que o formulário seja claro e fácil de usar.

6. ~~Cadastro de hotéis: Funcionalidade~~
Implemente a funcionalidade que permita ao usuário submeter o formulário de cadastro. Quando o formulário for enviado, os dados do novo hotel devem ser salvos no localStorage e a lista de hotéis na tela de listagem deve ser atualizada automaticamente para refletir a inclusão do novo hotel.

7. ~~Edição de hotéis: Formulário~~
Crie um formulário de edição que permita modificar os dados de um hotel existente. O formulário deve ser capaz de exibir os dados atuais do hotel e permitir que o usuário faça alterações nos campos como nome, imagem, classificação, cidade, estado, preço da diária e descrição. Certifique-se de que o formulário permita uma edição eficaz e que seja intuitivo para o usuário.

8. ~~Edição de hotéis: Funcionalidade~~
Implemente a funcionalidade para que, ao submeter o formulário de edição, as alterações feitas nos dados do hotel sejam salvas no localStorage. Atualize a tela de listagem e a tela de detalhes para refletir as modificações feitas no hotel.

9. ~~Exclusão de hotéis~~
Desenvolva a funcionalidade para excluir um hotel do sistema. Permita que o usuário selecione um hotel e o remova da lista. A exclusão deve refletir imediatamente na tela de listagem e os dados do hotel excluído devem ser removidos do localStorage.

10. ~~Adicionar Funcionalidade de Pesquisa~~
Implemente uma funcionalidade de pesquisa na tela de listagem de hotéis. Permita que os usuários filtrem a lista de hotéis com base no nome. Certifique-se de que a pesquisa seja realizada em tempo real, à medida que o usuário digita na barra de pesquisa.

11. ~~Ordenar a Lista de hotéis~~
Adicione uma opção para ordenar a lista de hotéis por preço da diária ou por classificação. Inclua um seletor no topo da tela de listagem que permita ao usuário escolher o critério de ordenação desejado.

12. Implementar Feedback de Validação no Formulário
Adicione validação de formulário ao cadastrar e editar hotéis. Garanta que o usuário receba feedback visual se tentar submeter o formulário com campos obrigatórios vazios ou com dados inválidos (por exemplo, preços negativos).

13. ~~Mostrar Mensagens de Sucesso e Erro~~
Implemente mensagens de feedback para operações como cadastro, edição e exclusão de hotéis. Mostre uma mensagem de sucesso quando uma operação for concluída com êxito e uma mensagem de erro se houver um problema (por exemplo, falha ao salvar no localStorage).

14. Adicionar Funcionalidade de Favoritos
Adicione a possibilidade de marcar hotéis como favoritos na tela de listagem. Permita que o usuário adicione e remova hotéis dos favoritos e exiba uma seção ou página separada para listar apenas os hotéis marcados como favoritos.

15. ~~Estilização de Componentes~~
Melhore a aparência visual do seu projeto aplicando estilos adicionais aos componentes. Utilize CSS para garantir que o design da tela de listagem, tela de detalhes e formulários seja atraente e responsivo. Considere adicionar estilos para melhorar a usabilidade e a experiência do usuário.

16. Adicionar Funcionalidade de Alternância entre Tema Claro e Escuro
Implemente uma funcionalidade que permita aos usuários alternar entre um tema claro e um tema escuro em todo o sistema. Adicione um botão ou controle de alternância visível, como um interruptor de tema, no cabeçalho. Quando o usuário seleciona um tema, aplique o tema escolhido a toda a aplicação, garantindo que todos os elementos da interface, como textos, botões, fundos, se ajustem adequadamente para o tema selecionado. Utilize o localStorage para armazenar a preferência de tema do usuário, de modo que a aplicação lembre a escolha do usuário na próxima vez que ele acessar o sistema.