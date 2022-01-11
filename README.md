## Cadastro de Carro

**RF** - Requisitos Funcionais

- Deve ser possível cadastrar um carro.
- Deve ser possível listar todas as categorias.

**RNF** - Requisitos Não Funcionais

- Não se aplica.

**RN** - Regras de Negócio

- Não deve ser possível cadastrar um carro com o mesmo número de placa.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- A disponibilidade do carro cadastrado por padrão é "Disponível".
- O usuário responsável pelo cadastro deve ser um usuário administrador.
---

## Listagem de Carros

**RF**

- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pela categoria.
- Deve ser possível listar todos os carros disponíveis pela marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RNF**

- Não se aplica.

**RN**

- O usuário não precisa estar logado para ver a disponibilidade dos carros.
---

## Cadastro de Especificação no Carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RNF**

- Não se aplica.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro que não existe.
- Não deve ser possível cadastrar mais de uma especificação para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.
---

## Cadastro de Imagens do Carro

**RF**

- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**RNF**

- Utilizar a biblioteca Multer para fazer o upload dos arquivos.

**RN**

- O usuário pode cadastrar mais de uma imagem para o carro.
- O usuário responsável pelo cadastro deve ser um administrador.
---

## Aluguel de Carros

**RF**

- Deve ser possível cadastrar um aluguel.

**RNF**

**RN**

- O aluguel deve ter duração mínima de 24 horas.
- Não deve cadastrar um aluguel caso já exista um aluguel aberto para o mesmo usuário.
- Não deve cadastrar um aluguel caso já exista um aluguel aberto para o mesmo carro.