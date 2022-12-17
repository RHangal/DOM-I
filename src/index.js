const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const nav = {  
  "nav-item-1": "Services",
  "nav-item-2": "Product",
  "nav-item-3": "Vision",
  "nav-item-4": "Features",
  "nav-item-5": "About",
  "nav-item-6": "Contact",
  
};
// const services = document.querySelector(".nav-item-1")
// const product = document.querySelector(".nav-item-2")
// const vision = document.querySelector(".nav-item-3")
// const features = document.querySelector(".nav-item-4")
// const about = document.querySelector(".nav-item-5")
// const contact = document.querySelector(".nav-item-6")

const navKeys = Object.keys(nav)
const navArr = []
navKeys.forEach(key => {
  console.log(nav[key])
  return navArr.push(nav[key])
})
console.log(navArr)

const links = document.querySelectorAll("nav a");
links.forEach((links,index) => links.textContent=navArr[index])
links.forEach(links => links.classList.add('italic'))

const logoImg = document.querySelector("#logo-img")
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png")

const cta = {
  "h1": "DOM Is Awesome",
  "button": "Get Started",
}

const ctaH1 = document.querySelector(".cta-text h1")
const ctaButton = document.querySelector(".cta-text button")
const ctaImg = document.querySelector("#cta-img")

ctaH1.textContent = cta.h1
ctaButton.textContent = cta.button
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png")


const mainContent = {
  "features-h4": "Features",
  "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "about-h4": "About",
  "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "services-h4": "Services",
  "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "product-h4": "Product",
  "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  "vision-h4": "Vision",
  "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
}

const topContent1 = document.querySelectorAll(".top-content .text-content h4")[0]
const topContent2 = document.querySelectorAll(".top-content .text-content h4")[1]
topContent1.textContent = mainContent["features-h4"]
topContent2.textContent = mainContent["about-h4"]

const topContent1P = document.querySelectorAll(".top-content .text-content p")[0]
const topContent2P = document.querySelectorAll(".top-content .text-content p")[1]
topContent1P.textContent = mainContent['features-content']
topContent2P.textContent = mainContent['about-content']

const middleImg = document.querySelector("#middle-img")
middleImg.setAttribute('src', "http://localhost:9000/img/accent.png")

const bottomContent1 = document.querySelectorAll(".bottom-content .text-content h4")[0]
const bottomContent2 = document.querySelectorAll(".bottom-content .text-content h4")[1]
const bottomContent3 = document.querySelectorAll(".bottom-content .text-content h4")[2]
bottomContent1.textContent = mainContent["services-h4"]
bottomContent2.textContent = mainContent["product-h4"]
bottomContent3.textContent = mainContent["vision-h4"]

const bottomContent1P = document.querySelectorAll(".bottom-content .text-content p")[0]
const bottomContent2P = document.querySelectorAll(".bottom-content .text-content p")[1]
const bottomContent3P = document.querySelectorAll(".bottom-content .text-content p")[2]
bottomContent1P.textContent = mainContent["services-content"]
bottomContent2P.textContent = mainContent["product-content"]
bottomContent3P.textContent = mainContent["vision-content"]

const contact = {
  "contact-h4": "Contact",
  "address": "123 Way 456 Street Somewhere, USA",
  "phone": "1 (888) 888-8888",
  "email": "sales@greatidea.io",
}
const contactKeys = Object.keys(contact)
const contactArr = []
contactKeys.forEach(key => contactArr.push(contact[key]))
console.log(contactArr)


const contactSection = document.querySelectorAll(".contact *")
console.log(contactSection)
contactSection.forEach((links,index) => links.textContent = contactArr[index])


console.log('project wired!')
