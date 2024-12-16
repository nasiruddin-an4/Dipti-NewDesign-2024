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


