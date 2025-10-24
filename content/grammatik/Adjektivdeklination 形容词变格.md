---
title: "Adjektivdeklination 形容词变格"
slug: adjektivdeklination-形容词变格
draft: false
---

<!-- source: https://www.notion.so/Adjektivdeklination-166f21c3ea5380e59527fdf9629029f5 -->

# Adjektivdeklination 形容词变格

### 在不定冠词和物主代词后的变格

 | der | das | die | die(Pl.)
--- | --- | --- | --- | ---
Nominativ | ein neu<u>er</u> Hut | ein neu<u>es</u> Kleid | eine neu<u>e</u> Hose | die neu<u>en</u> Hüte
Akkusativ | einen neu<u>en</u> Hut | ein neu<u>es</u> Kleid | eine neu<u>e</u> Hose | die neu<u>en</u> Hüte
Dativ | einem neu<u>en</u> Hut | einem neu<u>en</u> Kleid | einer neu<u>en</u> Hose | die neu<u>en</u> Hüte

### 在定冠词后的变格

 | der | das | die | die(Pl.)
--- | --- | --- | --- | ---
Nominativ | der neu<u>e</u> Hut | das neu<u>e</u> Kleid | die neu<u>e</u> Hose | die neu<u>en</u> Hüte
Akkusativ | den neu<u>en</u> Hut | das neu<u>e</u> Kleid | die neu<u>e</u> Hose | die neu<u>en</u> Hüte
Dativ | dem neu<u>en</u> Hut | dem neu<u>en</u> Kleid | der neu<u>en</u> Hose | die neu<u>en</u> Hüte

### 在零冠词后的变格

 | der | das | die | die(Pl.)
--- | --- | --- | --- | ---
Nominativ | grün<u>er</u> Tee | warm<u>es</u> Wasser | kalt<u>e</u> Milch | hoh<u>e</u> Preise
Akkusativ | grün<u>en</u> Tee | warm<u>es</u> Wasser | kalt<u>e</u> Milch | hoh<u>e</u> Preise
Dativ | grünem Tee | warm<u>em</u> Wasser | kalt<u>er</u> Milch | hoh<u>en</u> Preise

```mermaid
flowchart LR
  A((形容词作定语<br/>词尾变格))
  A --> B{是否零冠词?}

  B -- 是 --> C[零冠词（强变化）<br/>按性/数/格决定词尾]
  B -- 否 --> D[非零冠词]

  D --> E[Dat 或 复数：<br/>全为 -en]:::x
  D --> NA{{N / A}}

  NA --> F[阴性名词：<br/>全为 -e]:::f

  NA --> N[N（主格）]
  N --> N1[定冠词：阳 -e]:::m
  N --> N2[定冠词：中 -e]:::n
  N --> N3[其他限定词：<br/>随性/格（混/强）]:::x

  NA --> A_[A（宾格）]
  A_ --> A1[阳性：全为 -en]:::m
  A_ --> A2[中性：同 N 规则]
  A2 --> N2
  A2 --> N3

  classDef m fill:#e8f1ff,stroke:#1e88e5,color:#1e88e5,stroke-width:1px;
  classDef n fill:#e8f5ea,stroke:#2e7d32,color:#2e7d32,stroke-width:1px;
  classDef f fill:#ffebee,stroke:#d32f2f,color:#d32f2f,stroke-width:1px;
  classDef x fill:#f5f5f5,stroke:#bdbdbd,color:#424242,stroke-width:1px;

  style A fill:#ffffff,stroke:#616161,stroke-width:1px,color:#212121
  linkStyle default stroke:#9e9e9e,stroke-width:1px
```

![手写笔记](/assets/Screenshot_2025-05-02_at_10.56.04_AM.png)
