/**
 * Korean UI Helper for Linear — 번역 사전
 *
 * 규칙:
 * - docs/glossary.md의 confidence: safe 항목만 포함한다.
 * - confidence: review 항목은 절대 포함하지 않는다.
 * - 용어 추가 시 반드시 glossary.md를 먼저 safe로 업데이트한 후 여기에 반영한다.
 *
 * 버전: 0.1.0
 */
export const dictionary: Map<string, string> = new Map([
  // ── Navigation ──────────────────────────────────────────────
  ["Inbox", "받은함"],
  ["My issues", "내 이슈"],
  ["Views", "뷰"],
  ["Projects", "프로젝트"],
  ["Cycles", "사이클"],
  ["Teams", "팀"],
  ["Roadmaps", "로드맵"],
  ["Workspace", "워크스페이스"],
  ["Settings", "설정"],
  ["Members", "멤버"],

  // ── Issue Terms ──────────────────────────────────────────────
  ["Issue", "이슈"],
  ["New issue", "새 이슈"],
  ["Create issue", "이슈 만들기"],
  ["Assignee", "담당자"],
  ["Creator", "생성자"],
  ["Subscriber", "구독자"],
  ["Priority", "우선순위"],
  ["Labels", "라벨"],
  ["Due date", "마감일"],
  ["Related", "관련됨"],
  ["Parent issue", "상위 이슈"],
  ["Sub-issue", "하위 이슈"],
  ["Description", "설명"],
  ["Comment", "댓글"],
  ["Activity", "활동"],
  ["Attachment", "첨부파일"],
  ["Link", "링크"],

  // ── Status Terms ─────────────────────────────────────────────
  ["Backlog", "백로그"],
  ["Todo", "할 일"],
  ["In Progress", "진행 중"],
  ["In Review", "리뷰 중"],
  ["Done", "완료"],
  ["Canceled", "취소됨"],
  ["Duplicate", "중복"],

  // ── Priority Terms ───────────────────────────────────────────
  ["No priority", "우선순위 없음"],
  ["Urgent", "긴급"],
  ["High", "높음"],
  ["Medium", "보통"],
  ["Low", "낮음"],

  // ── Project Terms ────────────────────────────────────────────
  ["Project", "프로젝트"],
  ["Milestone", "마일스톤"],
  ["Update", "업데이트"],
  ["Document", "문서"],
  ["Goal", "목표"],
  ["Target date", "목표일"],

  // ── Command Terms ────────────────────────────────────────────
  ["Search", "검색"],
  ["Open", "열기"],
  ["Copy", "복사"],
  ["Paste", "붙여넣기"],
  ["Delete", "삭제"],
  ["Archive", "보관"],
  ["Subscribe", "구독"],
  ["Unsubscribe", "구독 해제"],
  ["Assign", "담당자 지정"],
  ["Move", "이동"],
  ["Change status", "상태 변경"],
  ["Change priority", "우선순위 변경"],

  // ── Settings Terms ───────────────────────────────────────────
  ["Preferences", "환경설정"],
  ["Account", "계정"],
  ["Profile", "프로필"],
  ["Notifications", "알림"],
  ["Integrations", "연동"],
  ["Import", "가져오기"],
  ["Export", "내보내기"],
  ["Billing", "결제"],
  ["Security", "보안"],
  ["General", "일반"],
  ["Appearance", "디스플레이"],
  ["API", "API"],
  ["Webhooks", "웹훅"],

  // ── View Controls ─────────────────────────────────────────────
  ["Filter", "필터"],
  ["Filters", "필터"],
  ["Sort", "정렬"],
  ["Group by", "그룹"],
  ["Display", "표시"],
  ["Layout", "레이아웃"],
  ["Board", "보드"],
  ["List", "목록"],
  ["Table", "테이블"],
  ["Timeline", "타임라인"],
  ["Zoom", "확대"],

  // ── Default Views ─────────────────────────────────────────────
  ["All issues", "전체 이슈"],
  ["Active", "활성"],
  ["Reviews", "리뷰"],

  // ── Issue Properties (additional) ────────────────────────────
  ["Status", "상태"],
  ["Cycle", "사이클"],
  ["Label", "라벨"],
  ["Sub-issues", "하위 이슈"],
  ["Comments", "댓글"],
  ["Attachments", "첨부파일"],
  ["Links", "링크"],
  ["Estimate", "추정치"],
  ["Member", "멤버"],

  // ── Empty States ─────────────────────────────────────────────
  ["No label", "라벨 없음"],
  ["No assignee", "담당자 없음"],
  ["No status", "상태 없음"],
  ["No estimate", "추정치 없음"],
  ["No cycle", "사이클 없음"],
  ["No project", "프로젝트 없음"],
  ["No milestone", "마일스톤 없음"],
  ["No parent", "상위 없음"],
  ["No due date", "마감일 없음"],
  ["No priority", "우선순위 없음"],

  // ── Action Terms ──────────────────────────────────────────────
  ["Add", "추가"],
  ["Edit", "편집"],
  ["Remove", "제거"],
  ["Cancel", "취소"],
  ["Save", "저장"],
  ["Close", "닫기"],
  ["Confirm", "확인"],
  ["Apply", "적용"],
  ["Reset", "초기화"],
  ["Clear", "지우기"],
  ["Rename", "이름 변경"],
  ["Copy link", "링크 복사"],

  // ── Member Roles ──────────────────────────────────────────────
  ["Admin", "관리자"],
  ["Guest", "게스트"],
  ["Owner", "오너"],
  ["Invite", "초대"],
  ["Invite members", "멤버 초대"],

  // ── Status Categories ─────────────────────────────────────────
  ["Unstarted", "시작 전"],
  ["Started", "진행 중"],
  ["Completed", "완료됨"],
  ["Cancelled", "취소됨"],

  // ── Time ──────────────────────────────────────────────────────
  ["Today", "오늘"],
  ["Yesterday", "어제"],
  ["This week", "이번 주"],
  ["This month", "이번 달"],
  ["Older", "이전"],
  ["Overdue", "기한 초과"],
  ["Due soon", "마감 임박"],

  // ── Notifications / Inbox ─────────────────────────────────────
  ["Unread", "읽지 않음"],
  ["Mark as read", "읽음으로 표시"],
  ["Mark all as read", "전체 읽음으로 표시"],
  ["All caught up", "모두 확인했어요"],

  // ── Feature Names ─────────────────────────────────────────────
  ["Insights", "인사이트"],
  ["Triage", "트리아지"],
  ["Workflows", "워크플로우"],
  ["Workflow", "워크플로우"],
  ["Automations", "자동화"],
  ["Templates", "템플릿"],
  ["Template", "템플릿"],
  ["Initiatives", "이니셔티브"],
  ["Initiative", "이니셔티브"],

  // ── Favourites ────────────────────────────────────────────────
  ["Favorited", "즐겨찾기"],
  ["Favorites", "즐겨찾기"],

  // ── Navigation Actions ────────────────────────────────────────
  ["Go to inbox", "받은함으로 이동"],
  ["Go to my issues", "내 이슈로 이동"],
  ["Go to projects", "프로젝트로 이동"],
  ["Go to views", "뷰로 이동"],
  ["Skip to content", "본문으로 이동"],
  ["Back to app", "앱으로 돌아가기"],

  // ── View Empty States / Hints ────────────────────────────────
  ["Create new view", "새 뷰 만들기"],
  ["Create new project", "새 프로젝트 만들기"],
  ["All projects", "전체 프로젝트"],
  ["No notifications", "알림 없음"],
  ["Showing all items", "전체 항목 표시 중"],
  ["Open Issues", "열린 이슈"],
  ["Active issues", "활성 이슈"],
  ["Add sub-issues", "하위 이슈 추가"],
  ["Issue created", "이슈 생성됨"],
  ["View issue", "이슈 보기"],
  ["Save as draft", "초안으로 저장"],
  ["Create more", "계속 만들기"],
  ["No issues", "이슈 없음"],

  // ── Issue Detail ─────────────────────────────────────────────
  ["Properties", "속성"],
  ["Set priority", "우선순위 설정"],
  ["Add label", "라벨 추가"],
  ["Add to project", "프로젝트에 추가"],
  ["created the issue", "이슈를 만들었습니다"],

  // ── Settings Sections ────────────────────────────────────────
  ["Security & access", "보안 및 접근"],
  ["Connected accounts", "연결된 계정"],
  ["Agent personalization", "에이전트 개인화"],
  ["SLAs", "SLA"],
  ["Statuses", "상태 목록"],
  ["Updates", "업데이트"],
  ["Features", "기능"],
  ["AI & Agents", "AI 및 에이전트"],
  ["Documents", "문서"],
  ["Customer requests", "고객 요청"],
  ["Pulse", "펄스"],
  ["Asks", "요청"],
  ["Emojis", "이모지"],
  ["Administration", "관리"],
  ["Applications", "애플리케이션"],
  ["Import & export", "가져오기 및 내보내기"],
  ["Your teams", "내 팀"],
  ["Create a team", "팀 만들기"],
  ["Create team", "팀 만들기"],
  ["Default home view", "기본 홈 뷰"],
  ["Display names", "표시 이름"],
  ["Full name", "전체 이름"],
  ["First day of the week", "주 시작 요일"],
  ["Sunday", "일요일"],
  ["Send comment on…", "댓글 전송 단축키…"],
  ["Interface and theme", "인터페이스 및 테마"],
  ["App sidebar", "앱 사이드바"],
  ["Font size", "글꼴 크기"],
  ["Default", "기본값"],
  ["Use pointer cursors", "포인터 커서 사용"],
  ["Interface theme", "인터페이스 테마"],
  ["Light", "라이트"],
  ["Desktop application", "데스크톱 앱"],
  ["Open in desktop app", "데스크톱 앱에서 열기"],
  ["Coding tools", "코딩 도구"],
  ["Configure coding tools", "코딩 도구 설정"],
  ["Automations and workflows", "자동화 및 워크플로우"],
  ["Auto-assign to self", "자동 자기 자신에게 배정"],
  ["Git attachment format", "Git 첨부 형식"],
  ["Ask Linear", "Linear에게 묻기"],
  ["Profile picture", "프로필 사진"],
  ["Username", "사용자명"],
  ["Workspace access", "워크스페이스 접근"],
  ["Remove yourself from workspace", "워크스페이스에서 나가기"],
  ["Leave workspace", "워크스페이스 나가기"],
  ["Notification channels", "알림 채널"],
  ["Desktop", "데스크톱"],
  ["Disabled", "비활성화"],
  ["Mobile", "모바일"],
  ["Enabled for all notifications", "모든 알림 활성화"],
  ["Updates from Linear", "Linear 업데이트"],
  ["Changelog", "변경 이력"],
  ["Show updates in sidebar", "사이드바에 업데이트 표시"],
  ["Changelog newsletter", "변경 이력 뉴스레터"],
  ["Marketing", "마케팅"],
  ["Marketing and onboarding", "마케팅 및 온보딩"],
  ["Other updates", "기타 업데이트"],
  ["Invite accepted", "초대 수락됨"],
  ["Privacy and legal updates", "개인정보 및 법적 업데이트"],
  ["Data processing agreement (DPA)", "데이터 처리 계약(DPA)"],
  ["Sessions", "세션"],
  ["Devices logged into your account", "계정에 로그인된 기기"],
  ["Current session", "현재 세션"],
  ["Log out", "로그아웃"],
  ["Passkeys", "패스키"],
  ["No passkeys registered", "등록된 패스키 없음"],
  ["New passkey", "새 패스키"],
  ["Personal API keys", "개인 API 키"],
  ["No API keys created", "생성된 API 키 없음"],
  ["New API key", "새 API 키"],
  ["Authorized applications", "승인된 애플리케이션"],
  ["Connect", "연결"],
  ["Connect workspace", "워크스페이스 연결"],
  ["Guidance", "가이던스"],
  ["Skills", "스킬"],
  ["You haven't added any skills yet", "아직 스킬이 없습니다"],
  ["Create skill", "스킬 만들기"],
  ["MCP servers", "MCP 서버"],
  ["Configure", "설정"],
  ["Issue labels", "이슈 라벨"],
  ["New group", "새 그룹"],
  ["New label", "새 라벨"],
  ["Name", "이름"],
  ["Last applied", "마지막 적용"],
  ["Created", "생성됨"],
  ["Bug", "버그"],
  ["Feature", "기능"],
  ["Improvement", "개선"],
  ["Add label description…", "라벨 설명 추가…"],
  ["Issue templates", "이슈 템플릿"],
  ["New template", "새 템플릿"],
  ["Automation rules", "자동화 규칙"],
  ["Add rule", "규칙 추가"],
  ["Project labels", "프로젝트 라벨"],
  ["No labels found", "라벨 없음"],
  ["Project templates", "프로젝트 템플릿"],
  ["Project statuses", "프로젝트 상태"],
  ["Planned", "계획됨"],
  ["Project updates", "프로젝트 업데이트"],
  ["Update schedule", "업데이트 일정"],
  ["No expectation for updates", "업데이트 일정 없음"],
  ["Slack notifications", "Slack 알림"],
  ["Enable Initiatives", "이니셔티브 활성화"],
  [
    "Visible to all non-guest workspace members",
    "게스트 제외 전체 멤버에게 공개",
  ],
  ["Initiative updates", "이니셔티브 업데이트"],
  ["Start free trial", "무료 체험 시작"],
  ["Linear Agent", "Linear 에이전트"],
  ["Beta", "베타"],
  ["Configure for your workspace", "워크스페이스용 설정"],
  ["Enabled", "활성화됨"],
  ["Agent automations", "에이전트 자동화"],
  ["Available on Business", "비즈니스 플랜에서 사용 가능"],
  ["Triage Intelligence", "트리아지 인텔리전스"],
  ["Linear Agent integrations", "Linear 에이전트 연동"],
  ["Available integrations", "사용 가능한 연동"],
  ["Installed Agents", "설치된 에이전트"],
  ["Browse", "둘러보기"],
  ["Installed agents guidance", "설치된 에이전트 가이던스"],
  ["AI", "AI"],
  ["Summaries", "요약"],
  ["Enable Customer requests", "고객 요청 활성화"],
  ["Manage customers", "고객 관리"],
  ["No customers", "고객 없음"],
  ["Issue routing", "이슈 라우팅"],
  ["Default team for customer requests", "고객 요청 기본 팀"],
  ["Select a team", "팀 선택"],
  ["Customer statuses", "고객 상태"],
  ["Define statuses for segmenting customers", "고객 세분화 상태 정의"],
  ["Prospect", "잠재 고객"],
  ["Churned", "이탈"],
  ["Lost", "손실"],
  ["Customer tiers", "고객 등급"],
  ["Display options", "표시 옵션"],
  ["Revenue formatting", "매출 형식"],
  ["Annual", "연간"],
  ["Revenue currency", "매출 통화"],
  ["External data source", "외부 데이터 소스"],
  ["None", "없음"],
  ["Enable manual edits", "수동 편집 허용"],
  ["Excluded domains and emails", "제외된 도메인 및 이메일"],
  ["No excluded domains and emails", "제외된 도메인 및 이메일 없음"],
  ["Generic domains and emails", "일반 도메인 및 이메일"],
  ["No custom generic domains and emails", "커스텀 일반 도메인 및 이메일 없음"],
  ["Enable Pulse", "펄스 활성화"],
  ["Summary notifications", "요약 알림"],
  ["Default workspace schedule", "워크스페이스 기본 일정"],
  ["Daily", "매일"],
  ["Your personal schedule", "개인 일정"],
  ["Never", "없음"],
  ["Upload", "업로드"],
  ["Search integrations", "연동 검색"],
  ["Essentials", "필수"],
  ["Show all", "전체 보기"],
  ["AI clients", "AI 클라이언트"],
  ["Engineering", "엔지니어링"],
  ["Linear crafted", "Linear 공식"],
  ["Bug Reporting", "버그 리포팅"],
  ["Customer Experience", "고객 경험"],
  ["Collaboration", "협업"],
  ["Media & Design", "미디어 및 디자인"],
  ["Analytics", "분석"],
  ["Security & Compliance", "보안 및 컴플라이언스"],
  ["Pre-installed", "기본 설치됨"],
  ["Logo", "로고"],
  ["Time & region", "시간 및 지역"],
  ["First month of the fiscal year", "회계연도 시작 월"],
  ["January", "1월"],
  ["Region", "지역"],
  ["United States", "미국"],
  ["Welcome message", "환영 메시지"],
  ["Configure welcome message", "환영 메시지 설정"],
  ["Available on Enterprise", "엔터프라이즈 플랜에서 사용 가능"],
  ["Danger zone", "위험 구역"],
  ["Delete workspace", "워크스페이스 삭제"],
  ["Visibility", "공개 범위"],
  ["All", "전체"],
  ["Export CSV", "CSV 내보내기"],
  ["Joined", "가입일"],
  ["Last seen", "마지막 접속"],
  ["Online", "온라인"],
  ["Invite links", "초대 링크"],
  ["Enable invite links", "초대 링크 활성화"],
  ["Workspace login and restrictions", "워크스페이스 로그인 및 제한"],
  ["No approved email domains", "승인된 이메일 도메인 없음"],
  ["Add domain", "도메인 추가"],
  ["Authentication methods", "인증 방법"],
  ["Google authentication", "Google 인증"],
  ["Email & passkey authentication", "이메일 및 패스키 인증"],
  ["Workspace management", "워크스페이스 관리"],
  ["New user invitations", "신규 사용자 초대"],
  ["Team creation", "팀 생성"],
  ["API key creation", "API 키 생성"],
  ["All members", "전체 멤버"],
  ["Only admins", "관리자만"],
  ["Manage workspace labels", "워크스페이스 라벨 관리"],
  ["Manage workspace templates", "워크스페이스 템플릿 관리"],
  ["Modify agent guidance", "에이전트 가이던스 수정"],
  ["Restrict file uploads", "파일 업로드 제한"],
  ["Integrations & applications", "연동 및 애플리케이션"],
  ["Review third-party applications", "서드파티 앱 검토"],
  ["MCP Servers", "MCP 서버"],
  ["Enable Linear Agent MCP servers", "Linear 에이전트 MCP 서버 활성화"],
  ["Compliance", "컴플라이언스"],
  ["HIPAA compliance", "HIPAA 준수"],
  ["OAuth Applications", "OAuth 애플리케이션"],
  ["No OAuth applications", "OAuth 애플리케이션 없음"],
  ["New OAuth application", "새 OAuth 애플리케이션"],
  ["No webhooks", "웹훅 없음"],
  ["New webhook", "새 웹훅"],
  ["Member API keys", "멤버 API 키"],
  ["No API keys have been created yet", "아직 생성된 API 키가 없습니다"],
  ["All plans", "전체 플랜"],
  ["Current", "현재"],
  ["Users", "사용자"],
  ["Upgrade to", "업그레이드"],
  ["per user/mo", "사용자/월"],
  ["View all plans", "전체 플랜 보기"],
  ["Upgrade now", "지금 업그레이드"],
  ["Recent invoices", "최근 청구서"],
  ["No invoices yet", "아직 청구서 없음"],
  ["Import assistant", "가져오기 도우미"],
  ["CLI import", "CLI 가져오기"],
  ["Issue data", "이슈 데이터"],
  ["Include private teams", "비공개 팀 포함"],
  ["Manage team members", "팀 멤버 관리"],
  ["Issues, projects, and docs", "이슈, 프로젝트, 문서"],
  ["Labels available to this team's issues", "이 팀 이슈에서 사용 가능한 라벨"],
  ["Recurring issues", "반복 이슈"],
  ["Issue statuses", "이슈 상태 목록"],
  ["Customize the statuses issues go through", "이슈 상태 커스터마이즈"],
  ["7 statuses", "상태 7개"],
  ["Workflows & automations", "워크플로우 및 자동화"],
  ["Discussion summaries", "토론 요약"],
  ["Team hierarchy", "팀 계층"],
  ["Parent team", "상위 팀"],
  ["Leave team", "팀 나가기"],
  ["Remove yourself as a member of this team", "이 팀 멤버에서 나가기"],
  ["Retire team", "팀 비활성화"],
  ["Delete team", "팀 삭제"],
  ["Got it", "확인"],
  ["Customize sidebar", "사이드바 커스터마이즈"],
  ["Search for help…", "도움말 검색…"],
  ["Contact us", "문의하기"],
  ["Keyboard shortcuts", "키보드 단축키"],
  ["Linear status", "Linear 상태"],
  ["Download apps", "앱 다운로드"],
  ["Slack community", "Slack 커뮤니티"],
  ["What's new", "새 소식"],
  ["Full changelog", "전체 변경 이력"],
  ["Invite and manage members", "멤버 초대 및 관리"],
  ["Download desktop app", "데스크톱 앱 다운로드"],
  ["Switch workspace", "워크스페이스 전환"],
  ["Create or join a workspace…", "워크스페이스 만들기 또는 참여…"],
  ["Add an account…", "계정 추가…"],
  ["Documentation", "문서"],
  ["Docs", "문서"],
  ["Customize", "커스터마이즈"],

  // ── Issue actions (inline text) ───────────────────────────────
  ["issue templates", "이슈 템플릿"],
  ["project templates", "프로젝트 템플릿"],
  ["document templates", "문서 템플릿"],
  ["customer statuses", "고객 상태"],
  ["customer tiers", "고객 등급"],
  ["emojis", "이모지"],
  ["integrations", "연동"],
  ["to enable new agents", "에서 에이전트를 활성화하세요"],
  ["plan", "플랜"],
  ["for help and questions.", "도움 및 문의를 위해"],

  // ── Empty state descriptions (long UI strings) ───────────────
  // Views
  [
    "Create custom views using filters to show only the issues you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.",
    "필터로 원하는 이슈만 보이는 커스텀 뷰를 만들 수 있습니다. 뷰를 저장·공유·즐겨찾기해서 빠르게 접근하고 팀과 협업하세요.",
  ],
  [
    "You can also save any existing view by clicking the",
    "기존 뷰를 저장하려면",
  ],
  ["or by pressing", "단축키를 눌러도 됩니다."],
  // Projects
  [
    "Projects are larger units of work with a clear outcome, such as a new feature you want to ship. They can be shared across multiple teams and are comprised of issues and optional documents.",
    "프로젝트는 출시할 기능처럼 명확한 목표가 있는 더 큰 작업 단위입니다. 여러 팀이 공유할 수 있으며, 이슈와 문서로 구성됩니다.",
  ],

  // ── Short UI labels (새로 발견) ───────────────────────────────
  ["Loading…", "불러오는 중…"],
  ["Off", "꺼짐"],
  ["More", "더 보기"],
  ["Free", "무료"],
  ["Read more", "자세히 보기"],
  ["Export…", "내보내기…"],
  ["Email", "이메일"],
  ["Assigned", "배정됨"],
  ["Subscribed", "구독 중"],
  ["Create new issue", "새 이슈 만들기"],
  ["No issues assigned to you", "배정된 이슈 없음"],
  ["Import issues", "이슈 가져오기"],
  ["Invite people", "사람 초대하기"],
  ["Connect GitHub", "GitHub 연결하기"],
  ["Join our Slack", "Slack 커뮤니티에 참여하기"],
  ["security & access settings", "보안 및 접근 설정"],
  ["For questions about billing,", "결제 관련 문의는"],
  ["Free for all users", "모든 사용자에게 무료"],
  ["Unlimited file upload size", "무제한 파일 업로드 크기"],
  ["Unlimited issues", "무제한 이슈"],
  ["Admin roles", "관리자 권한"],
  ["File upload deletion", "파일 업로드 삭제"],
  ["Restrict new user invitations", "신규 사용자 초대 제한"],
  [
    "Restrict agent invocation to full workspace members",
    "에이전트 호출을 전체 워크스페이스 멤버만으로 제한",
  ],
  ["Available on Basic", "베이직 플랜에서 사용 가능"],
  ["Broadcast notifications to Slack", "Slack에 알림 브로드캐스트"],
  [
    "Agent MCP access disabled in this workspace",
    "이 워크스페이스에서 에이전트 MCP 접근이 비활성화됨",
  ],
  ["Enable Linear Agent web search", "Linear 에이전트 웹 검색 활성화"],
  ["Recommended size is 256x256px", "권장 크기: 256x256px"],

  // ── Preference setting descriptions ──────────────────────────
  [
    "Select which view to display when launching Linear",
    "Linear 실행 시 표시할 뷰를 선택하세요",
  ],
  [
    "Select how names are displayed in the Linear interface",
    "Linear 인터페이스에서 이름 표시 방식을 선택하세요",
  ],
  ["Used for date pickers", "날짜 선택에 사용됩니다"],
  ["Convert text emoticons into emojis", "텍스트 이모티콘을 이모지로 변환"],
  [
    "Choose which key press is used to submit a comment",
    "댓글 전송에 사용할 단축키를 선택하세요",
  ],
  [
    "Customize sidebar item visibility, ordering, and badge style",
    "사이드바 항목 표시, 순서, 뱃지 스타일 커스터마이즈",
  ],
  [
    "Adjust the size of text across the app",
    "앱 전체의 텍스트 크기를 조정하세요",
  ],
  [
    "Change the cursor to a pointer when hovering over any interactive elements",
    "상호작용 요소에 포인터 커서 표시",
  ],
  [
    "Select or customize your interface color scheme",
    "인터페이스 색상 테마를 선택하거나 커스터마이즈하세요",
  ],
  [
    "Automatically open links in desktop app when possible",
    "가능한 경우 링크를 자동으로 데스크톱 앱에서 열기",
  ],
  [
    "Configure tools which can be opened from Linear",
    "Linear에서 열 수 있는 코딩 도구를 설정하세요",
  ],
  [
    "When creating new issues, always assign them to yourself by default",
    "새 이슈 생성 시 기본으로 자신에게 배정",
  ],
  [
    "The format of GitHub/GitLab attachments on issues",
    "이슈의 GitHub/GitLab 첨부 형식",
  ],
  [
    "On git branch copy, move issue to started status",
    "Git 브랜치 복사 시 이슈를 시작 상태로 이동",
  ],
  [
    "After copying the git branch name, issue status is moved to the team's first started workflow status. Hold",
    "Git 브랜치 이름 복사 후 이슈 상태가 팀의 첫 번째 시작 워크플로우 상태로 변경됩니다. 비활성화하려면 누르세요",
  ],
  ["to disable.", "눌러서 비활성화"],
  [
    "On open in coding tool, move issue to started status",
    "코딩 도구에서 열 때 이슈를 시작 상태로 이동",
  ],
  [
    "On move to started status, assign to yourself",
    "시작 상태로 이동 시 자신에게 배정",
  ],
  [
    "When you move an unassigned issue to started, it will be automatically assigned to you",
    "담당자 없는 이슈를 시작 상태로 이동하면 자동으로 자신에게 배정됩니다",
  ],
  ["One word, like a nickname or first name", "닉네임이나 이름 같은 한 단어"],
  [
    "Choose how to be notified for workspace activity. Notifications will always go to your Linear inbox.",
    "워크스페이스 활동 알림 수신 방법을 선택하세요. 알림은 항상 Linear 받은함으로도 전달됩니다.",
  ],
  [
    "Highlight new features and improvements in the app sidebar",
    "앱 사이드바에서 새 기능 및 개선 사항 강조 표시",
  ],
  [
    "Receive an email twice a month highlighting new features and improvements",
    "월 2회 새 기능 및 개선 사항을 담은 이메일 수신",
  ],
  [
    "Occasional emails to help you get the most out of Linear",
    "Linear를 최대한 활용하기 위한 가끔씩의 이메일",
  ],
  [
    "Subscribe to product announcements and important changes from the Linear team",
    "Linear 팀의 제품 공지 및 중요 변경 사항 구독",
  ],
  ["Email when invitees accept an invite", "초대 수락 시 이메일 수신"],
  [
    "Email when privacy policies or terms of service change",
    "개인정보 처리방침 또는 서비스 약관 변경 시 이메일 수신",
  ],
  ["Email when our DPA changes", "DPA 변경 시 이메일 수신"],
  [
    "Passkeys are a secure way to sign in to your Linear account",
    "패스키는 Linear 계정에 안전하게 로그인하는 방법입니다",
  ],
  [
    "Use Linear's GraphQL API to build your own integrations",
    "Linear GraphQL API로 직접 연동을 구축하세요",
  ],
  ["OAuth applications you've approved", "승인한 OAuth 애플리케이션"],
  [
    "No applications have been authorized to connect with your account.",
    "계정에 연결된 승인 애플리케이션이 없습니다.",
  ],
  [
    "Connect your user accounts to sync attribution of your actions between apps",
    "앱 간 작업 귀속 동기화를 위해 계정을 연결하세요",
  ],
  [
    "Sync attribution of your messages, and optionally receive notifications in Slack",
    "메시지 귀속 동기화 및 Slack 알림 수신 설정",
  ],
  [
    "First, your workspace needs to be connected to GitHub",
    "먼저 워크스페이스를 GitHub에 연결해야 합니다",
  ],
  [
    "Sync your calendar out-of-office status to Linear",
    "캘린더 부재 상태를 Linear와 동기화",
  ],
  [
    "Preview issues, projects, and views within Notion",
    "Notion 내에서 이슈, 프로젝트, 뷰 미리보기",
  ],
  ["Your personal settings for Linear Agent", "Linear 에이전트 개인 설정"],
  [
    "Provide personal instructions and context for the Linear Agent when responding to conversations",
    "대화 응답 시 Linear 에이전트에게 개인 지침과 컨텍스트를 제공하세요",
  ],
  [
    "Reusable prompts auto-selected by the agent or invoked via slash commands",
    "에이전트가 자동 선택하거나 슬래시 명령으로 호출하는 재사용 가능한 프롬프트",
  ],

  // ── SLA / Project / Initiatives / AI descriptions ─────────────
  [
    "Service-level agreements are available on Business and Enterprise plans",
    "SLA는 비즈니스 및 엔터프라이즈 플랜에서 사용 가능합니다",
  ],
  [
    "Use automation rules to automatically add or remove SLAs based on filters.",
    "자동화 규칙으로 필터에 따라 SLA를 자동으로 추가하거나 제거하세요.",
  ],
  [
    "Project statuses define the workflow that projects go through from start to completion",
    "프로젝트 상태는 시작부터 완료까지의 워크플로우를 정의합니다",
  ],
  [
    "Configure how often updates are expected on projects. Project leads will receive reminders to post updates.",
    "프로젝트 업데이트 빈도를 설정하세요. 프로젝트 담당자에게 업데이트 게시 알림이 발송됩니다.",
  ],
  [
    "Updates are only posted to Slack when associated with at least one non-private team",
    "비공개가 아닌 팀이 하나 이상 연결된 경우에만 Slack에 업데이트가 게시됩니다",
  ],
  [
    "Send project updates to a Slack channel",
    "Slack 채널에 프로젝트 업데이트 전송",
  ],
  [
    "Connect a channel to send all project updates to",
    "모든 프로젝트 업데이트를 전송할 채널을 연결하세요",
  ],
  [
    "Automate your product development processes and operations with AI",
    "AI로 제품 개발 프로세스 및 운영을 자동화하세요",
  ],
  [
    "Linear Agent and AI automations are available on Business and Enterprise plans",
    "Linear 에이전트 및 AI 자동화는 비즈니스 및 엔터프라이즈 플랜에서 사용 가능합니다",
  ],
  [
    "Create issues and answer questions about your workspace.",
    "이슈를 만들고 워크스페이스에 대한 질문에 답합니다.",
  ],
  [
    "Automated workflows that trigger when issues are added to triage",
    "이슈가 트리아지에 추가될 때 실행되는 자동화 워크플로우",
  ],
  [
    "Find related issues and infer properties like team, project, labels, and assignee",
    "관련 이슈를 찾고 팀, 프로젝트, 라벨, 담당자 등의 속성을 추론합니다",
  ],
  [
    "Integrations available to Linear Agent.",
    "Linear 에이전트에서 사용 가능한 연동.",
  ],
  [
    "Available on Slack, Microsoft Teams, and Gong. Add integrations to your workspace to use.",
    "Slack, Microsoft Teams, Gong에서 사용 가능합니다. 워크스페이스에 연동을 추가해 사용하세요.",
  ],
  [
    "AI agents can work alongside you as teammates.",
    "AI 에이전트는 팀원으로서 함께 작업할 수 있습니다.",
  ],
  [
    "Provide context and instructions for installed agents",
    "설치된 에이전트에 대한 컨텍스트와 지침을 제공하세요",
  ],
  [
    "Control AI-generated summaries across Linear",
    "Linear 전체에서 AI 생성 요약을 관리하세요",
  ],
  [
    "Configure how often updates are expected on initiatives. Initiative owners will receive reminders to post updates.",
    "이니셔티브 업데이트 빈도를 설정하세요. 이니셔티브 소유자에게 업데이트 게시 알림이 발송됩니다.",
  ],
  [
    "Send initiative updates to a Slack channel",
    "Slack 채널에 이니셔티브 업데이트 전송",
  ],
  [
    "Connect a channel to send all initiative updates to",
    "모든 이니셔티브 업데이트를 전송할 채널을 연결하세요",
  ],

  // ── Customer / Pulse / Asks descriptions ──────────────────────
  [
    "Workspace-wide access to create and view customer requests",
    "워크스페이스 전체에서 고객 요청 생성 및 조회 가능",
  ],
  [
    "Manage your list of customers and their requests",
    "고객 목록 및 요청 관리",
  ],
  ["Define tiers for segmenting customers", "고객 세분화 등급 정의"],
  [
    "Data imports must be in annual figures, but can be displayed as monthly or annual",
    "데이터는 연간 단위로 가져와야 하며, 월간 또는 연간으로 표시할 수 있습니다",
  ],
  [
    "The currency used when displaying customer revenue",
    "고객 매출 표시에 사용되는 통화",
  ],
  [
    "Sync customer attributes from an external data source",
    "외부 데이터 소스에서 고객 속성 동기화",
  ],
  [
    "Attributes can be edited in the Linear UI",
    "Linear UI에서 속성을 편집할 수 있습니다",
  ],
  [
    "Domains and emails that should never create customer requests",
    "고객 요청을 생성하지 않을 도메인 및 이메일",
  ],
  ["List of generic domains", "일반 도메인 목록"],
  [
    "Workspace-wide feed of updates with optional summary notifications",
    "선택적 요약 알림이 포함된 워크스페이스 전체 업데이트 피드",
  ],
  [
    "Pulse summary notifications can be delivered in the mornings based on a set schedule",
    "펄스 요약 알림은 설정된 일정에 따라 오전에 전달될 수 있습니다",
  ],
  [
    "Applies to all members who haven't set their own preference",
    "개인 설정을 하지 않은 모든 멤버에게 적용됩니다",
  ],
  [
    "Only applies to you, overriding the workspace default",
    "워크스페이스 기본값을 재정의하며 본인에게만 적용됩니다",
  ],
  [
    "Let anyone submit bug reports, feature requests, and more using structured templates from",
    "구조화된 템플릿으로 누구나 버그 리포트, 기능 요청 등을 제출할 수 있습니다",
  ],
  [
    "Asks intake is available on Business or Enterprise plans",
    "요청 접수는 비즈니스 또는 엔터프라이즈 플랜에서 사용 가능합니다",
  ],

  // ── Workspace general descriptions ───────────────────────────
  [
    "Used when grouping projects and issues quarterly, half-yearly, and yearly",
    "분기별, 반기별, 연간 프로젝트 및 이슈 그룹화에 사용됩니다",
  ],
  [
    "Set when a workspace is created and cannot be changed.",
    "워크스페이스 생성 시 설정되며 변경할 수 없습니다.",
  ],
  [
    "Schedule workspace to be permanently deleted",
    "워크스페이스 영구 삭제 예약",
  ],
  [
    "A uniquely generated invite link allows anyone with the link to join your workspace",
    "고유 생성된 초대 링크로 누구나 워크스페이스에 참여할 수 있습니다",
  ],
  [
    "Anyone with an email address at these domains is allowed to sign up for this workspace.",
    "해당 도메인의 이메일 주소를 가진 누구나 이 워크스페이스에 가입할 수 있습니다.",
  ],
  [
    "Admins and guests can always authenticate via Google and email/passkeys — even when disabled for members.",
    "관리자와 게스트는 멤버에게 비활성화된 경우에도 Google 및 이메일/패스키로 인증할 수 있습니다.",
  ],
  [
    "When enabled, this is available to all workspace members and guests",
    "활성화 시 모든 워크스페이스 멤버와 게스트가 사용할 수 있습니다",
  ],
  [
    "Manage logins via an identity provider's SSO",
    "ID 제공자의 SSO로 로그인 관리",
  ],
  [
    "Who can invite new members to the workspace",
    "워크스페이스에 새 멤버를 초대할 수 있는 사람",
  ],
  ["Who can create new teams", "새 팀을 만들 수 있는 사람"],
  [
    "Who can create, update, and delete workspace labels",
    "워크스페이스 라벨을 만들고 수정하고 삭제할 수 있는 사람",
  ],
  [
    "Who can manage workspace templates and recurring issues",
    "워크스페이스 템플릿 및 반복 이슈를 관리할 수 있는 사람",
  ],
  [
    "Who can create API keys to interact with the Linear API on their behalf",
    "Linear API를 사용하는 API 키를 만들 수 있는 사람",
  ],
  [
    "Who can modify workspace-level agent guidance prompts",
    "워크스페이스 수준의 에이전트 가이던스 프롬프트를 수정할 수 있는 사람",
  ],
  [
    "Only allow specific file types to be uploaded",
    "특정 파일 형식만 업로드 허용",
  ],
  [
    "Control which applications can be installed to your workspace.",
    "워크스페이스에 설치할 수 있는 애플리케이션을 관리하세요.",
  ],
  [
    "Reduce personal information from support integrations",
    "지원 연동에서 개인 정보 최소화",
  ],
  [
    "Personal information from support integrations won't be stored",
    "지원 연동의 개인 정보가 저장되지 않습니다",
  ],
  [
    "Prevent guests from interacting with agents in the workspace",
    "게스트가 워크스페이스에서 에이전트와 상호작용하지 못하도록 방지",
  ],
  [
    "Restrict agent invocation to full workspace members only",
    "에이전트 호출을 전체 워크스페이스 멤버만으로 제한",
  ],
  [
    "Improve AI features by sharing usage data",
    "사용 데이터를 공유하여 AI 기능 개선",
  ],
  [
    "Feedback on AI results is used to enhance functionality and will not be used to train models",
    "AI 결과에 대한 피드백은 기능 개선에 사용되며 모델 훈련에는 사용되지 않습니다",
  ],
  [
    "Allow Linear Agent to search the public web for current information and cite sources",
    "Linear 에이전트가 최신 정보를 찾기 위해 공개 웹을 검색하고 출처를 인용할 수 있습니다",
  ],
  [
    "Allow Linear Agent to use connected MCP servers",
    "Linear 에이전트가 연결된 MCP 서버를 사용하도록 허용",
  ],
  [
    "Enable privacy and security measures to ensure that Protected Health Information (PHI) is appropriately safeguarded",
    "보호된 건강 정보(PHI)가 적절히 보호되도록 개인정보 보호 및 보안 조치 활성화",
  ],
  [
    "Manage your organization's OAuth applications.",
    "조직의 OAuth 애플리케이션 관리.",
  ],
  [
    "Webhooks allow you to receive HTTP requests when an entity is created, updated, or deleted.",
    "웹훅을 사용하면 엔티티가 생성, 수정 또는 삭제될 때 HTTP 요청을 받을 수 있습니다.",
  ],
  [
    "Manage which third-party applications have access to your workspace.",
    "워크스페이스에 접근할 수 있는 서드파티 애플리케이션을 관리하세요.",
  ],
  [
    "Your workspace has not yet authorized any external applications to connect with your Linear account",
    "아직 외부 애플리케이션이 Linear 계정에 연결 승인되지 않았습니다",
  ],
  [
    "If you use another service to track issues, this tool will create a copy of them in Linear.",
    "다른 서비스로 이슈를 추적하는 경우 이 도구로 Linear에 복사본을 만들 수 있습니다.",
  ],
  [
    "Name, identifier, timezone, estimates, and broader settings",
    "이름, 식별자, 시간대, 추정치 및 기타 설정",
  ],

  // ── Team settings descriptions ────────────────────────────────
  [
    "Pre-filled templates for issues, documents, and projects",
    "이슈, 문서, 프로젝트의 사전 작성된 템플릿",
  ],
  ["Automatically create issues on a schedule", "일정에 따라 이슈 자동 생성"],
  [
    "Manage issue automations, git workflows and other workflows",
    "이슈 자동화, Git 워크플로우 등 워크플로우 관리",
  ],
  [
    "Streamline how you handle requests from outside your team",
    "팀 외부 요청 처리 방식을 간소화하세요",
  ],
  [
    "Focus your team over short, time-boxed windows",
    "짧은 기간 동안 팀의 집중도를 높이세요",
  ],
  [
    "Add guidance for how agents should operate within this team",
    "이 팀에서 에이전트 운영 방식에 대한 가이던스를 추가하세요",
  ],
  [
    "Automatically generate summaries for issues and comments",
    "이슈 및 댓글에 대한 요약을 자동으로 생성합니다",
  ],
  [
    "Teams can be nested to reflect your team structure and to share workflows and settings.",
    "팀을 중첩하여 팀 구조를 반영하고 워크플로우 및 설정을 공유할 수 있습니다.",
  ],
  [
    "Prevent creating and updating issues in this team while preserving all historical data",
    "모든 기록 데이터를 보존하면서 이 팀에서의 이슈 생성 및 수정을 방지합니다",
  ],
  [
    "Permanently delete this team and all its data, with a 30-day restoration window",
    "이 팀과 모든 데이터를 영구 삭제합니다. 30일 이내 복구 가능합니다.",
  ],
  [
    "Teams are groups of people who regularly work together.",
    "팀은 정기적으로 함께 일하는 사람들의 그룹입니다.",
  ],
  [
    "When you join a team, you'll be listed as a team member. This makes managing and assigning work easier for everyone.",
    "팀에 가입하면 팀원으로 등록됩니다. 이를 통해 모두가 작업을 더 쉽게 관리하고 배정할 수 있습니다.",
  ],

  // ── SLA / Initiatives / Templates ────────────────────────────
  [
    "Service-level agreements (SLAs) automatically apply deadlines to issues when they match predefined parameters. While often used to define response times to customer issues, they can also be used to define internal standards for bug and time-sensitive issue resolution.",
    "SLA는 이슈가 사전 정의된 조건에 일치할 때 자동으로 마감 기한을 적용합니다. 고객 이슈 응답 시간 정의에 주로 사용되지만, 버그 및 시간 민감한 이슈 해결을 위한 내부 기준 설정에도 활용할 수 있습니다.",
  ],
  [
    "Initiatives group multiple projects that contribute toward the same strategic effort. Use initiatives to plan and coordinate larger streams of work and monitor their progress at scale.",
    "이니셔티브는 동일한 전략적 목표에 기여하는 여러 프로젝트를 묶습니다. 이니셔티브를 사용해 더 큰 작업 흐름을 계획·조율하고 진행 상황을 전사적으로 모니터링하세요.",
  ],
  [
    "These templates are available when creating documents for any team in the workspace. To create templates that only apply to specific teams, add them as team templates.",
    "이 템플릿은 워크스페이스 내 모든 팀의 문서 생성 시 사용할 수 있습니다. 특정 팀에만 적용되는 템플릿을 만들려면 팀 템플릿으로 추가하세요.",
  ],
  [
    "These templates are available when creating issues for any team in the workspace. To create templates that only apply to specific teams, add them as team templates.",
    "이 템플릿은 워크스페이스 내 모든 팀의 이슈 생성 시 사용할 수 있습니다. 특정 팀에만 적용되는 템플릿을 만들려면 팀 템플릿으로 추가하세요.",
  ],

  // ── Customer / Pulse descriptions (신규) ─────────────────────
  [
    "Associate customers with projects and issues to align development efforts with real user needs. Manage and track customer requests across your entire organization.",
    "고객을 프로젝트 및 이슈와 연결하여 개발 방향을 실제 사용자 니즈에 맞추세요. 조직 전체에서 고객 요청을 관리하고 추적하세요.",
  ],
  [
    "When a new issue is created from a customer page, it will be routed to the default team's triage or backlog. This centralizes customer requests for ease of management and prioritization.",
    "고객 페이지에서 새 이슈가 생성되면 기본 팀의 트리아지 또는 백로그로 전달됩니다. 이를 통해 고객 요청이 중앙화되어 관리와 우선순위 지정이 용이해집니다.",
  ],
  [
    "Domains and emails that are not associated with a specific customer. Common providers like Gmail, Outlook, etc. are already included.",
    "특정 고객과 연결되지 않은 도메인 및 이메일입니다. Gmail, Outlook 등 일반 제공자는 이미 포함되어 있습니다.",
  ],
  [
    "Pulse centralizes all your project updates into a single feed. Members can choose to receive summary notifications daily or weekly.",
    "펄스는 모든 프로젝트 업데이트를 하나의 피드로 모읍니다. 멤버는 일별 또는 주별 요약 알림을 수신하도록 선택할 수 있습니다.",
  ],
  ["Customer attributes data source", "고객 속성 데이터 소스"],

  // ── Integrations page ─────────────────────────────────────────
  [
    "Enhance your Linear experience with a wide variety of add-ons and integrations",
    "다양한 애드온과 연동으로 Linear를 더욱 강력하게 사용하세요",
  ],
  ["Agents", "에이전트"],
  [
    "Create issues from Slack messages and sync threads",
    "Slack 메시지로 이슈를 만들고 스레드를 동기화",
  ],
  [
    "Automate your pull request and commit workflows and keep issues synced both ways",
    "풀 리퀘스트·커밋 워크플로우를 자동화하고 이슈를 양방향 동기화하세요",
  ],
  ["Automate your Merge Request workflow", "머지 리퀘스트 워크플로우 자동화"],
  [
    "Create and link issues directly from Figma",
    "Figma에서 직접 이슈를 만들고 연결하세요",
  ],
  [
    "Keep a tight feedback loop with customers and streamline bug reports",
    "고객과의 피드백 루프를 긴밀히 유지하고 버그 리포트를 간소화하세요",
  ],
  [
    "Keep a tight feedback loop with customers and streamline customer requests",
    "고객과의 피드백 루프를 긴밀히 유지하고 고객 요청을 간소화하세요",
  ],
  [
    "Build custom dashboards and analytics from issue and project data",
    "이슈 및 프로젝트 데이터로 커스텀 대시보드와 분석을 만드세요",
  ],
  [
    "Delegate issues to Codex directly from Linear",
    "Linear에서 직접 Codex에 이슈를 위임하세요",
  ],
  [
    "Turn issues into pull requests with Cursor cloud agents",
    "Cursor 클라우드 에이전트로 이슈를 풀 리퀘스트로 전환",
  ],
  [
    "Turn Linear issues into code with GitHub Copilot coding agent",
    "GitHub Copilot 코딩 에이전트로 Linear 이슈를 코드로 변환",
  ],
  [
    "Assign issues from your backlog to Droids",
    "백로그의 이슈를 Droids에 배정하세요",
  ],
  [
    "Resolve Linear Issues with Seer by Sentry",
    "Sentry의 Seer로 Linear 이슈를 해결하세요",
  ],
  [
    "Automate work from issue to tested PR with Devin",
    "Devin으로 이슈부터 테스트된 PR까지 작업을 자동화",
  ],
  [
    "Writes requirements, manages issues, and gives feedback on your product work",
    "요구사항을 작성하고 이슈를 관리하며 제품 작업에 피드백을 제공합니다",
  ],
  [
    "Plans, implements, and reviews your TypeScript PRs",
    "TypeScript PR을 계획하고 구현하며 검토합니다",
  ],
  [
    "Connect Cursor to the Linear MCP server",
    "Cursor를 Linear MCP 서버에 연결하세요",
  ],
  [
    "Connect ChatGPT deep research to Linear",
    "ChatGPT 딥 리서치를 Linear에 연결하세요",
  ],
  [
    "Connect Claude to the Linear MCP server",
    "Claude를 Linear MCP 서버에 연결하세요",
  ],
  ["Connect v0 and Linear through MCP", "MCP를 통해 v0와 Linear를 연결하세요"],
  [
    "Connect Windsurf to the Linear MCP server",
    "Windsurf를 Linear MCP 서버에 연결하세요",
  ],
  ["Build Apps & Automations", "앱 및 자동화 구축"],
  [
    "Build AI workflows with Linear issues",
    "Linear 이슈로 AI 워크플로우를 구축하세요",
  ],
  [
    "Connect your Google ADK agents to Linear",
    "Google ADK 에이전트를 Linear에 연결하세요",
  ],
  [
    "Automate the rotation of triage responsibility with PagerDuty schedules",
    "PagerDuty 스케줄로 트리아지 책임 순환을 자동화하세요",
  ],
  [
    "Create and link issues with Sentry and automate issue creation",
    "Sentry와 이슈를 만들고 연결하며 이슈 생성을 자동화하세요",
  ],
  [
    "Easily build VS Code extensions with Linear Connect",
    "Linear Connect로 VS Code 확장 프로그램을 쉽게 구축하세요",
  ],
  ["Create issues from Datadog", "Datadog에서 이슈를 만드세요"],
  [
    "Manage incidents and triage responsibility directly in Linear",
    "Linear에서 직접 인시던트와 트리아지 책임을 관리하세요",
  ],
  [
    "Create, search, and modify your issues from anywhere",
    "어디서든 이슈를 만들고 검색하고 수정하세요",
  ],
  [
    "Turn requests from Slack or email into actionable issues and enable helpdesk workflows",
    "Slack 또는 이메일의 요청을 실행 가능한 이슈로 변환하고 헬프데스크 워크플로우를 활성화하세요",
  ],
  [
    "Previews of Linear issues, views and projects and query Notion AI",
    "Linear 이슈, 뷰, 프로젝트 미리보기 및 Notion AI 쿼리",
  ],
  [
    "Build custom automations to create or update Linear issues",
    "Linear 이슈 생성 또는 업데이트를 위한 커스텀 자동화 구축",
  ],
  [
    "Speed up your bug reporting workflow with Bird Eats Bug",
    "Bird Eats Bug로 버그 리포트 워크플로우를 빠르게 하세요",
  ],
  [
    "Manage Honeybadger errors via Linear issues",
    "Linear 이슈로 Honeybadger 에러를 관리하세요",
  ],
  [
    "Create Linear issues with all the details developers need to resolve bugs faster",
    "개발자가 버그를 빠르게 해결하는 데 필요한 모든 정보로 Linear 이슈를 만드세요",
  ],
  [
    "Turn Vercel Preview Deployment comments into action items",
    "Vercel 미리보기 배포 댓글을 실행 항목으로 전환",
  ],
  [
    "Create new issues right from your browser command bar",
    "브라우저 커맨드 바에서 바로 새 이슈를 만드세요",
  ],
  ["Create issues via email", "이메일로 이슈 만들기"],
  [
    "Set up email addresses for teams or templates to create issues via email",
    "팀 또는 템플릿에 이메일 주소를 설정하여 이메일로 이슈를 만드세요",
  ],
  [
    "Smoothly transition from Jira to Linear",
    "Jira에서 Linear로 원활하게 전환하세요",
  ],
  [
    "Sync your Linear data with the Fivetran connector",
    "Fivetran 커넥터로 Linear 데이터를 동기화하세요",
  ],
  [
    "Make code reviews easier by syncing your pull request channels with your Linear issues",
    "풀 리퀘스트 채널과 Linear 이슈를 동기화하여 코드 리뷰를 더 쉽게 하세요",
  ],
  [
    "Create Linear issues and comments based on Jira tasks",
    "Jira 작업을 기반으로 Linear 이슈와 댓글을 만드세요",
  ],
  [
    "Automatically create Linear issues from meeting action items",
    "회의 액션 아이템에서 Linear 이슈를 자동으로 생성하세요",
  ],
  [
    "Sync Canny posts to Linear issues to keep customers in the loop",
    "Canny 게시물을 Linear 이슈에 동기화하여 고객을 최신 상태로 유지하세요",
  ],
  [
    "Helpdesk, customer requests portal, public roadmap, and changelog built on Linear",
    "Linear 기반의 헬프데스크, 고객 요청 포털, 공개 로드맵, 체인지로그",
  ],
  [
    "The Productboard and Jira Product Discovery alternative for Product Management on Linear",
    "Linear 기반 제품 관리를 위한 Productboard·Jira Product Discovery 대안",
  ],
  [
    "Create Linear issues from Salesforce cases",
    "Salesforce 케이스에서 Linear 이슈를 만드세요",
  ],
  [
    "Drive work forward by turning conversations into issues, projects, and documents",
    "대화를 이슈, 프로젝트, 문서로 전환하여 업무를 추진하세요",
  ],
  [
    "Create issues, share updates, and keep everyone in sync",
    "이슈를 만들고 업데이트를 공유하여 모두를 동기화하세요",
  ],
  [
    "Search Linear for instant insights",
    "Linear를 검색하여 즉각적인 인사이트를 얻으세요",
  ],
  [
    "Pull Linear issues into async check-ins to keep your software development team in sync",
    "Linear 이슈를 비동기 체크인에 가져와 개발팀을 동기화하세요",
  ],
  [
    "Create and link Linear workflow content directly within Canva",
    "Canva 내에서 직접 Linear 워크플로우 콘텐츠를 만들고 연결하세요",
  ],
  [
    "Record bugs and directly create issues in Linear",
    "버그를 녹화하고 Linear에 직접 이슈를 만드세요",
  ],
  [
    "Embed Descript share URLs in Linear issues and documents",
    "Linear 이슈 및 문서에 Descript 공유 URL을 삽입하세요",
  ],
  [
    "Embed Loom videos in Linear issues and documents",
    "Linear 이슈 및 문서에 Loom 동영상을 삽입하세요",
  ],
  [
    "Import, create and manage issues directly in Miro",
    "Miro에서 직접 이슈를 가져오고 만들고 관리하세요",
  ],
  [
    "Effectively report an issue with embedded screenshots and videos",
    "스크린샷과 동영상을 포함하여 이슈를 효과적으로 리포트하세요",
  ],
  ["Embed Tella videos in Linear", "Linear에 Tella 동영상을 삽입하세요"],
  [
    "Embed YouTube videos in Linear issues and documents",
    "Linear 이슈 및 문서에 YouTube 동영상을 삽입하세요",
  ],
  [
    "Connect Linear to Airbyte and consolidate data in data warehouses, lakes, and databases",
    "Linear를 Airbyte에 연결하고 데이터 웨어하우스, 레이크, 데이터베이스에 데이터를 통합하세요",
  ],
  [
    "Create, update, and analyze Linear issues in custom internal tools",
    "커스텀 내부 도구에서 Linear 이슈를 만들고 수정하고 분석하세요",
  ],
  [
    "See how work translates into engineering impact",
    "업무가 엔지니어링 임팩트로 어떻게 연결되는지 확인하세요",
  ],
  [
    "Developer productivity insights and AI impact signals in one dashboard",
    "하나의 대시보드에서 개발자 생산성 인사이트와 AI 임팩트 신호를 확인하세요",
  ],
  [
    "Analyze your team's performance, project lifecycles, issues and more with the Linear Pack for Coda",
    "Linear Pack for Coda로 팀 성과, 프로젝트 생애주기, 이슈 등을 분석하세요",
  ],
  [
    "Create reports of your cycles that your clients can review and sign off on",
    "클라이언트가 검토하고 승인할 수 있는 사이클 보고서를 만드세요",
  ],
  [
    "Put your application security on autopilot",
    "애플리케이션 보안을 자동화하세요",
  ],
  [
    "Automated daily backups of your Linear workspace with on-demand restore",
    "Linear 워크스페이스의 자동 일별 백업 및 온디맨드 복원",
  ],
  [
    "Simplify risk and managing frameworks like SOC 2, ISO 27001, PCI and more",
    "SOC 2, ISO 27001, PCI 등의 리스크 관리 프레임워크를 간소화하세요",
  ],
  [
    "Create and link issues directly from Fencer",
    "Fencer에서 직접 이슈를 만들고 연결하세요",
  ],
  [
    "Keep your workspace compliant with org policies using Kawach.AI",
    "Kawach.AI로 워크스페이스가 조직 정책을 준수하도록 유지하세요",
  ],
  [
    "Streamline security fixes by sharing relevant context with the right people",
    "적절한 담당자에게 관련 컨텍스트를 공유하여 보안 수정을 간소화하세요",
  ],
  [
    "Create and link SecureSlate security tickets to Linear",
    "SecureSlate 보안 티켓을 만들고 Linear에 연결하세요",
  ],
  [
    "Automate compliance. Simplify security. Demonstrate trust.",
    "컴플라이언스 자동화. 보안 간소화. 신뢰 입증.",
  ],

  // ── API / Import / UI labels (신규) ───────────────────────────
  ["SAML & SCIM", "SAML & SCIM"],
  [
    "Linear's GraphQL API provides a programmable interface to your data. Use our API to build public or private apps, workflows, and integrations for Linear.",
    "Linear GraphQL API는 데이터에 대한 프로그래밍 가능한 인터페이스를 제공합니다. API를 사용해 Linear용 공개 또는 비공개 앱, 워크플로우, 연동을 구축하세요.",
  ],
  [
    "Import issues using our open-source command line tool. Supports Asana (CSV), Jira (CSV), GitHub (API), Pivotal Tracker (CSV), Shortcut (CSV), and Trello (JSON).",
    "오픈소스 커맨드 라인 도구로 이슈를 가져오세요. Asana(CSV), Jira(CSV), GitHub(API), Pivotal Tracker(CSV), Shortcut(CSV), Trello(JSON)를 지원합니다.",
  ],
  ["CLI Importer", "CLI 가져오기 도구"],
  ["You haven't added any skills yet", "아직 추가된 스킬이 없습니다"],
  [
    "Connect to MCP servers for use with the Linear Agent. Available servers are managed by workspace admins in security settings.",
    "Linear 에이전트에서 사용할 MCP 서버에 연결하세요. 사용 가능한 서버는 보안 설정에서 워크스페이스 관리자가 관리합니다.",
  ],

  // ── Navigation labels (신규) ──────────────────────────────────
  ["Issues", "이슈"],
  ["backlog", "백로그"],

  // ── Issue detail actions (신규) ───────────────────────────────
  ["Add labels", "라벨 추가"],
  ["Set due date", "마감일 설정"],
  ["Make recurring…", "반복 설정…"],
  ["Add link…", "링크 추가…"],
  ["Add sub-issue", "하위 이슈 추가"],

  // ── Invite UI ────────────────────────────────────────────────
  ["Invite to your workspace", "워크스페이스에 초대"],
  ["Send invites", "초대 보내기"],
  ["local time", "현지 시간"],

  // ── Project views empty state ─────────────────────────────────
  [
    "Create custom views using filters to show only the projects you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.",
    "필터로 원하는 프로젝트만 보이는 커스텀 뷰를 만들 수 있습니다. 뷰를 저장·공유·즐겨찾기해서 빠르게 접근하고 팀과 협업하세요.",
  ],

  // ── Data export ───────────────────────────────────────────────
  [
    "You can export your issue data in CSV format. Once the export is available, we'll email you the download link.",
    "이슈 데이터를 CSV 형식으로 내보낼 수 있습니다. 내보내기가 완료되면 다운로드 링크를 이메일로 보내드립니다.",
  ],

  // ── Due date picker ───────────────────────────────────────────
  ["Custom…", "직접 설정…"],
  ["Tomorrow", "내일"],
  ["End of this week", "이번 주 말"],
  ["In one week", "1주 후"],
  ["Last used", "최근 사용"],
  [
    "Issue needs to be completed by this date",
    "이 날짜까지 이슈를 완료해야 합니다",
  ],
  ["Save due date", "마감일 저장"],
  ["Change due date", "마감일 변경"],
  ["Remove due date", "마감일 제거"],
  ["Unsupported date format", "지원하지 않는 날짜 형식"],

  // ── Date granularity / Gantt zoom ─────────────────────────────
  ["Quarter", "분기"],
  ["Half-year", "반기"],
  ["Year", "연도"],
  ["Week", "주"],
  ["Month", "월"],

  // ── Project creation / edit ───────────────────────────────────
  ["New project", "새 프로젝트"],
  ["Create project", "프로젝트 만들기"],
  ["No lead", "리드 없음"],
  ["Project lead", "프로젝트 리드"],
  ["Users from the project team", "프로젝트 팀 사용자"],
  ["Start date", "시작일"],
  ["Milestones", "마일스톤"],
  ["Dependencies", "의존성"],
  ["Add milestone", "마일스톤 추가"],
  ["Discard project", "프로젝트 버리기"],
  ["Discard changes?", "변경사항을 버릴까요?"],
  [
    "Are you sure you want to discard the changes you've made to this project?",
    "이 프로젝트의 변경사항을 버릴까요?",
  ],
  ["Discard", "버리기"],

  // ── Project view options ──────────────────────────────────────
  ["More actions", "더 많은 작업"],
  ["Save to", "저장 위치"],
  ["Personal", "개인"],
  ["Personal views", "개인 뷰"],
  ["Only visible to you", "나만 볼 수 있음"],
  [
    "There are no projects in this view yet.",
    "이 뷰에 아직 프로젝트가 없습니다.",
  ],
  ["Grouping", "그룹화"],
  ["No grouping", "그룹화 없음"],
  ["Ordering", "정렬 기준"],
  ["Manual", "수동"],
  ["Show closed projects", "완료된 프로젝트 표시"],
  ["Display properties", "표시 속성"],
  ["Updated", "업데이트순"],
  ["Health updated", "건강도 업데이트순"],
  ["Add label group…", "라벨 그룹 추가…"],
  ["Past week", "지난 주"],
  ["Past month", "지난 달"],
  ["Past 3 months", "지난 3개월"],
  ["Past 6 months", "지난 6개월"],
  ["Rows", "행"],
  ["Toggle layout view", "레이아웃 뷰 전환"],
  ["Show project list", "프로젝트 목록 표시"],
  ["Show week numbers", "주 번호 표시"],
  ["Predictions", "예측"],
  ["Your view was successfully created.", "뷰가 성공직으로 생성되었습니다."],
  ["Open view", "뷰 열기"],

  // ── Label creation ────────────────────────────────────────────
  ["Start typing to create a new label", "입력하여 새 라벨 만들기"],
  ["No matching actions", "일치하는 작업 없음"],

  // ── Views empty state (issues or projects) ────────────────────
  [
    "Create custom views using filters to show only the issues or projects you want to see. You can save, share, and favorite these views for easy access and faster team collaboration.",
    "필터로 원하는 이슈 또는 프로젝트만 보이는 커스텀 뷰를 만들 수 있습니다. 뷰를 저장·공유·즐겨찾기해서 빠르게 접근하고 팀과 협업하세요.",
  ],

  // ── Toolbar / Filter ──────────────────────────────────────────
  ["Show display options", "표시 옵션 보기"],
  ["Center the timeline on today's date", "타임라인을 오늘 날짜로 중앙 정렬"],
  ["Add Filter", "필터 추가"],
  ["AI filter", "AI 필터"],
  ["Advanced filter", "고급 필터"],
  ["No matching options", "일치하는 옵션 없음"],
  ["Current user", "현재 사용자"],
  ["Dates", "날짜"],
  ["No initiatives", "이니셔티브 없음"],
  ["Relations", "관계"],
  ["Title & summary", "제목 및 요약"],
  ["Specific project", "특정 프로젝트"],
  ["Filter by title & summary…", "제목 및 요약으로 필터…"],
  ["No template", "템플릿 없음"],

  // ── Project health states ─────────────────────────────────────
  ["On track", "정상 진행"],
  ["At risk", "위험"],
  ["Off track", "이탈"],
  ["Update missing", "업데이트 없음"],
  ["No update expected", "업데이트 예정 없음"],

  // ── Date filter sub-options ───────────────────────────────────
  ["Created date", "생성일"],
  ["Updated date", "수정일"],
  ["Completed date", "완료일"],
  ["Latest update date", "최근 업데이트일"],
  ["Set project target date", "프로젝트 목표 날짜 설정"],

  // ── Milestone / Dependency filters ───────────────────────────
  ["Next milestone", "다음 마일스톤"],
  ["Completed milestones", "완료된 마일스톤"],
  ["Has dependencies", "의존성 있음"],
  ["Blocking projects", "블로킹 중인 프로젝트"],
  ["Blocked projects", "블로킹된 프로젝트"],
  ["Violated dependencies", "위반된 의존성"],

  // ── AI quick filters ──────────────────────────────────────────
  ["my projects", "내 프로젝트"],
  ["completed in the last month", "지난 달에 완료됨"],
  ["in progress", "진행 중"],

  // ── Sidebar badge settings ────────────────────────────────────
  ["Default badge style", "기본 뱃지 스타일"],
  ["Count", "카운트"],
  ["Dot", "점"],
  ["Always show", "항상 표시"],
  ["Show when badged", "뱃지 있을 때 표시"],
  ["Don't show", "표시 안 함"],
  ["Drafts", "임시 저장"],

  // ── Misc UI ───────────────────────────────────────────────────
  ["contact us", "문의하기"],

  // ── Days of week ──────────────────────────────────────────────
  ["Monday", "월요일"],
  ["Tuesday", "화요일"],
  ["Wednesday", "수요일"],
  ["Thursday", "목요일"],
  ["Friday", "금요일"],
  ["Saturday", "토요일"],

  // ── Cycle ─────────────────────────────────────────────────────
  ["Current cycle", "현재 사이클"],

  // ── Text size / Theme ─────────────────────────────────────────
  ["Smaller", "더 작게"],
  ["Small", "작게"],
  ["Large", "크게"],
  ["Larger", "더 크게"],
  ["System preference", "시스템 설정"],

  // ── Coding tools ──────────────────────────────────────────────
  [
    "Tools enabled here can be used to work on issues from the issue page.",
    "이곳에서 활성화된 도구로 이슈 페이지에서 이슈를 처리할 수 있습니다.",
  ],
  [
    "Opens in your terminal. Requires the Linear desktop app.",
    "터미널에서 열립니다. Linear 데스크톱 앱이 필요합니다.",
  ],
  ["Learn more", "자세히 알아보기"],
  ["Opens in VS Code", "VS Code에서 열기"],
  ["Opens in the Codex desktop app", "Codex 데스크톱 앱에서 열기"],
  ["Opens in the Conductor desktop app", "Conductor 데스크톱 앱에서 열기"],
  ["Opens in the Cursor desktop app", "Cursor 데스크톱 앱에서 열기"],
  ["Opens in the Factory desktop app", "Factory 데스크톱 앱에서 열기"],
  ["Opens in the Warp desktop app", "Warp 데스크톱 앱에서 열기"],
  ["Opens in the Windsurf desktop app", "Windsurf 데스크톱 앱에서 열기"],
  ["Opens in the Zed desktop app", "Zed 데스크톱 앱에서 열기"],
  ["Custom script", "커스텀 스크립트"],
  ["Custom link", "커스텀 링크"],
  ["Prompt template", "프롬프트 템플릿"],

  // ── Branch name format ────────────────────────────────────────
  ["Title + Repository", "제목 + 저장소"],

  // ── Update/template descriptions ─────────────────────────────
  [
    "Short status reports about the progress and health of your initiative. Updates are ideally written regularly by the owner of the initiative. Subscribers receive these updates directly in their inbox. You can also configure a Slack channel where all initiative updates are posted.",
    "이니셔티브의 진행 상황과 건강도에 대한 간단한 상태 보고서입니다. 이니셔티브 소유자가 정기적으로 작성하며, 구독자는 받은 편지함에서 바로 확인할 수 있습니다. Slack 채널을 설정하면 모든 이니셔티브 업데이트를 해당 채널에서 받을 수 있습니다.",
  ],
  [
    "Short status reports about the progress and health of your projects. Project members regularly post updates, and subscribers automatically receive them in their inbox.",
    "프로젝트의 진행 상황과 건강도에 대한 간단한 상태 보고서입니다. 프로젝트 멤버가 정기적으로 업데이트를 올리며, 구독자는 받은 편지함에서 자동으로 수신합니다.",
  ],
  [
    "These templates are available when creating projects for any team in the workspace. To create templates that only apply to specific teams, add them as team templates.",
    "워크스페이스의 모든 팀에서 프로젝트 생성 시 사용할 수 있는 템플릿입니다. 특정 팀에만 적용되는 템플릿을 만들려면 팀 템플릿으로 추가하세요.",
  ],
]);

/** 딕셔너리 버전 — manifest 버전과 동일하게 유지 */
export const DICTIONARY_VERSION = "0.1.0";
