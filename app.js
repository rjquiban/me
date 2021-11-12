var myFullpage = new fullpage('#fullpage', {
    scrollBar: true,
    anchors: ["home", "about", "experience", "projects"],
    menu: "#menu",

    afterRender: () => {
        // selectors for PTHub card
        let pthubCard = document.querySelector("#pthubCard");
        let pthubFront = document.querySelector("#pthubCard .front");
        let pthubBack = document.querySelector("#pthubCard .back");

        // selectors for Floop card
        let floopCard = document.querySelector("#floopCard");
        let floopFront = document.querySelector("#floopCard .front");
        let floopBack = document.querySelector("#floopCard .back");

        // selectors for Microsoft card
        let msCard = document.querySelector("#msCard");
        let msFront = document.querySelector("#msCard .front");
        let msBack = document.querySelector("#msCard .back");

        $(pthubCard).mouseup( () => {
            $(pthubFront).toggleClass("hide");
            $(pthubBack).toggleClass("hide");
        });

        $(floopCard).mouseup( () => {
            $(floopFront).toggleClass("hide");
            $(floopBack).toggleClass("hide");
        });

        $(msCard).mouseup( () => {
            $(msFront).toggleClass("hide");
            $(msBack).toggleClass("hide");
        });
    }
});
