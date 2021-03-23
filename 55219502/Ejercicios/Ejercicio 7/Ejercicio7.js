function closeModal(idmodal){
    document.getElementById(idmodal).classList.add('modalClosed');
}
document.getElementById('btn-cal').addEventListener('click',function(){
    document.getElementById('modalPromedio').classList.remove('modalClosed');
    let n1=document.getElementById('num1').value;
    let n2=document.getElementById('num2').value;
    let res=document.getElementById('carac');
       
    if (n1%1!=0 ){
        res.innerHTML="El numero "+n1+" no es entero";
    }else if (n2%1!=0 ){
        res.innerHTML="El numero "+n2+" no es entero";
    }else if (n1<0){
        res.innerHTML="El numero "+n1+" no es positivo";
    }else if (n2<0){
        res.innerHTML="El numero "+n2+" no es positivo";
    }else if(n1%n2==0){
       res.innerHTML="El numero "+n1+" es divisible entre "+n2;
    }else{
        res.innerHTML="El numero "+n1+" no es divisible entre "+n2;
    }     
})