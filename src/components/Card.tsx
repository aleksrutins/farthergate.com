import React, {type ReactNode} from "react";

export default ({title, header, footer, children}: {
    title: string | ReactNode,
    header: ReactNode,
    footer: ReactNode,
    children: ReactNode
}) =>
    <div
        className="border rounded-lg p-3 shadow-sm hover:shadow-md flex flex-col justify-between gap-3 transition-shadow">
        <span className="block">
            <span className="flex flex-row items-center gap-3">
                <span className="block text-xl font-bold">{title}</span>
                {header}
            </span>
            <span className="block prose">{children}</span>
        </span>
        <span className="block">{footer}</span>
    </div>