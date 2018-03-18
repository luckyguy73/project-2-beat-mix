// Drum Arrays
let kicks = new Array(16);
let snares = new Array(16);
let hiHats = new Array(16);
let rideCymbals = new Array(16);

fillDrumArrays([kicks, snares, hiHats, rideCymbals]);

function fillDrumArrays(drums) {
    for(let i = 0; i < drums.length; i++){
        if(drums[i] instanceof Array)
            fillDrumArrays(drums[i]);
        else
            return drums.fill(false);
    }
}

function findDrumsByStringName(drum) {
    if(drum === 'kicks')
        return kicks;
    else if(drum === 'snares')
        return snares;
    else if(drum === 'hiHats')
        return hiHats;
    else if(drum === 'rideCymbals') 
        return rideCymbals;
}

function toggleDrum(drum, index) {
    drum = findDrumsByStringName(drum);
    if(!drum || index < 0 || index > 15) 
        return;
    return drum[index] = !drum[index];
}

function clear(drum) {
    drum = findDrumsByStringName(drum);
    if(drum)
        fillDrumArrays([drum]);
}

function invert(drum) {
    let count = 0;
    while(count < kicks.length) {
        toggleDrum(drum, count);
        count++;
    }
}

function getNeighborPads(x, y, size) {
    let neighbors = [];

    if(!isGridValid(x, y, size))
        return neighbors;

    let left = isGridValid(x - 1, y, size);
    let top = isGridValid(x, y + 1, size);
    let right = isGridValid(x + 1, y, size);
    let bottom = isGridValid(x, y - 1, size);
    
    if(left)
        neighbors.push([x - 1, y]);
    if(top)
        neighbors.push([x, y + 1]);
    if(right)
        neighbors.push([x + 1, y]);
    if(bottom)
        neighbors.push([x, y - 1]);

    return neighbors;
}

function isGridValid(x, y, size) {
    return x < size && y < size && x >= 0 && y >= 0;
}
