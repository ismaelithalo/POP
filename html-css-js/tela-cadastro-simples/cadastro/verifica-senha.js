function verifica() {
    var senha2 = document.getElementById("senha2").value;
    var senha1 = document.getElementById("senha1").value;

    if (senha1 != senha2 || senha1=="" || senha2=="") {
      var txt = document.getElementsByClassName("txtSenha");
        txt[0].style.color = "red";
        txt[1].style.color = "red";
        return false;
    }
  }
