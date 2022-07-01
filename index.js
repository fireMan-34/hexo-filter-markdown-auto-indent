'use strict';

const INDENT_VALUE = hexo.config?.markdown?.indent || 2;
const INDENT_STYLE = `text-indent:${INDENT_VALUE}em;`

const INDETN_TAG = `<span class="fireman-span-indent"></span>`

const INDETN_P_TAG_CLASS_NAME = `fireman-p-indent`;

const TAG_STYLE_ATTR_REG = /style=["'][^"']*["']/;
const TAG_CLASS_ATTR_REG = /class=["'][^"']*["']/;

const LIST_TAG_REG = /<[uo]l[^>]*>[\s\S]*?<\/[uo]l>/g;
const P_TAG_REG = /<p[^>]*>.*<\/p>/g;
const BR_TAG_TEG = /<br\/?>/g;

const P_TAG_HEAD_REG = /<p[^>]*>/;

function autoIndent(data) {
    const { content } = data;
    let PTagArray = content.match(P_TAG_REG);
    if (!PTagArray) return data;

    const ListTagHasPTagArray = content.match(LIST_TAG_REG)?.filter(ListTag => P_TAG_HEAD_REG.test(ListTag));
    if (ListTagHasPTagArray) {
        PTagArray = PTagArray.filter(PTag => !ListTagHasPTagArray.some(ListTag => ListTag.includes(PTag)));
    }

    const transformPTagArray = PTagArray.map(PTag => {
        const PTagHead = PTag.match(P_TAG_HEAD_REG)[0];
        let newPTagHead;

        const classAttrArray = PTagHead.match(TAG_CLASS_ATTR_REG);
        if (classAttrArray) {
            const classAttr = classAttrArray[0];
            newPTagHead = PTagHead.replace(classAttr, classAttr.slice(0, -1) + ' ' + INDETN_P_TAG_CLASS_NAME + classAttr.slice(-1));
        }
        else {
            newPTagHead = PTagHead.slice(0, -1) + ` class="${INDETN_P_TAG_CLASS_NAME}" >`
        }

        return PTag.replace(PTagHead, newPTagHead).replace(BR_TAG_TEG, `<br>${INDETN_TAG}`);
    });
    data.content = transformPTagArray.reduce((content, transformPTag, i) => content.replace(PTagArray[i], transformPTag), content);
    return data;
}
function injectINDENT_STYLE(entry, value, to) {
    return `<style>
        .fireman-p-indent{
            text-indent:${INDENT_VALUE}em;
        }
        .fireman-span-indent{
            padding-left:${INDENT_VALUE}em;
        }
    </style >`;
}
hexo.extend.filter.register('after_post_render', autoIndent, 2);
hexo.extend.injector.register('head_end', injectINDENT_STYLE,);