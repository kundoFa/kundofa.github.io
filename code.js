const formAction = document.getElementById("form_control")
const visorRes = document.getElementById("resHTML")
function encriptar (texto){
	var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	visorRes.innerHTML = textoCifrado
}
function desencriptar (texto){
	var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	visorRes.innerText = textoCifrado;
}
const criptadorTexto = (txx,val) =>{
	if(val == "en"){
		encriptar(txx)
	}
	else if (val == "des"){
		desencriptar(txx)
	}
	
}
const veri = (en,des)=>{
	if(en.checked){
		return "en"
	}
	else if (des.checked){
		return "des"
	}
}

formAction.addEventListener("submit",(e)=>{
	e.preventDefault();
	const valTextArea = e.target[0].value;

	

	criptadorTexto(valTextArea,veri(e.target[2],e.target[1]))
    
    

})
/* criptadorTexto() */
