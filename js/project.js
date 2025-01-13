// Project.js

// ProjectItem sınıfı: Her proje öğesini temsil eder
class ProjectItem {
    constructor(imageSrc, link, category, title) {
        this.imageSrc = imageSrc;
        this.link = link;
        this.category = category;
        this.title = title;
    }

    render() {
        // Her bir öğenin HTML yapısını oluştur
        return `
            <div class="item">
                <div class="item__image">
                    <a href="${this.link}" data-lightbox="readtrip">
                        <img src="${this.imageSrc}" alt="">
                    </a>
                </div>
                <div class="item__text">
                    <div class="item__text__wrap">
                        <p class="item__text__category">${this.category}</p>
                        <h2 class="item__text__title">${this.title}</h2>
                    </div>
                </div>
            </div>
        `;
    }
}

// ProjectList sınıfı: Proje öğelerini yönetir
class ProjectList {
    constructor(itemsContainerId) {
        this.itemsContainer = document.getElementById(itemsContainerId);
        this.projects = [];
    }

    // Projeleri listeye ekler
    addProject(project) {
        this.projects.push(project);
    }

    // Projeleri render eder
    render() {
        this.itemsContainer.innerHTML = this.projects.map(project => project.render()).join('');
    }
}

// Örnek projeleri oluştur
const project1 = new ProjectItem("img/E-Commerce-wbootstrap.jpg", "img/E-Commerce-wbootstrap.jpg", "Web Development", "E-commerce page design with bootstrap.");
const project2 = new ProjectItem("img/AwesomeBlog.jpg", "img/AwesomeBlog.jpg", "Web Development", "Blog page design with bootstrap.");
const project3 = new ProjectItem("img/HotelSiteProject.jpg", "img/HotelSiteProject.jpg", "Web Development", "A simple Hotel website design.");
const project4 = new ProjectItem("img/NewsSiteProject.jpg", "img/NewsSiteProject.jpg", "Web Development", "A simple News Website design");
const project5 = new ProjectItem("img/ShoppingListProject.jpg", "img/ShoppingListProject.jpg", "Web Development", "A simple Shopping list design");
const project6 = new ProjectItem("img/QuizApp.jpg", "img/QuizApp.jpg", "Web Development", "A Simple Quiz application with JavaScript ");


/* <div class="item">
            <div class="item__image">
                <a href="img/work-1.jpeg" data-lightbox="readtrip">
                <img src="img/work-1.jpeg" alt="">
                </a>
            </div>
            <div class="item__text">
            <div class="item__text__wrap">
                <p class="item__text__category">Web Development</p>
                <h2 class="item__text__title">Lorem, ipsum dolor.</h2>
            </div>
    </div>
</div> */