
const n=5

/** output: 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
**/
for(let i=0;i<n;i++){
    let str=''
    for(let j=0;j<n;j++){
        str+='*'
        if(j!=n)
        str+=' '
    }
    console.log(str);
}

/** output: 
*
* *
* * *
* * * *
* * * * *
**/

for(let i=0;i<n;i++){
    let str=''
    for(let j=0;j<i+1;j++){
        str+='*'
        if(j!=n)
        str+=' '
    }
    console.log(str);
}

/** output: 
* * * * * 
* * * * 
* * * 
* * 
* 
**/

for(let i=0;i<n;i++){
    let str=''
    for(let j=0;j<n-i;j++){
        str+='*'
        if(j!=n)
        str+=' '
    }
    console.log(str);
}


/**
 output:
    *
   ***
  *****
 *******
*********

 **/


for(let i=0;i<n;i++){
    let str=''
    for(let j=0;j<n-i-1;j++){
        str+=" "
    }
    for(let k=0;k<(2*i)+1;k++){
        str+='*'
    }
    console.log(str);
}
