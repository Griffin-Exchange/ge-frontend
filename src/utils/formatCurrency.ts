const formatMoney = (amount: any) => {
  try {
    console.log('amount', amount)
    let decimalCount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: 2,
    })
    return amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  } catch (e) {
    console.log(e)
  }
}

export default formatMoney
