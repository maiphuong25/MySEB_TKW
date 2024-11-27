let year = 2024;
if( year % 4 == 0){
    if(year % 100 != 0){
        console.log( year + ' la nam nhuan')
    }
}
else if(year % 400 == 0){
    console.log(year + ' la nam nhuan')
}
else{
    console.log(year + ' khong la nam nhuan')
}