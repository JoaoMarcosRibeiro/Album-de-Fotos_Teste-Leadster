# **Teste Leadster - Álbum de fotos**

## Introdução

Projeto desenvolvido como atividade de teste para empresa Leadster.
O objetivo do teste é avaliar a capacidade de resolver problemas e também a qualidade do código.

## Requisitos

- Sua tarefa consiste em criar um site para um álbum de fotos​: 
- Ele deve ser responsivo, e suas fotos devem ser carregadas da API https://www.pexels.com/api/documentation/#photos;
- As fotos devem ter paginação(lazy load é um bom caminho ;) mas não é obrigatório );
- O site deve conter um cabeçalho e um rodapé;

## O que gostaríamos de ver

- Um HTML escrito da maneira mais semântica possível (HTML5/5.1);
- É permitido o uso de bibliotecas de css e etc, mas seu código é mais importante;
- CSS3/4 - Com um pre processador de CSS (a escolha fica a seu critério, mas por aqui utilizamos SASS);
- Ver a utilização de um framework da sua escolha, por aqui utilizamos o React. Utilize o framework da melhor forma possível (metodologia/estrutura);

## Informações do Projeto

- O projeto foi desenvolvido com ReactJS, API Pexels importado com codigo Javascript, conforme [documentação](https://www.pexels.com/api/documentation/#photos) da API;
- Feito a captura e manipulação dos dados através da logica do ReactsJS e linguagem Javascript;
- Criado um cabeçalho e um rodapé, conforme solicidado;
- Feito logica para a renderização dos resutados de forma organizada para deixar o projeto apresentavel;
- Renderização padrão das fotos em tempo real com curadoria da equipe Pexels;
- Campo para pré selecionar a quantidade de fotos por pagina;
- Campo de busca que carrega fotos conforme a digitação do conteudo buscado por usuário;
- Fotos são ampliadas com cursor do mouse;
- Paginação renderizada conforme quantidade de fotos da busca e estabelecido uma quantidade total de paginas para fotos de tendências;
- Quando a pagina é selecionada o site volta ao topo da pagina para redenrização das fotos;
- Compartilhamento de dados do site entre componentes com Context
- Quando clicar em uma foto, link vai abrir nova aba do navegador com imagem original.

Tecnologias utilizadas:

- [React JS](https://reactjs.org/);
- [API Pexels](https://www.pexels.com/api/);
- [SASS](https://sass-lang.com/) (Pré Processador de CSS);
- [Bootstrap](https://getbootstrap.com/)
- [React-bootstrap](https://react-bootstrap.github.io/)
- [Jquery](https://jquery.com/)


Deploy: https://joaomarcosribeiro.github.io/Album-de-Fotos_Teste-Leadster/