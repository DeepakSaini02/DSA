/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=matrix.length
    let n=matrix[0].length
    let ind=[]
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==0)
                ind.push([i,j])
        }
    }
    if(ind.length==0)
    return matrix

    for(let i=0;i<ind.length;i++){
        let [r,c]=ind[i]

        for(let j=0;j<n;j++){
            matrix[r][j]=0
        }

        for(let k=0;k<m;k++)
        matrix[k][c]=0
    }
    return matrix
};