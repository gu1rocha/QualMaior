
var labels = document.querySelectorAll("label");
var inputs = document.querySelectorAll("input");

var backParabens = document.querySelector('#backParabens')
var refresh = backParabens.querySelector('.refresh')


let arr = ["pequeno","grande","medio"]

let shuffleArray = newarr => { 
    for(let i = newarr.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [newarr[i], newarr[j]] = [newarr[j], newarr[i]];
    }
    return newarr
}

let gerarElementos = () =>{
    let classes = shuffleArray(arr);
    for(let i = 0; i < classes.length; i++){
        labels[i].classList.add(classes[i]);
        inputs[i].value = classes[i];
    }
}

gerarElementos()

refresh.addEventListener('click',()=>{
    document.querySelector("#audioComemorando").pause();
    document.querySelector("#audioComemorando").currentTime = 0;
    for(label of labels){
        label.classList.remove("pequeno");
        label.classList.remove("medio");
        label.classList.remove("grande");
        label.classList.remove("acerto");
        label.classList.remove("erro");
    }
    backParabens.removeAttribute("style")
    gerarElementos();
})

let finalizar = () =>{
    backParabens.style.display = 'flex'
}


for(input of inputs){
    let value = input.value
    input.addEventListener('click',(el)=>{
        document.querySelector("#audioErro").pause();
        document.querySelector("#audioErro").currentTime = 0;
        if(el.target.value == "grande"){
            document.querySelector(`label[for='${el.target.id}']`).classList.add('acerto')
            finalizar();
            document.querySelector("#audioComemorando").play()
        }else{
            document.querySelector(`label[for='${el.target.id}']`).classList.add('erro')
            document.querySelector("#audioErro").play()
        }
    });
}