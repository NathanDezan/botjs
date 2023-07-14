# Whatsapp BotJS
A seguinte aplicacao trata-se de um bot para grupos no WhatsApp. Embora nao possua comandos especificos, serve como base para o desenvolvimento do seu próprio bot.

## Comandos disponíveis
| Comando | Descricao | Status |
| ------ | ------ | ------ |
| !admin add_group | Cadastra um grupo, suas informacoes e informacoes dos membros em um objeto JSON. | ![Work](./icons/work.svg)
| !admin add_members | Atualiza o objeto JSON gerado pelo comando anterior com informacoes adicionais dos membros. | ![Work](./icons/work.svg)
| !admin list_members | Lista os membros do grupo. | Em progresso

## Tecnologias utilizadas
Tecnologias e versoes utilizadas nessa aplicacao:

- [NodeJS] - v20.4.0
- [QRCode Terminal] - v0.12.0
- [WhatsApp Web JS] - v1.21.0

## Installation
Execute o comando para instalar as dependencias:
```sh
npm install
```

Execute o servidor da aplicacao:
```sh
npm start
```

Aguarde o retorno da seguinte mensagem `Client Ready`, e a aplicacao pode ser testada.

## Execution
Após a execucao do servidor, um QRCode será gerado no terminal e após isso escaneie com seu número separado para o bot (a autenticao sera salva localmente e nao sera necessario realizar o scan novamente).

## License
Apache

**Free Software**

[//]: #
   [NodeJS]: <https://nodejs.org/en>
   [QRCode Terminal]: <https://github.com/joemccann/dillinger.git>
   [WhatsApp Web JS]: <http://daringfireball.net>