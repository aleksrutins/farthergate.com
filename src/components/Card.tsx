import React, {type ReactNode} from "react";

export default ({title, header, footer, href, children}: {
    title: string | ReactNode,
    header: ReactNode,
    footer: ReactNode,
    href?: string,
    children: ReactNode
}) =>
    <a
        className="border rounded-lg p-3 shadow-sm hover:shadow-md flex flex-col justify-between gap-3 transition-shadow"
        href={href}>
        <span className="block">
            <span className="flex flex-row items-center gap-3">
                <h1 className="text-xl font-bold">{title}</h1>
                {header}
            </span>
            <span className="block prose">{children}</span>
        </span>
        <span className="block">{footer}</span>
    </a>