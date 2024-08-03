var pw=0
function registration(){
    var uiid=document.getElementById('txt');
    var pss=document.getElementById('pass');
    var phnn=document.getElementById('ph');
    var agg=document.getElementById('ag');
    if(uiid.value==""|| pss.value==""||phnn.value==""||agg.value==""){
        alert("all requirement is nesesory to fill");
        return false;
    }
    else{
        return true;
    }
}
function uvalidate(){
    let uiid=document.getElementById('uid');
    if(uiid.value==""){
        document.getElementsById('txt').innerHTML="can't be blank";
        return false;
    }
    else if(uiid.value.length<3){
        document.getElementsById('txt').innerHTML="more than 2 charactor"
        return false;
    }
    else{
        document.getElementById('txt').innerHTML="good";
        return true;
    }
}
    // function pvalidate(){
    //     let pss=document.getElementById('pass');
    //     if (pss.value==""){
    //         document.getElementById('error')
    //     }
    // }
