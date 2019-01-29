

// '\n'


const wrap = function(line, maxLen){
  if(line.length < maxLen){
    return line
  }
  else if(line === ''){
    return line
  }
  else{
    let wordArray = line.split(' ')
    let wordsArray = []
    let newLine = ''
    for(let i = 0; i<wordArray.length; i++){
      if(newLine.length + wordArray[i].length <= maxLen){
        newLine += wordArray[i] + ' '
      }
      else if(newLine.length + wordArray[i].length > maxLen){
        wordsArray.push(newLine)
        newLine = wordArray[i] + ' '
      }
      if(i === wordArray.length-1){
        wordsArray.push(newLine)
      }

    }
    let returnString = wordsArray.join('\n')
    return returnString;
  }

}


module.exports = wrap;

// else{
//   let returnLine = ''
//   let currentIndex = 0
//   let currentSpace = line.indexOf(' ', currentIndex)
//   let beforecurrentSpace =  0
//   let lastSpace = line.lastIndexOf(' ')
//   while(currentSpace < lastSpace){

//   if(currentSpace<maxLen){
//     beforecurrentSpace = Number(currentSpace)
//     currentIndex = currentSpace
//     currentSpace = line.indexOf(' ', currentIndex)
//   }
//   else if(currentSpace === maxLen){
//     let line1 = line.slice(0,currentSpace)
//     let line2 = line.slice(currentSpace)
//     line = line1 + '\n' + line2
//     currentIndex = currentSpace
//     currentSpace = line.indexOf(' ', currentIndex)
//   }
//   else if(currentSpace > maxLen){
//     let line1 = line.slice(0,beforecurrentSpace)
//     let line2 = line.slice(beforecurrentSpace)
//     returnLine = line1 + '\n' + line2
//     beforecurrentSpace = Number(currentSpace)
//     currentIndex = currentSpace
//     currentSpace = line.indexOf(' ', currentIndex)
//   }
// }
// return returnLine
// }
