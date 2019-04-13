import { h, app } from 'hyperapp';
import { withLogger } from '@hyperapp/logger';

import { faGithub, faTwitter, faMastodon } from '@fortawesome/fontawesome-free-brands';

import GithubData from './actions/githubData';

import Icon from './components/Icon';
import Github from './components/github';

import style from './style.css';

const state = {
  githubData: {
    list: [
      {
        id: '',
        actor: {
          avatar_url: ''
        },
        show: false
      }
    ],
    toggle: false
  },
}

const actions = {
  githubData: GithubData
}

const view = (state, actions) => (
  <div className={style.main}>
    <div className={style.iconGroup}>
      <a className={style.icon} href={'https://github.com/Haritaso'} onclick={actions.githubData.githubList}>
        <Icon src={faGithub} className={style.awesomeIcon} />
      </a>
      <a className={style.icon} href={'https://twitter.com/haritaso'}>
        <Icon src={faTwitter} className={style.awesomeIcon} />
      </a>
      <a className={style.icon} href={'https://tooting.ai/@hari_taso_'}>
        <Icon src={faMastodon} className={style.awesomeIcon} />
      </a>
    </div>
    <div className={style.list}>
      <Github state={state.githubData} actions={actions.githubData} />
    </div>
  </div>
)

withLogger(app)(state, actions, view, document.body)