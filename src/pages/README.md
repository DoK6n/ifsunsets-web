# Pages Layer Rules

- Route 레벨에서 얻어야 하는 데이터는 이 Page Layer에서 가져온 후 하위 하위 레이어로 내려준다.
  - 예시 : 커뮤니티와 공지사항의 상세 게시글 페이지에서 사용되는 레이아웃이 동일하지만 Path Params의 ID를 가져오는 경로는 다르므로 Page 레벨에서 Route객체를 이용해 `Route.useParams()`를 사용하여 얻은 후 하위 컴포넌트 Props로 내려줄 수 있다.

- Pages Layer에서는 Route Layer에 렌더링 시킬 컴포넌트를 정의한다. 만약 여러 라우트에서 공통으로 사용되는 컴포넌트여도 라우트 구조별로 Page를 만들어야 한다.
