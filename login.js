function logar(){
    var login = document.getElementById('login').value; 
    var senha = document.getElementById('senha').value;

    
    if(login == "marcos" && senha == "080905"){
        location.href = "index.html";
    }else{
        alert('usuario ou senha incorretos');
    }
}
