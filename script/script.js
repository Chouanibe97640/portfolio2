

function setupDisplayButtons() {
    const displayButtons = document.querySelectorAll('.page__display-Button');

    displayButtons.forEach(button => {
        button.addEventListener("click", function giveActiveClass() {
            const currentlyActive = document.querySelector('.page__display.active');
            if (currentlyActive) {
                currentlyActive.classList.remove('active');
            }

            const displayElement = button.parentElement;
            if (displayElement) {
                displayElement.classList.add("active");
            }
        });
    });
}

function setupBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const hideBurgerChoice = document.querySelector('.navigation-links');

    burgerMenu.addEventListener("click", function addActiveBurger() {
        const addBurgerMenuActive = burgerMenu.classList.toggle("active");
        if (addBurgerMenuActive) {
            hideBurgerChoice.classList.remove("active");
        } else {
            hideBurgerChoice.classList.add("active");
        }
    });
}

// function setupToHomepageButton() {
//     const toHomepageBtn = document.querySelector('.to-homepage');

//     if (toHomepageBtn) {
//         toHomepageBtn.addEventListener("click", () => {
//             toHomepageBtn.classList.toggle("active");
//             window.scrollTo({
//                 top: 0,
//                 left: 0,
//                 behavior: "smooth"
//             });
//         });
//     }
// }

// Appel des fonctions pour initialiser les différentes fonctionnalités
setupDisplayButtons();
setupBurgerMenu();
// setupToHomepageButton();



// Formulaire de contact

const form = document.querySelector("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("mail");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail(){
    const bodyMessage = `Prénom : ${firstName.value}<br> Nom : ${lastName.value}<br> Email : ${email.value}<br> Numéro de téléphone : ${phone.value}<br> Message : ${mess.value}<br>`
    
    Email.send({
        SecureToken: "993088de-fdb9-4980-8066-96f88a11cbf9",
        To : 'chouanibekamardine@gmail.com',
        From : "chouanibekamardine@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
        if (message == "OK") {
            Swal.fire({
                title: "Message envoyé!",
                text: "Je vous répondrai dans les plus brefs délais!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".form-input");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[2].value != "") {
            checkEmail()
        }

        items[2].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function  checkEmail() {
    const emailRegex = /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
       email.classList.add("error"); 
       email.parentElement.classList.add("error"); 

       if (email.value !=""){
        errorTxtEmail.innerText = "Rentrez un Email valide : email@exemple.fr";
        }else{
            errorTxtEmail.innerText = "L'E-mail ne peut pas être vide";
        }
    }else{
        email.classList.remove("error"); 
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!firstName.classList.contains("error") && !lastName.classList.contains("error") && !phone.classList.contains("error") && !email.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error") ) {
        sendEmail();

        form.reset();
        return false;
    }
})

