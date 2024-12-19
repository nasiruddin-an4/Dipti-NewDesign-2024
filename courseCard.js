function createCourseCard(course) {
    return `
        <a href="#" class="course-card block bg-white rounded-md overflow-hidden transition-all ${course.borderColor} border flex flex-col min-h-[100px] lg:min-h-[320px]">
            <img src="${course.image}" alt="${course.title}" class="w-full lg:h-40 h-20 object-cover shrink-0">
            <div class="p-2 lg:p-4 flex flex-col flex-1">
                <div class="flex flex-wrap border-b gap-2 pb-1">
                    <div class="flex items-center bg-gray-200 p-1 rounded">
                        <span class="text-8 lg:text-12">${course.courseCount} Courses</span>
                    </div>
                    <div class="text-8 lg:text-12 bg-gray-200 p-1 rounded">
                        <i class="ri-user-2-fill"></i> ${course.students}
                    </div>
                    <div class="text-8 lg:text-12 bg-gray-200 p-1 rounded">${course.price} </div>
                </div>
                <h3 class="font-semibold lg:text-lg text-sm lg:mb-2 line-clamp-2 mt-2">${course.title}</h3>
                <div class="mt-auto pt-2">
                    <div class="w-full lg:px-4 py-1 lg:py-2 lg:border rounded-md text-sm text-white lg:text-black text-center bg-black lg:bg-gray-100 hover:bg-orange-200 duration-300 flex items-center justify-center gap-2 group">
                        <span>See Details</span> <i class="ri-arrow-right-line transition-all duration-300 transform group-hover:translate-x-2"></i>
                    </div>
                </div>
            </div>
        </a>
    `;
}

// Function to create category buttons
function renderCategories() {
    const categoryContainer = document.getElementById('categoryContainer');

    const allCategoryHtml = `
        <button class="category-btn w-full active border border-gray-400 flex items-center space-x-4 whitespace-nowrap px-2 py-2 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition-all"
                data-category="all">
            <img src="./images/icons/cloud.png" alt="All Categories" class="w-6 h-6 rounded">
            <div class="overflow-hidden">
                <p class="font-medium text-black">All Categories</p>
                <p class="text-xs text-gray-500">${categories.reduce((acc, cat) => acc + cat.courseCount, 0)} Courses</p>
            </div>
        </button>
    `;

    const categoriesHtml = categories.map(category => `
        <button class="category-btn flex items-center text-left border border-gray-400 space-x-2 whitespace-nowrap w-full px-4 py-2 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 transition-all"
                data-category="${category.id}">
            <img src="${category.image}" alt="${category.title}" class="w-6 h-6 rounded">
            <div class="text-left overflow-hidden w-full">
                <p class="font-medium text-black leading-tight">${category.title}</p>
                <p class="text-xs text-gray-500">${category.courseCount} Courses</p>
            </div>
        </button>
    `).join('');

    categoryContainer.innerHTML = allCategoryHtml + categoriesHtml;
}


// Function to get initial 8 cards with representation from each category
function getInitialEightCards() {
    // Get one course from each category first
    const initialCards = [];
    const categoriesUsed = new Set();

    // First pass: get one course from each category until we have 8 or run out of categories
    courses.forEach(course => {
        if (initialCards.length < 8 && !categoriesUsed.has(course.category)) {
            initialCards.push(course);
            categoriesUsed.add(course.category);
        }
    });

    // If we still need more cards, add popular courses (sorted by student count)
    if (initialCards.length < 8) {
        const remainingCards = courses
            .filter(course => !initialCards.includes(course))
            .sort((a, b) => parseInt(b.students) - parseInt(a.students))
            .slice(0, 8 - initialCards.length);

        initialCards.push(...remainingCards);
    }

    return initialCards;
}

// Function to render courses
function renderCourses(category = 'all') {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = '';

    let coursesToShow;

    if (category === 'all') {
        coursesToShow = getInitialEightCards();
    } else {
        // For category filtering, show up to 8 courses from that category
        coursesToShow = courses
            .filter(course => course.category === category)
            .slice(0, 8);
    }

    coursesToShow.forEach(course => {
        courseGrid.innerHTML += createCourseCard(course);
    });
}

// Function to scroll categories
function scrollCategories(direction) {
    const container = document.getElementById('categoryContainer');
    const scrollAmount = 200;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

// Initialize page
function initializeCoursePage() {
    const container = document.getElementById('categoryContainer');
    container.style.scrollBehavior = 'smooth';

    renderCategories();
    renderCourses();

    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active', 'bg-blue-500', 'text-white'));
            button.classList.add('active', 'bg-blue-500', 'text-white');
            renderCourses(button.dataset.category);
        });
    });


}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCoursePage);



// Function to create an Offer Card
function createOfferCard(offer) {
    return `
        <div class="px-2 py-3 border border-gray-100 text-center">
            <img src="${offer.icon}" alt="${offer.title}" class="w-8 h-8 lg:w-12 lg:h-12 mx-auto object-cover mb-1">
            <h3 class="font-semibold text-sm lg:text-lg">${offer.title}</h3>
            <p class="text-gray-600 text-sm hidden lg:flex">${offer.description}</p>
        </div>
    `;
}

// Function to render "We Are Offering" section
function renderOffers() {
    const offerContainer = document.getElementById('offerContainer');
    offerContainer.innerHTML = offers.map(createOfferCard).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderOffers();
});



document.addEventListener('DOMContentLoaded', () => {
    function createTeamMemberCard(member) {
        return `
        <a href="${member.href}" target="_blank">
            <div class="mr-4 w-[200px] rounded-lg overflow-hidden">
                <!-- Image Section with Relative Position -->
                <div class="relative">
                    <!-- Image -->
                    <img src="${member.image}" alt="${member.name}" class="w-[200px] h-[250px] object-cover hover:scale-110 hover:rotate-3 transition-all duration-500" >
                    <!-- Content Section - Absolute positioned with better visibility -->
                    <div class="absolute bottom-2 left-0 right-0 text-center z-10 bg-white/80 backdrop-blur-sm p-3 mx-2 rounded-lg">
                        <h3 class="text-xl font-bold text-gray-800">${member.name}</h3>
                        <p class="text-gray-600 text-sm">${member.role}</p>
                    </div>
                </div>
            </div>
        </a>
        `;
    }

    function setupMarquee() {
        const marqueeTrack = document.getElementById('teamMarquee');

        // Clear existing content
        marqueeTrack.innerHTML = '';

        // Duplicate cards multiple times to ensure infinite loop
        for (let i = 0; i < 4; i++) {
            teamMembers.forEach(member => {
                marqueeTrack.innerHTML += createTeamMemberCard(member);
            });
        }
    }

    // Initialize marquee
    setupMarquee();
});



// Render CourseCategory Page Js Start
function renderCourses() {
    const courseGrid = document.getElementById('courseGrid');
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    courseGrid.innerHTML = coursesCategory
        .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
        .map(course => `
            <a href="#">
                <div class="bg-white rounded-lg border p-4 h-[350px] flex flex-col">
                    <img src="${course.image}" alt="${course.title}" class="h-32 w-full mb-4 rounded-md object-cover">
                    <h3 class="text-xl font-bold">${course.title}</h3>
                    <p>${course.hours} ঘন্টা • ${course.students} শিক্ষার্থী</p>
                    <div class="mt-4 text-gray-800">
                        <span class="font-bold text-xl">${course.price}৳</span>
                        <span class="line-through ml-2">${course.originalPrice}৳</span>
                    </div>
                    <!-- Ensure button stays at the bottom -->
                    <div class="mt-auto pt-2">
                        <div class="w-full lg:px-4 py-1 lg:py-2 lg:border rounded-md text-sm text-white lg:text-black text-center bg-black lg:bg-gray-100 hover:bg-orange-200 duration-300 flex items-center justify-center gap-2 group">
                            <span>See Course Details</span> 
                            <i class="ri-arrow-right-line transition-all duration-300 transform group-hover:translate-x-2"></i>
                        </div>
                    </div>
                </div>
            </a>

            
        `).join('');
}

// Render Reviews
function renderReviews() {
    const reviewGrid = document.getElementById('reviewGrid');
    reviewGrid.innerHTML = reviews.map(review => `
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center mb-4">
                <img src="${review.avatar}" alt="${review.name}" class="w-12 h-12 rounded-full">
                <div class="ml-4">
                    <h4 class="font-semibold">${review.name}</h4>
                    <div class="flex text-yellow-400">
                        ${'★'.repeat(Math.floor(review.stars))}
                        ${review.stars % 1 ? '☆' : ''}
                    </div>
                </div>
            </div>
            <p>${review.feedback}</p>
        </div>
    `).join('');
}

// Render FAQs
function renderFAQs() {
    const faqSection = document.getElementById('faqSection');
    faqSection.innerHTML = faqs.map(faq => `
        <div class="p-4 bg-white rounded-lg shadow-md">
            <h3 class="font-bold text-lg">${faq.question}</h3>
            <p class="mt-2">${faq.answer}</p>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    renderReviews();
    renderFAQs();

    // Add event listeners to update courses when category changes
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', renderCourses); // Re-render courses based on category selection
    });
});
