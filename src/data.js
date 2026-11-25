export const DATA = {
  id: 'dsh-plantar-fasciitis',
  name: '足底筋膜炎',
  prefix: 'plantar',
  label: '足底筋膜炎',
  defaultEeriness: 2,
  gain: 0.38,
  flareChance: 0.24,
  flareGain: 20,
  triggerWeight: 1.05,
  flareWeight: 0.9,
  reliefs: [
    { id: 'ball', label: '踩网球滚脚底', relief: 18, minutes: 20, calm: 6 },
    { id: 'stretch', label: '拉伸小腿', relief: 16, minutes: 25, calm: 6 },
    { id: 'shoes', label: '换双软底鞋', relief: 14, minutes: 60, calm: 4 },
  ],
  body: {
    stiff: '脚后跟有点发紧，站久了想换只脚。',
    ache: '早上下床第一步像踩在一颗小石头上；走几步才松一点，走多了又回来。',
    flare: '脚跟一落地就刺一下，只能踮着脚走；上下楼最明显。',
  },
  voice: {
    base: '起身前允许先停半秒；走路的事能推就推（「我走过去有点慢」），不用说为什么。',
    flare: '允许话说到一半先「等我站一下」；不要描述骨头或筋膜。',
  },
}
