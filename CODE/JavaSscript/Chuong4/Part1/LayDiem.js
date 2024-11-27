// let mang = [5,1,-5,-6,21,5,6];
// let chan = [];
// let tong = 0;
// let tb = 0;
// for (let i = 0; i < 10; i++){
//     if (mang[i]%2 == 0){
//         chan.push(mang[i]);
//     }
// }
// for (let x = 0; x < chan.lenght; x++){
//     tong += chan[x];
// }
// tb = tong / chan.length;

// for (let z = 0; z < mang.length; z ++){
//     if (mang[z] == 5){
//         mang[z] = 10;
//     }
// }

// console.log(chan.length);
// console.log(tb);
// console.log(mang);

//////////////////////////////////////////////////////////////////////////////////////////////////
//Su dung arow fuction
let mang = [5, 1, -5, -6, 21, 5, 6];

const DSN = (mang) => {
    let chan = [];
    for (let i = 0; i < mang.length; i++) { 
        if (mang[i] % 2 == 0) {
            chan.push(mang[i]);
        }
    }
    console.log("Dem so nguyen chan:", chan.length);
    return chan;
}

const TBC = (chan) => {
    let tong = 0;
    for (let x = 0; x < chan.length; x++) { 
        tong += chan[x];
    }
    let tb = (chan.length > 0) ? (tong / chan.length) : 0; 
    console.log("Trung binh cong cac so nguyen chan:", tb);
}

const Thaythe = (mang) => {
    for (let z = 0; z < mang.length; z++) {
        if (mang[z] === 5) {
            mang[z] = 10;
        }
    }
    console.log("Thay doi phan tu 5 thanh 10:", mang);
}


let chan = DSN(mang);
TBC(chan); 
Thaythe(mang); 
