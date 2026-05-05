# CASELOAD: USCIS Officer Simulator

一个零依赖网页版小游戏原型，主题是模拟虚构的 USCIS officer 办案工位。

部署地址：

```text
https://imguangyu.github.io/uscis_game/
```

## 运行

直接打开 `index.html`，或在目录里启动本地静态服务器：

```bash
python3 -m http.server 5173
```

然后访问 `http://localhost:5173`。

## 当前玩法

- 新手教学从简单的 `I-765 OPT` 开始。
- 案件会逐步变复杂，包括 `I-765 STEM OPT`、`I-140 NIW`、`I-140 EB-1C`、`I-130`、`I-485`、`N-400`。
- 玩家需要阅读案情、表格、证据和系统记录，再选择批准、RFE、拒绝、系统 Hold 或升级复核。
- 选错会提高压力，并触发客服转发邮件。
- 系统事故会降低系统健康度，并制造更多客服压力。

## 后续可扩展方向

- 加入倒计时和每日 KPI。
- 把案件数据拆成 JSON，方便持续添加不同表格和问题。
- 增加“邮件回复”小玩法，让玩家选择客服回复模板。
- 增加像素人物和办公室事件，例如 supervisor review、printer jam、policy update。
- 增加更多教学章节，从 family-based 到 employment-based 再到 naturalization。
