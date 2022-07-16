import * as React from "react"
import series from '../apis/series'
import SEO from '../components/utilities/withHead'
import Container from '../components/layout'
import * as styles from '../styles/Home.module.sass'
import Profile from '../components/pages/profile'
import LinkButton from '../components/utilities/linkButton'
import Route from '../components/pages/route'

function IndexPage() {
  return (
    <Container>
      <SEO
        title="Series"
      />
      <main className={styles['mainPage']}>
        <Profile />
        <Route route='series' />
        <ul>
          {series.map(sery => (
            <li key={sery.id}>
              <LinkButton href={sery.url}>
                <div className={styles['listThumbnail']}>
                  <i style={{ backgroundImage: `url(${sery.thumbnail}` }} />
                  {sery.badge && (
                    <span aria-label="New Badge">새글</span>
                  )}
                </div>
                <strong>{sery.category}</strong>
              </LinkButton>
            </li>
          ))}
        </ul>
      </main>
    </Container>
  )
}

export default IndexPage
