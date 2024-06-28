var St = Object.defineProperty;
var Mt = (e, t, o) => t in e ? St(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var c = (e, t, o) => (Mt(e, typeof t != "symbol" ? t + "" : t, o), o);
import { Slice as D, Fragment as L, DOMSerializer as we, DOMParser as Tt, Node as Bt } from "prosemirror-model";
import qe from "rehype-parse";
import Xe from "rehype-stringify";
import { unified as ve } from "unified";
import { Extension as M, combineTransactionSteps as Lt, getChangedRanges as It, findChildrenInRange as At, Node as K, Mark as xe, InputRule as ee, callOrReturn as Nt, getExtensionField as Pt, mergeAttributes as Ht, selectionToInsertionEnd as Ut, isTextSelection as Dt, isNodeSelection as Vt, posToDOMRect as ke, getMarkRange as Pe, findParentNode as Rt, findChildren as He, extensions as J, Editor as Ot, createDocument as jt } from "@tiptap/core";
import { Plugin as y, PluginKey as S, Selection as he, NodeSelection as ne, TextSelection as Y, EditorState as zt } from "prosemirror-state";
import { v4 as Ft } from "uuid";
import { fromDom as _e } from "hast-util-from-dom";
import Gt from "@tiptap/extension-bold";
import Wt from "@tiptap/extension-code";
import $t from "@tiptap/extension-italic";
import Kt from "@tiptap/extension-strike";
import qt from "@tiptap/extension-underline";
import { TableCell as Xt } from "@tiptap/extension-table-cell";
import { TableHeader as Zt } from "@tiptap/extension-table-header";
import { TableRow as Jt } from "@tiptap/extension-table-row";
import { columnResizing as Yt, tableEditing as Qt } from "prosemirror-tables";
import eo from "rehype-remark";
import Ze from "remark-gfm";
import to from "remark-stringify";
import oo from "remark-parse";
import io, { defaultHandlers as no } from "remark-rehype";
import { DecorationSet as G, Decoration as W, EditorView as ro } from "prosemirror-view";
import ao from "@tiptap/extension-collaboration";
import so from "@tiptap/extension-collaboration-cursor";
import { Dropcursor as lo } from "@tiptap/extension-dropcursor";
import { Gapcursor as co } from "@tiptap/extension-gapcursor";
import { HardBreak as uo } from "@tiptap/extension-hard-break";
import { History as po } from "@tiptap/extension-history";
import { Link as ho } from "@tiptap/extension-link";
import { Text as mo } from "@tiptap/extension-text";
const fo = {
  slash_menu: {
    heading: {
      title: "عنوان 1",
      subtext: "يستخدم لعناوين المستوى الأعلى",
      aliases: ["ع", "عنوان1", "ع1"],
      group: "العناوين"
    },
    heading_2: {
      title: "عنوان 2",
      subtext: "يستخدم للأقسام الرئيسية",
      aliases: ["ع2", "عنوان2", "عنوان فرعي"],
      group: "العناوين"
    },
    heading_3: {
      title: "عنوان 3",
      subtext: "يستخدم للأقسام الفرعية والعناوين المجموعة",
      aliases: ["ع3", "عنوان3", "عنوان فرعي"],
      group: "العناوين"
    },
    numbered_list: {
      title: "قائمة مرقمة",
      subtext: "تستخدم لعرض قائمة مرقمة",
      aliases: ["ق", "عناصر قائمة", "قائمة", "قائمة مرقمة"],
      group: "الكتل الأساسية"
    },
    bullet_list: {
      title: "قائمة نقطية",
      subtext: "تستخدم لعرض قائمة غير مرتبة",
      aliases: ["ق", "عناصر قائمة", "قائمة", "قائمة نقطية"],
      group: "الكتل الأساسية"
    },
    check_list: {
      title: "قائمة تحقق",
      subtext: "تستخدم لعرض قائمة بمربعات التحقق",
      aliases: [
        "قوائم غير مرتبة",
        "عناصر قائمة",
        "قائمة",
        "قائمة تحقق",
        "قائمة التحقق",
        "قائمة مشطوبة",
        "مربع التحقق"
      ],
      group: "الكتل الأساسية"
    },
    paragraph: {
      title: "فقرة",
      subtext: "تستخدم لنص الوثيقة الأساسي",
      aliases: ["ف", "فقرة"],
      group: "الكتل الأساسية"
    },
    table: {
      title: "جدول",
      subtext: "يستخدم للجداول",
      aliases: ["جدول"],
      group: "متقدم"
    },
    image: {
      title: "صورة",
      subtext: "إدراج صورة",
      aliases: ["صورة", "رفع صورة", "تحميل", "صورة", "صورة", "وسائط", "رابط"],
      group: "وسائط"
    },
    video: {
      title: "فيديو",
      subtext: "إدراج فيديو",
      aliases: [
        "فيديو",
        "رفع فيديو",
        "تحميل",
        "فيديو",
        "فيلم",
        "وسائط",
        "رابط"
      ],
      group: "وسائط"
    },
    audio: {
      title: "صوت",
      subtext: "إدراج صوت",
      aliases: ["صوت", "رفع صوت", "تحميل", "صوت", "صوت", "وسائط", "رابط"],
      group: "وسائط"
    },
    file: {
      title: "ملف",
      subtext: "إدراج ملف",
      aliases: ["ملف", "تحميل", "تضمين", "وسائط", "رابط"],
      group: "وسائط"
    }
  },
  placeholders: {
    default: "أدخل نصًا أو اكتب '/' للأوامر",
    heading: "عنوان",
    bulletListItem: "قائمة",
    numberedListItem: "قائمة",
    checkListItem: "قائمة"
  },
  file_blocks: {
    image: {
      add_button_text: "إضافة صورة"
    },
    video: {
      add_button_text: "إضافة فيديو"
    },
    audio: {
      add_button_text: "إضافة صوت"
    },
    file: {
      add_button_text: "إضافة ملف"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "إضافة محتوي",
    drag_handle_label: "فتح قائمة المحتويات"
  },
  drag_handle: {
    delete_menuitem: "حذف",
    colors_menuitem: "ألوان"
  },
  table_handle: {
    delete_column_menuitem: "حذف عمود",
    delete_row_menuitem: "حذف صف",
    add_left_menuitem: "إضافة عمود إلى اليسار",
    add_right_menuitem: "إضافة عمود إلى اليمين",
    add_above_menuitem: "إضافة صف أعلى",
    add_below_menuitem: "إضافة صف أسفل"
  },
  suggestion_menu: {
    no_items_title: "لم يتم العثور على عناصر",
    loading: "جارٍ التحميل…"
  },
  color_picker: {
    text_title: "نص",
    background_title: "خلفية",
    colors: {
      default: "افتراضي",
      gray: "رمادي",
      brown: "بني",
      red: "أحمر",
      orange: "برتقالي",
      yellow: "أصفر",
      green: "أخضر",
      blue: "أزرق",
      purple: "أرجواني",
      pink: "وردي"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "عريض",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "مائل",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "تحته خط",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "مشطوب",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "كود",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "ألوان"
    },
    link: {
      tooltip: "إنشاء رابط",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "تحرير التسمية التوضيحية",
      input_placeholder: "تحرير التسمية التوضيحية"
    },
    file_replace: {
      tooltip: {
        image: "استبدال الصورة",
        video: "استبدال الفيديو",
        audio: "استبدال الصوت",
        file: "استبدال الملف"
      }
    },
    file_rename: {
      tooltip: {
        image: "إعادة تسمية الصورة",
        video: "إعادة تسمية الفيديو",
        audio: "إعادة تسمية الصوت",
        file: "إعادة تسمية الملف"
      },
      input_placeholder: {
        image: "إعادة تسمية الصورة",
        video: "إعادة تسمية الفيديو",
        audio: "إعادة تسمية الصوت",
        file: "إعادة تسمية الملف"
      }
    },
    file_download: {
      tooltip: {
        image: "تنزيل الصورة",
        video: "تنزيل الفيديو",
        audio: "تنزيل الصوت",
        file: "تنزيل الملف"
      }
    },
    file_delete: {
      tooltip: {
        image: "حذف الصورة",
        video: "حذف الفيديو",
        audio: "حذف الصوت",
        file: "حذف الملف"
      }
    },
    file_preview_toggle: {
      tooltip: "تبديل المعاينة"
    },
    nest: {
      tooltip: "محتويات متداخلة",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "إلغاء التداخل",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "محاذاة النص إلى اليسار"
    },
    align_center: {
      tooltip: "محاذاة النص في المنتصف"
    },
    align_right: {
      tooltip: "محاذاة النص إلى اليمين"
    },
    align_justify: {
      tooltip: "ضبط النص"
    }
  },
  file_panel: {
    upload: {
      title: "تحميل",
      file_placeholder: {
        image: "تحميل صورة",
        video: "تحميل فيديو",
        audio: "تحميل صوت",
        file: "تحميل ملف"
      },
      upload_error: "خطأ: فشل التحميل"
    },
    embed: {
      title: "تضمين",
      embed_button: {
        image: "تضمين صورة",
        video: "تضمين فيديو",
        audio: "تضمين صوت",
        file: "تضمين ملف"
      },
      url_placeholder: "أدخل الرابط"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "إزالة الرابط"
    },
    edit: {
      text: "تحرير الرابط",
      tooltip: "تحرير"
    },
    open: {
      tooltip: "فتح في تبويب جديد"
    },
    form: {
      title_placeholder: "تحرير العنوان",
      url_placeholder: "تحرير الرابط"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, Je = {
  slash_menu: {
    heading: {
      title: "Heading 1",
      subtext: "Used for a top-level heading",
      aliases: ["h", "heading1", "h1"],
      group: "Headings"
    },
    heading_2: {
      title: "Heading 2",
      subtext: "Used for key sections",
      aliases: ["h2", "heading2", "subheading"],
      group: "Headings"
    },
    heading_3: {
      title: "Heading 3",
      subtext: "Used for subsections and group headings",
      aliases: ["h3", "heading3", "subheading"],
      group: "Headings"
    },
    numbered_list: {
      title: "Numbered List",
      subtext: "Used to display a numbered list",
      aliases: ["ol", "li", "list", "numberedlist", "numbered list"],
      group: "Basic blocks"
    },
    bullet_list: {
      title: "Bullet List",
      subtext: "Used to display an unordered list",
      aliases: ["ul", "li", "list", "bulletlist", "bullet list"],
      group: "Basic blocks"
    },
    check_list: {
      title: "Check List",
      subtext: "Used to display a list with checkboxes",
      aliases: [
        "ul",
        "li",
        "list",
        "checklist",
        "check list",
        "checked list",
        "checkbox"
      ],
      group: "Basic blocks"
    },
    paragraph: {
      title: "Paragraph",
      subtext: "Used for the body of your document",
      aliases: ["p", "paragraph"],
      group: "Basic blocks"
    },
    table: {
      title: "Table",
      subtext: "Used for tables",
      aliases: ["table"],
      group: "Advanced"
    },
    image: {
      title: "Image",
      subtext: "Insert an image",
      aliases: [
        "image",
        "imageUpload",
        "upload",
        "img",
        "picture",
        "media",
        "url"
      ],
      group: "Media"
    },
    video: {
      title: "Video",
      subtext: "Insert a video",
      aliases: [
        "video",
        "videoUpload",
        "upload",
        "mp4",
        "film",
        "media",
        "url"
      ],
      group: "Media"
    },
    audio: {
      title: "Audio",
      subtext: "Insert audio",
      aliases: [
        "audio",
        "audioUpload",
        "upload",
        "mp3",
        "sound",
        "media",
        "url"
      ],
      group: "Media"
    },
    file: {
      title: "File",
      subtext: "Insert a file",
      aliases: ["file", "upload", "embed", "media", "url"],
      group: "Media"
    }
  },
  placeholders: {
    default: "Enter text or type '/' for commands",
    heading: "Heading",
    bulletListItem: "List",
    numberedListItem: "List",
    checkListItem: "List"
  },
  file_blocks: {
    image: {
      add_button_text: "Add image"
    },
    video: {
      add_button_text: "Add video"
    },
    audio: {
      add_button_text: "Add audio"
    },
    file: {
      add_button_text: "Add file"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "Add block",
    drag_handle_label: "Open block menu"
  },
  drag_handle: {
    delete_menuitem: "Delete",
    colors_menuitem: "Colors"
  },
  table_handle: {
    delete_column_menuitem: "Delete column",
    delete_row_menuitem: "Delete row",
    add_left_menuitem: "Add column left",
    add_right_menuitem: "Add column right",
    add_above_menuitem: "Add row above",
    add_below_menuitem: "Add row below"
  },
  suggestion_menu: {
    no_items_title: "No items found",
    loading: "Loading…"
  },
  color_picker: {
    text_title: "Text",
    background_title: "Background",
    colors: {
      default: "Default",
      gray: "Gray",
      brown: "Brown",
      red: "Red",
      orange: "Orange",
      yellow: "Yellow",
      green: "Green",
      blue: "Blue",
      purple: "Purple",
      pink: "Pink"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Bold",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Italic",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Underline",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Strike",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Code",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Colors"
    },
    link: {
      tooltip: "Create link",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Edit caption",
      input_placeholder: "Edit caption"
    },
    file_replace: {
      tooltip: {
        image: "Replace image",
        video: "Replace video",
        audio: "Replace audio",
        file: "Replace file"
      }
    },
    file_rename: {
      tooltip: {
        image: "Rename image",
        video: "Rename video",
        audio: "Rename audio",
        file: "Rename file"
      },
      input_placeholder: {
        image: "Rename image",
        video: "Rename video",
        audio: "Rename audio",
        file: "Rename file"
      }
    },
    file_download: {
      tooltip: {
        image: "Download image",
        video: "Download video",
        audio: "Download audio",
        file: "Download file"
      }
    },
    file_delete: {
      tooltip: {
        image: "Delete image",
        video: "Delete video",
        audio: "Delete audio",
        file: "Delete file"
      }
    },
    file_preview_toggle: {
      tooltip: "Toggle preview"
    },
    nest: {
      tooltip: "Nest block",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Unnest block",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Align text left"
    },
    align_center: {
      tooltip: "Align text center"
    },
    align_right: {
      tooltip: "Align text right"
    },
    align_justify: {
      tooltip: "Justify text"
    }
  },
  file_panel: {
    upload: {
      title: "Upload",
      file_placeholder: {
        image: "Upload image",
        video: "Upload video",
        audio: "Upload audio",
        file: "Upload file"
      },
      upload_error: "Error: Upload failed"
    },
    embed: {
      title: "Embed",
      embed_button: {
        image: "Embed image",
        video: "Embed video",
        audio: "Embed audio",
        file: "Embed file"
      },
      url_placeholder: "Enter URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Remove link"
    },
    edit: {
      text: "Edit link",
      tooltip: "Edit"
    },
    open: {
      tooltip: "Open in new tab"
    },
    form: {
      title_placeholder: "Edit title",
      url_placeholder: "Edit URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, go = {
  slash_menu: {
    heading: {
      title: "Titre 1",
      subtext: "Utilisé pour un titre de premier niveau",
      aliases: ["h", "titre1", "h1"],
      group: "Titres"
    },
    heading_2: {
      title: "Titre 2",
      subtext: "Utilisé pour les sections clés",
      aliases: ["h2", "titre2", "sous-titre"],
      group: "Titres"
    },
    heading_3: {
      title: "Titre 3",
      subtext: "Utilisé pour les sous-sections et les titres de groupe",
      aliases: ["h3", "titre3", "sous-titre"],
      group: "Titres"
    },
    numbered_list: {
      title: "Liste Numérotée",
      subtext: "Utilisé pour afficher une liste numérotée",
      aliases: ["ol", "li", "liste", "listenumérotée", "liste numérotée"],
      group: "Blocs de base"
    },
    bullet_list: {
      title: "Liste à Puces",
      subtext: "Utilisé pour afficher une liste non ordonnée",
      aliases: ["ul", "li", "liste", "listeàpuces", "liste à puces"],
      group: "Blocs de base"
    },
    check_list: {
      title: "Liste de vérification",
      subtext: "Utilisé pour afficher une liste avec des cases à cocher",
      aliases: [
        "ul",
        "li",
        "liste",
        "liste de vérification",
        "liste cochée",
        "case à cocher"
      ],
      group: "Blocs de base"
    },
    paragraph: {
      title: "Paragraphe",
      subtext: "Utilisé pour le corps de votre document",
      aliases: ["p", "paragraphe"],
      group: "Blocs de base"
    },
    table: {
      title: "Tableau",
      subtext: "Utilisé pour les tableaux",
      aliases: ["tableau"],
      group: "Avancé"
    },
    image: {
      title: "Image",
      subtext: "Insérer une image",
      aliases: [
        "image",
        "uploadImage",
        "télécharger",
        "img",
        "photo",
        "média",
        "url"
      ],
      group: "Médias"
    },
    video: {
      title: "Vidéo",
      subtext: "Insérer une vidéo",
      aliases: [
        "vidéo",
        "téléchargerVidéo",
        "téléverser",
        "mp4",
        "film",
        "média",
        "url"
      ],
      group: "Média"
    },
    audio: {
      title: "Audio",
      subtext: "Insérer un audio",
      aliases: [
        "audio",
        "téléchargerAudio",
        "téléverser",
        "mp3",
        "son",
        "média",
        "url"
      ],
      group: "Média"
    },
    file: {
      title: "Fichier",
      subtext: "Insérer un fichier",
      aliases: ["fichier", "téléverser", "intégrer", "média", "url"],
      group: "Média"
    }
  },
  placeholders: {
    default: "Entrez du texte ou tapez '/' pour les commandes",
    heading: "Titre",
    bulletListItem: "Liste",
    numberedListItem: "Liste",
    checkListItem: "Liste"
  },
  file_blocks: {
    image: {
      add_button_text: "Ajouter une image"
    },
    video: {
      add_button_text: "Ajouter une vidéo"
    },
    audio: {
      add_button_text: "Ajouter un audio"
    },
    file: {
      add_button_text: "Ajouter un fichier"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "Ajouter un bloc",
    drag_handle_label: "Ouvrir le menu du bloc"
  },
  drag_handle: {
    delete_menuitem: "Supprimer",
    colors_menuitem: "Couleurs"
  },
  table_handle: {
    delete_column_menuitem: "Supprimer la colonne",
    delete_row_menuitem: "Supprimer la ligne",
    add_left_menuitem: "Ajouter une colonne à gauche",
    add_right_menuitem: "Ajouter une colonne à droite",
    add_above_menuitem: "Ajouter une ligne au-dessus",
    add_below_menuitem: "Ajouter une ligne en dessous"
  },
  suggestion_menu: {
    no_items_title: "Aucun élément trouvé",
    loading: "Chargement…"
  },
  color_picker: {
    text_title: "Texte",
    background_title: "Fond",
    colors: {
      default: "Défaut",
      gray: "Gris",
      brown: "Marron",
      red: "Rouge",
      orange: "Orange",
      yellow: "Jaune",
      green: "Vert",
      blue: "Bleu",
      purple: "Violet",
      pink: "Rose"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Gras",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Italique",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Souligner",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Barré",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Code",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Couleurs"
    },
    link: {
      tooltip: "Créer un lien",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Modifier la légende",
      input_placeholder: "Modifier la légende"
    },
    file_replace: {
      tooltip: {
        image: "Remplacer l'image",
        video: "Remplacer la vidéo",
        audio: "Remplacer l'audio",
        file: "Remplacer le fichier"
      }
    },
    file_rename: {
      tooltip: {
        image: "Renommer l'image",
        video: "Renommer la vidéo",
        audio: "Renommer l'audio",
        file: "Renommer le fichier"
      },
      input_placeholder: {
        image: "Renommer l'image",
        video: "Renommer la vidéo",
        audio: "Renommer l'audio",
        file: "Renommer le fichier"
      }
    },
    file_download: {
      tooltip: {
        image: "Télécharger l'image",
        video: "Télécharger la vidéo",
        audio: "Télécharger l'audio",
        file: "Télécharger le fichier"
      }
    },
    file_delete: {
      tooltip: {
        image: "Supprimer l'image",
        video: "Supprimer la vidéo",
        audio: "Supprimer l'audio",
        file: "Supprimer le fichier"
      }
    },
    file_preview_toggle: {
      tooltip: "Basculer l'aperçu"
    },
    nest: {
      tooltip: "Emboîter le bloc",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Démboîter le bloc",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Aligner le texte à gauche"
    },
    align_center: {
      tooltip: "Aligner le texte au centre"
    },
    align_right: {
      tooltip: "Aligner le texte à droite"
    },
    align_justify: {
      tooltip: "Justifier le texte"
    }
  },
  file_panel: {
    upload: {
      title: "Télécharger",
      file_placeholder: {
        image: "Télécharger une image",
        video: "Télécharger une vidéo",
        audio: "Télécharger un fichier audio",
        file: "Télécharger un fichier"
      },
      upload_error: "Erreur : Échec du téléchargement"
    },
    embed: {
      title: "Intégrer",
      embed_button: {
        image: "Intégrer une image",
        video: "Intégrer une vidéo",
        audio: "Intégrer un fichier audio",
        file: "Intégrer un fichier"
      },
      url_placeholder: "Entrez l'URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Supprimer le lien"
    },
    edit: {
      text: "Modifier le lien",
      tooltip: "Modifier"
    },
    open: {
      tooltip: "Ouvrir dans un nouvel onglet"
    },
    form: {
      title_placeholder: "Modifier le titre",
      url_placeholder: "Modifier l'URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, bo = {
  slash_menu: {
    heading: {
      title: "Fyrirsögn 1",
      subtext: "Notað fyrir efstu fyrirsögn",
      aliases: ["h", "fyrirsogn1", "h1"],
      group: "Fyrirsagnir"
    },
    heading_2: {
      title: "Fyrirsögn 2",
      subtext: "Notað fyrir lykilhluta",
      aliases: ["h2", "fyrirsogn2", "undirfyrirsogn"],
      group: "Fyrirsagnir"
    },
    heading_3: {
      title: "Fyrirsögn 3",
      subtext: "Notað fyrir undirhluta og hópfyrirsagnir",
      aliases: ["h3", "fyrirsogn3", "undirfyrirsogn"],
      group: "Fyrirsagnir"
    },
    numbered_list: {
      title: "Númeruð listi",
      subtext: "Notað til að birta númeraðan lista",
      aliases: ["ol", "li", "listi", "numeradurlisti"],
      group: "Grunnblokkar"
    },
    bullet_list: {
      title: "Punktalisti",
      subtext: "Notað til að birta óraðaðan lista",
      aliases: ["ul", "li", "listi", "punktalisti"],
      group: "Grunnblokkar"
    },
    check_list: {
      title: "Athugunarlisti",
      subtext: "Notað til að sýna lista með gátreitum",
      aliases: ["ul", "li", "listi", "athugunarlisti", "merktur listi"],
      group: "Grunnblokkar"
    },
    paragraph: {
      title: "Málsgrein",
      subtext: "Notað fyrir meginmál skjalsins",
      aliases: ["p", "malsgrein"],
      group: "Grunnblokkar"
    },
    table: {
      title: "Tafla",
      subtext: "Notað fyrir töflur",
      aliases: ["tafla"],
      group: "Ítarlegt"
    },
    image: {
      title: "Mynd",
      subtext: "Settu inn mynd",
      aliases: [
        "mynd",
        "myndaupphlaed",
        "upphlaed",
        "img",
        "mynd",
        "media",
        "url"
      ],
      group: "Miðlar"
    },
    video: {
      title: "Myndband",
      subtext: "Setja inn myndband",
      aliases: [
        "myndband",
        "videoUpphala",
        "hlaða upp",
        "mp4",
        "kvikmynd",
        "miðill",
        "url"
      ],
      group: "Miðill"
    },
    audio: {
      title: "Hljóð",
      subtext: "Setja inn hljóð",
      aliases: [
        "hljóð",
        "audioUpphala",
        "hlaða upp",
        "mp3",
        "hljóð",
        "miðill",
        "url"
      ],
      group: "Miðlar"
    },
    file: {
      title: "Skrá",
      subtext: "Setja inn skrá",
      aliases: ["skrá", "hlaða upp", "fella inn", "miðill", "url"],
      group: "Miðlar"
    }
  },
  placeholders: {
    default: "Sláðu inn texta eða skrifaðu '/' fyrir skipanir",
    heading: "Fyrirsögn",
    bulletListItem: "Listi",
    numberedListItem: "Listi",
    checkListItem: "Listi"
  },
  file_blocks: {
    image: {
      add_button_text: "Bæta við mynd"
    },
    video: {
      add_button_text: "Bæta við myndbandi"
    },
    audio: {
      add_button_text: "Bæta við hljóði"
    },
    file: {
      add_button_text: "Bæta við skrá"
    }
  },
  side_menu: {
    add_block_label: "Bæta við blokki",
    drag_handle_label: "Opna blokkarvalmynd"
  },
  drag_handle: {
    delete_menuitem: "Eyða",
    colors_menuitem: "Litir"
  },
  table_handle: {
    delete_column_menuitem: "Eyða dálki",
    delete_row_menuitem: "Eyða röð",
    add_left_menuitem: "Bæta dálki við til vinstri",
    add_right_menuitem: "Bæta dálki við til hægri",
    add_above_menuitem: "Bæta röð við fyrir ofan",
    add_below_menuitem: "Bæta röð við fyrir neðan"
  },
  suggestion_menu: {
    no_items_title: "Engir hlutir fundust",
    loading: "Hleður…"
  },
  color_picker: {
    text_title: "Texti",
    background_title: "Bakgrunnur",
    colors: {
      default: "Sjálfgefið",
      gray: "Grár",
      brown: "Brúnn",
      red: "Rauður",
      orange: "Appelsínugulur",
      yellow: "Gulur",
      green: "Grænn",
      blue: "Blár",
      purple: "Fjólublár",
      pink: "Bleikur"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Feitletrað",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Skáletrað",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Undirstrikað",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Yfirstrikað",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Kóði",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Litir"
    },
    link: {
      tooltip: "Búa til tengil",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Breyta myndatexta",
      input_placeholder: "Breyta myndatexta"
    },
    file_replace: {
      tooltip: {
        image: "Skipta um mynd",
        video: "Skipta um myndband",
        audio: "Skipta um hljóð",
        file: "Skipta um skrá"
      }
    },
    file_rename: {
      tooltip: {
        image: "Endurnefna mynd",
        video: "Endurnefna myndband",
        audio: "Endurnefna hljóð",
        file: "Endurnefna skrá"
      },
      input_placeholder: {
        image: "Endurnefna mynd",
        video: "Endurnefna myndband",
        audio: "Endurnefna hljóð",
        file: "Endurnefna skrá"
      }
    },
    file_download: {
      tooltip: {
        image: "Sækja mynd",
        video: "Sækja myndband",
        audio: "Sækja hljóð",
        file: "Sækja skrá"
      }
    },
    file_delete: {
      tooltip: {
        image: "Eyða mynd",
        video: "Eyða myndbandi",
        audio: "Eyða hljóði",
        file: "Eyða skrá"
      }
    },
    file_preview_toggle: {
      tooltip: "Skipta um forskoðun"
    },
    nest: {
      tooltip: "Fella blokk saman",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Afþýða blokk",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Vinstrijafna texta"
    },
    align_center: {
      tooltip: "Miðjustilla texta"
    },
    align_right: {
      tooltip: "Hægrijafna texta"
    },
    align_justify: {
      tooltip: "Jafna texta"
    }
  },
  file_panel: {
    upload: {
      title: "Hlaða upp",
      file_placeholder: {
        image: "Hlaða upp mynd",
        video: "Hlaða upp myndband",
        audio: "Hlaða upp hljóð",
        file: "Hlaða upp skrá"
      },
      upload_error: "Villa: Upphleðsla mistókst"
    },
    embed: {
      title: "Innsetja",
      embed_button: {
        image: "Innsetja mynd",
        video: "Innsetja myndband",
        audio: "Innsetja hljóð",
        file: "Innsetja skrá"
      },
      url_placeholder: "Sláðu inn URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Fjarlægja tengil"
    },
    edit: {
      text: "Breyta tengli",
      tooltip: "Breyta"
    },
    open: {
      tooltip: "Opna í nýjum flipa"
    },
    form: {
      title_placeholder: "Breyta titli",
      url_placeholder: "Breyta URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, ko = {
  slash_menu: {
    heading: {
      title: "見出し１",
      subtext: "トップレベルの見出しに使用",
      aliases: ["h", "見出し１", "h1", "大見出し"],
      group: "見出し"
    },
    heading_2: {
      title: "見出し２",
      subtext: "重要なセクションに使用",
      aliases: ["h2", "見出し2", "subheading", "中見出し"],
      group: "見出し"
    },
    heading_3: {
      title: "見出し３",
      subtext: "セクションやグループの見出しに使用",
      aliases: ["h3", "見出し3", "subheading", "小見出し"],
      group: "見出し"
    },
    numbered_list: {
      title: "番号付リスト",
      subtext: "番号付リストを表示するために使用",
      aliases: [
        "ol",
        "li",
        "numberedlist",
        "numbered list",
        "リスト",
        "番号付リスト",
        "番号 リスト"
      ],
      group: "基本ブロック"
    },
    bullet_list: {
      title: "箇条書き",
      subtext: "箇条書きを表示するために使用",
      aliases: [
        "ul",
        "li",
        "bulletlist",
        "bullet list",
        "リスト",
        "箇条書きリスト"
      ],
      group: "基本ブロック"
    },
    check_list: {
      title: "チェックリスト",
      subtext: "チェックボックス付きリストを表示するために使用されます",
      aliases: [
        "ul",
        "li",
        "list",
        "checklist",
        "checked list",
        "リスト",
        "チェックリスト",
        "チェックされたリスト"
      ],
      group: "基本ブロック"
    },
    paragraph: {
      title: "標準テキスト",
      subtext: "本文に使用",
      aliases: ["p", "paragraph", "標準テキスト"],
      group: "基本ブロック"
    },
    table: {
      title: "表",
      subtext: "表に使用",
      aliases: ["table", "表", "テーブル"],
      group: "高度なブロック"
    },
    image: {
      title: "画像",
      subtext: "画像を挿入",
      aliases: [
        "image",
        "imageUpload",
        "upload",
        "img",
        "picture",
        "media",
        "url",
        "画像"
      ],
      group: "メディア"
    },
    video: {
      title: "ビデオ",
      subtext: "ビデオを挿入",
      aliases: [
        "video",
        "videoUpload",
        "upload",
        "mp4",
        "film",
        "media",
        "url",
        "ビデオ"
      ],
      group: "メディア"
    },
    audio: {
      title: "オーディオ",
      subtext: "オーディオを挿入",
      aliases: [
        "audio",
        "audioUpload",
        "upload",
        "mp3",
        "sound",
        "media",
        "url",
        "オーディオ"
      ],
      group: "メディア"
    },
    file: {
      title: "ファイル",
      subtext: "ファイルを挿入",
      aliases: ["file", "upload", "embed", "media", "url", "ファイル"],
      group: "メディア"
    }
  },
  placeholders: {
    default: "テキストを入力するか'/' を入力してコマンド選択",
    heading: "見出し",
    bulletListItem: "リストを追加",
    numberedListItem: "リストを追加",
    checkListItem: "リストを追加"
  },
  file_blocks: {
    image: {
      add_button_text: "画像を追加"
    },
    video: {
      add_button_text: "ビデオを追加"
    },
    audio: {
      add_button_text: "オーディオを追加"
    },
    file: {
      add_button_text: "ファイルを追加"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "ブロックを追加",
    drag_handle_label: "ブロックメニュー"
  },
  drag_handle: {
    delete_menuitem: "削除",
    colors_menuitem: "色を変更"
  },
  table_handle: {
    delete_column_menuitem: "列を削除",
    delete_row_menuitem: "行を削除",
    add_left_menuitem: "左に列を追加",
    add_right_menuitem: "右に列を追加",
    add_above_menuitem: "上に行を追加",
    add_below_menuitem: "下に行を追加"
  },
  suggestion_menu: {
    no_items_title: "アイテムが見つかりません",
    loading: "読込中…"
  },
  color_picker: {
    text_title: "文字色",
    background_title: "背景色",
    colors: {
      default: "デフォルト",
      gray: "グレー",
      brown: "茶色",
      red: "赤",
      orange: "オレンジ",
      yellow: "黄色",
      green: "緑",
      blue: "青",
      purple: "紫",
      pink: "ピンク"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "太字",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "斜体",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "下線",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "打ち消し",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "コード",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "色"
    },
    link: {
      tooltip: "リンク",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "キャプションを編集",
      input_placeholder: "キャプションを編集"
    },
    file_replace: {
      tooltip: {
        image: "画像を置換",
        video: "ビデオを置換",
        audio: "オーディオを置換",
        file: "ファイルを置換"
      }
    },
    file_rename: {
      tooltip: {
        image: "画像の名前を変更",
        video: "ビデオの名前を変更",
        audio: "オーディオの名前を変更",
        file: "ファイルの名前を変更"
      },
      input_placeholder: {
        image: "画像の名前を変更",
        video: "ビデオの名前を変更",
        audio: "オーディオの名前を変更",
        file: "ファイルの名前を変更"
      }
    },
    file_download: {
      tooltip: {
        image: "画像をダウンロード",
        video: "ビデオをダウンロード",
        audio: "オーディオをダウンロード",
        file: "ファイルをダウンロード"
      }
    },
    file_delete: {
      tooltip: {
        image: "画像を削除",
        video: "ビデオを削除",
        audio: "オーディオを削除",
        file: "ファイルを削除"
      }
    },
    file_preview_toggle: {
      tooltip: "プレビューの切り替え"
    },
    nest: {
      tooltip: "インデント増",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "インデント減",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "左揃え"
    },
    align_center: {
      tooltip: "中央揃え"
    },
    align_right: {
      tooltip: "右揃え"
    },
    align_justify: {
      tooltip: "両端揃え"
    }
  },
  file_panel: {
    upload: {
      title: "アップロード",
      file_placeholder: {
        image: "画像をアップロード",
        video: "ビデオをアップロード",
        audio: "オーディオをアップロード",
        file: "ファイルをアップロード"
      },
      upload_error: "エラー: アップロードが失敗しました"
    },
    embed: {
      title: "埋め込み",
      embed_button: {
        image: "画像を埋め込む",
        video: "ビデオを埋め込む",
        audio: "オーディオを埋め込む",
        file: "ファイルを埋め込む"
      },
      url_placeholder: "URLを入力"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "リンクを解除"
    },
    edit: {
      text: "リンクを編集",
      tooltip: "編集"
    },
    open: {
      tooltip: "新しいタブでリンクを開く"
    },
    form: {
      title_placeholder: "タイトルを編集",
      url_placeholder: "URLを編集"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, _o = {
  slash_menu: {
    heading: {
      title: "제목1",
      subtext: "섹션 제목(대)",
      aliases: ["h", "제목1", "h1", "대제목"],
      group: "제목"
    },
    heading_2: {
      title: "제목2",
      subtext: "섹션 제목(중)",
      aliases: ["h2", "제목2", "중제목"],
      group: "제목"
    },
    heading_3: {
      title: "제목3",
      subtext: "섹션 제목(소)",
      aliases: ["h3", "제목3", "subheading"],
      group: "제목"
    },
    numbered_list: {
      title: "번호 매기기 목록",
      subtext: "번호가 매겨진 목록을 추가합니다.",
      aliases: ["ol", "li", "목록", "번호 매기기 목록", "번호 목록"],
      group: "기본 블록"
    },
    bullet_list: {
      title: "글머리 기호 목록",
      subtext: "간단한 글머리 기호를 추가합니다.",
      aliases: ["ul", "li", "목록", "글머리 기호 목록", "글머리 목록"],
      group: "기본 블록"
    },
    check_list: {
      title: "체크리스트",
      subtext: "체크박스가 있는 목록을 표시하는 데 사용",
      aliases: [
        "ul",
        "li",
        "목록",
        "체크리스트",
        "체크 리스트",
        "체크된 목록",
        "체크박스"
      ],
      group: "기본 블록"
    },
    paragraph: {
      title: "본문",
      subtext: "일반 텍스트",
      aliases: ["p", "paragraph", "본문"],
      group: "기본 블록"
    },
    table: {
      title: "표",
      subtext: "간단한 표를 추가합니다.",
      aliases: ["표"],
      group: "고급"
    },
    image: {
      title: "이미지",
      subtext: "이미지 파일을 업로드합니다.",
      aliases: [
        "image",
        "imageUpload",
        "upload",
        "img",
        "picture",
        "media",
        "이미지",
        "url"
      ],
      group: "미디어"
    },
    video: {
      title: "비디오",
      subtext: "비디오 삽입",
      aliases: [
        "video",
        "videoUpload",
        "upload",
        "mp4",
        "film",
        "media",
        "동영상",
        "url"
      ],
      group: "미디어"
    },
    audio: {
      title: "오디오",
      subtext: "오디오 삽입",
      aliases: [
        "audio",
        "audioUpload",
        "upload",
        "mp3",
        "sound",
        "media",
        "오디오",
        "url"
      ],
      group: "미디어"
    },
    file: {
      title: "파일",
      subtext: "파일 삽입",
      aliases: ["file", "upload", "embed", "media", "파일", "url"],
      group: "미디어"
    }
  },
  placeholders: {
    default: "텍스트를 입력하거나 /를 입력하여 명령을 입력하세요.",
    heading: "제목",
    bulletListItem: "목록",
    numberedListItem: "목록",
    checkListItem: "목록"
  },
  file_blocks: {
    image: {
      add_button_text: "이미지 추가"
    },
    video: {
      add_button_text: "비디오 추가"
    },
    audio: {
      add_button_text: "오디오 추가"
    },
    file: {
      add_button_text: "파일 추가"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "블록 추가",
    drag_handle_label: "블록 메뉴 열기"
  },
  drag_handle: {
    delete_menuitem: "삭제",
    colors_menuitem: "색깔"
  },
  table_handle: {
    delete_column_menuitem: "열 1개 삭제",
    delete_row_menuitem: "행 삭제",
    add_left_menuitem: "왼쪽에 열 1개 추가",
    add_right_menuitem: "오른쪽에 열 1개 추가",
    add_above_menuitem: "위에 행 1개 추가",
    add_below_menuitem: "아래에 행 1개 추가"
  },
  suggestion_menu: {
    no_items_title: "항목을 찾을 수 없음",
    loading: "로딩 중…"
  },
  color_picker: {
    text_title: "텍스트",
    background_title: "배경",
    colors: {
      default: "기본",
      gray: "회색",
      brown: "갈색",
      red: "빨간색",
      orange: "주황색",
      yellow: "노란색",
      green: "녹색",
      blue: "파란색",
      purple: "보라색",
      pink: "분홍색"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "진하게",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "기울임",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "밑줄",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "취소선",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "코드",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "색깔"
    },
    link: {
      tooltip: "링크 만들기",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "이미지 캡션 수정",
      input_placeholder: "이미지 캡션 수정"
    },
    file_replace: {
      tooltip: {
        image: "이미지 교체",
        video: "비디오 교체",
        audio: "오디오 교체",
        file: "파일 교체"
      }
    },
    file_rename: {
      tooltip: {
        image: "이미지 이름 변경",
        video: "비디오 이름 변경",
        audio: "오디오 이름 변경",
        file: "파일 이름 변경"
      },
      input_placeholder: {
        image: "이미지 이름 변경",
        video: "비디오 이름 변경",
        audio: "오디오 이름 변경",
        file: "파일 이름 변경"
      }
    },
    file_download: {
      tooltip: {
        image: "이미지 다운로드",
        video: "비디오 다운로드",
        audio: "오디오 다운로드",
        file: "파일 다운로드"
      }
    },
    file_delete: {
      tooltip: {
        image: "이미지 삭제",
        video: "비디오 삭제",
        audio: "오디오 삭제",
        file: "파일 삭제"
      }
    },
    file_preview_toggle: {
      tooltip: "미리보기 전환"
    },
    nest: {
      tooltip: "중첩 블록",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "비중첩 블록",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "텍스트 왼쪽 맞춤"
    },
    align_center: {
      tooltip: "텍스트 가운데 맞춤"
    },
    align_right: {
      tooltip: "텍스트 오른쪽 맞춤"
    },
    align_justify: {
      tooltip: "텍스트 양쪽 맞춤"
    }
  },
  file_panel: {
    upload: {
      title: "업로드",
      file_placeholder: {
        image: "이미지 업로드",
        video: "비디오 업로드",
        audio: "오디오 업로드",
        file: "파일 업로드"
      },
      upload_error: "오류: 업로드 실패"
    },
    embed: {
      title: "임베드",
      embed_button: {
        image: "이미지 삽입",
        video: "비디오 삽입",
        audio: "오디오 삽입",
        file: "파일 삽입"
      },
      url_placeholder: "URL을 입력하세요."
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "링크 삭제"
    },
    edit: {
      text: "링크 수정",
      tooltip: "수정"
    },
    open: {
      tooltip: "새 탭으로 열기"
    },
    form: {
      title_placeholder: "제목 수정",
      url_placeholder: "URL 수정"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, yo = {
  slash_menu: {
    heading: {
      title: "Kop 1",
      subtext: "Gebruikt voor een hoofdkop",
      aliases: ["h", "kop1", "h1"],
      group: "Koppen"
    },
    heading_2: {
      title: "Kop 2",
      subtext: "Gebruikt voor belangrijke secties",
      aliases: ["h2", "kop2", "subkop"],
      group: "Koppen"
    },
    heading_3: {
      title: "Kop 3",
      subtext: "Gebruikt voor subsecties en groepskoppen",
      aliases: ["h3", "kop3", "subkop"],
      group: "Koppen"
    },
    numbered_list: {
      title: "Genummerde Lijst",
      subtext: "Gebruikt om een genummerde lijst weer te geven",
      aliases: ["ol", "li", "lijst", "genummerdelijst", "genummerde lijst"],
      group: "Basisblokken"
    },
    bullet_list: {
      title: "Puntenlijst",
      subtext: "Gebruikt om een ongeordende lijst weer te geven",
      aliases: ["ul", "li", "lijst", "puntenlijst", "punten lijst"],
      group: "Basisblokken"
    },
    check_list: {
      title: "Controlelijst",
      subtext: "Gebruikt om een lijst met selectievakjes weer te geven",
      aliases: ["ul", "li", "lijst", "aangevinkte lijst", "selectievakje"],
      group: "Basisblokken"
    },
    paragraph: {
      title: "Paragraaf",
      subtext: "Gebruikt voor de hoofdtekst van uw document",
      aliases: ["p", "paragraaf"],
      group: "Basisblokken"
    },
    table: {
      title: "Tabel",
      subtext: "Gebruikt voor tabellen",
      aliases: ["tabel"],
      group: "Geavanceerd"
    },
    image: {
      title: "Afbeelding",
      subtext: "Voeg een afbeelding in",
      aliases: [
        "afbeelding",
        "imageUpload",
        "upload",
        "img",
        "foto",
        "media",
        "url"
      ],
      group: "Media"
    },
    video: {
      title: "Video",
      subtext: "Voeg een video in",
      aliases: [
        "video",
        "videoUploaden",
        "upload",
        "mp4",
        "film",
        "media",
        "url",
        "drive",
        "dropbox"
      ],
      group: "Media"
    },
    audio: {
      title: "Audio",
      subtext: "Voeg audio in",
      aliases: [
        "audio",
        "audioUploaden",
        "upload",
        "mp3",
        "geluid",
        "media",
        "url"
      ],
      group: "Media"
    },
    file: {
      title: "Bestand",
      subtext: "Voeg een bestand in",
      aliases: ["bestand", "upload", "insluiten", "media", "url"],
      group: "Media"
    }
  },
  placeholders: {
    default: "Voer tekst in of type '/' voor commando's",
    heading: "Kop",
    bulletListItem: "Lijst",
    numberedListItem: "Lijst",
    checkListItem: "Lijst"
  },
  file_blocks: {
    image: {
      add_button_text: "Afbeelding toevoegen"
    },
    video: {
      add_button_text: "Video toevoegen"
    },
    audio: {
      add_button_text: "Audio toevoegen"
    },
    file: {
      add_button_text: "Bestand toevoegen"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "Nieuw blok",
    drag_handle_label: "Open blok menu"
  },
  drag_handle: {
    delete_menuitem: "Verwijder",
    colors_menuitem: "Kleuren"
  },
  table_handle: {
    delete_column_menuitem: "Verwijder kolom",
    delete_row_menuitem: "Verwijder rij",
    add_left_menuitem: "Voeg kolom links toe",
    add_right_menuitem: "Voeg kolom rechts toe",
    add_above_menuitem: "Voeg rij boven toe",
    add_below_menuitem: "Voeg rij onder toe"
  },
  suggestion_menu: {
    no_items_title: "Geen items gevonden",
    loading: "Laden…"
  },
  color_picker: {
    text_title: "Tekst",
    background_title: "Achtergrond",
    colors: {
      default: "Standaard",
      gray: "Grijs",
      brown: "Bruin",
      red: "Rood",
      orange: "Oranje",
      yellow: "Geel",
      green: "Groen",
      blue: "Blauw",
      purple: "Paars",
      pink: "Roze"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Vet",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Cursief",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Onderstrepen",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Doorstrepen",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Code",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Kleuren"
    },
    link: {
      tooltip: "Maak link",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Bewerk onderschrift",
      input_placeholder: "Bewerk onderschrift"
    },
    file_replace: {
      tooltip: {
        image: "Afbeelding vervangen",
        video: "Video vervangen",
        audio: "Audio vervangen",
        file: "Bestand vervangen"
      }
    },
    file_rename: {
      tooltip: {
        image: "Afbeelding hernoemen",
        video: "Video hernoemen",
        audio: "Audio hernoemen",
        file: "Bestand hernoemen"
      },
      input_placeholder: {
        image: "Afbeelding hernoemen",
        video: "Video hernoemen",
        audio: "Audio hernoemen",
        file: "Bestand hernoemen"
      }
    },
    file_download: {
      tooltip: {
        image: "Afbeelding downloaden",
        video: "Video downloaden",
        audio: "Audio downloaden",
        file: "Bestand downloaden"
      }
    },
    file_delete: {
      tooltip: {
        image: "Afbeelding verwijderen",
        video: "Video verwijderen",
        audio: "Audio verwijderen",
        file: "Bestand verwijderen"
      }
    },
    file_preview_toggle: {
      tooltip: "Voorbeeldschakelaar"
    },
    nest: {
      tooltip: "Nest blok",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Ontnest blok",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Tekst links uitlijnen"
    },
    align_center: {
      tooltip: "Tekst centreren"
    },
    align_right: {
      tooltip: "Tekst rechts uitlijnen"
    },
    align_justify: {
      tooltip: "Tekst uitvullen"
    }
  },
  file_panel: {
    upload: {
      title: "Upload",
      file_placeholder: {
        image: "Afbeelding uploaden",
        video: "Video uploaden",
        audio: "Audio uploaden",
        file: "Bestand uploaden"
      },
      upload_error: "Fout: Upload mislukt"
    },
    embed: {
      title: "Insluiten",
      embed_button: {
        image: "Afbeelding insluiten",
        video: "Video insluiten",
        audio: "Audio insluiten",
        file: "Bestand insluiten"
      },
      url_placeholder: "Voer URL in"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Verwijder link"
    },
    edit: {
      text: "Bewerk link",
      tooltip: "Bewerk"
    },
    open: {
      tooltip: "Open in nieuw tabblad"
    },
    form: {
      title_placeholder: "Bewerk titel",
      url_placeholder: "Bewerk URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, wo = {
  slash_menu: {
    heading: {
      title: "Nagłówek 1",
      subtext: "Używany dla nagłówka najwyższego poziomu",
      aliases: ["h", "naglowek1", "h1"],
      group: "Nagłówki"
    },
    heading_2: {
      title: "Nagłówek 2",
      subtext: "Używany dla kluczowych sekcji",
      aliases: ["h2", "naglowek2", "podnaglowek"],
      group: "Nagłówki"
    },
    heading_3: {
      title: "Nagłówek 3",
      subtext: "Używany dla podsekcji i grup nagłówków",
      aliases: ["h3", "naglowek3", "podnaglowek"],
      group: "Nagłówki"
    },
    numbered_list: {
      title: "Lista numerowana",
      subtext: "Używana do wyświetlania listy numerowanej",
      aliases: ["ol", "li", "lista", "numerowana lista"],
      group: "Podstawowe bloki"
    },
    bullet_list: {
      title: "Lista punktowana",
      subtext: "Używana do wyświetlania listy bez numeracji",
      aliases: ["ul", "li", "lista", "punktowana lista"],
      group: "Podstawowe bloki"
    },
    check_list: {
      title: "Lista z polami wyboru",
      subtext: "Używana do wyświetlania listy z polami wyboru",
      aliases: ["ul", "li", "lista", "lista z polami wyboru", "pole wyboru"],
      group: "Podstawowe bloki"
    },
    paragraph: {
      title: "Akapit",
      subtext: "Używany dla treści dokumentu",
      aliases: ["p", "akapit"],
      group: "Podstawowe bloki"
    },
    table: {
      title: "Tabela",
      subtext: "Używana do tworzenia tabel",
      aliases: ["tabela"],
      group: "Zaawansowane"
    },
    image: {
      title: "Zdjęcie",
      subtext: "Wstaw zdjęcie",
      aliases: [
        "obraz",
        "wrzućZdjęcie",
        "wrzuć",
        "img",
        "zdjęcie",
        "media",
        "url"
      ],
      group: "Media"
    },
    video: {
      title: "Wideo",
      subtext: "Wstaw wideo",
      aliases: ["wideo", "wrzućWideo", "wrzuć", "mp4", "film", "media", "url"],
      group: "Media"
    },
    audio: {
      title: "Audio",
      subtext: "Wstaw audio",
      aliases: [
        "audio",
        "wrzućAudio",
        "wrzuć",
        "mp3",
        "dźwięk",
        "media",
        "url"
      ],
      group: "Media"
    },
    file: {
      title: "Plik",
      subtext: "Wstaw plik",
      aliases: ["plik", "wrzuć", "wstaw", "media", "url"],
      group: "Media"
    }
  },
  placeholders: {
    default: "Wprowadź tekst lub wpisz '/' aby użyć poleceń",
    heading: "Nagłówek",
    bulletListItem: "Lista",
    numberedListItem: "Lista",
    checkListItem: "Lista"
  },
  file_blocks: {
    image: {
      add_button_text: "Dodaj zdjęcie"
    },
    video: {
      add_button_text: "Dodaj wideo"
    },
    audio: {
      add_button_text: "Dodaj audio"
    },
    file: {
      add_button_text: "Dodaj plik"
    }
  },
  side_menu: {
    add_block_label: "Dodaj blok",
    drag_handle_label: "Otwórz menu bloków"
  },
  drag_handle: {
    delete_menuitem: "Usuń",
    colors_menuitem: "Kolory"
  },
  table_handle: {
    delete_column_menuitem: "Usuń kolumnę",
    delete_row_menuitem: "Usuń wiersz",
    add_left_menuitem: "Dodaj kolumnę po lewej",
    add_right_menuitem: "Dodaj kolumnę po prawej",
    add_above_menuitem: "Dodaj wiersz powyżej",
    add_below_menuitem: "Dodaj wiersz poniżej"
  },
  suggestion_menu: {
    no_items_title: "Nie znaleziono elementów",
    loading: "Ładowanie…"
  },
  color_picker: {
    text_title: "Tekst",
    background_title: "Tło",
    colors: {
      default: "Domyślny",
      gray: "Szary",
      brown: "Brązowy",
      red: "Czerwony",
      orange: "Pomarańczowy",
      yellow: "Żółty",
      green: "Zielony",
      blue: "Niebieski",
      purple: "Fioletowy",
      pink: "Różowy"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Pogrubienie",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Kursywa",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Podkreślenie",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Przekreślenie",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Kod",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Kolory"
    },
    link: {
      tooltip: "Utwórz link",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Zmień podpis",
      input_placeholder: "Zmień podpis"
    },
    file_replace: {
      tooltip: {
        image: "Zmień obraz",
        video: "Zmień wideo",
        audio: "Zmień audio",
        file: "Zmień plik"
      }
    },
    file_rename: {
      tooltip: {
        image: "Zmień nazwę zdjęcia",
        video: "Zmień nazwę wideo",
        audio: "Zmień nazwę audio",
        file: "Zmień nazwę pliku"
      },
      input_placeholder: {
        image: "Zmień nazwę zdjęcia",
        video: "Zmień nazwę wideo",
        audio: "Zmień nazwę audio",
        file: "Zmień nazwę pliku"
      }
    },
    file_download: {
      tooltip: {
        image: "Pobierz zdjęcie",
        video: "Pobierz wideo",
        audio: "Pobierz audio",
        file: "Pobierz plik"
      }
    },
    file_delete: {
      tooltip: {
        image: "Usuń zdjęcie",
        video: "Usuń wideo",
        audio: "Usuń audio",
        file: "Usuń plik"
      }
    },
    file_preview_toggle: {
      tooltip: "Przełącz podgląd"
    },
    nest: {
      tooltip: "Zagnieźdź blok",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Odgagnieźdź blok",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Wyrównaj tekst do lewej"
    },
    align_center: {
      tooltip: "Wyśrodkuj tekst"
    },
    align_right: {
      tooltip: "Wyrównaj tekst do prawej"
    },
    align_justify: {
      tooltip: "Wyjustuj tekst"
    }
  },
  file_panel: {
    upload: {
      title: "Wrzuć",
      file_placeholder: {
        image: "Wrzuć zdjęcie",
        video: "Wrzuć wideo",
        audio: "Wrzuć audio",
        file: "Wrzuć plik"
      },
      upload_error: "Błąd: Przesyłanie nie powiodło się"
    },
    embed: {
      title: "Wstaw",
      embed_button: {
        image: "Wstaw zdjęice",
        video: "Wstaw wideo",
        audio: "Wstaw audio",
        file: "Wstaw plik"
      },
      url_placeholder: "Wprowadź URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Usuń link"
    },
    edit: {
      text: "Edytuj link",
      tooltip: "Edytuj"
    },
    open: {
      tooltip: "Otwórz w nowej karcie"
    },
    form: {
      title_placeholder: "Edytuj tytuł",
      url_placeholder: "Edytuj URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, vo = {
  slash_menu: {
    heading: {
      title: "Título",
      subtext: "Usado para um título de nível superior",
      aliases: ["h", "titulo1", "h1"],
      group: "Títulos"
    },
    heading_2: {
      title: "Título 2",
      subtext: "Usado para seções principais",
      aliases: ["h2", "titulo2", "subtitulo"],
      group: "Títulos"
    },
    heading_3: {
      title: "Título 3",
      subtext: "Usado para subseções e títulos de grupo",
      aliases: ["h3", "titulo3", "subtitulo"],
      group: "Títulos"
    },
    numbered_list: {
      title: "Lista Numerada",
      subtext: "Usado para exibir uma lista numerada",
      aliases: ["ol", "li", "lista", "listanumerada", "lista numerada"],
      group: "Blocos Básicos"
    },
    bullet_list: {
      title: "Lista com Marcadores",
      subtext: "Usado para exibir uma lista não ordenada",
      aliases: ["ul", "li", "lista", "listamarcadores", "lista com marcadores"],
      group: "Blocos Básicos"
    },
    check_list: {
      title: "Lista de verificação",
      subtext: "Usado para exibir uma lista com caixas de seleção",
      aliases: [
        "ul",
        "li",
        "lista",
        "lista de verificação",
        "lista marcada",
        "caixa de seleção"
      ],
      group: "Blocos Básicos"
    },
    paragraph: {
      title: "Parágrafo",
      subtext: "Usado para o corpo do seu documento",
      aliases: ["p", "paragrafo"],
      group: "Blocos Básicos"
    },
    table: {
      title: "Tabela",
      subtext: "Usado para tabelas",
      aliases: ["tabela"],
      group: "Avançado"
    },
    image: {
      title: "Imagem",
      subtext: "Inserir uma imagem",
      aliases: [
        "imagem",
        "uploadImagem",
        "upload",
        "img",
        "foto",
        "media",
        "url"
      ],
      group: "Mídia"
    },
    video: {
      title: "Vídeo",
      subtext: "Inserir um vídeo",
      aliases: [
        "vídeo",
        "uploadVídeo",
        "upload",
        "mp4",
        "filme",
        "mídia",
        "url"
      ],
      group: "Mídia"
    },
    audio: {
      title: "Áudio",
      subtext: "Inserir um áudio",
      aliases: ["áudio", "uploadÁudio", "upload", "mp3", "som", "mídia", "url"],
      group: "Mídia"
    },
    file: {
      title: "Arquivo",
      subtext: "Inserir um arquivo",
      aliases: ["arquivo", "upload", "incorporar", "mídia", "url"],
      group: "Mídia"
    }
  },
  placeholders: {
    default: "Digite texto ou use '/' para comandos",
    heading: "Título",
    bulletListItem: "Lista",
    numberedListItem: "Lista",
    checkListItem: "Lista"
  },
  file_blocks: {
    image: {
      add_button_text: "Adicionar imagem"
    },
    video: {
      add_button_text: "Adicionar vídeo"
    },
    audio: {
      add_button_text: "Adicionar áudio"
    },
    file: {
      add_button_text: "Adicionar arquivo"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "Adicionar bloco",
    drag_handle_label: "Abrir menu do bloco"
  },
  drag_handle: {
    delete_menuitem: "Excluir",
    colors_menuitem: "Cores"
  },
  table_handle: {
    delete_column_menuitem: "Excluir coluna",
    delete_row_menuitem: "Excluir linha",
    add_left_menuitem: "Adicionar coluna à esquerda",
    add_right_menuitem: "Adicionar coluna à direita",
    add_above_menuitem: "Adicionar linha acima",
    add_below_menuitem: "Adicionar linha abaixo"
  },
  suggestion_menu: {
    no_items_title: "Nenhum item encontrado",
    loading: "Carregando…"
  },
  color_picker: {
    text_title: "Texto",
    background_title: "Fundo",
    colors: {
      default: "Padrão",
      gray: "Cinza",
      brown: "Marrom",
      red: "Vermelho",
      orange: "Laranja",
      yellow: "Amarelo",
      green: "Verde",
      blue: "Azul",
      purple: "Roxo",
      pink: "Rosa"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "Negrito",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "Itálico",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Sublinhado",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Riscado",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Código",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Cores"
    },
    link: {
      tooltip: "Criar link",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Editar legenda",
      input_placeholder: "Editar legenda"
    },
    file_replace: {
      tooltip: {
        image: "Substituir imagem",
        video: "Substituir vídeo",
        audio: "Substituir áudio",
        file: "Substituir arquivo"
      }
    },
    file_rename: {
      tooltip: {
        image: "Renomear imagem",
        video: "Renomear vídeo",
        audio: "Renomear áudio",
        file: "Renomear arquivo"
      },
      input_placeholder: {
        image: "Renomear imagem",
        video: "Renomear vídeo",
        audio: "Renomear áudio",
        file: "Renomear arquivo"
      }
    },
    file_download: {
      tooltip: {
        image: "Baixar imagem",
        video: "Baixar vídeo",
        audio: "Baixar áudio",
        file: "Baixar arquivo"
      }
    },
    file_delete: {
      tooltip: {
        image: "Excluir imagem",
        video: "Excluir vídeo",
        audio: "Excluir áudio",
        file: "Excluir arquivo"
      }
    },
    file_preview_toggle: {
      tooltip: "Alternar visualização"
    },
    nest: {
      tooltip: "Aninhar bloco",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Desaninhar bloco",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Alinhar à esquerda"
    },
    align_center: {
      tooltip: "Alinhar ao centro"
    },
    align_right: {
      tooltip: "Alinhar à direita"
    },
    align_justify: {
      tooltip: "Justificar texto"
    }
  },
  file_panel: {
    upload: {
      title: "Upload",
      file_placeholder: {
        image: "Upload de imagem",
        video: "Upload de vídeo",
        audio: "Upload de áudio",
        file: "Upload de arquivo"
      },
      upload_error: "Erro: Falha no upload"
    },
    embed: {
      title: "Incorporar",
      embed_button: {
        image: "Incorporar imagem",
        video: "Incorporar vídeo",
        audio: "Incorporar áudio",
        file: "Incorporar arquivo"
      },
      url_placeholder: "Insira a URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Remover link"
    },
    edit: {
      text: "Editar link",
      tooltip: "Editar"
    },
    open: {
      tooltip: "Abrir em nova aba"
    },
    form: {
      title_placeholder: "Editar título",
      url_placeholder: "Editar URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, xo = {
  slash_menu: {
    heading: {
      title: "Tiêu đề H1",
      subtext: "Sử dụng cho tiêu đề cấp cao nhất",
      aliases: ["h", "tieude1", "dd1"],
      group: "Tiêu đề"
    },
    heading_2: {
      title: "Tiêu đề H2",
      subtext: "Sử dụng cho các phần chính",
      aliases: ["h2", "tieude2", "tieudephu"],
      group: "Tiêu đề"
    },
    heading_3: {
      title: "Tiêu đề H3",
      subtext: "Sử dụng cho phụ đề và tiêu đề nhóm",
      aliases: ["h3", "tieude3", "tieudephu"],
      group: "Tiêu đề"
    },
    numbered_list: {
      title: "Danh sách đánh số",
      subtext: "Sử dụng để hiển thị danh sách có đánh số",
      aliases: ["ol", "li", "ds", "danhsachdso", "danh sach danh so"],
      group: "Khối cơ bản"
    },
    bullet_list: {
      title: "Danh sách",
      subtext: "Sử dụng để hiển thị danh sách không đánh số",
      aliases: ["ul", "li", "ds", "danhsach", "danh sach"],
      group: "Khối cơ bản"
    },
    check_list: {
      title: "Danh sách kiểm tra",
      subtext: "Dùng để hiển thị danh sách có hộp kiểm",
      aliases: [
        "ul",
        "li",
        "danh sach",
        "danh sach kiem tra",
        "danh sach da kiem tra",
        "hop kiem"
      ],
      group: "Khối cơ bản"
    },
    paragraph: {
      title: "Đoạn văn",
      subtext: "Sử dụng cho nội dung chính của tài liệu",
      aliases: ["p", "doanvan"],
      group: "Khối cơ bản"
    },
    table: {
      title: "Bảng",
      subtext: "Sử dụng để tạo bảng",
      aliases: ["bang"],
      group: "Nâng cao"
    },
    image: {
      title: "Hình ảnh",
      subtext: "Chèn hình ảnh",
      aliases: ["anh", "tai-len-anh", "tai-len", "img", "hinh", "media", "url"],
      group: "Phương tiện"
    },
    video: {
      title: "Video",
      subtext: "Chèn video",
      aliases: [
        "video",
        "tai-len-video",
        "tai-len",
        "mp4",
        "phim",
        "media",
        "url"
      ],
      group: "Phương tiện"
    },
    audio: {
      title: "Âm thanh",
      subtext: "Chèn âm thanh",
      aliases: [
        "âm thanh",
        "tai-len-am-thanh",
        "tai-len",
        "mp3",
        "am thanh",
        "media",
        "url"
      ],
      group: "Phương tiện"
    },
    file: {
      title: "Tệp",
      subtext: "Chèn tệp",
      aliases: ["tep", "tai-len", "nhung", "media", "url"],
      group: "Phương tiện"
    }
  },
  placeholders: {
    default: "Nhập văn bản hoặc gõ '/' để thêm định dạng",
    heading: "Tiêu đề",
    bulletListItem: "Danh sách",
    numberedListItem: "Danh sách",
    checkListItem: "Danh sách"
  },
  file_blocks: {
    image: {
      add_button_text: "Thêm ảnh"
    },
    video: {
      add_button_text: "Thêm video"
    },
    audio: {
      add_button_text: "Thêm âm thanh"
    },
    file: {
      add_button_text: "Thêm tệp"
    }
  },
  // từ gói phản ứng:
  side_menu: {
    add_block_label: "Thêm khối",
    drag_handle_label: "Mở trình đơn khối"
  },
  drag_handle: {
    delete_menuitem: "Xóa",
    colors_menuitem: "Màu sắc"
  },
  table_handle: {
    delete_column_menuitem: "Xóa cột",
    delete_row_menuitem: "Xóa hàng",
    add_left_menuitem: "Thêm cột bên trái",
    add_right_menuitem: "Thêm cột bên phải",
    add_above_menuitem: "Thêm hàng phía trên",
    add_below_menuitem: "Thêm hàng phía dưới"
  },
  suggestion_menu: {
    no_items_title: "Không tìm thấy mục nào",
    loading: "Đang tải..."
  },
  color_picker: {
    text_title: "Văn bản",
    background_title: "Nền",
    colors: {
      default: "Mặc định",
      gray: "Xám",
      brown: "Nâu",
      red: "Đỏ",
      orange: "Cam",
      yellow: "Vàng",
      green: "Xanh lá",
      blue: "Xanh dương",
      purple: "Tím",
      pink: "Hồng"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "In đậm",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "In nghiêng",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "Gạch dưới",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "Gạch ngang",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "Code",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "Màu sắc"
    },
    link: {
      tooltip: "Tạo liên kết",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "Chỉnh sửa chú thích",
      input_placeholder: "Chỉnh sửa chú thích"
    },
    file_replace: {
      tooltip: {
        image: "Thay thế hình ảnh",
        video: "Thay thế video",
        audio: "Thay thế âm thanh",
        file: "Thay thế tệp"
      }
    },
    file_rename: {
      tooltip: {
        image: "Đổi tên hình ảnh",
        video: "Đổi tên video",
        audio: "Đổi tên âm thanh",
        file: "Đổi tên tệp"
      },
      input_placeholder: {
        image: "Đổi tên hình ảnh",
        video: "Đổi tên video",
        audio: "Đổi tên âm thanh",
        file: "Đổi tên tệp"
      }
    },
    file_download: {
      tooltip: {
        image: "Tải xuống hình ảnh",
        video: "Tải xuống video",
        audio: "Tải xuống âm thanh",
        file: "Tải xuống tệp"
      }
    },
    file_delete: {
      tooltip: {
        image: "Xóa hình ảnh",
        video: "Xóa video",
        audio: "Xóa âm thanh",
        file: "Xóa tệp"
      }
    },
    file_preview_toggle: {
      tooltip: "Chuyển đổi xem trước"
    },
    nest: {
      tooltip: "Lồng khối",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "Bỏ lồng khối",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "Căn trái văn bản"
    },
    align_center: {
      tooltip: "Căn giữa văn bản"
    },
    align_right: {
      tooltip: "Căn phải văn bản"
    },
    align_justify: {
      tooltip: "Căn đều văn bản"
    }
  },
  file_panel: {
    upload: {
      title: "Tải lên",
      file_placeholder: {
        image: "Tải lên hình ảnh",
        video: "Tải lên video",
        audio: "Tải lên âm thanh",
        file: "Tải lên tệp"
      },
      upload_error: "Lỗi: Tải lên thất bại"
    },
    embed: {
      title: "Nhúng",
      embed_button: {
        image: "Nhúng hình ảnh",
        video: "Nhúng video",
        audio: "Nhúng âm thanh",
        file: "Nhúng tệp"
      },
      url_placeholder: "Nhập URL"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "Xóa liên kết"
    },
    edit: {
      text: "Chỉnh sửa liên kết",
      tooltip: "Chỉnh sửa"
    },
    open: {
      tooltip: "Mở trong tab mới"
    },
    form: {
      title_placeholder: "Chỉnh sửa tiêu đề",
      url_placeholder: "Chỉnh sửa URL"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, Eo = {
  slash_menu: {
    heading: {
      title: "一级标题",
      subtext: "用于顶级标题",
      aliases: ["h", "heading1", "h1", "标题", "一级标题"],
      group: "标题"
    },
    heading_2: {
      title: "二级标题",
      subtext: "用于关键部分",
      aliases: ["h2", "heading2", "subheading", "标题", "二级标题", "副标题"],
      group: "标题"
    },
    heading_3: {
      title: "三级标题",
      subtext: "用于小节和分组标题",
      aliases: ["h3", "heading3", "subheading", "标题", "三级标题"],
      group: "标题"
    },
    numbered_list: {
      title: "有序列表",
      subtext: "用于显示有序列表",
      aliases: [
        "ol",
        "li",
        "list",
        "numberedlist",
        "numbered list",
        "列表",
        "有序列表"
      ],
      group: "基础"
    },
    bullet_list: {
      title: "无序列表",
      subtext: "用于显示无序列表",
      aliases: [
        "ul",
        "li",
        "list",
        "bulletlist",
        "bullet list",
        "列表",
        "无序列表"
      ],
      group: "基础"
    },
    check_list: {
      title: "检查清单",
      subtext: "用于显示带有复选框的列表",
      aliases: [
        "ul",
        "li",
        "checklist",
        "checked list",
        "列表",
        "检查清单",
        "勾选列表",
        "复选框"
      ],
      group: "基础"
    },
    paragraph: {
      title: "段落",
      subtext: "用于文档正文",
      aliases: ["p", "paragraph", "text", "正文"],
      group: "基础"
    },
    table: {
      title: "表格",
      subtext: "使用表格",
      aliases: ["table", "表格"],
      group: "高级功能"
    },
    image: {
      title: "图片",
      subtext: "插入图片",
      aliases: [
        "图片",
        "上传图片",
        "上传",
        "image",
        "img",
        "相册",
        "媒体",
        "url"
      ],
      group: "媒体"
    },
    video: {
      title: "视频",
      subtext: "插入视频",
      aliases: [
        "视频",
        "视频上传",
        "上传",
        "video",
        "mp4",
        "电影",
        "媒体",
        "url",
        "驱动",
        "dropbox"
      ],
      group: "媒体"
    },
    audio: {
      title: "音频",
      subtext: "插入音频",
      aliases: [
        "音频",
        "音频上传",
        "上传",
        "audio",
        "mp3",
        "声音",
        "媒体",
        "url",
        "驱动",
        "dropbox"
      ],
      group: "媒体"
    },
    file: {
      title: "文件",
      subtext: "插入文件",
      aliases: ["文件", "上传", "file", "嵌入", "媒体", "url"],
      group: "媒体"
    }
  },
  placeholders: {
    default: "输入 '/' 以使用命令",
    heading: "标题",
    bulletListItem: "列表",
    numberedListItem: "列表",
    checkListItem: "列表"
  },
  file_blocks: {
    image: {
      add_button_text: "添加图片"
    },
    video: {
      add_button_text: "添加视频"
    },
    audio: {
      add_button_text: "添加音频"
    },
    file: {
      add_button_text: "添加文件"
    }
  },
  // from react package:
  side_menu: {
    add_block_label: "添加块",
    drag_handle_label: "打开菜单"
  },
  drag_handle: {
    delete_menuitem: "删除",
    colors_menuitem: "颜色"
  },
  table_handle: {
    delete_column_menuitem: "删除列",
    delete_row_menuitem: "删除行",
    add_left_menuitem: "左侧添加列",
    add_right_menuitem: "右侧添加列",
    add_above_menuitem: "上方添加行",
    add_below_menuitem: "下方添加行"
  },
  suggestion_menu: {
    no_items_title: "无匹配项",
    loading: "加载中…"
  },
  color_picker: {
    text_title: "文本",
    background_title: "背景色",
    colors: {
      default: "默认",
      gray: "灰色",
      brown: "棕色",
      red: "红色",
      orange: "橙色",
      yellow: "黄色",
      green: "绿色",
      blue: "蓝色",
      purple: "紫色",
      pink: "粉色"
    }
  },
  formatting_toolbar: {
    bold: {
      tooltip: "加粗",
      secondary_tooltip: "Mod+B"
    },
    italic: {
      tooltip: "斜体",
      secondary_tooltip: "Mod+I"
    },
    underline: {
      tooltip: "下划线",
      secondary_tooltip: "Mod+U"
    },
    strike: {
      tooltip: "删除线",
      secondary_tooltip: "Mod+Shift+X"
    },
    code: {
      tooltip: "代码标记",
      secondary_tooltip: ""
    },
    colors: {
      tooltip: "颜色"
    },
    link: {
      tooltip: "添加链接",
      secondary_tooltip: "Mod+K"
    },
    file_caption: {
      tooltip: "编辑标题",
      input_placeholder: "编辑标题"
    },
    file_replace: {
      tooltip: {
        image: "替换图片",
        video: "替换视频",
        audio: "替换音频",
        file: "替换文件"
      }
    },
    file_rename: {
      tooltip: {
        image: "重命名图片",
        video: "重命名视频",
        audio: "重命名音频",
        file: "重命名文件"
      },
      input_placeholder: {
        image: "重命名图片",
        video: "重命名视频",
        audio: "重命名音频",
        file: "重命名文件"
      }
    },
    file_download: {
      tooltip: {
        image: "下载图片",
        video: "下载视频",
        audio: "下载音频",
        file: "下载文件"
      }
    },
    file_delete: {
      tooltip: {
        image: "删除图片",
        video: "删除视频",
        audio: "删除音频",
        file: "删除文件"
      }
    },
    file_preview_toggle: {
      tooltip: "切换预览"
    },
    nest: {
      tooltip: "嵌套",
      secondary_tooltip: "Tab"
    },
    unnest: {
      tooltip: "取消嵌套",
      secondary_tooltip: "Shift+Tab"
    },
    align_left: {
      tooltip: "左对齐"
    },
    align_center: {
      tooltip: "居中"
    },
    align_right: {
      tooltip: "右对齐"
    },
    align_justify: {
      tooltip: "文本对齐"
    }
  },
  file_panel: {
    upload: {
      title: "上传",
      file_placeholder: {
        image: "上传图片",
        video: "上传视频",
        audio: "上传音频",
        file: "上传文件"
      },
      upload_error: "Error：上传失败"
    },
    embed: {
      title: "嵌入",
      embed_button: {
        image: "嵌入图片",
        video: "嵌入视频",
        audio: "嵌入音频",
        file: "嵌入文件"
      },
      url_placeholder: "输入图片地址"
    }
  },
  link_toolbar: {
    delete: {
      tooltip: "清除链接"
    },
    edit: {
      text: "编辑链接",
      tooltip: "编辑"
    },
    open: {
      tooltip: "新窗口打开"
    },
    form: {
      title_placeholder: "编辑标题",
      url_placeholder: "编辑链接地址"
    }
  },
  generic: {
    ctrl_shortcut: "Ctrl"
  }
}, Ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: fo,
  en: Je,
  fr: go,
  is: bo,
  ja: ko,
  ko: _o,
  nl: yo,
  pl: wo,
  pt: vo,
  vi: xo,
  zh: Eo
}, Symbol.toStringTag, { value: "Module" }));
function Co(e, t = JSON.stringify) {
  const o = {};
  return e.filter((i) => {
    const n = t(i);
    return Object.prototype.hasOwnProperty.call(o, n) ? !1 : o[n] = !0;
  });
}
function So(e) {
  const t = e.filter(
    (i, n) => e.indexOf(i) !== n
  );
  return Co(t);
}
const oe = M.create({
  name: "uniqueID",
  // we’ll set a very high priority to make sure this runs first
  // and is compatible with `appendTransaction` hooks of other extensions
  priority: 1e4,
  addOptions() {
    return {
      attributeName: "id",
      types: [],
      generateID: () => {
        if (typeof window < "u" && window.__TEST_OPTIONS) {
          const e = window.__TEST_OPTIONS;
          return e.mockID === void 0 ? e.mockID = 0 : e.mockID++, e.mockID.toString();
        }
        return Ft();
      },
      filterTransaction: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          [this.options.attributeName]: {
            default: null,
            parseHTML: (e) => e.getAttribute(`data-${this.options.attributeName}`),
            renderHTML: (e) => ({
              [`data-${this.options.attributeName}`]: e[this.options.attributeName]
            })
          }
        }
      }
    ];
  },
  // check initial content for missing ids
  // onCreate() {
  //   // Don’t do this when the collaboration extension is active
  //   // because this may update the content, so Y.js tries to merge these changes.
  //   // This leads to empty block nodes.
  //   // See: https://github.com/ueberdosis/tiptap/issues/2400
  //   if (
  //     this.editor.extensionManager.extensions.find(
  //       (extension) => extension.name === "collaboration"
  //     )
  //   ) {
  //     return;
  //   }
  //   const { view, state } = this.editor;
  //   const { tr, doc } = state;
  //   const { types, attributeName, generateID } = this.options;
  //   const nodesWithoutId = findChildren(doc, (node) => {
  //     return (
  //       types.includes(node.type.name) && node.attrs[attributeName] === null
  //     );
  //   });
  //   nodesWithoutId.forEach(({ node, pos }) => {
  //     tr.setNodeMarkup(pos, undefined, {
  //       ...node.attrs,
  //       [attributeName]: generateID(),
  //     });
  //   });
  //   tr.setMeta("addToHistory", false);
  //   view.dispatch(tr);
  // },
  addProseMirrorPlugins() {
    let e = null, t = !1;
    return [
      new y({
        key: new S("uniqueID"),
        appendTransaction: (o, i, n) => {
          const r = o.some((f) => f.docChanged) && !i.doc.eq(n.doc), a = this.options.filterTransaction && o.some((f) => {
            let g, _;
            return !(!((_ = (g = this.options).filterTransaction) === null || _ === void 0) && _.call(g, f));
          });
          if (!r || a)
            return;
          const { tr: s } = n, { types: l, attributeName: d, generateID: u } = this.options, p = Lt(
            i.doc,
            o
          ), { mapping: h } = p;
          if (It(p).forEach(({ newRange: f }) => {
            const g = At(
              n.doc,
              f,
              (T) => l.includes(T.type.name)
            ), _ = g.map(({ node: T }) => T.attrs[d]).filter((T) => T !== null), A = So(_);
            g.forEach(({ node: T, pos: N }) => {
              let Z;
              const Ie = (Z = s.doc.nodeAt(N)) === null || Z === void 0 ? void 0 : Z.attrs[d];
              if (Ie === null) {
                const Ae = i.doc.type.createAndFill().content;
                if (i.doc.content.findDiffStart(Ae) === null) {
                  const Ne = JSON.parse(
                    JSON.stringify(n.doc.toJSON())
                  );
                  if (Ne.content[0].content[0].attrs.id = "initialBlockId", JSON.stringify(Ne.content) === JSON.stringify(Ae.toJSON())) {
                    s.setNodeMarkup(N, void 0, {
                      ...T.attrs,
                      [d]: "initialBlockId"
                    });
                    return;
                  }
                }
                s.setNodeMarkup(N, void 0, {
                  ...T.attrs,
                  [d]: u()
                });
                return;
              }
              const { deleted: Ct } = h.invert().mapResult(N);
              Ct && A.includes(Ie) && s.setNodeMarkup(N, void 0, {
                ...T.attrs,
                [d]: u()
              });
            });
          }), !!s.steps.length)
            return s;
        },
        // we register a global drag handler to track the current drag source element
        view(o) {
          const i = (n) => {
            let r;
            e = !((r = o.dom.parentElement) === null || r === void 0) && r.contains(n.target) ? o.dom.parentElement : null;
          };
          return window.addEventListener("dragstart", i), {
            destroy() {
              window.removeEventListener("dragstart", i);
            }
          };
        },
        props: {
          // `handleDOMEvents` is called before `transformPasted`
          // so we can do some checks before
          handleDOMEvents: {
            // only create new ids for dropped content while holding `alt`
            // or content is dragged from another editor
            drop: (o, i) => {
              let n;
              return (e !== o.dom.parentElement || ((n = i.dataTransfer) === null || n === void 0 ? void 0 : n.effectAllowed) === "copy") && (e = null, t = !0), !1;
            },
            // always create new ids on pasted content
            paste: () => (t = !0, !1)
          },
          // we’ll remove ids for every pasted node
          // so we can create a new one within `appendTransaction`
          transformPasted: (o) => {
            if (!t)
              return o;
            const { types: i, attributeName: n } = this.options, r = (a) => {
              const s = [];
              return a.forEach((l) => {
                if (l.isText) {
                  s.push(l);
                  return;
                }
                if (!i.includes(l.type.name)) {
                  s.push(l.copy(r(l.content)));
                  return;
                }
                const d = l.type.create(
                  {
                    ...l.attrs,
                    [n]: null
                  },
                  r(l.content),
                  l.marks
                );
                s.push(d);
              }), L.from(s);
            };
            return t = !1, new D(
              r(o.content),
              o.openStart,
              o.openEnd
            );
          }
        }
      })
    ];
  }
});
function Ye(e) {
  const t = e.attrs.id, o = e.firstChild, i = o.type, n = e.childCount === 2 ? e.lastChild.childCount : 0;
  return {
    id: t,
    node: e,
    contentNode: o,
    contentType: i,
    numChildBlocks: n
  };
}
function b(e, t) {
  const i = e.nodeSize - 2;
  if (t <= 1)
    for (t = 1 + 1; e.resolve(t).parent.type.name !== "blockContainer" && t < i; )
      t++;
  else if (t >= i)
    for (t = i - 1; e.resolve(t).parent.type.name !== "blockContainer" && t > 1; )
      t--;
  e.resolve(t).parent.type.name === "blockGroup" && t++;
  const n = e.resolve(t), r = n.depth;
  let a = n.node(r), s = r;
  for (; ; ) {
    if (s < 0)
      throw new Error(
        "Could not find blockContainer node. This can only happen if the underlying BlockNote schema has been edited."
      );
    if (a.type.name === "blockContainer")
      break;
    s -= 1, a = n.node(s);
  }
  const { id: l, contentNode: d, contentType: u, numChildBlocks: p } = Ye(a), h = n.start(s), m = n.end(s);
  return {
    id: l,
    node: a,
    contentNode: d,
    contentType: u,
    numChildBlocks: p,
    startPos: h,
    endPos: m,
    depth: s
  };
}
function Ue(e) {
  return e.type === "link";
}
function Qe(e) {
  return typeof e != "string" && e.type === "link";
}
function te(e) {
  return typeof e != "string" && e.type === "text";
}
class I extends Error {
  constructor(t) {
    super(`Unreachable case: ${t}`);
  }
}
function Ar(e, t = !0) {
  const { "data-test": o, ...i } = e;
  if (Object.keys(i).length > 0 && t)
    throw new Error("Object must be empty " + JSON.stringify(e));
}
function De(e, t, o) {
  const i = [];
  for (const [n, r] of Object.entries(e.styles)) {
    const a = o[n];
    if (!a)
      throw new Error(`style ${n} not found in styleSchema`);
    if (a.propSchema === "boolean")
      i.push(t.mark(n));
    else if (a.propSchema === "string")
      i.push(t.mark(n, { stringValue: r }));
    else
      throw new I(a.propSchema);
  }
  return e.text.split(/(\n)/g).filter((n) => n.length > 0).map((n) => n === `
` ? t.nodes.hardBreak.create() : t.text(n, i));
}
function Mo(e, t, o) {
  const i = t.marks.link.create({
    href: e.href
  });
  return ye(e.content, t, o).map(
    (n) => {
      if (n.type.name === "text")
        return n.mark([...n.marks, i]);
      if (n.type.name === "hardBreak")
        return n;
      throw new Error("unexpected node type");
    }
  );
}
function ye(e, t, o) {
  const i = [];
  if (typeof e == "string")
    return i.push(
      ...De(
        { type: "text", text: e, styles: {} },
        t,
        o
      )
    ), i;
  for (const n of e)
    i.push(...De(n, t, o));
  return i;
}
function $(e, t, o) {
  const i = [];
  for (const n of e)
    typeof n == "string" ? i.push(...ye(n, t, o)) : Qe(n) ? i.push(...Mo(n, t, o)) : te(n) ? i.push(...ye([n], t, o)) : i.push(
      tt(n, t, o)
    );
  return i;
}
function et(e, t, o) {
  const i = [];
  for (const n of e.rows) {
    const r = [];
    for (const s of n.cells) {
      let l;
      if (!s)
        l = t.nodes.tableParagraph.create({});
      else if (typeof s == "string")
        l = t.nodes.tableParagraph.create({}, t.text(s));
      else {
        const u = $(s, t, o);
        l = t.nodes.tableParagraph.create({}, u);
      }
      const d = t.nodes.tableCell.create({}, l);
      r.push(d);
    }
    const a = t.nodes.tableRow.create({}, r);
    i.push(a);
  }
  return i;
}
function tt(e, t, o) {
  let i, n = e.type;
  if (n === void 0 && (n = "paragraph"), !t.nodes[n])
    throw new Error(`node type ${n} not found in schema`);
  if (!e.content)
    i = t.nodes[n].create(e.props);
  else if (typeof e.content == "string") {
    const r = $([e.content], t, o);
    i = t.nodes[n].create(e.props, r);
  } else if (Array.isArray(e.content)) {
    const r = $(e.content, t, o);
    i = t.nodes[n].create(e.props, r);
  } else if (e.content.type === "tableContent") {
    const r = et(e.content, t, o);
    i = t.nodes[n].create(e.props, r);
  } else
    throw new I(e.content.type);
  return i;
}
function P(e, t, o) {
  let i = e.id;
  i === void 0 && (i = oe.options.generateID());
  const n = tt(
    e,
    t,
    o
  ), r = [];
  if (e.children)
    for (const s of e.children)
      r.push(P(s, t, o));
  const a = t.nodes.blockGroup.create({}, r);
  return t.nodes.blockContainer.create(
    {
      id: i,
      ...e.props
    },
    r.length > 0 ? [n, a] : n
  );
}
function To(e, t, o) {
  const i = {
    type: "tableContent",
    rows: []
  };
  return e.content.forEach((n) => {
    const r = {
      cells: []
    };
    n.content.forEach((a) => {
      r.cells.push(
        Ee(
          a.firstChild,
          t,
          o
        )
      );
    }), i.rows.push(r);
  }), i;
}
function Ee(e, t, o) {
  const i = [];
  let n;
  return e.content.forEach((r) => {
    if (r.type.name === "hardBreak") {
      if (n)
        if (te(n))
          n.text += `
`;
        else if (Ue(n))
          n.content[n.content.length - 1].text += `
`;
        else
          throw new Error("unexpected");
      else
        n = {
          type: "text",
          text: `
`,
          styles: {}
        };
      return;
    }
    if (r.type.name !== "link" && r.type.name !== "text" && t[r.type.name]) {
      n && (i.push(n), n = void 0), i.push(
        ot(r, t, o)
      );
      return;
    }
    const a = {};
    let s;
    for (const l of r.marks)
      if (l.type.name === "link")
        s = l;
      else {
        const d = o[l.type.name];
        if (!d)
          throw new Error(`style ${l.type.name} not found in styleSchema`);
        if (d.propSchema === "boolean")
          a[d.type] = !0;
        else if (d.propSchema === "string")
          a[d.type] = l.attrs.stringValue;
        else
          throw new I(d.propSchema);
      }
    n ? te(n) ? s ? (i.push(n), n = {
      type: "link",
      href: s.attrs.href,
      content: [
        {
          type: "text",
          text: r.textContent,
          styles: a
        }
      ]
    }) : JSON.stringify(n.styles) === JSON.stringify(a) ? n.text += r.textContent : (i.push(n), n = {
      type: "text",
      text: r.textContent,
      styles: a
    }) : Ue(n) && (s ? n.href === s.attrs.href ? JSON.stringify(
      n.content[n.content.length - 1].styles
    ) === JSON.stringify(a) ? n.content[n.content.length - 1].text += r.textContent : n.content.push({
      type: "text",
      text: r.textContent,
      styles: a
    }) : (i.push(n), n = {
      type: "link",
      href: s.attrs.href,
      content: [
        {
          type: "text",
          text: r.textContent,
          styles: a
        }
      ]
    }) : (i.push(n), n = {
      type: "text",
      text: r.textContent,
      styles: a
    })) : s ? n = {
      type: "link",
      href: s.attrs.href,
      content: [
        {
          type: "text",
          text: r.textContent,
          styles: a
        }
      ]
    } : n = {
      type: "text",
      text: r.textContent,
      styles: a
    };
  }), n && i.push(n), i;
}
function ot(e, t, o) {
  if (e.type.name === "text" || e.type.name === "link")
    throw new Error("unexpected");
  const i = {}, n = t[e.type.name];
  for (const [s, l] of Object.entries(e.attrs)) {
    if (!n)
      throw Error("ic node is of an unrecognized type: " + e.type.name);
    const d = n.propSchema;
    s in d && (i[s] = l);
  }
  let r;
  return n.content === "styled" ? r = Ee(
    e,
    t,
    o
  ) : r = void 0, {
    type: e.type.name,
    props: i,
    content: r
  };
}
function v(e, t, o, i, n) {
  if (e.type.name !== "blockContainer")
    throw Error(
      "Node must be of type blockContainer, but is of type" + e.type.name + "."
    );
  const r = n == null ? void 0 : n.get(e);
  if (r)
    return r;
  const a = Ye(e);
  let s = a.id;
  s === null && (s = oe.options.generateID());
  const l = {};
  for (const [m, f] of Object.entries({
    ...e.attrs,
    ...a.contentNode.attrs
  })) {
    const g = t[a.contentType.name];
    if (!g)
      throw Error(
        "Block is of an unrecognized type: " + a.contentType.name
      );
    const _ = g.propSchema;
    m in _ && (l[m] = f);
  }
  const d = t[a.contentType.name], u = [];
  for (let m = 0; m < a.numChildBlocks; m++)
    u.push(
      v(
        e.lastChild.child(m),
        t,
        o,
        i,
        n
      )
    );
  let p;
  if (d.content === "inline")
    p = Ee(
      a.contentNode,
      o,
      i
    );
  else if (d.content === "table")
    p = To(
      a.contentNode,
      o,
      i
    );
  else if (d.content === "none")
    p = void 0;
  else
    throw new I(d.content);
  const h = {
    id: s,
    type: d.type,
    props: l,
    content: p,
    children: u
  };
  return n == null || n.set(e, h), h;
}
function Bo(e) {
  return e.document || window.document;
}
const it = (e, t, o, i, n) => {
  if (!o.nodes[e.type.name])
    throw new Error("Serializer is missing a node type: " + e.type.name);
  const { dom: r, contentDOM: a } = we.renderSpec(
    Bo(t),
    o.nodes[e.type.name](e)
  );
  if (a) {
    if (e.isLeaf)
      throw new RangeError("Content hole not allowed in a leaf node spec");
    if (e.type.name === "blockContainer") {
      const s = e.childCount > 0 && e.firstChild.type.spec.group === "blockContent" ? e.firstChild : void 0, l = e.childCount > 0 && e.lastChild.type.spec.group === "blockGroup" ? e.lastChild : void 0;
      if (s !== void 0) {
        const d = i.blockImplementations[s.type.name].implementation, p = (n ? d.toExternalHTML : d.toInternalHTML)(
          v(
            e,
            i.schema.blockSchema,
            i.schema.inlineContentSchema,
            i.schema.styleSchema,
            i.blockCache
          ),
          i
        );
        if (p.contentDOM !== void 0) {
          if (e.isLeaf)
            throw new RangeError(
              "Content hole not allowed in a leaf node spec"
            );
          p.contentDOM.appendChild(
            o.serializeFragment(s.content, t)
          );
        }
        a.appendChild(p.dom);
      }
      l !== void 0 && o.serializeFragment(
        L.from(l),
        t,
        a
      );
    } else
      o.serializeFragment(e.content, t, a);
  }
  return r;
}, nt = (e, t) => {
  const o = t.serializeFragment(e), i = document.createElement("div");
  return i.appendChild(o), i.innerHTML;
};
function Lo(e) {
  const t = /* @__PURE__ */ new Set([
    ...e.orderedListItemBlockTypes,
    ...e.unorderedListItemBlockTypes
  ]), o = (i) => {
    var a;
    if (i.children.length === 1 && ((a = i.children[0].properties) == null ? void 0 : a.dataNodeType) === "blockGroup") {
      const s = i.children[0];
      i.children.pop(), i.children.push(...s.children);
    }
    let n = i.children.length, r;
    for (let s = 0; s < n; s++) {
      const d = i.children[s].children[0], u = d.children[0], p = d.children.length === 2 ? d.children[1] : null, h = t.has(
        u.properties.dataContentType
      ), m = h ? e.orderedListItemBlockTypes.has(
        u.properties.dataContentType
      ) ? "ol" : "ul" : null;
      if (p !== null && o(p), r && r.tagName !== m) {
        i.children.splice(
          s - r.children.length,
          r.children.length,
          r
        );
        const f = r.children.length - 1;
        s -= f, n -= f, r = void 0;
      }
      if (h) {
        r || (r = _e(
          document.createElement(m)
        ));
        const f = _e(
          document.createElement("li")
        );
        f.children.push(...u.children), p !== null && f.children.push(...p.children), r.children.push(f);
      } else if (p !== null) {
        i.children.splice(s + 1, 0, ...p.children), i.children[s] = u.children[0];
        const f = p.children.length;
        s += f, n += f;
      } else
        i.children[s] = u.children[0];
    }
    r && i.children.splice(
      n - r.children.length,
      r.children.length,
      r
    );
  };
  return o;
}
const ae = (e, t) => {
  const o = we.fromSchema(e);
  return o.serializeNodeInner = (i, n) => it(i, n, o, t, !0), o.exportProseMirrorFragment = (i) => ve().use(qe, { fragment: !0 }).use(Lo, {
    orderedListItemBlockTypes: /* @__PURE__ */ new Set(["numberedListItem"]),
    unorderedListItemBlockTypes: /* @__PURE__ */ new Set([
      "bulletListItem",
      "checkListItem"
    ])
  }).use(Xe).processSync(nt(i, o)).value, o.exportBlocks = (i) => {
    const n = i.map(
      (a) => P(a, e, t.schema.styleSchema)
    ), r = e.nodes.blockGroup.create(null, n);
    return o.exportProseMirrorFragment(L.from(r));
  }, o;
}, rt = (e, t) => {
  const o = we.fromSchema(e);
  return o.serializeNodeInner = (i, n) => it(i, n, o, t, !1), o.serializeProseMirrorFragment = (i) => nt(i, o), o.serializeBlocks = (i) => {
    const n = i.map(
      (a) => P(a, e, t.schema.styleSchema)
    ), r = e.nodes.blockGroup.create(null, n);
    return o.serializeProseMirrorFragment(L.from(r));
  }, o;
}, Io = () => typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function H(e, t = "Ctrl") {
  return Io() ? e.replace("Mod", "⌘") : e.replace("Mod", t);
}
function R(...e) {
  return e.filter((t) => t).join(" ");
}
const Nr = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
function O(e, t, o, i) {
  const n = document.createElement("div");
  n.className = R(
    "bn-block-content",
    o.class
  ), n.setAttribute("data-content-type", e);
  for (const [a, s] of Object.entries(o))
    a !== "class" && n.setAttribute(a, s);
  const r = document.createElement(t);
  r.className = R(
    "bn-inline-content",
    i.class
  );
  for (const [a, s] of Object.entries(
    i
  ))
    a !== "class" && r.setAttribute(a, s);
  return n.appendChild(r), {
    dom: n,
    contentDOM: r
  };
}
const Ve = (e, t) => {
  const o = P(
    e,
    t._tiptapEditor.schema,
    t.schema.styleSchema
  ).firstChild, i = t._tiptapEditor.schema.nodes[o.type.name].spec.toDOM;
  if (i === void 0)
    throw new Error(
      "This block has no default HTML serialization as its corresponding TipTap node doesn't implement `renderHTML`."
    );
  const n = i(o);
  if (typeof n != "object" || !("dom" in n))
    throw new Error(
      "Cannot use this block's default HTML serialization as its corresponding TipTap node's `renderHTML` function does not return an object with the `dom` property."
    );
  return n;
}, k = {
  backgroundColor: {
    default: "default"
  },
  textColor: {
    default: "default"
  },
  textAlignment: {
    default: "left",
    values: ["left", "center", "right", "justify"]
  }
}, at = ["backgroundColor", "textColor"];
function re(e) {
  return "data-" + e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Pr(e) {
  const t = e.split("/");
  return !t.length || // invalid?
  t[t.length - 1] === "" ? e : t[t.length - 1];
}
function st(e) {
  const t = {};
  return Object.entries(e).filter(([o, i]) => !at.includes(o)).forEach(([o, i]) => {
    t[o] = {
      default: i.default,
      keepOnSplit: !0,
      // Props are displayed in kebab-case as HTML attributes. If a prop's
      // value is the same as its default, we don't display an HTML
      // attribute for it.
      parseHTML: (n) => {
        const r = n.getAttribute(re(o));
        if (r === null)
          return null;
        if (typeof i.default == "boolean")
          return r === "true" ? !0 : r === "false" ? !1 : null;
        if (typeof i.default == "number") {
          const a = parseFloat(r);
          return !Number.isNaN(a) && Number.isFinite(a) ? a : null;
        }
        return r;
      },
      renderHTML: (n) => n[o] !== i.default ? {
        [re(o)]: n[o]
      } : {}
    };
  }), t;
}
function Ao(e, t, o, i) {
  if (typeof e == "boolean")
    throw new Error(
      "Cannot find node position as getPos is a boolean, not a function."
    );
  const n = e(), a = o.state.doc.resolve(n).node().attrs.id;
  if (!a)
    throw new Error("Block doesn't have id");
  const s = t.getBlock(a);
  if (s.type !== i)
    throw new Error("Block type does not match");
  return s;
}
function me(e, t, o, i, n = !1, r) {
  const a = document.createElement("div");
  if (r !== void 0)
    for (const [s, l] of Object.entries(r))
      s !== "class" && a.setAttribute(s, l);
  a.className = R(
    "bn-block-content",
    (r == null ? void 0 : r.class) || ""
  ), a.setAttribute("data-content-type", t);
  for (const [s, l] of Object.entries(o))
    !at.includes(s) && l !== i[s].default && a.setAttribute(re(s), l);
  return n && a.setAttribute("data-file-block", ""), a.appendChild(e.dom), e.contentDOM !== void 0 && (e.contentDOM.className = R(
    "bn-inline-content",
    e.contentDOM.className
  ), e.contentDOM.setAttribute("data-editable", "")), {
    ...e,
    dom: a
  };
}
function z(e) {
  return K.create(e);
}
function lt(e, t) {
  return {
    config: e,
    implementation: t
  };
}
function q(e, t, o) {
  return lt(
    {
      type: e.name,
      content: e.config.content === "inline*" ? "inline" : e.config.content === "tableRow+" ? "table" : "none",
      propSchema: t
    },
    {
      node: e,
      requiredExtensions: o,
      toInternalHTML: Ve,
      toExternalHTML: Ve
      // parse: () => undefined, // parse rules are in node already
    }
  );
}
function dt(e) {
  return Object.fromEntries(
    Object.entries(e).map(([t, o]) => [t, o.config])
  );
}
function No(e, t) {
  const o = [
    {
      tag: "[data-content-type=" + e.type + "]",
      contentElement: "[data-editable]"
    }
  ];
  return t && o.push({
    tag: "*",
    getAttrs(i) {
      if (typeof i == "string")
        return !1;
      const n = t == null ? void 0 : t(i);
      return n === void 0 ? !1 : n;
    }
  }), o;
}
function se(e, t) {
  const o = z({
    name: e.type,
    content: e.content === "inline" ? "inline*" : "",
    group: "blockContent",
    selectable: !0,
    addAttributes() {
      return st(e.propSchema);
    },
    parseHTML() {
      return No(e, t.parse);
    },
    renderHTML() {
      const i = document.createElement("div");
      return i.setAttribute("data-tmp-placeholder", "true"), {
        dom: i
      };
    },
    addNodeView() {
      return ({ getPos: i }) => {
        var l;
        const n = this.options.editor, r = Ao(
          i,
          n,
          this.editor,
          e.type
        ), a = ((l = this.options.domAttributes) == null ? void 0 : l.blockContent) || {}, s = t.render(r, n);
        return me(
          s,
          r.type,
          r.props,
          e.propSchema,
          a
        );
      };
    }
  });
  if (o.name !== e.type)
    throw new Error(
      "Node name does not match block type. This is a bug in BlockNote."
    );
  return lt(e, {
    node: o,
    toInternalHTML: (i, n) => {
      var s;
      const r = ((s = o.options.domAttributes) == null ? void 0 : s.blockContent) || {}, a = t.render(i, n);
      return me(
        a,
        i.type,
        i.props,
        e.propSchema,
        e.isFileBlock,
        r
      );
    },
    toExternalHTML: (i, n) => {
      var s, l;
      const r = ((s = o.options.domAttributes) == null ? void 0 : s.blockContent) || {};
      let a = (l = t.toExternalHTML) == null ? void 0 : l.call(
        t,
        i,
        n
      );
      return a === void 0 && (a = t.render(i, n)), me(
        a,
        i.type,
        i.props,
        e.propSchema,
        r
      );
    }
  });
}
function Po(e, t, o, i) {
  return e.dom.setAttribute("data-inline-content-type", t), Object.entries(o).filter(([n, r]) => r !== i[n].default).map(([n, r]) => [re(n), r]).forEach(([n, r]) => e.dom.setAttribute(n, r)), e.contentDOM !== void 0 && e.contentDOM.setAttribute("data-editable", ""), e;
}
function Ho(e) {
  return {
    Backspace: ({ editor: t }) => {
      const o = t.state.selection.$from;
      return t.state.selection.empty && o.node().type.name === e.type && o.parentOffset === 0;
    }
  };
}
function Uo(e, t) {
  return {
    config: e,
    implementation: t
  };
}
function Do(e, t) {
  return Uo(
    {
      type: e.name,
      propSchema: t,
      content: e.config.content === "inline*" ? "styled" : "none"
    },
    {
      node: e
    }
  );
}
function ct(e) {
  return Object.fromEntries(
    Object.entries(e).map(([t, o]) => [t, o.config])
  );
}
function Vo(e) {
  return [
    {
      tag: `[data-inline-content-type="${e.type}"]`,
      contentElement: (t) => {
        const o = t;
        return o.matches("[data-editable]") ? o : o.querySelector("[data-editable]") || o;
      }
    }
  ];
}
function Hr(e, t) {
  const o = K.create({
    name: e.type,
    inline: !0,
    group: "inline",
    selectable: e.content === "styled",
    atom: e.content === "none",
    content: e.content === "styled" ? "inline*" : "",
    addAttributes() {
      return st(e.propSchema);
    },
    addKeyboardShortcuts() {
      return Ho(e);
    },
    parseHTML() {
      return Vo(e);
    },
    renderHTML({ node: i }) {
      const n = this.options.editor, r = t.render(
        ot(
          i,
          n.schema.inlineContentSchema,
          n.schema.styleSchema
        )
        // TODO: fix cast
      );
      return Po(
        r,
        e.type,
        i.attrs,
        e.propSchema
      );
    }
  });
  return Do(
    o,
    e.propSchema
  );
}
function Ro(e) {
  return e === "boolean" ? {} : {
    stringValue: {
      default: void 0,
      keepOnSplit: !0,
      parseHTML: (t) => t.getAttribute("data-value"),
      renderHTML: (t) => t.stringValue !== void 0 ? {
        "data-value": t.stringValue
      } : {}
    }
  };
}
function Oo(e, t, o, i) {
  return e.dom.setAttribute("data-style-type", t), i === "string" && e.dom.setAttribute("data-value", o), e.contentDOM !== void 0 && e.contentDOM.setAttribute("data-editable", ""), e;
}
function ut(e, t) {
  return {
    config: e,
    implementation: t
  };
}
function U(e, t) {
  return ut(
    {
      type: e.name,
      propSchema: t
    },
    {
      mark: e
    }
  );
}
function pt(e) {
  return Object.fromEntries(
    Object.entries(e).map(([t, o]) => [t, o.config])
  );
}
function jo(e) {
  return [
    {
      tag: `[data-style-type="${e.type}"]`,
      contentElement: (t) => {
        const o = t;
        return o.matches("[data-editable]") ? o : o.querySelector("[data-editable]") || o;
      }
    }
  ];
}
function Ur(e, t) {
  const o = xe.create({
    name: e.type,
    addAttributes() {
      return Ro(e.propSchema);
    },
    parseHTML() {
      return jo(e);
    },
    renderHTML({ mark: i }) {
      let n;
      if (e.propSchema === "boolean")
        n = t.render();
      else if (e.propSchema === "string")
        n = t.render(i.attrs.stringValue);
      else
        throw new I(e.propSchema);
      return Oo(
        n,
        e.type,
        i.attrs.stringValue,
        e.propSchema
      );
    }
  });
  return ut(e, {
    mark: o
  });
}
const le = (e) => {
  const t = document.createElement("div");
  t.className = "bn-file-default-preview";
  const o = document.createElement("div");
  o.className = "bn-file-default-preview-icon", o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"></path></svg>';
  const i = document.createElement("p");
  return i.className = "bn-file-default-preview-name", i.textContent = e.props.name || "", t.appendChild(o), t.appendChild(i), {
    dom: t
  };
}, j = (e, t) => {
  const o = document.createElement("div");
  o.className = "bn-file-and-caption-wrapper";
  const i = document.createElement("p");
  return i.className = "bn-file-caption", i.textContent = e.props.caption, o.appendChild(t), o.appendChild(i), {
    dom: o
  };
}, de = (e, t, o, i) => {
  const n = document.createElement("div");
  n.className = "bn-add-file-button";
  const r = document.createElement("div");
  r.className = "bn-add-file-button-icon", i ? r.appendChild(i) : r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z"></path></svg>';
  const a = document.createElement("p");
  a.className = "bn-add-file-button-text", a.innerHTML = o || t.dictionary.file_blocks.file.add_button_text;
  const s = (d) => {
    d.preventDefault();
  }, l = () => {
    t._tiptapEditor.view.dispatch(
      t._tiptapEditor.state.tr.setMeta(t.filePanel.plugin, {
        block: e
      })
    );
  };
  return n.appendChild(r), n.appendChild(a), n.addEventListener(
    "mousedown",
    s,
    !0
  ), n.addEventListener("click", l, !0), {
    dom: n,
    destroy: () => {
      n.removeEventListener(
        "mousedown",
        s,
        !0
      ), n.removeEventListener(
        "click",
        l,
        !0
      );
    }
  };
}, Re = (e) => ({ url: e.src || void 0 }), ce = (e, t) => {
  const o = e.querySelector(
    t
  );
  if (!o)
    return;
  const i = e.querySelector("figcaption"), n = (i == null ? void 0 : i.textContent) ?? void 0;
  return { targetElement: o, caption: n };
}, ue = (e, t) => {
  const o = document.createElement("div"), i = document.createElement("p");
  return i.textContent = t, o.appendChild(e), o.appendChild(i), {
    dom: o
  };
}, Ce = (e, t) => {
  const o = document.createElement("figure"), i = document.createElement("figcaption");
  return i.textContent = t, o.appendChild(e), o.appendChild(i), { dom: o };
}, ht = (e, t, o, i, n) => {
  if (!e.props.previewWidth)
    throw new Error("Block must have a `previewWidth` prop.");
  const r = document.createElement("div");
  r.className = "bn-visual-media-wrapper";
  const a = document.createElement("div");
  a.className = "bn-visual-media-resize-handle", a.style.left = "4px";
  const s = document.createElement("div");
  s.className = "bn-visual-media-resize-handle", s.style.right = "4px";
  let l;
  const d = (g) => {
    if (!l) {
      !t.isEditable && r.contains(a) && r.contains(s) && (r.removeChild(a), r.removeChild(s));
      return;
    }
    let _;
    e.props.textAlignment === "center" ? l.handleUsed === "left" ? _ = l.initialWidth + (l.initialClientX - g.clientX) * 2 : _ = l.initialWidth + (g.clientX - l.initialClientX) * 2 : l.handleUsed === "left" ? _ = l.initialWidth + l.initialClientX - g.clientX : _ = l.initialWidth + g.clientX - l.initialClientX;
    const A = 64;
    _ < A ? n(A) : _ > t.domElement.firstElementChild.clientWidth ? n(t.domElement.firstElementChild.clientWidth) : n(_);
  }, u = (g) => {
    (!g.target || !r.contains(g.target) || !t.isEditable) && r.contains(a) && r.contains(s) && (r.removeChild(a), r.removeChild(s)), l && (l = void 0, t.updateBlock(e, {
      props: {
        previewWidth: i()
      }
    }));
  }, p = () => {
    t.isEditable && (r.appendChild(a), r.appendChild(s));
  }, h = (g) => {
    g.relatedTarget === a || g.relatedTarget === s || l || t.isEditable && r.contains(a) && r.contains(s) && (r.removeChild(a), r.removeChild(s));
  }, m = (g) => {
    g.preventDefault(), r.appendChild(a), r.appendChild(s), l = {
      handleUsed: "left",
      initialWidth: e.props.previewWidth,
      initialClientX: g.clientX
    };
  }, f = (g) => {
    g.preventDefault(), r.appendChild(a), r.appendChild(s), l = {
      handleUsed: "right",
      initialWidth: e.props.previewWidth,
      initialClientX: g.clientX
    };
  };
  return r.appendChild(o), window.addEventListener("mousemove", d), window.addEventListener("mouseup", u), o.addEventListener("mouseenter", p), o.addEventListener("mouseleave", h), a.addEventListener(
    "mousedown",
    m
  ), s.addEventListener(
    "mousedown",
    f
  ), {
    dom: r,
    destroy: () => {
      window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", u), o.removeEventListener("mouseenter", p), o.removeEventListener("mouseleave", h), a.removeEventListener(
        "mousedown",
        m
      ), s.removeEventListener(
        "mousedown",
        f
      );
    }
  };
}, zo = {
  backgroundColor: k.backgroundColor,
  // File name.
  name: {
    default: ""
  },
  // File url.
  url: {
    default: ""
  },
  // File caption.
  caption: {
    default: ""
  }
}, Fo = {
  type: "file",
  propSchema: zo,
  content: "none",
  isFileBlock: !0
}, Go = (e, t) => {
  const o = document.createElement("div");
  if (o.className = "bn-file-block-content-wrapper", e.props.url === "") {
    const i = de(e, t);
    return o.appendChild(i.dom), {
      dom: o,
      destroy: i.destroy
    };
  } else {
    const i = le(e).dom, n = j(e, i);
    return o.appendChild(n.dom), {
      dom: o
    };
  }
}, Wo = (e) => {
  if (e.tagName === "EMBED")
    return Re(e);
  if (e.tagName === "FIGURE") {
    const t = ce(e, "embed");
    if (!t)
      return;
    const { targetElement: o, caption: i } = t;
    return {
      ...Re(o),
      caption: i
    };
  }
}, $o = (e) => {
  if (!e.props.url) {
    const o = document.createElement("p");
    return o.textContent = "Add file", {
      dom: o
    };
  }
  const t = document.createElement("a");
  return t.href = e.props.url, t.textContent = e.props.name || e.props.url, e.props.caption ? ue(t, e.props.caption) : {
    dom: t
  };
}, Ko = se(Fo, {
  render: Go,
  parse: Wo,
  toExternalHTML: $o
}), Oe = (e) => {
  const t = e.src || void 0, o = e.width || void 0;
  return { url: t, previewWidth: o };
}, qo = {
  textAlignment: k.textAlignment,
  backgroundColor: k.backgroundColor,
  // File name.
  name: {
    default: ""
  },
  // File url.
  url: {
    default: ""
  },
  // File caption.
  caption: {
    default: ""
  },
  showPreview: {
    default: !0
  },
  // File preview width in px.
  previewWidth: {
    default: 512
  }
}, Xo = {
  type: "image",
  propSchema: qo,
  content: "none",
  isFileBlock: !0,
  fileBlockAcceptMimeTypes: ["image/*"]
}, Zo = (e, t) => {
  const o = document.createElement("div");
  if (o.className = "bn-file-block-content-wrapper", e.props.url === "") {
    const i = document.createElement("div");
    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z"></path></svg>';
    const n = de(
      e,
      t,
      t.dictionary.file_blocks.image.add_button_text,
      i.firstElementChild
    );
    return o.appendChild(n.dom), {
      dom: o,
      destroy: () => {
        var r;
        (r = n == null ? void 0 : n.destroy) == null || r.call(n);
      }
    };
  } else if (e.props.showPreview) {
    const i = document.createElement("img");
    i.className = "bn-visual-media", t.resolveFileUrl(e.props.url).then((a) => {
      i.src = a;
    }), i.alt = e.props.name || e.props.caption || "BlockNote image", i.contentEditable = "false", i.draggable = !1, i.width = Math.min(
      e.props.previewWidth,
      t.domElement.firstElementChild.clientWidth
    );
    const n = ht(
      e,
      t,
      i,
      () => i.width,
      (a) => i.width = a
    ), r = j(e, n.dom);
    return o.appendChild(r.dom), {
      dom: o,
      destroy: n.destroy
    };
  } else {
    const i = le(e).dom;
    return {
      dom: j(e, i).dom
    };
  }
}, Jo = (e) => {
  if (e.tagName === "IMG")
    return Oe(e);
  if (e.tagName === "FIGURE") {
    const t = ce(e, "img");
    if (!t)
      return;
    const { targetElement: o, caption: i } = t;
    return {
      ...Oe(o),
      caption: i
    };
  }
}, Yo = (e) => {
  if (!e.props.url) {
    const o = document.createElement("p");
    return o.textContent = "Add image", {
      dom: o
    };
  }
  let t;
  return e.props.showPreview ? (t = document.createElement("img"), t.src = e.props.url, t.alt = e.props.name || e.props.caption || "BlockNote image", t.width = e.props.previewWidth) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? Ce(t, e.props.caption) : ue(t, e.props.caption) : {
    dom: t
  };
}, Qo = se(Xo, {
  render: Zo,
  parse: Jo,
  toExternalHTML: Yo
}), je = (e) => {
  const t = e.src || void 0, o = e.width || void 0;
  return { url: t, previewWidth: o };
}, ei = {
  textAlignment: k.textAlignment,
  backgroundColor: k.backgroundColor,
  // File name.
  name: {
    default: ""
  },
  // File url.
  url: {
    default: ""
  },
  // File caption.
  caption: {
    default: ""
  },
  showPreview: {
    default: !0
  },
  // File preview width in px.
  previewWidth: {
    default: 512
  }
}, ti = {
  type: "video",
  propSchema: ei,
  content: "none",
  isFileBlock: !0,
  fileBlockAcceptMimeTypes: ["video/*"]
}, oi = (e, t) => {
  const o = document.createElement("div");
  if (o.className = "bn-file-block-content-wrapper", e.props.url === "") {
    const i = document.createElement("div");
    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z"></path></svg>';
    const n = de(
      e,
      t,
      t.dictionary.file_blocks.video.add_button_text,
      i.firstElementChild
    );
    return o.appendChild(n.dom), {
      dom: o,
      destroy: () => {
        var r;
        (r = n == null ? void 0 : n.destroy) == null || r.call(n);
      }
    };
  } else if (e.props.showPreview) {
    const i = document.createElement("video");
    i.className = "bn-visual-media", i.src = e.props.url, i.controls = !0, i.contentEditable = "false", i.draggable = !1, i.width = Math.min(
      e.props.previewWidth,
      t.domElement.firstElementChild.clientWidth
    );
    const n = ht(
      e,
      t,
      i,
      () => i.width,
      (a) => i.width = a
    ), r = j(e, n.dom);
    return o.appendChild(r.dom), {
      dom: o,
      destroy: n.destroy
    };
  } else {
    const i = le(e).dom;
    return {
      dom: j(e, i).dom
    };
  }
}, ii = (e) => {
  if (e.tagName === "VIDEO")
    return je(e);
  if (e.tagName === "FIGURE") {
    const t = ce(e, "video");
    if (!t)
      return;
    const { targetElement: o, caption: i } = t;
    return {
      ...je(o),
      caption: i
    };
  }
}, ni = (e) => {
  if (!e.props.url) {
    const o = document.createElement("p");
    return o.textContent = "Add video", {
      dom: o
    };
  }
  let t;
  return e.props.showPreview ? (t = document.createElement("video"), t.src = e.props.url, t.width = e.props.previewWidth) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? Ce(t, e.props.caption) : ue(t, e.props.caption) : {
    dom: t
  };
}, ri = se(ti, {
  render: oi,
  parse: ii,
  toExternalHTML: ni
}), ze = (e) => ({ url: e.src || void 0 }), ai = {
  backgroundColor: k.backgroundColor,
  // File name.
  name: {
    default: ""
  },
  // File url.
  url: {
    default: ""
  },
  // File caption.
  caption: {
    default: ""
  },
  showPreview: {
    default: !0
  }
}, si = {
  type: "audio",
  propSchema: ai,
  content: "none",
  isFileBlock: !0,
  fileBlockAcceptMimeTypes: ["audio/*"]
}, li = (e, t) => {
  const o = document.createElement("div");
  if (o.className = "bn-file-block-content-wrapper", e.props.url === "") {
    const i = document.createElement("div");
    i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"></path></svg>';
    const n = de(
      e,
      t,
      t.dictionary.file_blocks.audio.add_button_text,
      i.firstElementChild
    );
    return o.appendChild(n.dom), {
      dom: o,
      destroy: () => {
        var r;
        (r = n == null ? void 0 : n.destroy) == null || r.call(n);
      }
    };
  } else if (e.props.showPreview) {
    const i = document.createElement("audio");
    i.className = "bn-audio", t.resolveFileUrl(e.props.url).then((r) => {
      i.src = r;
    }), i.controls = !0, i.contentEditable = "false", i.draggable = !1;
    const n = j(e, i);
    return o.appendChild(n.dom), {
      dom: o
    };
  } else {
    const i = le(e).dom;
    return {
      dom: j(e, i).dom
    };
  }
}, di = (e) => {
  if (e.tagName === "AUDIO")
    return ze(e);
  if (e.tagName === "FIGURE") {
    const t = ce(e, "audio");
    if (!t)
      return;
    const { targetElement: o, caption: i } = t;
    return {
      ...ze(o),
      caption: i
    };
  }
}, ci = (e) => {
  if (!e.props.url) {
    const o = document.createElement("p");
    return o.textContent = "Add audio", {
      dom: o
    };
  }
  let t;
  return e.props.showPreview ? (t = document.createElement("audio"), t.src = e.props.url) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? Ce(t, e.props.caption) : ue(t, e.props.caption) : {
    dom: t
  };
}, ui = se(si, {
  render: li,
  parse: di,
  toExternalHTML: ci
}), Dr = async (e) => {
  const t = new FormData();
  return t.append("file", e), (await (await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body: t
  })).json()).data.url.replace(
    "tmpfiles.org/",
    "tmpfiles.org/dl/"
  );
}, pi = xe.create({
  name: "backgroundColor",
  addAttributes() {
    return {
      stringValue: {
        default: void 0,
        parseHTML: (e) => e.getAttribute("data-background-color"),
        renderHTML: (e) => ({
          "data-background-color": e.stringValue
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (e) => typeof e == "string" ? !1 : e.hasAttribute("data-background-color") ? {
          stringValue: e.getAttribute("data-background-color")
        } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["span", e, 0];
  }
}), hi = U(
  pi,
  "string"
), mi = xe.create({
  name: "textColor",
  addAttributes() {
    return {
      stringValue: {
        default: void 0,
        parseHTML: (e) => e.getAttribute("data-text-color"),
        renderHTML: (e) => ({
          "data-text-color": e.stringValue
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (e) => typeof e == "string" ? !1 : e.hasAttribute("data-text-color") ? { stringValue: e.getAttribute("data-text-color") } : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["span", e, 0];
  }
}), fi = U(mi, "string"), C = (e) => {
  const { contentType: t } = b(
    e.state.doc,
    e.state.selection.from
  );
  return t.spec.content;
}, gi = {
  ...k,
  level: { default: 1, values: [1, 2, 3] }
}, bi = z({
  name: "heading",
  content: "inline*",
  group: "blockContent",
  addAttributes() {
    return {
      level: {
        default: 1,
        // instead of "level" attributes, use "data-level"
        parseHTML: (e) => {
          const t = e.getAttribute("data-level"), o = parseInt(t);
          if (isFinite(o))
            return o;
        },
        renderHTML: (e) => ({
          "data-level": e.level.toString()
        })
      }
    };
  },
  addInputRules() {
    return [
      ...[1, 2, 3].map((e) => new ee({
        find: new RegExp(`^(#{${e}})\\s$`),
        handler: ({ state: t, chain: o, range: i }) => {
          C(this.editor) === "inline*" && o().BNUpdateBlock(t.selection.from, {
            type: "heading",
            props: {
              level: e
            }
          }).deleteRange({ from: i.from, to: i.to });
        }
      }))
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-1": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "heading",
          props: {
            level: 1
          }
        }
      ),
      "Mod-Alt-2": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "heading",
          props: {
            level: 2
          }
        }
      ),
      "Mod-Alt-3": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "heading",
          props: {
            level: 3
          }
        }
      )
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-content-type=" + this.name + "]",
        getAttrs: (e) => typeof e == "string" ? !1 : {
          level: e.getAttribute("data-level")
        }
      },
      {
        tag: "h1",
        attrs: { level: 1 },
        node: "heading"
      },
      {
        tag: "h2",
        attrs: { level: 2 },
        node: "heading"
      },
      {
        tag: "h3",
        attrs: { level: 3 },
        node: "heading"
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    var o, i;
    return O(
      this.name,
      `h${e.attrs.level}`,
      {
        ...((o = this.options.domAttributes) == null ? void 0 : o.blockContent) || {},
        ...t
      },
      ((i = this.options.domAttributes) == null ? void 0 : i.inlineContent) || {}
    );
  }
}), ki = q(
  bi,
  gi
), Se = (e) => {
  const { contentNode: t, contentType: o } = b(
    e.state.doc,
    e.state.selection.from
  ), i = e.state.selection.anchor === e.state.selection.head;
  return !(o.name === "bulletListItem" || o.name === "numberedListItem" || o.name === "checkListItem") || !i ? !1 : e.commands.first(({ state: n, chain: r, commands: a }) => [
    () => (
      // Changes list item block to a paragraph block if the content is empty.
      a.command(() => t.childCount === 0 ? a.BNUpdateBlock(n.selection.from, {
        type: "paragraph",
        props: {}
      }) : !1)
    ),
    () => (
      // Splits the current block, moving content inside that's after the cursor
      // to a new block of the same type below.
      a.command(() => t.childCount > 0 ? (r().deleteSelection().BNSplitBlock(n.selection.from, !0).run(), !0) : !1)
    )
  ]);
}, _i = {
  ...k
}, yi = z({
  name: "bulletListItem",
  content: "inline*",
  group: "blockContent",
  // This is to make sure that check list parse rules run before, since they
  // both parse `li` elements but check lists are more specific.
  priority: 90,
  addInputRules() {
    return [
      // Creates an unordered list when starting with "-", "+", or "*".
      new ee({
        find: new RegExp("^[-+*]\\s$"),
        handler: ({ state: e, chain: t, range: o }) => {
          C(this.editor) === "inline*" && t().BNUpdateBlock(e.selection.from, {
            type: "bulletListItem",
            props: {}
          }).deleteRange({ from: o.from, to: o.to });
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => Se(this.editor),
      "Mod-Shift-8": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "bulletListItem",
          props: {}
        }
      )
    };
  },
  parseHTML() {
    return [
      // Case for regular HTML list structure.
      {
        tag: "div[data-content-type=" + this.name + "]"
        // TODO: remove if we can't come up with test case that needs this
      },
      {
        tag: "li",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = e.parentElement;
          return t === null ? !1 : t.tagName === "UL" || t.tagName === "DIV" && t.parentElement.tagName === "UL" ? {} : !1;
        },
        node: "bulletListItem"
      },
      // Case for BlockNote list structure.
      {
        tag: "p",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = e.parentElement;
          return t === null ? !1 : t.getAttribute("data-content-type") === "bulletListItem" ? {} : !1;
        },
        priority: 300,
        node: "bulletListItem"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    var t, o;
    return O(
      this.name,
      // We use a <p> tag, because for <li> tags we'd need a <ul> element to put
      // them in to be semantically correct, which we can't have due to the
      // schema.
      "p",
      {
        ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
        ...e
      },
      ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {}
    );
  }
}), wi = q(
  yi,
  _i
), vi = new S("numbered-list-indexing"), xi = () => new y({
  key: vi,
  appendTransaction: (e, t, o) => {
    const i = o.tr;
    i.setMeta("numberedListIndexing", !0);
    let n = !1;
    return o.doc.descendants((r, a) => {
      if (r.type.name === "blockContainer" && r.firstChild.type.name === "numberedListItem") {
        let s = "1";
        const l = a === 1, d = b(i.doc, a + 1);
        if (d === void 0)
          return;
        if (!l) {
          const h = b(i.doc, a - 2);
          if (h === void 0)
            return;
          if (!(d.depth !== h.depth)) {
            const f = h.contentNode;
            if (h.contentType.name === "numberedListItem") {
              const A = f.attrs.index;
              s = (parseInt(A) + 1).toString();
            }
          }
        }
        d.contentNode.attrs.index !== s && (n = !0, i.setNodeMarkup(a + 1, void 0, {
          index: s
        }));
      }
    }), n ? i : null;
  }
}), Ei = {
  ...k
}, Ci = z({
  name: "numberedListItem",
  content: "inline*",
  group: "blockContent",
  priority: 90,
  addAttributes() {
    return {
      index: {
        default: null,
        parseHTML: (e) => e.getAttribute("data-index"),
        renderHTML: (e) => ({
          "data-index": e.index
        })
      }
    };
  },
  addInputRules() {
    return [
      // Creates an ordered list when starting with "1.".
      new ee({
        find: new RegExp("^1\\.\\s$"),
        handler: ({ state: e, chain: t, range: o }) => {
          C(this.editor) === "inline*" && t().BNUpdateBlock(e.selection.from, {
            type: "numberedListItem",
            props: {}
          }).deleteRange({ from: o.from, to: o.to });
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => Se(this.editor),
      "Mod-Shift-7": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "numberedListItem",
          props: {}
        }
      )
    };
  },
  addProseMirrorPlugins() {
    return [xi()];
  },
  parseHTML() {
    return [
      {
        tag: "div[data-content-type=" + this.name + "]"
        // TODO: remove if we can't come up with test case that needs this
      },
      // Case for regular HTML list structure.
      // (e.g.: when pasting from other apps)
      {
        tag: "li",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = e.parentElement;
          return t === null ? !1 : t.tagName === "OL" || t.tagName === "DIV" && t.parentElement.tagName === "OL" ? {} : !1;
        },
        node: "numberedListItem"
      },
      // Case for BlockNote list structure.
      // (e.g.: when pasting from blocknote)
      {
        tag: "p",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = e.parentElement;
          return t === null ? !1 : t.getAttribute("data-content-type") === "numberedListItem" ? {} : !1;
        },
        priority: 300,
        node: "numberedListItem"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    var t, o;
    return O(
      this.name,
      // We use a <p> tag, because for <li> tags we'd need an <ol> element to
      // put them in to be semantically correct, which we can't have due to the
      // schema.
      "p",
      {
        ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
        ...e
      },
      ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {}
    );
  }
}), Si = q(
  Ci,
  Ei
), Mi = {
  ...k,
  checked: {
    default: !1
  }
}, Ti = z({
  name: "checkListItem",
  content: "inline*",
  group: "blockContent",
  addAttributes() {
    return {
      checked: {
        default: !1,
        // instead of "checked" attributes, use "data-checked"
        parseHTML: (e) => e.getAttribute("data-checked") === "true" || void 0,
        renderHTML: (e) => e.checked ? {
          "data-checked": e.checked.toString()
        } : {}
      }
    };
  },
  addInputRules() {
    return [
      // Creates a checklist when starting with "[]" or "[X]".
      new ee({
        find: new RegExp("\\[\\s*\\]\\s$"),
        handler: ({ state: e, chain: t, range: o }) => {
          C(this.editor) === "inline*" && t().BNUpdateBlock(e.selection.from, {
            type: "checkListItem",
            props: {
              checked: !1
            }
          }).deleteRange({ from: o.from, to: o.to });
        }
      }),
      new ee({
        find: new RegExp("\\[[Xx]\\]\\s$"),
        handler: ({ state: e, chain: t, range: o }) => {
          C(this.editor) === "inline*" && t().BNUpdateBlock(e.selection.from, {
            type: "checkListItem",
            props: {
              checked: !0
            }
          }).deleteRange({ from: o.from, to: o.to });
        }
      })
    ];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => Se(this.editor),
      "Mod-Shift-9": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "checkListItem",
          props: {}
        }
      )
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-content-type=" + this.name + "]"
        // TODO: remove if we can't come up with test case that needs this
      },
      // Checkbox only.
      {
        tag: "input",
        getAttrs: (e) => typeof e == "string" ? !1 : e.type === "checkbox" ? { checked: e.checked } : !1,
        node: "checkListItem"
      },
      // Container element for checkbox + label.
      {
        tag: "li",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = e.parentElement;
          if (t === null)
            return !1;
          if (t.tagName === "UL" || t.tagName === "DIV" && t.parentElement.tagName === "UL") {
            const o = e.querySelector(
              "input[type=checkbox]"
            ) || null;
            return o === null ? !1 : { checked: o.checked };
          }
          return !1;
        },
        node: "checkListItem"
      }
    ];
  },
  // Since there is no HTML checklist element, there isn't really any
  // standardization for what checklists should look like in the DOM. GDocs'
  // and Notion's aren't cross compatible, for example. This implementation
  // has a semantically correct DOM structure (though missing a label for the
  // checkbox) which is also converted correctly to Markdown by remark.
  renderHTML({ node: e, HTMLAttributes: t }) {
    var r, a;
    const o = document.createElement("input");
    o.type = "checkbox", o.checked = e.attrs.checked, e.attrs.checked && o.setAttribute("checked", "");
    const { dom: i, contentDOM: n } = O(
      this.name,
      "p",
      {
        ...((r = this.options.domAttributes) == null ? void 0 : r.blockContent) || {},
        ...t
      },
      ((a = this.options.domAttributes) == null ? void 0 : a.inlineContent) || {}
    );
    return i.insertBefore(o, n), { dom: i, contentDOM: n };
  },
  // Need to render node view since the checkbox needs to be able to update the
  // node. This is only possible with a node view as it exposes `getPos`.
  addNodeView() {
    return ({ node: e, getPos: t, editor: o, HTMLAttributes: i }) => {
      var u, p;
      const n = document.createElement("div"), r = document.createElement("div");
      r.contentEditable = "false";
      const a = document.createElement("input");
      a.type = "checkbox", a.checked = e.attrs.checked, e.attrs.checked && a.setAttribute("checked", "");
      const s = () => {
        if (!o.isEditable) {
          a.checked = !a.checked;
          return;
        }
        typeof t != "boolean" && this.editor.commands.BNUpdateBlock(t(), {
          type: "checkListItem",
          props: {
            checked: a.checked
          }
        });
      };
      a.addEventListener("change", s);
      const { dom: l, contentDOM: d } = O(
        this.name,
        "p",
        {
          ...((u = this.options.domAttributes) == null ? void 0 : u.blockContent) || {},
          ...i
        },
        ((p = this.options.domAttributes) == null ? void 0 : p.inlineContent) || {}
      );
      if (typeof t != "boolean") {
        const m = "label-" + this.editor.state.doc.resolve(t()).node().attrs.id;
        a.setAttribute("aria-labelledby", m), d.id = m;
      }
      return l.removeChild(d), l.appendChild(n), n.appendChild(r), n.appendChild(d), r.appendChild(a), {
        dom: l,
        contentDOM: d,
        destroy: () => {
          a.removeEventListener("change", s);
        }
      };
    };
  }
}), Bi = q(
  Ti,
  Mi
), Li = {
  ...k
}, Ii = z({
  name: "paragraph",
  content: "inline*",
  group: "blockContent",
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => C(this.editor) !== "inline*" ? !0 : this.editor.commands.BNUpdateBlock(
        this.editor.state.selection.anchor,
        {
          type: "paragraph",
          props: {}
        }
      )
    };
  },
  parseHTML() {
    return [
      { tag: "div[data-content-type=" + this.name + "]" },
      {
        tag: "p",
        priority: 200,
        getAttrs: (e) => {
          var t;
          return typeof e == "string" || !((t = e.textContent) != null && t.trim()) ? !1 : {};
        },
        node: "paragraph"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    var t, o;
    return O(
      this.name,
      "p",
      {
        ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
        ...e
      },
      ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {}
    );
  }
}), Ai = q(
  Ii,
  Li
), Ni = M.create({
  name: "BlockNoteTableExtension",
  addProseMirrorPlugins: () => [
    Yt({
      cellMinWidth: 100
    }),
    Qt()
  ],
  addKeyboardShortcuts() {
    return {
      // Makes enter create a new line within the cell.
      Enter: () => this.editor.state.selection.empty && this.editor.state.selection.$head.parent.type.name === "tableParagraph" ? (this.editor.commands.setHardBreak(), !0) : !1,
      // Ensures that backspace won't delete the table if the text cursor is at
      // the start of a cell and the selection is empty.
      Backspace: () => {
        const e = this.editor.state.selection, t = e.empty, o = e.$head.parentOffset === 0, i = e.$head.node().type.name === "tableParagraph";
        return t && o && i;
      }
    };
  },
  extendNodeSchema(e) {
    const t = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      tableRole: Nt(
        Pt(e, "tableRole", t)
      )
    };
  }
}), Pi = {
  ...k
}, Hi = z({
  name: "table",
  content: "tableRow+",
  group: "blockContent",
  tableRole: "table",
  isolating: !0,
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    var t, o;
    return O(
      this.name,
      "table",
      {
        ...((t = this.options.domAttributes) == null ? void 0 : t.blockContent) || {},
        ...e
      },
      ((o = this.options.domAttributes) == null ? void 0 : o.inlineContent) || {}
    );
  }
}), Ui = K.create({
  name: "tableParagraph",
  group: "tableContent",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "td" },
      {
        tag: "p",
        getAttrs: (e) => {
          if (typeof e == "string" || !e.textContent)
            return !1;
          const t = e.parentElement;
          return t === null ? !1 : t.tagName === "TD" ? {} : !1;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "p",
      Ht(this.options.HTMLAttributes, e),
      0
    ];
  }
}), Di = q(
  Hi,
  Pi,
  [
    Ni,
    Ui,
    Zt.extend({
      content: "tableContent"
    }),
    Xt.extend({
      content: "tableContent"
    }),
    Jt
  ]
), mt = {
  paragraph: Ai,
  heading: ki,
  bulletListItem: wi,
  numberedListItem: Si,
  checkListItem: Bi,
  table: Di,
  file: Ko,
  image: Qo,
  video: ri,
  audio: ui
}, Vi = dt(mt), ft = {
  bold: U(Gt, "boolean"),
  italic: U($t, "boolean"),
  underline: U(qt, "boolean"),
  strike: U(Kt, "boolean"),
  code: U(Wt, "boolean"),
  textColor: fi,
  backgroundColor: hi
}, Vr = pt(ft), gt = {
  text: { config: "text", implementation: {} },
  link: { config: "link", implementation: {} }
}, Rr = ct(
  gt
);
function E(e, t) {
  return e in t.schema.blockSchema && t.schema.blockSchema[e] === Vi[e];
}
function Ri(e, t, o) {
  return t.type === e && t.type in o.schema.blockSchema && E(t.type, o);
}
function Or(e, t) {
  return e.type in t.schema.blockSchema && t.schema.blockSchema[e.type].isFileBlock || !1;
}
function jr(e, t) {
  return e.type in t.schema.blockSchema && t.schema.blockSchema[e.type].isFileBlock && "showPreview" in t.schema.blockSchema[e.type].propSchema || !1;
}
function zr(e, t) {
  return t.schema.blockSchema[e.type].isFileBlock && !e.props.url;
}
function Oi(e, t, o) {
  return t in o.schema.blockSchema && e in o.schema.blockSchema[t].propSchema && o.schema.blockSchema[t].propSchema[e] === k[e];
}
function Fr(e, t, o) {
  return Oi(e, t.type, o);
}
function Me(e, t) {
  let o, i;
  if (t.firstChild.descendants((n, r) => o ? !1 : n.type.name !== "blockContainer" || n.attrs.id !== e ? !0 : (o = n, i = r + 1, !1)), o === void 0 || i === void 0)
    throw Error("Could not find block in the editor with matching ID.");
  return {
    node: o,
    posBeforeNode: i
  };
}
function ji(e, t, o = "before", i) {
  const n = i._tiptapEditor, r = typeof t == "string" ? t : t.id, a = [];
  for (const u of e)
    a.push(
      P(u, n.schema, i.schema.styleSchema)
    );
  const { node: s, posBeforeNode: l } = Me(r, n.state.doc);
  if (o === "before" && n.view.dispatch(
    n.state.tr.insert(l, a)
  ), o === "after" && n.view.dispatch(
    n.state.tr.insert(l + s.nodeSize, a)
  ), o === "nested" && s.childCount < 2) {
    const u = n.state.schema.nodes.blockGroup.create(
      {},
      a
    );
    n.view.dispatch(
      n.state.tr.insert(
        l + s.firstChild.nodeSize + 1,
        u
      )
    );
  }
  const d = [];
  for (const u of a)
    d.push(
      v(
        u,
        i.schema.blockSchema,
        i.schema.inlineContentSchema,
        i.schema.styleSchema,
        i.blockCache
      )
    );
  return d;
}
function zi(e, t, o) {
  const i = o._tiptapEditor, n = typeof e == "string" ? e : e.id, { posBeforeNode: r } = Me(n, i.state.doc);
  i.commands.BNUpdateBlock(r + 1, t);
  const a = i.state.doc.resolve(r + 1).node();
  return v(
    a,
    o.schema.blockSchema,
    o.schema.inlineContentSchema,
    o.schema.styleSchema,
    o.blockCache
  );
}
function bt(e, t, o) {
  const i = t._tiptapEditor, n = i.state.tr, r = new Set(
    e.map(
      (l) => typeof l == "string" ? l : l.id
    )
  ), a = [];
  let s = 0;
  if (i.state.doc.descendants((l, d) => {
    if (r.size === 0)
      return !1;
    if (l.type.name !== "blockContainer" || !r.has(l.attrs.id))
      return !0;
    a.push(
      v(
        l,
        t.schema.blockSchema,
        t.schema.inlineContentSchema,
        t.schema.styleSchema,
        t.blockCache
      )
    ), r.delete(l.attrs.id), s = (o == null ? void 0 : o(l, d, n, s)) || s;
    const u = n.doc.nodeSize;
    n.delete(d - s - 1, d - s + l.nodeSize + 1);
    const p = n.doc.nodeSize;
    return s += u - p, !1;
  }), r.size > 0) {
    const l = [...r].join(`
`);
    throw Error(
      "Blocks with the following IDs could not be found in the editor: " + l
    );
  }
  return i.view.dispatch(n), a;
}
function Fi(e, t) {
  return bt(e, t);
}
function Gi(e, t, o) {
  const i = o._tiptapEditor, n = [];
  for (const l of t)
    n.push(
      P(l, i.schema, o.schema.styleSchema)
    );
  const r = typeof e[0] == "string" ? e[0] : e[0].id, a = bt(
    e,
    o,
    (l, d, u, p) => {
      if (l.attrs.id === r) {
        const h = u.doc.nodeSize;
        u.insert(d, n);
        const m = u.doc.nodeSize;
        return p + h - m;
      }
      return p;
    }
  ), s = [];
  for (const l of n)
    s.push(
      v(
        l,
        o.schema.blockSchema,
        o.schema.inlineContentSchema,
        o.schema.styleSchema,
        o.blockCache
      )
    );
  return { insertedBlocks: s, removedBlocks: a };
}
function Wi(e, t, o, i = { updateSelection: !0 }) {
  const n = o._tiptapEditor, r = n.state.tr;
  let { from: a, to: s } = typeof e == "number" ? { from: e, to: e } : { from: e.from, to: e.to }, l = !0, d = !0, u = "";
  if (t.forEach((p) => {
    p.check(), l && p.isText && p.marks.length === 0 ? u += p.text : l = !1, d = d ? p.isBlock : !1;
  }), a === s && d) {
    const { parent: p } = r.doc.resolve(a);
    p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, s += 1);
  }
  return l ? r.insertText(u, a, s) : r.replaceWith(a, s, t), i.updateSelection && Ut(r, r.steps.length - 1, -1), n.view.dispatch(r), !0;
}
function $i() {
  const e = (t) => {
    let o = t.children.length;
    for (let i = 0; i < o; i++) {
      const n = t.children[i];
      if (n.type === "element" && (e(n), n.tagName === "u"))
        if (n.children.length > 0) {
          t.children.splice(i, 1, ...n.children);
          const r = n.children.length - 1;
          o += r, i += r;
        } else
          t.children.splice(i, 1), o--, i--;
    }
  };
  return e;
}
function Ki() {
  const e = (t) => {
    var o;
    if (t.children && "length" in t.children && t.children.length)
      for (let i = t.children.length - 1; i >= 0; i--) {
        const n = t.children[i], r = i + 1 < t.children.length ? t.children[i + 1] : void 0;
        n.type === "element" && n.tagName === "input" && ((o = n.properties) == null ? void 0 : o.type) === "checkbox" && (r == null ? void 0 : r.type) === "element" && r.tagName === "p" ? (r.tagName = "span", r.children.splice(
          0,
          0,
          _e(document.createTextNode(" "))
        )) : e(n);
      }
  };
  return e;
}
function Te(e) {
  return ve().use(qe, { fragment: !0 }).use($i).use(Ki).use(eo).use(Ze).use(to, { handlers: { text: (o) => o.value } }).processSync(e).value;
}
function qi(e, t, o) {
  const n = ae(t, o).exportBlocks(e);
  return Te(n);
}
function Xi(e) {
  return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function Zi(e) {
  return e.nodeType === 3 && !/\S/.test(e.nodeValue || "");
}
function Ji(e) {
  e.querySelectorAll("li > ul, li > ol").forEach((t) => {
    const o = Xi(t), i = t.parentElement, n = Array.from(i.childNodes).slice(
      o + 1
    );
    t.remove(), n.forEach((r) => {
      r.remove();
    }), i.insertAdjacentElement("afterend", t), n.reverse().forEach((r) => {
      if (Zi(r))
        return;
      const a = document.createElement("li");
      a.append(r), t.insertAdjacentElement("afterend", a);
    }), i.childNodes.length === 0 && i.remove();
  });
}
function Yi(e) {
  e.querySelectorAll("li + ul, li + ol").forEach((t) => {
    var r, a;
    const o = t.previousElementSibling, i = document.createElement("div");
    o.insertAdjacentElement("afterend", i), i.append(o);
    const n = document.createElement("div");
    for (n.setAttribute("data-node-type", "blockGroup"), i.append(n); ((r = i.nextElementSibling) == null ? void 0 : r.nodeName) === "UL" || ((a = i.nextElementSibling) == null ? void 0 : a.nodeName) === "OL"; )
      n.append(i.nextElementSibling);
  });
}
let Fe = null;
function Qi() {
  return Fe || (Fe = document.implementation.createHTMLDocument("title"));
}
function kt(e) {
  if (typeof e == "string") {
    const t = Qi().createElement("div");
    t.innerHTML = e, e = t;
  }
  return Ji(e), Yi(e), e;
}
async function _t(e, t, o, i, n) {
  const r = kt(e), s = Tt.fromSchema(n).parse(r, {
    topNode: n.nodes.blockGroup.create()
  }), l = [];
  for (let d = 0; d < s.childCount; d++)
    l.push(
      v(s.child(d), t, o, i)
    );
  return l;
}
function en(e, t) {
  const o = t.value ? t.value + `
` : "", i = {};
  t.lang && (i["data-language"] = t.lang);
  let n = {
    type: "element",
    tagName: "code",
    properties: i,
    children: [{ type: "text", value: o }]
  };
  return t.meta && (n.data = { meta: t.meta }), e.patch(t, n), n = e.applyData(t, n), n = {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [n]
  }, e.patch(t, n), n;
}
function tn(e, t, o, i, n) {
  const r = ve().use(oo).use(Ze).use(io, {
    handlers: {
      ...no,
      code: en
    }
  }).use(Xe).processSync(e);
  return _t(
    r.value,
    t,
    o,
    i,
    n
  );
}
class X {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    c(this, "callbacks", {});
  }
  on(t, o) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(o), () => this.off(t, o);
  }
  emit(t, ...o) {
    const i = this.callbacks[t];
    i && i.forEach((n) => n.apply(this, o));
  }
  off(t, o) {
    const i = this.callbacks[t];
    i && (o ? this.callbacks[t] = i.filter((n) => n !== o) : delete this.callbacks[t]);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
class on {
  constructor(t, o, i, n) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "mouseDownHandler", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    // For dragging the whole editor.
    c(this, "dragstartHandler", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    c(this, "scrollHandler", () => {
      var t;
      if ((t = this.state) != null && t.show) {
        const o = this.pmView.root.querySelector(
          `[data-node-type="blockContainer"][data-id="${this.state.block.id}"]`
        );
        this.state.referencePos = o.getBoundingClientRect(), this.emitUpdate();
      }
    });
    c(this, "closeMenu", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    this.editor = t, this.pluginKey = o, this.pmView = i, this.emitUpdate = () => {
      if (!this.state)
        throw new Error("Attempting to update uninitialized file panel");
      n(this.state);
    }, i.dom.addEventListener("mousedown", this.mouseDownHandler), i.dom.addEventListener("dragstart", this.dragstartHandler), i.root.addEventListener("scroll", this.scrollHandler, !0);
  }
  update(t, o) {
    var n, r;
    const i = this.pluginKey.getState(t.state);
    if (!((n = this.state) != null && n.show) && i.block && this.editor.isEditable) {
      const a = this.pmView.root.querySelector(
        `[data-node-type="blockContainer"][data-id="${i.block.id}"]`
      );
      this.state = {
        show: !0,
        referencePos: a.getBoundingClientRect(),
        block: i.block
      }, this.emitUpdate();
      return;
    }
    (!t.state.selection.eq(o.selection) || !t.state.doc.eq(o.doc) || !this.editor.isEditable) && (r = this.state) != null && r.show && (this.state.show = !1, this.emitUpdate());
  }
  destroy() {
    this.pmView.dom.removeEventListener("mousedown", this.mouseDownHandler), this.pmView.dom.removeEventListener("dragstart", this.dragstartHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0);
  }
}
const fe = new S("FilePanelPlugin");
class nn extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    c(this, "closeMenu", () => this.view.closeMenu());
    this.plugin = new y({
      key: fe,
      view: (i) => (this.view = new on(
        o,
        fe,
        i,
        (n) => {
          this.emit("update", n);
        }
      ), this.view),
      props: {
        handleKeyDown: (i, n) => n.key === "Escape" && this.shown ? (this.view.closeMenu(), !0) : !1
      },
      state: {
        init: () => ({
          block: void 0
        }),
        apply: (i) => {
          var r;
          return {
            block: (r = i.getMeta(fe)) == null ? void 0 : r.block
          };
        }
      }
    });
  }
  get shown() {
    var o, i;
    return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
  }
  onUpdate(o) {
    return this.on("update", o);
  }
}
class rn {
  constructor(t, o, i) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "preventHide", !1);
    c(this, "preventShow", !1);
    c(this, "shouldShow", ({ state: t, from: o, to: i, view: n }) => {
      const { doc: r, selection: a } = t, { empty: s } = a, l = !r.textBetween(o, i).length && Dt(t.selection);
      return !(!n.hasFocus() || s || l);
    });
    c(this, "viewMousedownHandler", () => {
      this.preventShow = !0;
    });
    c(this, "viewMouseupHandler", () => {
      this.preventShow = !1, setTimeout(() => this.update(this.pmView));
    });
    // For dragging the whole editor.
    c(this, "dragHandler", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    c(this, "scrollHandler", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.referencePos = this.getSelectionBoundingBox(), this.emitUpdate());
    });
    c(this, "closeMenu", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    this.editor = t, this.pmView = o, this.emitUpdate = () => {
      if (!this.state)
        throw new Error(
          "Attempting to update uninitialized formatting toolbar"
        );
      i(this.state);
    }, o.dom.addEventListener("mousedown", this.viewMousedownHandler), o.dom.addEventListener("mouseup", this.viewMouseupHandler), o.dom.addEventListener("dragstart", this.dragHandler), o.dom.addEventListener("dragover", this.dragHandler), o.root.addEventListener("scroll", this.scrollHandler, !0);
  }
  update(t, o) {
    var h, m;
    const { state: i, composing: n } = t, { doc: r, selection: a } = i, s = o && o.doc.eq(r) && o.selection.eq(a);
    if (n || s)
      return;
    const { ranges: l } = a, d = Math.min(...l.map((f) => f.$from.pos)), u = Math.max(...l.map((f) => f.$to.pos)), p = (h = this.shouldShow) == null ? void 0 : h.call(this, {
      view: t,
      state: i,
      from: d,
      to: u
    });
    if (!this.preventShow && (p || this.preventHide)) {
      this.state = {
        show: !0,
        referencePos: this.getSelectionBoundingBox()
      }, this.emitUpdate();
      return;
    }
    if ((m = this.state) != null && m.show && !this.preventHide && (!p || this.preventShow || !this.editor.isEditable)) {
      this.state.show = !1, this.emitUpdate();
      return;
    }
  }
  destroy() {
    this.pmView.dom.removeEventListener("mousedown", this.viewMousedownHandler), this.pmView.dom.removeEventListener("mouseup", this.viewMouseupHandler), this.pmView.dom.removeEventListener("dragstart", this.dragHandler), this.pmView.dom.removeEventListener("dragover", this.dragHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0);
  }
  getSelectionBoundingBox() {
    const { state: t } = this.pmView, { selection: o } = t, { ranges: i } = o, n = Math.min(...i.map((a) => a.$from.pos)), r = Math.max(...i.map((a) => a.$to.pos));
    if (Vt(o)) {
      const a = this.pmView.nodeDOM(n);
      if (a)
        return a.getBoundingClientRect();
    }
    return ke(this.pmView, n, r);
  }
}
const an = new S(
  "FormattingToolbarPlugin"
);
class sn extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    c(this, "closeMenu", () => this.view.closeMenu());
    this.plugin = new y({
      key: an,
      view: (i) => (this.view = new rn(o, i, (n) => {
        this.emit("update", n);
      }), this.view),
      props: {
        handleKeyDown: (i, n) => n.key === "Escape" && this.shown ? (this.view.closeMenu(), !0) : !1
      }
    });
  }
  get shown() {
    var o, i;
    return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
  }
  onUpdate(o) {
    return this.on("update", o);
  }
}
class ln {
  constructor(t, o, i) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "menuUpdateTimer");
    c(this, "startMenuUpdateTimer");
    c(this, "stopMenuUpdateTimer");
    c(this, "mouseHoveredLinkMark");
    c(this, "mouseHoveredLinkMarkRange");
    c(this, "keyboardHoveredLinkMark");
    c(this, "keyboardHoveredLinkMarkRange");
    c(this, "linkMark");
    c(this, "linkMarkRange");
    c(this, "mouseOverHandler", (t) => {
      if (this.mouseHoveredLinkMark = void 0, this.mouseHoveredLinkMarkRange = void 0, this.stopMenuUpdateTimer(), t.target instanceof HTMLAnchorElement && t.target.nodeName === "A") {
        const o = t.target, i = this.pmView.posAtDOM(o, 0) + 1, n = this.pmView.state.doc.resolve(i), r = n.marks();
        for (const a of r)
          if (a.type.name === this.pmView.state.schema.mark("link").type.name) {
            this.mouseHoveredLinkMark = a, this.mouseHoveredLinkMarkRange = Pe(n, a.type, a.attrs) || void 0;
            break;
          }
      }
      return this.startMenuUpdateTimer(), !1;
    });
    c(this, "clickHandler", (t) => {
      var i;
      const o = this.pmView.dom.parentElement;
      // Toolbar is open.
      this.linkMark && // An element is clicked.
      t && t.target && // The clicked element is not the editor.
      !(o === t.target || o.contains(t.target)) && (i = this.state) != null && i.show && (this.state.show = !1, this.emitUpdate());
    });
    c(this, "scrollHandler", () => {
      var t;
      this.linkMark !== void 0 && (t = this.state) != null && t.show && (this.state.referencePos = ke(
        this.pmView,
        this.linkMarkRange.from,
        this.linkMarkRange.to
      ), this.emitUpdate());
    });
    c(this, "closeMenu", () => {
      var t;
      (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
    });
    this.editor = t, this.pmView = o, this.emitUpdate = () => {
      if (!this.state)
        throw new Error("Attempting to update uninitialized link toolbar");
      i(this.state);
    }, this.startMenuUpdateTimer = () => {
      this.menuUpdateTimer = setTimeout(() => {
        this.update();
      }, 250);
    }, this.stopMenuUpdateTimer = () => (this.menuUpdateTimer && (clearTimeout(this.menuUpdateTimer), this.menuUpdateTimer = void 0), !1), this.pmView.dom.addEventListener("mouseover", this.mouseOverHandler), this.pmView.root.addEventListener(
      "click",
      this.clickHandler,
      !0
    ), this.pmView.root.addEventListener("scroll", this.scrollHandler, !0);
  }
  editLink(t, o) {
    var n;
    const i = this.pmView.state.tr.insertText(
      o,
      this.linkMarkRange.from,
      this.linkMarkRange.to
    );
    i.addMark(
      this.linkMarkRange.from,
      this.linkMarkRange.from + o.length,
      this.pmView.state.schema.mark("link", { href: t })
    ), this.pmView.dispatch(i), this.pmView.focus(), (n = this.state) != null && n.show && (this.state.show = !1, this.emitUpdate());
  }
  deleteLink() {
    var t;
    this.pmView.dispatch(
      this.pmView.state.tr.removeMark(
        this.linkMarkRange.from,
        this.linkMarkRange.to,
        this.linkMark.type
      ).setMeta("preventAutolink", !0)
    ), this.pmView.focus(), (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate());
  }
  update() {
    var o;
    if (!this.pmView.hasFocus())
      return;
    const t = this.linkMark;
    if (this.linkMark = void 0, this.linkMarkRange = void 0, this.keyboardHoveredLinkMark = void 0, this.keyboardHoveredLinkMarkRange = void 0, this.pmView.state.selection.empty) {
      const i = this.pmView.state.selection.$from.marks();
      for (const n of i)
        if (n.type.name === this.pmView.state.schema.mark("link").type.name) {
          this.keyboardHoveredLinkMark = n, this.keyboardHoveredLinkMarkRange = Pe(
            this.pmView.state.selection.$from,
            n.type,
            n.attrs
          ) || void 0;
          break;
        }
    }
    if (this.mouseHoveredLinkMark && (this.linkMark = this.mouseHoveredLinkMark, this.linkMarkRange = this.mouseHoveredLinkMarkRange), this.keyboardHoveredLinkMark && (this.linkMark = this.keyboardHoveredLinkMark, this.linkMarkRange = this.keyboardHoveredLinkMarkRange), this.linkMark && this.editor.isEditable) {
      this.state = {
        show: !0,
        referencePos: ke(
          this.pmView,
          this.linkMarkRange.from,
          this.linkMarkRange.to
        ),
        url: this.linkMark.attrs.href,
        text: this.pmView.state.doc.textBetween(
          this.linkMarkRange.from,
          this.linkMarkRange.to
        )
      }, this.emitUpdate();
      return;
    }
    if ((o = this.state) != null && o.show && t && (!this.linkMark || !this.editor.isEditable)) {
      this.state.show = !1, this.emitUpdate();
      return;
    }
  }
  destroy() {
    this.pmView.dom.removeEventListener("mouseover", this.mouseOverHandler), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0), this.pmView.root.removeEventListener(
      "click",
      this.clickHandler,
      !0
    );
  }
}
const dn = new S("LinkToolbarPlugin");
class cn extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    /**
     * Edit the currently hovered link.
     */
    c(this, "editLink", (o, i) => {
      this.view.editLink(o, i);
    });
    /**
     * Delete the currently hovered link.
     */
    c(this, "deleteLink", () => {
      this.view.deleteLink();
    });
    /**
     * When hovering on/off links using the mouse cursor, the link toolbar will
     * open & close with a delay.
     *
     * This function starts the delay timer, and should be used for when the mouse
     * cursor enters the link toolbar.
     */
    c(this, "startHideTimer", () => {
      this.view.startMenuUpdateTimer();
    });
    /**
     * When hovering on/off links using the mouse cursor, the link toolbar will
     * open & close with a delay.
     *
     * This function stops the delay timer, and should be used for when the mouse
     * cursor exits the link toolbar.
     */
    c(this, "stopHideTimer", () => {
      this.view.stopMenuUpdateTimer();
    });
    c(this, "closeMenu", () => this.view.closeMenu());
    this.plugin = new y({
      key: dn,
      view: (i) => (this.view = new ln(o, i, (n) => {
        this.emit("update", n);
      }), this.view),
      props: {
        handleKeyDown: (i, n) => n.key === "Escape" && this.shown ? (this.view.closeMenu(), !0) : !1
      }
    });
  }
  onUpdate(o) {
    return this.on("update", o);
  }
  get shown() {
    var o, i;
    return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
  }
}
const un = Rt((e) => e.type.name === "blockContainer");
class pn {
  constructor(t, o) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "rootEl");
    c(this, "pluginState");
    c(this, "handleScroll", () => {
      var t, o;
      if ((t = this.state) != null && t.show) {
        const i = (o = this.rootEl) == null ? void 0 : o.querySelector(
          `[data-decoration-id="${this.pluginState.decorationId}"]`
        );
        this.state.referencePos = i.getBoundingClientRect(), this.emitUpdate(this.pluginState.triggerCharacter);
      }
    });
    c(this, "closeMenu", () => {
      this.editor._tiptapEditor.view.dispatch(
        this.editor._tiptapEditor.view.state.tr.setMeta(
          V,
          null
        )
      );
    });
    c(this, "clearQuery", () => {
      this.pluginState !== void 0 && this.editor._tiptapEditor.chain().focus().deleteRange({
        from: this.pluginState.queryStartPos - (this.pluginState.fromUserInput ? this.pluginState.triggerCharacter.length : 0),
        to: this.editor._tiptapEditor.state.selection.from
      }).run();
    });
    this.editor = t, this.pluginState = void 0, this.emitUpdate = (i) => {
      if (!this.state)
        throw new Error("Attempting to update uninitialized suggestions menu");
      o(i, this.state);
    }, this.rootEl = this.editor._tiptapEditor.view.root, this.rootEl.addEventListener("scroll", this.handleScroll, !0);
  }
  update(t, o) {
    var d;
    const i = V.getState(o), n = V.getState(
      t.state
    ), r = i === void 0 && n !== void 0, a = i !== void 0 && n === void 0;
    if (!r && !(i !== void 0 && n !== void 0) && !a)
      return;
    if (this.pluginState = a ? i : n, a || !this.editor.isEditable) {
      this.state.show = !1, this.emitUpdate(this.pluginState.triggerCharacter);
      return;
    }
    const l = (d = this.rootEl) == null ? void 0 : d.querySelector(
      `[data-decoration-id="${this.pluginState.decorationId}"]`
    );
    this.editor.isEditable && (this.state = {
      show: !0,
      referencePos: l.getBoundingClientRect(),
      query: this.pluginState.query
    }, this.emitUpdate(this.pluginState.triggerCharacter));
  }
  destroy() {
    var t;
    (t = this.rootEl) == null || t.removeEventListener("scroll", this.handleScroll, !0);
  }
}
const V = new S("SuggestionMenuPlugin");
class hn extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    c(this, "triggerCharacters", []);
    c(this, "addTriggerCharacter", (o) => {
      this.triggerCharacters.push(o);
    });
    // TODO: Should this be called automatically when listeners are removed?
    c(this, "removeTriggerCharacter", (o) => {
      this.triggerCharacters = this.triggerCharacters.filter(
        (i) => i !== o
      );
    });
    c(this, "closeMenu", () => this.view.closeMenu());
    c(this, "clearQuery", () => this.view.clearQuery());
    const i = this.triggerCharacters;
    this.plugin = new y({
      key: V,
      view: () => (this.view = new pn(
        o,
        (n, r) => {
          this.emit(`update ${n}`, r);
        }
      ), this.view),
      state: {
        // Initialize the plugin's internal state.
        init() {
        },
        // Apply changes to the plugin state from an editor transaction.
        apply(n, r, a, s) {
          if (n.getMeta("orderedListIndexing") !== void 0)
            return r;
          const l = n.getMeta(V);
          if (typeof l == "object" && l !== null && r === void 0)
            return {
              triggerCharacter: l.triggerCharacter,
              fromUserInput: l.fromUserInput !== !1,
              queryStartPos: s.selection.from,
              query: "",
              decorationId: `id_${Math.floor(Math.random() * 4294967295)}`
            };
          if (r === void 0)
            return r;
          if (
            // Highlighting text should hide the menu.
            s.selection.from !== s.selection.to || // Transactions with plugin metadata should hide the menu.
            l === null || // Certain mouse events should hide the menu.
            // TODO: Change to global mousedown listener.
            n.getMeta("focus") || n.getMeta("blur") || n.getMeta("pointer") || // Moving the caret before the character which triggered the menu should hide it.
            r.triggerCharacter !== void 0 && s.selection.from < r.queryStartPos
          )
            return;
          const d = { ...r };
          return d.query = s.doc.textBetween(
            r.queryStartPos,
            s.selection.from
          ), d;
        }
      },
      props: {
        handleTextInput(n, r, a, s) {
          const l = this.getState(n.state);
          return i.includes(s) && l === void 0 ? (n.dispatch(
            n.state.tr.insertText(s).scrollIntoView().setMeta(V, {
              triggerCharacter: s
            })
          ), !0) : !1;
        },
        // Setup decorator on the currently active suggestion.
        decorations(n) {
          const r = this.getState(n);
          if (r === void 0)
            return null;
          if (!r.fromUserInput) {
            const a = un(n.selection);
            if (a)
              return G.create(n.doc, [
                W.node(
                  a.pos,
                  a.pos + a.node.nodeSize,
                  {
                    nodeName: "span",
                    class: "bn-suggestion-decorator",
                    "data-decoration-id": r.decorationId
                  }
                )
              ]);
          }
          return G.create(n.doc, [
            W.inline(
              r.queryStartPos - r.triggerCharacter.length,
              r.queryStartPos,
              {
                nodeName: "span",
                class: "bn-suggestion-decorator",
                "data-decoration-id": r.decorationId
              }
            )
          ]);
        }
      }
    });
  }
  onUpdate(o, i) {
    return this.triggerCharacters.includes(o) || this.addTriggerCharacter(o), this.on(`update ${o}`, i);
  }
  get shown() {
    var o, i;
    return ((i = (o = this.view) == null ? void 0 : o.state) == null ? void 0 : i.show) || !1;
  }
}
function Gr(e, t) {
  e.suggestionMenus.addTriggerCharacter(t);
}
class F extends he {
  constructor(o, i) {
    super(o, i);
    c(this, "nodes");
    const n = o.node();
    this.nodes = [], o.doc.nodesBetween(o.pos, i.pos, (r, a, s) => {
      if (s !== null && s.eq(n))
        return this.nodes.push(r), !1;
    });
  }
  static create(o, i, n = i) {
    return new F(o.resolve(i), o.resolve(n));
  }
  content() {
    return new D(L.from(this.nodes), 0, 0);
  }
  eq(o) {
    if (!(o instanceof F) || this.nodes.length !== o.nodes.length || this.from !== o.from || this.to !== o.to)
      return !1;
    for (let i = 0; i < this.nodes.length; i++)
      if (!this.nodes[i].eq(o.nodes[i]))
        return !1;
    return !0;
  }
  map(o, i) {
    const n = i.mapResult(this.from), r = i.mapResult(this.to);
    return r.deleted ? he.near(o.resolve(n.pos)) : n.deleted ? he.near(o.resolve(r.pos)) : new F(
      o.resolve(n.pos),
      o.resolve(r.pos)
    );
  }
  toJSON() {
    return { type: "node", anchor: this.anchor, head: this.head };
  }
}
let B;
function pe(e, t) {
  var o;
  for (; e && e.parentElement && e.parentElement !== t.dom && !((o = e.hasAttribute) != null && o.call(e, "data-id")); )
    e = e.parentElement;
  if (e.hasAttribute("data-id"))
    return { node: e, id: e.getAttribute("data-id") };
}
function mn(e, t) {
  const o = pe(e, t);
  if (o && o.node.nodeType === 1) {
    const i = t.docView, n = i.nearestDesc(o.node, !0);
    return !n || n === i ? null : n.posBefore;
  }
  return null;
}
function fn(e, t) {
  let o, i;
  const n = t.resolve(e.from).node().type.spec.group === "blockContent", r = t.resolve(e.to).node().type.spec.group === "blockContent", a = Math.min(e.$anchor.depth, e.$head.depth);
  if (n && r) {
    const s = e.$from.start(a - 1), l = e.$to.end(a - 1);
    o = t.resolve(s - 1).pos, i = t.resolve(l + 1).pos;
  } else
    o = e.from, i = e.to;
  return { from: o, to: i };
}
function Ge(e, t, o = t) {
  t === o && (o += e.state.doc.resolve(t + 1).node().nodeSize);
  const i = e.domAtPos(t).node.cloneNode(!0), n = e.domAtPos(t).node, r = (u, p) => Array.prototype.indexOf.call(u.children, p), a = r(
    n,
    // Expects from position to be just before the first selected block.
    e.domAtPos(t + 1).node.parentElement
  ), s = r(
    n,
    // Expects to position to be just after the last selected block.
    e.domAtPos(o - 1).node.parentElement
  );
  for (let u = n.childElementCount - 1; u >= 0; u--)
    (u > s || u < a) && i.removeChild(i.children[u]);
  yt(e.root), B = i;
  const d = e.dom.className.split(" ").filter(
    (u) => u !== "ProseMirror" && u !== "bn-root" && u !== "bn-editor"
  ).join(" ");
  B.className = B.className + " bn-drag-preview " + d, e.root instanceof ShadowRoot ? e.root.appendChild(B) : e.root.body.appendChild(B);
}
function yt(e) {
  B !== void 0 && (e instanceof ShadowRoot ? e.removeChild(B) : e.body.appendChild(B), B = void 0);
}
function gn(e, t) {
  if (!e.dataTransfer)
    return;
  const o = t.prosemirrorView, i = o.dom.getBoundingClientRect(), n = {
    left: i.left + i.width / 2,
    // take middle of editor
    top: e.clientY
  }, r = o.root.elementsFromPoint(n.left, n.top);
  let a;
  for (const l of r)
    if (o.dom.contains(l)) {
      a = pe(l, o);
      break;
    }
  if (!a)
    return;
  const s = mn(a.node, o);
  if (s != null) {
    const l = o.state.selection, d = o.state.doc, { from: u, to: p } = fn(l, d), h = u <= s && s < p, m = l.$anchor.node() !== l.$head.node() || l instanceof F;
    h && m ? (o.dispatch(
      o.state.tr.setSelection(F.create(d, u, p))
    ), Ge(o, u, p)) : (o.dispatch(
      o.state.tr.setSelection(ne.create(o.state.doc, s))
    ), Ge(o, s));
    const f = o.state.selection.content(), g = t._tiptapEditor.schema, A = rt(g, t).serializeProseMirrorFragment(
      f.content
    ), N = ae(g, t).exportProseMirrorFragment(
      f.content
    ), Z = Te(N);
    e.dataTransfer.clearData(), e.dataTransfer.setData("blocknote/html", A), e.dataTransfer.setData("text/html", N), e.dataTransfer.setData("text/plain", Z), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setDragImage(B, 0, 0), o.dragging = { slice: f, move: !0 };
  }
}
class bn {
  constructor(t, o, i) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "needUpdate", !1);
    c(this, "mousePos");
    // When true, the drag handle with be anchored at the same level as root elements
    // When false, the drag handle with be just to the left of the element
    // TODO: Is there any case where we want this to be false?
    c(this, "horizontalPosAnchoredAtRoot");
    c(this, "horizontalPosAnchor");
    c(this, "hoveredBlock");
    // Used to check if currently dragged content comes from this editor instance.
    c(this, "isDragging", !1);
    c(this, "menuFrozen", !1);
    c(this, "updateState", () => {
      var a, s, l, d;
      if (this.menuFrozen || !this.mousePos)
        return;
      const t = this.pmView.dom.firstChild.getBoundingClientRect();
      this.horizontalPosAnchor = t.x;
      const o = {
        left: t.left + t.width / 2,
        // take middle of editor
        top: this.mousePos.y
      }, i = this.pmView.root.elementsFromPoint(
        o.left,
        o.top
      );
      let n;
      for (const u of i)
        if (this.pmView.dom.contains(u)) {
          n = pe(u, this.pmView);
          break;
        }
      if (!n || !this.editor.isEditable) {
        (a = this.state) != null && a.show && (this.state.show = !1, this.needUpdate = !0);
        return;
      }
      if ((s = this.state) != null && s.show && ((l = this.hoveredBlock) != null && l.hasAttribute("data-id")) && ((d = this.hoveredBlock) == null ? void 0 : d.getAttribute("data-id")) === n.id)
        return;
      this.hoveredBlock = n.node;
      const r = n.node.firstChild;
      if (r && this.editor.isEditable) {
        const u = r.getBoundingClientRect();
        this.state = {
          show: !0,
          referencePos: new DOMRect(
            this.horizontalPosAnchoredAtRoot ? this.horizontalPosAnchor : u.x,
            u.y,
            u.width,
            u.height
          ),
          block: this.editor.getBlock(
            this.hoveredBlock.getAttribute("data-id")
          )
        }, this.needUpdate = !0;
      }
    });
    /**
     * Sets isDragging when dragging text.
     */
    c(this, "onDragStart", () => {
      this.isDragging = !0;
    });
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    c(this, "onDrop", (t) => {
      if (this.editor._tiptapEditor.commands.blur(), t.synthetic || !this.isDragging)
        return;
      const o = this.pmView.posAtCoords({
        left: t.clientX,
        top: t.clientY
      });
      if (this.isDragging = !1, !o || o.inside === -1) {
        const i = new Event("drop", t), n = this.pmView.dom.firstChild.getBoundingClientRect();
        i.clientX = n.left + n.width / 2, i.clientY = t.clientY, i.dataTransfer = t.dataTransfer, i.preventDefault = () => t.preventDefault(), i.synthetic = !0, this.pmView.dom.dispatchEvent(i);
      }
    });
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    c(this, "onDragOver", (t) => {
      if (t.synthetic || !this.isDragging)
        return;
      const o = this.pmView.posAtCoords({
        left: t.clientX,
        top: t.clientY
      });
      if (!o || o.inside === -1) {
        const i = new Event("dragover", t), n = this.pmView.dom.firstChild.getBoundingClientRect();
        i.clientX = n.left + n.width / 2, i.clientY = t.clientY, i.dataTransfer = t.dataTransfer, i.preventDefault = () => t.preventDefault(), i.synthetic = !0, this.pmView.dom.dispatchEvent(i);
      }
    });
    c(this, "onKeyDown", (t) => {
      var o;
      (o = this.state) != null && o.show && this.editor.isFocused() && (this.state.show = !1, this.emitUpdate(this.state), this.menuFrozen = !1);
    });
    c(this, "onMouseDown", () => {
      this.state && this.state.show && this.menuFrozen && (this.menuFrozen = !1, this.state.show = !1, this.emitUpdate(this.state));
    });
    c(this, "onMouseMove", (t) => {
      var r;
      this.mousePos = { x: t.clientX, y: t.clientY };
      const o = this.pmView.dom.getBoundingClientRect(), i = this.mousePos.x > o.left && this.mousePos.x < o.right && this.mousePos.y > o.top && this.mousePos.y < o.bottom, n = this.pmView.dom.parentElement;
      if (
        // Cursor is within the editor area
        i && // An element is hovered
        t && t.target && // Element is outside the editor
        !(n === t.target || n.contains(t.target))
      ) {
        (r = this.state) != null && r.show && (this.state.show = !1, this.emitUpdate(this.state));
        return;
      }
      this.updateState(), this.needUpdate && (this.emitUpdate(this.state), this.needUpdate = !1);
    });
    c(this, "onScroll", () => {
      var t;
      if ((t = this.state) != null && t.show) {
        const i = this.hoveredBlock.firstChild.getBoundingClientRect();
        this.state.referencePos = new DOMRect(
          this.horizontalPosAnchoredAtRoot ? this.horizontalPosAnchor : i.x,
          i.y,
          i.width,
          i.height
        ), this.emitUpdate(this.state);
      }
    });
    this.editor = t, this.pmView = o, this.emitUpdate = () => {
      if (!this.state)
        throw new Error("Attempting to update uninitialized side menu");
      i(this.state);
    }, this.horizontalPosAnchoredAtRoot = !0, this.horizontalPosAnchor = this.pmView.dom.firstChild.getBoundingClientRect().x, this.pmView.root.addEventListener(
      "drop",
      this.onDrop,
      !0
    ), this.pmView.root.addEventListener(
      "dragover",
      this.onDragOver
    ), this.pmView.dom.addEventListener("dragstart", this.onDragStart), this.pmView.root.addEventListener(
      "mousemove",
      this.onMouseMove,
      !0
    ), this.pmView.dom.addEventListener("mousedown", this.onMouseDown), this.pmView.root.addEventListener(
      "keydown",
      this.onKeyDown,
      !0
    ), this.pmView.root.addEventListener("scroll", this.onScroll, !0);
  }
  // Needed in cases where the editor state updates without the mouse cursor
  // moving, as some state updates can require a side menu update. For example,
  // adding a button to the side menu which removes the block can cause the
  // block below to jump up into the place of the removed block when clicked,
  // allowing the user to click the button again without moving the cursor. This
  // would otherwise not update the side menu, and so clicking the button again
  // would attempt to remove the same block again, causing an error.
  update() {
    var o;
    const t = (o = this.state) == null ? void 0 : o.block.id;
    this.updateState(), this.needUpdate && this.state && t !== this.state.block.id && (this.emitUpdate(this.state), this.needUpdate = !1);
  }
  destroy() {
    var t;
    (t = this.state) != null && t.show && (this.state.show = !1, this.emitUpdate(this.state)), this.pmView.root.removeEventListener(
      "mousemove",
      this.onMouseMove,
      !0
    ), this.pmView.root.removeEventListener(
      "dragover",
      this.onDragOver
    ), this.pmView.dom.removeEventListener("dragstart", this.onDragStart), this.pmView.root.removeEventListener(
      "drop",
      this.onDrop,
      !0
    ), this.pmView.root.removeEventListener("scroll", this.onScroll, !0), this.pmView.dom.removeEventListener("mousedown", this.onMouseDown), this.pmView.root.removeEventListener(
      "keydown",
      this.onKeyDown,
      !0
    );
  }
  addBlock() {
    var l;
    (l = this.state) != null && l.show && (this.state.show = !1, this.emitUpdate(this.state));
    const o = this.hoveredBlock.firstChild.getBoundingClientRect(), i = this.pmView.posAtCoords({
      left: o.left + o.width / 2,
      top: o.top + o.height / 2
    });
    if (!i)
      return;
    const n = b(
      this.editor._tiptapEditor.state.doc,
      i.pos
    );
    if (n === void 0)
      return;
    const { contentNode: r, startPos: a, endPos: s } = n;
    if (r.type.spec.content !== "inline*" || r.textContent.length !== 0) {
      const d = s + 1, u = d + 2;
      this.editor._tiptapEditor.chain().BNCreateBlock(d).setTextSelection(u).run();
    } else
      this.editor._tiptapEditor.commands.setTextSelection(a + 1);
    this.pmView.focus(), this.pmView.dispatch(
      this.pmView.state.tr.scrollIntoView().setMeta(V, {
        triggerCharacter: "/",
        fromUserInput: !1
      })
    );
  }
}
const kn = new S("SideMenuPlugin");
class _n extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    /**
     * If the block is empty, opens the slash menu. If the block has content,
     * creates a new block below and opens the slash menu in it.
     */
    c(this, "addBlock", () => this.view.addBlock());
    /**
     * Handles drag & drop events for blocks.
     */
    c(this, "blockDragStart", (o) => {
      this.view.isDragging = !0, gn(o, this.editor);
    });
    /**
     * Handles drag & drop events for blocks.
     */
    c(this, "blockDragEnd", () => yt(this.editor.prosemirrorView.root));
    /**
     * Freezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */
    c(this, "freezeMenu", () => this.view.menuFrozen = !0);
    /**
     * Unfreezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */
    c(this, "unfreezeMenu", () => {
      this.view.menuFrozen = !1, this.view.state.show = !1, this.view.emitUpdate(this.view.state);
    });
    this.editor = o, this.plugin = new y({
      key: kn,
      view: (i) => (this.view = new bn(o, i, (n) => {
        this.emit("update", n);
      }), this.view)
    });
  }
  onUpdate(o) {
    return this.on("update", o);
  }
}
let w;
function We(e) {
  w || (w = document.createElement("div"), w.innerHTML = "_", w.style.opacity = "0", w.style.height = "1px", w.style.width = "1px", e instanceof Document ? e.body.appendChild(w) : e.appendChild(w));
}
function yn(e) {
  w && (e instanceof Document ? e.body.removeChild(w) : e.removeChild(w), w = void 0);
}
function ie(e) {
  return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function wn(e) {
  for (; e && e.nodeName !== "TD" && e.nodeName !== "TH"; )
    e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
  return e;
}
function vn(e, t) {
  e.forEach((o) => {
    const i = t.querySelectorAll(o);
    for (let n = 0; n < i.length; n++)
      i[n].style.visibility = "hidden";
  });
}
class xn {
  constructor(t, o, i) {
    c(this, "state");
    c(this, "emitUpdate");
    c(this, "tableId");
    c(this, "tablePos");
    c(this, "menuFrozen", !1);
    c(this, "prevWasEditable", null);
    c(this, "mouseMoveHandler", (t) => {
      var d;
      if (this.menuFrozen)
        return;
      const o = wn(t.target);
      if (!o || !this.editor.isEditable) {
        (d = this.state) != null && d.show && (this.state.show = !1, this.emitUpdate());
        return;
      }
      const i = ie(o), n = ie(o.parentElement), r = o.getBoundingClientRect(), a = o.parentElement.parentElement.getBoundingClientRect(), s = pe(o, this.pmView);
      if (!s)
        return;
      let l;
      if (this.editor._tiptapEditor.state.doc.descendants((u, p) => {
        if (typeof l < "u")
          return !1;
        if (u.type.name !== "blockContainer" || u.attrs.id !== s.id)
          return !0;
        const h = v(
          u,
          this.editor.schema.blockSchema,
          this.editor.schema.inlineContentSchema,
          this.editor.schema.styleSchema,
          this.editor.blockCache
        );
        return Ri("table", h, this.editor) && (this.tablePos = p + 1, l = h), !1;
      }), !!l && (this.tableId = s.id, !(this.state !== void 0 && this.state.show && this.tableId === s.id && this.state.rowIndex === n && this.state.colIndex === i)))
        return this.state = {
          show: !0,
          referencePosCell: r,
          referencePosTable: a,
          block: l,
          colIndex: i,
          rowIndex: n,
          draggingState: void 0
        }, this.emitUpdate(), !1;
    });
    c(this, "dragOverHandler", (t) => {
      var h;
      if (((h = this.state) == null ? void 0 : h.draggingState) === void 0)
        return;
      t.preventDefault(), t.dataTransfer.dropEffect = "move", vn(
        [
          "column-resize-handle",
          "prosemirror-dropcursor-block",
          "prosemirror-dropcursor-inline"
        ],
        this.pmView.root
      );
      const o = {
        left: Math.min(
          Math.max(t.clientX, this.state.referencePosTable.left + 1),
          this.state.referencePosTable.right - 1
        ),
        top: Math.min(
          Math.max(t.clientY, this.state.referencePosTable.top + 1),
          this.state.referencePosTable.bottom - 1
        )
      }, i = this.pmView.root.elementsFromPoint(o.left, o.top).filter(
        (m) => m.tagName === "TD" || m.tagName === "TH"
      );
      if (i.length === 0)
        throw new Error(
          "Could not find table cell element that the mouse cursor is hovering over."
        );
      const n = i[0];
      let r = !1;
      const a = ie(n.parentElement), s = ie(n), l = this.state.draggingState.draggedCellOrientation === "row" ? this.state.rowIndex : this.state.colIndex, u = (this.state.draggingState.draggedCellOrientation === "row" ? a : s) !== l;
      (this.state.rowIndex !== a || this.state.colIndex !== s) && (this.state.rowIndex = a, this.state.colIndex = s, this.state.referencePosCell = n.getBoundingClientRect(), r = !0);
      const p = this.state.draggingState.draggedCellOrientation === "row" ? o.top : o.left;
      this.state.draggingState.mousePos !== p && (this.state.draggingState.mousePos = p, r = !0), r && this.emitUpdate(), u && this.pmView.dispatch(
        this.pmView.state.tr.setMeta(Q, !0)
      );
    });
    c(this, "dropHandler", (t) => {
      if (this.state === void 0 || this.state.draggingState === void 0)
        return;
      t.preventDefault();
      const o = this.state.block.content.rows;
      if (this.state.draggingState.draggedCellOrientation === "row") {
        const i = o[this.state.draggingState.originalIndex];
        o.splice(this.state.draggingState.originalIndex, 1), o.splice(this.state.rowIndex, 0, i);
      } else {
        const i = o.map(
          (n) => n.cells[this.state.draggingState.originalIndex]
        );
        o.forEach((n, r) => {
          n.cells.splice(this.state.draggingState.originalIndex, 1), n.cells.splice(this.state.colIndex, 0, i[r]);
        });
      }
      this.editor.updateBlock(this.state.block, {
        type: "table",
        content: {
          type: "tableContent",
          rows: o
        }
      });
    });
    c(this, "scrollHandler", () => {
      var t;
      if ((t = this.state) != null && t.show) {
        const o = this.pmView.root.querySelector(
          `[data-node-type="blockContainer"][data-id="${this.tableId}"] table`
        ), i = o.querySelector(
          `tr:nth-child(${this.state.rowIndex + 1}) > td:nth-child(${this.state.colIndex + 1})`
        );
        this.state.referencePosTable = o.getBoundingClientRect(), this.state.referencePosCell = i.getBoundingClientRect(), this.emitUpdate();
      }
    });
    this.editor = t, this.pmView = o, this.emitUpdate = () => {
      if (!this.state)
        throw new Error("Attempting to update uninitialized image toolbar");
      i(this.state);
    }, o.dom.addEventListener("mousemove", this.mouseMoveHandler), o.root.addEventListener(
      "dragover",
      this.dragOverHandler
    ), o.root.addEventListener("drop", this.dropHandler), o.root.addEventListener("scroll", this.scrollHandler, !0);
  }
  destroy() {
    this.pmView.dom.removeEventListener("mousemove", this.mouseMoveHandler), this.pmView.root.removeEventListener(
      "dragover",
      this.dragOverHandler
    ), this.pmView.root.removeEventListener(
      "drop",
      this.dropHandler
    ), this.pmView.root.removeEventListener("scroll", this.scrollHandler, !0);
  }
}
const Q = new S("TableHandlesPlugin");
class En extends X {
  constructor(o) {
    super();
    c(this, "view");
    c(this, "plugin");
    /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the column drag handle.
     */
    c(this, "colDragStart", (o) => {
      if (this.view.state === void 0)
        throw new Error(
          "Attempted to drag table column, but no table block was hovered prior."
        );
      this.view.state.draggingState = {
        draggedCellOrientation: "col",
        originalIndex: this.view.state.colIndex,
        mousePos: o.clientX
      }, this.view.emitUpdate(), this.editor._tiptapEditor.view.dispatch(
        this.editor._tiptapEditor.state.tr.setMeta(Q, {
          draggedCellOrientation: this.view.state.draggingState.draggedCellOrientation,
          originalIndex: this.view.state.colIndex,
          newIndex: this.view.state.colIndex,
          tablePos: this.view.tablePos
        })
      ), We(this.editor._tiptapEditor.view.root), o.dataTransfer.setDragImage(w, 0, 0), o.dataTransfer.effectAllowed = "move";
    });
    /**
     * Callback that should be set on the `dragStart` event for whichever element
     * is used as the row drag handle.
     */
    c(this, "rowDragStart", (o) => {
      if (this.view.state === void 0)
        throw new Error(
          "Attempted to drag table row, but no table block was hovered prior."
        );
      this.view.state.draggingState = {
        draggedCellOrientation: "row",
        originalIndex: this.view.state.rowIndex,
        mousePos: o.clientY
      }, this.view.emitUpdate(), this.editor._tiptapEditor.view.dispatch(
        this.editor._tiptapEditor.state.tr.setMeta(Q, {
          draggedCellOrientation: this.view.state.draggingState.draggedCellOrientation,
          originalIndex: this.view.state.rowIndex,
          newIndex: this.view.state.rowIndex,
          tablePos: this.view.tablePos
        })
      ), We(this.editor._tiptapEditor.view.root), o.dataTransfer.setDragImage(w, 0, 0), o.dataTransfer.effectAllowed = "copyMove";
    });
    /**
     * Callback that should be set on the `dragEnd` event for both the element
     * used as the row drag handle, and the one used as the column drag handle.
     */
    c(this, "dragEnd", () => {
      if (this.view.state === void 0)
        throw new Error(
          "Attempted to drag table row, but no table block was hovered prior."
        );
      this.view.state.draggingState = void 0, this.view.emitUpdate(), this.editor._tiptapEditor.view.dispatch(
        this.editor._tiptapEditor.state.tr.setMeta(Q, null)
      ), yn(this.editor._tiptapEditor.view.root);
    });
    /**
     * Freezes the drag handles. When frozen, they will stay attached to the same
     * cell regardless of which cell is hovered by the mouse cursor.
     */
    c(this, "freezeHandles", () => {
      this.view.menuFrozen = !0;
    });
    /**
     * Unfreezes the drag handles. When frozen, they will stay attached to the
     * same cell regardless of which cell is hovered by the mouse cursor.
     */
    c(this, "unfreezeHandles", () => {
      this.view.menuFrozen = !1;
    });
    this.editor = o, this.plugin = new y({
      key: Q,
      view: (i) => (this.view = new xn(o, i, (n) => {
        this.emit("update", n);
      }), this.view),
      // We use decorations to render the drop cursor when dragging a table row
      // or column. The decorations are updated in the `dragOverHandler` method.
      props: {
        decorations: (i) => {
          if (this.view === void 0 || this.view.state === void 0 || this.view.state.draggingState === void 0 || this.view.tablePos === void 0)
            return;
          const n = this.view.state.draggingState.draggedCellOrientation === "row" ? this.view.state.rowIndex : this.view.state.colIndex, r = [];
          if (n === this.view.state.draggingState.originalIndex)
            return G.create(i.doc, r);
          const a = i.doc.resolve(this.view.tablePos + 1), s = a.node();
          if (this.view.state.draggingState.draggedCellOrientation === "row") {
            const l = i.doc.resolve(
              a.posAtIndex(n) + 1
            ), d = l.node();
            for (let u = 0; u < d.childCount; u++) {
              const p = i.doc.resolve(
                l.posAtIndex(u) + 1
              ), h = p.node(), m = p.pos + (n > this.view.state.draggingState.originalIndex ? h.nodeSize - 2 : 0);
              r.push(
                // The widget is a small bar which spans the width of the cell.
                W.widget(m, () => {
                  const f = document.createElement("div");
                  return f.className = "bn-table-drop-cursor", f.style.left = "0", f.style.right = "0", n > this.view.state.draggingState.originalIndex ? f.style.bottom = "-2px" : f.style.top = "-3px", f.style.height = "4px", f;
                })
              );
            }
          } else
            for (let l = 0; l < s.childCount; l++) {
              const d = i.doc.resolve(
                a.posAtIndex(l) + 1
              ), u = i.doc.resolve(
                d.posAtIndex(n) + 1
              ), p = u.node(), h = u.pos + (n > this.view.state.draggingState.originalIndex ? p.nodeSize - 2 : 0);
              r.push(
                // The widget is a small bar which spans the height of the cell.
                W.widget(h, () => {
                  const m = document.createElement("div");
                  return m.className = "bn-table-drop-cursor", m.style.top = "0", m.style.bottom = "0", n > this.view.state.draggingState.originalIndex ? m.style.right = "-2px" : m.style.left = "-3px", m.style.width = "4px", m;
                })
              );
            }
          return G.create(i.doc, r);
        }
      }
    });
  }
  onUpdate(o) {
    return this.on("update", o);
  }
}
function $e(e, t) {
  const o = e.state.selection.content().content, n = rt(
    e.state.schema,
    t
  ).serializeProseMirrorFragment(o), a = ae(
    e.state.schema,
    t
  ).exportProseMirrorFragment(o), s = Te(a);
  return { internalHTML: n, externalHTML: a, plainText: s };
}
const Cn = (e) => M.create({
  name: "copyToClipboard",
  addProseMirrorPlugins() {
    return [
      new y({
        props: {
          handleDOMEvents: {
            copy(t, o) {
              o.preventDefault(), o.clipboardData.clearData(), "node" in t.state.selection && t.state.selection.node.type.spec.group === "blockContent" && t.dispatch(
                t.state.tr.setSelection(
                  new ne(
                    t.state.doc.resolve(t.state.selection.from - 1)
                  )
                )
              );
              const { internalHTML: i, externalHTML: n, plainText: r } = $e(t, e);
              return o.clipboardData.setData("blocknote/html", i), o.clipboardData.setData("text/html", n), o.clipboardData.setData("text/plain", r), !0;
            },
            // This is for the use-case in which only a block without content
            // is selected, e.g. an image block, and dragged (not using the
            // drag handle).
            dragstart(t, o) {
              if (!("node" in t.state.selection) || t.state.selection.node.type.spec.group !== "blockContent")
                return;
              t.dispatch(
                t.state.tr.setSelection(
                  new ne(
                    t.state.doc.resolve(t.state.selection.from - 1)
                  )
                )
              ), o.preventDefault(), o.dataTransfer.clearData();
              const { internalHTML: i, externalHTML: n, plainText: r } = $e(t, e);
              return o.dataTransfer.setData("blocknote/html", i), o.dataTransfer.setData("text/html", n), o.dataTransfer.setData("text/plain", r), !0;
            }
          }
        }
      })
    ];
  }
});
function Sn(e) {
  let t = e.getTextCursorPosition().block, o = e.schema.blockSchema[t.type].content;
  for (; o === "none"; )
    t = e.getTextCursorPosition().nextBlock, o = e.schema.blockSchema[t.type].content, e.setTextCursorPosition(t, "end");
}
function x(e, t) {
  const o = e.getTextCursorPosition().block;
  if (o.content === void 0)
    throw new Error("Slash Menu open in a block that doesn't contain content.");
  Array.isArray(o.content) && (o.content.length === 1 && te(o.content[0]) && o.content[0].type === "text" && o.content[0].text === "/" || o.content.length === 0) ? e.updateBlock(o, t) : (e.insertBlocks([t], o, "after"), e.setTextCursorPosition(
    e.getTextCursorPosition().nextBlock,
    "end"
  ));
  const i = e.getTextCursorPosition().block;
  return Sn(e), i;
}
function Wr(e) {
  const t = [];
  return E("heading", e) && t.push(
    {
      onItemClick: () => {
        x(e, {
          type: "heading",
          props: { level: 1 }
        });
      },
      badge: H("Mod-Alt-1"),
      key: "heading",
      ...e.dictionary.slash_menu.heading
    },
    {
      onItemClick: () => {
        x(e, {
          type: "heading",
          props: { level: 2 }
        });
      },
      badge: H("Mod-Alt-2"),
      key: "heading_2",
      ...e.dictionary.slash_menu.heading_2
    },
    {
      onItemClick: () => {
        x(e, {
          type: "heading",
          props: { level: 3 }
        });
      },
      badge: H("Mod-Alt-3"),
      key: "heading_3",
      ...e.dictionary.slash_menu.heading_3
    }
  ), E("numberedListItem", e) && t.push({
    onItemClick: () => {
      x(e, {
        type: "numberedListItem"
      });
    },
    badge: H("Mod-Shift-7"),
    key: "numbered_list",
    ...e.dictionary.slash_menu.numbered_list
  }), E("bulletListItem", e) && t.push({
    onItemClick: () => {
      x(e, {
        type: "bulletListItem"
      });
    },
    badge: H("Mod-Shift-8"),
    key: "bullet_list",
    ...e.dictionary.slash_menu.bullet_list
  }), E("checkListItem", e) && t.push({
    onItemClick: () => {
      x(e, {
        type: "checkListItem"
      });
    },
    badge: H("Mod-Shift-9"),
    key: "check_list",
    ...e.dictionary.slash_menu.check_list
  }), E("paragraph", e) && t.push({
    onItemClick: () => {
      x(e, {
        type: "paragraph"
      });
    },
    badge: H("Mod-Alt-0"),
    key: "paragraph",
    ...e.dictionary.slash_menu.paragraph
  }), E("table", e) && t.push({
    onItemClick: () => {
      x(e, {
        type: "table",
        content: {
          type: "tableContent",
          rows: [
            {
              cells: ["", "", ""]
            },
            {
              cells: ["", "", ""]
            }
          ]
        }
      });
    },
    badge: void 0,
    key: "table",
    ...e.dictionary.slash_menu.table
  }), E("image", e) && t.push({
    onItemClick: () => {
      const o = x(e, {
        type: "image"
      });
      e.prosemirrorView.dispatch(
        e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
          block: o
        })
      );
    },
    key: "image",
    ...e.dictionary.slash_menu.image
  }), E("video", e) && t.push({
    onItemClick: () => {
      const o = x(e, {
        type: "video"
      });
      e.prosemirrorView.dispatch(
        e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
          block: o
        })
      );
    },
    key: "video",
    ...e.dictionary.slash_menu.video
  }), E("audio", e) && t.push({
    onItemClick: () => {
      const o = x(e, {
        type: "audio"
      });
      e.prosemirrorView.dispatch(
        e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
          block: o
        })
      );
    },
    key: "audio",
    ...e.dictionary.slash_menu.audio
  }), E("file", e) && t.push({
    onItemClick: () => {
      const o = x(e, {
        type: "file"
      });
      e.prosemirrorView.dispatch(
        e._tiptapEditor.state.tr.setMeta(e.filePanel.plugin, {
          block: o
        })
      );
    },
    key: "image",
    ...e.dictionary.slash_menu.file
  }), t;
}
function $r(e, t) {
  return e.filter(
    ({ title: o, aliases: i }) => o.toLowerCase().includes(t.toLowerCase()) || i && i.filter(
      (n) => n.toLowerCase().includes(t.toLowerCase())
    ).length !== 0
  );
}
const Be = [
  "blocknote/html",
  "Files",
  "text/html",
  "text/plain"
];
function Mn(e, t) {
  const o = e.split("/"), i = t.split("/");
  if (o.length !== 2)
    throw new Error(`The string ${e} is not a valid MIME type.`);
  if (i.length !== 2)
    throw new Error(`The string ${t} is not a valid MIME type.`);
  return o[1] === "*" || i[1] === "*" ? o[0] === i[0] : (o[0] === "*" || i[0] === "*" || o[0] === i[0]) && o[1] === i[1];
}
async function wt(e, t) {
  if (!t.uploadFile)
    return;
  const o = "dataTransfer" in e ? e.dataTransfer : e.clipboardData;
  if (o === null)
    return;
  let i = null;
  for (const a of Be)
    if (o.types.includes(a)) {
      i = a;
      break;
    }
  if (i !== "Files")
    return;
  const n = o.items;
  if (!n)
    return;
  e.preventDefault();
  const r = Object.values(t.schema.blockSchema).filter(
    (a) => a.isFileBlock
  );
  for (let a = 0; a < n.length; a++) {
    let s = "file";
    for (const d of r)
      for (const u of d.fileBlockAcceptMimeTypes || [])
        if (Mn(n[a].type, u)) {
          s = d.type;
          break;
        }
    const l = n[a].getAsFile();
    if (l) {
      const d = await t.uploadFile(l);
      if (typeof d == "string") {
        const u = {
          type: s,
          props: {
            name: l.name,
            url: d
          }
        };
        x(t, u);
      }
    }
  }
}
const Tn = (e) => M.create({
  name: "pasteFromClipboard",
  addProseMirrorPlugins() {
    return [
      new y({
        props: {
          handleDOMEvents: {
            paste(t, o) {
              if (o.preventDefault(), !e.isEditable)
                return;
              let i = null;
              for (const r of Be)
                if (o.clipboardData.types.includes(r)) {
                  i = r;
                  break;
                }
              if (i === null)
                return !0;
              if (i === "Files")
                return wt(o, e), !0;
              let n = o.clipboardData.getData(i);
              return i === "text/html" && (n = kt(n.trim()).innerHTML), e._tiptapEditor.view.pasteHTML(n), !0;
            }
          }
        }
      })
    ];
  }
}), Bn = (e) => M.create({
  name: "dropFile",
  addProseMirrorPlugins() {
    return [
      new y({
        props: {
          handleDOMEvents: {
            drop(t, o) {
              if (!e.isEditable)
                return;
              let i = null;
              for (const n of Be)
                if (o.dataTransfer.types.includes(n)) {
                  i = n;
                  break;
                }
              return i === null ? !0 : i === "Files" ? (wt(o, e), !0) : !1;
            }
          }
        }
      })
    ];
  }
}), Ln = M.create({
  name: "blockBackgroundColor",
  addGlobalAttributes() {
    return [
      {
        types: ["blockContainer"],
        attributes: {
          backgroundColor: {
            default: k.backgroundColor.default,
            parseHTML: (e) => e.hasAttribute("data-background-color") ? e.getAttribute("data-background-color") : k.backgroundColor.default,
            renderHTML: (e) => e.backgroundColor !== k.backgroundColor.default && {
              "data-background-color": e.backgroundColor
            }
          }
        }
      }
    ];
  }
}), In = M.create({
  name: "textAlignment",
  addGlobalAttributes() {
    return [
      {
        // Attribute is applied to block content instead of container so that child blocks don't inherit the text
        // alignment styling.
        types: [
          "paragraph",
          "heading",
          "bulletListItem",
          "numberedListItem",
          "checkListItem"
        ],
        attributes: {
          textAlignment: {
            default: "left",
            parseHTML: (e) => e.getAttribute("data-text-alignment"),
            renderHTML: (e) => e.textAlignment !== "left" && {
              "data-text-alignment": e.textAlignment
            }
          }
        }
      }
    ];
  }
}), An = M.create({
  name: "blockTextColor",
  addGlobalAttributes() {
    return [
      {
        types: ["blockContainer"],
        attributes: {
          textColor: {
            default: k.textColor.default,
            parseHTML: (e) => e.hasAttribute("data-text-color") ? e.getAttribute("data-text-color") : k.textColor.default,
            renderHTML: (e) => e.textColor !== k.textColor.default && {
              "data-text-color": e.textColor
            }
          }
        }
      }
    ];
  }
}), Nn = M.create({
  name: "trailingNode",
  addProseMirrorPlugins() {
    const e = new S(this.name);
    return [
      new y({
        key: e,
        appendTransaction: (t, o, i) => {
          const { doc: n, tr: r, schema: a } = i, s = e.getState(i), l = n.content.size - 2, d = a.nodes.blockContainer, u = a.nodes.paragraph;
          if (s)
            return r.insert(
              l,
              d.create(void 0, u.create())
            );
        },
        state: {
          init: (t, o) => {
          },
          apply: (t, o) => {
            if (!t.docChanged)
              return o;
            let i = t.doc.lastChild;
            if (!i || i.type.name !== "blockGroup")
              throw new Error("Expected blockGroup");
            if (i = i.lastChild, !i || i.type.name !== "blockContainer")
              throw new Error("Expected blockContainer");
            const n = i.firstChild;
            if (!n)
              throw new Error("Expected blockContent");
            return i.nodeSize > 4 || n.type.spec.content !== "inline*";
          }
        }
      })
    ];
  }
}), Pn = new S("non-editable-block"), Hn = () => new y({
  key: Pn,
  props: {
    handleKeyDown: (e, t) => {
      if ("node" in e.state.selection) {
        if (t.ctrlKey || t.metaKey)
          return !1;
        if (t.key.length === 1)
          return t.preventDefault(), !0;
        if (t.key === "Enter") {
          const o = e.state.tr;
          return e.dispatch(
            o.insert(
              e.state.tr.selection.$to.after(),
              e.state.schema.nodes.paragraph.create()
            ).setSelection(
              new Y(
                o.doc.resolve(e.state.tr.selection.$to.after() + 1)
              )
            )
          ), !0;
        }
      }
      return !1;
    }
  }
}), Ke = new S("previous-blocks"), Un = {
  // Numbered List Items
  index: "index",
  // Headings
  level: "level",
  // All Blocks
  type: "type",
  depth: "depth",
  "depth-change": "depth-change"
}, Dn = () => {
  let e;
  return new y({
    key: Ke,
    view(t) {
      return {
        update: async (o, i) => {
          var n;
          ((n = this.key) == null ? void 0 : n.getState(o.state).updatedBlocks.size) > 0 && (e = setTimeout(() => {
            o.dispatch(
              o.state.tr.setMeta(Ke, { clearUpdate: !0 })
            );
          }, 0));
        },
        destroy: () => {
          e && clearTimeout(e);
        }
      };
    },
    state: {
      init() {
        return {
          // Block attributes, by block ID, from just before the previous transaction.
          prevTransactionOldBlockAttrs: {},
          // Block attributes, by block ID, from just before the current transaction.
          currentTransactionOldBlockAttrs: {},
          // Set of IDs of blocks whose attributes changed from the current transaction.
          updatedBlocks: /* @__PURE__ */ new Set()
        };
      },
      apply(t, o, i, n) {
        if (o.currentTransactionOldBlockAttrs = {}, o.updatedBlocks.clear(), !t.docChanged || i.doc.eq(n.doc))
          return o;
        const r = {}, a = He(i.doc, (d) => d.attrs.id), s = new Map(
          a.map((d) => [d.node.attrs.id, d])
        ), l = He(n.doc, (d) => d.attrs.id);
        for (const d of l) {
          const u = s.get(d.node.attrs.id), p = u == null ? void 0 : u.node.firstChild, h = d.node.firstChild;
          if (u && p && h) {
            const m = {
              index: h.attrs.index,
              level: h.attrs.level,
              type: h.type.name,
              depth: n.doc.resolve(d.pos).depth
            };
            let f = {
              index: p.attrs.index,
              level: p.attrs.level,
              type: p.type.name,
              depth: i.doc.resolve(u.pos).depth
            };
            r[d.node.attrs.id] = f, t.getMeta("numberedListIndexing") && (d.node.attrs.id in o.prevTransactionOldBlockAttrs && (f = o.prevTransactionOldBlockAttrs[d.node.attrs.id]), m.type === "numberedListItem" && (f.index = m.index)), o.currentTransactionOldBlockAttrs[d.node.attrs.id] = f, JSON.stringify(f) !== JSON.stringify(m) && (f["depth-change"] = f.depth - m.depth, o.updatedBlocks.add(d.node.attrs.id));
          }
        }
        return o.prevTransactionOldBlockAttrs = r, o;
      }
    },
    props: {
      decorations(t) {
        const o = this.getState(t);
        if (o.updatedBlocks.size === 0)
          return;
        const i = [];
        return t.doc.descendants((n, r) => {
          if (!n.attrs.id || !o.updatedBlocks.has(n.attrs.id))
            return;
          const a = o.currentTransactionOldBlockAttrs[n.attrs.id], s = {};
          for (const [d, u] of Object.entries(a))
            s["data-prev-" + Un[d]] = u || "none";
          const l = W.node(r, r + n.nodeSize, {
            ...s
          });
          i.push(l);
        }), G.create(t.doc, i);
      }
    }
  });
}, Vn = {
  blockColor: "data-block-color",
  blockStyle: "data-block-style",
  id: "data-id",
  depth: "data-depth",
  depthChange: "data-depth-change"
}, Rn = K.create({
  name: "blockContainer",
  group: "blockContainer",
  // A block always contains content, and optionally a blockGroup which contains nested blocks
  content: "blockContent blockGroup?",
  // Ensures content-specific keyboard handlers trigger first.
  priority: 50,
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (e) => {
          if (typeof e == "string")
            return !1;
          const t = {};
          for (const [o, i] of Object.entries(Vn))
            e.getAttribute(i) && (t[o] = e.getAttribute(i));
          return e.getAttribute("data-node-type") === "blockContainer" ? t : !1;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    var n;
    const t = document.createElement("div");
    t.className = "bn-block-outer", t.setAttribute("data-node-type", "blockOuter");
    for (const [r, a] of Object.entries(e))
      r !== "class" && t.setAttribute(r, a);
    const o = {
      ...((n = this.options.domAttributes) == null ? void 0 : n.block) || {},
      ...e
    }, i = document.createElement("div");
    i.className = R("bn-block", o.class), i.setAttribute("data-node-type", this.name);
    for (const [r, a] of Object.entries(o))
      r !== "class" && i.setAttribute(r, a);
    return t.appendChild(i), {
      dom: t,
      contentDOM: i
    };
  },
  addCommands() {
    return {
      // Creates a new text block at a given position.
      BNCreateBlock: (e) => ({ state: t, dispatch: o }) => {
        const i = t.schema.nodes.blockContainer.createAndFill();
        return o && t.tr.insert(e, i).scrollIntoView(), !0;
      },
      // Deletes a block at a given position.
      BNDeleteBlock: (e) => ({ state: t, dispatch: o }) => {
        const i = b(t.doc, e);
        if (i === void 0)
          return !1;
        const { startPos: n, endPos: r } = i;
        return o && t.tr.deleteRange(n, r), !0;
      },
      // Updates a block at a given position.
      BNUpdateBlock: (e, t) => ({ state: o, dispatch: i }) => {
        const n = b(o.doc, e);
        if (n === void 0)
          return !1;
        const { startPos: r, endPos: a, node: s, contentNode: l } = n;
        if (i) {
          if (t.children !== void 0) {
            const h = [];
            for (const m of t.children)
              h.push(
                P(
                  m,
                  o.schema,
                  this.options.editor.schema.styleSchema
                )
              );
            s.childCount === 2 ? o.tr.replace(
              r + l.nodeSize + 1,
              a - 1,
              new D(L.from(h), 0, 0)
            ) : o.tr.insert(
              r + l.nodeSize,
              o.schema.nodes.blockGroup.create({}, h)
            );
          }
          const d = l.type.name, u = t.type || d;
          let p = "keep";
          if (t.content)
            if (typeof t.content == "string")
              p = $(
                [t.content],
                o.schema,
                this.options.editor.schema.styleSchema
              );
            else if (Array.isArray(t.content))
              p = $(
                t.content,
                o.schema,
                this.options.editor.schema.styleSchema
              );
            else if (t.content.type === "tableContent")
              p = et(
                t.content,
                o.schema,
                this.options.editor.schema.styleSchema
              );
            else
              throw new I(t.content.type);
          else {
            const h = o.schema.nodes[d].spec.content, m = o.schema.nodes[u].spec.content;
            h === "" || m !== h && (p = []);
          }
          p === "keep" ? o.tr.setNodeMarkup(
            r,
            t.type === void 0 ? void 0 : o.schema.nodes[t.type],
            {
              ...l.attrs,
              ...t.props
            }
          ) : o.tr.replaceWith(
            r,
            a,
            o.schema.nodes[u].create(
              {
                ...l.attrs,
                ...t.props
              },
              p
            )
          ).setSelection(
            o.schema.nodes[u].spec.content === "" ? new ne(o.tr.doc.resolve(r)) : o.schema.nodes[u].spec.content === "inline*" ? new Y(o.tr.doc.resolve(r)) : (
              // Need to offset the position as we have to get through the
              // `tableRow` and `tableCell` nodes to get to the
              // `tableParagraph` node we want to set the selection in.
              new Y(o.tr.doc.resolve(r + 4))
            )
          ), o.tr.setNodeMarkup(r - 1, void 0, {
            ...s.attrs,
            ...t.props
          });
        }
        return !0;
      },
      // Appends the text contents of a block to the nearest previous block, given a position between them. Children of
      // the merged block are moved out of it first, rather than also being merged.
      //
      // In the example below, the position passed into the function is between Block1 and Block2.
      //
      // Block1
      //    Block2
      // Block3
      //    Block4
      //        Block5
      //
      // Becomes:
      //
      // Block1
      //    Block2Block3
      // Block4
      //     Block5
      BNMergeBlocks: (e) => ({ state: t, dispatch: o }) => {
        const i = t.doc.resolve(e + 1).node().type.name === "blockContainer", n = t.doc.resolve(e - 1).node().type.name === "blockContainer";
        if (!i || !n)
          return !1;
        const r = b(
          t.doc,
          e + 1
        ), { node: a, contentNode: s, startPos: l, endPos: d, depth: u } = r;
        if (a.childCount === 2) {
          const m = t.doc.resolve(
            l + s.nodeSize + 1
          ), f = t.doc.resolve(d - 1), g = m.blockRange(f);
          o && t.tr.lift(g, u - 1);
        }
        let p = e - 1, h = b(t.doc, p);
        for (; h.numChildBlocks > 0; )
          if (p--, h = b(t.doc, p), h === void 0)
            return !1;
        return o && (o(
          t.tr.deleteRange(l, l + s.nodeSize).replace(
            p - 1,
            l,
            new D(s.content, 0, 0)
          ).scrollIntoView()
        ), t.tr.setSelection(
          new Y(t.doc.resolve(p - 1))
        )), !0;
      },
      // Splits a block at a given position. Content after the position is moved to a new block below, at the same
      // nesting level.
      // - `keepType` is usually false, unless the selection is at the start of
      // a block.
      // - `keepProps` is usually true when `keepType` is true, except for when
      // creating new list item blocks with Enter.
      BNSplitBlock: (e, t, o) => ({ state: i, dispatch: n }) => {
        const r = b(i.doc, e);
        if (r === void 0)
          return !1;
        const { contentNode: a, contentType: s, startPos: l, endPos: d, depth: u } = r, p = i.doc.cut(l + 1, e), h = i.doc.cut(e, d - 1), m = i.schema.nodes.blockContainer.createAndFill(), f = d + 1, g = f + 2;
        return n && (i.tr.insert(f, m), i.tr.replace(
          g,
          g + 1,
          h.content.size > 0 ? new D(
            L.from(h),
            u + 2,
            u + 2
          ) : void 0
        ), t && i.tr.setBlockType(
          g,
          g,
          i.schema.node(s).type,
          o ? a.attrs : void 0
        ), i.tr.setSelection(
          new Y(i.doc.resolve(g))
        ), i.tr.replace(
          l + 1,
          d - 1,
          p.content.size > 0 ? new D(
            L.from(p),
            u + 2,
            u + 2
          ) : void 0
        ), i.tr.scrollIntoView()), !0;
      }
    };
  },
  addProseMirrorPlugins() {
    return [Dn(), Hn()];
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => this.editor.commands.first(({ commands: i }) => [
        // Deletes the selection if it's not empty.
        () => i.deleteSelection(),
        // Undoes an input rule if one was triggered in the last editor state change.
        () => i.undoInputRule(),
        // Reverts block content type to a paragraph if the selection is at the start of the block.
        () => i.command(({ state: n }) => {
          const { contentType: r, startPos: a } = b(
            n.doc,
            n.selection.from
          ), s = n.selection.from === a + 1, l = r.name === "paragraph";
          return s && !l ? i.BNUpdateBlock(n.selection.from, {
            type: "paragraph",
            props: {}
          }) : !1;
        }),
        // Removes a level of nesting if the block is indented if the selection is at the start of the block.
        () => i.command(({ state: n }) => {
          const { startPos: r } = b(
            n.doc,
            n.selection.from
          );
          return n.selection.from === r + 1 ? i.liftListItem("blockContainer") : !1;
        }),
        // Merges block with the previous one if it isn't indented, isn't the first block in the doc, and the selection
        // is at the start of the block.
        () => i.command(({ state: n }) => {
          const { depth: r, startPos: a } = b(
            n.doc,
            n.selection.from
          ), s = n.selection.from === a + 1, l = n.selection.empty, d = a === 2, u = a - 1;
          return !d && s && l && r === 2 ? i.BNMergeBlocks(u) : !1;
        })
      ]),
      Delete: () => this.editor.commands.first(({ commands: i }) => [
        // Deletes the selection if it's not empty.
        () => i.deleteSelection(),
        // Merges block with the next one (at the same nesting level or lower),
        // if one exists, the block has no children, and the selection is at the
        // end of the block.
        () => i.command(({ state: n }) => {
          const { node: r, depth: a, endPos: s } = b(
            n.doc,
            n.selection.from
          ), l = s === n.doc.nodeSize - 4, d = n.selection.from === s - 1, u = n.selection.empty, p = r.childCount === 2;
          if (!l && d && u && !p) {
            let h = a, m = s + 2, f = n.doc.resolve(m).depth;
            for (; f < h; )
              h = f, m += 2, f = n.doc.resolve(m).depth;
            return i.BNMergeBlocks(m - 1);
          }
          return !1;
        })
      ]),
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        // Removes a level of nesting if the block is empty & indented, while the selection is also empty & at the start
        // of the block.
        () => i.command(({ state: n }) => {
          const { contentNode: r, depth: a } = b(
            n.doc,
            n.selection.from
          ), s = n.selection.$anchor.parentOffset === 0, l = n.selection.anchor === n.selection.head, d = r.childCount === 0, u = a > 2;
          return s && l && d && u ? i.liftListItem("blockContainer") : !1;
        }),
        // Creates a new block and moves the selection to it if the current one is empty, while the selection is also
        // empty & at the start of the block.
        () => i.command(({ state: n, chain: r }) => {
          const { contentNode: a, endPos: s } = b(
            n.doc,
            n.selection.from
          ), l = n.selection.$anchor.parentOffset === 0, d = n.selection.anchor === n.selection.head, u = a.childCount === 0;
          if (l && d && u) {
            const p = s + 1, h = p + 2;
            return r().BNCreateBlock(p).setTextSelection(h).run(), !0;
          }
          return !1;
        }),
        // Splits the current block, moving content inside that's after the cursor to a new text block below. Also
        // deletes the selection beforehand, if it's not empty.
        () => i.command(({ state: n, chain: r }) => {
          const { contentNode: a } = b(
            n.doc,
            n.selection.from
          ), s = n.selection.$anchor.parentOffset === 0;
          return a.childCount === 0 ? !1 : (r().deleteSelection().BNSplitBlock(
            n.selection.from,
            s,
            s
          ).run(), !0);
        })
      ]),
      // Always returning true for tab key presses ensures they're not captured by the browser. Otherwise, they blur the
      // editor since the browser will try to use tab for keyboard navigation.
      Tab: () => {
        var i, n, r;
        return (i = this.options.editor.formattingToolbar) != null && i.shown || (n = this.options.editor.linkToolbar) != null && n.shown || (r = this.options.editor.filePanel) != null && r.shown ? !1 : (this.editor.commands.sinkListItem("blockContainer"), !0);
      },
      "Shift-Tab": () => {
        var i, n, r;
        return (i = this.options.editor.formattingToolbar) != null && i.shown || (n = this.options.editor.linkToolbar) != null && n.shown || (r = this.options.editor.filePanel) != null && r.shown ? !1 : (this.editor.commands.liftListItem("blockContainer"), !0);
      }
    };
  }
}), On = K.create({
  name: "blockGroup",
  group: "blockGroup",
  content: "blockContainer+",
  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (e) => typeof e == "string" ? !1 : e.getAttribute("data-node-type") === "blockGroup" ? null : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    var i;
    const t = {
      ...((i = this.options.domAttributes) == null ? void 0 : i.blockGroup) || {},
      ...e
    }, o = document.createElement("div");
    o.className = R(
      "bn-block-group",
      t.class
    ), o.setAttribute("data-node-type", "blockGroup");
    for (const [n, r] of Object.entries(t))
      n !== "class" && o.setAttribute(n, r);
    return {
      dom: o,
      contentDOM: o
    };
  }
}), jn = K.create({
  name: "doc",
  topNode: !0,
  content: "blockGroup"
}), zn = (e) => {
  var i;
  const t = [
    J.ClipboardTextSerializer,
    J.Commands,
    J.Editable,
    J.FocusEvents,
    J.Tabindex,
    // DevTools,
    co,
    // DropCursor,
    oe.configure({
      types: ["blockContainer"]
    }),
    uo.extend({ priority: 10 }),
    // Comments,
    // basics:
    mo,
    // marks:
    ho.extend({
      addKeyboardShortcuts() {
        return {
          "Mod-k": () => (this.editor.commands.toggleLink({ href: "" }), !0)
        };
      }
    }),
    ...Object.values(e.styleSpecs).map((n) => n.implementation.mark),
    An,
    Ln,
    In,
    // make sure escape blurs editor, so that we can tab to other elements in the host page (accessibility)
    M.create({
      name: "OverrideEscape",
      addKeyboardShortcuts() {
        return {
          Escape: () => e.editor.suggestionMenus.shown ? !1 : this.editor.commands.blur()
        };
      }
    }),
    // nodes
    jn,
    Rn.configure({
      editor: e.editor,
      domAttributes: e.domAttributes
    }),
    On.configure({
      domAttributes: e.domAttributes
    }),
    ...Object.values(e.inlineContentSpecs).filter((n) => n.config !== "link" && n.config !== "text").map((n) => n.implementation.node.configure({
      editor: e.editor
    })),
    ...Object.values(e.blockSpecs).flatMap((n) => [
      // dependent nodes (e.g.: tablecell / row)
      ...(n.implementation.requiredExtensions || []).map(
        (r) => r.configure({
          editor: e.editor,
          domAttributes: e.domAttributes
        })
      ),
      // the actual node itself
      n.implementation.node.configure({
        editor: e.editor,
        domAttributes: e.domAttributes
      })
    ]),
    Cn(e.editor),
    Tn(e.editor),
    Bn(e.editor),
    lo.configure({ width: 5, color: "#ddeeff" }),
    // This needs to be at the bottom of this list, because Key events (such as enter, when selecting a /command),
    // should be handled before Enter handlers in other components like splitListItem
    ...e.trailingBlock === void 0 || e.trailingBlock ? [Nn] : []
  ];
  if (e.collaboration) {
    if (t.push(
      ao.configure({
        fragment: e.collaboration.fragment
      })
    ), (i = e.collaboration.provider) != null && i.awareness) {
      const n = (r) => {
        const a = document.createElement("span");
        a.classList.add("collaboration-cursor__caret"), a.setAttribute("style", `border-color: ${r.color}`);
        const s = document.createElement("span");
        s.classList.add("collaboration-cursor__label"), s.setAttribute("style", `background-color: ${r.color}`), s.insertBefore(document.createTextNode(r.name), null);
        const l = document.createTextNode("⁠"), d = document.createTextNode("⁠");
        return a.insertBefore(l, null), a.insertBefore(s, null), a.insertBefore(d, null), a;
      };
      t.push(
        so.configure({
          user: e.collaboration.user,
          render: e.collaboration.renderCursor || n,
          provider: e.collaboration.provider
        })
      );
    }
  } else
    t.push(po);
  const o = e.disableExtensions || [];
  return t.filter((n) => !o.includes(n.name));
};
function Fn(e, t) {
  const o = [];
  return e.forEach((i, n, r) => {
    r !== t && o.push(i);
  }), L.from(o);
}
function Gn(e, t) {
  let o = L.from(e.content);
  for (let i = 0; i < o.childCount; i++)
    if (o.child(i).type.spec.group === "blockContent") {
      const n = [o.child(i)];
      if (i + 1 < o.childCount && o.child(i + 1).type.spec.group === "blockGroup") {
        const a = o.child(i + 1).child(0).child(0);
        (a.type.name === "bulletListItem" || a.type.name === "numberedListItem" || a.type.name === "checkListItem") && (n.push(o.child(i + 1)), o = Fn(o, i + 1));
      }
      const r = t.state.schema.nodes.blockContainer.create(
        void 0,
        n
      );
      o = o.replaceChild(i, r);
    }
  return new D(o, e.openStart, e.openEnd);
}
function ge(e) {
  return e && Object.fromEntries(
    Object.entries(e).filter(([, t]) => t !== void 0)
  );
}
class Le {
  constructor(t) {
    c(this, "blockSpecs");
    c(this, "inlineContentSpecs");
    c(this, "styleSpecs");
    c(this, "blockSchema");
    c(this, "inlineContentSchema");
    c(this, "styleSchema");
    // Helper so that you can use typeof schema.BlockNoteEditor
    c(this, "BlockNoteEditor", "only for types");
    c(this, "Block", "only for types");
    c(this, "PartialBlock", "only for types");
    this.blockSpecs = ge(t == null ? void 0 : t.blockSpecs) || mt, this.inlineContentSpecs = ge(t == null ? void 0 : t.inlineContentSpecs) || gt, this.styleSpecs = ge(t == null ? void 0 : t.styleSpecs) || ft, this.blockSchema = dt(this.blockSpecs), this.inlineContentSchema = ct(
      this.inlineContentSpecs
    ), this.styleSchema = pt(this.styleSpecs);
  }
  static create(t) {
    return new Le(t);
  }
}
class Wn extends Ot {
  constructor(o, i) {
    super({ ...o, content: void 0 });
    c(this, "_state");
    /**
     * Mounts / unmounts the editor to a dom element
     *
     * @param element DOM element to mount to, ur null / undefined to destroy
     */
    c(this, "mount", (o) => {
      o ? (this.options.element = o, this.createViewAlternative()) : this.destroy();
    });
    const n = this.schema;
    let r;
    const a = n.nodes.doc.createAndFill;
    n.nodes.doc.createAndFill = (...l) => {
      if (r)
        return r;
      const d = a.apply(n.nodes.doc, l), u = JSON.parse(JSON.stringify(d.toJSON()));
      return u.content[0].content[0].attrs.id = "initialBlockId", r = Bt.fromJSON(n, u), r;
    };
    let s;
    try {
      const l = o == null ? void 0 : o.content.map(
        (d) => P(d, this.schema, i).toJSON()
      );
      s = jt(
        {
          type: "doc",
          content: [
            {
              type: "blockGroup",
              content: l
            }
          ]
        },
        this.schema,
        this.options.parseOptions
      );
    } catch (l) {
      throw console.error(
        "Error creating document from blocks passed as `initialContent`. Caused by exception: ",
        l
      ), new Error(
        "Error creating document from blocks passed as `initialContent`:\n" + +JSON.stringify(o.content)
      );
    }
    this._state = zt.create({
      doc: s,
      schema: this.schema
      // selection: selection || undefined,
    });
  }
  get state() {
    return this.view && (this._state = this.view.state), this._state;
  }
  createView() {
  }
  /**
   * Replace the default `createView` method with a custom one - which we call on mount
   */
  createViewAlternative() {
    queueMicrotask(() => {
      this.view = new ro(
        { mount: this.options.element },
        // use mount option so that we reuse the existing element instead of creating a new one
        {
          ...this.options.editorProps,
          // @ts-ignore
          dispatchTransaction: this.dispatchTransaction.bind(this),
          state: this.state
        }
      );
      const o = this.state.reconfigure({
        plugins: this.extensionManager.plugins
      });
      this.view.updateState(o), this.createNodeViews();
    });
  }
}
const $n = new S("blocknote-placeholder"), Kn = (e, t) => new y({
  key: $n,
  view: () => {
    const o = document.createElement("style"), i = e._tiptapEditor.options.injectNonce;
    i && o.setAttribute("nonce", i), e._tiptapEditor.view.root instanceof ShadowRoot ? e._tiptapEditor.view.root.append(o) : e._tiptapEditor.view.root.head.appendChild(o);
    const n = o.sheet, r = (s = "") => `.bn-block-content${s} .bn-inline-content:has(> .ProseMirror-trailingBreak:only-child):before`, a = (s, l = !0) => {
      const d = l ? "[data-is-empty-and-focused]" : "";
      if (s === "default")
        return r(d);
      const u = `[data-content-type="${s}"]`;
      return r(d + u);
    };
    for (const [s, l] of Object.entries(t)) {
      const d = s === "default";
      n.insertRule(
        `${a(s, d)}{ content: ${JSON.stringify(
          l
        )}; }`
      ), d || n.insertRule(
        `${a(s, !0)}{ content: ${JSON.stringify(
          l
        )}; }`
      );
    }
    return {
      destroy: () => {
        e._tiptapEditor.view.root instanceof ShadowRoot ? e._tiptapEditor.view.root.removeChild(o) : e._tiptapEditor.view.root.head.removeChild(o);
      }
    };
  },
  props: {
    // TODO: maybe also add placeholder for empty document ("e.g.: start writing..")
    decorations: (o) => {
      const { doc: i, selection: n } = o;
      if (!e.isEditable || !n.empty)
        return;
      const r = n.$anchor, a = r.parent;
      if (a.content.size > 0)
        return null;
      const s = r.before(), l = W.node(s, s + a.nodeSize, {
        "data-is-empty-and-focused": "true"
      });
      return G.create(i, [l]);
    }
  }
});
const qn = {
  enableInputRules: !0,
  enablePasteRules: !0,
  enableCoreExtensions: !1
};
class vt {
  constructor(t) {
    c(this, "_tiptapEditor");
    c(this, "blockCache", /* @__PURE__ */ new WeakMap());
    c(this, "dictionary");
    c(this, "schema");
    c(this, "blockImplementations");
    c(this, "inlineContentImplementations");
    c(this, "styleImplementations");
    c(this, "formattingToolbar");
    c(this, "linkToolbar");
    c(this, "sideMenu");
    c(this, "suggestionMenus");
    c(this, "filePanel");
    c(this, "tableHandles");
    c(this, "uploadFile");
    c(this, "resolveFileUrl");
    var d, u, p, h;
    this.options = t;
    const o = t;
    if (o.onEditorContentChange)
      throw new Error(
        "onEditorContentChange initialization option is deprecated, use <BlockNoteView onChange={...} />, the useEditorChange(...) hook, or editor.onChange(...)"
      );
    if (o.onTextCursorPositionChange)
      throw new Error(
        "onTextCursorPositionChange initialization option is deprecated, use <BlockNoteView onSelectionChange={...} />, the useEditorSelectionChange(...) hook, or editor.onSelectionChange(...)"
      );
    if (o.onEditorReady)
      throw new Error(
        "onEditorReady is deprecated. Editor is immediately ready for use after creation."
      );
    if (o.editable)
      throw new Error(
        "editable initialization option is deprecated, use <BlockNoteView editable={true/false} />, or alternatively editor.isEditable = true/false"
      );
    this.dictionary = t.dictionary || Je;
    const i = {
      defaultStyles: !0,
      schema: t.schema || Le.create(),
      ...t,
      placeholders: {
        ...this.dictionary.placeholders,
        ...t.placeholders
      }
    };
    this.schema = i.schema, this.blockImplementations = i.schema.blockSpecs, this.inlineContentImplementations = i.schema.inlineContentSpecs, this.styleImplementations = i.schema.styleSpecs, this.formattingToolbar = new sn(this), this.linkToolbar = new cn(this), this.sideMenu = new _n(this), this.suggestionMenus = new hn(this), this.filePanel = new nn(this), E("table", this) && (this.tableHandles = new En(this));
    const n = zn({
      editor: this,
      domAttributes: i.domAttributes || {},
      blockSchema: this.schema.blockSchema,
      blockSpecs: this.schema.blockSpecs,
      styleSpecs: this.schema.styleSpecs,
      inlineContentSpecs: this.schema.inlineContentSpecs,
      collaboration: i.collaboration,
      trailingBlock: i.trailingBlock,
      disableExtensions: i.disableExtensions
    }), r = M.create({
      name: "BlockNoteUIExtension",
      addProseMirrorPlugins: () => [
        this.formattingToolbar.plugin,
        this.linkToolbar.plugin,
        this.sideMenu.plugin,
        this.suggestionMenus.plugin,
        ...this.filePanel ? [this.filePanel.plugin] : [],
        ...this.tableHandles ? [this.tableHandles.plugin] : [],
        Kn(this, i.placeholders)
      ]
    });
    n.push(r), this.uploadFile = i.uploadFile, this.resolveFileUrl = i.resolveFileUrl || (async (m) => m), i.collaboration && i.initialContent && console.warn(
      "When using Collaboration, initialContent might cause conflicts, because changes should come from the collaboration provider"
    );
    const a = i.initialContent || (t.collaboration ? [
      {
        type: "paragraph",
        id: "initialBlockId"
      }
    ] : [
      {
        type: "paragraph",
        id: oe.options.generateID()
      }
    ]);
    if (!Array.isArray(a) || a.length === 0)
      throw new Error(
        "initialContent must be a non-empty array of blocks, received: " + a
      );
    const s = typeof i._tiptapOptions == "function" ? i._tiptapOptions(this) : i._tiptapOptions, l = {
      ...qn,
      ...i._tiptapOptions,
      content: a,
      extensions: [
        ...(s == null ? void 0 : s.extensions) || [],
        ...n
      ],
      editorProps: {
        ...s == null ? void 0 : s.editorProps,
        attributes: {
          ...(d = s == null ? void 0 : s.editorProps) == null ? void 0 : d.attributes,
          ...(u = i.domAttributes) == null ? void 0 : u.editor,
          class: R(
            "bn-editor",
            i.defaultStyles ? "bn-default-styles" : "",
            ((h = (p = i.domAttributes) == null ? void 0 : p.editor) == null ? void 0 : h.class) || ""
          )
        },
        transformPasted: Gn
      }
    };
    this._tiptapEditor = new Wn(
      l,
      this.schema.styleSchema
    );
  }
  static create(t = {}) {
    return new vt(t);
  }
  /**
   * Mount the editor to a parent DOM element. Call mount(undefined) to clean up
   *
   * @warning Not needed for React, use BlockNoteView to take care of this
   */
  mount(t) {
    this._tiptapEditor.mount(t);
  }
  get prosemirrorView() {
    return this._tiptapEditor.view;
  }
  get domElement() {
    return this._tiptapEditor.view.dom;
  }
  isFocused() {
    return this._tiptapEditor.view.hasFocus();
  }
  focus() {
    this._tiptapEditor.view.focus();
  }
  /**
   * @deprecated, use `editor.document` instead
   */
  get topLevelBlocks() {
    return this.topLevelBlocks;
  }
  /**
   * Gets a snapshot of all top-level (non-nested) blocks in the editor.
   * @returns A snapshot of all top-level (non-nested) blocks in the editor.
   */
  get document() {
    const t = [];
    return this._tiptapEditor.state.doc.firstChild.descendants((o) => (t.push(
      v(
        o,
        this.schema.blockSchema,
        this.schema.inlineContentSchema,
        this.schema.styleSchema,
        this.blockCache
      )
    ), !1)), t;
  }
  /**
   * Gets a snapshot of an existing block from the editor.
   * @param blockIdentifier The identifier of an existing block that should be retrieved.
   * @returns The block that matches the identifier, or `undefined` if no matching block was found.
   */
  getBlock(t) {
    const o = typeof t == "string" ? t : t.id;
    let i;
    return this._tiptapEditor.state.doc.firstChild.descendants((n) => typeof i < "u" ? !1 : n.type.name !== "blockContainer" || n.attrs.id !== o ? !0 : (i = v(
      n,
      this.schema.blockSchema,
      this.schema.inlineContentSchema,
      this.schema.styleSchema,
      this.blockCache
    ), !1)), i;
  }
  /**
   * Traverses all blocks in the editor depth-first, and executes a callback for each.
   * @param callback The callback to execute for each block. Returning `false` stops the traversal.
   * @param reverse Whether the blocks should be traversed in reverse order.
   */
  forEachBlock(t, o = !1) {
    const i = this.document.slice();
    o && i.reverse();
    function n(r) {
      for (const a of r) {
        if (!t(a))
          return !1;
        const s = o ? a.children.slice().reverse() : a.children;
        if (!n(s))
          return !1;
      }
      return !0;
    }
    n(i);
  }
  /**
   * Executes a callback whenever the editor's contents change.
   * @param callback The callback to execute.
   */
  onEditorContentChange(t) {
    this._tiptapEditor.on("update", t);
  }
  /**
   * Executes a callback whenever the editor's selection changes.
   * @param callback The callback to execute.
   */
  onEditorSelectionChange(t) {
    this._tiptapEditor.on("selectionUpdate", t);
  }
  /**
   * Gets a snapshot of the current text cursor position.
   * @returns A snapshot of the current text cursor position.
   */
  getTextCursorPosition() {
    const { node: t, depth: o, startPos: i, endPos: n } = b(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    ), r = this._tiptapEditor.state.doc.resolve(n).index(o - 1), a = this._tiptapEditor.state.doc.resolve(n + 1).node().childCount;
    let s;
    r > 0 && (s = this._tiptapEditor.state.doc.resolve(i - 2).node());
    let l;
    return r < a - 1 && (l = this._tiptapEditor.state.doc.resolve(n + 2).node()), {
      block: v(
        t,
        this.schema.blockSchema,
        this.schema.inlineContentSchema,
        this.schema.styleSchema,
        this.blockCache
      ),
      prevBlock: s === void 0 ? void 0 : v(
        s,
        this.schema.blockSchema,
        this.schema.inlineContentSchema,
        this.schema.styleSchema,
        this.blockCache
      ),
      nextBlock: l === void 0 ? void 0 : v(
        l,
        this.schema.blockSchema,
        this.schema.inlineContentSchema,
        this.schema.styleSchema,
        this.blockCache
      )
    };
  }
  /**
   * Sets the text cursor position to the start or end of an existing block. Throws an error if the target block could
   * not be found.
   * @param targetBlock The identifier of an existing block that the text cursor should be moved to.
   * @param placement Whether the text cursor should be placed at the start or end of the block.
   */
  setTextCursorPosition(t, o = "start") {
    const i = typeof t == "string" ? t : t.id, { posBeforeNode: n } = Me(i, this._tiptapEditor.state.doc), { startPos: r, contentNode: a } = b(
      this._tiptapEditor.state.doc,
      n + 2
    ), s = this.schema.blockSchema[a.type.name].content;
    if (s === "none") {
      this._tiptapEditor.commands.setNodeSelection(r);
      return;
    }
    if (s === "inline")
      o === "start" ? this._tiptapEditor.commands.setTextSelection(r + 1) : this._tiptapEditor.commands.setTextSelection(
        r + a.nodeSize - 1
      );
    else if (s === "table")
      o === "start" ? this._tiptapEditor.commands.setTextSelection(r + 4) : this._tiptapEditor.commands.setTextSelection(
        r + a.nodeSize - 4
      );
    else
      throw new I(s);
  }
  /**
   * Gets a snapshot of the current selection.
   */
  getSelection() {
    if (this._tiptapEditor.state.selection.from === this._tiptapEditor.state.selection.to || "node" in this._tiptapEditor.state.selection)
      return;
    const t = [];
    return this._tiptapEditor.state.doc.descendants((o, i) => o.type.spec.group !== "blockContent" || i + o.nodeSize < this._tiptapEditor.state.selection.from || i > this._tiptapEditor.state.selection.to ? !0 : (t.push(
      v(
        this._tiptapEditor.state.doc.resolve(i).node(),
        this.schema.blockSchema,
        this.schema.inlineContentSchema,
        this.schema.styleSchema,
        this.blockCache
      )
    ), !1)), { blocks: t };
  }
  /**
   * Checks if the editor is currently editable, or if it's locked.
   * @returns True if the editor is editable, false otherwise.
   */
  get isEditable() {
    return this._tiptapEditor.isEditable;
  }
  /**
   * Makes the editor editable or locks it, depending on the argument passed.
   * @param editable True to make the editor editable, or false to lock it.
   */
  set isEditable(t) {
    this._tiptapEditor.options.editable !== t && this._tiptapEditor.setEditable(t);
  }
  /**
   * Inserts new blocks into the editor. If a block's `id` is undefined, BlockNote generates one automatically. Throws an
   * error if the reference block could not be found.
   * @param blocksToInsert An array of partial blocks that should be inserted.
   * @param referenceBlock An identifier for an existing block, at which the new blocks should be inserted.
   * @param placement Whether the blocks should be inserted just before, just after, or nested inside the
   * `referenceBlock`. Inserts the blocks at the start of the existing block's children if "nested" is used.
   */
  insertBlocks(t, o, i = "before") {
    return ji(t, o, i, this);
  }
  /**
   * Updates an existing block in the editor. Since updatedBlock is a PartialBlock object, some fields might not be
   * defined. These undefined fields are kept as-is from the existing block. Throws an error if the block to update could
   * not be found.
   * @param blockToUpdate The block that should be updated.
   * @param update A partial block which defines how the existing block should be changed.
   */
  updateBlock(t, o) {
    return zi(t, o, this);
  }
  /**
   * Removes existing blocks from the editor. Throws an error if any of the blocks could not be found.
   * @param blocksToRemove An array of identifiers for existing blocks that should be removed.
   */
  removeBlocks(t) {
    return Fi(t, this);
  }
  /**
   * Replaces existing blocks in the editor with new blocks. If the blocks that should be removed are not adjacent or
   * are at different nesting levels, `blocksToInsert` will be inserted at the position of the first block in
   * `blocksToRemove`. Throws an error if any of the blocks to remove could not be found.
   * @param blocksToRemove An array of blocks that should be replaced.
   * @param blocksToInsert An array of partial blocks to replace the old ones with.
   */
  replaceBlocks(t, o) {
    return Gi(t, o, this);
  }
  /**
   * Insert a piece of content at the current cursor position.
   *
   * @param content can be a string, or array of partial inline content elements
   */
  insertInlineContent(t) {
    const o = $(
      t,
      this._tiptapEditor.schema,
      this.schema.styleSchema
    );
    Wi(
      {
        from: this._tiptapEditor.state.selection.from,
        to: this._tiptapEditor.state.selection.to
      },
      o,
      this
    );
  }
  /**
   * Gets the active text styles at the text cursor position or at the end of the current selection if it's active.
   */
  getActiveStyles() {
    const t = {}, o = this._tiptapEditor.state.selection.$to.marks();
    for (const i of o) {
      const n = this.schema.styleSchema[i.type.name];
      if (!n) {
        i.type.name !== "link" && console.warn("mark not found in styleschema", i.type.name);
        continue;
      }
      n.propSchema === "boolean" ? t[n.type] = !0 : t[n.type] = i.attrs.stringValue;
    }
    return t;
  }
  /**
   * Adds styles to the currently selected content.
   * @param styles The styles to add.
   */
  addStyles(t) {
    for (const [o, i] of Object.entries(t)) {
      const n = this.schema.styleSchema[o];
      if (!n)
        throw new Error(`style ${o} not found in styleSchema`);
      if (n.propSchema === "boolean")
        this._tiptapEditor.commands.setMark(o);
      else if (n.propSchema === "string")
        this._tiptapEditor.commands.setMark(o, { stringValue: i });
      else
        throw new I(n.propSchema);
    }
  }
  /**
   * Removes styles from the currently selected content.
   * @param styles The styles to remove.
   */
  removeStyles(t) {
    for (const o of Object.keys(t))
      this._tiptapEditor.commands.unsetMark(o);
  }
  /**
   * Toggles styles on the currently selected content.
   * @param styles The styles to toggle.
   */
  toggleStyles(t) {
    for (const [o, i] of Object.entries(t)) {
      const n = this.schema.styleSchema[o];
      if (!n)
        throw new Error(`style ${o} not found in styleSchema`);
      if (n.propSchema === "boolean")
        this._tiptapEditor.commands.toggleMark(o);
      else if (n.propSchema === "string")
        this._tiptapEditor.commands.toggleMark(o, { stringValue: i });
      else
        throw new I(n.propSchema);
    }
  }
  /**
   * Gets the currently selected text.
   */
  getSelectedText() {
    return this._tiptapEditor.state.doc.textBetween(
      this._tiptapEditor.state.selection.from,
      this._tiptapEditor.state.selection.to
    );
  }
  /**
   * Gets the URL of the last link in the current selection, or `undefined` if there are no links in the selection.
   */
  getSelectedLinkUrl() {
    return this._tiptapEditor.getAttributes("link").href;
  }
  /**
   * Creates a new link to replace the selected content.
   * @param url The link URL.
   * @param text The text to display the link with.
   */
  createLink(t, o) {
    if (t === "")
      return;
    const { from: i, to: n } = this._tiptapEditor.state.selection;
    o || (o = this._tiptapEditor.state.doc.textBetween(i, n));
    const r = this._tiptapEditor.schema.mark("link", { href: t });
    this._tiptapEditor.view.dispatch(
      this._tiptapEditor.view.state.tr.insertText(o, i, n).addMark(i, i + o.length, r)
    );
  }
  /**
   * Checks if the block containing the text cursor can be nested.
   */
  canNestBlock() {
    const { startPos: t, depth: o } = b(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    );
    return this._tiptapEditor.state.doc.resolve(t).index(o - 1) > 0;
  }
  /**
   * Nests the block containing the text cursor into the block above it.
   */
  nestBlock() {
    this._tiptapEditor.commands.sinkListItem("blockContainer");
  }
  /**
   * Checks if the block containing the text cursor is nested.
   */
  canUnnestBlock() {
    const { depth: t } = b(
      this._tiptapEditor.state.doc,
      this._tiptapEditor.state.selection.from
    );
    return t > 2;
  }
  /**
   * Lifts the block containing the text cursor out of its parent.
   */
  unnestBlock() {
    this._tiptapEditor.commands.liftListItem("blockContainer");
  }
  // TODO: Fix when implementing HTML/Markdown import & export
  /**
   * Serializes blocks into an HTML string. To better conform to HTML standards, children of blocks which aren't list
   * items are un-nested in the output HTML.
   * @param blocks An array of blocks that should be serialized into HTML.
   * @returns The blocks, serialized as an HTML string.
   */
  async blocksToHTMLLossy(t = this.document) {
    return ae(
      this._tiptapEditor.schema,
      this
    ).exportBlocks(t);
  }
  /**
   * Parses blocks from an HTML string. Tries to create `Block` objects out of any HTML block-level elements, and
   * `InlineNode` objects from any HTML inline elements, though not all element types are recognized. If BlockNote
   * doesn't recognize an HTML element's tag, it will parse it as a paragraph or plain text.
   * @param html The HTML string to parse blocks from.
   * @returns The blocks parsed from the HTML string.
   */
  async tryParseHTMLToBlocks(t) {
    return _t(
      t,
      this.schema.blockSchema,
      this.schema.inlineContentSchema,
      this.schema.styleSchema,
      this._tiptapEditor.schema
    );
  }
  /**
   * Serializes blocks into a Markdown string. The output is simplified as Markdown does not support all features of
   * BlockNote - children of blocks which aren't list items are un-nested and certain styles are removed.
   * @param blocks An array of blocks that should be serialized into Markdown.
   * @returns The blocks, serialized as a Markdown string.
   */
  async blocksToMarkdownLossy(t = this.document) {
    return qi(t, this._tiptapEditor.schema, this);
  }
  /**
   * Creates a list of blocks from a Markdown string. Tries to create `Block` and `InlineNode` objects based on
   * Markdown syntax, though not all symbols are recognized. If BlockNote doesn't recognize a symbol, it will parse it
   * as text.
   * @param markdown The Markdown string to parse blocks from.
   * @returns The blocks parsed from the Markdown string.
   */
  async tryParseMarkdownToBlocks(t) {
    return tn(
      t,
      this.schema.blockSchema,
      this.schema.inlineContentSchema,
      this.schema.styleSchema,
      this._tiptapEditor.schema
    );
  }
  /**
   * Updates the user info for the current user that's shown to other collaborators.
   */
  updateCollaborationUserInfo(t) {
    if (!this.options.collaboration)
      throw new Error(
        "Cannot update collaboration user info when collaboration is disabled."
      );
    this._tiptapEditor.commands.updateUser(t);
  }
  /**
   * A callback function that runs whenever the editor's contents change.
   *
   * @param callback The callback to execute.
   * @returns A function to remove the callback.
   */
  onChange(t) {
    const o = () => {
      t(this);
    };
    return this._tiptapEditor.on("update", o), () => {
      this._tiptapEditor.off("update", o);
    };
  }
  /**
   * A callback function that runs whenever the text cursor position or selection changes.
   *
   * @param callback The callback to execute.
   * @returns A function to remove the callback.
   */
  onSelectionChange(t) {
    const o = () => {
      t(this);
    };
    return this._tiptapEditor.on("selectionUpdate", o), () => {
      this._tiptapEditor.off("selectionUpdate", o);
    };
  }
}
function be(e = "") {
  return typeof e == "string" ? [
    {
      type: "text",
      text: e,
      styles: {}
    }
  ] : e;
}
function xt(e) {
  return typeof e == "string" ? be(e) : Array.isArray(e) ? e.flatMap((t) => typeof t == "string" ? be(t) : Qe(t) ? {
    ...t,
    content: be(t.content)
  } : te(t) ? t : {
    props: {},
    ...t,
    content: xt(t.content)
  }) : e;
}
function Kr(e, t) {
  return t.map(
    (o) => Et(e, o)
  );
}
function Et(e, t) {
  const o = {
    id: "",
    type: t.type,
    props: {},
    content: e[t.type].content === "inline" ? [] : void 0,
    children: [],
    ...t
  };
  return Object.entries(e[t.type].propSchema).forEach(
    ([i, n]) => {
      o.props[i] === void 0 && (o.props[i] = n.default);
    }
  ), {
    ...o,
    content: xt(o.content),
    children: o.children.map((i) => Et(e, i))
  };
}
function Xn(e) {
  e.id || (e.id = oe.options.generateID()), e.children && Zn(e.children);
}
function Zn(e) {
  for (const t of e)
    Xn(t);
}
export {
  ui as AudioBlock,
  Rn as BlockContainer,
  On as BlockGroup,
  vt as BlockNoteEditor,
  Le as BlockNoteSchema,
  jn as Doc,
  Ko as FileBlock,
  nn as FilePanelProsemirrorPlugin,
  on as FilePanelView,
  sn as FormattingToolbarProsemirrorPlugin,
  rn as FormattingToolbarView,
  Qo as ImageBlock,
  cn as LinkToolbarProsemirrorPlugin,
  _n as SideMenuProsemirrorPlugin,
  bn as SideMenuView,
  hn as SuggestionMenuProseMirrorPlugin,
  En as TableHandlesProsemirrorPlugin,
  xn as TableHandlesView,
  oe as UniqueID,
  I as UnreachableCaseError,
  ri as VideoBlock,
  Xn as addIdsToBlock,
  Zn as addIdsToBlocks,
  Po as addInlineContentAttributes,
  Ho as addInlineContentKeyboardShortcuts,
  Oo as addStyleAttributes,
  Ar as assertEmpty,
  si as audioBlockConfig,
  di as audioParse,
  ai as audioPropSchema,
  li as audioRender,
  ci as audioToExternalHTML,
  P as blockToNode,
  re as camelToDataKebab,
  Fr as checkBlockHasDefaultProp,
  Ri as checkBlockIsDefaultType,
  Or as checkBlockIsFileBlock,
  zr as checkBlockIsFileBlockWithPlaceholder,
  jr as checkBlockIsFileBlockWithPreview,
  Oi as checkBlockTypeHasDefaultProp,
  E as checkDefaultBlockTypeInSchema,
  Ee as contentNodeToInlineContent,
  de as createAddFileButton,
  se as createBlockSpec,
  q as createBlockSpecFromStronglyTypedTiptapNode,
  le as createDefaultFilePreview,
  ae as createExternalHTMLExporter,
  Ce as createFigureWithCaption,
  j as createFileAndCaptionWrapper,
  Hr as createInlineContentSpec,
  Do as createInlineContentSpecFromTipTapNode,
  lt as createInternalBlockSpec,
  rt as createInternalHTMLSerializer,
  Uo as createInternalInlineContentSpec,
  ut as createInternalStyleSpec,
  ue as createLinkWithCaption,
  ht as createResizeHandlesWrapper,
  z as createStronglyTypedTiptapNode,
  Ur as createStyleSpec,
  U as createStyleSpecFromTipTapMark,
  Gr as createSuggestionMenu,
  Vi as defaultBlockSchema,
  mt as defaultBlockSpecs,
  Rr as defaultInlineContentSchema,
  gt as defaultInlineContentSpecs,
  k as defaultProps,
  Vr as defaultStyleSchema,
  ft as defaultStyleSpecs,
  Fo as fileBlockConfig,
  Wo as fileParse,
  zo as filePropSchema,
  Go as fileRender,
  $o as fileToExternalHTML,
  Pr as filenameFromURL,
  $r as filterSuggestionItems,
  H as formatKeyboardShortcut,
  an as formattingToolbarPluginKey,
  Ao as getBlockFromPos,
  zn as getBlockNoteExtensions,
  dt as getBlockSchemaFromSpecs,
  Wr as getDefaultSlashMenuItems,
  pe as getDraggableBlockFromElement,
  Vo as getInlineContentParseRules,
  ct as getInlineContentSchemaFromSpecs,
  No as getParseRules,
  jo as getStyleParseRules,
  pt as getStyleSchemaFromSpecs,
  Xo as imageBlockConfig,
  Jo as imageParse,
  qo as imagePropSchema,
  Zo as imageRender,
  Yo as imageToExternalHTML,
  at as inheritedProps,
  $ as inlineContentToNodes,
  x as insertOrUpdateBlock,
  Io as isAppleOS,
  Ue as isLinkInlineContent,
  Qe as isPartialLinkInlineContent,
  Nr as isSafari,
  te as isStyledTextInlineContent,
  dn as linkToolbarPluginKey,
  Ir as locales,
  R as mergeCSSClasses,
  v as nodeToBlock,
  ot as nodeToCustomInlineContent,
  Re as parseEmbedElement,
  ce as parseFigureElement,
  Oe as parseImageElement,
  Et as partialBlockToBlockForTesting,
  Kr as partialBlocksToBlocksForTesting,
  st as propsToAttributes,
  kn as sideMenuPluginKey,
  Ro as stylePropsToAttributes,
  V as suggestionMenuPluginKey,
  et as tableContentToNodes,
  Q as tableHandlesPluginKey,
  Dr as uploadToTmpFilesDotOrg_DEV_ONLY,
  ti as videoBlockConfig,
  ii as videoParse,
  ei as videoPropSchema,
  oi as videoRender,
  ni as videoToExternalHTML,
  me as wrapInBlockStructure
};
//# sourceMappingURL=blocknote.js.map
