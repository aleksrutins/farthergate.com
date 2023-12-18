import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import Card from "./Card.ts";
import {Task} from "@lit/task";

type LanguageInfo = {
    language: string,
    color: string,
    amount: number
}

type LangleyResponse = LanguageInfo[];

@customElement("x-language-indicator")
class LanguageIndicator extends LitElement {
    @property()
    accessor language!: LanguageInfo

    override render() {
        return html`
            <div class="flex flex-row items-center gap-2">
                <div class="rounded-full border w-3 h-3" style="background-color: ${this.language.color}"></div>
                <p>${this.language.language}</p>
            </div>
        `;
    }
}

@customElement("x-project-card")
export default class extends Card {
    @property()
    accessor name!: string;
    @property()
    accessor url: string | undefined;
    @property()
    accessor github: string | undefined;

    private _languages = new Task(this, {
        task: async ([github], {signal}) => {
            const response = await fetch(`https://langley.farthergate.com/${github}`, {signal});
            if(!response.ok) throw new Error(response.statusText);
            return await response.json() as LangleyResponse;
        },
        args: () => [this.github]
    });

    override header() {
        return html`
            ${this.name}
            ${this.url && html`
                <a href="${this.url}">
                    <img src="/icons/open-in-browser.svg" alt="Website">
                </a>
            `}
            ${this.github && html`
                <a href="${this.github}">
                    <img src="/icons/github.svg" alt="GitHub">
                </a>
            `}
        `
    }

    override content() {
        return html`<slot/>`;
    }

    override footer() {
        if(this.github) {
            return html`
                <div class="flex flex-row gap-2">
                    ${this._languages.render({
                        pending: () => html`<div class="h-3"></div>`,
                        complete: langs => langs.map(lang =>
                            html`<x-language-indicator language=${lang}></x-language-indicator>`
                        )
                    })}
                </div>
            `
        } else {
            return '';
        }
    }
}