# HTML. CSS. JS - LOGIN

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)

### 🤖PAGE

- 배포 링크 : https://0huns.github.io/JS-LOGIN/

### 📑UI / UX

CSS의 Flex와 `min-width`를 사용하여 반응형을 구현하였습니다. 
`box-shadow`를 통해 UI의 디자인 컨셉을 잡았습니다.

### 🛠️주요 기능

✅ 유효성 검사:

- HTML의 input 요소 속성 중 `min & max length`를 이용해 기본적인 제한 부여
- JS에서 length, value 확인, `RegExp`를 사용하여 패턴 확인 및 value 수정을 구현했습니다.

✅ 유효성 검사에 따른 밸리데이션:

- `classList.add/remove`를 통해 error massage를 추가,삭제하여 form error를 표시했습니다.
- submit button 클릭 시 error가 나는 input에 id를 변경하여 form error를 재각인시켜주었습니다.

✅ Form DATA 로컬스토리지 저장:

- 로컬스토리지 객체의 `setItem()`과 `JSON.stringify`를 통해 객체를 JSON 문자열로 변환한 후 로컬스토리지에 저장하였습니다.
