function formatAddress(address:any){
  if (address) { return (`${address.slice(0, 3)}…${address.slice(38, 42)}`) }
  else {return 'Contract'}
}

export default formatAddress