import { InlineContentSchema, StyleSchema } from "@blocknote/core";
import { FilePanelProps } from "../FilePanelProps";
export declare const EmbedTab: <B extends Record<string, import("@blocknote/core").BlockConfig> = import("@blocknote/core").BlockSchemaFromSpecs<{
    paragraph: {
        config: {
            type: "paragraph";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "paragraph";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    heading: {
        config: {
            type: "heading";
            content: "inline";
            propSchema: {
                level: {
                    default: number;
                    values: readonly [1, 2, 3];
                };
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "heading";
            content: "inline";
            propSchema: {
                level: {
                    default: number;
                    values: readonly [1, 2, 3];
                };
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    bulletListItem: {
        config: {
            type: "bulletListItem";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "bulletListItem";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    numberedListItem: {
        config: {
            type: "numberedListItem";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "numberedListItem";
            content: "inline";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    checkListItem: {
        config: {
            type: "checkListItem";
            content: "inline";
            propSchema: {
                checked: {
                    default: false;
                };
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "checkListItem";
            content: "inline";
            propSchema: {
                checked: {
                    default: false;
                };
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    table: {
        config: {
            type: "table";
            content: "table";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "table";
            content: "table";
            propSchema: {
                backgroundColor: {
                    default: "default";
                };
                textColor: {
                    default: "default";
                };
                textAlignment: {
                    default: "left";
                    values: readonly ["left", "center", "right", "justify"];
                };
            };
        }, any, InlineContentSchema, StyleSchema>;
    };
    file: {
        config: {
            type: "file";
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
            };
            content: "none";
            isFileBlock: true;
        };
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
            type: "file";
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
            };
            content: "none";
            isFileBlock: true;
        }, any, InlineContentSchema, StyleSchema>;
    };
    image: {
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
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
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
        }, any, InlineContentSchema, StyleSchema>;
    };
    video: {
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
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
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
        }, any, InlineContentSchema, StyleSchema>;
    };
    audio: {
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
        implementation: import("@blocknote/core").TiptapBlockImplementation<{
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
        }, any, InlineContentSchema, StyleSchema>;
    };
}>, I extends InlineContentSchema = import("@blocknote/core").InlineContentSchemaFromSpecs<{
    text: {
        config: "text";
        implementation: any;
    };
    link: {
        config: "link";
        implementation: any;
    };
}>, S extends StyleSchema = import("@blocknote/core").StyleSchemaFromSpecs<{
    bold: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    italic: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    underline: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    strike: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    code: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    textColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
    backgroundColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("@blocknote/core").StyleImplementation;
    };
}>>(props: FilePanelProps<I, S>) => import("react/jsx-runtime").JSX.Element;
