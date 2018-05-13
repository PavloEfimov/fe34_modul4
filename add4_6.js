/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
function User(name, isActive=false, age, friends){
    this.name=name;
    this.isActive=isActive;
    this.age=age;
    this.friends=friends;
    this.getUserInfo = function(){
        console.log(`User ${name} is ${age} years old and has ${friends} friends`)
    }
}
me = new User('Pavlo',true,38,2);
you = new User('Ann', false, 37, 4);
me.getUserInfo();
you.getUserInfo();