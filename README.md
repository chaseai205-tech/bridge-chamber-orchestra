# bridge-chamber-orchestra

成都 Bridge 室内乐团官网项目。使用 Next.js、React 和 Tailwind CSS 构建, 无后端, 适合免费部署到 Vercel。

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

## 部署到 Vercel

将 `bridge-chamber-orchestra` 文件夹作为项目根目录导入 Vercel。默认构建命令为 `next build`, 输出由 Vercel 自动处理。
