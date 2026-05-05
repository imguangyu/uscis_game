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

const rotations = [
  {
    id: "training",
    label: "新手教学",
    title: "Training Bay: I-765 OPT",
    copy: "第一轮只教基本审案手感。完成后会解锁真正的工位轮岗。",
    caseIds: ["MSC-26-001"],
    minAccuracy: 0,
    maxStress: 100,
    kpi: "Learn"
  },
  {
    id: "ead",
    label: "轮岗 1",
    title: "EAD Desk: OPT / STEM / TPS",
    copy: "从这里开始不再手把手。你要在 EAD 队列里处理缺页、迟交和系统备注。",
    caseIds: ["MSC-26-014", "YSC-26-043", "IOE-26-088"],
    minAccuracy: 70,
    maxStress: 65,
    kpi: "3 EAD"
  },
  {
    id: "employment",
    label: "轮岗 2",
    title: "Employment-Based Desk",
    copy: "I-140 和 I-129 开始堆上来。Premium clock、ability to pay、系统接口都会一起吵。",
    caseIds: ["LIN-26-102", "SRC-26-221", "WAC-26-248", "LIN-26-279"],
    minAccuracy: 75,
    maxStress: 72,
    kpi: "EB"
  },
  {
    id: "mixed",
    label: "轮岗 3",
    title: "Mixed Benefits Queue",
    copy: "家庭、调整身份和旅行证混在一个队列。现在你要判断是缺证据，还是事实本身有冲突。",
    caseIds: ["IOE-26-330", "WAC-26-477", "NBC-26-512"],
    minAccuracy: 75,
    maxStress: 78,
    kpi: "Mixed"
  },
  {
    id: "chaos",
    label: "最终轮岗",
    title: "Adjudication Chaos Shift",
    copy: "自然化、I-751、系统重复记录和 asylum clock 一起出现。欢迎来到真正的 Outlook 天气系统。",
    caseIds: ["NBC-26-590", "EAC-26-711", "IOE-26-904", "MSC-26-955"],
    minAccuracy: 80,
    maxStress: 85,
    kpi: "Senior"
  }
];

const policyMemos = [
  {
    title: "Premium Clock Audit",
    copy: "Premium processing 案件要求动作可解释、时间可追踪。误判会引发更多催办。",
    appliesTo: ["premium", "I-140", "I-129"],
    effect: "命中就业类或 premium 案：正确 +2 声誉，错误 +8 压力。"
  },
  {
    title: "System Outage Protocol",
    copy: "系统接口异常时，先保护记录完整性。不要把系统缺口当成实体资格结论。",
    appliesTo: ["System Incident", "ELIS", "I-90", "hold"],
    effect: "命中系统异常案：正确 +3 声誉，错误额外触发 IT 邮件。"
  },
  {
    title: "Family Evidence Consistency",
    copy: "家庭类案不只看材料数量，要看地址、时间线和客观记录是否互相支持。",
    appliesTo: ["I-130", "I-751", "Family"],
    effect: "命中家庭类案：正确可清一封客服邮件。"
  },
  {
    title: "Humanitarian Expedite Filter",
    copy: "加急请求要看紧急性和证明材料。情绪很真实，但证据仍然要落地。",
    appliesTo: ["I-131", "urgent", "Expedite"],
    effect: "命中加急案：错误会增加 2 封催办邮件。"
  },
  {
    title: "Naturalization Interview Flag",
    copy: "N-400 的旅行记录冲突通常需要面谈重点或复核，而不是在纸面上硬判。",
    appliesTo: ["N-400", "Residence", "Officer Review"],
    effect: "命中入籍案：升级复核正确时 +4 声誉。"
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
    id: "YSC-26-043",
    form: "I-765",
    type: "Initial OPT",
    applicant: "Ethan Wu",
    title: "初始 OPT 申请，DSO 推荐窗口过期",
    difficulty: "Easy",
    correctDecision: "deny",
    urgency: "normal",
    tags: ["I-765", "OPT", "Late Filing"],
    facts: [
      ["收件日", "2026-05-04"],
      ["申请类别", "(c)(3)(B) Post-Completion OPT"],
      ["DSO recommendation", "2026-03-18"],
      ["Requested start", "2026-06-15"],
      ["客服备注", "学生说毕业典礼太忙忘记提交"]
    ],
    forms: [
      ["I-765 签名", "Present"],
      ["Category", "(c)(3)(B)"],
      ["Fee", "Paid"],
      ["School code", "Matches SEVIS"],
      ["Explanation letter", "Uploaded"]
    ],
    evidence: [
      { label: "OPT I-20", status: "fail", text: "Recommendation is outside the filing window." },
      { label: "Passport", status: "ok", text: "Valid." },
      { label: "I-94", status: "ok", text: "F-1 record available." }
    ],
    systems: [
      { label: "SEVIS", status: "warn", text: "Recommendation date does not align with receipt date." },
      { label: "ELIS", status: "ok", text: "No duplicate receipt." },
      { label: "Payment", status: "ok", text: "Fee settled." }
    ],
    hint: "这不是缺一个文件可以补的问题，而是关键时限已经错过。这里更像拒绝。"
  },
  {
    id: "IOE-26-088",
    form: "I-765",
    type: "TPS EAD",
    applicant: "Ana Morales",
    title: "TPS EAD 续卡，自动延期备注和照片缺失",
    difficulty: "Easy",
    correctDecision: "rfe",
    urgency: "urgent",
    tags: ["I-765", "TPS", "Expedite"],
    facts: [
      ["收件日", "2026-05-05"],
      ["申请类别", "(c)(19) TPS Pending"],
      ["当前 EAD", "Auto-extension claimed"],
      ["加急理由", "Job start in 9 days"],
      ["客服备注", "Employer called twice"]
    ],
    forms: [
      ["I-765 签名", "Present"],
      ["Category", "(c)(19)"],
      ["Fee waiver", "Approved"],
      ["Photos", "Missing"],
      ["TPS receipt", "Uploaded"]
    ],
    evidence: [
      { label: "TPS receipt", status: "ok", text: "Pending TPS re-registration receipt found." },
      { label: "Photos", status: "fail", text: "No passport photos uploaded." },
      { label: "Expedite proof", status: "warn", text: "Offer letter included, start date confirmed." }
    ],
    systems: [
      { label: "TPS module", status: "ok", text: "Country designation active in this fictional build." },
      { label: "ELIS", status: "ok", text: "Ready for evidence action." },
      { label: "Customer service", status: "warn", text: "Expedite inquiry open." }
    ],
    hint: "加急理由不能替代缺失照片。先 RFE，别被催办节奏牵着走。"
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
    id: "WAC-26-248",
    form: "I-129",
    type: "H-1B",
    applicant: "HelioCart Analytics",
    title: "H-1B specialty occupation，LCA 工资等级冲突",
    difficulty: "Medium",
    correctDecision: "rfe",
    urgency: "premium",
    tags: ["I-129", "H-1B", "LCA Mismatch"],
    facts: [
      ["收件日", "2026-05-01"],
      ["职位", "Data Systems Analyst"],
      ["LCA wage level", "Level I"],
      ["职位描述", "Architecture ownership claimed"],
      ["Premium processing", "Yes"]
    ],
    forms: [
      ["I-129 签名", "Present"],
      ["H supplement", "Present"],
      ["LCA", "Certified"],
      ["Wage level explanation", "Thin"],
      ["Fee", "Paid"]
    ],
    evidence: [
      { label: "Degree requirement", status: "ok", text: "Requires quantitative bachelor's degree." },
      { label: "Job duties", status: "warn", text: "Senior duties conflict with Level I wage." },
      { label: "Client letter", status: "idle", text: "Internal project, no client letter needed." }
    ],
    systems: [
      { label: "LCA checker", status: "warn", text: "SOC and wage level require officer review." },
      { label: "ELIS", status: "ok", text: "Premium clock visible." },
      { label: "Fraud profile", status: "ok", text: "No adverse pattern." }
    ],
    hint: "不是直接拒，矛盾点可以补充解释。RFE 要求职位职责和工资等级说明。"
  },
  {
    id: "LIN-26-279",
    form: "I-140",
    type: "EB-3 PERM",
    applicant: "Bright Fork Kitchens",
    title: "EB-3 PERM 案，劳工证有效期已过",
    difficulty: "Medium",
    correctDecision: "deny",
    urgency: "normal",
    tags: ["I-140", "EB-3", "Expired PERM"],
    facts: [
      ["收件日", "2026-05-04"],
      ["职位", "Sous Chef"],
      ["PERM certified", "2025-10-12"],
      ["I-140 filed", "2026-05-04"],
      ["律师备注", "Courier delay"]
    ],
    forms: [
      ["I-140 签名", "Present"],
      ["Classification", "EB-3 Skilled Worker"],
      ["ETA-9089", "Expired at filing"],
      ["Ability to pay", "Tax return uploaded"],
      ["Fee", "Paid"]
    ],
    evidence: [
      { label: "PERM", status: "fail", text: "Certification validity expired before filing date." },
      { label: "Tax return", status: "ok", text: "Ability-to-pay evidence present." },
      { label: "Experience letters", status: "ok", text: "Beneficiary appears qualified." }
    ],
    systems: [
      { label: "PERM validation", status: "fail", text: "Certification date outside valid filing window." },
      { label: "ELIS", status: "ok", text: "Case may be actioned." },
      { label: "Duplicate check", status: "ok", text: "No duplicate filing." }
    ],
    hint: "基础证据再漂亮，也救不了过期的劳工证。这里更像拒绝。"
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
    id: "NBC-26-512",
    form: "I-131",
    type: "Advance Parole",
    applicant: "Priya Nair",
    title: "旅行证加急，医院证明和旅行日期不匹配",
    difficulty: "Hard",
    correctDecision: "rfe",
    urgency: "urgent",
    tags: ["I-131", "Expedite", "Humanitarian"],
    facts: [
      ["收件日", "2026-05-05"],
      ["基础申请", "Pending I-485"],
      ["旅行日期", "2026-05-12"],
      ["加急理由", "Family medical emergency"],
      ["客服备注", "三封同标题邮件"]
    ],
    forms: [
      ["I-131 签名", "Present"],
      ["Fee", "Paid"],
      ["Travel dates", "Listed"],
      ["Emergency contact", "Present"],
      ["Translation", "Missing"]
    ],
    evidence: [
      { label: "Hospital letter", status: "warn", text: "Letter is untranslated and date appears after requested travel." },
      { label: "I-485 receipt", status: "ok", text: "Pending adjustment receipt uploaded." },
      { label: "Flight itinerary", status: "idle", text: "Reservation screenshot only." }
    ],
    systems: [
      { label: "ELIS", status: "ok", text: "Expedite queue marker active." },
      { label: "Biometrics", status: "ok", text: "Completed." },
      { label: "Customer service", status: "warn", text: "Multiple inquiries open." }
    ],
    hint: "紧急不等于证据充分。要求翻译、日期解释和更清楚的急迫性证据。"
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
  },
  {
    id: "EAC-26-711",
    form: "I-751",
    type: "Waiver",
    applicant: "Marisol Vega",
    title: "解除条件绿卡，离婚 waiver 缺最终判决",
    difficulty: "Hard",
    correctDecision: "rfe",
    urgency: "normal",
    tags: ["I-751", "Family", "Waiver"],
    facts: [
      ["收件日", "2026-04-25"],
      ["申请类型", "Divorce waiver"],
      ["婚姻结束", "Pending divorce"],
      ["共同财务", "Some records"],
      ["备注", "申请人请求免面谈"]
    ],
    forms: [
      ["I-751 签名", "Present"],
      ["Waiver basis", "Divorce checked"],
      ["Divorce decree", "Not final"],
      ["Fee", "Paid"],
      ["Address history", "Complete"]
    ],
    evidence: [
      { label: "Joint lease", status: "ok", text: "Two years of lease records." },
      { label: "Bank records", status: "warn", text: "Joint account closed soon after marriage." },
      { label: "Divorce decree", status: "fail", text: "Only filing receipt, no final decree." }
    ],
    systems: [
      { label: "ELIS", status: "ok", text: "Waiver basis visible." },
      { label: "Background", status: "ok", text: "No adverse hit." },
      { label: "Interview tool", status: "idle", text: "Can be scheduled if needed." }
    ],
    hint: "waiver 基础还没被最终文件支持。先 RFE 要最终离婚判决和更多 bona fide evidence。"
  },
  {
    id: "IOE-26-904",
    form: "I-90",
    type: "Green Card Replacement",
    applicant: "Darius King",
    title: "绿卡补发，旧系统重复 biometrics 记录",
    difficulty: "Hard",
    correctDecision: "hold",
    urgency: "normal",
    tags: ["I-90", "ELIS", "System Incident"],
    facts: [
      ["收件日", "2026-05-02"],
      ["申请原因", "Card never received"],
      ["旧卡状态", "Returned mail"],
      ["Biometrics", "Duplicate records"],
      ["备注", "申请人已搬家两次"]
    ],
    forms: [
      ["I-90 签名", "Present"],
      ["Reason", "Card never received"],
      ["Address", "Updated"],
      ["Fee", "Not required claimed"],
      ["Evidence", "USPS tracking uploaded"]
    ],
    evidence: [
      { label: "USPS tracking", status: "ok", text: "Returned to sender record uploaded." },
      { label: "Address proof", status: "ok", text: "Current utility bill included." },
      { label: "Biometrics", status: "warn", text: "Two A-number records appear linked." }
    ],
    systems: [
      { label: "Biometrics bridge", status: "fail", text: "Duplicate token prevents card production." },
      { label: "ELIS", status: "warn", text: "Legacy record merge pending." },
      { label: "Card production", status: "idle", text: "Blocked until system merge." }
    ],
    hint: "实体资格看起来没大问题，但系统记录没合并前不能安全出卡。系统 Hold。"
  },
  {
    id: "MSC-26-955",
    form: "I-765",
    type: "Asylum Pending EAD",
    applicant: "Leila Farah",
    title: "C8 EAD 续卡，asylum clock 停止且重复收据",
    difficulty: "Expert",
    correctDecision: "escalate",
    urgency: "urgent",
    tags: ["I-765", "C8", "Clock Issue"],
    facts: [
      ["收件日", "2026-05-05"],
      ["申请类别", "(c)(8) Asylum Pending"],
      ["Asylum clock", "Stopped at 147 days"],
      ["Duplicate receipt", "Possible"],
      ["客服备注", "Legal aid organization copied supervisor"]
    ],
    forms: [
      ["I-765 签名", "Present"],
      ["Category", "(c)(8)"],
      ["Fee", "Fee waiver pending"],
      ["Prior EAD", "Expired"],
      ["Explanation", "Uploaded"]
    ],
    evidence: [
      { label: "Asylum receipt", status: "warn", text: "Two receipts with slightly different name order." },
      { label: "Clock printout", status: "fail", text: "Clock stopped below expected threshold." },
      { label: "Identity", status: "ok", text: "Passport and prior EAD present." }
    ],
    systems: [
      { label: "Asylum clock", status: "fail", text: "Court interface shows unresolved stop code." },
      { label: "ELIS", status: "warn", text: "Potential duplicate receipt group." },
      { label: "Supervisor queue", status: "warn", text: "Eligibility requires specialist review." }
    ],
    hint: "C8 clock 和重复记录很容易误伤。升级复核比直接 Hold 或拒绝更稳。"
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
  },
  {
    subject: "Supervisor nudge",
    body: "主管说“just checking in”，这四个词看起来无害，实际上很响。",
    urgent: true
  }
];

const state = {
  cases: [],
  rotationIndex: 0,
  activeCaseId: "MSC-26-001",
  activeTab: "snapshot",
  viewedTabsByCase: {},
  tutorialDone: new Set(),
  policyRead: new Set(),
  processed: [],
  correct: 0,
  decisions: 0,
  rotationStartDecisions: 0,
  rotationStartCorrect: 0,
  stress: 8,
  systemHealth: 100,
  reputation: 0,
  combo: 0,
  day: 1,
  minutes: 8 * 60,
  mails: [],
  incidentActive: false,
  policyIndex: 0,
  reportMode: "restart"
};

const els = {
  shiftClock: document.querySelector("#shiftClock"),
  objectiveLabel: document.querySelector("#objectiveLabel"),
  rotationTitle: document.querySelector("#rotationTitle"),
  rotationCopy: document.querySelector("#rotationCopy"),
  rotationProgressText: document.querySelector("#rotationProgressText"),
  rotationMeter: document.querySelector("#rotationMeter"),
  tutorialList: document.querySelector("#tutorialList"),
  accuracyValue: document.querySelector("#accuracyValue"),
  reputationValue: document.querySelector("#reputationValue"),
  kpiValue: document.querySelector("#kpiValue"),
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
  policyTitle: document.querySelector("#policyTitle"),
  policyCopy: document.querySelector("#policyCopy"),
  policyEffect: document.querySelector("#policyEffect"),
  memoButton: document.querySelector("#memoButton"),
  mailCount: document.querySelector("#mailCount"),
  mailStack: document.querySelector("#mailStack"),
  replyMailButton: document.querySelector("#replyMailButton"),
  routeMailButton: document.querySelector("#routeMailButton"),
  dailyReport: document.querySelector("#dailyReport"),
  reportTitle: document.querySelector("#reportTitle"),
  reportBody: document.querySelector("#reportBody"),
  restartButton: document.querySelector("#restartButton")
};

function getActiveRotation() {
  return rotations[state.rotationIndex];
}

function getActivePolicy() {
  return policyMemos[state.policyIndex];
}

function getCasesForRotation(rotationIndex = state.rotationIndex) {
  const ids = rotations[rotationIndex].caseIds;
  return ids.map((id) => baseCases.find((caseFile) => caseFile.id === id)).filter(Boolean);
}

function getActiveCase() {
  return state.cases.find((caseFile) => caseFile.id === state.activeCaseId) ?? state.cases[0];
}

function getProcessedInRotation(rotationIndex = state.rotationIndex) {
  const ids = new Set(rotations[rotationIndex].caseIds);
  return state.processed.filter((caseId) => ids.has(caseId)).length;
}

function getAccuracy() {
  return state.decisions === 0 ? 100 : Math.round((state.correct / state.decisions) * 100);
}

function getRotationAccuracy() {
  const decisions = state.decisions - state.rotationStartDecisions;
  const correct = state.correct - state.rotationStartCorrect;
  return decisions === 0 ? 100 : Math.round((correct / decisions) * 100);
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

function policyAppliesToCase(policy, caseFile) {
  const haystack = [
    caseFile.form,
    caseFile.type,
    caseFile.urgency,
    caseFile.correctDecision,
    caseFile.title,
    ...caseFile.tags,
    ...caseFile.systems.map((item) => item.label)
  ]
    .join(" ")
    .toLowerCase();
  return policy.appliesTo.some((needle) => haystack.includes(needle.toLowerCase()));
}

function renderCampaignHeader() {
  const rotation = getActiveRotation();
  const processed = getProcessedInRotation();
  const total = rotation.caseIds.length;
  const percent = total === 0 ? 0 : Math.round((processed / total) * 100);
  els.objectiveLabel.textContent = rotation.label;
  els.rotationTitle.textContent = rotation.title;
  els.rotationCopy.textContent = rotation.copy;
  els.rotationProgressText.textContent = `${processed} / ${total} cases processed`;
  els.rotationMeter.style.width = `${percent}%`;
}

function renderTutorial() {
  const rotation = getActiveRotation();
  const processed = getProcessedInRotation();
  const total = rotation.caseIds.length;

  if (rotation.id === "training" && state.tutorialDone.size < tutorialSteps.length) {
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
    return;
  }

  const rotationAccuracy = getRotationAccuracy();
  const objectives = [
    {
      title: `处理本轮 ${total} 个案件`,
      body: `当前进度：${processed}/${total}。队列不会自己变短，遗憾。`,
      done: processed >= total
    },
    {
      title: `本轮准确率达到 ${rotation.minAccuracy}%`,
      body: `当前本轮准确率：${rotationAccuracy}%。`,
      done: rotationAccuracy >= rotation.minAccuracy && processed > 0
    },
    {
      title: `压力控制在 ${rotation.maxStress}% 以下`,
      body: `当前压力：${state.stress}%。邮件可以处理，别硬扛。`,
      done: state.stress <= rotation.maxStress
    },
    {
      title: "研读本轮政策 memo",
      body: state.policyRead.has(rotation.id) ? "本轮 memo 已读，判案时会给你一点 buff。" : "右侧 memo 不是装饰，它会影响部分案件评分。",
      done: state.policyRead.has(rotation.id)
    }
  ];

  els.tutorialList.innerHTML = objectives
    .map((step, index) => {
      const active = !step.done && objectives.findIndex((item) => !item.done) === index;
      return `
        <li class="${step.done ? "done" : ""} ${active ? "active" : ""}" data-index="${index + 1}">
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
  const backlog = state.cases.length - getProcessedInRotation();
  const accuracy = getAccuracy();
  els.accuracyValue.textContent = `${accuracy}%`;
  els.reputationValue.textContent = `${state.reputation} pts`;
  els.kpiValue.textContent = getActiveRotation().kpi;
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

function renderPolicy() {
  const policy = getActivePolicy();
  const rotation = getActiveRotation();
  els.policyTitle.textContent = policy.title;
  els.policyCopy.textContent = policy.copy;
  els.policyEffect.textContent = policy.effect;
  els.memoButton.textContent = state.policyRead.has(rotation.id) ? "下一份 memo" : "研读 memo";
}

function renderCaseHeader(caseFile) {
  els.caseTitle.textContent = `${caseFile.id}: ${caseFile.title}`;
  els.caseTags.innerHTML = caseFile.tags
    .map((tag) => {
      const tone = tag.includes("Missing") || tag.includes("Inconsistent") || tag.includes("Mismatch") ? "warn" : "";
      const danger = tag.includes("System") || tag.includes("Premium") || tag.includes("Clock") ? "danger" : tone;
      return `<span class="tag ${danger}">${tag}</span>`;
    })
    .join("");
}

function renderSnapshot(caseFile) {
  const rotation = getActiveRotation();
  const policy = getActivePolicy();
  const memoText = policyAppliesToCase(policy, caseFile)
    ? `当前 memo 可能影响本案：${policy.title}。`
    : `当前 memo 不一定命中本案，但读过仍能帮你稳住节奏。`;
  const tipCard =
    rotation.id === "training"
      ? `
      <article class="fact-card full">
        <h3>办案提示</h3>
        <p>${caseFile.hint}</p>
        <div class="hint-box">教学目标：不要只看标题办案。表格、证据、系统三者一致时才可以舒服地盖章。</div>
      </article>
    `
      : `
      <article class="fact-card full">
        <h3>轮岗目标</h3>
        <p>本轮不会再显示具体办案提示。请根据案情、表格、证据和系统记录自行判断。</p>
        <div class="hint-box">本轮 KPI：${rotation.kpi}。${memoText}</div>
      </article>
    `;
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
      ${tipCard}
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
  renderCampaignHeader();
  renderTutorial();
  renderQueue();
  renderStats();
  renderPolicy();
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

function applyDecisionResult(caseFile, isCorrect) {
  const policy = getActivePolicy();
  const policyApplies = policyAppliesToCase(policy, caseFile);
  const policyRead = state.policyRead.has(getActiveRotation().id);

  if (isCorrect) {
    state.correct += 1;
    state.combo += 1;
    const reputationBonus = policyApplies ? (caseFile.form === "N-400" ? 4 : 2) : 0;
    state.reputation += 8 + Math.min(state.combo, 4) + reputationBonus;
    state.stress = Math.max(0, state.stress - (policyRead ? 8 : 6));
    const clearCount = policyApplies && policy.title.includes("Family") ? 2 : 1;
    state.mails = state.mails.slice(0, Math.max(0, state.mails.length - clearCount));
  } else {
    state.combo = 0;
    state.reputation = Math.max(0, state.reputation - 4);
    state.stress = Math.min(100, state.stress + 18 + (policyApplies ? 8 : 0));
    const baseCount = caseFile.urgency === "premium" || caseFile.urgency === "urgent" ? 3 : 2;
    const expeditePenalty = policyApplies && policy.title.includes("Expedite") ? 2 : 0;
    addMail(baseCount + expeditePenalty, caseFile, true);
  }

  if (caseFile.incident) {
    state.incidentActive = true;
    state.systemHealth = Math.max(18, state.systemHealth - 38);
    addMail(policyApplies && !isCorrect ? 3 : 2, caseFile, true);
  } else {
    state.systemHealth = Math.max(0, state.systemHealth - (isCorrect ? 4 : 9));
  }

  if (state.systemHealth < 45 && !isCorrect) {
    addMail(1, caseFile, true);
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
  applyDecisionResult(caseFile, isCorrect);
  state.processed.push(caseFile.id);
  advanceClock(isCorrect ? 34 : 51);

  const expected = decisionLabels[caseFile.correctDecision];
  const picked = decisionLabels[decision];
  renderOutcome(
    isCorrect
      ? {
          title: `正确处理：${picked}`,
          body: `案件顺利离开你的工位。连击 x${state.combo}，声誉 +${Math.min(state.combo, 4) + 8}。`
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
    showRotationReport(state.rotationIndex === rotations.length - 1);
  }

  renderAll();
}

function showRotationReport(isFinal) {
  const rotation = getActiveRotation();
  const rotationAccuracy = getRotationAccuracy();
  const passedAccuracy = rotationAccuracy >= rotation.minAccuracy;
  const passedStress = state.stress <= rotation.maxStress;
  const title = isFinal
    ? rotationAccuracy >= 85 && state.stress <= 70
      ? "Senior Officer, Pixel Division"
      : rotationAccuracy >= 70
        ? "Still Standing After Outlook"
        : "Needs Supervisor Debrief"
    : passedAccuracy && passedStress
      ? "轮岗通过"
      : "轮岗完成，但主管皱眉";

  state.reportMode = isFinal ? "restart" : "continue";
  els.reportTitle.textContent = isFinal ? "最终值班报告" : `${rotation.title} 结算`;
  els.restartButton.textContent = isFinal ? "重新开班" : "进入下一轮岗";
  els.reportBody.innerHTML = `
    <p>此游戏完全虚构，不构成法律建议，也不代表任何真实机构流程。</p>
    <ul>
      <li><strong>评级：</strong>${title}</li>
      <li><strong>本轮准确率：</strong>${rotationAccuracy}% / 目标 ${rotation.minAccuracy}%</li>
      <li><strong>全局准确率：</strong>${getAccuracy()}%</li>
      <li><strong>声誉：</strong>${state.reputation} pts</li>
      <li><strong>剩余压力：</strong>${state.stress}% / 本轮建议 ${rotation.maxStress}% 以下</li>
      <li><strong>未读转发：</strong>${state.mails.length}</li>
    </ul>
  `;
  els.dailyReport.classList.remove("hidden");
}

function continueNextRotation() {
  state.rotationIndex += 1;
  const rotation = getActiveRotation();
  state.cases = getCasesForRotation();
  state.activeCaseId = rotation.caseIds[0];
  state.activeTab = "snapshot";
  state.viewedTabsByCase[state.activeCaseId] = new Set(["snapshot"]);
  state.rotationStartDecisions = state.decisions;
  state.rotationStartCorrect = state.correct;
  state.systemHealth = Math.min(100, state.systemHealth + 18);
  state.stress = Math.max(0, state.stress - 10);
  state.policyIndex = state.rotationIndex % policyMemos.length;
  state.incidentActive = false;
  els.dailyReport.classList.add("hidden");
  addMail(1, getActiveCase(), false);
  renderOutcome(
    {
      title: `新轮岗：${rotation.title}`,
      body: "主管把新的队列推给你。桌面咖啡变冷，案件变热。"
    },
    "neutral"
  );
  renderAll();
}

function studyPolicyMemo() {
  const rotation = getActiveRotation();
  const alreadyRead = state.policyRead.has(rotation.id);
  if (alreadyRead) {
    state.policyIndex = (state.policyIndex + 1) % policyMemos.length;
  }
  state.policyRead.add(rotation.id);
  state.stress = Math.max(0, state.stress - 4);
  state.reputation += alreadyRead ? 0 : 2;
  advanceClock(6);
  renderOutcome(
    {
      title: alreadyRead ? "切换政策 memo" : "政策 memo 已研读",
      body: alreadyRead ? "你翻到下一份 memo。知识变多，时间变少，一切很真实。" : "本轮判案获得一点稳定性。官僚世界里，读文件偶尔真的有用。"
    },
    "good"
  );
  renderAll();
}

function replyToMail() {
  if (state.mails.length === 0) {
    renderOutcome(
      {
        title: "没有邮件可回",
        body: "这是一种罕见天象。请截图纪念。"
      },
      "neutral"
    );
    return;
  }
  const mail = state.mails.shift();
  state.stress = Math.max(0, state.stress - (mail.urgent ? 8 : 5));
  state.reputation += mail.urgent ? 2 : 1;
  advanceClock(mail.urgent ? 14 : 9);
  renderOutcome(
    {
      title: "已回复一封邮件",
      body: mail.urgent ? "你用非常平静的措辞扑灭了一点火。" : "客服收到了一个能转述的答案，世界少了一点摩擦。"
    },
    "good"
  );
  renderAll();
}

function routeMail() {
  if (state.mails.length === 0) {
    renderOutcome(
      {
        title: "无票可转",
        body: "IT 和主管暂时没有收到你的锅。和平短暂降临。"
      },
      "neutral"
    );
    return;
  }

  let routed = 0;
  state.mails = state.mails.filter((mail) => {
    if (mail.urgent && routed < 2) {
      routed += 1;
      return false;
    }
    return true;
  });

  if (routed === 0) {
    state.mails.shift();
    routed = 1;
  }

  if (state.systemHealth < 60 || state.incidentActive) {
    state.stress = Math.max(0, state.stress - 8);
    state.reputation += routed;
    state.systemHealth = Math.min(100, state.systemHealth + 5);
    renderOutcome(
      {
        title: `已转出 ${routed} 个问题`,
        body: "这次确实该找 IT/主管。你没有背不属于自己的锅，很好。"
      },
      "good"
    );
  } else {
    state.stress = Math.min(100, state.stress + 5);
    state.reputation = Math.max(0, state.reputation - 1);
    renderOutcome(
      {
        title: "转得有点早",
        body: "系统其实还行，主管把票又弹回来了。这个回旋镖有棱角。"
      },
      "bad"
    );
  }

  advanceClock(11);
  renderAll();
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
  state.rotationIndex = 0;
  state.cases = getCasesForRotation();
  state.activeCaseId = "MSC-26-001";
  state.activeTab = "snapshot";
  state.viewedTabsByCase = { "MSC-26-001": new Set(["snapshot"]) };
  state.tutorialDone = new Set(["open"]);
  state.policyRead = new Set();
  state.processed = [];
  state.correct = 0;
  state.decisions = 0;
  state.rotationStartDecisions = 0;
  state.rotationStartCorrect = 0;
  state.stress = 8;
  state.systemHealth = 100;
  state.reputation = 0;
  state.combo = 0;
  state.day = 1;
  state.minutes = 8 * 60;
  state.mails = [];
  state.incidentActive = false;
  state.policyIndex = 0;
  state.reportMode = "restart";
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
els.memoButton.addEventListener("click", studyPolicyMemo);
els.replyMailButton.addEventListener("click", replyToMail);
els.routeMailButton.addEventListener("click", routeMail);
els.restartButton.addEventListener("click", () => {
  if (state.reportMode === "continue") {
    continueNextRotation();
  } else {
    resetGame();
  }
});

resetGame();
