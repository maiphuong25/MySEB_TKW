/*Tinh va in len man hinh tong cac so nguyen chan trong day so tu 1 den n*/ 
let n = 100;
let s = 0;
// for
for (let i = 2; i <= n; i = i + 2)
    s = s + i;
    console.log(s);

//while
s = 0;
let i = 2;
while (i <= n){
    s += i;
    i += 2;
}
console.log(s);

//do... while
s = 0;
i = 2;
do{
    s += i;
    i += 2;
}
while(i <= n){
    console.log(s)
}