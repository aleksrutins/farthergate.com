import React, {type ReactNode, useEffect, useState} from "react";
import Card from "./Card.tsx";
import {Github, OpenInBrowser} from "iconoir-react";

type LanguageInfo = {
    language: string,
    color: string,
    amount: number
}

type LangleyResponse = LanguageInfo[];

const LanguageIndicator = ({language}: { language: LanguageInfo }) => <span
    className="flex flex-row items-center gap-2">
    <span className="block w-4 h-4 border rounded-full" style={{backgroundColor: language.color}}></span>
    <span className="block">{language.language}</span>
</span>

export default ({name, url, github, children}: {
    name: string,
    url?: string,
    github?: string,
    children: ReactNode
}) => {
    const [languages, setLanguages] = useState<LangleyResponse | undefined>();
    useEffect(() => {
        if (github) fetch(`https://langley.farthergate.com/${github}`)
            .then(res => res.json())
            .then(res => setLanguages((res as LangleyResponse).toSorted((a, b) => a.amount - b.amount)))
    }, [])

    return <Card title={name} header={<>
        {url && <a href={url} title="Website" aria-label="Website">
            <OpenInBrowser height={24} width={24} aria-hidden={true}/>
        </a>}
        {github && <a href={`https://github.com/${github}`} title="GitHub" aria-label="GitHub">
            <Github height={24} width={24} aria-hidden={true}/>
        </a>}
    </>} footer={<>
        {github && <span className="flex flex-row items-center gap-3">
            {languages ? languages.map(lang => <LanguageIndicator language={lang} key={lang.language}/>) :
                <span className="block h-7"/>}
        </span>}
    </>}>
        {children}
    </Card>
}