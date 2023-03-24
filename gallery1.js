class gallery1 extends HTMLElement {
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
            <h2 class="subtitulo">FAVORITES</h2>
            <div class="contenedor-galeria">
                <img src="../img/santos.png" alt="" class="img-galeria">
                <img src="../img/corral.png" alt="" class="img-galeria">
                <img src="../img/Cheers.png" alt="" class="img-galeria">

            </div>
        </section>
        `
    }
}
customElements.define("app-galle1", gallery1);
export default gallery1;