// Well of Ideas - Easy Version

// DESCRIPTION:
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  

  
  
    let newx = x.filter(item=> item =='good').length
    if(newx == 0) {return 'Fail!'}
    else if (newx <= 2){return 'Publish!'}
    else return 'I smell a series!' 
  }
  
  well(['bad', 'bad', 'bad'], 'Fail!');