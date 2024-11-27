const number = [3,5,7,2,8,1,4];
let max = 0;
for (i in number){
    if (number[i]> max){
        max = number[i]
    }   
}
console.log('so lon nhat la: ' + max); 