export const labs = [
  { icon: '↗', title: '金融实验室', description: '用历史数据检验交易假设，研究波动、趋势、高股息与 ETF。', tags: ['做T实验', 'ETF分析', '趋势研究'], tone: 'blue' },
  { icon: '微', title: '微信生态实验室', description: '记录公众号、OAuth 与微信支付从接入到上线的真实路径。', tags: ['Native Pay', 'JSAPI Pay', 'OAuth'], tone: 'green' },
  { icon: '</>', title: '技术实验室', description: '记录数据采集、系统集成、自动化运行与工程化实践中的真实探索。', tags: ['TdxQuant', 'Python', '系统集成'], tone: 'orange', href: 'https://docs.xiaoliulab.com/lab-technology/' },
  { icon: '⌁', title: '工具与开放能力', description: '把重复工作变成简单工具，让实验数据和能力更容易使用。', tags: ['规划中', '持续开放'], tone: 'purple' },
];
export const experiments = [
  { category: '技术实验室', title: 'TdxQuant 行情服务', description: '从通达信终端与 Python 环境搭建，到行情调用和 Flask 工程化封装。', status: '专题已发布', updated: '2026-07-19', icon: 'TQ', href: 'https://docs.xiaoliulab.com/lab-technology/tdxquant/installation' },
  { category: '金融实验室', title: '历史波动区间预测', description: '基于历史波动数据观察未来区间，持续记录预测误差与适用边界。', status: '持续实验', updated: '2026-07-12', icon: '⌁' },
  { category: '金融实验室', title: '做T实验室', description: '不预设结论，用数据复盘日内交易策略的成本、胜率和实际收益。', status: '持续实验', updated: '2026-07-08', icon: 'T' },
  { category: '微信生态', title: '微信 Native Pay', description: '从下单、二维码到回调验签，记录可复现的支付接入全过程。', status: '已验证', updated: '2026-06-26', icon: '¥' },
  { category: '微信生态', title: '微信 JSAPI Pay', description: '梳理公众号内支付的授权链路、常见问题和生产验证结果。', status: '已验证', updated: '2026-06-18', icon: '微' },
  { category: '金融实验室', title: 'ETF 数据分析', description: '追踪 ETF 估值、成交与波动，让投资观察有连续的数据依据。', status: '数据更新中', updated: '2026-06-10', icon: '▥' },
  { category: '软件开发', title: 'Quarkus 服务实践', description: '验证云原生 Java 服务的启动效率、工程结构与部署体验。', status: '整理中', updated: '2026-05-29', icon: 'Q' },
];
export const updates = [
  { date: '07.19', year: '2026', type: '新专题', title: 'TdxQuant 技术实验专题发布', description: '新增环境安装、基础行情调用与 Flask 行情服务封装三篇实践文档。', href: 'https://docs.xiaoliulab.com/lab-technology/' },
  { date: '07.12', year: '2026', type: '实验更新', title: '历史波动区间预测：新增误差对照', description: '补充近期样本，记录预测区间与真实走势的偏差。' },
  { date: '07.08', year: '2026', type: '数据更新', title: '做T实验室完成六月数据复盘', description: '加入交易成本后重新计算净收益和策略胜率。' },
  { date: '06.26', year: '2026', type: '新文档', title: '微信 Native Pay 接入记录发布', description: '完整记录下单、回调与常见错误处理流程。' },
  { date: '06.18', year: '2026', type: '优化', title: 'JSAPI Pay 示例完成生产验证', description: '更新授权目录配置和支付结果确认方案。' },
  { date: '06.10', year: '2026', type: '新实验', title: 'ETF 数据分析开始记录', description: '建立首批 ETF 观察指标与定期更新机制。' },
];
