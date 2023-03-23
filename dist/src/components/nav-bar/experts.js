class expertos extends HTMLElement {
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
       <section class="contenedor" id="expertos">
            <h2 class="subtitulo">Experts in:</h2>
            <section class="experts">
                <div class="cont-expert">
                    <img src="../img/Settings_Isometric.png" alt="">
                    <h3 class="n-expert">Analytics</h3>
                </div>
            </section>
            <section class="experts">
                <div class="cont-expert">
                    <img src="../img/Wearing a mask _Isometric.png" alt="">
                    <h3 class="n-expert">CEO</h3>
                </div>
            </section>
            <section class="experts">
                <div class="cont-expert">
                    <img src="../img/Eating ice cream_Isometric.png" alt="">
                    <h3 class="n-expert">Security</h3>
                </div>
            </section>
        </section>
        `
    }
}
customElements.define("app-exp", expertos);
export default expertos;
