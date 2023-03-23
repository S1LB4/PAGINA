class navBar extends HTMLElement {
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
        <nav class="nav container">
        <div class="nav_logo">
            <li class="nav_items">
             <img href="#" class="nav_title"  src="../img/usuario.png">
            </li>

        </div>
        <ul class="nav_link nav_link--menu">
            <li class="nav_items">
                <a href="#" class="nav_links">NUEVA COLECCION</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">ROPA</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">DENIM</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">DEPORTIVO</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">ZAPATOS</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">ACCESORIOS</a>
            </li>
            <li class="nav_items">
                <a href="#" class="nav_links">OUTLOOK</a>
            </li>
            <li class="nav_items">
                <img href="#" src="../img/lupa.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/phone.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/heart.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/usuario.png">
            </li>
            <li class="nav_items">
                <img href="#" src="../img/bolsa.png">
            </li>


        </ul>
    </nav>`
    }
}
customElements.define("app-navbar", navBar);
export default navBar;