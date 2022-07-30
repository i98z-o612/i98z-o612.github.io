"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[4788],{2929:function(e,t,n){n(7294);var l=n(3431);t.Z=function(e){var t=e.VIDEO_ID;return(0,l.tZ)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},4173:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});n(7294);var l=n(9789),a=n(4125),o=n(8678),i=n(3579),c=n(7462),p=n(3366),d=n(4983),r=(n(2929),n(2844),n(2335),n(6480)),u=["components"];(0,r.q)();var s={_frontmatter:{}};function k(e){var t=e.components,n=(0,p.Z)(e,u);return(0,d.kt)("wrapper",(0,c.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h2",null,"Prologue"),(0,d.kt)("p",null,"Vanilla 환경에서 한글로 클래스명 짓기, JavaScript 변수명 짓기, Element 생성하기를 해보고 싶었습니다. 과연 잘 될까요?"),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"어떠한 영향도 받는 상황이 연출되지 않게 Live Server 조차도 사용하지 않은 상태에서 테스트가 진행되었습니다.")),(0,d.kt)("hr",null),(0,d.kt)("h2",null,"CSS & HTML"),(0,d.kt)("deckgo-highlight-code",{language:"scss"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// index.css\n.콘테이너 {\n  font-size: 1.2rem;\n  font-weight: bolder;  \n}"),"\n        "),(0,d.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'<!DOCTYPE html>\n<html lang="ko-KR">\n\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width" />\n  <link rel="stylesheet" href="./index.css" type="text/css" media="all" />\n</head>\n\n<body>\n  <div class="콘테이너">\n    헬로 월드\n  </div>\n</body>\n\n</html>'),"\n        "),(0,d.kt)("p",null,"아무 문제없이 렌더링이 이루어졌습니다."),(0,d.kt)("p",null,"React에서는 JavaScript로 그리기 때문에 클래스명이 다른 이름으로 변경이 되지만 여기서는 Vanilla 환경이기 때문에 어떠한 영향도 주지 않았습니다."),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"class 이름은 첫 문자에 숫자 및 특수문자가 오면 안된다는 룰이 있습니다. 특수문자 중에서 사용 가능한 문자는 하이픈, 언더스코어 둘 뿐입니다."),(0,d.kt)("p",{parentName:"blockquote"},"다만, 숫자는 앞 문자로만 사용이 불가능하고 앞을 제외한 어떤 곳에서든 사용이 가능합니다.")),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"id 이름 역시 class와 동일한 네이밍 룰을 가지고 있으며, id는 한 화면에 동일 이름으로 여러번 사용이 불가합니다. (unique selector)"),(0,d.kt)("p",{parentName:"blockquote"},"html에서의 id는 개발에서 사용하는 id처럼 index 역할도 하는데 이것을 생각해보면 한 페이지당 동일 이름 사용 불가하다는 게 왜 그런지 이해하실 수 있을거라 생각해요.")),(0,d.kt)("h2",null,"JavaScript"),(0,d.kt)("deckgo-highlight-code",{language:"javascript"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"const 버튼 = document.createElement('button');\nconst 레이블 = document.createTextNode('눌러눌러');\n버튼.appendChild(레이블);\ndocument.body.appendChild(버튼);"),"\n        "),(0,d.kt)("p",null,"위와 같이 작성하면"),(0,d.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<button>눌러눌러</button>"),"\n        "),(0,d.kt)("p",null,"이렇게 제대로 렌더링됩니다."),(0,d.kt)("p",null,"물론 소스보기 했을 때는 JavaScript 코드 형태로만 보실 수 있습니다. 이게 싫으면 ",(0,d.kt)("inlineCode",{parentName:"p"},"Next.js"),"처럼 ",(0,d.kt)("inlineCode",{parentName:"p"},"SSR")," 지원하는 프레임워크를 사용하세요."),(0,d.kt)("deckgo-highlight-code",{language:"javascript"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"const 버튼_컴포넌트 = document.createElement('버튼');\nconst 레이블_컴포넌트 = document.createTextNode('눌러눌러');\n버튼_컴포넌트.appendChild(레이블_컴포넌트);\n버튼_컴포넌트.setAttribute('type', 'button')\ndocument.body.appendChild(버튼_컴포넌트);"),"\n        "),(0,d.kt)("p",null,"Element(태그)도 한글로 추가해보았는데 제대로 동작했습니다."),(0,d.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'<버튼 type="button">눌러눌러</버튼>'),"\n        "),(0,d.kt)("figure",null,(0,d.kt)("picture",null,(0,d.kt)("source",{srcSet:"/0/20211222/naman.webp?"+(0,l.Z)(),type:"image/webp"}),(0,d.kt)("img",{src:"/0/20211222/naman.jpeg?"+(0,l.Z)(),alt:""})),(0,d.kt)("figcaption",null,"잘 되는 걸 나만 몰랐구나... 그렇구나...")),(0,d.kt)("h2",null,"라스트팡! 파일명 테스트"),(0,d.kt)("p",null,"마지막으로 파일명을 바꿔도 동작하는지 테스트 해보겠습니다."),(0,d.kt)("p",null,"Sass 경우에 자동으로 CSS 파일로 컴파일하는 과정이 있는데 이때 CSS 파일이 자동 생성되게 됩니다. 그래서 파일명 변경은 Sass에서 작업하면 CSS 파일도 정상적으로 인식하는지 자동으로 테스트가 가능할 겁니다."),(0,d.kt)("p",null,"여기서는 이미지 파일도 추가로 테스트 합니다. 테스트로 사용할 이미지는 이전에 사용한 적이 있는 곱창 이미지를 사용할 겁니다."),(0,d.kt)("figure",null,(0,d.kt)("picture",null,(0,d.kt)("source",{srcSet:"/0/20211222/곱창.webp?"+(0,l.Z)(),type:"image/webp"}),(0,d.kt)("img",{src:"/0/20211222/곱창.jpeg?"+(0,l.Z)(),alt:""})),(0,d.kt)("figcaption",null,"츄릅! 츄릅!")),(0,d.kt)("p",null,"위 이미지는 실제로 한글로 이루어진 파일명을 사용하고 있습니다. ",(0,d.kt)("inlineCode",{parentName:"p"},"곱창.jpeg")),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},(0,d.kt)("inlineCode",{parentName:"p"},"dev1stud.io"),"에서는 이미지 최적화 차원에서 ",(0,d.kt)("inlineCode",{parentName:"p"},".webp"),"와 ",(0,d.kt)("inlineCode",{parentName:"p"},".jpeg"),"(.jpg)를 세트로 사용하고 있습니다."),(0,d.kt)("p",{parentName:"blockquote"},"(썸네일에서는 ",(0,d.kt)("inlineCode",{parentName:"p"},".webp"),", ",(0,d.kt)("inlineCode",{parentName:"p"},".png"),"를 세트로 사용)")),(0,d.kt)("deckgo-highlight-code",{language:"sass"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// 인덱스.sass\n\n.콘테이너\n  font-size: 1.2rem\n  font-weight: bolder\n\n  .이미지\n    width: 200px\n    height: 200px\n    background: url('./곱창.jpg') no-repeat 50% 50%/contain"),"\n        "),(0,d.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,d.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'<!DOCTYPE html>\n<html lang="ko-KR">\n\n<head>\n  <meta charset="utf-8" />\n  <meta name="viewport" content="width=device-width" />\n  <link rel="stylesheet" href="./인덱스.css" type="text/css" media="all" />\n</head>\n\n<body>\n  <div class="콘테이너">\n    헬로 월드\n    <div class="이미지"></div>\n    <img src="./곱창.jpg" alt="곱창" />\n  </div>\n  <script>\n    const 버튼 = document.createElement(\'button\');\n    const 레이블 = document.createTextNode(\'눌러눌러\');\n    버튼.appendChild(레이블);\n    document.body.appendChild(버튼);\n  <\/script>\n</body>\n\n</html>'),"\n        "),(0,d.kt)("p",null,"결과는 성공!"),(0,d.kt)("figure",null,(0,d.kt)("picture",null,(0,d.kt)("source",{srcSet:"/0/20211222/howoo.webp?"+(0,l.Z)(),type:"image/webp"}),(0,d.kt)("img",{src:"/0/20211222/howoo.jpeg?"+(0,l.Z)(),alt:""})),(0,d.kt)("figcaption",null,"호우!")),(0,d.kt)("hr",null),(0,d.kt)("h2",null,"Epilogue"),(0,d.kt)("figure",null,(0,d.kt)("picture",null,(0,d.kt)("source",{srcSet:"/0/20211222/rip-ie.webp?"+(0,l.Z)(),type:"image/webp"}),(0,d.kt)("img",{src:"/0/20211222/rip-ie.jpeg?"+(0,l.Z)(),alt:""})),(0,d.kt)("figcaption",null,(0,d.kt)("del",null,"고전짤"))))}k.isMDXComponent=!0;var g=n(4396),h=n(5941),m=n(9289),b=n(3431);var v=function(){var e="https://dev1stud.io/",t="O612 DEV1L.studio",n="Vanilla 환경에서 한글로 뻘 코딩하기",c="2021.12.22",p=c.replace(/\./g,""),d=e+p,r=e+"0/"+p,u="Vanilla HTML, Vanilla CSS, Vanilla JavaScript `한글`로 작성해보기";return(0,b.tZ)(o.Z,null,(0,b.tZ)(a.GatsbySeo,{title:n+" | "+t,description:u,canonical:d,metaTags:[{property:"keywords",content:"vanilla, html, css, javascript, js, 바닐라, 자바스크립트, 스타일"}],openGraph:{type:"article",title:t,description:n,url:d,images:[{url:r+"/naman.jpeg"}]}}),(0,b.tZ)("article",{className:i.xI},(0,b.tZ)("h1",null,n),(0,b.tZ)("small",null,u),(0,b.tZ)("time",null,c),(0,b.tZ)("picture",null,(0,b.tZ)("source",{srcSet:"/0/"+p+"/summary.webp?"+(0,l.Z)(),type:"image/webp"}),(0,b.tZ)("img",{src:"/0/"+p+"/summary.png?"+(0,l.Z)(),alt:""})),(0,b.tZ)(k,null),(0,b.tZ)("strong",{className:i.zs},"FIN!")),(0,b.tZ)("aside",null,(0,b.tZ)(g.Z,null)),(0,b.tZ)(h.Z,{previousAddress:"/20211220",previousTitle:"React에서 오른쪽에서 왼쪽으로 개발하기?",nextAddress:"/20211225",nextTitle:"Merry Christmas and Happy Holiday"}),(0,b.tZ)(m.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20211222-js-59a383c3afdcb0322a90.js.map