import {html, LitElement} from "lit";

export default abstract class extends LitElement {
    abstract header(): unknown
    abstract footer(): unknown
    abstract content(): unknown

    override render() {
        return html`
            <div class="border rounded-lg p-3 shadow-sm hover:shadow-md flex flex-column justify-between">
                <div>
                    <h2 class="font-xl font-bold">${this.header()}</h2>
                    <p class="prose">
                        ${this.content()}
                    </p>
                </div>
                <div>${this.footer()}</div>
            </div>
        `
    }
}