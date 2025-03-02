/*const names: Array<string> = [];
names[0].split(' ');

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})*/


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Leo', hobbies: ['Sports']}, {age: 22});
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText];
}

console.log(countAndPrint(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
    return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Leo');
textStorage.addItem('Elisa');
textStorage.removeItem('Leo');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

/*const objStorage = new DataStorage<object>();
const maxObj = {name: 'Leo'};
objStorage.addItem(maxObj);
objStorage.addItem({name: 'Elisa'});
// ...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());*/

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}
