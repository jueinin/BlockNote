import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { BlockFromConfig, Props } from "../../schema";
export declare const videoPropSchema: {
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
export declare const videoBlockConfig: {
    type: "video";
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
export declare const videoRender: (block: BlockFromConfig<typeof videoBlockConfig, any, any>, editor: BlockNoteEditor<any, any, any>) => {
    dom: HTMLDivElement;
    destroy: () => void;
} | {
    dom: HTMLDivElement;
    destroy?: undefined;
};
export declare const videoParse: (element: HTMLElement) => Partial<Props<typeof videoBlockConfig.propSchema>> | undefined;
export declare const videoToExternalHTML: (block: BlockFromConfig<typeof videoBlockConfig, any, any>) => {
    dom: HTMLElement;
};
export declare const VideoBlock: {
    config: {
        type: "video";
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
        type: "video";
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
