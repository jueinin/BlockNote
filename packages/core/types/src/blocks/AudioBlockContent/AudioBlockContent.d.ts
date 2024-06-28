import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { BlockFromConfig, Props } from "../../schema";
export declare const audioPropSchema: {
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
};
export declare const audioBlockConfig: {
    type: "audio";
    propSchema: {
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
    };
    content: "none";
    isFileBlock: true;
    fileBlockAcceptMimeTypes: string[];
};
export declare const audioRender: (block: BlockFromConfig<typeof audioBlockConfig, any, any>, editor: BlockNoteEditor<any, any, any>) => {
    dom: HTMLDivElement;
    destroy: () => void;
} | {
    dom: HTMLDivElement;
    destroy?: undefined;
};
export declare const audioParse: (element: HTMLElement) => Partial<Props<typeof audioBlockConfig.propSchema>> | undefined;
export declare const audioToExternalHTML: (block: BlockFromConfig<typeof audioBlockConfig, any, any>) => {
    dom: HTMLElement;
};
export declare const AudioBlock: {
    config: {
        type: "audio";
        propSchema: {
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
        };
        content: "none";
        isFileBlock: true;
        fileBlockAcceptMimeTypes: string[];
    };
    implementation: import("../../schema").TiptapBlockImplementation<{
        type: "audio";
        propSchema: {
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
        };
        content: "none";
        isFileBlock: true;
        fileBlockAcceptMimeTypes: string[];
    }, any, import("../../schema").InlineContentSchema, import("../../schema").StyleSchema>;
};
