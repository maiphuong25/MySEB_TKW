let TimSo = (M) =>{ 
    M.sort((a, b) => a - b); 
    let dodai = M.lenght;
    return M[dodai-2];
}