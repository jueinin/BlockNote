import type { BlockNoteEditor } from "./BlockNoteEditor";
import * as Y from "yjs";
import { BlockNoteDOMAttributes, BlockSpecs, InlineContentSchema, InlineContentSpecs, StyleSchema, StyleSpecs } from "../schema";
/**
 * Get all the Tiptap extensions BlockNote is configured with by default
 */
export declare const getBlockNoteExtensions: <BSchema extends Record<string, import("../schema").BlockConfig>, I extends InlineContentSchema, S extends StyleSchema>(opts: {
    editor: BlockNoteEditor<BSchema, I, S>;
    domAttributes: Partial<BlockNoteDOMAttributes>;
    blockSchema: BSchema;
    blockSpecs: BlockSpecs;
    inlineContentSpecs: InlineContentSpecs;
    styleSpecs: StyleSpecs;
    trailingBlock: boolean | undefined;
    collaboration?: {
        fragment: Y.XmlFragment;
        user: {
            name: string;
            color: string;
        };
        provider: any;
        renderCursor?: (user: any) => HTMLElement;
    };
    disableExtensions: string[] | undefined;
}) => import("@tiptap/core").AnyExtension[];
