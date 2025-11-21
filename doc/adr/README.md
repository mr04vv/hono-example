# Architecture Decision Records (ADR)

このディレクトリには、プロジェクトにおける重要なアーキテクチャの決定を記録したADR（Architecture Decision Records）を保管しています。

## ADRとは

ADRは、プロジェクトにおける重要な技術的・アーキテクチャ的な決定を記録する文書です。以下の情報を含みます：

- 決定が必要になった背景（コンテキスト）
- どのような決定を下したか
- その決定によって得られる結果（利点と欠点）

## ADRの作成方法

1. `template.md`をコピーして新しいファイルを作成
2. ファイル名は`[番号]-[タイトル].md`の形式（例：`002-select-database.md`）
3. 番号は既存のADRの続き番号を使用
4. テンプレートの各セクションを埋める
5. チームでレビューし、合意を得る
6. ステータスを「採用」に更新してマージ

## ADRを書くべき決定

以下のような決定はADRとして記録することを推奨します：

- 使用する技術スタックやフレームワークの選定
- アーキテクチャパターンの選択
- データベース設計の重要な決定
- セキュリティに関する方針
- パフォーマンスに影響する設計決定
- 外部サービスやライブラリの選定

## ADRの一覧

- [ADR-001: ADRの導入](./001-introduce-adr.md)

## 参考リンク

- [Architecture Decision Records (ADR)](https://adr.github.io/)
- [Documenting Architecture Decisions by Michael Nygard](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
