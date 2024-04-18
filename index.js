let doWhileLoop = (isTrue)=>{
    let = condition = isTrue;
    let count = 1;
    do{
        console.log('do while loop iteration: ' + count + ' times');
       if(count == 5){
        condition = !isTrue;
       }
       count++;
    }while(condition) 
    return count;
}
let whileLoop = (counter, isTrue)=>{
    let count = counter;
    let condition = isTrue;
    while(condition){
        console.log('while loop iteration: ' + count + ' times');
        if(count % 5 == 0){
            if(count !== counter){
                condition = !isTrue;
            }
        }
        count++; 
    }
    return count;
}
let forLoop = (startCount, endCount)=>{
    let count = 0;   
    for(count = startCount; count < endCount; count++){ 
        if(count % 2 == 0){
            continue;
        }
        else if( count % 2 == 1){
            console.log('iteration is FUN!!');
        }
        console.log('for loop iteration: ' + count + ' times');
    }
    return count;
}

let forEachLoop = (a, b, c, d, e) =>{
    let elements = [
        a, b, c, d, e
    ]
    elements.forEach(item =>{
        console.log(item)
    })
    return elements;
}

doWhileLoop(true);
console.log();
whileLoop(1, true);
console.log();
forLoop(1, 11);
console.log();
forEachLoop('Hello', 'World', 'Looping', 'is', 'fun!!!');