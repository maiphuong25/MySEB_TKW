let TimSo = (M) => {
    if (M.length < 2) {
        return "Mang khong co so lon thu 2";
    }
    M.sort((a, b) => a - b); 
    return M[M.length - 2]; 
}

let M = [10, 5, 8, 12, 15, 7];
console.log(TimSo(M));
