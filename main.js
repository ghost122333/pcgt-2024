/* const root = document.documentElement;
root.addEventListener("mousemove", (event) => {
    root.style.setProperty('--x', `${event.x}px`)
    root.style.setProperty('--y', `${event.y}px`)
 }); */

/* ------ About us ------ */

function animateDash() {
    const dashSection = document.querySelector(".about-us-dash-section"); 
    dashSection.addEventListener("mouseleave", (e) => {
        let evt = event.target;
        if (!evt.classList.contains("dash-left")) {
            dashSection.classList.remove("dash-active");
        }
    });

    const container = document.querySelector(".about-us-dash-section");
    container.addEventListener('mousemove', function(event) {
        const rect = container.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const boundaryX = 600;
        const boundaryY = 1000;

        if (mouseX < boundaryX && mouseY < boundaryY) {
            container.classList.add("dash-active");
        } else {
            container.classList.remove("dash-active");
        }
    });
}

if (window.location.href.indexOf("about-us") != -1) {
    animateDash();
}

/* ------ Services ------ */

function toggleService() {
    const services = document.querySelectorAll(".service-nav-listitem");

    let serviceTitle = document.querySelector(".service-title");
    let serviceText = document.querySelector(".service-text");
    let serviceImg = document.querySelectorAll(".service-img-wrapper");

    services.forEach((service, ind) => {
        service.addEventListener("change", () => {
            console.log(service.id)
            if (service.checked && service.id == "service-gt") {
                makeGnT(serviceTitle, serviceText, serviceImg);
            }
            if (service.checked && service.id == "service-repair") {
                makeRepair(serviceTitle, serviceText, serviceImg);
            }
        })
    });
    makeGnT(serviceTitle, serviceText, serviceImg);
}

function makeGnT(servTit, servTxt, servImgs) {
    servTit.innerHTML = "Adok-veszek, új alkatrészek, számítógépek, telefonok, és sok más";
    servTxt.innerHTML = "Mi, a PCGT csapata, nem csak egyszerűen egy számítógép-kereskedő vagyunk. Mi az innováció és a technológiai újítások előre vezetői vagyunk. Az ügyfeleink igényeit szem előtt tartva kínálunk mind új, mind pedig használt hardvereket és szolgáltatásokat, melyek a legfrissebb trendeket és a legmagasabb minőségi elvárásokat tükrözik.";
    servImgs.forEach((servImg, ind) => {
        servImg.innerHTML = "<img class='service-img' src='service-gt-" + ind + ".jpg'>";
    });
}

function makeRepair(servTit, servTxt, servImgs) {
    servTit.innerHTML = "Számítógép szerelés";
    servTxt.innerHTML = "Számítógép problémáid vannak? Ne aggódj! A PCGT szakemberei gyorsan és hatékonyan megoldják bármilyen számítógépes problémádat. Legyen szó hardverhiba, szoftverfrissítés vagy bármilyen egyéb technikai nehézségről, mi garantáljuk, hogy géped újra tökéletesen fog működni.";
    servImgs.forEach((servImg, ind) => {
        servImg.innerHTML = "<img class='service-img' src='service-repair-" + ind + ".jpg'>";
    });
}

if (window.location.href.indexOf("services") != -1) {
    toggleService();
}