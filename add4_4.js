/*  
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, 
  имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

function countTotalSalary(salaries){
  let summ=0;
  for(const key in salaries){
    summ+=salaries[key]
  }
  return summ;
}

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  
  