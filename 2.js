function transpose (arr1){
    let column = arr1.length;
    let row = arr1[0].length;
    let result=[]
    for(let i=0;i<row;i++){
        let dalam=[]
        for(let j=0;j<column;j++){
            dalam.push(arr1[j][i])
        }
        result.push(dalam)
    }
    return result
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
