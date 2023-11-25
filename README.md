# Alucard-Bot

O **Alucard-Bot**, o maior bot do WhatsApp que revolucionou o conceito de automação no segundo semestre de 2023, tem sido adotado por mais de 20 mil pessoas em diversos grupos. Introduzimos qualidade para o WhatsApp, e o melhor de tudo: não cobramos um centavo dos usuários, oferecendo nossos serviços exclusivamente para fins educacionais.

Quero expressar minha gratidão ao meu amigo [Polabiel](https://github.com/Polabiel/). Conheci você neste projeto, e você trouxe muitos ensinamentos que levarei para toda a vida.

## Como instalar e usar o Alucard-Bot:

O [**Alucard-Bot**](https://github.com/rickoproprio/alucard) é um bot customizável, ou seja, você pode alterar, excluir e adicionar comandos novos sem interferir na estrutura do mesmo.

Esta aplicação requer [NodeJS](https://nodejs.org/).

Após isso, você deverá baixar as dependências com o comando **npm i** e, em seguida, executar com **npm start**. Escaneie o QR code com sua conta do WhatsApp ou do WhatsApp do seu Bot, e simples assim, o bot já está online.

Para personalizar o [**Alucard-Bot**](https://github.com/rickoproprio/alucard), comece abrindo o arquivo ./src/config.js. Leia os comentários e faça as alterações necessárias de acordo com as necessidades do seu projeto. Após concluir essa etapa, você pode modificar a mensagem do menu em ./src/utils/messages.js. Feito isso, você estará pronto para personalizar os comandos.

Inicialmente, foram configuradas as APIs de BIN, CNPJ, CEP, OPENAI e SIMSIMI, que estão localizadas em ./src/service. As demais APIs precisam ser ajustadas conforme suas necessidades.

Na seção de comandos em ./src/commands, há uma divisão em admin, consultas, member e owner, que são:
- **admin**: comandos destinados apenas a administradores de grupos.
- **consultas**: comandos que importam de alguma API da pasta service.
- **member**: comandos para todos os usuários do bot.
- **owner**: comandos exclusivos para o proprietário.

Essa é uma maneira segura de organizar, pois permite que você saiba exatamente onde adicionar cada novo comando.

# Agradecimento

Desde então, expresso meu profundo agradecimento a todos que utilizaram nosso robô. Espero que ele tenha feito realmente alguma diferença na sua experiência com o mensageiro Whatsapp. Nosso intuito sempre foi aplicar nosso conhecimento para o benefício de todos. Esperamos nos reencontrarmos em breve. Até já!
