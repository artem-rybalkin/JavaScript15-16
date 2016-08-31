// --------- Класс-Родитель ------------
function human (name,age,sex,hieght,weight) {
  this.name=name;
  this.age=age;
  this.sex=sex;
  this.hieght=hieght;
  this.weight=weight;
}
// --------- Класс-потомок -----------
// Конструктор потомка1
function worker (name,age,sex,hieght,weight) {
  human.apply(this, arguments);
}
// Конструктор потомка2
function student (name,age,sex,hieght,weight) {
  human.apply(this, arguments);
}

// Унаследовать1
worker.prototype = Object.create(human.prototype);
// Унаследовать2
student.prototype = Object.create(human.prototype);
// Желательно и constructor сохранить1
worker.prototype.constructor = worker;
// Желательно и constructor сохранить2
student.prototype.constructor = student;
// Методы потомка1
worker.prototype.working = function(workPlace,salary) {
  this.workPlace = workPlace;
  this.salary = salary;
};
student.prototype.watchSerials = function(university,grants) {
  this.university = university;
  this.grants = grants;
};
// Готово, можно создавать объект1
var Worker = new worker('Anton2', 282, 'male', 170,75);
// Готово, можно создавать объект2
var Student = new student('Andrey', 20, 'male', 178, 80);
Worker.working('GridDynamics', 1000);
Student.watchSerials('KHAI',300);
console.log(Worker);
console.log(Student);





















// // function worker(name,age,sex,hieght,weight){
// //   human.apply(this,arguments);
// // }

// var worker = new human();


// worker.working = function(workPlace,salary) {
//   this.workPlace = workPlace;
//   this.salary = salary;
// };
// var worker1 = worker('Anton2', 282, 'male2', 1270,525);
// worker.working('IT', 1200);
// var student = new human('Andrey', 20, 'male', 178, 80);
// student.watchingSerials = function (grants, university) {
//   this.grants = grants;
//   this.university = university;
// };
// student.watchingSerials(200, 'KHAI');
// console.log(worker);
// // console.log(worker1);
// // console.log(student);