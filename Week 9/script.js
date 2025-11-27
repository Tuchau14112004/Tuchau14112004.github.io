function calculate() {
    var a = document.frmCal.txta;
    var b = document.frmCal.txtb;
    var o = document.frmCal.slto;
    var r = document.frmCal.txtr;

    // Biểu thức chính quy kiểm tra định dạng số
    var numberFormat = /^[+-]?\d+(\.\d+)?$/;

    // Kiểm tra xem a có phải là số không
    if (numberFormat.test(a.value) == false) {
        alert("a must be a number!");
        a.focus();
    }
    // Kiểm tra xem b có phải là số không
    else if (numberFormat.test(b.value) == false) {
        alert("b must be a number!");
        b.focus();
    }
    // Trường hợp phép chia hoặc chia lấy dư mà b = 0
    else if ((o.value == "/" || o.value == "%") && parseFloat(b.value) == 0) {
        alert("b can't be 0!");
        r.value = "";
        b.focus();
    }
    else {
        if(o.value == "^") {
            r.value = Math.pow(parseFloat(a.value), parseFloat(b.value));
        }  
    }
    
    // make some vadidations here ...

    // Nếu hợp lệ → thực hiện tính toán
    else {
        r.value = eval(a.value + o.value + b.value);
    }
}