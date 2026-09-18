// 抽奖逻辑
function drawPostcard() {
  const index = Math.floor(Math.random() * POSTCARDS.length);
  const image = POSTCARDS[index];

  // 占位图时期不显示具体署名，后续替换为真实署名
  const captions = [
    '一位小诗人写给你的感谢',
    '来自远方的问候',
    '孩子手写的诗与话',
    '一张从山里寄出的明信片',
    '谢谢你让诗发生'
  ];

  return {
    image: image,
    caption: captions[index % captions.length]
  };
}
