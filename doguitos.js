dogs = [
    {
        nome: 'Sammy',
        idade: 6,
        raca: 'Samoieda'
    },
    {
        nome: 'Dragão',
        idade: 5,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Milton',
        idade: 8,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Penny',
        idade: 6,
        raca: 'Spitz Alemão'
    },
    {
        nome: 'Nenem',
        idade: 4,
        raca: 'Spitz Alemão'
    },
    ];

    //solta seus script brabos aqui

    function soSpitz() {
        window.alert("Penny" )
        window.alert("dragao" )
        window.alert("milton" )
        window.alert("sammy" )
        window.alert("nenem" )
    }
    function idadeReal() {
        var idades = [6, 5, 8, 6, 4]
        var idadesHumana = idades.map(function (num) {
            return alert(num * 7);
            
        })
    }

    function idadeSoma() {
        var idades = [6, 5, 8, 6, 4]
        var somatoria = idades.reduce(function (total, item) {
            return total + item
        }, 0)
            alert(somatoria)
    }

    function mudaTudo(){
        
        document.body.style.background = "red"
        document.getElementById("dog1").getElementsByClassName("sammy")[0].innerHTML= "vitas"
        document.getElementById("dog2").getElementsByClassName("dragao")[0].innerHTML= "vitas2"
        document.getElementById("dog3").getElementsByClassName("milton")[0].innerHTML= "vitas3"
        document.getElementById("dog4").getElementsByClassName("penny")[0].innerHTML= "vitas4"
        document.getElementById("dog5").getElementsByClassName("nenem")[0].innerHTML= "vitas5"
        document.getElementsByClassName("site")[0].innerHTML= "SITE DO VITAS"
        document.getElementById("dog1").getElementsByClassName("imagem1")[0].src = "Ibageins/vitas2.jpg"
        document.getElementById("dog2").getElementsByClassName("imagem2")[0].src = "Ibageins/xu.jpg"
        document.getElementById("dog3").getElementsByClassName("imagem3")[0].src = "Ibageins/images.jpg"
        document.getElementById("dog4").getElementsByClassName("imagem4")[0].src = "Ibageins/índice.jpg"
        document.getElementById("dog5").getElementsByClassName("imagem5")[0].src = "Ibageins/images v.jpg"
        
        

    }

