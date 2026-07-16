# 小刘实验室官网

基于 Astro 构建的静态官网，用于展示实验方向、精选实验与最新动态。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

产物位于 `dist/`，可部署到任意静态托管服务。

## GitHub Pages

推送到 `dev` 或 `main` 分支后，GitHub Actions 会自动构建并部署。首次使用时，请在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。
