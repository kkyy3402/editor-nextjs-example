// ./components/editorTools.ts
import Code from "@editorjs/code";
import Paragraph from "@editorjs/paragraph";
import CheckList from "@editorjs/checklist";

import Header from "@editorjs/header"
import List from "@editorjs/list"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import Warning from "@editorjs/warning"
import LinkTool from "@editorjs/link"
import Image from '@editorjs/image'
import Raw from "@editorjs/raw"
import Quote from "@editorjs/quote"
import Marker from "@editorjs/marker"
import Delimiter from "@editorjs/delimiter"
import InlineCode from "@editorjs/inline-code"
import SimpleImage from "@editorjs/simple-image"

export const EDITOR_TOOLS = {
    checkList: CheckList,
    list: {
        class: List,
        inlineToolbar: true,
    },
    header: {
        class: Header,
        inlineToolbar: ["link"],
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    embed: Embed,
    table: Table,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    raw: Raw,
    quote: Quote,
    marker: Marker,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    image: {
        class: Image,
        config: {
            endpoints: {
                byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
                byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
        },
    },
    simpleImage: SimpleImage,
};
