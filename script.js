function SnapCrackle(num){
    let count = 1
    let str = ''
    while(count <= num){
        if(count%2 != 0 && count%5 != 0){
            str += ' Snap, '
            count++
        }else if(count%2 == 0 && count%5 != 0){
            str += count + ','
            count++
        }else if(count%5 == 0 && count%2 == 0){
            str += ' Crackle, '
            count++
        }else if(count%2 != 0 && count%5 == 0){
            str += ' SnapCrackle, '
            count++
        }
    }
    return str
}

console.log(SnapCrackle(15))