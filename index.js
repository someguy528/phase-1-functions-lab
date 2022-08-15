// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance>42){return distance - 42}
    return 42 - distance
};
function distanceFromHqInFeet(distance){
    return (distanceFromHqInBlocks(distance))*264
};
function distanceTravelledInFeet(start, end){
    if (start>end){return (start-end)*264}
    return (end-start)*264
};
function calculatesFarePrice(start, end){
    let dis=distanceTravelledInFeet(start,end)
    if (dis<400){return 0}
    else if(dis>400&&dis<2000){return (dis-400)*0.02}
    else if(dis>2000&&dis<2500){return 25}
    else return "cannot travel that far"
}