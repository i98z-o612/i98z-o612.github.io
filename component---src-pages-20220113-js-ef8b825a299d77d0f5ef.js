"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[9418],{8853:function(e,t,n){n(7294);var o=n(3431);t.Z=function(e){var t=e.SENDBOX_TITLE;return(0,o.tZ)("iframe",{src:"https://codesandbox.io/embed/github/naninyang/"+t+"/tree/main/?fontsize=14&hidenavigation=1&theme=dark",title:""+t,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2929:function(e,t,n){n(7294);var o=n(3431);t.Z=function(e){var t=e.VIDEO_ID;return(0,o.tZ)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},5521:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});n(7294);var o=n(9789),l=n(4125),a=n(8678),c=n(3579),i=n(7462),p=n(3366),g=n(4983),d=(n(2929),n(8853),n(2844),n(2335),n(6480)),r=["components"];(0,d.q)();var h={_frontmatter:{}};function m(e){var t=e.components,n=(0,p.Z)(e,r);return(0,g.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("h2",null,"Prologue"),(0,g.kt)("p",null,"Angular, React, Svelte, 그리고 Vue로는 어떻게 개발할까요? CSS 작업은요?"),(0,g.kt)("p",null,"4가지 프레임워크 모두를 ",(0,g.kt)("strong",{parentName:"p"},"찍먹"),"하기 위해서는 일단 ",(0,g.kt)("strong",{parentName:"p"},"집중력"),"이 필요합니다. 글이 약간 긴 관계로 집중 ",(0,g.kt)("strong",{parentName:"p"},"빡!")," 해주세요"),(0,g.kt)("hr",null),(0,g.kt)("h2",null,"변수없이 '헬로 월드' 보여주기"),(0,g.kt)("p",null,"개발의 기본이죠. ",(0,g.kt)("inlineCode",{parentName:"p"},"헬로 월드"),"를 화면에 뿌려보기."),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- HTML --\x3e\n<head>\n  <title>헬로 월드</title>\n</head>\n<body>\n  <main><p>헬로 월드</p></main>\n</body>"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// React with Next.js\nfunction Home() {\n  return (\n    <main>\n      <Head>\n        <title>헬로 월드</title>\n      </Head>\n      <p>헬로 월드</p>\n    </main>\n  )\n}"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- Svelte --\x3e\n<svelte:head>\n  <title>헬로 월드</title>\n</svelte:head>\n\n<svelte:body>\n  <main><p>헬로 월드</p></main>\n</svelte:body>"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- Vue with Nuxt --\x3e\n<template>\n  <main><p>헬로 월드</p></main>\n</template>\n\n<script>\n  export default {\n    head: () => ({\n      title: '헬로 월드',\n    }),\n  }\n<\/script>"),"\n        "),(0,g.kt)("h2",null,"변수로 지정한 '헬로 월드' 보여주기"),(0,g.kt)("p",null,"Angular와 Vue는 변수를 불러올 때 ",(0,g.kt)("inlineCode",{parentName:"p"},"{{...}}")," 처럼 괄호를 2번 써야하고 React와 Svelte는 ",(0,g.kt)("inlineCode",{parentName:"p"},"{...}")," 처럼 괄호를 1번만 사용합니다."),(0,g.kt)("p",null,"If, Angular"),(0,g.kt)("deckgo-highlight-code",{language:"typescript"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// app/app.component.ts\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-hello',\n  templateUrl: 'src/app/app.component.html'\n})\nexport class AppComponent {\n  constructor() {}\n\n  world: string = '월드';\n}"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- app/app.component.html --\x3e\n<div>\n  <p>헬로 {{ world }}</p>\n</div>"),"\n        "),(0,g.kt)("p",null,"If, React"),(0,g.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"function AppHello() {\n  const world = '월드'\n  return (\n    <div>\n      <p>헬로 { world }</p>\n    </div>\n  )\n}\n\nexport default AppHello"),"\n        "),(0,g.kt)("p",null,"If, Svelte"),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<script>\n  const world = '월드';\n<\/script>\n\n<div>\n  <p>헬로 { world }</p>\n</div>"),"\n        "),(0,g.kt)("p",null,"If. Vue"),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<div id=\"app-hello\">\n  <p>헬로 {{ world }}</p>\n</div>\n\n<script>\n  var appHello = new Vue({\n    el: '#app-hello',\n    data: {\n      world: '훨드'\n    }\n  })\n<\/script>"),"\n        "),(0,g.kt)("h2",null,"컴포넌트 작성하기"),(0,g.kt)("p",null,"Angular는 TypeScript를 사용하여 작성해야 합니다."),(0,g.kt)("blockquote",null,(0,g.kt)("p",{parentName:"blockquote"},"Component를 불러오는 파일은 html 형식이고, Component만 ",(0,g.kt)("inlineCode",{parentName:"p"},".ts")," 입니다.")),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- index.html --\x3e\n<head>\n  <title>헬로 월드</title>\n</head>\n\n<body>\n  <app-root></app-root>\n</body>"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- app/app.component.html --\x3e\n<main><p>헬로 월드</p></main>"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"typescript"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'// app/app.components.ts\nimport { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  templateUrl: "./app.component.html"\n})\nexport class RootComponent {\n  title = "헬로 월드";\n}'),"\n        "),(0,g.kt)("p",null,"React는 하나의 파일에 넣을 수도, component를 따로 분리할 수도 있습니다."),(0,g.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import Bibimbap from './bibimbap'\n\nconst Gopchang = <p>곱창 먹고싶다</p>\n\nfunction Home() {\n  return (\n    <>\n      <h1>배고픈 O612</h1>\n      <Gopchang />\n      <Bibimbap />\n    </>\n  )\n}\n\nexport default Home"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"// bibimbap.js\nfunction Bibimbap() {\n  return <p>비빔밥도 먹고싶다</p>\n}\n\nexport default Bibimbap"),"\n        "),(0,g.kt)("p",null,"Svelte는 React와 비슷합니다."),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<script>\n  import Bibimbap from './bibimbap.svelte';\n  const Gopchang = <p>곱창 먹고싶다</p>\n<\/script>\n\n<Gopchang></Gopchang>\n<Bibimbap></Bibimbap>"),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- bibimbap.svelte --\x3e\n<p>비빔밥도 먹고싶다</p>"),"\n        "),(0,g.kt)("blockquote",null,(0,g.kt)("p",{parentName:"blockquote"},"React는 component, fragment의 chidren에 string, text 등이 없을 때 html의 short tag처럼 짧게 쓸 수 있고 Svelte는 짧게 쓸 수 없습니다."),(0,g.kt)("p",{parentName:"blockquote"},"예제로 보여드린 React와 Svelte에서 사용한 ",(0,g.kt)("inlineCode",{parentName:"p"},"Gopchang"),"과 ",(0,g.kt)("inlineCode",{parentName:"p"},"Bibimbap")," 코드를 참고하세요.")),(0,g.kt)("p",null,"Vue는 component 안에 html은 ",(0,g.kt)("inlineCode",{parentName:"p"},"template"),"를 사용해야 합니다."),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'<div id="app">\n  <p>곱창 먹고싶다</p>\n  <bibimbap />\n</div>\n<script type="text/javascript">\n  var bibimbap = Vue.component("bibimbap", {\n    template: `<p>비빔밥도 먹고싶다</p>`,\n  });\n\n  var app = new Vue({\n    el: "#app",\n    data: {\n      message: "헬로 월드! index.html"\n    }\n  });\n<\/script>'),"\n        "),(0,g.kt)("h2",null,"버튼을 누르면 카운트 올라가는 예제 만들어보기"),(0,g.kt)("p",null,"If, Angular"),(0,g.kt)("deckgo-highlight-code",{language:"typescript"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'// app/app.component.ts\nimport { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  templateUrl: "./app.component.html",\n})\nexport class AppComponent {\n  count: number = 1;\n\n  handleClick() {\n    this.count++;\n  }\n}'),"\n        "),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"\x3c!-- app/app.component.html --\x3e\n<button (click)=\"handleClick()\">\n  Clicked {{ count }} {{ count === 1 ? 'time' : 'times' }}\n</button>"),"\n        "),(0,g.kt)("p",null,"If, React"),(0,g.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import { useState } from 'react'\n\n// function App() {\nconst App = () => {\n  const [count, setCount] = useState(1);\n\n  const handleClick = () => {\n    setCount(count + 1)\n  }\n\n  return (\n    <button onClick={handleClick}>\n      Clicked {count} {count === 1 ? 'time' : 'times'\n    </button>\n  )\n};\n\nexport default App"),"\n        "),(0,g.kt)("p",null,"If, Svelte"),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<script>\n  const count = 1;\n\n  function handleClick() {\n    count += 1;\n  }\n<\/script>\n\n<button on:click={handleClick}>\n  Clicked {count} {count === 1 ? 'time' : 'times'}\n</button>"),"\n        "),(0,g.kt)("p",null,"If, Vue"),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<template>\n  <button @click=\"handleClick\">\n    Clicked {{ count }} {{ count === 1 ? 'time' : 'times' }}\n  </button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        count: 1;\n      };\n    },\n    methods: {\n      handleClick() {\n        this.count += 1;\n      }\n    }\n  };\n<\/script>"),"\n        "),(0,g.kt)("p",null,"실행시 브라우저에서는 다음과 같이 코드가 생성됩니다."),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<button>Clicked 1 time</button>"),"\n        "),(0,g.kt)("p",null,"버튼을 누르면 숫자가 바뀌고 ",(0,g.kt)("inlineCode",{parentName:"p"},"time"),"이 ",(0,g.kt)("inlineCode",{parentName:"p"},"times"),"로 바뀝니다."),(0,g.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,g.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"<button>Clicked 2 times</button>"),"\n        "),(0,g.kt)("figure",null,(0,g.kt)("picture",null,(0,g.kt)("source",{srcSet:"/0/20220113/scrolling.webp?"+(0,o.Z)(),type:"image/webp"}),(0,g.kt)("img",{src:"/0/20220113/scrolling.jpg?"+(0,o.Z)(),alt:""})),(0,g.kt)("figcaption",null,"스크롤의 압박")),(0,g.kt)("hr",null),(0,g.kt)("h2",null,"Epilogue"),(0,g.kt)("p",null,"이번 글은 이전에 포스타입에 올렸던 내용들을 하나로 합하고 필요없는 내용은 빼고 있어야 하는 내용이 빠진 경우에는 추가해서 취합한 내용입니다."),(0,g.kt)("p",null,"그래서 스크롤이 다소 길어졌습니다. ",(0,g.kt)("em",{parentName:"p"},"(대국민 사과)")),(0,g.kt)("p",null,"다음 글에서는 이 프레임워크들을 이용해 스타일링 및 CSS 작성하는 방법에 대해 써볼게요. 안녕~!"),(0,g.kt)("figure",null,(0,g.kt)("picture",null,(0,g.kt)("source",{srcSet:"/0/20220113/mazm.webp?"+(0,o.Z)(),type:"image/webp"}),(0,g.kt)("img",{src:"/0/20220113/mazm.jpg?"+(0,o.Z)(),alt:""})),(0,g.kt)("figcaption",null,(0,g.kt)("del",null,"(어떻게 알았지?)"))))}m.isMDXComponent=!0;var u=n(4396),k=n(5941),s=n(9289),b=n(3431);var v=function(){var e="https://dev1stud.io/",t="O612 DEV1L.studio",n="Angular, React, Svelte 그리고 Vue를 이용해 개발 찍먹해보기",i="2022.01.13",p=i.replace(/\./g,""),g=e+p,d=e+"0/"+p,r="Angular, React, Svelte, Vue Programming";return(0,b.tZ)(a.Z,null,(0,b.tZ)(l.GatsbySeo,{title:n+" | "+t,description:r,canonical:g,metaTags:[{property:"keywords",content:"angular, react, svelte, vue, 앵귤러, 리액트, 스벨트, 뷰, 개발하기"}],openGraph:{type:"article",title:t,description:n,url:g,images:[{url:d+"/mazm.jpg"}]}}),(0,b.tZ)("article",{className:c.xI},(0,b.tZ)("h1",null,n),(0,b.tZ)("small",null,r),(0,b.tZ)("time",null,i),(0,b.tZ)("picture",null,(0,b.tZ)("source",{srcSet:"/0/"+p+"/summary.webp?"+(0,o.Z)(),type:"image/webp"}),(0,b.tZ)("img",{src:"/0/"+p+"/summary.png?"+(0,o.Z)(),alt:""})),(0,b.tZ)(m,null),(0,b.tZ)("strong",{className:c.zs},"FIN!")),(0,b.tZ)("aside",null,(0,b.tZ)(u.Z,null)),(0,b.tZ)(k.Z,{previousAddress:"/20220112",previousTitle:"Angular, React, Svelte 그리고 Vue를 시작해볼까요?",nextAddress:"/20220204",nextTitle:"Angular, React, Svelte 그리고 Vue로 스타일링 해볼까?"}),(0,b.tZ)(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20220113-js-ef8b825a299d77d0f5ef.js.map