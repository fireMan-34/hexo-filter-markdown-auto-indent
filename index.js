const IndentStyle = "text-indent:2em;"
const IndentTag = '<span style="padding:0 1em;"></span>';

const TagStyleAttrReg = /style=["'][^"']*["']/;
const ListTagReg = /<[uo]l[^>]*>[\s\S]*?<\/[uo]l>/g;
const PTagReg = /<p[^>]*>.*<\/p>/g;
const BrTagReg = /<br\/?>/g;

const PTagHeadReg = /<p[^>]*>/;

const autoIndent = data => {
    const { content } = data;
    let PTagArray = content.match(PTagReg);
    if (!PTagArray) return data;

    const ListTagHasPTagArray = content.match(ListTagReg)?.filter(ListTag => PTagHeadReg.test(ListTag));
    if (ListTagHasPTagArray) {
        PTagArray = PTagArray.filter(PTag => !ListTagHasPTagArray.some(ListTag => ListTag.includes(PTag)));
    }

    const transformPTagArray = PTagArray.map(PTag => {
        const PTagHead = PTag.match(PTagHeadReg)[0];
        let newPTagHead;
        const styleAttrArray = PTagHead.match(TagStyleAttrReg);
        if (styleAttrArray) {
            const styleAttr = styleAttrArray[0];
            newPTagHead = PTagHead.replace(styleAttr, styleAttr.slice(0, -1) + IndentStyle + styleAttr.slice(-1));
        }
        else {
            newPTagHead = PTagHead.slice(0, -1) + ` style="${IndentStyle}">`;
        }
        return PTag.replace(PTagHead, newPTagHead).replace(BrTagReg, `<br>${IndentTag}`);
    });
    data.content = transformPTagArray.reduce((content, transformPTag, i) => content.replace(PTagArray[i], transformPTag), content);
    return data;
}
hexo.extend.filter.register('after_post_render', autoIndent, 2);