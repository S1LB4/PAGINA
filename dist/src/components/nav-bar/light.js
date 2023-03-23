class light extends HTMLElement {
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
        <section class="imagen-light">
            <img src="../img/x-regular-24.png" alt="" class="close">
            <img src="../img/fondo.jpg" alt="" class="agregar-imagen">
        </section>
        <script src="../js/lightbox.js"></script>
    `
    }
}
customElements.define("app-lig", light);
export default light;