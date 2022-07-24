import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Container from '../components/layout'
import * as styles from '../styles/Articles.module.sass'
import Article from '../contents/20211211'
import Profile from '../components/pages/profile.js'
import Pager from '../components/pages/pager'
import PostComment from '../components/utilities/utterances'

function ArticlePage() {
  const siteAddress = `https://dev1stud.io/`
  const siteTitle = 'O612 DEV1L.studio'
  const pageTitle = 'ReactJS와 React Native에서 emotion & styled-components 써보기'
  const pageDateTime = '2021.12.11'
  const pageIdentifier = pageDateTime.replace(/\./g, '')
  const pageAddress = siteAddress + pageIdentifier
  const ogAddress = siteAddress + '0/' + pageIdentifier
  const subTitle = '근데 TypeScript를 곁들인'

  return (
    <Container>
      <GatsbySeo
        title={`${pageTitle} | ${siteTitle}`}
        description={subTitle}
        canonical={pageAddress}
        metaTags={[{
          property: 'keywords',
          content: 'react, reactjs, reactnative, emotion, styled-components, 리액트, 리액트네이티브, 이모션, 스타일드, 컴포넌트'
        }]}
        openGraph={{
          type: 'article',
          title: siteTitle,
          description: pageTitle,
          url: pageAddress,
          images: [{ url: ogAddress + '/easy.jpeg' }],
        }}
      />
      <article className={styles['articlePage']}>
        <h1>{pageTitle}</h1>
        <small>{subTitle}</small>
        <time>{pageDateTime}</time>
        <picture>
          <source srcSet={`/0/${pageIdentifier}/summary.webp?${uuidv4()}`} type="image/webp" />
          <img src={`/0/${pageIdentifier}/summary.png?${uuidv4()}`} alt='' />
        </picture>
        <Article />
        <strong className={styles['articleFIN']}>FIN!</strong>
      </article>
      <aside><Profile /></aside>
      <Pager
        previousAddress={`/20211210`}
        previousTitle={'한글이나 히라가나 등의 non-English 언어로 변수명을 작명해도 동작할까?'}
        nextAddress={`/20211212`}
        nextTitle={'Apple Silicon macOS에 Homebrew 설치하기기'}
      />
      <PostComment />
    </Container>
  )
}

export default ArticlePage
