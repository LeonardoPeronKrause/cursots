class Departmento {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const contabilidade = new Departmento('Contabilidade');

console.log(contabilidade);
