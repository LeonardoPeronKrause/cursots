**AULA 63, 64, 65**

class Departament {
    //private readonly id: string;
    //private name: string;
    private employees: string[] = [];

     constructor(private readonly id: string, public name: string) {
        this.id = id
        this.name = name;
        
     }

     describe(this: Departament) {
        console.log(`Department: (${this.id}): ${this.name}`);
     }

     addEmployee(employee: string) {
        //this.id = 'd2';
        this.employees.push(employee);
     }

     printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
     }
}

const accounting = new Departament('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

//accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();

//const accountingCopy = { name: 'DUMMY', describe :  accounting.describe};
//accountingCopy.describe();

