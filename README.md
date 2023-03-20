# 모여봐요 동물의 숲 쇼핑 리스트 React App

동물의 숲 오픈API(링크)를 이용하여 React로 구현한 가구 리스트 계획용 어플리케이션. 

## 프로젝트 소개

### 프로젝트를 기획하게 된 배경
느긋한 힐링용 캐주얼 게임을 표방하고 있는 모여봐요 동물의 숲 *Animal Crossing New Horizons*. 그러나 빠른 흐름에 익숙하거나 현실에서의 성실함을 갖추지 못한 게이머에게는 다르다. 힐링이 되었어야 할 게임의 핵심 컨텐츠, **채집**과 **인테리어**가 넘어서지 못할 벽으로 다가오기 십상이다. 

#### 게임 본편의 문제점

+ 카탈로그 (일종의 인터넷 쇼핑) 구매 물품의 경우 인게임 시간으로 하루에 5회만 주문 가능
+ 카탈로그 주문 물품이 배송되는 데에도 시간이 걸림
+ 인테리어는 하고 싶으나 창의력이 없는 경우 곤란
+ 가구의 종류와 수가 방대함 

### 프로젝트 지향점
+ 예시 이미지를 참고 가능
+ 쇼핑 리스트를 생성하여 진도 체크

### 프로젝트 기능 소개
+ 예시 이미지를 파일의 형태로 업로드하여 참고 가능
    - 저장 기능 미지원, 새로고침시 재업로드하여야 함
+ 우측 카탈로그에서 원하는 가구 체크 가능
    - 색상, 획득처, 리폼/DIY 여부 지원
+ 생성한 위시리스트를 유저가 복사하여 보관 가능

## 이용 가이드
### 이용 전 준비
참고로 삼을 이미지를 미리 준비하면 좋다. (참고용 이미지를 업로드하지 않아도 이용에 문제는 없다.) 

### 가구 탭 이용
1. 좌측 컬럼의 이미지 업로드 버튼 클릭
2. 우측 컬럼에서 가구 둘러본 후 원하는 가구와 색상을 확인하여 체크박스 체크
3. 좌측 컬럼에 생성되는 리스트 확인 
4. 리스트 생성이 완료되면 복사하여 유저 개인이 보관 

## 사용 기술
+ React hooks
    - useState
    - useEffect
    - useMemo
    - useRef
    - useContext

## 추가 개발 희망사항 
+ 미구현 부분
    - 물고기 (제철 물고기/채집 달성도)
    - 화석 (달성도)
    - 곤충 (제철 곤충/채집 달성도)
    - 벽걸이/잡화/벽지/바닥/카펫
+ 가구 위시리스트 보완 및 개선
    - 리스트와 참고 이미지 저장 기능
    - 자체 진도 체크용 개별 체크리스트 제공
    - 물품 개수 기입 기능
    - 참고 이미지 검색 사이트 (ex. 핀터레스트, 텀블러 등) 연동
