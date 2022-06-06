const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

//manipulating the header ---------------

const navLinks = document.querySelectorAll("header nav a");

navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks[0].classList.add("italic");
navLinks[1].classList.add("italic");
navLinks[2].classList.add("italic");
navLinks[3].classList.add("italic");
navLinks[4].classList.add("italic");
navLinks[5].classList.add("italic");

const headerLogo = document.querySelector("header #logo-img");
headerLogo.setAttribute("src", siteContent["images"]["logo-img"]);

//manipulating cta section

const ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImage = document.querySelector(".cta img");
ctaImage.setAttribute("src", siteContent["images"]["cta-img"]);

//manipulating main content---------------

//top content
const topH4First = document.querySelector(".top-content h4");
topH4First.textContent = siteContent["main-content"]["features-h4"];
const topPFirst = topH4First.nextElementSibling;
topPFirst.textContent = siteContent["main-content"]["features-content"];
const topH4Second = document.querySelector(".top-content div:nth-of-type(2) h4");
topH4Second.textContent = siteContent["main-content"]["about-h4"];
const topPSecond = topH4Second.nextElementSibling;
topPSecond.textContent = siteContent["main-content"]["about-content"];

//middle image
const middleImage = document.querySelector(".main-content .middle-img");
middleImage.setAttribute("src", siteContent["images"]["accent-img"]);

//bottom content
const bottomH4First = document.querySelector(".bottom-content h4");
bottomH4First.textContent = siteContent["main-content"]["services-h4"];
const bottomPFirst = bottomH4First.nextElementSibling;
bottomPFirst.textContent = siteContent["main-content"]["services-content"];

const bottomH4Second = document.querySelector(".bottom-content div:nth-of-type(2) h4");
bottomH4Second.textContent = siteContent["main-content"]["product-h4"];
const bottomPSecond = bottomH4Second.nextElementSibling;
bottomPSecond.textContent = siteContent["main-content"]["product-content"];

const bottomH4Third = document.querySelector(".bottom-content div:nth-of-type(3) h4");
bottomH4Third.textContent = siteContent["main-content"]["vision-h4"];
const bottomPThird = bottomH4Third.nextElementSibling;
bottomPThird.textContent = siteContent["main-content"]["vision-content"];

//manipulating contact section ---------------

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactPFirst = document.querySelector(".contact p");
contactPFirst.textContent = siteContent["contact"]["address"];

const contactPSecond = document.querySelector(".contact p:nth-of-type(2)");
contactPSecond.textContent = siteContent["contact"]["phone"];

const contactPThird = document.querySelector(".contact p:last-child");
contactPThird.textContent = siteContent["contact"]["email"];

//manipulating footer ---------------

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent["footer"]["copyright"];
footerLink.classList.add("bold");
