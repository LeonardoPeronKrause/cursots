abstract class Departamento {
  static fiscalYear = 2020;
  //private readonly id: string;
  //public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    //this.id = id;
    //this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  abstract describe(this: Departamento): void ;

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  employeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class TIDepartamento extends Departamento {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'ti');
    this.admins = admins;
  }

  describe() {
    console.log('Departamento de TI - ID: ' + this.id);
  }
}

class contabilidadeDepatamento extends Departamento {
  private lastReport: string;
  private static instance: contabilidadeDepatamento;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('Not report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Por favor, passe um valor válido!');
    }
    this.addReport(value)
  } 

  private constructor(id: string, private reports: string[]) {
    super(id, 'contabilidade')
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (contabilidadeDepatamento.instance) {
      return this.instance
    }
    this.instance = new contabilidadeDepatamento('d2', []);
    return this.instance; 
  }

  describe() {
    console.log('Departamento de Contabilidade - ID: ' + this.id)
  }

  addEmployees(name: string): void {
    if (name === 'Leonardo') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Departamento.createEmployee('Leonardo');
console.log(employee1, Departamento.fiscalYear);

const ti = new TIDepartamento('d1', ['Leonardo']);

ti.addEmployees('Leonardo');
ti.addEmployees('Elisa');

//ti.employees[2] = 'Caio';

ti.describe();
ti.employeesInformation();

console.log(ti);

//const contabilidade = new contabilidadeDepatamento('d2', []);
const contabilidade = contabilidadeDepatamento.getInstance();
console.log(contabilidade);

contabilidade.mostRecentReport = 'Leonardo Peron Krause vai ser RICO!'; 
contabilidade.addReport('Algo está errado!');
console.log(contabilidade.mostRecentReport);

contabilidade.addEmployees('Leonardo');
contabilidade.addEmployees('Elisa');

//contabilidade.printReport();
//contabilidade.employeesInformation();
contabilidade.describe();