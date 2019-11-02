//DOMs
class Navbar {
    constructor() {
        this.navbarCollapse = document.querySelector('.navbar-collapse');
        this.navbarLinksContainer = document.querySelector('.navbar-links-container');
        this.navbarContainer = document.querySelector('.navbar-container');
        this.navbarBrand = document.querySelector('.navbar-brand');
    }
}
class Header {
    constructor() {
        this.videoSwitch = document.querySelector('.video-switch-btn');
        this.video = document.querySelector('.header-video-item');
        this.headerBannerBtn = document.querySelector('.header-button');
    }
}
class About {
    constructor() {
        this.aboutInfosElement = document.querySelectorAll('.about-info-info');
    }
}
class Gallery {
    constructor() {
        this.galleryImagesContainer = document.querySelectorAll('.gallery-image-container');
    }
}
class Modal {
    constructor(){
        this.modalWindow = document.querySelector('.modal');
        this.modalImageContainer = document.querySelector('.modal-container');
        this.modalCloseBtn = this.modalWindow.querySelector('.modal-close-btn');
        this.modalImg = this.modalWindow.querySelector('.modal-img');
        this.modalPrevBtn = this.modalWindow.querySelector('.modal-prev-btn');
        this.modalNextBtn = this.modalWindow.querySelector('.modal-next-btn');
    }
}
class Contact {
    constructor(){
        this.formFeedback = document.querySelector('#feedback');
        this.form = document.querySelector('.form-container'); 
        this.formSubmitBtn = document.querySelector('#submit-btn');
        this.formValidator = {
            email: '',
            title: '',
            message: ''
        }
    }
}
//VARs
const navbar = new Navbar();
const header = new Header();
const about = new About();
const gallery = new Gallery();
const modal = new Modal();
const contact = new Contact();
//FUNCTIONs
const showLinks = function() {
    if(navbar.navbarContainer.classList
        .contains('navbar-container-active')) {
            setTimeout(() => {
                navbar.navbarContainer
                    .classList
                        .toggle('navbar-container-active');
            }, 1000)
            navbar.navbarLinksContainer
                .classList
                    .toggle('navbar-links-container-active');
            navbar.navbarCollapse
                .querySelectorAll('.navbar-collapse-bar')
                    .forEach(bar =>
                        bar.classList
                            .toggle('navbar-collapse-bar-active')
                    );
            navbar.navbarBrand
                .classList
                    .toggle('navbar-brand-active');
            navbar.navbarCollapse
                .classList
                    .toggle('navbar-collapse-change');
        } else {
            navbar.navbarLinksContainer
                .classList
                    .toggle('navbar-links-container-active');
            navbar.navbarContainer
                .classList
                    .toggle('navbar-container-active');
            navbar.navbarCollapse
                .querySelectorAll('.navbar-collapse-bar')
                    .forEach(bar => 
                        bar.classList
                            .toggle('navbar-collapse-bar-active')
                );
            navbar.navbarBrand
                .classList    
                    .toggle('navbar-brand-active');
            navbar.navbarCollapse
                .classList
                    .toggle('navbar-collapse-change');
        }
}
const scroolToSection = function(e) {
    e.preventDefault();
    showLinks();
    const sectionId = e.target.getAttribute('href').slice(1);
    const chosenSection = document.getElementById(sectionId);
    window.scrollTo({
        left: 0,
        top: chosenSection.offsetTop,
        behavior: "smooth"
    })
}
const hideLoader = () => {
    if (header.video.readyState === 4) {
        document.querySelector('.loader-container')
            .style
                .display = 'none';
    }
}
const switchVideo = () => {
    if (
        !header.videoSwitch
            .classList
                .contains('video-switch-btn-on')
    ) {
        header.videoSwitch
            .classList
                .add('video-switch-btn-on');
        header.video
            .play();
    } else {
        header.videoSwitch
            .classList
                .remove('video-switch-btn-on');
        header.video
            .pause();
    }
    
}
const handleHeaderButtonScroll = function() {
    const locationId = document.querySelector('#about');
    window.scrollTo({
        left: 0,
        top: locationId.offsetTop,
        behavior: 'smooth'
    }) 
}
const displayAboutElement = function(ele) {
    if (window.innerWidth >= 1200) {
        if (window.pageYOffset > ele.offsetTop - 500) {
            const arr = [...about.aboutInfosElement];
            if (arr.indexOf(ele) % 2 === 1) {
                ele.querySelector('.about-info-text-container')
                    .classList
                        .add('about-info-appear-img');
                ele.querySelector('.about-info-img-container')
                    .classList
                        .add('about-info-appear-text');
            } else {
                ele.querySelector('.about-info-text-container')
                    .classList
                        .add('about-info-appear-text');
                ele.querySelector('.about-info-img-container')
                    .classList
                        .add('about-info-appear-img');
            }
        }
    } else {
        if (window.pageYOffset > ele.offsetTop - 200) {
            ele.querySelector('.about-info-text-container')
                .classList
                    .add('about-info-appear-text');
            ele.querySelector('.about-info-img-container')
                .classList
                    .add('about-info-appear-img');
        }
    }
}
const cleanUp = () => {
    modal.modalImg
        .classList
            .remove('modal-appearNextImage');
    modal.modalImg
        .classList
            .remove('modal-appearPrevImage');
    modal.modalImg
        .classList
            .remove('modal-disappearNextImage');
    modal.modalImg
        .classList
            .remove('modal-disappearPrevImage');
    modal.modalPrevBtn
        .classList
            .remove('modal-btn-appear');
    modal.modalPrevBtn
        .classList
            .remove('modal-btn-disappear');
    modal.modalNextBtn
        .classList
            .remove('modal-btn-appear');
    modal.modalNextBtn
        .classList
            .remove('modal-btn-disappear');
    modal.modalCloseBtn
        .classList
            .remove('modal-btn-appear');
    modal.modalCloseBtn
        .classList
            .remove('modal-btn-disappear');
}
const displayModalWindow = function () {
    modal.modalImageContainer
        .classList
            .remove('modal-container-deactive');
    modal.modalImg.src =
        this.querySelector('.gallery-image')
            .src;
    modal.modalWindow
        .classList
            .add('modal-active');
    modal.modalImageContainer
        .classList
            .add('modal-container-active');
    setTimeout(()=> {
        modal.modalPrevBtn
            .classList
                .add('modal-btn-appear');
        modal.modalNextBtn
            .classList
                .add('modal-btn-appear');
        modal.modalCloseBtn
            .classList
                .add('modal-btn-appear');
    }, 1000)
}
const closeModalWindow = () => {
    modal.modalImageContainer
        .classList
            .remove('modal-container-active');
    modal.modalImageContainer
        .classList
            .add('modal-container-deactive');
    setTimeout(()=>{
        modal.modalWindow
            .classList
                .remove('modal-active');
    }, 1000)
    cleanUp();
}
const displayImage = function (imageNumber, appear, disappear) {
    cleanUp();
    modal.modalImg
        .classList
            .add(disappear);
    modal.modalPrevBtn
        .classList
            .add('modal-btn-disappear');
    modal.modalNextBtn
        .classList
            .add('modal-btn-disappear');
    modal.modalCloseBtn
        .classList
            .add('modal-btn-disappear');
    setTimeout(() => {
        modal.modalImg
            .classList
                .remove(disappear);
        modal.modalPrevBtn
            .classList
                .remove('modal-btn-disappear');
        modal.modalNextBtn
            .classList
                .remove('modal-btn-disappear');
        modal.modalCloseBtn
            .classList
                .remove('modal-btn-disappear');
        modal.modalImg
            .src = 
                `http://127.0.0.1:5500/CoffeAddict/img/gallery-${imageNumber}.jpeg`;
        modal.modalImg
            .classList
                .add(appear);
        modal.modalPrevBtn
            .classList
                .add('modal-btn-appear');
        modal.modalNextBtn
            .classList
                .add('modal-btn-appear');
        modal.modalCloseBtn
            .classList
                .add('modal-btn-appear');
    }, 500);
}
const changeImage = function() {
    let imageNumber = modal.modalImg.src.slice(46, 47);
    if(this.classList
        .contains('modal-next-btn')) {
            imageNumber = ++ imageNumber;
            if (imageNumber === 9) {
                imageNumber = 1;
            }
            displayImage(
                imageNumber,
                'modal-appearNextImage',
                'modal-disappearNextImage'
            );       
    } else if (this.classList
        .contains('modal-prev-btn')) {
            imageNumber = --imageNumber;
            if (imageNumber === 0) {
                imageNumber = 8;
            }
            displayImage(
                imageNumber,
                'modal-appearPrevImage',
                'modal-disappearPrevImage'
            );
    }
}
const displayFeedback = function(text) {
    contact.formFeedback
        .textContent = text;
    contact.formFeedback
        .classList
            .add('form-feedback-active');
    contact.formFeedback
        .classList
            .add('form-feedback-appear');
    setTimeout(()=> {
        contact.formFeedback
            .classList
                .add('form-feedback-disappear');
        setTimeout(()=> {
            contact.formFeedback
                .classList
                    .remove('form-feedback-active');
            contact.formFeedback
                .classList
                    .remove('form-feedback-appear');
            contact.formFeedback
                .classList
                    .remove('form-feedback-disappear');
        }, 1000);
    }, 2000);
}
const updateFormValidator = function() {
    contact.formValidator[`${this.name}`] = '';
}
const cleanFormsInputs = () => {
    contact.form
        .querySelectorAll('.form-input')
            .forEach(element => 
                element.value = '')
}
const scrollToFeedback = function() {
    const formHeight = 
        contact.form
            .offsetTop;
    window.scrollTo({
        left: 0,
        top: formHeight - 200,
        behavior: "smooth"
    })
}
const validateForm = function(e){
    e.preventDefault();
    scrollToFeedback();
    contact.form
        .querySelectorAll('.form-input')
            .forEach(element => {
                if(element.value !== ''){
                    if (element.name === 'email'){
                        if (element.value.includes('@')){
                            contact.formValidator[`${element.name}`] = element.value;
                        } else {
                            displayFeedback('Email must includes @');
                        }
                    } else {
                        contact.formValidator[`${element.name}`] = element.value;
                    }
                } else {
                    displayFeedback('All fields must be filled');
                }
            })
    if(
        contact.formValidator.email &&
        contact.formValidator.title &&
        contact.formValidator.message
    ) {
        cleanFormsInputs();
        displayFeedback('You message has been sent');
    }
}
//EVENTs
setInterval(hideLoader, 1000);
navbar.navbarCollapse
    .addEventListener('click', showLinks);
header.videoSwitch
    .addEventListener('click', switchVideo);
window.addEventListener('scroll', () => {
    about.aboutInfosElement.forEach(ele => displayAboutElement(ele));
});
gallery.galleryImagesContainer
    .forEach(ele =>  {
            ele.addEventListener('click', displayModalWindow)
        }
    );
modal.modalCloseBtn
    .addEventListener('click', closeModalWindow);
modal.modalPrevBtn
    .addEventListener('click', changeImage);
modal.modalNextBtn
    .addEventListener('click', changeImage);
contact.form
    .querySelectorAll('.form-input')
        .forEach(element => 
            element.addEventListener('click', updateFormValidator));
contact.formSubmitBtn
    .addEventListener('click', validateForm);
navbar.navbarLinksContainer
    .querySelectorAll('.navbar-link')
        .forEach(element => 
            element.addEventListener('click', scroolToSection));
header.headerBannerBtn
    .addEventListener('click', handleHeaderButtonScroll);