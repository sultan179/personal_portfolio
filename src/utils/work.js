// Slide 1
import pic1 from "../assets/imgs/work/admin-login.png";
import pic2 from "../assets/imgs/work/new_Scholarship.png";
import pic3 from "../assets/imgs/work/application-dashboard.png";
import pic4 from "../assets/imgs/work/app-received.png";
import pic5 from "../assets/imgs/work/decision.png";
import pic6 from "../assets/imgs/work/stat.png";
import pic7 from "../assets/imgs/work/student-login.png";
import pic8 from "../assets/imgs/work/home.png";
import pic9 from "../assets/imgs/work/app-sent.png";

import image1 from "../assets/imgs/work/image1.png";
import image2 from "../assets/imgs/work/image2.png";
import image3 from "../assets/imgs/work/image3.png";

// Slide2 and Slide3
import img1 from "../assets/imgs/work/img1.png";
import img2 from "../assets/imgs/work/img2.png";
import img3 from "../assets/imgs/work/img3.png";

// Slide3
import img4 from "../assets/imgs/work/img4.png";
import img5 from "../assets/imgs/work/img5.png";
import img6 from "../assets/imgs/work/img6.png";
import img7 from "../assets/imgs/work/img7.png";
import img8 from "../assets/imgs/work/img8.png";
import img9 from "../assets/imgs/work/img9.png";
import img10 from "../assets/imgs/work/img10.png";
import img11 from "../assets/imgs/work/img11.png";
import img12 from "../assets/imgs/work/img12.png";
import img13 from "../assets/imgs/work/img13.png";
import img14 from "../assets/imgs/work/img14.png";
import img15 from "../assets/imgs/work/img15.png";
import img16 from "../assets/imgs/work/img16.png";
import img17 from "../assets/imgs/work/img17.png";

//slide4
import pic_1 from "../assets/imgs/work/pic1.png";
import pic_2 from "../assets/imgs/work/pic2.png";
import pic_3 from "../assets/imgs/work/pic3.png";

const slide1 = {
  imgs: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9],
  report: "/pdfs/Scholarship-details.pdf",
  text: "Designed a dynamic and interactive web-based scholarship management system using HTML, CSS, PHP, and javascript as programming tools to assist with the scholarship awarding process for both admin and students. It's built for students to apply for scholarships. Students can apply for available scholarships, see the different kinds of scholarships, view deadlines, award values, etc. Admin can create new scholarships, review scholarships of students, view student profiles, and uploaded supporting documents. Admin can accept/decline scholarship, edit scholarship details, and keep track of the overall scholarship budget",
  heading: "Scholarship Management Website",
  stacks: ["JAVASCRIPT", "HTML", "CSS", "PHP", "JQUERY"],
  code_url: "https://github.com/sultan179/Scholarship_management_website",
  slide_no: "1"
};

const slide2 = {
  imgs: [image1, image2, image3],
  report: null,
  text: "This is a fully responsive personal portfolio website programmed in ReactJs,HTML and CSS for employers or clients to have a peek into my experiences.",
  heading: "Personal Portfolio Website",
  stacks: ["ReactJs", "HTML", "CSS"],
  code_url: "https://github.com/sultan179/personal_portfolio",
  slide_no: "2",
};

const slide3 = {
  imgs: [img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
  ],
  report: "/pdfs/Schoolify-Report.pdf",
  text: "This system, which is a website, is an human-interaction type \
  system that allows for an efficient way of buying and selling \
  products among members (ie:people who have accounts on this \
  website). These members (ie: account users) of this system may \
  either be classified as buyers or sellers. Buyer members are \
  members who have the intention to buy products offered by \
  sellers. A member that provides only their billing address \
  during the registration process falls in the class of buyer \
  members. Seller members on the other hand are members who have \
  the intention to sell products. A member that provides a bank \
  account number only falls in the class of seller members. If in \
  any case, both are provided, the member can then be classified \
  as both a buyer and a seller. Now, these members and the \
  products are managed by our administrator users. When a product \
  is added by a seller member, the administrator has to approve \
  that product (and/or make any other necessary adjustments) based \
  on the information the seller member has provided. Adjustments \
  an administrator may make can be anything from changing the \
  category the product falls under to changing the actual products \
  name if necessary. This is the general structure of our system: \
  an ongoing process of managing product and member flow as \
  products are being sold and offered.",
  heading: "Ecommerce website",
  stacks: ["JAVASCRIPT", "HTML", "CSS", "PHP", "JQUERY"],
  code_url: "https://github.com/sultan179/ecommerce-website",
  slide_no: "3"
};
const slide4 = {
  imgs: [pic_1, pic_2, pic_3],
  report: "/pdfs/Taxi-Trip.pdf",
  text: "The idea behind this project is to analyze previous trends and\
                data of taxi trip times in New York City, and propose a solution \
                for predicting ride durations that builds upon previous\
                solutions. Since most ride-sharing and transportation\
                information is logged, historical trends can be mapped and\
                analyzed. We propose a project in which its primary goal is to\
                predict NYC taxi trip times based on historical data and trends\
                which is provided via Kaggle. Our goal for approaching this\
                problem is to traverse the provided data, and use mapreduce\
                algorithms to apply machine learning techniques on historical\
                data trends to then use to estimate how long individual trips\
                may take. To take into account more factors that could affect\
                trip times, we have fetched weather data from the same period as\
                the data provided by Kaggle. This data will allow us to take\
                into account the weather of that day, and we can determine how\
                much of an impact these conditions have on trip time.",
  heading: "Taxi-Trip prediction",
  stacks: ["Python", "PySpark", "numpy"],
  code_url:
    "https://github.com/sultan179/Taxi_Trip_Prediction/blob/main/Taxi_Trip_Prediction.ipynb",
  slide_no: "4",
};

export { slide1, slide2, slide3,slide4 };
