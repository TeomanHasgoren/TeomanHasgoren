class Header {
    static render() {
        return `
            <header id="header__home">
                <div class="container">
                    <nav class="main-nav">
                        <img src="img/logo.png" alt="" class="main-nav__logo">
                        <ul class="main-nav__items">
                            <li><a href="index.html" class="active">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="project.html">Project</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="header-content">
                        <h1>I'm Teoman Hasgören
                            <span 
                            class="typewrite" 
                            data-period="1000" 
                            data-type='["Junior","Full-Stack","Developer"]'></span>
                        </h1>
                        <a href="" class="btn-light animate__animated animate__swing">
                            View My Profile
                        </a>
                    </div>
                </div>
            </header>
        `;
    }

    static highlightActiveLink() {
        const links = document.querySelectorAll('.main-nav__items a');
        const currentPath = window.location.pathname;

        links.forEach(link => {
            // Eğer linkin href'i, sayfanın bulunduğu path ile eşleşirse, aktif sınıf ekle
            if (link.getAttribute('href') === currentPath.split('/').pop()) {
                link.classList.add('active');
            }
        });
    }

    static loadHeader() {
        const headerContainer = document.createElement('div');
        headerContainer.innerHTML = Header.render();
        document.body.insertBefore(headerContainer, document.body.firstChild);

        // Header eklendikten sonra aktif bağlantıyı işaretle
        Header.highlightActiveLink();
    }
}

// Sayfa yüklendiğinde header'ı yükle
document.addEventListener('DOMContentLoaded', () => Header.loadHeader());
