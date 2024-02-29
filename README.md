# Teste de Vaga - Aplicação de Listagem de Carros

Bem-vindo ao repositório do Teste de Vaga. Nesta aplicação, utilizei as seguintes tecnologias:

<p align="center">
  <img src="https://raw.githubusercontent.com/DevJoaoPeu/teste-vaga/3d078b5143d32ff711e4ab14ae1cce1d83e18963/public/captura02.png" width="400" height="auto" alt="Descrição da imagem 1">
  <img src="https://raw.githubusercontent.com/DevJoaoPeu/teste-vaga/3d078b5143d32ff711e4ab14ae1cce1d83e18963/public/captura02.png" width="400" height="auto" alt="Descrição da imagem 2">
</p>

- **React/Next.js**: Para construção da aplicação de página única e renderização no lado do servidor.
- **TypeScript**: Para adicionar tipagem estática ao JavaScript, tornando o código mais robusto e escalável.
- **Tailwind CSS**: Um framework de utilitários CSS de baixo nível para construção rápida e eficiente de interfaces modernas.

## Estrutura do Projeto

- **`/pages`**: Contém os arquivos da aplicação, como `index.tsx` (página principal) e outros arquivos de rota.
- **`/components`**: Armazena componentes React reutilizáveis, como `ListCars.tsx` e `Rating.tsx`.
- **`/public`**: Diretório padrão para arquivos estáticos, como imagens.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/DevJoaoPeu/teste-vaga.git
```

2. Instale as dependências:

```bash
cd teste-vaga
npm install
```

3. Execute a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Código

- **`/pages/index.tsx`**: Página principal que utiliza a listagem de carros.
- **`/components/ListCars.tsx`**: Componente de listagem de carros.
- **`/components/Rating.tsx`**: Componente de avaliação.

- <a href="https://teste-vaga.vercel.app/">Link do deploy</a>

## Dados Fictícios

Os dados dos carros são definidos no arquivo `ListCars.ts` como um array de objetos. Cada objeto representa um carro com informações como nome, ano, disponibilidade e avaliação.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório, crie um branch, e envie um pull request.

Agradeço por considerar o Teste de Vaga! 🚗💻
