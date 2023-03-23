class footer extends HTMLElement {
    static get observedAttributes(){
        return[]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
}

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../../../../css/estilos.css">
<footer id="contacto">
        <div class="contenedor footer-content">
            <div class="contact-us">
                <h2 class="brand">SevenSeven</h2>
                <p>We are experts in the creation of clothes</p>
            </div>
            <div class="social-media">
                <a href="./" class="social-media-icon"><i class='bx bxl-facebook'></i></a>
            </div>
            <div class="social-media">
                <a href="./" class="social-media-icon"><i class='bx bxl-twitter'></i></a>
            </div>
            <div class="social-media">
                <a href="./" class="social-media-icon"><i class='bx bxl-instagram'></i></a>
            </div>
        </div>
        <div class="line"></div>
    </footer>
    `
}
}
customElements.define("app-foot", footer);
export default footer;
