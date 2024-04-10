# Iluminando Vidas

## Desenvolvimento

Crie uma `branch` a partir de develop começando com `feature/`. Ao finalizar a `feature`, efetue o merge dela em `develop`.

### Poderá fazer isso manualmente

  - Criar feature a partir da develop: `git checkout develop` -> `git checkout -b feature/home`;
  - Mergear feature na develop: `git checkout develop` -> `git pull origin feature/home`;

### Ou via Git Flow

  - Criar feature a partir da develop: `git flow feature start home`;
  - Mergear feature na develop: `git flow feature finish home`;

Não se esqueça de sempre fazer `git push`.

## Estrutura

- ts - extensão Typescript, usado em arquivos contendo apenas código;
- tsx - extensão React Typescript, usado em arquivos contendo um componente;
- assest - pasta contendo arquivos diversos;
- src - pasta raiz de todo o código;
- component - código que será renderizado;
- screen - código que será renderizado e navegado;
- styles - código que tem a estilização de componentes;
- service - código com a lógica do estado de 1 ou mais componentes;

---

- `assets\`
- `src\`
  - `screens\`
    - `home\`
      - `home.screen.tsx`
      - `home.styles.ts`
      - `home.service.ts`
      - `components\`
        - `card\`
          - `card.component.tsx`
          - `card.styles.ts`
          - `card.service.ts`
  - `components\`
    - `navbar\`
      - `navbar.component.tsx`
      - `navbar.styles.ts`
      - `navbar.service.ts`
  - `services\`
    - `dbcontext.service.ts`

---

`screens` contém telas e cada tela deve ter 1 `.screen.tsx` e pode ter 1 `.style.ts`, 1 `.service.ts`, vários componentes.

Se 1 componente for usado em mais de 1 tela, coloque-o em `src\components\`, o mesmo vale para `services`, `styles` e qualquer outro tipo de código.
