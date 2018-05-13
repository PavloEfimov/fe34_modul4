/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  единственный аргумент obj - объект, и проверяет
  пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

function isObjectEmpty(obj){
    let arr = [];
    for(const key in obj){
        arr.push(obj[key])
    };
    if(arr.length>0){
        return false
    }
    return true;
}

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false