const transactions = [
{ id : 1 , type: "deposit" , amount : 1000 },
{ id : 2 , type: "withdraw" , amount : 200 },
{ id : 3 , type: "deposit" , amount : 500 },
{ id : 4 , type: "withdraw" , amount : 100 }
];
 
function totalDiposit(){
    var t = 0
    transactions.forEach(transaction => {
       if( transaction.type === "deposit" ) {
        t += transaction.amount
       }
    })
    return t
}
function totalWithDrawals(){
    var t = 0
    transactions.forEach(transaction => {
       if( transaction.type === "withdraw" ) {
        t += transaction.amount
       }
    })
    return t
}
function FinalBalance(){

    var totalDiposit = totalDiposit()
    var totalWithDrawals = totalWithDrawals()
    var FinalBalance = totalDiposit - totalWithDrawals
    return FinalBalance
}
function LargestTransaction(){
    
     var amounts = transactions.map(transaction => { transaction.amount })
     var maxAmount = Math.max(...amounts)
     var t = transactions.find(transaction => transaction.amount === maxAmount)
    return t
}
function AllwithDrawals(){
    var t = transactions.filter(transaction => transaction.type === "withdraw")
    return t
}
function prenentWithdrawals(NewTransactionAmount){ // parametre zdtu krmel l Add function
    var AllwithDrawals = AllwithDrawals()
    var ArrayWithDrawals = AllwithDrawals.unshift(NewTransactionAmount)
    var FinalBalance = FinalBalance()
    for ( var i = 0 ; i < ArrayWithDrawals.length ; i++){
        if ( ArrayWithDrawals[i] <= FinalBalance ) return true
        return false
    }
}
function genrateId() {
    if (products.length === 0)
        return 1
    
    let ids = products.map((product) => product.id)
    return Math.max(...ids) + 1
}

function AddTransaction(transactionType , transactionAmount){
    var x = prenentWithdrawals(transactionAmount)
    var genrateId = genrateId()
    if ( transactionType === "withdraw" && !x){
          return console.log("the withdrawal amount exceeds the current balance")
        } 
    else if ( transactionType === "deposit" || (transactionType === " withdraw" && x)){
            transactions.push( {
             id : genrateId ,
             type :transactionType,
             amount : transactionAmount
                 })

            }
            else return console.log("the addition failed")
}