var optiont = document.getElementById("optiont");

//plaintext
var txtPlaintext = document.getElementById("txtPlaintext");
//phone number
var txtPhoneCall = document.getElementById("txtPhoneCall");
//message
var txtPhoneMessage = document.getElementById("txtPhoneMessage");
var txtMessage = document.getElementById("txtMessage");
//Email
var txtSentEmailTo = document.getElementById("txtSentEmailTo");
var txtSubject = document.getElementById("txtSubject");
var txtBody = document.getElementById("txtBody");
//wifi
var txtSSID = document.getElementById("txtSSID");
var txtWifiPass = document.getElementById("txtWifiPass");
//Package
var txtPackage = document.getElementById("txtPackage");
//
var txtURL = document.getElementById("txtURL");


document.getElementById('btnGQR').onclick = function () {
    if(optiont.value == 0){
        alert("Xin vui lòng chọn kiểu QR");
    }else if (optiont.value == 1) {
        if(txtPlaintext.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + document.getElementById("txtPlaintext").value; // done

        }
    } else if (optiont.value == 2) {
        if(txtPhoneCall.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" +"tel:"+ document.getElementById("txtPhoneCall").value;  //done check phone

        }
    } else if (optiont.value == 3) {
        if(txtSentEmailTo == "" || txtSubject.value == "" || txtBody.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + "MATMSG:TO:" +txtSentEmailTo.value +";SUB:" + txtSubject.value + ";BODY:"+ txtBody.value +";;" ;

        }
    } else if (optiont.value == 4) {
        if(txtURL.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + txtURL.value  ;// check para web

        }
    } else if (optiont.value == 5) {
        if(txtSSID.value == "" || txtWifiPass.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + "WIFI:T:WPA;S:" + txtSSID.value +";P:" + txtWifiPass.value +";H:false;;" ;

        }
    } else if (optiont.value == 6) {
        if(txtPhoneMessage.value == ""|| txtMessage.value ==""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + "SMSTO:" + txtPhoneMessage.value +":" +txtMessage.value  ;
    
        }
    } else if (optiont.value == 7) {
        if(txtPackage.value == ""){
            alert("Xin vui lòng không để trống!");
        }else{
            document.getElementById("imgQR").src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" +"https://play.google.com/store/apps/details?id="+ txtPackage.value ;
     
        }
    }
    console.log(optiont.value);
};


function show(){
    if(optiont.value == 0){
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
            
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";
    
        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";
    
        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";
    
        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    }else if (optiont.value == 1) {
        txtPlaintext.style.display = "block";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    } else if (optiont.value == 2) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "block";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    } else if (optiont.value == 3) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "block";
        txtSubject.style.display = "block";
        txtBody.style.display = "block";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    } else if (optiont.value == 4) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "none";
        txtURL.style.display ="block";
    } else if (optiont.value == 5) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "block";
        txtWifiPass.style.display = "block";

        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    } else if (optiont.value == 6) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "block";
        txtMessage.style.display = "block";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "none";
        txtURL.style.display ="none";
    } else if (optiont.value == 7) {
        txtPlaintext.style.display = "none";

        txtPhoneCall.style.display = "none";
        
        txtPhoneMessage.style.display = "none";
        txtMessage.style.display = "none";

        txtSentEmailTo.style.display = "none";
        txtSubject.style.display = "none";
        txtBody.style.display = "none";

        txtSSID.style.display = "none";
        txtWifiPass.style.display = "none";

        txtPackage.style.display = "block";
        txtURL.style.display ="none";
    }  
    console.log(optiont.value);
}

optiont.onchange=show;

    txtPlaintext.style.display = "block";

    txtPhoneCall.style.display = "none";
        
    txtPhoneMessage.style.display = "none";
    txtMessage.style.display = "none";

    txtSentEmailTo.style.display = "none";
    txtSubject.style.display = "none";
    txtBody.style.display = "none";

    txtSSID.style.display = "none";
    txtWifiPass.style.display = "none";

    txtPackage.style.display = "none";
    txtURL.style.display ="none";

/* <option selected>Chọn kiểu QR</option>
<option value="1" selected>Text</option>
<option value="2">Điện thoại</option>
<option value="3">Gửi mail</option>
<option value="4">URL</option>
<option value="5">Wifi</option>
<option value="6">Gửi tin nhắn</option>
<option value="7">Share app CHplay</option>
 */