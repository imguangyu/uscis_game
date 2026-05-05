const tutorialSteps = [
  {
    key: "open",
    title: "打开 OPT 的 I-765",
    body: "从最简单的就业许可案开始。先看案情，不要急着盖章。"
  },
  {
    key: "forms",
    title: "核对表格字段",
    body: "确认签名、类别、费用、日期是否和案情匹配。"
  },
  {
    key: "evidence",
    title: "检查证据链",
    body: "把 I-20、身份材料、雇主或学校文件逐项对上。"
  },
  {
    key: "systems",
    title: "看系统记录",
    body: "系统可能会卡，也可能和纸面材料打架。"
  },
  {
    key: "decision",
    title: "做出处理动作",
    body: "批准、RFE、拒绝、系统 Hold 或升级复核，选错会堆邮件。"
  }
];

const baseCases = [
  {
    id: "MSC-26-001",
    form: "I-765",
    type: "OPT",
    applicant: "Lin Chen",
    title: "F-1 学生申请 Post-Completion OPT",
    difficulty: "Tutorial",
    correctDecision: "approve",
    urgency: "normal",
    tags: ["I-765", "OPT", "Low Risk"],
    facts: [
      ["收件日", "2026-05-01"],
      ["申请类别", "(c)(3)(B) Post-Completion OPT"],
      ["Requested start", "2026-07-01"],
      ["学校", "USC Gould School"],
      ["当前状态", "F-1 active"]
    ],
    forms: [
      ["I-765 签名", "Present"],
      ["Fee", "Paid"],
      ["Category", "(c)(3)(B)"],
      ["Mailing address", "Matches school record"],
      ["Photos", "Uploaded"]
    ],
    evidence: [
      { label: "OPT I-20", status: "ok", text: "DSO recommendation dated within 30 days." },
      { label: "Passport", status: "ok", text: "Valid through 2029." },
      { label: "I-94", status: "ok", text: "Class of admission F-1." }
    ],
    systems: [
      { label: "SEVIS", status: "ok", text: "Active. OPT recommendation visible." },
      { label: "ELIS", status: "ok", text: "No duplicate receipt." },
      { label: "Payment", status: "ok", text: "Fee settled." }
    ],
    hint: "这是教学案：表格、证据和系统都一致，最安全动作是批准。"
  },
  {
    id: "MSC-26-014",
    form: "I-765",
    type: "STEM OPT",
    applicant: "Maya Patel",
    title: "STEM OPT 延期，但 Training Plan 页缺失",
    difficulty: "Easy",
    correctDecision: "rfe",
    urgency: "normal",
    tags: ["I-765", "STEM OPT", "Missing Evidence"],
    facts: [
      ["收件日", "2026-05-03"],
      ["申请类别", "(c)(3)(C) STEM OPT Extension"],
      ["雇主", "Northstar BioSystems"],
      ["E-Verify", "Claimed"],
      ["当前 EAD", "Expires in 18 days"]
    ],
    forms: [
      ["I-765 签名", "Present"],
      ["Category", "(c)(3)(C)"],
      ["Employer name", "Northstar BioSystems"],
      ["Fee", "Paid"],
      ["I-983 Training Plan", "Page 3 missing"]
    ],
    evidence: [
      { label: "STEM degree", status: "ok", text: "Transcript uploaded." },
      { label: "I-983", status: "warn", text: "Evaluation and supervisor section not included." },
      { label: "Current EAD", status: "ok", text: "Valid card scanned." }
    ],
    systems: [
      { label: "SEVIS", status: "ok", text: "STEM recommendation posted." },
      { label: "E-Verify", status: "ok", text: "Employer number found." },
      { label: "ELIS", status: "ok", text: "Case ready for action." }
    ],
    hint: "申请条件大致成立，但关键训练计划不完整，应该先发 RFE。"
  },
  {
    id: "LIN-26-102",
    form: "I-140",
    type: "EB-2 NIW",
    applicant: "Dr. Sofia Alvarez",
    title: "NIW 研究员案，推荐信和项目影响力不足",
    difficulty: "Medium",
    correctDecision: "rfe",
    urgency: "premium",
    tags: ["I-140", "NIW", "Premium Clock"],
    facts: [
      ["收件日", "2026-05-04"],
      ["职业", "Battery materials researcher"],
      ["主张", "National importance"],
      ["Premium processing", "Yes"],
      ["客服备注", "律师每天催一次"]
    ],
    forms: [
      ["I-140 签名", "Present"],
      ["Petitioner", "Self-petition"],
      ["Classification", "EB-2 NIW"],
      ["Fee", "Paid"],
      ["ETA-9089", "Not required for NIW"]
    ],
    evidence: [
      { label: "Advanced degree", status: "ok", text: "PhD diploma uploaded." },
      { label: "Recommendation letters", status: "warn", text: "Two letters are internal only, limited independent support." },
      { label: "Endeavor impact", status: "warn", text: "Grant summaries provided, but adoption evidence is thin." }
    ],
    systems: [
      { label: "ELIS", status: "ok", text: "Premium countdown visible." },
      { label: "FDNS", status: "ok", text: "No adverse hit." },
      { label: "Duplicate check", status: "ok", text: "No matching filing." }
    ],
    hint: "复杂案别不要硬批。证据不足但可补，RFE 是稳妥动作。"
  },
  {
    id: "SRC-26-221",
    form: "I-140",
    type: "EB-1C",
    applicant: "Aster Cloud Inc.",
    title: "跨国经理案，工资系统接口宕机",
    difficulty: "Medium",
    correctDecision: "hold",
    urgency: "urgent",
    tags: ["I-140", "EB-1C", "System Incident"],
    facts: [
      ["收件日", "2026-05-02"],
      ["受益人", "Kenji Watanabe"],
      ["职位", "Operations Director"],
      ["公司", "Aster Cloud Inc."],
      ["客服备注", "Congressional inquiry forwarded"]
    ],
    forms: [
      ["I-140 签名", "Present"],
      ["Classification", "EB-1C"],
      ["Petitioner tax ID", "Present"],
      ["Fee", "Paid"],
      ["Org chart", "Uploaded"]
    ],
    evidence: [
      { label: "Foreign employment", status: "ok", text: "Payroll records for overseas affiliate uploaded." },
      { label: "US job duties", status: "ok", text: "Managerial duties described." },
      { label: "Ability to pay", status: "warn", text: "Tax return uploaded, but wage interface must confirm current payroll." }
    ],
    systems: [
      { label: "Payroll API", status: "fail", text: "Timeout. Downstream verification unavailable." },
      { label: "ELIS", status: "warn", text: "Incident banner active for employment-based queue." },
      { label: "FDNS", status: "ok", text: "No adverse hit." }
    ],
    hint: "不是证据本身缺失，而是系统核验失败。应该系统 Hold，别让锅飞到你桌上。",
    incident: true
  },
  {
    id: "IOE-26-330",
    form: "I-130",
    type: "Spouse",
    applicant: "Jordan & Amira Reed",
    title: "婚姻亲属申请，地址记录互相打架",
    difficulty: "Medium",
    correctDecision: "rfe",
    urgency: "normal",
    tags: ["I-130", "Family", "Inconsistent Record"],
    facts: [
      ["收件日", "2026-04-29"],
      ["关系", "US citizen spouse"],
      ["结婚日", "2025-11-18"],
      ["共同住址", "Claimed"],
      ["备注", "近期搬家，两套地址都出现"]
    ],
    forms: [
      ["I-130 签名", "Present"],
      ["I-130A", "Present"],
      ["Marriage certificate", "Uploaded"],
      ["Address history", "Conflict"],
      ["Fee", "Paid"]
    ],
    evidence: [
      { label: "Lease", status: "warn", text: "Petitioner listed, beneficiary not listed." },
      { label: "Bank statements", status: "ok", text: "Joint account opened three months ago." },
      { label: "Photos", status: "idle", text: "Many screenshots, limited objective evidence." }
    ],
    systems: [
      { label: "Address tool", status: "warn", text: "Two recent addresses in different states." },
      { label: "ELIS", status: "ok", text: "No duplicate filing." },
      { label: "Background", status: "ok", text: "No adverse hit." }
    ],
    hint: "不是直接拒，也不该盲批。地址矛盾可以通过 RFE 要更多共同居住证据。"
  },
  {
    id: "WAC-26-477",
    form: "I-485",
    type: "Adjustment",
    applicant: "Nora Okafor",
    title: "调整身份案，体检表缺页",
    difficulty: "Hard",
    correctDecision: "rfe",
    urgency: "normal",
    tags: ["I-485", "Medical", "Missing Page"],
    facts: [
      ["收件日", "2026-04-22"],
      ["基础申请", "Approved I-140"],
      ["排期", "Current"],
      ["面试", "Waiver considered"],
      ["备注", "律师上传了 71 页 PDF"]
    ],
    forms: [
      ["I-485 签名", "Present"],
      ["I-693", "Uploaded"],
      ["Supplement J", "Present"],
      ["Fee", "Paid"],
      ["Public charge answers", "Complete"]
    ],
    evidence: [
      { label: "Medical exam", status: "fail", text: "Civil surgeon signature page missing from upload." },
      { label: "I-140 approval", status: "ok", text: "Approval notice attached." },
      { label: "Identity", status: "ok", text: "Passport and birth certificate uploaded." }
    ],
    systems: [
      { label: "Visa bulletin", status: "ok", text: "Priority date current." },
      { label: "Biometrics", status: "ok", text: "Completed." },
      { label: "ELIS", status: "ok", text: "Ready for RFE or approval." }
    ],
    hint: "排期和基础资格没问题，但体检关键页缺失，RFE 比拒绝更合理。"
  },
  {
    id: "NBC-26-590",
    form: "N-400",
    type: "Naturalization",
    applicant: "Omar Haddad",
    title: "入籍案，连续居住时间出现断点",
    difficulty: "Hard",
    correctDecision: "escalate",
    urgency: "normal",
    tags: ["N-400", "Residence", "Officer Review"],
    facts: [
      ["收件日", "2026-04-18"],
      ["绿卡日期", "2020-09-09"],
      ["长途旅行", "221 days"],
      ["雇主", "Remote overseas assignment"],
      ["备注", "解释材料和 CBP 记录不一致"]
    ],
    forms: [
      ["N-400 签名", "Present"],
      ["Travel history", "Disclosed"],
      ["Tax transcripts", "Uploaded"],
      ["Selective service", "N/A"],
      ["Fee", "Paid"]
    ],
    evidence: [
      { label: "CBP travel data", status: "warn", text: "One return date differs from applicant timeline." },
      { label: "Tax records", status: "ok", text: "Filed as resident." },
      { label: "Employer letter", status: "warn", text: "Assignment dates are vague." }
    ],
    systems: [
      { label: "CBP", status: "warn", text: "Manual review flag." },
      { label: "ELIS", status: "ok", text: "Interview scheduling available." },
      { label: "Background", status: "ok", text: "No adverse hit." }
    ],
    hint: "这里不是简单补件。系统和本人陈述冲突，应该升级复核，准备面谈重点。"
  }
];

const decisionLabels = {
  approve: "盖章批准",
  rfe: "发 RFE",
  deny: "拒绝",
  hold: "系统 Hold",
  escalate: "升级复核"
};

const mailTemplates = [
  {
    subject: "Customer Service 转发: applicant asks for real-time status",
    body: "客户说网上状态三小时没动，问是不是被遗忘了。请在你喝水前处理。",
    urgent: false
  },
  {
    subject: "Tier 2 inquiry: attorney requesting exact officer initials",
    body: "律师要求解释为什么系统显示 Case Is Being Actively Reviewed。客服已经回了三轮。",
    urgent: false
  },
  {
    subject: "Congressional mailbox follow-up",
    body: "办公室问为什么同类案别人已经批了。请提供不超过两句话但又完全解释清楚的回复。",
    urgent: true
  },
  {
    subject: "System ticket bounced back",
    body: "IT 说没有复现，让你提供截图、时间戳、浏览器版本和一点点信仰。",
    urgent: true
  },
  {
    subject: "Expedite request forwarded again",
    body: "申请人上传了 14 份同名 PDF。客服问哪一个是最终版，你也想知道。",
    urgent: false
  }
];

const state = {
  cases: structuredClone(baseCases),
  activeCaseId: "MSC-26-001",
  activeTab: "snapshot",
  viewedTabsByCase: {},
  tutorialDone: new Set(),
  processed: [],
  correct: 0,
  decisions: 0,
  stress: 8,
  systemHealth: 100,
  day: 1,
  minutes: 8 * 60,
  mails: [],
  incidentActive: false
};

const els = {
  shiftClock: document.querySelector("#shiftClock"),
  tutorialList: document.querySelector("#tutorialList"),
  accuracyValue: document.querySelector("#accuracyValue"),
  stressMeter: document.querySelector("#stressMeter"),
  systemMeter: document.querySelector("#systemMeter"),
  backlogValue: document.querySelector("#backlogValue"),
  caseQueue: document.querySelector("#caseQueue"),
  shuffleButton: document.querySelector("#shuffleButton"),
  caseTitle: document.querySelector("#caseTitle"),
  caseTags: document.querySelector("#caseTags"),
  tabPanel: document.querySelector("#tabPanel"),
  tabButtons: document.querySelectorAll(".tab"),
  decisionDock: document.querySelector("#decisionDock"),
  outcomeContent: document.querySelector("#outcomeContent"),
  systemHeadline: document.querySelector("#systemHeadline"),
  systemCopy: document.querySelector("#systemCopy"),
  mailCount: document.querySelector("#mailCount"),
  mailStack: document.querySelector("#mailStack"),
  dailyReport: document.querySelector("#dailyReport"),
  reportBody: document.querySelector("#reportBody"),
  restartButton: document.querySelector("#restartButton")
};

function getActiveCase() {
  return state.cases.find((caseFile) => caseFile.id === state.activeCaseId);
}

function markTutorial(key) {
  state.tutorialDone.add(key);
}

function getTutorialActiveKey() {
  return tutorialSteps.find((step) => !state.tutorialDone.has(step.key))?.key ?? "decision";
}

function statusClass(status) {
  if (status === "ok") return "";
  if (status === "fail") return "fail";
  if (status === "idle") return "idle";
  return "warn";
}

function statusLabel(status) {
  if (status === "ok") return "CLEAR";
  if (status === "fail") return "BLOCK";
  if (status === "idle") return "LOW";
  return "CHECK";
}

function renderTutorial() {
  const activeKey = getTutorialActiveKey();
  els.tutorialList.innerHTML = tutorialSteps
    .map((step, index) => {
      const done = state.tutorialDone.has(step.key);
      const active = step.key === activeKey && !done;
      return `
        <li class="${done ? "done" : ""} ${active ? "active" : ""}" data-index="${index + 1}">
          <strong>${step.title}</strong>
          <p>${step.body}</p>
        </li>
      `;
    })
    .join("");
}

function renderQueue() {
  els.caseQueue.innerHTML = state.cases
    .map((caseFile) => {
      const active = caseFile.id === state.activeCaseId;
      const processed = state.processed.includes(caseFile.id);
      return `
        <button class="queue-item ${active ? "active" : ""} ${processed ? "processed" : ""}" data-case-id="${caseFile.id}" type="button">
          <strong>${caseFile.form} · ${caseFile.type}</strong>
          <span>${caseFile.id} · ${caseFile.difficulty}</span>
          <span>${processed ? "Processed" : caseFile.applicant}</span>
        </button>
      `;
    })
    .join("");
}

function renderStats() {
  const backlog = state.cases.length - state.processed.length;
  const accuracy = state.decisions === 0 ? 100 : Math.round((state.correct / state.decisions) * 100);
  els.accuracyValue.textContent = `${accuracy}%`;
  els.backlogValue.textContent = `${backlog} cases`;
  els.stressMeter.style.width = `${Math.min(100, state.stress)}%`;
  els.systemMeter.style.width = `${Math.max(0, state.systemHealth)}%`;

  const hours = Math.floor(state.minutes / 60);
  const minutes = String(state.minutes % 60).padStart(2, "0");
  els.shiftClock.textContent = `Day ${state.day} · ${String(hours).padStart(2, "0")}:${minutes}`;

  if (state.systemHealth < 45) {
    els.systemHeadline.textContent = "ELIS 低速运行";
    els.systemCopy.textContent = "系统开始像周五下午的打印机。Hold 案件会更安全，但邮件会越来越吵。";
  } else if (state.incidentActive) {
    els.systemHeadline.textContent = "就业类接口异常";
    els.systemCopy.textContent = "Payroll API timeout。客服已复制所有人，空气里有 Outlook 的味道。";
  } else {
    els.systemHeadline.textContent = "ELIS 正常运行";
    els.systemCopy.textContent = "所有模块在线。趁现在多办几个案子，暴风雨总会来的。";
  }
}

function renderCaseHeader(caseFile) {
  els.caseTitle.textContent = `${caseFile.id}: ${caseFile.title}`;
  els.caseTags.innerHTML = caseFile.tags
    .map((tag) => {
      const tone = tag.includes("Missing") || tag.includes("Inconsistent") ? "warn" : "";
      const danger = tag.includes("System") || tag.includes("Premium") ? "danger" : tone;
      return `<span class="tag ${danger}">${tag}</span>`;
    })
    .join("");
}

function renderSnapshot(caseFile) {
  return `
    <div class="document-grid">
      <article class="fact-card">
        <h3>申请人 <span class="stamp">${caseFile.difficulty}</span></h3>
        <ul class="field-list">
          <li><span>Name</span><strong>${caseFile.applicant}</strong></li>
          <li><span>Form</span><strong>${caseFile.form}</strong></li>
          <li><span>Case type</span><strong>${caseFile.type}</strong></li>
          <li><span>Urgency</span><strong>${caseFile.urgency}</strong></li>
        </ul>
      </article>
      <article class="fact-card">
        <h3>案情速览</h3>
        <ul class="field-list">
          ${caseFile.facts.map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join("")}
        </ul>
      </article>
      <article class="fact-card full">
        <h3>办案提示</h3>
        <p>${caseFile.hint}</p>
        <div class="hint-box">教学目标：不要只看标题办案。表格、证据、系统三者一致时才可以舒服地盖章。</div>
      </article>
    </div>
  `;
}

function renderForms(caseFile) {
  return `
    <div class="document-grid">
      <article class="document-card full">
        <h3>${caseFile.form} Intake Sheet <span class="stamp">FORM</span></h3>
        <ul class="field-list">
          ${caseFile.forms.map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join("")}
        </ul>
      </article>
      <article class="document-card">
        <h3>Officer Notes</h3>
        <p>表格审查先看签名、费用、类别、关键页。很多灾难不是复杂法律问题，而是一个空格。</p>
      </article>
      <article class="document-card">
        <h3>Pixel Desk Tip</h3>
        <p>如果你发现“Present”以外的词，鼠标先别冲向 Approve。让案件自己把故事说完。</p>
      </article>
    </div>
  `;
}

function renderEvidence(caseFile) {
  return `
    <div class="document-card full">
      <h3>Evidence Checklist <span class="stamp">SCAN</span></h3>
      ${caseFile.evidence
        .map(
          (item) => `
            <div class="check-row">
              <span class="status ${statusClass(item.status)}">${statusLabel(item.status)}</span>
              <div>
                <strong>${item.label}</strong>
                <p>${item.text}</p>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSystems(caseFile) {
  return `
    <div>
      <h3>Government Systems Console <span class="stamp">CTRL</span></h3>
      <p>这里模拟内部系统。它有时帮你办案，有时负责制造剧情。</p>
      <div class="system-grid">
        ${caseFile.systems
          .map(
            (item) => `
              <article class="system-chip">
                <strong>${item.label}</strong>
                <span class="status ${statusClass(item.status)}">${statusLabel(item.status)}</span>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="hint-box">系统健康：${state.systemHealth}%。系统异常案通常不适合直接批准或拒绝。</div>
    </div>
  `;
}

function renderTabPanel() {
  const caseFile = getActiveCase();
  const renderers = {
    snapshot: renderSnapshot,
    forms: renderForms,
    evidence: renderEvidence,
    systems: renderSystems
  };
  els.tabPanel.innerHTML = renderers[state.activeTab](caseFile);
}

function renderTabs() {
  els.tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.activeTab);
  });
}

function renderMails() {
  els.mailCount.textContent = state.mails.length;
  if (state.mails.length === 0) {
    els.mailStack.innerHTML = `
      <article class="mail">
        <strong>Inbox Zero?</strong>
        <p>这只是游戏刚开始。请珍惜这 12 秒。</p>
      </article>
    `;
    return;
  }

  els.mailStack.innerHTML = state.mails
    .slice(0, 8)
    .map(
      (mail) => `
        <article class="mail ${mail.urgent ? "urgent" : ""}">
          <strong>${mail.subject}</strong>
          <p>${mail.body}</p>
        </article>
      `
    )
    .join("");
}

function renderOutcome(message, tone = "neutral") {
  const className = tone === "good" ? "outcome-good" : tone === "bad" ? "outcome-bad" : "outcome-neutral";
  els.outcomeContent.innerHTML = `
    <h3 class="${className}">${message.title}</h3>
    <p>${message.body}</p>
  `;
}

function renderAll() {
  const caseFile = getActiveCase();
  renderTutorial();
  renderQueue();
  renderStats();
  renderCaseHeader(caseFile);
  renderTabs();
  renderTabPanel();
  renderMails();
}

function addMail(count = 1, caseFile = getActiveCase(), urgentBoost = false) {
  for (let index = 0; index < count; index += 1) {
    const template = mailTemplates[(state.mails.length + index) % mailTemplates.length];
    state.mails.unshift({
      subject: template.subject,
      body: `${caseFile.id}: ${template.body}`,
      urgent: urgentBoost || template.urgent
    });
  }
}

function setActiveCase(caseId) {
  state.activeCaseId = caseId;
  state.activeTab = "snapshot";
  state.viewedTabsByCase[caseId] ??= new Set(["snapshot"]);
  markTutorial("open");
  renderOutcome(
    {
      title: "案件已打开",
      body: "先读案情，再去表格、证据和系统页。办案桌不喜欢极速盲盒。"
    },
    "neutral"
  );
  renderAll();
}

function nextUnprocessedCase() {
  return state.cases.find((caseFile) => !state.processed.includes(caseFile.id));
}

function advanceClock(minutes) {
  state.minutes += minutes;
  if (state.minutes >= 17 * 60) {
    state.day += 1;
    state.minutes = 8 * 60 + (state.minutes - 17 * 60);
  }
}

function processDecision(decision) {
  const caseFile = getActiveCase();
  if (state.processed.includes(caseFile.id)) {
    renderOutcome(
      {
        title: "这个案子已经处理过",
        body: "纸面文件已经被你盖过章了。去队列里选择下一个还没处理的案子。"
      },
      "neutral"
    );
    return;
  }

  markTutorial("decision");
  const isCorrect = decision === caseFile.correctDecision;
  state.decisions += 1;
  if (isCorrect) {
    state.correct += 1;
    state.stress = Math.max(0, state.stress - 6);
    state.mails = state.mails.slice(0, Math.max(0, state.mails.length - 1));
  } else {
    state.stress = Math.min(100, state.stress + 18);
    addMail(caseFile.urgency === "premium" || caseFile.urgency === "urgent" ? 3 : 2, caseFile, true);
  }

  if (caseFile.incident) {
    state.incidentActive = true;
    state.systemHealth = Math.max(18, state.systemHealth - 38);
    addMail(2, caseFile, true);
  } else {
    state.systemHealth = Math.max(0, state.systemHealth - (isCorrect ? 4 : 9));
  }

  if (state.systemHealth < 45 && !isCorrect) {
    addMail(1, caseFile, true);
  }

  state.processed.push(caseFile.id);
  advanceClock(isCorrect ? 34 : 51);

  const expected = decisionLabels[caseFile.correctDecision];
  const picked = decisionLabels[decision];
  renderOutcome(
    isCorrect
      ? {
          title: `正确处理：${picked}`,
          body: "案件顺利离开你的工位。客服邮箱少了一封，世界短暂恢复秩序。"
        }
      : {
          title: `处理有风险：你选了 ${picked}`,
          body: `本案更合理的动作是 ${expected}。客服开始转发邮件，压力条获得了非常不必要的成长。`
        },
    isCorrect ? "good" : "bad"
  );

  const upcoming = nextUnprocessedCase();
  if (upcoming) {
    state.activeCaseId = upcoming.id;
    state.activeTab = "snapshot";
    state.viewedTabsByCase[upcoming.id] ??= new Set(["snapshot"]);
  } else {
    showDailyReport();
  }

  renderAll();
}

function showDailyReport() {
  const accuracy = state.decisions === 0 ? 100 : Math.round((state.correct / state.decisions) * 100);
  const title =
    accuracy >= 86
      ? "资深办案像素官"
      : accuracy >= 65
        ? "合格但邮箱很吵"
        : "Outlook 风暴中心";
  els.reportBody.innerHTML = `
    <p>你完成了今天的模拟值班。此游戏完全虚构，不构成法律建议，也不代表任何真实机构流程。</p>
    <ul>
      <li><strong>评级：</strong>${title}</li>
      <li><strong>处理案件：</strong>${state.decisions}</li>
      <li><strong>准确率：</strong>${accuracy}%</li>
      <li><strong>剩余压力：</strong>${state.stress}%</li>
      <li><strong>未读转发：</strong>${state.mails.length}</li>
    </ul>
  `;
  els.dailyReport.classList.remove("hidden");
}

function shufflePressure() {
  const caseFile = getActiveCase();
  addMail(3, caseFile, state.systemHealth < 55);
  state.stress = Math.min(100, state.stress + 9);
  advanceClock(8);
  renderOutcome(
    {
      title: "客服邮件暴击",
      body: "三封邮件被转发到你桌上。没有新证据，只有更多问号。"
    },
    "bad"
  );
  renderAll();
}

function resetGame() {
  state.cases = structuredClone(baseCases);
  state.activeCaseId = "MSC-26-001";
  state.activeTab = "snapshot";
  state.viewedTabsByCase = { "MSC-26-001": new Set(["snapshot"]) };
  state.tutorialDone = new Set(["open"]);
  state.processed = [];
  state.correct = 0;
  state.decisions = 0;
  state.stress = 8;
  state.systemHealth = 100;
  state.day = 1;
  state.minutes = 8 * 60;
  state.mails = [];
  state.incidentActive = false;
  els.dailyReport.classList.add("hidden");
  renderOutcome(
    {
      title: "新班次开始",
      body: "第一个案子是 I-765 OPT 教学案。稳住，我们先让它把规则讲清楚。"
    },
    "neutral"
  );
  renderAll();
}

els.caseQueue.addEventListener("click", (event) => {
  const button = event.target.closest("[data-case-id]");
  if (!button) return;
  setActiveCase(button.dataset.caseId);
});

els.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const caseFile = getActiveCase();
    state.activeTab = button.dataset.tab;
    state.viewedTabsByCase[caseFile.id] ??= new Set();
    state.viewedTabsByCase[caseFile.id].add(state.activeTab);
    if (state.activeTab === "forms") markTutorial("forms");
    if (state.activeTab === "evidence") markTutorial("evidence");
    if (state.activeTab === "systems") markTutorial("systems");
    renderAll();
  });
});

els.decisionDock.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision]");
  if (!button) return;
  processDecision(button.dataset.decision);
});

els.shuffleButton.addEventListener("click", shufflePressure);
els.restartButton.addEventListener("click", resetGame);

resetGame();
