import { EditorOptions } from "@tiptap/core";
import { Node } from "prosemirror-model";
import * as Y from "yjs";
import { Block, DefaultBlockSchema, DefaultInlineContentSchema, DefaultStyleSchema, PartialBlock } from "../blocks/defaultBlocks";
import { FilePanelProsemirrorPlugin } from "../extensions/FilePanel/FilePanelPlugin";
import { FormattingToolbarProsemirrorPlugin } from "../extensions/FormattingToolbar/FormattingToolbarPlugin";
import { LinkToolbarProsemirrorPlugin } from "../extensions/LinkToolbar/LinkToolbarPlugin";
import { SideMenuProsemirrorPlugin } from "../extensions/SideMenu/SideMenuPlugin";
import { SuggestionMenuProseMirrorPlugin } from "../extensions/SuggestionMenu/SuggestionPlugin";
import { TableHandlesProsemirrorPlugin } from "../extensions/TableHandles/TableHandlesPlugin";
import { BlockIdentifier, BlockNoteDOMAttributes, BlockSchema, BlockSpecs, InlineContentSchema, InlineContentSpecs, PartialInlineContent, StyleSchema, StyleSpecs, Styles } from "../schema";
import { NoInfer } from "../util/typescript";
import { TextCursorPosition } from "./cursorPositionTypes";
import { Selection } from "./selectionTypes";
import { BlockNoteSchema } from "./BlockNoteSchema";
import { BlockNoteTipTapEditor } from "./BlockNoteTipTapEditor";
import { Dictionary } from "../i18n/dictionary";
import "./Block.css";
import "./editor.css";
export type BlockNoteEditorOptions<BSchema extends BlockSchema, ISchema extends InlineContentSchema, SSchema extends StyleSchema> = {
    disableExtensions: string[];
    /**
     * A dictionary object containing translations for the editor.
     */
    dictionary?: Dictionary;
    /**
     * @deprecated, provide placeholders via dictionary instead
     */
    placeholders: Record<string | "default", string>;
    /**
     * An object containing attributes that should be added to HTML elements of the editor.
     *
     * @example { editor: { class: "my-editor-class" } }
     */
    domAttributes: Partial<BlockNoteDOMAttributes>;
    /**
     * The content that should be in the editor when it's created, represented as an array of partial block objects.
     */
    initialContent: PartialBlock<NoInfer<BSchema>, NoInfer<ISchema>, NoInfer<SSchema>>[];
    /**
     * Use default BlockNote font and reset the styles of <p> <li> <h1> elements etc., that are used in BlockNote.
     *
     * @default true
     */
    defaultStyles: boolean;
    schema: BlockNoteSchema<BSchema, ISchema, SSchema>;
    /**
     * A custom function to handle file uploads.
     * @param file The file that should be uploaded.
     * @returns The URL of the uploaded file OR an object containing props that should be set on the file block (such as an id)
     */
    uploadFile: (file: File) => Promise<string | Record<string, any>>;
    /**
     * Resolve a URL of a file block to one that can be displayed or downloaded. This can be used for creating authenticated URL or
     * implementing custom protocols / schemes
     * @returns The URL that's
     */
    resolveFileUrl: (url: string) => Promise<string>;
    /**
     * When enabled, allows for collaboration between multiple users.
     */
    collaboration: {
        /**
         * The Yjs XML fragment that's used for collaboration.
         */
        fragment: Y.XmlFragment;
        /**
         * The user info for the current user that's shown to other collaborators.
         */
        user: {
            name: string;
            color: string;
        };
        /**
         * A Yjs provider (used for awareness / cursor information)
         */
        provider: any;
        /**
         * Optional function to customize how cursors of users are rendered
         */
        renderCursor?: (user: any) => HTMLElement;
    };
    _tiptapOptions: Partial<EditorOptions> | ((editor: BlockNoteEditor<BSchema, ISchema, SSchema>) => Partial<EditorOptions>);
    trailingBlock?: boolean;
};
export declare class BlockNoteEditor<BSchema extends BlockSchema = DefaultBlockSchema, ISchema extends InlineContentSchema = DefaultInlineContentSchema, SSchema extends StyleSchema = DefaultStyleSchema> {
    private readonly options;
    readonly _tiptapEditor: BlockNoteTipTapEditor & {
        contentComponent: any;
    };
    blockCache: WeakMap<Node, Block<any, any, any>>;
    readonly dictionary: Dictionary;
    readonly schema: BlockNoteSchema<BSchema, ISchema, SSchema>;
    readonly blockImplementations: BlockSpecs;
    readonly inlineContentImplementations: InlineContentSpecs;
    readonly styleImplementations: StyleSpecs;
    readonly formattingToolbar: FormattingToolbarProsemirrorPlugin;
    readonly linkToolbar: LinkToolbarProsemirrorPlugin<BSchema, ISchema, SSchema>;
    readonly sideMenu: SideMenuProsemirrorPlugin<BSchema, ISchema, SSchema>;
    readonly suggestionMenus: SuggestionMenuProseMirrorPlugin<BSchema, ISchema, SSchema>;
    readonly filePanel?: FilePanelProsemirrorPlugin<ISchema, SSchema>;
    readonly tableHandles?: TableHandlesProsemirrorPlugin<ISchema, SSchema>;
    readonly uploadFile: ((file: File) => Promise<string | Record<string, any>>) | undefined;
    readonly resolveFileUrl: (url: string) => Promise<string>;
    static create<BSchema extends BlockSchema = DefaultBlockSchema, ISchema extends InlineContentSchema = DefaultInlineContentSchema, SSchema extends StyleSchema = DefaultStyleSchema>(options?: Partial<BlockNoteEditorOptions<BSchema, ISchema, SSchema>>): BlockNoteEditor<BSchema, ISchema, SSchema>;
    private constructor();
    /**
     * Mount the editor to a parent DOM element. Call mount(undefined) to clean up
     *
     * @warning Not needed for React, use BlockNoteView to take care of this
     */
    mount(parentElement?: HTMLElement | null): void;
    get prosemirrorView(): import("prosemirror-view").EditorView;
    get domElement(): HTMLDivElement;
    isFocused(): boolean;
    focus(): void;
    /**
     * @deprecated, use `editor.document` instead
     */
    get topLevelBlocks(): Block<BSchema, ISchema, SSchema>[];
    /**
     * Gets a snapshot of all top-level (non-nested) blocks in the editor.
     * @returns A snapshot of all top-level (non-nested) blocks in the editor.
     */
    get document(): Block<BSchema, ISchema, SSchema>[];
    /**
     * Gets a snapshot of an existing block from the editor.
     * @param blockIdentifier The identifier of an existing block that should be retrieved.
     * @returns The block that matches the identifier, or `undefined` if no matching block was found.
     */
    getBlock(blockIdentifier: BlockIdentifier): Block<BSchema, ISchema, SSchema> | undefined;
    /**
     * Traverses all blocks in the editor depth-first, and executes a callback for each.
     * @param callback The callback to execute for each block. Returning `false` stops the traversal.
     * @param reverse Whether the blocks should be traversed in reverse order.
     */
    forEachBlock(callback: (block: Block<BSchema, ISchema, SSchema>) => boolean, reverse?: boolean): void;
    /**
     * Executes a callback whenever the editor's contents change.
     * @param callback The callback to execute.
     */
    onEditorContentChange(callback: () => void): void;
    /**
     * Executes a callback whenever the editor's selection changes.
     * @param callback The callback to execute.
     */
    onEditorSelectionChange(callback: () => void): void;
    /**
     * Gets a snapshot of the current text cursor position.
     * @returns A snapshot of the current text cursor position.
     */
    getTextCursorPosition(): TextCursorPosition<BSchema, ISchema, SSchema>;
    /**
     * Sets the text cursor position to the start or end of an existing block. Throws an error if the target block could
     * not be found.
     * @param targetBlock The identifier of an existing block that the text cursor should be moved to.
     * @param placement Whether the text cursor should be placed at the start or end of the block.
     */
    setTextCursorPosition(targetBlock: BlockIdentifier, placement?: "start" | "end"): void;
    /**
     * Gets a snapshot of the current selection.
     */
    getSelection(): Selection<BSchema, ISchema, SSchema> | undefined;
    /**
     * Checks if the editor is currently editable, or if it's locked.
     * @returns True if the editor is editable, false otherwise.
     */
    get isEditable(): boolean;
    /**
     * Makes the editor editable or locks it, depending on the argument passed.
     * @param editable True to make the editor editable, or false to lock it.
     */
    set isEditable(editable: boolean);
    /**
     * Inserts new blocks into the editor. If a block's `id` is undefined, BlockNote generates one automatically. Throws an
     * error if the reference block could not be found.
     * @param blocksToInsert An array of partial blocks that should be inserted.
     * @param referenceBlock An identifier for an existing block, at which the new blocks should be inserted.
     * @param placement Whether the blocks should be inserted just before, just after, or nested inside the
     * `referenceBlock`. Inserts the blocks at the start of the existing block's children if "nested" is used.
     */
    insertBlocks(blocksToInsert: PartialBlock<BSchema, ISchema, SSchema>[], referenceBlock: BlockIdentifier, placement?: "before" | "after" | "nested"): Block<BSchema, ISchema, SSchema>[];
    /**
     * Updates an existing block in the editor. Since updatedBlock is a PartialBlock object, some fields might not be
     * defined. These undefined fields are kept as-is from the existing block. Throws an error if the block to update could
     * not be found.
     * @param blockToUpdate The block that should be updated.
     * @param update A partial block which defines how the existing block should be changed.
     */
    updateBlock(blockToUpdate: BlockIdentifier, update: PartialBlock<BSchema, ISchema, SSchema>): Block<BSchema, ISchema, SSchema>;
    /**
     * Removes existing blocks from the editor. Throws an error if any of the blocks could not be found.
     * @param blocksToRemove An array of identifiers for existing blocks that should be removed.
     */
    removeBlocks(blocksToRemove: BlockIdentifier[]): Block<BSchema, ISchema, SSchema>[];
    /**
     * Replaces existing blocks in the editor with new blocks. If the blocks that should be removed are not adjacent or
     * are at different nesting levels, `blocksToInsert` will be inserted at the position of the first block in
     * `blocksToRemove`. Throws an error if any of the blocks to remove could not be found.
     * @param blocksToRemove An array of blocks that should be replaced.
     * @param blocksToInsert An array of partial blocks to replace the old ones with.
     */
    replaceBlocks(blocksToRemove: BlockIdentifier[], blocksToInsert: PartialBlock<BSchema, ISchema, SSchema>[]): {
        insertedBlocks: Block<BSchema, ISchema, SSchema>[];
        removedBlocks: Block<BSchema, ISchema, SSchema>[];
    };
    /**
     * Insert a piece of content at the current cursor position.
     *
     * @param content can be a string, or array of partial inline content elements
     */
    insertInlineContent(content: PartialInlineContent<ISchema, SSchema>): void;
    /**
     * Gets the active text styles at the text cursor position or at the end of the current selection if it's active.
     */
    getActiveStyles(): Styles<SSchema>;
    /**
     * Adds styles to the currently selected content.
     * @param styles The styles to add.
     */
    addStyles(styles: Styles<SSchema>): void;
    /**
     * Removes styles from the currently selected content.
     * @param styles The styles to remove.
     */
    removeStyles(styles: Styles<SSchema>): void;
    /**
     * Toggles styles on the currently selected content.
     * @param styles The styles to toggle.
     */
    toggleStyles(styles: Styles<SSchema>): void;
    /**
     * Gets the currently selected text.
     */
    getSelectedText(): string;
    /**
     * Gets the URL of the last link in the current selection, or `undefined` if there are no links in the selection.
     */
    getSelectedLinkUrl(): string | undefined;
    /**
     * Creates a new link to replace the selected content.
     * @param url The link URL.
     * @param text The text to display the link with.
     */
    createLink(url: string, text?: string): void;
    /**
     * Checks if the block containing the text cursor can be nested.
     */
    canNestBlock(): boolean;
    /**
     * Nests the block containing the text cursor into the block above it.
     */
    nestBlock(): void;
    /**
     * Checks if the block containing the text cursor is nested.
     */
    canUnnestBlock(): boolean;
    /**
     * Lifts the block containing the text cursor out of its parent.
     */
    unnestBlock(): void;
    /**
     * Serializes blocks into an HTML string. To better conform to HTML standards, children of blocks which aren't list
     * items are un-nested in the output HTML.
     * @param blocks An array of blocks that should be serialized into HTML.
     * @returns The blocks, serialized as an HTML string.
     */
    blocksToHTMLLossy(blocks?: Block<BSchema, ISchema, SSchema>[]): Promise<string>;
    /**
     * Parses blocks from an HTML string. Tries to create `Block` objects out of any HTML block-level elements, and
     * `InlineNode` objects from any HTML inline elements, though not all element types are recognized. If BlockNote
     * doesn't recognize an HTML element's tag, it will parse it as a paragraph or plain text.
     * @param html The HTML string to parse blocks from.
     * @returns The blocks parsed from the HTML string.
     */
    tryParseHTMLToBlocks(html: string): Promise<Block<BSchema, ISchema, SSchema>[]>;
    /**
     * Serializes blocks into a Markdown string. The output is simplified as Markdown does not support all features of
     * BlockNote - children of blocks which aren't list items are un-nested and certain styles are removed.
     * @param blocks An array of blocks that should be serialized into Markdown.
     * @returns The blocks, serialized as a Markdown string.
     */
    blocksToMarkdownLossy(blocks?: Block<BSchema, ISchema, SSchema>[]): Promise<string>;
    /**
     * Creates a list of blocks from a Markdown string. Tries to create `Block` and `InlineNode` objects based on
     * Markdown syntax, though not all symbols are recognized. If BlockNote doesn't recognize a symbol, it will parse it
     * as text.
     * @param markdown The Markdown string to parse blocks from.
     * @returns The blocks parsed from the Markdown string.
     */
    tryParseMarkdownToBlocks(markdown: string): Promise<Block<BSchema, ISchema, SSchema>[]>;
    /**
     * Updates the user info for the current user that's shown to other collaborators.
     */
    updateCollaborationUserInfo(user: {
        name: string;
        color: string;
    }): void;
    /**
     * A callback function that runs whenever the editor's contents change.
     *
     * @param callback The callback to execute.
     * @returns A function to remove the callback.
     */
    onChange(callback: (editor: BlockNoteEditor<BSchema, ISchema, SSchema>) => void): () => void;
    /**
     * A callback function that runs whenever the text cursor position or selection changes.
     *
     * @param callback The callback to execute.
     * @returns A function to remove the callback.
     */
    onSelectionChange(callback: (editor: BlockNoteEditor<BSchema, ISchema, SSchema>) => void): () => void;
}