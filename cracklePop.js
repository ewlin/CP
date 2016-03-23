function range (stop, start = 0, step = 1) {
    let range = [],
        currentVal = start;
    
    if (!stop) throw new Error('range must include a stop value!');
    
    while (currentVal < stop) {
        range.push(currentVal);
        currentVal += step;
    }
    
    return range; 
}

function cracklePop() {
    range(101,1).forEach(function(num){
        
        let output = ""; 
        
        if (num % 3 == 0) {
            output += 'Crackle'; 
        }
        
        if (num % 5 == 0) {
            output += 'Pop';  
        } else if (!output) {
            output = num; 
        }
        
        console.log(output); 
    });
}

cracklePop(); 