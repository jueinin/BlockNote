import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { Block, PartialBlock } from "../../blocks/defaultBlocks";
import { BlockSchema, InlineContentSchema, StyleSchema } from "../../schema";
import { DefaultSuggestionItem } from "./DefaultSuggestionItem";
export declare function insertOrUpdateBlock<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(editor: BlockNoteEditor<BSchema, I, S>, block: PartialBlock<BSchema, I, S>): Block<BSchema, I, S>;
export declare function getDefaultSlashMenuItems<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(editor: BlockNoteEditor<BSchema, I, S>): DefaultSuggestionItem[];
export declare function filterSuggestionItems<T extends {
    title: string;
    aliases?: readonly string[];
}>(items: T[], query: string): T[];
