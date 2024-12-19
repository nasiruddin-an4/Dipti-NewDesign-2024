// Category data
const categories = [
    {
        id: 'web',
        title: 'Cloud Computing',
        image: './images/icons/cloud.png',
        courseCount: 12
    },
    {
        id: 'Cyber Security',
        title: 'Mobile Development',
        image: './images/icons/cloud.png',
        courseCount: 8
    },
    {
        id: 'product',
        title: 'Networking Technology',
        image: './images/icons/cloud.png',
        courseCount: 6
    },
    {
        id: 'design',
        title: '3D Animation & Vfx',
        image: './images/icons/cloud.png',
        courseCount: 9
    },
    {
        id: 'data',
        title: 'Graphics & Multimedia',
        image: './images/icons/cloud.png',
        courseCount: 7
    },
    {
        id: 'ai',
        title: 'Devops & System Administration',
        image: './images/icons/cloud.png',
        courseCount: 5
    },
    {
        id: 'ai',
        title: 'Artificial Intelligence & Machine Learning',
        image: './images/icons/cloud.png',
        courseCount: 6
    },
    {
        id: 'web',
        title: 'Web Application Development',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'web',
        title: 'Software Development',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Android & IOS Development',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Digital Marketing',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Android & IOS Development',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Robotics & Automation',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Accounts & Finance',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
    {
        id: 'app',
        title: 'Soft Skills',
        image: './images/icons/cloud.png',
        courseCount: 8
    },
    {
        id: 'app',
        title: 'Freelancing',
        image: './images/icons/cloud.png',
        courseCount: 4
    },
];

// Course data
const courses = [
    {
        id: 1,
        title: "Full Stack Web Development with MERN",
        category: "web",
        image: "./images/courses/1.jpg",
        students: "75 Students",
        price: "৳ 6500",
        courseCount: 9,
        borderColor: "border-blue-500"
    },
    {
        id: 2,
        title: "Python Django & React Development",
        category: "web",
        image: "./images/courses/2.jpg",
        students: "60 Students",
        price: "৳ 6500",
        courseCount: 7,
        borderColor: "border-blue-500"
    },
    {
        id: 3,
        title: "Flutter Mobile App Development",
        category: "mobile",
        image: "./images/courses/3.jpg",
        students: "85 Students",
        price: "৳ 6500",
        courseCount: 8,
        borderColor: "border-green-500"
    },
    {
        id: 4,
        title: "iOS Development with Swift",
        category: "mobile",
        image: "./images/courses/4.jpg",
        students: "55 Students",
        price: "৳ 6500",
        courseCount: 6,
        borderColor: "border-green-500"
    },
    {
        id: 5,
        title: "Product Management Essentials",
        category: "product",
        image: "./images/courses/5.jpg",
        students: "90 Students",
        price: "৳ 6500",
        courseCount: 5,
        borderColor: "border-purple-500"
    },
    {
        id: 6,
        title: "UI/UX Design Masterclass",
        category: "design",
        image: "./images/courses/6.jpg",
        students: "95 Students",
        price: "৳ 6500",
        courseCount: 8,
        borderColor: "border-pink-500"
    },
    {
        id: 7,
        title: "Data Engineering with Python",
        category: "data",
        image: "./images/courses/7.jpg",
        students: "70 Students",
        price: "৳ 6500",
        courseCount: 7,
        borderColor: "border-yellow-500"
    },
    {
        id: 8,
        title: "Machine Learning Fundamentals",
        category: "ai",
        image: "./images/courses/8.jpg",
        students: "65 Students",
        price: "৳ 6500",
        courseCount: 6,
        borderColor: "border-red-500"
    },
    {
        id: 9,
        title: "AWS Cloud Architecture",
        category: "cloud",
        image: "./images/courses/1.jpg",
        students: "80 Students",
        price: "৳ 6500",
        courseCount: 7,
        borderColor: "border-orange-500"
    },
    {
        id: 10,
        title: "Cybersecurity Fundamentals",
        category: "security",
        image: "./images/courses/1.jpg",
        students: "50 Students",
        price: "৳ 6500",
        courseCount: 5,
        borderColor: "border-gray-500"
    },
    {
        id: 11,
        title: "Vue.js Frontend Development",
        category: "web",
        image: "./images/courses/1.jpg",
        students: "70 Students",
        price: "৳ 6500",
        courseCount: 6,
        borderColor: "border-blue-500"
    },
    {
        id: 12,
        title: "React Native Mobile Development",
        category: "mobile",
        image: "./images/courses/1.jpg",
        students: "75 Students",
        price: "৳ 6500",
        courseCount: 7,
        borderColor: "border-green-500"
    },
    {
        id: 13,
        title: "Advanced Data Analytics",
        category: "data",
        image: "./images/courses/1.jpg",
        students: "60 Students",
        price: "৳ 6500",
        courseCount: 8,
        borderColor: "border-yellow-500"
    },
    {
        id: 14,
        title: "Deep Learning with TensorFlow",
        category: "ai",
        image: "./images/courses/1.jpg",
        students: "55 Students",
        price: "৳ 6500",
        courseCount: 6,
        borderColor: "border-red-500"
    },
    {
        id: 15,
        title: "Google Cloud Platform",
        category: "cloud",
        image: "./images/courses/1.jpg",
        students: "45 Students",
        price: "৳ 6500",
        courseCount: 5,
        borderColor: "border-orange-500"
    },
    {
        id: 16,
        title: "Ethical Hacking",
        category: "security",
        image: "./images/courses/1.jpg",
        students: "85 Students",
        price: "৳ 6500",
        courseCount: 7,
        borderColor: "border-gray-500"
    }
];

const offers = [
    {
        icon: "./images/icons/6.png",
        title: "Job Placement",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
    {
        icon: "./images/icons/5.png",
        title: "Scholarship Facility",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
    {
        icon: "./images/icons/3.png",
        title: "1 - 1 Support",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
    {
        icon: "./images/icons/4.png",
        title: "Realtime Progress Tracking",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
    {
        icon: "./images/icons/2.png",
        title: "Learn from Industry Experts",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
    {
        icon: "./images/icons/1.png",
        title: "Intensive Job Placement Support",
        description: "No chance of falling behind with a module-wise structured study plan packed with quizzes, assignments and live tests."
    },
];

const clientLogos = [
    {
        name: 'Udemy',
        logo: './images/clients/cdc.png',
        url: 'https://www.udemy.com'
    },
    {
        name: 'Coursera',
        logo: './images/clients/embassy-usa.png',
        url: 'https://www.coursera.org'
    },
    {
        name: 'edX',
        logo: './images/clients/ict.png',
        url: 'https://www.edx.org'
    },
    {
        name: 'Pluralsight',
        logo: './images/clients/skilljobs.png',
        url: 'https://www.pluralsight.com'
    },
    {
        name: 'LinkedIn Learning',
        logo: './images/clients/cdc.png',
        url: 'https://www.linkedin.com/learning'
    },
    {
        name: 'Udacity',
        logo: './images/clients/who.png',
        url: 'https://www.udacity.com'
    },
    {
        name: 'Udacity',
        logo: './images/clients/cdc.png',
        url: 'https://www.udacity.com'
    },
    {
        name: 'Udacity',
        logo: './images/clients/who.png',
        url: 'https://www.udacity.com'
    },
    {
        name: 'Udacity',
        logo: './images/clients/skilljobs.png',
        url: 'https://www.udacity.com'
    },
    {
        name: 'Udacity',
        logo: './images/clients/who.png',
        url: 'https://www.udacity.com'
    },
    {
        name: 'Udacity',
        logo: './images/clients/skilljobs.png',
        url: 'https://www.udacity.com'
    },
];

// Logo display configuration
const logoConfig = {
    width: 80,  // Logo width in pixels
    height: 80, // Logo height in pixels
    gap: 80,     // Gap between logos in pixels
    animationSpeed: 120 // Animation speed (seconds)
};





const teamMembers = [
    {
        name: "John Doe",
        role: "CEO",
        image: "/images/mentors/1.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        },
        href: "https://prium.github.io/elixir/",
    },
    {
        name: "Jane Smith",
        role: "CTO",
        image: "/images/mentors/2.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        },
        href: "#",
    },
    {
        name: "Mike Johnson",
        role: "Design Lead",
        image: "/images/mentors/3.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        },
        href: "#",
    },
    {
        name: "Emily Brown",
        role: "Product Manager",
        image: "/images/mentors/4.jpg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        },
        href: "#",
    },
    // Add more team members as needed
];


// data.js
const blogPosts = [
    {
        image: 'images/b1.avif',
        date: '2023-03-13',
        title: 'Blog Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
        link: '#'
    },
    {
        image: 'images/b2.jpg',
        date: '2023-03-13',
        title: 'Blog Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
        link: '#'
    },
    {
        image: 'images/b3.jpg',
        date: '2023-03-13',
        title: 'Blog Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...',
        link: '#'
    }
];


// CourseCategory Page Data Here

const coursesCategory = [
    {
        id: 1,
        title: 'ডিজিটাল মার্কেটিং',
        category: 'digitalMarketing',
        type: 'career',
        hours: 591,
        students: 824,
        price: 87499,
        originalPrice: 88000,
        image: '/images/courses/1.jpg'
    },
    { 
        id: 2, 
        title: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট', 
        category: 'webDev', 
        type: 'career', 
        hours: 801, 
        students: 1503, 
        price: 84999, 
        originalPrice: 85000, 
        image: '/images/courses/2.jpg' 
    },
    { 
        id: 3, 
        title: 'Digital Marketing', 
        category: 'digitalMarketing', 
        type: 'career', 
        hours: 801, 
        students: 1503, 
        price: 84999, 
        originalPrice: 85000, 
        image: '/images/courses/2.jpg' 
    },
    { 
        id: 4, 
        title: 'Video Editing', 
        category: 'videoEditing', 
        type: 'career', 
        hours: 801, 
        students: 1503, 
        price: 84999, 
        originalPrice: 85000, 
        image: '/images/courses/2.jpg' 
    },
    { id: 5, title: 'Graphic Design', category: 'graphicDesign', type: 'career', hours: 450, students: 500, price: 40000, originalPrice: 45000, image: '/images/courses/3.jpg' },
    { id: 6, title: 'এথিক্যাল হ্যাকিং', category: 'ethicalHacking', type: 'career', hours: 600, students: 1200, price: 95000, originalPrice: 100000, image: '/images/courses/4.jpg' },
];

// Reviews Data
const reviews = [
    { name: 'Rahul Ahmed', avatar: '/api/placeholder/40/40', stars: 5, feedback: 'Amazing course content! Now I\'m working as a freelancer.', course: 'Digital Marketing Course' },
    { name: 'Tasnim Khan', avatar: '/api/placeholder/40/40', stars: 4.5, feedback: 'The MERN stack course was comprehensive and practical!', course: 'Full Stack Development' }
];

// FAQs Data
const faqs = [
    { question: 'What is the refund policy?', answer: 'You can request a refund within 14 days of purchase.' },
    { question: 'How can I access the courses?', answer: 'Once purchased, you can access the courses through your account dashboard.' }
];

