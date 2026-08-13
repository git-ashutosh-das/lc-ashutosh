/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let combined = []// [positon, time]
    for(let i=0; i< position.length; i++){
        combined.push([position[i], ((target-position[i])/speed[i])]);
    }
    let arrivaltimes = combined.sort((a,b)=> a[0]-b[0]).map((elem)=> elem[1]);
    let fleet = 0;
    let maxtime = arrivaltimes[arrivaltimes.length-1][1];
    //console.log(arrivaltimes)
    for(let i = arrivaltimes.length-1; i>=0; i--){
        if( arrivaltimes[i] <= maxtime ){
            continue;
        }
        maxtime = arrivaltimes[i];
        fleet++;
    }
    return fleet
};