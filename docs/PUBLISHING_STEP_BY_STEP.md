# Publicação do site TAG Digital Marketing

Este guia mostra o fluxo recomendado:

1. Subir o código-fonte no GitHub usando GitHub Desktop.
2. Publicar o projeto na Vercel.
3. Criar um webhook no Google Planilhas com Google Apps Script.
4. Conectar o webhook na Vercel usando `WEBHOOK_URL`.
5. Testar o formulário em produção.

## 1. GitHub Desktop

Abra o GitHub Desktop.

Se esta pasta ainda não aparecer no app:

1. Clique em `File`.
2. Clique em `Add local repository`.
3. Clique em `Choose...`.
4. Selecione esta pasta limpa do projeto.
5. Clique em `Add repository`.

Se o GitHub Desktop disser que a pasta ainda não é um repositório Git, escolha a opção
para criar/inicializar o repositório.

Depois:

1. No campo de resumo do commit, escreva `Initial site version`.
2. Clique em `Commit to main`.
3. Clique em `Publish repository`.
4. Nome sugerido: `tag-digital-marketing-site`.
5. Escolha se o repositório será privado ou público.
6. Clique em `Publish Repository`.

## 2. Vercel

1. Acesse `https://vercel.com`.
2. Entre com a mesma conta GitHub usada no GitHub Desktop.
3. Clique em `Add New...`.
4. Clique em `Project`.
5. Escolha o repositório `tag-digital-marketing-site`.
6. Framework Preset: `Next.js`.
7. Build Command: `pnpm build`.
8. Install Command: `pnpm install`.
9. Output Directory: deixe vazio, pois o Next.js é detectado automaticamente.
10. Clique em `Deploy`.

Ao final, a Vercel vai gerar uma URL pública parecida com:

```text
https://tag-digital-marketing-site.vercel.app
```

## 3. Google Planilhas

Crie uma nova planilha no Google Planilhas com a primeira linha:

```text
Data | Nome | Telefone | Perfil | Mensagem | Origem
```

Depois:

1. Clique em `Extensões`.
2. Clique em `Apps Script`.
3. Apague o conteúdo padrão.
4. Cole o código do arquivo `docs/google-sheets-webhook.gs`.
5. Troque `COLE_AQUI_O_ID_DA_PLANILHA` pelo ID da sua planilha.
6. Troque `TROQUE_ESTE_TOKEN` por uma senha/token simples, sem espaços.
7. Clique em `Salvar`.

O ID da planilha fica na URL:

```text
https://docs.google.com/spreadsheets/d/ESTE_TRECHO_AQUI/edit
```

## 4. Publicar o Apps Script como Web App

1. No Apps Script, clique em `Deploy`.
2. Clique em `New deployment`.
3. Em `Select type`, escolha `Web app`.
4. Em `Execute as`, escolha `Me`.
5. Em `Who has access`, escolha `Anyone`.
6. Clique em `Deploy`.
7. Autorize o acesso quando o Google pedir.
8. Copie a URL terminada em `/exec`.

Monte a URL final assim:

```text
https://script.google.com/macros/s/SEU_ID_DO_DEPLOY/exec?token=TROQUE_ESTE_TOKEN
```

## 5. Configurar WEBHOOK_URL na Vercel

1. Entre no projeto na Vercel.
2. Vá em `Settings`.
3. Vá em `Environment Variables`.
4. Adicione:

```text
Name: WEBHOOK_URL
Value: URL_DO_APPS_SCRIPT_COM_TOKEN
Environment: Production
```

5. Salve.
6. Vá em `Deployments`.
7. Clique nos três pontos do último deploy.
8. Clique em `Redeploy`.

## 6. Teste final

1. Abra a URL pública da Vercel.
2. Preencha o formulário.
3. Envie.
4. Abra a planilha e veja se uma nova linha apareceu.

Se o lead não aparecer:

- Confirme se `WEBHOOK_URL` foi criada em `Production`.
- Confirme se o Apps Script foi publicado como `Web app`.
- Confirme se o acesso está como `Anyone`.
- Confirme se o token da URL é igual ao token dentro do script.
- Depois de alterar variável na Vercel, faça sempre um `Redeploy`.
