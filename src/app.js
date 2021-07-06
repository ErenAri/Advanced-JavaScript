let student = {id:1, name:"Eren"}
console.log(student);

function Save(puan=10,ogrenci) {
    console.log(ogrenci.name+" : "+puan)
}
Save(undefined,student);

let students = ["Engin Demiroğ", "Elon Musk", "Richard Branson"]

let students2 = [student,{id:2, name:"Eren"},"Kayseri",{city:"İstanbul"}]
console.log(students2)

let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

// showProducts(10,"abc","abcd","abcde")
// console.log(Math.max([1,5,7,9,100,200]))
let points = [1,5,7,9,100,200]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H ")

let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"beverages"}
console.log(category.id)
console.log(category["name"])

let{id,name} = category
console.log(id)
console.log(name);