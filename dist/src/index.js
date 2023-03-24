import * as components from "./components/index.js"
class AppContainer extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <app-navbar>
        </app-navbar>
        <app-header>
        </app-header>
        <app-galle>
        </app-galle>

        <app-galle1>
        </app-galle1>
        `
    }
}
customElements.define('app-container', AppContainer)