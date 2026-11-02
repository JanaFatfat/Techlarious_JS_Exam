const products =[
    {id:1,name:"laptop",price:1200,stock:3 },
    {id:2,name:"mouse",price:25,stock:10 },
    {id:3,name:"headset",price:100,stock:5 }
];
let cart = []

function AddProduct(productName){
    var p = products.find(product => product.name === productName);
    const quantity = quantity(productName)
  if(p && quantity <= p.stock){
    cart.push(p)
    exist(productName)
  }
  else console.log(`product dosnt exist or reached the max for  ${productName}`)

}
function quantity(productName){
    var count = 0
    
  for (i = 0; i < cart.length ; i++){
    if(cart[i].name === productName){
       count++
    }
  }
  return count 
}
function exist (productName){
    const quantity = quantity(productName)
    var p = cart.find(product => product.name === productName);
    if (p && quantity <= p.stock)
        return quantity +1
}
function remove (productName){
  var p = cart.find(product => product.name === productName);
  cart.filter(p)
}
function subTotal (){
    var sum = 0
    products.forEach(product => {
      sum = sum + (product.price * quantity(product.name))
    })
    return sum
}
function discount(){
    var total = subTotal()
    var TotalAfterDiscount = 0
    if (total >1000){
      TotalAfterDiscount = total * 0.9
    }
    else { TotalAfterDiscount = total}
    return TotalAfterDiscount
}
function tax(){
    var discountTotal = discount()
    var finalTotal = discountTotal * 1.11
    return finalTotal
}
function chekoutSummary(){
    var subTotal = subTotal()
    var AfterDiscount = discount()
    var AfterTax = tax()
    
    return {
        items : cart ,
        subTotal : subTotal,
        TotalAfterDiscount : AfterDiscount,
        TotalAfterTax : AfterTax
    }
}
