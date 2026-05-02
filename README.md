# PSI MCP × Claude Code — Next.js Core Web Vitals 改善サンプル

Zenn 記事「PSI MCP × Claude Code で Core Web Vitals を改善する」の実装サンプルです。

## ブラウザで Before/After を見るショーケース

GitHub Pages: <https://liatris000.github.io/liatris-20260430-nextjs-psi-mcp/>

`index.html` 1 枚で 4 つの改善を Before/After のコード比較として並べたページです。構成:

1. ヒーロー画像 (LCP) — `<img>` → `next/image` + `priority` + `sizes`
2. フォント (FCP / LCP) — Google Fonts `<link>` → `next/font`
3. サードパーティスクリプト (TBT) — 直書き `<script>` → `next/script` `lazyOnload`
4. Tailwind CSS の purge (Speed Index) — `content` パス更新
5. `.claude/mcp.json` 設定例 (コピーボタン付き)

## セットアップ

### 1. Google Cloud API キーを発行

1. [Google Cloud Console](https://console.cloud.google.com/) → 「API とサービス」→「ライブラリ」
2. "PageSpeed Insights API" を検索して有効化
3. 「認証情報」→「認証情報を作成」→「API キー」

### 2. MCP 設定をプロジェクトに追加

`.claude/mcp.json` を Next.js プロジェクトルートに配置し、API キーを設定:

```json
{
  "mcpServers": {
    "pagespeed": {
      "command": "npx",
      "args": ["-y", "pagespeed-insights-mcp"],
      "env": {
        "PSI_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

Claude Code を再起動すると `pagespeed` ツールが有効になります。

### 3. 使い方

Claude Code のチャットで:

```
このURLのPageSpeed InsightsをモバイルとPCで取得して
https://your-site.com
```

結果の Opportunities を確認したら、影響が大きい1項目を選んで修正 → 再計測のループを回します。

## ファイル構成

| ファイル | 説明 |
|---|---|
| `.claude/mcp.json` | PSI MCP サーバー設定テンプレート |
| `components/HeroSection.tsx` | `next/image` + `priority` + `sizes` による LCP 改善例 |
| `app/layout.tsx` | `next/font` + `lazyOnload` Script による FCP・TBT 改善例 |
| `tailwind.config.js` | `content` パス設定の注意点 |

## 参考

- [ruslanlap/pagespeed-insights-mcp](https://github.com/ruslanlap/pagespeed-insights-mcp)
- [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
- [next/image](https://nextjs.org/docs/app/api-reference/components/image)
- [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- [next/script](https://nextjs.org/docs/app/api-reference/components/script)
