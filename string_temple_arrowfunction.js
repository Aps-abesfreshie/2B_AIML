// let firstname="Abhay";
// let lastname="Pratap singh";

// console.log("My Firstname is"+firstname)
// console.log("My Last is"+lastname)
// console.log(`Myfirstname is: ${firstname}`)
// console.log(`My lastname is: ${lastname}`)
// console.log(`my name is:${firstname} ${lastname}`);

function fullname(first,last){
    return `${first}${last}`
}

let name=`hello ${fullname("Abhay","Pratap Singh")}`
console.log(name);


hello=()=>{console.log("Hello Abhay")}

hello();



physics=(marks)=>  `${marks}`;

pattern=(n)=>{for(let i=0;i<n;i++){  
               let row="";
                for(let j=0;j<=i;j++){
                 row+="* ";
                 
                }
                console.log(row)
            }
}
pattern(3);
