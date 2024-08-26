document.getElementById('detailsElement').addEventListener('toggle', function (event) {
    const container = document.getElementById('container');
    if (event.target.open) {
        // Adjust the margin-top of the div when the details element is open
        container.style.marginTop = '360px';
    } else {
        // Reset the margin-top of the div when the details element is closed
        container.style.marginTop = '30px';
    }
});

const text = "Welcome to Panwar Builders, your trusted partner in construction since 1991. With over three decades of experience, we have established ourselves as a leading construction company, delivering excellence and quality in every project we undertake. Our commitment to innovation, craftsmanship, and customer satisfaction has made us a reputable name in the industry. At Panwar Builders, we specialize in a wide range of construction services, including residential, commercial, and industrial projects. Our team of skilled professionals is dedicated to transforming your vision into reality, ensuring that every detail is meticulously planned and executed. From initial design and planning to final construction and finishing touches, we offer comprehensive solutions tailored to meet your specific needs and preferences. Our portfolio showcases a diverse array of completed projects, reflecting our versatility and expertise in handling various types of constructions. We pride ourselves on using the latest technology and sustainable practices to deliver high-quality structures that stand the test of time. Whether you are looking to build your dream home, a state-of-the-art office space, or a robust industrial facility, Panwar Builders has the experience and resources to make it happen.Customer satisfaction is at the heart of our business. We believe in building long-term relationships with our clients based on trust, transparency, and mutual respect. Our commitment to excellence extends beyond construction; we offer exceptional customer service and support throughout the project lifecycle and beyond. Join the numerous satisfied clients who have chosen Panwar Builders for their construction needs. Explore our website to learn more about our services, view our project gallery, and get in touch with us for your next construction project. Panwar Builders – Building dreams, creating realities."; // Your text
const paragraph = document.getElementById("typing-paragraph");

// Function to simulate typing effect
function typeWriter() {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i === text.length) {
            clearInterval(typingInterval); // Stop the interval when all text is typed
        } else {
            paragraph.textContent += text.charAt(i); // Add the next character
            i++;
        }
    }, 20); // Adjust typing speed (milliseconds per character)
}



typeWriter(); // Start the typing animation



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


let slideIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    track.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}