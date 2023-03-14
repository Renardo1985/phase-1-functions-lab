function distanceFromHqInBlocks(location){
// let location = "50th Street"
//console.log(parseInt(`${location.slice(0,2)}`))
//if (location > 42){return location - 42}
//else if (location <= 42){return 42 - location}
return (Math.abs(location - 42));
}

function distanceFromHqInFeet(location){
    return (distanceFromHqInBlocks(location)*264);
}

function distanceTravelledInFeet(num1,num2){
    return (Math.abs(num1-num2)*264)
}

function calculatesFarePrice(start,destination){

    const distance = distanceTravelledInFeet(start,destination)
    if (distance<400){return 0;}
    else if (distance<2000) {return ((distance-400)*.02);}
    else if (distance<2500) {return 25;}
    else  return "cannot travel that far";
}

calculatesFarePrice(50,58);
