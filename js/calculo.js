    
           //0,1,2,3,4 = 5 //length
    var a = [1,3,6,9,3];
    var tamanhoLista = a.length;
    var numeroRepetido;

    
    
    for(var i=0; i < tamanhoLista; i++){
        
        var x = a[i];
        
        for(var k=0; k < tamanhoLista; k++){
            
           if(k != i){
                var y = a[k];
            
                if(x == y){
                     numeroRepetido = a[k];
                }
            }
        }
       
    }
    alert(numeroRepetido);
    

