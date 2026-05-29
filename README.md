# bridge-chamber-orchestra

成都 Bridge 室内乐团官网项目。使用 Next.js、React 和 Tailwind CSS 构建, 无后端, 适合静态部署到 Cloudflare Pages。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看。

如果当前电脑没有 npm, 可以用管理员 PowerShell 运行:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\install-node-lts.ps1
```

安装完成后关闭并重新打开 PowerShell, 再执行 `npm install` 和 `npm run dev`。

## 静态构建

```bash
npm run build
```

构建成功后会生成 `out` 文件夹。该目录是纯静态站点输出, 可以直接部署到 Cloudflare Pages。

## 内容维护

主要文本集中在 `data/site.ts`。页面会从该文件读取导航、简介、招募要求、活动内容和联系方式。

图片资源位于 `public/images`:

- `logo-red.jpg`
- `logo-black.png`
- `xiaohongshu-qrcode.jpg`
- `wechat-qrcode.jpg`
- `concert-1.jpg` 到 `concert-3.jpg`
- `rehearsal-1.jpg` 到 `rehearsal-3.jpg`

招募报名按钮链接为 WPS 表单:

https://f.kdocs.cn/g/yQryRLLE/

## 部署到 Cloudflare Pages

在 Cloudflare Pages 后台创建项目并连接 GitHub 仓库后, 使用以下设置:

- Framework preset: `None` 或手动配置
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Environment variables: 不需要应用环境变量

如果 Cloudflare Pages 后台提供 `Next.js (Static HTML Export)` 预设, 也可以选择该预设, 但仍需确认输出目录为 `out`。

项目已通过 `next.config.mjs` 配置为静态导出:

- `output: "export"`
- `images.unoptimized: true`

项目包含 `.node-version`, 建议 Cloudflare Pages 构建时使用 Node.js 22。
