import Image from '@tiptap/extension-image';
import { Node, textblockTypeInputRule } from '@tiptap/core';

export const UpdatedImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null
      },
      height: {
        default: null
      },
      caption: {
        default: null
      }
    };
  },
});


export const Caption = Node.create({
  name: 'caption',

  group: 'block',

  content: 'text*',

  toDOM: () => ['figcaption', 0],

  parseDOM: [{ tag: 'figcaption' }],

  inputRules({ type }: any) {
    return [textblockTypeInputRule({find: /^---$/, type})];
  },
});
