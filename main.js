
// // person adli class qurun ad ve yas verin. daha sonra bu yaslarin cemini hesablayan funksiya qurun
// // Həll formasi-1
// class Person {
//     constructor(name, age) {
//       this.name = name
//       this.age = age
//     }
//   }
  
//   function giveTotalAge(people) {
//     return people.reduce((total, person) => total + person.age, 0)
//   }
  

//   const person1 = new Person('zeynal', 25);
//   const person2 = new Person('kamil', 30);
//   const person3 = new Person('veli', 35);
  
//   const people = [person1, person2, person3]
//   const totalAge = giveTotalAge(people);
  
//   console.log('Yaşlar cəmi:', totalAge)
  


// // Həll formasi-2

  
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
// static sumAges(...data){
//     return data.reduce((sum,item)=>sum+item.age,0)
// }
// static reverseName(...data){
//   return data.map((item)=>item.name.split('').reverse().join(''))
// }
//   }
// const person1=new Person('kamil',20)
// const person2 =new Person('akif',30)
// console.log(Person.sumAges(person1,person2));
// console.log(Person.reverseName(person1,person2));





  