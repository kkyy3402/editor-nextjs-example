// ./components/Editor.tsx
import React, { useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from "./editorTools";

interface Props {
    data?: OutputData;
    onChange(val: OutputData): void;
    holder: string;
    readonly: boolean;
}

const Editor: React.FC<Props> = ({ data, onChange, holder, readonly }) => {
    const ref = useRef<EditorJS | null>(null);

    useEffect(() => {
        if (!ref.current) {
            ref.current = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                readOnly: readonly,
                autofocus: true,
                onChange: async () => {
                    const outputData = await ref.current?.save();
                    onChange(outputData as OutputData);
                },

            });
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
                ref.current = null;
            }
        };
    }, []);

    return <div id={holder} />;
};

export default Editor;
