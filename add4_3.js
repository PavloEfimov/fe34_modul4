/*  
  Напишите функцию countOwnProps(obj),
  считающую кол-во сообственных свойств в объекте.
  Функция возвращает количество свойств.
*/

    function countOwnProps(obj){
        let counter = 0;
        for(let key in obj){
            // if(obj.hasOwnProperty(key)){
                counter+=1
            // }
        }
        return counter
    }

// Вызовы функции для проверки
console.log(
    countOwnProps({})
  ); // 0
  
  console.log(
    countOwnProps({a: 1, b: 3, c: 'hello'})
  ); // 3