class Departamento {
  static fiscalYear = 2020;
  //private readonly id: string;
  //public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    //this.id = id;
    //this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  describe(this: Departamento) {
    console.log(`Departamento (${this.id}): ${this.name}`);
  }

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
}

class contabilidadeDepatamento extends Departamento {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, 'contabilidade')
    this.lastReport = reports[0];
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

const contabilidade = new contabilidadeDepatamento('d2', []);

contabilidade.mostRecentReport = 'Leonardo Peron Krause vai ser RICO!'; 
contabilidade.addReport('Algo está errado!');
console.log(contabilidade.mostRecentReport);

contabilidade.addEmployees('Leonardo');
contabilidade.addEmployees('Elisa');

contabilidade.printReport();
contabilidade.employeesInformation();