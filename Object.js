// object Methods

let person={
    firstName:"jhon",
    lastName:"Boho",
    dob:"9-09",
    fullName:function(){
        return `${this.firstName}  ${this.lastName}`; 
    }

}
console.log(person.fullName())

var val;
let today=new Date();
val=today.toString();

val=today.getFullYear()

console.log(val)