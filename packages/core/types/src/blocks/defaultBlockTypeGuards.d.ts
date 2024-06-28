import type { BlockNoteEditor } from "../editor/BlockNoteEditor";
import { BlockFromConfig, BlockSchema, FileBlockConfig, InlineContentSchema, StyleSchema } from "../schema";
import { Block, DefaultBlockSchema } from "./defaultBlocks";
import { defaultProps } from "./defaultProps";
export declare function checkDefaultBlockTypeInSchema<BlockType extends keyof DefaultBlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blockType: BlockType, editor: BlockNoteEditor<any, I, S>): editor is BlockNoteEditor<{
    Type: DefaultBlockSchema[BlockType];
}, I, S>;
export declare function checkBlockIsDefaultType<BlockType extends keyof DefaultBlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blockType: BlockType, block: Block<any, I, S>, editor: BlockNoteEditor<any, I, S>): block is BlockFromConfig<DefaultBlockSchema[BlockType], I, S>;
export declare function checkBlockIsFileBlock<B extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(block: Block<any, I, S>, editor: BlockNoteEditor<B, I, S>): block is BlockFromConfig<FileBlockConfig, I, S>;
export declare function checkBlockIsFileBlockWithPreview<B extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(block: Block<any, I, S>, editor: BlockNoteEditor<B, I, S>): block is BlockFromConfig<FileBlockConfig & {
    propSchema: Required<FileBlockConfig["propSchema"]>;
}, I, S>;
export declare function checkBlockIsFileBlockWithPlaceholder<B extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(block: Block<B, I, S>, editor: BlockNoteEditor<B, I, S>): boolean | undefined;
export declare function checkBlockTypeHasDefaultProp<Prop extends keyof typeof defaultProps, I extends InlineContentSchema, S extends StyleSchema>(prop: Prop, blockType: string, editor: BlockNoteEditor<any, I, S>): editor is BlockNoteEditor<{
    [BT in string]: {
        type: BT;
        propSchema: {
            [P in Prop]: (typeof defaultProps)[P];
        };
        content: "table" | "inline" | "none";
    };
}, I, S>;
export declare function checkBlockHasDefaultProp<Prop extends keyof typeof defaultProps, I extends InlineContentSchema, S extends StyleSchema>(prop: Prop, block: Block<any, I, S>, editor: BlockNoteEditor<any, I, S>): block is BlockFromConfig<{
    type: string;
    propSchema: {
        [P in Prop]: (typeof defaultProps)[P];
    };
    content: "table" | "inline" | "none";
}, I, S>;
