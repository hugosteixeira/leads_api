# Leads API

Leads APi is a project made for a intership test.

## Installation

Use the package manager npm to install the dependencies.

```bash
npm install
```
## Config
In the config folders, you can set the database configs.

## Usage

```bash
npm run start
```
## Links
You can see it working here: [API Link](https://leadsapihugosteixeira.herokuapp.com)

## Routes

Get all Leads
```
"leads/" GET
```

Get one Lead

```
"leads/:id" GET
```

Update one Lead

```
"leads/:id" PUT
```

Delete one Lead

```
"leads/:id" DELETE
```

Create one Lead
```
"leads/create/" POST
```

all the aboves routes can be used to produtos, like:

```
"produtos/:id" GET
```

Get leads with score greater than some value:
```
"leads/pontuacao/:pontos" GET
```

## Structure

Lead:
```json
{
	"primeiroNome":"Hugo",
    "ultimoNome":"Teixeira",
    "email":"hugosteixeira@hotmail.com",
    "telefone":"81998301433",
    "cep":"52221130",
    "origem":"Google",
    "horario":"2019-05-17 15:20:35",
    "idProduto": 1,
    "mensagem": "Tenho interesse em comprar um fusca azul",
    "cpf": "999999999-99",
    "cnpj":"99.999.999/9999-99",
    "nascimento":"1996-12-04",
    "pontuacao":50,
    "genero":"masculino"
	}
```

