import { visit } from 'unist-util-visit';
export default function rehypeImgCaption() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // 条件: img要素 / altが空でない / 既にfigureで包まれていない
      if (
        node.tagName !== 'img' ||
        !node.properties?.alt ||
        parent?.tagName === 'figure'
      ) {
        return;
      }
      const alt = node.properties.alt;
      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['img-figure'] },
        children: [
          node,
          {
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: alt }],
          },
        ],
      };
      // 元のimgノードをfigureに置き換え
      parent.children.splice(index, 1, figure);
    });
  };
}