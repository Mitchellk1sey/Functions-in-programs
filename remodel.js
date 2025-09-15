let totalCost = 0; 

function addPaintAndSupplies(totalCost, callback) {
    let cost = parseFloat(prompt("Enter the cost for Paint & Supplie")); 
    if (cost > 200) cost = 200; 

    if (cost > 100) {
        cost *= 1.1;
    }


    document.querySelector(".paint").innerHTML = `Paint: $${cost.toFixed(2)}`;
    callback(totalCost + cost); 
    return totalCost + cost; 
}

const addFloorCoverings = function(totalCost, callback) {
    let cost = parseFloat(prompt("Enter the cost for floor coverings (max 2000): "));
    if (cost > 2000) cost = 2000; 

    if (cost < 500) {
        cost *= 0.85; 
    }
    document.querySelector(".floor").innerHTML = `floor coverings: $${cost.toFixed(2)}`;
    callback(totalCost + cost); 
    return totalCost + cost; 
};

const addFurniture = (totalCost, callback) => {
    let cost = parseFloat (prompt("Enter the cost for furniture (max 2000): "));
    if (cost > 2000) cost = 2000; 

    if (cost < 500) {
        cost *= 0.9; 
    }

    document.querySelector(".furniture").innerHTML = `furniture: $${cost.toFixed(2)}`;
    callback (totalCost + cost);
    return totalCost + Cost; 
};

const updateTotals = (cost) => {
    totalCost = cost; 
    document.querySelector(".totalCost").innerHTML = `Total: $${cost.toFixed(2)}`;
};

function startRemodel() {
    totalCost = 0; 
    totalCost = addPaintAndSupplies(totalCost, updateTotals);
    totalCost = addFloorCoverings(totalCost, updateTotals);
    totalCost = addFurniture(totalCost, updateTotals);
}

