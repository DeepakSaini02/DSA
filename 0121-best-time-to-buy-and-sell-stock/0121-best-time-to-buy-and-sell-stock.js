/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min=prices[0]
  let pt=0;
  
  for(let i=1;i<prices.length;i++){
      if(min>prices[i])
      min=prices[i]
      else{
          if(prices[i]-min>pt)
          pt=prices[i]-min
      }
  }
  return pt

};