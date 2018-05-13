/*  
  Напишите функцию getAllPropValues(prop), 
  которая берет массив объектов и 
  возвращает массив значений определенного поля prop
*/

function getAllPropValues(prop){
    let resArr=[];
    for(const user of users){
        if(user.hasOwnProperty(prop)){
        resArr.push(user[prop])
    }
    }
    return resArr;
}

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  
  // Вызовы функции для проверки
  console.log(
    getAllPropValues('name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues('mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues('active')
  ); // []