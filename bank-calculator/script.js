function ready() {
    
    $("#calc2").slideUp();
    
}

document.addEventListener("DOMContentLoaded", ready);



function firstFunc(obj1,obj2) {
    $("#calc2").slideUp();
    obj1.elements[1].value = 16;
    obj2.elements[0].value = 30;
    $("input[name=percent]").attr("readonly", true);
    
    $("input[name=fistPaymentPerc]").attr("readonly", true);
}

function secondFunc(obj1, obj2) {
    $("#calc2").slideUp();
    obj1.elements[1].value = 25;
    obj2.elements[0].value = 50;
    $("input[name=percent]").attr("readonly", true);

    $("input[name=fistPaymentPerc]").attr("readonly", true);
}

function thirdFunc(obj1, obj2) {

    $("#calc2").slideUp();
    obj1.elements[1].value = 23;
    obj2.elements[0].value = 25;
    $("input[name=percent]").attr("readonly", true);

    $("input[name=fistPaymentPerc]").attr("readonly", true);
}

function mainFunc(obj1, obj2) {
    $("#calc2").slideUp();
    obj1.elements[1].value = "";
    obj2.elements[0].value = "";
    $("input[name=percent]").attr("readonly", false);

    $("input[name=fistPaymentPerc]").attr("readonly", false);
}
function Calculation(obj1,obj2)
{
    
    
    var money = obj1.elements[0].value;
    var percent =obj1.elements[1].value;
    var year = obj1.elements[2].value;
    var fPerc = obj2.elements[0].value;
    if (money==''||percent==''||year=='') {
        alert("All fields must be filled");
        return
    }
    if (1 * percent > 100 || 1 * percent < 0 || 1 * fPerc > 100 || 1 * fPerc < 0) {
        alert("Percent is out of range")
        return
    }
    $("#calc2").slideDown();
    var fMoney = money * fPerc / 100;
    obj2.elements[1].value = fMoney;
    var monthPay = ((money/year) + ( (money * percent) / (year*100))) / 12;
    obj2.elements[2].value = monthPay;
}
