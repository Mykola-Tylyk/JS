function areaCylinder(height, radius) {
    let result = 2*Math.PI*radius*(height+radius);
    console.log(result);
    return result;
}

areaCylinder(5,3);