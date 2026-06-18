# TAG Digital Marketing - Site

Landing page institucional da TAG Digital Marketing, criada com Next.js App Router,
TypeScript e Tailwind CSS.

## Requisitos

- Node.js 20 ou superior
- pnpm

## Como rodar localmente

```bash
pnpm install
pnpm dev
```

Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
pnpm lint
pnpm build
pnpm start
```

## Leads

O formulário envia os dados para o endpoint interno:

```text
POST /api/leads
```

Em desenvolvimento, se `WEBHOOK_URL` não estiver configurado, o endpoint retorna
sucesso sem enviar para serviço externo.

Em produção, configure a variável `WEBHOOK_URL` na Vercel com a URL do webhook
do Google Apps Script.

Veja o passo a passo em:

```text
docs/PUBLISHING_STEP_BY_STEP.md
```
