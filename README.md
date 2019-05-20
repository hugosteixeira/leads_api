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
