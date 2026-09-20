// H5「丹丹的诗」题目配置
// 所有图片路径使用占位图，后续替换即可

const PLACEHOLDER = 'assets/images/placeholder.jpg';

const SCENES = [
  {
    id: 'cover',
    type: 'cover',
    title: '当你成为小诗人',
    subtitle: '2026年是爱月捐节',
    lines: [
      '你也许听"是光"讲过很多个不同的故事。',
      '这一次，我们想邀请你走进其中一个，',
      '成为 23 万余名上过诗歌课的孩子之一。',
      '',
      '在接下来的体验中，所有选项不分对错，',
      '因为在"是光"这个小小宇宙里，',
      '一切想法都可以发生。',
      '',
      '现在，请回头找出 9 岁的自己，',
      '装好书本，背上书包。',
      '故事开始了——',
      '',
      '你叫丹丹，今年 9 岁，是湖南省一所乡村小学三年级的学生。'
    ],
    image: '',
    btnText: '开始体验'
  },
  {
    id: 'q1',
    type: 'question',
    text: '今天第二节是班主任钟老师的课，你害怕被她突然叫起来回答问题，于是努力集中注意力。可这节课，好像和往常不太一样……',
    options: [
      { text: '老师给你和同学每人发了一本诗歌本和一本诗歌读本。你听见同桌在小声嘀咕："诗歌是什么东西？要布置新的作业了吗？"', image: 'assets/images/options/q1-a.jpg' },
      { text: '老师说要带大家去教室外面的草坡上课，你心想，"欸，怎么老师今天心情这么好？"', image: 'assets/images/options/q1-b.jpg' },
      { text: '老师让大家一起读了几行很短的文字，它被叫做诗，而且是和你一样大的小朋友写的。小孩也能写诗吗？', image: 'assets/images/options/q1-c.jpg' }
    ],
    btnText: '继续'
  },
  {
    id: 'q2',
    type: 'question',
    text: '即便诗歌课有点不一样，你也没有特别在意。妈妈离开家以后，你上课就有点不能集中注意力，写作业也变得吃力，钟老师常常找你聊天。有一天，钟老师说："想到什么都可以写，不开心的事，也可以写进诗里。"于是你抱着试一试的想法，写下了：',
    options: [
      { text: '我是一棵生病的树', image: 'assets/images/options/q2-abc.jpg' },
      { text: '他们知道我生病了 / 却不来看我 / 没有人和我一起玩', image: 'assets/images/options/q2-abc.jpg' },
      { text: '春天来了 / 我却不停不停不停地 / 掉叶子', image: 'assets/images/options/q2-abc.jpg' }
    ],
    sharedImage: true,
    btnText: '继续'
  },
  {
    id: 'q3',
    type: 'question',
    text: '你一直很坚强，铅笔被同学弄断、体育课跑步摔跤、半夜感冒发烧，你都没有哭。可写这首诗时，不知道为什么，眼泪不自觉掉了下来，那一刻，你想：',
    options: [
      { text: '一定是因为我一直生病，妈妈才不愿意回家看我', image: 'assets/images/options/q3-a.jpg' },
      { text: '我不想上学读书了，好想去找妈妈', image: 'assets/images/options/q3-b.jpg' },
      { text: '妈妈在外面是不是很辛苦，我不应该给她添麻烦', image: 'assets/images/options/q3-c.jpg' }
    ],
    sharedImage: false,
    btnText: '继续'
  },
  {
    id: 'q4',
    type: 'question',
    text: '不久，你突然收到了一个电话，是妈妈打来的，她在电话里说：',
    options: [
      { text: '"你是不是生病啦，妈妈会尽量回家看你，记得要好好吃饭、按时睡觉。"', image: 'assets/images/options/q4-abc.jpg' },
      { text: '"最近在学校过得开心吗？听你们老师说最近在上诗歌课，那是什么样子的？我还没有读过诗呢。"', image: 'assets/images/options/q4-abc.jpg' },
      { text: '"老师说你的诗歌写得很好，还获得了稿费，你写了首什么样的诗？念给妈妈听听。"', image: 'assets/images/options/q4-abc.jpg' }
    ],
    sharedImage: true,
    btnText: '继续'
  },
  {
    id: 'q5',
    type: 'question',
    text: '一天，钟老师说要给一些同学颁奖。你望着窗外，觉得这事和自己没关系，却突然听到了自己的名字。钟老师叫你"小诗人"，在全班同学面前，钟老师递给你：',
    options: [
      { text: '两张漂亮的大海报，上面印着你的诗，还写了"你就是光"四个大字。钟老师说要把其中一张贴到教室外面的展示栏，让路过的人都知道，班里有位叫丹丹的小诗人。', image: 'assets/images/options/q5-a.jpg' },
      { text: '一个崭新的书包，上面印了一个颜色鲜亮的 U，和诗歌本上的图案一样，你决定明天就背着它上学。', image: 'assets/images/options/q5-b.jpg' },
      { text: '一张证书，上面还写着"你是天生的诗人，要相信自己手里本来就有光"。', image: 'assets/images/options/q5-c.jpg' }
    ],
    btnText: '继续'
  },
  {
    id: 'q6',
    type: 'question',
    text: '不知从什么时候开始，上课变得有意思了，期中考试后，你拿到了"优秀学生"的奖状。钟老师把手机借给你和妈妈视频聊天。你们只聊了很短的时间，讲讲各自的近况。把手机还给钟老师后，你想：',
    options: [
      { text: '妈妈不在时，我也要好好学习，照顾好自己，等她回来。', image: 'assets/images/options/q6-abc.jpg' },
      { text: '即便妈妈不回来，我也可以长大了去找她，照顾她。', image: 'assets/images/options/q6-abc.jpg' },
      { text: '我要写一首给妈妈的诗。', image: 'assets/images/options/q6-abc.jpg' }
    ],
    sharedImage: true,
    btnText: '继续'
  },
  {
    id: 'q7',
    type: 'question',
    text: '后来，你又一次站上讲台领奖，这次你收到了《小树和大鸟》这首诗的海报、证书和另一个书包。你问钟老师：怎么总是有奖励发？她告诉你：',
    options: [
      { text: '这些都是远方关心你的人寄来的，老师把你写的诗发给他们看，他们很喜欢，想用这些礼物鼓励你继续写诗。', image: 'assets/images/options/q7-a.jpg' },
      { text: '有很多大人读到了你的诗，觉得好像在诗里看见了自己。他们小时候也和你一样，有很想念家人的时刻。所以他们希望你可以继续把心里话写下来。', image: 'assets/images/options/q7-b.jpg' },
      { text: '因为你的感受很珍贵呀。他们想通过这些礼物告诉你，写出自己的开心和难过，是一件很棒的事情。', image: 'assets/images/options/q7-c.jpg' }
    ],
    btnText: '继续'
  },
  {
    id: 'ending',
    type: 'ending',
    title: '',
    lines: [
      '亲爱的伙伴，谢谢你每个月的支持，',
      '让丹丹可以写下自己的感受，',
      '也让丹丹的妈妈终于看见她的内心世界。',
      '',
      '《小树和大鸟》被录用那一年的六月，',
      '丹丹的妈妈终于回了一趟家。',
      '她说，读到这首诗她才意识到，',
      '丹丹总是生病背后的秘密，原来是想念。'
    ],
    image: 'assets/images/ending.jpg',
    btnText: '继续'
  },
  {
    id: 'transparency',
    type: 'info',
    title: '',
    lines: [
      '丹丹收到的诗歌本、证书和书包，',
      '以及钟老师上的每一节诗歌课，',
      '都来自许多像你这样支持着"是光"的伙伴。',
      '大家每捐赠25元，都能帮助一位"丹丹"',
      '获得一学期的诗歌课。'
    ],
    subText: '月报邮件的财务公示',
    image: 'assets/images/monthly-finance.jpg',
    qrCode: 'assets/images/qr-donation.png',
    qrLabel: '扫码了解月捐详情',
    btnText: '继续'
  },
  {
    id: 'lottery',
    type: 'lottery',
    title: '',
    lines: [
      '孩子们想把这份感谢，',
      '送给让诗歌发生的你——'
    ],
    btnText: '抽取一张孩子的明信片',
    afterText: '',
    continueBtn: '我也写一张回信',
    skipBtn: '暂时不写，回到首页',
    qrCode: 'assets/images/qr-h5-v2.png',
    qrLabel: '',
    shareText: ['欢迎截图分享', '扫码即可体验'],
    formUrl: 'https://wanghuan6.form.lingxi360.com/form/?id=453j3v&channel_code=lx1n28_4kKLKenQxdIn'
  }
];

// 明信片池（31 张孩子手写明信片，已压缩）
const POSTCARDS = [
  'assets/images/postcards/postcard-01.jpg',
  'assets/images/postcards/postcard-02.jpg',
  'assets/images/postcards/postcard-03.jpg',
  'assets/images/postcards/postcard-04.jpg',
  'assets/images/postcards/postcard-05.jpg',
  'assets/images/postcards/postcard-06.jpg',
  'assets/images/postcards/postcard-07.jpg',
  'assets/images/postcards/postcard-08.jpg',
  'assets/images/postcards/postcard-09.jpg',
  'assets/images/postcards/postcard-10.jpg',
  'assets/images/postcards/postcard-11.jpg',
  'assets/images/postcards/postcard-12.jpg',
  'assets/images/postcards/postcard-13.jpg',
  'assets/images/postcards/postcard-14.jpg',
  'assets/images/postcards/postcard-15.jpg',
  'assets/images/postcards/postcard-16.jpg',
  'assets/images/postcards/postcard-17.jpg',
  'assets/images/postcards/postcard-18.jpg',
  'assets/images/postcards/postcard-19.jpg',
  'assets/images/postcards/postcard-20.jpg',
  'assets/images/postcards/postcard-21.jpg',
  'assets/images/postcards/postcard-22.jpg',
  'assets/images/postcards/postcard-23.jpg',
  'assets/images/postcards/postcard-24.jpg',
  'assets/images/postcards/postcard-25.jpg',
  'assets/images/postcards/postcard-26.jpg',
  'assets/images/postcards/postcard-27.jpg',
  'assets/images/postcards/postcard-28.jpg',
  'assets/images/postcards/postcard-29.jpg',
  'assets/images/postcards/postcard-30.jpg',
  'assets/images/postcards/postcard-31.jpg'
];
