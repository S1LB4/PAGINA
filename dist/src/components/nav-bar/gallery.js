class gallery extends HTMLElement {
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
    <section class="gallery" id="portafolio">
            <h2 class="subtitulo">Gallery</h2>
            <div class="contenedor-galeria">
                <img src="../img/out1.1.jpg" alt="" class="img-galeria">
                <img src="../img/out.2.1.jpg" alt="" class="img-galeria">
                <img src="../img/out4.1.jpg" alt="" class="img-galeria">
                <img src="../img/out.6.1.jpg" alt="" class="img-galeria">
                <img src="../img/out5.1.jpg" alt="" class="img-galeria">
                <img src="../img/out3.1.jpg" alt="" class="img-galeria">

            </div>
        </section>
        `
    }
}
customElements.define("app-galle", gallery);
export default gallery;