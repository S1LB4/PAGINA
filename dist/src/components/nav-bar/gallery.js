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
            <h2 class="subtitulo">RESTAURANTS NEAR YOU</h2>
            <div class="contenedor-galeria">
                <img src="../img/santos.png" alt="" class="img-galeria">
                <img src="../img/corral.png" alt="" class="img-galeria">
                <img src="../img/Cheers.png" alt="" class="img-galeria">
                <img src="../img/MW.jpg" alt="" class="img-galeria">
                <img src="../img/cuuc.jpg" alt="" class="img-galeria">
                <img src="../img/martins.jpg" alt="" class="img-galeria">

            </div>
        </section>
        `
    }
}
customElements.define("app-galle", gallery);
export default gallery;