import { FileBlockConfig, audioBlockConfig } from "@blocknote/core";
import { ReactCustomBlockRenderProps } from "../../schema/ReactBlockSpec";
export declare const AudioPreview: (props: Omit<ReactCustomBlockRenderProps<FileBlockConfig, any, any>, "contentRef">) => import("react/jsx-runtime").JSX.Element | null;
export declare const AudioToExternalHTML: (props: Omit<ReactCustomBlockRenderProps<typeof audioBlockConfig, any, any>, "contentRef">) => import("react/jsx-runtime").JSX.Element;
export declare const ReactAudioBlock: {
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
    }, any, import("@blocknote/core").InlineContentSchema, import("@blocknote/core").StyleSchema>;
};
