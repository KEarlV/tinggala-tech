document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the primary call-to-action button click
    const primaryCTAButton = document.querySelector(".cta-primary");
    if (primaryCTAButton) {
        primaryCTAButton.addEventListener("click", function() {
            // Scroll to the services section smoothly
            const servicesSection = document.getElementById("services");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Function to handle the contact form submission
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                serviceNeeded: formData.get("serviceNeeded"),
                message: formData.get("message")
            };

            // Here you would typically send the data to your server or a service
            console.log("Form submitted:", data);

            // Optionally, reset the form after submission
            contactForm.reset();
            alert("Thank you for your message! We will get back to you soon.");
        });
    }

    // Function to load services data from services.json
    fetch('./data/services.json')
        .then(response => response.json())
        .then(data => {
            const servicesContainer = document.getElementById("services-list");
            if (servicesContainer) {
                data.forEach(service => {
                    const serviceItem = document.createElement("div");
                    serviceItem.classList.add("service-item");
                    serviceItem.innerHTML = `
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <p>Price: ${service.price}</p>
                    `;
                    servicesContainer.appendChild(serviceItem);
                });
            }
        })
        .catch(error => console.error("Error loading services:", error));
});