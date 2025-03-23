document.addEventListener("DOMContentLoaded", function () {
    let current_feature = 1;

    const feature__list_items = document.querySelectorAll(".feature__list-items");
    const features__feature_card = document.querySelectorAll(".features__feature-card");

    const FOQ__questions__heading = document.querySelectorAll(".FOQ__questions__heading");
    const FOQ__answers = document.querySelectorAll(".FOQ__answers");
    const FOQ__img = document.querySelectorAll(".FOQ__img");

    let current_foq = Array(FOQ__questions__heading.length).fill(false);


    const email = document.querySelector("#contact-email");
    const subscription__submit_button = document.querySelector(".subscripion__submit-button");
    const form__email = document.querySelector(".form__email");

    function update_section() {
        features__feature_card.forEach((section, index) => {
            section.classList.remove("d-lg-flex");
            section.classList.add("d-none");

            feature__list_items.forEach((section, index) => {
                section.setAttribute("aria-expanded", "false");
            });

            if (index === current_feature) {       // Show the section corresponding to the currentIndex
                section.classList.remove('d-none');
                section.classList.add('d-lg-flex');
                feature__list_items[index].setAttribute("aria-expanded", "true");
            }
        });

        feature__list_items.forEach((section, index) => {
            section.classList.remove("features__section--active");

            if (index === current_feature) {
                section.classList.add("features__section--active");
            }
        });
    }

    feature__list_items.forEach((section, index) => {
        section.addEventListener("click", () => {
            current_feature = index;
            update_section();
        });
    });

    update_section();

    // FOQ (Frequently Asked Questions)
    function update_foq() {
        for (let i = 0; i < FOQ__questions__heading.length; i++) {
            if (current_foq[i]) {
                FOQ__answers[i].classList.add("d-block");
                FOQ__answers[i].classList.remove("d-none");
                FOQ__img[i].classList.add("FOQ__img--close");
                FOQ__questions__heading[i].setAttribute("aria-expanded", "false");
            }
            else {
                FOQ__answers[i].classList.remove("d-block");
                FOQ__answers[i].classList.add("d-none");
                FOQ__img[i].classList.remove("FOQ__img--close");
                FOQ__questions__heading[i].setAttribute("aria-expanded", "true");
            }
        }
    }

    FOQ__questions__heading.forEach((section, index) => {
        section.addEventListener("click", () => {
            current_foq[index] = !current_foq[index];
            update_foq();
        });
    });

    update_foq();

    // Email Validation
    function check_email(event) {
        event.preventDefault();
    
        if (!email.checkValidity()) {
            form__email.classList.add("form__email--incorrect");
        } else {
            form__email.classList.remove("form__email--incorrect");
        }
    }

    subscription__submit_button.addEventListener("click", check_email);
});
