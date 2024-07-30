var name="chiya"
name="jamwal"
console.log(name)//can be redeclared and updated

let name1="chiya"
name1="jamwal"
console.log(name1)

// let name1="chiya" cannot do this as it is already declared......but can be updated
//constant cannot be redeclared or updated


//Object
const obj={
    "name":"Chiya",
    "isLive":true
}
//object const h fir b chnge hora h.....bcoz it is non primitive=> array and object are non primitive in this const is not fixed.....it is fixed in primitive datatype
console.log(obj)
console.log(obj["name"])
obj["name"]="kanika"
console.log(obj["name"])


//array
const arr=["chiya","kanika",19,21]
console.log(arr)
console.log(arr[1])


