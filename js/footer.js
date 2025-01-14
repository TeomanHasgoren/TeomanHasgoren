class Footer {
    static render() {
        return `
            <footer id="main-footer">
            <div class="footer-content container">
                <p>Copyright &copy; 2025. All Right Reserved</p>

                <div class="social">
                    <a href="https://x.com/TeomanHasgren" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/teoman_hasgrn/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/teomanhasgoren/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/TeomanHasgoren" target="_blank"><i class="fab fa-github"></i></a>
                </div>

            </div>
        </footer>
        `;
    }

    static loadFooter() {
        const footerContainer = document.createElement('div');
        footerContainer.innerHTML = Footer.render();
        document.body.appendChild(footerContainer);
    }
}

// Sayfa yüklendiğinde footer'ı yükle
document.addEventListener('DOMContentLoaded', () => Footer.loadFooter());
