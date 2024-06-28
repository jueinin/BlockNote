import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { BlockFromConfig, Props } from "../../schema";
export declare const imagePropSchema: {
    textAlignment: {
        default: "left";
        values: readonly ["left", "center", "right", "justify"];
    };
    backgroundColor: {
        default: "default";
    };
    name: {
        default: "";
    };
    url: {
        default: "";
    };
    caption: {
        default: "";
    };
    showPreview: {
        default: true;
    };
    previewWidth: {
        default: number;
    };
};
export declare const imageBlockConfig: {
    type: "image";
    propSchema: {
        textAlignment: {
            default: "left";
            values: readonly ["left", "center", "right", "justify"];
        };
        backgroundColor: {
            default: "default";
        };
        name: {
            default: "";
        };
        url: {
            default: "";
        };
        caption: {
            default: "";
        };
        showPreview: {
            default: true;
        };
        previewWidth: {
            default: number;
        };
    };
    content: "none";
    isFileBlock: true;
    fileBlockAcceptMimeTypes: string[];
};
export declare const imageRender: (block: BlockFromConfig<typeof imageBlockConfig, any, any>, editor: BlockNoteEditor<any, any, any>) => {
    dom: HTMLDivElement;
    destroy: () => void;
} | {
    dom: HTMLDivElement;
    destroy?: undefined;
};
export declare const imageParse: (element: HTMLElement) => Partial<Props<typeof imageBlockConfig.propSchema>> | undefined;
export declare const imageToExternalHTML: (block: BlockFromConfig<typeof imageBlockConfig, any, any>) => {
    dom: HTMLElement;
};
export declare const ImageBlock: {
    config: {
        type: "image";
        propSchema: {
            textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
            backgroundColor: {
                default: "default";
            };
            name: {
                default: "";
            };
            url: {
                default: "";
            };
            caption: {
                default: "";
            };
            showPreview: {
                default: true;
            };
            previewWidth: {
                default: number;
            };
        };
        content: "none";
        isFileBlock: true;
        fileBlockAcceptMimeTypes: string[];
    };
    implementation: import("../../schema").TiptapBlockImplementation<{
        type: "image";
        propSchema: {
            textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
            backgroundColor: {
                default: "default";
            };
            name: {
                default: "";
            };
            url: {
                default: "";
            };
            caption: {
                default: "";
            };
            showPreview: {
                default: true;
            };
            previewWidth: {
                default: number;
            };
        };
        content: "none";
        isFileBlock: true;
        fileBlockAcceptMimeTypes: string[];
    }, any, import("../../schema").InlineContentSchema, import("../../schema").StyleSchema>;
};
