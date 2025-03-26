# Professor Maximilian Schwarzmüller

# Guia Rápido de TypeScript

## O que é TypeScript?
TypeScript é um superset do JavaScript que adiciona **tipagem estática** e outros recursos avançados para facilitar o desenvolvimento escalável.

---
## Instalação
Para instalar o TypeScript globalmente:
```sh
npm install -g typescript
```
Para compilar um arquivo `.ts` para `.js`:
```sh
tsc arquivo.ts
```

---
## Tipagem Básica
```ts
let nome: string = "Leonardo";
let idade: number = 25;
let ativo: boolean = true;
```

---
## Tipos de Variáveis
### Tipos Primitivos
- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `any` (evite usar, pois desativa a tipagem)

### Arrays
```ts
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ["Alice", "Bob"];
```

### Tuplas
```ts
let pessoa: [string, number] = ["Leonardo", 25];
```

### Enums
```ts
enum Status {
  Pendente,
  EmAndamento,
  Concluido
}
let statusAtual: Status = Status.EmAndamento;
```

---
## Funções
```ts
function somar(a: number, b: number): number {
  return a + b;
}
```

### Parâmetros Opcionais e Padrão
```ts
function saudar(nome: string, saudacao: string = "Olá"): string {
  return `${saudacao}, ${nome}`;
}
```

### Funções com Tipos Genéricos
```ts
function identidade<T>(valor: T): T {
  return valor;
}
let numero = identidade<number>(10);
let texto = identidade<string>("Olá");
```

---
## Interfaces e Types
```ts
interface Usuario {
  nome: string;
  idade: number;
}

let usuario: Usuario = {
  nome: "Leonardo",
  idade: 25
};
```

### Diferença entre `interface` e `type`
- `interface` pode ser extendida com `extends`
- `type` é mais flexível para tipos complexos

```ts
type Pessoa = {
  nome: string;
  idade: number;
};
```

---
## Classes
```ts
class Animal {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  fazerSom(): void {
    console.log("Som genérico");
  }
}

class Cachorro extends Animal {
  fazerSom(): void {
    console.log("Au Au");
  }
}
let dog = new Cachorro("Rex");
dog.fazerSom();
```

---
## Modificadores de Acesso
- `public`: acessível de qualquer lugar
- `private`: acessível apenas dentro da classe
- `protected`: acessível dentro da classe e subclasses

```ts
class Exemplo {
  private segredo: string = "1234";
  public mostrarSegredo(): string {
    return this.segredo;
  }
}
```

---
## Tipos Avançados
### Union Types
```ts
let valor: string | number;
valor = "Texto";
valor = 10;
```

### Intersection Types
```ts
type Funcionario = {
  nome: string;
  salario: number;
};

type Desenvolvedor = {
  linguagem: string;
};

type DevFuncionario = Funcionario & Desenvolvedor;
```

---
## Utilizando no React
Para usar TypeScript no React:
```sh
npx create-react-app meu-app --template typescript
```

Exemplo de um componente com TypeScript:
```tsx
interface Props {
  titulo: string;
}
const Componente: React.FC<Props> = ({ titulo }) => {
  return <h1>{titulo}</h1>;
};
```

---
## Conclusão
TypeScript é uma ferramenta poderosa para aumentar a segurança e manutenção do seu código. Continue praticando e aplicando os conceitos no seu dia a dia! 🚀

