function foo(a,b){return Number(a)+Number(b);}
console.log(foo(1,2));//Expected output:3
console.log(foo(1,"2"));//Expected output:3
console.log(foo("1",2));//Expected output:3
console.log(foo("1","2"));//Expected output:3