//Cusmtomer Information
let cName = document.getElementById('customerName');
let phone = document.getElementById('customerPhone');
let cardNumber = document.getElementById('customerCardNumber');
let cardExpiryMonth = document.getElementById('customerCardExpiryMonth');
let cardExpiryYear = document.getElementById('customerCardExpiryYear');

//Item Information
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');

let item1Text = document.getElementById('item1TextName')
let item2Text = document.getElementById('item2TextName')
let item3Text = document.getElementById('item3TextName')
let item4Text = document.getElementById('item4TextName')
let item5Text = document.getElementById('item5TextName')
//item Price
let item1Price = 300;
let item2Price = 200;
let item3Price = 5;
let item4Price = 50;
let item5Price = 30;

//submit
 let checkout = document.getElementById('checkout')

//errorHandeling
let error = document.getElementById('error')

//receipt Interface

let receiptData = document.getElementById('receiptInforormation')
let arr = [];

//Cardnumber formating
function formats(ele,e){
    if(ele.value.length<19){
      ele.value= ele.value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      return true;
    }else{
      return false;
    }
  }
  
  function numberValidation(e){
    e.target.value = e.target.value.replace(/[^\d ]/g,'');
    return false;
  }

 checkout.addEventListener('submit', (event) => {
    event.preventDefault();

    //Form Validation
    if(cName.value.trim() === "" || phone.value.trim() === ''){
        error.innerHTML = `<center>Please Enter Name and Phone Number</center>`
    }else  if(isNaN(phone.value) || phone.value.length !== 10){
        error.innerHTML = `<center>Please Enter a Valid Phone Number</center>`
    }else if (isNaN(cardExpiryMonth.value) || cardExpiryMonth.value.length !== 2){
        error.innerHTML = `<center>Please Enter a Valid Card Expiry Month</center>`
    }else if (isNaN(cardExpiryYear.value) || cardExpiryYear.value.length !== 4){
        error.innerHTML = `<center>Please Enter a Valid Card Exiry Year</center>`
    }else{  //The Core Logic for Receipt handleing  
        error.innerHTML = ``
        arr = [];
        let finalPrice1 = item1.value*item1Price
        let finalPrice2 = item2.value*item2Price
        let finalPrice3 = item3.value*item3Price
        let finalPrice4 = item4.value*item4Price
        let finalPrice5 = item5.value*item5Price
        let subTotal = 0;

        // To Generated Selected Items on Receipt creating an array
        if(item1.value.trim() !== ""){
            
            arr.push({
                text :item1Text.textContent,
                quanity: item1.value,
                unitPrice: item1Price,
                totalPrice: finalPrice1
            })

        }if(item2.value.trim() !== ""){
            arr.push({text :item2Text.textContent,quanity: item2.value,unitPrice: item2Price,totalPrice: finalPrice2})
        }if(item3.value.trim() !== ""){
            arr.push({text :item3Text.textContent,quanity: item3.value,unitPrice: item3Price,totalPrice: finalPrice3})
        }if(item4.value.trim() !== ""){
            arr.push({text :item4Text.textContent,quanity: item4.value,unitPrice: item4Price,totalPrice: finalPrice4})
        }if(item5.value.trim() !== ""){
            arr.push({text :item5Text.textContent,quanity: item5.value,unitPrice: item5Price,totalPrice: finalPrice5})
        }
        console.log(arr)
        let unitDisplay = arr?.map((dataItem) => {
            subTotal +=dataItem.totalPrice;
            console.log(subTotal)
            return `
            <tr>
                <td>${dataItem.text}</td>
                <td>${dataItem.quanity}</td>
                <td>$${dataItem.unitPrice}</td>
                <td>$${dataItem.totalPrice}</td>
            </tr>
        `;

          });
      
        let gst = (subTotal * 13)/100;
        let grandTotal = subTotal + gst;

        receiptData.innerHTML = `
        <table border="1" cellpadding = '10px'>
        <tr>
            <th colspan="4">Thank you for shopping with Kit Store</th>
        </tr>
        <tr>
            <td><b>Name</td>
            <td>${cName.value}</td>
        </tr>
        <tr>
            <td><b>Phone</td>
            <td>${phone.value}</td>
        </tr>
    </table>
    <br>
    <table border="1" id="tableText" cellpadding = '5px'>
    <tr>
    <th>Item</th>
    <th>Quantity</th>
    <th>Unit Price</th>
    <th>Total Price</th>
</tr>

    ${unitDisplay}

    <tr>
    <td colspan="3" >Sub Total</td>
    <td>$${subTotal}</td>
</tr>
<tr>
    <td colspan="3" >GST</td>
    <td >$${gst}</td>
</tr>
<tr>
    <th colspan="3" >Total</th>
    <th >$${Math.floor(grandTotal)}</th>
</tr>
    </table>
        `
    }

   
});