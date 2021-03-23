

    function validarDato(){
        var dato = document.getElementById('txtDato').value;
        //let letras = "Q,W,E,R,T,Y,U,I,O,Ñ,L,K,J,H,G,F,D,S,A,Z,X,C,V,B,N,M,q,w,e,r,t,y,u,i,o,p,ñ,l,k,j,h,g,f,d,s,a,z,x,c,v,b,n,m,À,È,Ì,Ò,Ù,à,è,ì,ò,ù";
        let x = "";
        //var l =  /^[A-Z][a-z]+$/;
        if(dato==""){
            x = "Usted no ingreso ningun dato"
        }else{
            if(Number(dato)){
                x = "El dato que ingreso es un número";
                 console.log(x);
                 
             }else{
                x = "El dato que ingreso es un texto";
                console.log(x);
             }

        }
        
        document.getElementById('validado').innerHTML = x;
    }