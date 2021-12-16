function checkLengthnombre(){
    var nombre = document.getElementById("validationCustom01");
    if(nombre.value.length < 3){
        alert("El campo debe tener más de 2 caracteres");
    }   
}

function checkLengthapellido(){
    var apellido = document.getElementById("validationCustom02");
    if(apellido.value.length < 3){
        alert("El campo debe tener más de 2 caracteres");
    }   
}

function checkLengthusuario(){
    var usuario = document.getElementById("validationCustom06");
    if(usuario.value.length > 10){
        alert("El campo solo puede tener hasta 10 caracteres");
    }   
}

function calcularFecha(fecha, dias){
    var d = document.getElementById("demo")
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

 // var d = new Date();
//console.log(calcularFecha(d, +10));
//var d= new Date();
//var nvaFecha= calcularFecha(d,+10);

function mostrarDatos () {
    const nombre2=document.getElementById("nombre2")
    const apellido2=document.getElementById("apellido2")
    const usuario2=document.getElementById("usuario2")
    const contraseña2=document.getElementById("contraseña2")


    new URL (location.href).searchParams.get('nombre', 'apellido' ,'usuario', 'contraseña')
    const params = new URL (location.href).searchParams
    const nombre = params.get('nombre')
    const apellido = params.get('apellido')
    const usuario = params.get('usuario')
    const contraseña = params.get('contraseña')

    nombre2.innerHTML= `Tu nombre es ${nombre}`
    apellido2.innerHTML= `Tu apellido es ${apellido}`
    usuario2.innerHTML= `Tu usuario es ${usuario}`
    contraseña2.innerHTML= `Tu contraseña es ${contraseña}`

}