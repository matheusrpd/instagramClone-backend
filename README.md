# API Instagram clone

API REST em NodeJs para aplicação de um instagram clone com algumas funcionalidades.
Na aplicação é possível realizar a criação de posts, dar likes e listar os mesmos.

## Tecnologias
Foi utilizado NodeJs para o desenvolimento da API. Com o framework [express](https://expressjs.com/pt-br/) para o controle da API. Bibliotecas como a [mongoose](https://mongoosejs.com/) para facilitar com a abstração no banco de dados, que é o [MongoDB](https://www.mongodb.com). Utilizei também a biblioteca [sharp](https://sharp.pixelplumbing.com/en/stable/), para fazer o rendimensionamento das imagens. além de utilizar a [socket.io](https://socket.io/) para dar suporte a conexção e enviar mensagens real time.

## Testar
- Para testar, primeiro baixe ou clone o repositório. 
- Entre no diretório e rode no terminal ```yarn``` ou ```ǹpm```.
- Acessar http://localhost:3333
- Recomendo utilizar o programa [Insomnia](https://insomnia.rest/) para testar, verá o retorno em JSON. 
