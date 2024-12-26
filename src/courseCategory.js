// Render CourseCategory Page Js Start

function renderCourses() {
    const courseGrid = document.getElementById('courseGrid');
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;

    courseGrid.innerHTML = coursesCategory
        .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
        .map(course => `
            <a href="./singleCourse.html">
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




// Initialize
document.addEventListener('DOMContentLoaded', () => {

    // Add event listeners to update courses when category changes
    document.querySelectorAll('input[name="category"]').forEach(input => {
        input.addEventListener('change', renderCourses); // Re-render courses based on category selection
    });
});


// Select all radio buttons and their corresponding labels
const radioButtons = document.querySelectorAll('input[type="radio"][name="category"]');
const labels = document.querySelectorAll('.category-label');

// Add event listeners to radio buttons
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        // Remove the active class from all labels
        labels.forEach(label => {
            label.classList.remove('font-bold', 'text-blue-600');
        });

        // Add the active class to the selected label
        const selectedLabel = radioButton.closest('label');
        selectedLabel.classList.add('font-bold', 'text-blue-600');
    });
});


// Single Coursepage JS here

