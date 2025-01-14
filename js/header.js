class Header {
    static render() {
        return `
            <header id="header__inner">
                <div class="container">
                    <nav class="main-nav">
                        <img src="img/logo.png" alt="" class="main-nav__logo">
                        <ul class="main-nav__items">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="project.html">Project</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
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
