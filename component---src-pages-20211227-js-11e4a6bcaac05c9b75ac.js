"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[4157],{8853:function(e,n,t){t(7294);var r=t(3431);n.Z=function(e){var n=e.SENDBOX_TITLE;return(0,r.tZ)("iframe",{src:"https://codesandbox.io/embed/github/naninyang/"+n+"/tree/main/?fontsize=14&hidenavigation=1&theme=dark",title:""+n,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2929:function(e,n,t){t(7294);var r=t(3431);n.Z=function(e){var n=e.VIDEO_ID;return(0,r.tZ)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/"+n,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}},7220:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});t(7294);var r=t(9789),l=t(4125),i=t(8678),o=t(3579),a=t(7462),p=t(3366),c=t(4983),s=(t(2929),t(8853)),u=t(2844),d=(t(2335),t(6480)),m=["components"];(0,d.q)();var g={_frontmatter:{}};function k(e){var n=e.components,t=(0,p.Z)(e,m);return(0,c.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",null,"Prologue"),(0,c.kt)("p",null,"예전에는 CSS에서 처리할 방법이 없어서 HTML5의 canvas를 이용해 구현했습니다."),(0,c.kt)("p",null,"canvas 구현의 문제점은 퍼포먼스가 떨어진다는 점이었는데 요즘은 쉽게 CSS3를 이용해 구현이 가능합니다."),(0,c.kt)("hr",null),(0,c.kt)("h2",null,"Source"),(0,c.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,c.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'import styled from "@emotion/styled"\nimport "./index.sass"\n\nconst Container = styled.div({\n  display: "flex",\n  flexDirection: "column"\n})\n\nconst Header = styled.header({\n  right: 0,\n  left: 0,\n  zIndex: 1,\n  backdropFilter: "saturate(180%) blur(20px)",\n  position: "fixed",\n  display: "flex",\n  flexDirection: "column",\n  justifyContent: "center",\n  alignItems: "center",\n  width: "100%",\n  height: "72px",\n  color: "#fff",\n  "& h1, & h2": {\n    margin: 0,\n    width: "100%",\n    textAlign: "center"\n  },\n  "& h1": {\n    backgroundColor: "rgba(0,0,0,0.8)",\n    padding: ".4em 0 .1em",\n    fontSize: "1.5rem",\n    fontWeight: "lighter"\n  },\n  "& h2": {\n    backgroundColor: "rgba(255,255,255,0.72)",\n    padding: ".1em 0 .3em",\n    fontSize: "1.2rem",\n    color: "#000"\n  }\n})\n\nconst Main = styled.main({\n  padding: "1em"\n})\n\nconst Section = styled.section({\n  "& img": {\n    maxWidth: "100%"\n  }\n})\n\nfunction App() {\n  return (\n    <Container>\n      <Header>\n        <h1>React Backdrop Filter</h1>\n        <h2>Image origin source by Apple</h2>\n      </Header>\n      <Main>\n        <Section>\n          <picture>\n            <img\n              src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/display/screen_xdr__fksbj0zqvtu2_large.jpg"\n              alt=""\n            />\n            <p>Blackmagic Design DaVinci Resolve</p>\n          </picture>\n        </Section>\n        <Section>\n          <picture>\n            <img\n              src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/macos/screen_macos__fuhzca3c0wia_large.jpg"\n              alt=""\n            />\n            <p>Beauty and the beast</p>\n          </picture>\n        </Section>\n      </Main>\n    </Container>\n  )\n}\n\nexport default App'),"\n        "),(0,c.kt)("h2",null,"backdropFilter"),(0,c.kt)("p",null,"위 코드에서 중요한 부분은 backdropFilter 입니다. (CSS: backdrop-filter)"),(0,c.kt)("p",null,"saturate는 채도, blur는 블러 값입니다."),(0,c.kt)("p",null,"채도는 높으면 높을 수록 쨍한 느낌을 주고, 낮으면 낮을 수록 색이 죽습니다."),(0,c.kt)(u.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate()",mdxType:"LinkButton"},"관련 링크"),(0,c.kt)("p",null,"blur는 값이 높을 수록 블러 효과가 강해집니다."),(0,c.kt)(u.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur()",mdxType:"LinkButton"},"관련 링크"),(0,c.kt)("h2",null,"Preview"),(0,c.kt)(s.Z,{SENDBOX_TITLE:"react-backdrop-filter",mdxType:"CodeSandboxPreview"}),(0,c.kt)("hr",null),(0,c.kt)("h2",null,"Epilogue"),(0,c.kt)("figure",null,(0,c.kt)("picture",null,(0,c.kt)("source",{srcSet:"/0/20211227/apple.webp?"+(0,r.Z)(),type:"image/webp"}),(0,c.kt)("img",{src:"/0/20211227/apple.png?"+(0,r.Z)(),alt:""})),(0,c.kt)("figcaption",null,"앱등뽕이 차오른다")),(0,c.kt)("p",null,"요즘은 ",(0,c.kt)("inlineCode",{parentName:"p"},"-webkit-")," verdor prefix 없이 backdrop-filter 만으로도 적용이 됩니다."),(0,c.kt)("p",null,"하지만 오래된 웹킷 계열 브라우저를 위해서 ",(0,c.kt)("inlineCode",{parentName:"p"},"-webkit-backdrop-filter")," 우선 선언하고 ",(0,c.kt)("inlineCode",{parentName:"p"},"backdrop-filter"),"를 추가로 선언하는 게 좋습니다."),(0,c.kt)("p",null,"참고로, emotion을 사용하면 자동으로 verdor prefix를 붙여주니 emotion 많이 애용하세요!"))}k.isMDXComponent=!0;var h=t(4396),f=t(5941),b=t(9289),y=t(3431);var w=function(){var e="https://dev1stud.io/",n="O612 DEV1L.studio",t="Apple 웹사이트 헤더처럼 배경에 블러 효과 주기",a="2021.12.27",p=a.replace(/\./g,""),c=e+p,s=e+"0/"+p,u="Image Origin Source by Apple";return(0,y.tZ)(i.Z,null,(0,y.tZ)(l.GatsbySeo,{title:t+" | "+n,description:u,canonical:c,metaTags:[{property:"keywords",content:"react, style, apple, blur, 리액트, 스타일, 애플, 효과"}],openGraph:{type:"article",title:n,description:t,url:c,images:[{url:s+"/apple.jpeg"}]}}),(0,y.tZ)("article",{className:o.xI},(0,y.tZ)("h1",null,t),(0,y.tZ)("small",null,u),(0,y.tZ)("time",null,a),(0,y.tZ)("picture",null,(0,y.tZ)("source",{srcSet:"/0/"+p+"/summary.webp?"+(0,r.Z)(),type:"image/webp"}),(0,y.tZ)("img",{src:"/0/"+p+"/summary.png?"+(0,r.Z)(),alt:""})),(0,y.tZ)(k,null),(0,y.tZ)("strong",{className:o.zs},"FIN!")),(0,y.tZ)("aside",null,(0,y.tZ)(h.Z,null)),(0,y.tZ)(f.Z,{previousAddress:"/20211225",previousTitle:"Merry Christmas and Happy Holiday",nextAddress:"/20211231",nextTitle:"2021 회고 - 불행했던 2021년을 보내며"}),(0,y.tZ)(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-20211227-js-11e4a6bcaac05c9b75ac.js.map