function trocarImagem(escolha, event) {

    if (event.type === "click" || event.key === "Enter") {

        const imagemnova = document.getElementById("imagemPrincipal");

        let urlNova = "";
        let textoprincipal = document.getElementById("textoprincipal");
        let texto = document.getElementById("texto");
        let descrevefigura = document.getElementById("descrevefigura");


        switch (escolha) {

            case "1":

                urlNova = "estrela.jpg";

                textoprincipal.innerText =
                    "O que é evolução estelar?";

                texto.innerText =
                    "Evolução estelar é o conjunto de mudanças que uma estrela sofre durante sua vida, desde sua formação até seu estágio final.";

                descrevefigura.innerText =
                    "Imagem representando uma estrela em sua evolução.";

                break;


            case "2":

                urlNova = "nebulosa.jpg";

                textoprincipal.innerText =
                    "Como uma estrela se forma?";

                texto.innerText =
                    "Uma estrela se forma a partir do colapso de uma nuvem de gás e poeira, principalmente hidrogênio, devido à gravidade.";

                descrevefigura.innerText =
                    "Imagem de uma nebulosa, região onde novas estrelas podem se formar.";

                break;


            case "3":

                urlNova = "gigante-vermelha.jpg";

                textoprincipal.innerText =
                    "O que acontece quando o hidrogênio acaba?";

                texto.innerText =
                    "Quando o hidrogênio disponível para a fusão diminui, a estrela passa para novas etapas de sua evolução e pode começar a fundir elementos mais pesados, dependendo de sua massa.";

                descrevefigura.innerText =
                    "Imagem representando uma estrela gigante vermelha.";

                break;


            case "4":

                urlNova = "hidrogenio-helio.jpg";

                textoprincipal.innerText =
                    "Quais são os principais elementos das estrelas?";

                texto.innerText =
                    "Os principais elementos presentes nas estrelas são o hidrogênio e o hélio. Outros elementos podem ser formados durante a evolução estelar.";

                descrevefigura.innerText =
                    "Representação dos elementos hidrogênio e hélio.";

                break;


            case "5":

                urlNova = "fusao-nuclear.jpg";

                textoprincipal.innerText =
                    "Como elementos mais pesados são formados?";

                texto.innerText =
                    "No interior das estrelas, reações de fusão nuclear podem transformar elementos mais leves em elementos mais pesados.";

                descrevefigura.innerText =
                    "Representação da fusão nuclear no interior de uma estrela.";

                break;


            default:

                urlNova = "estrela.jpg";

                textoprincipal.innerText =
                    "Evolução Estelar";

                texto.innerText =
                    "Clique em um dos cartões para conhecer mais sobre a evolução das estrelas e os elementos químicos.";

                descrevefigura.innerText =
                    "Imagem representando uma estrela.";

                break;
        }


        imagemnova.src = urlNova;

        textoprincipal.focus();
    }
}
