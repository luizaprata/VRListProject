# VR Gerenciador de Contatos

Este repositório possui o objetivo avaliação técnica:

**Para rodar o projeto:**

`npm run start`

**Para testar os componentes:**

`npm run test`

## Informações importantes

1. O projeto utiliza [React Query](https://tanstack.com/query/v3/) v3: biblioteca de data-fetching que ajuda a buscar, armazenar em cache, sincronizar e atualizar o estado do servidor em seu aplicativo.

2. Para realizar o MOCK das APIs para os testes, o projeto utiliza [MSW](https://mswjs.io/)

## Como configurar o ambiente de desenvolvimento

Siga as instruções para configurar o ambiente de desenvolvimento nativo na sua máquina

- [Documentação React Native](https://reactnative.dev/docs/environment-setup?guide=native);

## Cenário de testes de integração

### **Testes de Componentes:**

Os componentes estão sendo testados utilizando o framework de teste [Jest](https://jestjs.io) em conjunto com a biblioteca para renderização [testing-library](https://github.com/callstack/react-native-testing-library).

Com essas duas ferramentas é possivel testar a maior parte dos comportamentos esperados do componente.

Por padrão os testes estão sendo criados na mesma pasta do componente seguindo a seguinte nomeclatura:

_NomeDoComponente.test.tsx_
