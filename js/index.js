const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// imgs
const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', siteContent['nav']['img-src'])

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


// big title and btn

// h1
const ctaH1 = document.getElementsByTagName('h1')[0];
ctaH1.innerText = (siteContent['cta']['h1'])


// button
const btn = document.querySelector('button');
btn.textContent = (siteContent['cta']['button'])


// Main Content Top

// Features 
const featuresH4 = document.querySelectorAll('h4')[0];
featuresH4.textContent = (siteContent['main-content']['features-h4'])

const featuresP = document.querySelectorAll('p')[0];
featuresP.textContent = (siteContent['main-content']['features-content'])

// About
const aboutH4 = document.querySelectorAll('h4')[1];
aboutH4.textContent = (siteContent['main-content']['about-h4'])

const aboutP = document.querySelectorAll('p')[1];
aboutP.textContent = (siteContent['main-content']['about-content'])


// Main Content Bottom

// Services
const servicesH4 = document.querySelectorAll('h4')[2];
servicesH4.textContent = (siteContent['main-content']['services-h4'])

const servicesP = document.querySelectorAll('p')[2];
servicesP.textContent = (siteContent['main-content']['services-content'])

// Product 
const productH4 = document.querySelectorAll('h4')[3];
productH4.textContent = (siteContent['main-content']['product-h4'])

const productP = document.querySelectorAll('p')[3];
productP.textContent = (siteContent['main-content']['product-content'])

// Vision 
const visionH4 = document.querySelectorAll('h4')[4];
visionH4.textContent = (siteContent['main-content']['vision-h4'])

const visionP = document.querySelectorAll('p')[4];
visionP.textContent = (siteContent['main-content']['vision-content'])


// Contact Info

// Contact title
const contactH4 = document.querySelectorAll('h4')[5];
contactH4.textContent = (siteContent['contact']['contact-h4'])

// Contact Address
const contactAddress = document.getElementsByTagName('p')[5];
contactAddress.innerText = (siteContent['contact']['address'])

// Contact Phone
const contactPhone = document.querySelectorAll('p')[6];
contactPhone.textContent = (siteContent['contact']['phone'])

// Contact Email
const contactEmail = document.querySelectorAll('p')[7];
contactEmail.textContent = (siteContent['contact']['email'])

// note next time  do  '.contact h4' and '.contact p'[0] - [3] or you are going to have alot of number like a above

//footer

// Footer Copyright
const footerP = document.querySelector('footer p');
footerP.textContent = (siteContent['footer']['copyright'])

// Nav 

const nav = document.querySelectorAll('nav a');
nav.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]
});

const changeColor = document.querySelectorAll('nav a');
for(let i = 0; i < changeColor.length; i++){
  const changeColors = changeColor[i];
  changeColors.style.color = 'green';
}

// nav append and prepend

let firstNav = document.createElement("a");
firstNav.href = "#";
firstNav.textContent = "Home";
firstNav.style.color = "green";

let lastNav = document.createElement("a");
lastNav.href = "#";
lastNav.textContent = "FAQ";
lastNav.style.color = "green";

const newNav = document.querySelector("nav");
newNav.prepend(firstNav);
newNav.append(lastNav); 