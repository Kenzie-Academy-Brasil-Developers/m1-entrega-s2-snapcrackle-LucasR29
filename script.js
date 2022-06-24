function prime(num){
    for(let i = 2; i < num; i++){
        if(num%i == 0 && num != 2){
            return false;
        }
    }
    return true
}

function SnapCrackle(number){
    let count = 1
    let str = ''
    let i = 2
    while(count <= number){
        if(prime(count) == true && count != 1){
            str += ' Prime, '
            count++
        }else if(count%2 != 0 && count%5 != 0){
            str += ' Snap, '
            count++
        }else if(count%2 == 0 && count%5 != 0){
            str += count + ', '
            count++
        }else if(count%5 == 0 && count%2 == 0){
            str += ' Crackle, '
            count++
        }else if(count%2 != 0 && count%5 == 0){
            str += ' SnapCrackle, '
            count++
        }      
    }
    return str.slice(0,-2)
}

console.log(SnapCrackle(30))


