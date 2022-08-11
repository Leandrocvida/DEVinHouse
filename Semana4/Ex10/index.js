let data = document.getElementById("data")
let img = document.getElementById('img')
let textoEstacao = document.getElementById("textoEstacao")

let atualizaEstacao = ({texto, url}) => {
    img.src = url;
    textoEstacao.innerText = texto; 
}

function verificaEstacao(event) {
    const dataFormatada = new Date(`${event.target.value} 00:00`)
    const dayOfYear = dataFormatada =>
    Math.floor((dataFormatada - new Date(dataFormatada.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    dataTotal = dayOfYear(dataFormatada);
    
    // intervalo datas  outono 81-172 inverno 173-263 primavera 264-355 verao 356-80
    

if (dataTotal >= 81 && dataTotal <= 172) {
    atualizaEstacao({texto:"Outono", url:"./Assets/Outono-Principal.jpg"})
    return
}
if (dataTotal >= 173 && dataTotal <= 263) {
    atualizaEstacao({texto:"Inverno", url:"./Assets/inverno-datas-e-caracteristicas.jpg"})
    return
}
if (dataTotal >= 264 && dataTotal <= 355) {
    atualizaEstacao({texto:"Primavera", url:"./Assets/Webp.net-resizeimage-1.jpg"})
    return
}
else{
 atualizaEstacao({texto:"Verão", url:"./Assets/quando-comeca-o-verao.png"})
}
}
data.onchange = verificaEstacao;