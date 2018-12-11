const fila = []
        const jaChamado = []
        let i = 0
        let text = ""
        const senhasChamadas = document.getElementById("senhasChamadas")
        const proximos = document.getElementById("pSenhas")
        const geraSenha = document.getElementById("geraSenha")
        const chamaSenha = document.getElementById("chamaSenha")
        const chamados = document.getElementById("chamados")
        
        // Mostra os proximos a serem chamados
        const proximosChamados = (vetor,index) => {
             let item_number = index + 1
             let item_2 = index + 2
             let item_3 = index + 3 
             text = "<li>" + item_number  + "</li>" + "<li>" + item_2 + "</li>" + "<li>" + item_3 + "</li>"
             proximos.innerHTML = text
             if (isNaN(index)){
                 proximos.innerHTML = 'Acabou as senhas'
             }
        }
        // imprime as senhas chamadas 
        const imprimeSenhasChamadas = (vetor) => {
            if (vetor.length > 3) {
                vetor.shift()
               chamados.innerHTML = vetor[0] + vetor[1] + vetor[2]
           }else {
               if(vetor[1] === undefined) {
                chamados.innerHTML = vetor[0]
               }else if (vetor[2] === undefined){
               chamados.innerHTML = vetor[0] + vetor[1] 

               }else {
                   chamados.innerHTML = vetor[0] + vetor[1] + vetor[2]
               }

           }

        }
        

        // Botão que gera as senhas 
        geraSenha.onclick  = () => {
            i++
            fila.push(i)
            senhasChamadas.innerHTML = `Senha gerada : <span class="senhas">${i}<span>`
            
            console.log(fila)
        }
        
        // Botão que chama as senhas 
        chamaSenha.onclick  = () => {
           let chamada = fila.shift()
           if (fila.length === 0){
              senhasChamadas.innerHTML = 'Acabou as senhas.'

           }else {
               senhasChamadas.innerHTML = `Senha chamada : <span class ="senhas">${chamada} </span>`
               jaChamado.push("<li>"+chamada+"</li>")
           }
         
           imprimeSenhasChamadas(jaChamado)
           console.log(jaChamado)
           proximosChamados(fila,chamada)
          
        }