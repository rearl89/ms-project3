export function CurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${month<10?`0${month}`:`${month}`}-${date}-${year}`
}

// Code found @ https://stackoverflow.com/questions/43744312/react-js-get-current-date by user Abhinav Chandra
