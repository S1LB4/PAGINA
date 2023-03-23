class contenedor extends HTMLElement {
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
        <section class="contenedor" id="servicio">
            <h2 class="subtitulo">Our service</h2>
            <div class="contenedor-servicio">
                <img src="../img/Spotlight _Isometric.png" alt="">
                <div class="checklist-servicio">
                    <div class="service">
                        <h3 class="n-service"><span class="number">1</span>Clothe Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quis eius impedit officiis, fuga deleniti velit sunt sed ea quo.</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">2</span>Clothe Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quis eius impedit officiis, fuga deleniti velit sunt sed ea quo.</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">3</span>Clothe Design</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quis eius impedit officiis, fuga deleniti velit sunt sed ea quo.</p>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}
customElements.define("app-conte", contenedor);
export default contenedor;