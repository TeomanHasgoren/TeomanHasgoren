class Footer {
    static render() {
        return `
            <footer id="main-footer">
            <div class="footer-content container">
                <p>Copyright &copy; 2025. All Right Reserved</p>

                <div class="social">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
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
