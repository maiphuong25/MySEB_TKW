

let M = [1, 2, 3, 4, 5];
let TinhTong = (M) => {
    let sum = 0;
    for (let i = 0; i < M.length; i++) { 
        sum += M[i]; 
    }
    return sum;
}
console.log(TinhTong(M));
