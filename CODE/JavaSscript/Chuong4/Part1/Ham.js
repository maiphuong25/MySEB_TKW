let mang = [5,1,-5,-6,21,5,6];


DSN = (mang) => {
    let chan = [];
    for (let i = 0; i < 10; i++){
        if (mang[i]%2 == 0){
            chan.push(mang[i]);
        }
    }
    console.log(chan.length);
}
TBC = (chan) => {
    let tong = 0;
    let tb = 0;
    for (let x = 0; x < chan.lenght; x++){
        tong += chan[x];
    }
    tb = tong / chan.length;
    console.log(tb);
}
Thaythe = (mang) => {
    for (let z = 0; z < mang.length; z ++){
        if (mang[z] == 5){
            mang[z] = 10;
        }
    }
    console.log(mang);
}
DSN(mang);
TBC(chan);
Thaythe(mang);