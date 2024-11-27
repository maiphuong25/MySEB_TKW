/*Tìm và in lên màn hình các số nguyên chẵn 
và đồng thời chia hết cho 5 và 7 trong dãy số từ n đến m (n<=m)
i =  n ... m
nếu i % 5 và i % 7 
    thì in i lên màn hình */

n = 1;
m = 100;

//cach 1: dung for
for (let i = n ; i <= m; i = i + 1)
    if(( i % 5 == 0) && ( i % 7 == 0))
        console.log(i)

//cach 2 : dung while
let i = n;
while (i <= m){
    if(( i % 5 == 0) && ( i % 7 == 0))
        console.log(i)
    i = i + 1 // tuong tu nhu i++ hoac i+=1
    
}

//cach 3: do... while
i = n
do{
    if(( i % 5 == 0) && ( i % 7 == 0))
        console.log(i)
    i++
}
while (i <= m)

