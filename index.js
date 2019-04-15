const myAge = () => {
  let myBirth = new Date('1990')
  let myYear = myBirth.getFullYear()
  let age = 2019 - myYear

  console.log(age);
}
myAge()


let now = new Date()
let nowYear = now.getFullYear()
let nowMonth = now.getMonth() //index0-11 ==> jan-des
let nowDate = now.getDate()
let nowDay = now.getDay() // index 0-6 starting from sunday,now = tuesday (index 2)


console.log(now);
console.log(nowYear);
console.log(nowDate);
console.log(nowMonth);
console.log(nowDay);

//date with string
// new Date(year, month, date, hours, minutes, seconds, ms)

const theDate = new Date(2015, 1, 29, 3, 0, 0, 0)
console.log(theDate); //2015-02-28T20:00:00.000Z

const strDate = new Date('2015-02-28')
console.log(strDate);


let time = new Date().getTime()
let offset = new Date().getTimezoneOffset()

console.log(time);
console.log(offset);