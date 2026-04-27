# LinearKR — Korean UI Helper for Linear

Linear를 사용하는 한국 팀을 위한 비공식 Chrome 확장 프로그램입니다.  
Linear의 주요 UI 용어를 한국어로 보조 표시하여, 한국 팀이 Linear를 더 쉽게 사용할 수 있도록 돕습니다.

> **LinearKR은 Linear 공식 제품이 아닙니다.**  
> Linear와 제휴, 후원, 보증 관계가 없습니다.  
> Linear is a trademark of its respective owner.

---

## 어떤 확장인가요?

LinearKR은 **일반 자동 번역기가 아닙니다.**

페이지 전체를 번역하는 대신, Linear의 고정된 UI 용어만 한국어로 바꾸어 표시합니다.  
이슈 제목·본문·댓글·프로젝트명·팀명 등 **업무 데이터는 절대 건드리지 않습니다.**

| 원문         | LinearKR 표시 |
| ------------ | ------------- |
| Inbox        | 받은함        |
| My Issues    | 내 이슈       |
| Backlog      | 백로그        |
| In Progress  | 진행 중       |
| Assignee     | 담당자        |
| Priority     | 우선순위      |
| Due date     | 마감일        |
| Create issue | 이슈 만들기   |

---

## 주요 특징

- **사전 기반 정확 매칭** — AI·외부 API 없이 로컬에서 동작
- **업무 데이터 보호** — 이슈 본문, 댓글, 프로젝트명 등은 번역하지 않음
- **최소 권한** — `storage` 권한만 사용, `https://linear.app/*` 외 통신 없음
- **데이터 수집 없음** — 사용자 데이터를 외부로 전송하지 않음
- **팝업 토글** — 언제든지 켜고 끌 수 있음

---

## 설치 방법 (직접 설치)

Chrome Web Store 등록 전까지는 아래 방법으로 직접 설치할 수 있습니다.

### 1단계 — 파일 준비

**방법 A: 릴리스 ZIP 다운로드 (권장)**

1. [Releases](../../releases) 페이지에서 최신 `dist.zip`을 다운로드합니다.
2. 적당한 폴더에 압축을 풀어둡니다.  
   예: `C:\Users\사용자명\LinearKR\dist`

**방법 B: 직접 빌드**

```bash
# Node.js 18 이상 필요
git clone <이 저장소 URL>
cd linear-korean-helper
npm install
npm run build
# dist/ 폴더가 생성됩니다
```

---

### 2단계 — Chrome에 확장 설치

1. Chrome 주소창에 `chrome://extensions/` 를 입력하고 Enter
2. 오른쪽 상단 **개발자 모드** 토글을 켭니다
3. **"압축해제된 확장 프로그램을 로드합니다"** 버튼을 클릭합니다
4. `dist/` 폴더를 선택합니다
5. LinearKR 카드가 목록에 나타나면 설치 완료입니다

> **주의:** `dist/` 폴더를 삭제하거나 이동하면 확장이 비활성화됩니다.  
> 폴더 위치를 바꾸지 않도록 주의해주세요.

---

### 3단계 — 사용

1. [linear.app](https://linear.app)에 접속합니다
2. Chrome 툴바의 LinearKR 아이콘을 클릭하면 팝업이 열립니다
3. **한국어 보조 표시** 토글로 켜고 끌 수 있습니다

---

## 브라우저 지원

| 브라우저                  | 지원 여부           | 설치 방법                           |
| ------------------------- | ------------------- | ----------------------------------- |
| Chrome 120+               | ✅ 지원             | 위 직접 설치 가이드 참고            |
| NAVER 웨일                | 🔜 스토어 출시 예정 | 웨일 확장 스토어에서 검색 (심사 중) |
| Microsoft Edge (Chromium) | ✅ 지원             | `edge://extensions/` 에서 직접 설치 |
| Firefox / Safari          | ❌ 미지원           | —                                   |

### NAVER 웨일 스토어

웨일 확장 스토어에 **LinearKR - Korean UI Helper** 로 등록 신청되어 있으며, 현재 심사 중입니다.  
심사 완료 후 스토어 링크를 이 README에 업데이트할 예정입니다.

> 웨일 스토어 출시 전까지는 웨일 브라우저에서도 아래 방법으로 직접 설치할 수 있습니다.  
> 웨일 주소창에 `whale://extensions/`를 입력 → 개발자 모드 활성화 → `dist/` 폴더 로드

---

## 면책 조항

LinearKR is not affiliated with, endorsed by, or sponsored by Linear.  
Linear is a trademark of its respective owner.  
This extension only modifies UI label display in the user’s browser and does not interact with Linear’s servers or APIs.

---

## 라이선스

This project is licensed under the MIT License.

The LinearKR name, logo, icons, and store assets are not licensed for reuse unless explicitly stated.

LinearKR is an unofficial Korean UI helper for Linear and is not affiliated with, endorsed by, or sponsored by Linear.
