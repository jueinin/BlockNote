import { BlockNoDefaults, BlockSchema, InlineContentSchema, PartialBlockNoDefaults, StyleSchema } from "../schema";
export declare const defaultBlockSpecs: {
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
};
export declare const defaultBlockSchema: import("../schema").BlockSchemaFromSpecs<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
        implementation: import("../schema").TiptapBlockImplementation<{
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
}>;
export type _DefaultBlockSchema = typeof defaultBlockSchema;
export type DefaultBlockSchema = _DefaultBlockSchema;
export declare const defaultStyleSpecs: {
    bold: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    italic: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    underline: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    strike: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    code: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    textColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("../schema").StyleImplementation;
    };
    backgroundColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("../schema").StyleImplementation;
    };
};
export declare const defaultStyleSchema: import("../schema").StyleSchemaFromSpecs<{
    bold: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    italic: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    underline: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    strike: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    code: {
        config: {
            type: string;
            propSchema: "boolean";
        };
        implementation: import("../schema").StyleImplementation;
    };
    textColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("../schema").StyleImplementation;
    };
    backgroundColor: {
        config: {
            type: string;
            propSchema: "string";
        };
        implementation: import("../schema").StyleImplementation;
    };
}>;
export type _DefaultStyleSchema = typeof defaultStyleSchema;
export type DefaultStyleSchema = _DefaultStyleSchema;
export declare const defaultInlineContentSpecs: {
    text: {
        config: "text";
        implementation: any;
    };
    link: {
        config: "link";
        implementation: any;
    };
};
export declare const defaultInlineContentSchema: import("../schema").InlineContentSchemaFromSpecs<{
    text: {
        config: "text";
        implementation: any;
    };
    link: {
        config: "link";
        implementation: any;
    };
}>;
export type _DefaultInlineContentSchema = typeof defaultInlineContentSchema;
export type DefaultInlineContentSchema = _DefaultInlineContentSchema;
export type PartialBlock<BSchema extends BlockSchema = DefaultBlockSchema, I extends InlineContentSchema = DefaultInlineContentSchema, S extends StyleSchema = DefaultStyleSchema> = PartialBlockNoDefaults<BSchema, I, S>;
export type Block<BSchema extends BlockSchema = DefaultBlockSchema, I extends InlineContentSchema = DefaultInlineContentSchema, S extends StyleSchema = DefaultStyleSchema> = BlockNoDefaults<BSchema, I, S>;
