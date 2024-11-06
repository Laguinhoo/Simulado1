function mascara_cep()
        { var cep_formatado = document.getElementById("cep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }  

function mascara_telefone ()
        { var tel_formatado = document.getElementById("telefone").value
        if (tel_formatado[0]!="(")
        {
            if(tel_formatado[0]!=undefined)
            {
                document.getElementById("telefone").value="("+tel_formatado[0];
            }
        }

        if (tel_formatado[3]!=")")
        {
            if(tel_formatado[3]!=undefined)
            {
                document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
            }
        }

        if (tel_formatado[9]!="-")
        {
            if(tel_formatado[9]!=undefined)
            {
                document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
            }
        }
    }



function mascara_cpf ()
        { var cpf_formatado = document.getElementById("cpf").value
        
            if (cpf_formatado[3]!=".")
            {
                if(cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }

            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }
        }

function mascara_cnpj ()
        { var cnpj_formatado = document.getElementById("cnpj").value
        
            if (cnpj_formatado[2]!=".")
            {
                if(cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
                }
            }

            if (cnpj_formatado[6]!=".")
            {
                if(cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
                }
            }

            if (cnpj_formatado[11]!="/")
            {
                if(cnpj_formatado[11]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,11)+"/"+cnpj_formatado[11]
                }
            }

            if (cnpj_formatado[11]!="/")
            {
                if(cnpj_formatado[11]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,11)+"/"+cnpj_formatado[11]
                }
            }
        }



document.getElementsByClassName('send:after')[0].addEventListener("click", myPopupFunction);

function myPopupFunction() {
  alert('Dados enviados') }