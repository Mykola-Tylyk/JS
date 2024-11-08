let time = +prompt('enter minutes 0-59');
if (time >= 0 && time <= 14) {
    console.log('1 quarter of an hour');
}else if (time >= 15 && time <= 29) {
    console.log('2 quarter of an hour');
}else if (time >= 30 && time <= 44) {
    console.log('3 quarter of an hour');
}else if (time >= 45 && time <= 59) {
    console.log('4 quarter of an hour');
}else {
    console.log(false);
}