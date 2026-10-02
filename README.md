# Eason-Jon · Research Pages

静态 GitHub Pages 网站，包含站点首页和 GeoScaffold 论文主页。论文页保持 [AgentVLN](https://allenxinn.github.io/AgentVLN/) 的白底学术排版，已填入论文标题、作者、机构、摘要、方法、实验结果和图表。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

- 站点首页：<http://127.0.0.1:8000/>
- 论文主页：<http://127.0.0.1:8000/GeoScaffold/>

保存文件后刷新浏览器。按 `Ctrl+C` 停止服务。

## 文件组织

```text
Eason-Jon.github.io/
├── index.html                         # 站点首页 / 项目入口
├── .nojekyll                          # 直接发布静态文件
├── README.md
└── GeoScaffold/
    ├── index.html                     # 论文内容和 HTML 表格
    └── static/
        ├── css/index.css              # 论文页和首页样式
        ├── js/index.js                # BibTeX 复制与手动复制回退
        ├── fonts/
        │   ├── noto-sans-latin.woff2
        │   └── OFL.txt                # Noto Sans 字体许可证
        ├── images/
        │   ├── favicon.svg
        │   └── paper/                 # 所有真实论文图片
        ├── papers/GeoScaffold.pdf      # 指定 main.pdf 的完整副本
        └── videos/demo.mp4            # Demos 模块使用的完整演示视频
```

页面无需构建，字体、脚本、图片、视频和 PDF 均由本仓库提供，没有对原论文或补充材料文件夹的运行时依赖。Noto Sans 拉丁字符字体通过 SIL Open Font License 分发，其他字符使用系统回退字体。

## 内容来源

内容依据相邻 `paper/` 项目中的指定版本和提供的补充视频填写：

| 页面内容 | 来源 |
| --- | --- |
| 标题、正文、摘要和报告数值 | `paper/main.pdf`，并与 `main.tex`、`sections/` 中的源文件核对 |
| 作者顺序、机构编号、通讯作者 | `paper/author_list/authors.tex`；与 `paper/arxiv/authors.tex` 一致 |
| 主结果表 | 从 `paper/main.pdf` 第 7 页直接导出的原始 Table 1 图片 |
| 推理效率 | `paper/sections/4_experiments.tex`、`figures/FIG_latency.tex` 和论文 Figure 4 |
| Demos 视频 | `/Users/yuer/Desktop/GeoScaffold_Supplementary/demo_video/demo.mp4`，原样复制到 `GeoScaffold/static/videos/demo.mp4` |

作者顺序为：**Yixuan Jiang、Wentong Li、An Liu、Zihao Xin、Fulin Tang、Cong Leng、Yang Gao、Jian Cheng**。通讯作者为 Fulin Tang，邮箱按作者文件填写。没有添加源文件中不存在的共同一作标记或作者主页链接。

Paper 按钮链接的 `GeoScaffold/static/papers/GeoScaffold.pdf` 是你指定的 `main.pdf` 的逐字节副本，原 PDF 仍为匿名稿；网页署名独立使用作者列表文件。项目中的 `GeoScaffold_arxiv.pdf` 没有被自动替换进来。

Experimental Results 直接展示论文第 7 页的原始 Table 1，保留完整表注、全部方法、观测条件、指标和原有排版，没有重新筛选或组织数据。点击表格可查看高分辨率原图。

页面中的 **81 ms/帧** 对应 RTX 4090 稳态测试。

## 图片来源与复制方式

所有页面使用的图片都放在 `GeoScaffold/static/images/paper/`。论文主要图片集中在 `paper/figures/figures_v3.pdf` 内，已经按 LaTeX 中实际使用的页码及 `trim` 参数导出为约 2400px 宽的 PNG。裁剪仅移除论文原本未使用的画布区域，不改变图表内容。

`trim` 顺序与 LaTeX 一致：左、下、右、上，单位为 PDF point。

`experimental-results-table.png` 直接从 `main.pdf` 第 7 页截取 Table 1（含原始表注），裁剪范围为 PDF 左上角坐标 `(104, 87, 508, 433)`，以 7 倍比例渲染，输出尺寸为 2828 × 2422；仅去掉表格之外的页面内容。

| 本项目图片 | `figures_v3.pdf` 页码 | LaTeX trim |
| --- | --- | --- |
| `paradigms.png` | 1 | `562 648 544 637` |
| `framework.png` | 2 | `380 595 366 580` |
| `geometric-targets.png` | 3 | `682 738 900 677` |
| `simulation.png` | 4 | `447 431 463 809` |
| `real-world.png` | 5 | `313 750 291 385` |
| `attention.png` | 6 | `575 194 717 43` |
| `simulation-more.png` | 7 | `526 74 451 42` |
| `real-world-more.png` | 8 | `285 367 315 141` |

以下两张现成 PNG 从 `paper/figures/` 原样复制：

- `fig_realworld_sr.png`：室内与室外、一般指令与几何要求较高的指令下的实机成功率。
- `latency_comparison_iclr_no8b.png`：RTX 4090 上的逐帧推理延迟。

点击页面中的图可在新标签页打开完整分辨率。原实机与仿真展示部分已替换为 Demos 视频模块，历史图片仍保留在素材目录中。

Demos 使用浏览器原生播放器，支持播放、暂停、进度拖动和全屏，手机端按 16:9 自适应显示。视频保留原始 H.264/AAC 编码，分辨率 1280 × 720、时长约 1 分 37 秒、大小约 28 MiB；不自动播放，预加载设置为元数据。禁用 JavaScript 也能播放。

## 后续修改

主要编辑 `GeoScaffold/index.html`：

- 更改论文内容时，同步维护 `<head>` 中的标题、描述、作者元数据、分享图和 BibTeX。
- 论文更新后，将新版本复制到 `static/papers/GeoScaffold.pdf`，并检查指向 PDF 页码的链接。
- 图片更新时，同步维护 `img` 的 `width`、`height`、`alt`、图注及外层全分辨率链接。
- 视频更新时，替换 `GeoScaffold/static/videos/demo.mp4`，并同步播放器的尺寸和宽高比。
- 当前 Code 按钮显示 `soon` 且禁用；源项目未提供明确的公开代码仓库地址。拿到地址后将按钮替换为真实链接。
- BibTeX 使用完整作者名单、2026 年和 `Manuscript` 标记。获得正式 arXiv 编号、DOI 或出版信息后再更新对应字段。

开启 Code 按钮的示例（将 URL 替换为真实地址）：

```html
<a class="resource-button" href="https://github.com/OWNER/REPOSITORY">Code</a>
```

视觉样式位于 `GeoScaffold/static/css/index.css`。桌面端标题和大图使用最大 1120px 内容区，正文使用最大 880px 内容区；主标题为 56px，正文为 20px。平板和手机端分别调整字号与宽度，较宽的结果表可以横向滚动。首页的独立样式位于同一文件的 `.site-index` 相关规则中。

## 发布到 GitHub Pages

目标仓库：<https://github.com/Eason-Jon/Eason-Jon.github.io>

首次初始化时，在本 README 所在的根目录执行；如果已经初始化 Git 或配置远端，跳过对应命令：

```bash
git init -b main
git remote add origin https://github.com/Eason-Jon/Eason-Jon.github.io.git
git add .
git commit -m "Add GeoScaffold research project page"
git push -u origin main
```

在仓库 **Settings → Pages → Build and deployment** 中选择：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/ (root)**

保存后在 **Actions** 查看部署状态。发布成功后的地址：

- <https://eason-jon.github.io/>
- <https://eason-jon.github.io/GeoScaffold/>

保留根目录 `.nojekyll`，路径中的 `GeoScaffold` 大小写与目录保持一致。后续提交并推送即可自动更新网站。配置细节可参考 [GitHub Pages 官方文档](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。
