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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let anchor = document.getElementsByTagName('a');
anchor[0].textContent = siteContent['nav']['nav-item-1'];
anchor[0].style.color = 'green';
anchor[1].textContent = siteContent['nav']['nav-item-2'];
anchor[1].style.color = 'green';
anchor[2].textContent = siteContent['nav']['nav-item-3'];
anchor[2].style.color = 'green';
anchor[3].textContent = siteContent['nav']['nav-item-4'];
anchor[3].style.color = 'green';
anchor[4].textContent = siteContent['nav']['nav-item-5'];
anchor[4].style.color = 'green';
anchor[5].textContent = siteContent['nav']['nav-item-6'];
anchor[5].style.color = 'green';

let home = document.createElement('a');
let support = document.createElement('a');
home.textContent = 'Home';
support.textContent = 'Support';
home.style.color = 'green';
support.style.color = 'green';
let nav = document.querySelector('nav');
nav.prepend(home);
nav.appendChild(support);
home.href = '#';
support.href = '#';
nav.onmouseover = anchorHover;
nav.onmouseout = anchorNoHover;
function anchorHover() {
  nav.setAttribute('style', 'background-color: lightgray;');
}
function anchorNoHover() {
  nav.setAttribute('style', 'color: green;');
}

let ctaH1 = document.querySelector('h1');
// ctaH1.textContent = siteContent['cta']['h1'];
ctaH1.innerHTML = 'Dom <br> Is <br> Awesome';

let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];
btn.setAttribute('style', 'border-radius: 10px; border-color: blue;');
btn.onmouseover = buttonHover; 
btn.onmouseout = buttonNoHover;
function buttonHover() {
  btn.setAttribute('style', 'border-radius: 10px; color: darkblue; background: white; border-width: 2px; border-color: black; box-shadow: 2px 2px 2px green;');
  btn.textContent = 'detratS teG';
}
function buttonNoHover() {
  btn.setAttribute('style', 'border-radius: 10px; border-width: 2px; border-color: darkblue;');
  btn.textContent = 'Get Started';
}

let mainBorder = document.querySelector('.main-content');
mainBorder.setAttribute('style', 'border-top: 1px dashed orange; border-bottom: 1px dashed orange');


let h4 = document.getElementsByTagName('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4'];

let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent['cta']['img-src']);

const para = document.querySelectorAll('p');
para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];
// para[5].textContent = siteContent['contact']['address'];
para[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
para[6].textContent = siteContent['contact']['phone'];
para[7].textContent = siteContent['contact']['email'];
para[8].textContent = siteContent['footer']['copyright'];

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);