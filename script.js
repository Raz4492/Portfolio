const roles = ["I am a Programmer", "I am a Machine Learning Developer", "I am a Web Developer", "I am a Photographer"];
        let roleIndex = 0;
        function changeRole() {
            document.getElementById("role").textContent = roles[roleIndex];
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(changeRole, 2000);
        }
        changeRole();

        const menuButton = document.getElementById('menuButton');
        const menuDropdown = document.getElementById('menuDropdown');
        menuButton.addEventListener('click', () => {
            menuDropdown.classList.toggle('hidden');
        });
        document.addEventListener('click', (event) => {
            if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
                menuDropdown.classList.add('hidden');
            }
        });
        
        const links = document.querySelectorAll('a[href^="#"]'); // Select all links with a hash (#)
        const headerOffset = 80; // Adjust based on header height
        const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    links.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function toggleDropdown(id) {
        document.getElementById("ssc").classList.add("hidden");
        document.getElementById("hsc").classList.add("hidden");
        document.getElementById("bsc").classList.add("hidden");
        document.getElementById(id).classList.remove("hidden");

    };

    // Select the header element
    const header = document.querySelector('header');

    // Function to toggle background opacity
    function handleScroll() {
        if (window.scrollY > 50) { // Change this value if needed
            header.classList.remove('bg-opacity-10'); // Remove transparency
            header.classList.add('bg-opacity-100'); // Make it fully opaque
        } else {
            header.classList.remove('bg-opacity-100'); // Remove full opacity
            header.classList.add('bg-opacity-10'); // Add transparency back
        }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger the function on page load to set the initial state
    handleScroll();

    // Select the element where the age will be displayed
    const ageElement = document.getElementById('age');
    
    // Function to calculate age based on birthday
    function calculateAge(birthday) {
        const birthDate = new Date(birthday); // Convert birthday to a Date object
        const today = new Date(); // Get the current date
        let age = today.getFullYear() - birthDate.getFullYear(); // Calculate initial age
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        // Adjust age if the current date is before the birthday this year
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        return age;
    }

    // Update the age element dynamically
    ageElement.textContent = calculateAge('2001-05-29'); // Replace with your actual birthday
    
    
    // Function to toggle dropdown visibility
    function toggleDropdown(id) {
        const sections = ['ssc', 'hsc', 'bsc'];

        sections.forEach(section => {
            const element = document.getElementById(section);

            if (section === id) {
                element.classList.toggle('hidden'); // Show or hide the clicked section
            } else {
                element.classList.add('hidden'); // Hide other sections
            }
        });
    }

    // Photo Slider
    const imageCount = 16;
        const imagePrefix = 'i';
        const slideragain = document.getElementById('photo-slider');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;
        for (let i = 1; i <= imageCount; i++) {
            const img = document.createElement('img');
            img.src = `${imagePrefix}${i}.jpg`;
            img.alt = `Photo ${i}`;
            img.className = 'slider-image hidden';
            if (i === 1) img.classList.remove('hidden');
            slideragain.appendChild(img);
        }
        const images = document.querySelectorAll('.slider-image');
        function updateSlider(index) {
            images.forEach((img, i) => {
                img.classList.toggle('hidden', i !== index);
            });
        }
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider(currentIndex);
        });
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider(currentIndex);
        });
        updateSlider(currentIndex);

    // Retrieve messages from localStorage on page load
    window.addEventListener('load', () => {
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        const messagesContainer = document.getElementById('messages-container');
        if (savedMessages.length > 0) {
            messagesContainer.innerHTML = ''; // Clear placeholder text
            // Iterate through messages in reverse order
            savedMessages.slice().reverse().forEach(({ name, message }) => {
                addMessageToContainer(name, message);
            });
        }
    });


    // Function to handle form submission
    function submitMessage(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get the values from the form fields
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Create a new message element
        addMessageToContainer(name, message);

        // Save message in localStorage
        const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        savedMessages.push({ name, message });
        localStorage.setItem('messages', JSON.stringify(savedMessages));

        // Reset the form fields
        document.getElementById('contactForm').reset();
    }

    // Function to add a message to the container
    function addMessageToContainer(name, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('p-4', 'bg-gray-100', 'rounded-lg', 'shadow-md', 'space-y-2');
        messageElement.innerHTML = `<strong>${name}</strong>: <span>${message}</span>`;
        const messagesContainer = document.getElementById('messages-container');
        messagesContainer.appendChild(messageElement);
    }

    const slider = document.getElementById('course-slider');
    const dots = document.querySelectorAll('.dot');

    // Link dots to slides
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Scroll to the corresponding slide
            slider.scrollTo({
                left: slider.offsetWidth * index,
                behavior: 'smooth'
            });

            // Update active state for dots
            dots.forEach(d => d.classList.remove('bg-sky-500'));
            dot.classList.add('bg-sky-500');
        });
    });

    // Set the first dot as active by default
    dots[0].classList.add('bg-sky-500');

    function showSkills(category) {
        const skills = {
            WEB: [
                { name: "HTML5", level: "Skilled", stars: 5 },
                { name: "CSS", level: "Good", stars: 4.5 },
                { name: "React", level: "Fair", stars: 4 },
                { name: "Django", level: "Fair", stars: 4 },
                { name: "PHP", level: "Good", stars: 4.5 }
            ],
            DB: [
                { name: "MySQL", level: "Proficient", stars: 5 },
                { name: "PostgreSQL", level: "Fair", stars: 4 }
            ],
            PL: [
                { name: "Python", level: "Skilled", stars: 5 },
                { name: "Java", level: "Good", stars: 4.5 },
                { name: "C", level: "Good", stars: 4.5 },
                { name: "Assembly", level: "Fair", stars: 4 }
            ],
            ML: [
                { name: "Numpy", level: "Proficient", stars: 5 },
                { name: "Pandas", level: "Proficient", stars: 5 },
                { name: "Scikit-learn", level: "Proficient", stars: 5 },
                { name: "Pytorch", level: "Proficient", stars: 5 },
                { name: "Tensorflow", level: "Proficient", stars: 5 },
                { name: "Keras", level: "Proficient", stars: 5 },
                { name: "KNN", level: "Proficient", stars: 5 },
                { name: "CNN", level: "Proficient", stars: 5 },
                { name: "LSTM", level: "Proficient", stars: 5 },
                { name: "BiLSTM", level: "Proficient", stars: 5 },
                { name: "BERT (mT5)", level: "Proficient", stars: 5 },
                { name: "BLEU", level: "Proficient", stars: 5 },
                { name: "Transformer", level: "Proficient", stars: 5 }
            ]
        };
    
        // Build dynamic skills section HTML
        let skillsHTML = `<h3 class="text-xl font-semibold text-gray-800 mb-4">${capitalize(category)} Skills</h3>`;
        skills[category].forEach(skill => {
            const filledStars = '★'.repeat(Math.floor(skill.stars)); // Full stars
            const halfStar = skill.stars % 1 !== 0 ? '☆' : ''; // Half star
            const emptyStars = '☆'.repeat(5 - Math.ceil(skill.stars)); // Empty stars
    
            skillsHTML += `
                <div class="flex justify-between items-center p-2 border-b border-gray-200">
                    <span>${skill.name}</span>
                    <span class="text-yellow-500">
                        ${filledStars}${halfStar}${emptyStars}
                    </span>
                </div>`;
        });
    
        // Inject the HTML into the target section and make it visible
        const skillsInfo = document.getElementById("skills-info");
        skillsInfo.innerHTML = skillsHTML;
        skillsInfo.classList.remove("hidden");
    }
    
    // Helper Function: Capitalize the first letter of a word
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    

    