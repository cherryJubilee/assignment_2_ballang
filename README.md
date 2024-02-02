# 발랑 - BALLANG

발랑은 유데미 풀스택 부트캠프 1기에서 만든 명품 쇼핑몰입니다.

## 요구사항

1. 필수 기술스택

   - React (CRA)
   - React Router
   - Context API (인증 정보 한정)
   - Redux (Toolkit, 장바구니와 프로필 정보 한정)
   - 스타일링은 다음 중 하나 또는 그 이상의 조합으로 구성.
     - Tailwind CSS
     - CSS in JS (Styled Components)
     - CSS Module (Sass 사용 가능)

2. 다음의 페이지들이 있어야 합니다.

   1. HomePage

      - 홈페이지에서는 모든 상품의 목록을 볼 수 있어야 합니다.
      - 상품을 장바구니에 추가할 수 있습니다. 추가 버튼을 누르면 1개가 추가됩니다.

   2. ProductDetailPage

      - 상품 상세 페이지에서는 상품에 대한 상세 정보를 볼 수 있어야 합니다.
      - 상품을 장바구니에 추가할 수 있습니다. 수량을 정해서 추가할 수 있습니다.

   3. MyPage

      - 마이페이지에서는 로그인한 유저의 정보를 볼 수 있습니다
      - 마이페이지에서는 로그인한 유저의 정보를 수정할 수 있습니다.

   4. SignInPage

      - 아이디와 패스워드를 입력하여 로그인 할 수 있어야 합니다.
      - 로그인 후에는 자동으로 HomePage로 이동하여야 합니다.

   5. CartPage :

      - 카트에 추가된 상품들은 카트 페이지에서 목록으로 볼 수 있습니다.
      - 카트 페이지 내 목록에서는 상품을 카트에서 제거할 수 있습니다.
      - 카트 페이지 내 목록에서는 상품이 담긴 수량을 조정할 수 있습니다.

3. 다음과 같은 레이아웃 구성이 있어야 합니다.
   1. Layout 컴포넌트를 사용해서 전체 페이지에서 Header와 Footer가 보여야 합니다.
   2. 로그인을 했을 경우에는 Header에서, 로그인한 사용자의 아이디와 로그아웃 버튼이 보여야 합니다.
   3. 로그인을 하지 않았을 경우에는 SignInPage로 이동시켜주는 로그인하기 버튼이 보여야 합니다.
   4. Header에는 마이페이지 링크와 장바구니페이지 링크가 있어야 합니다.
