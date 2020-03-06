import { h } from "preact"
import { globals } from "./style/global"
import Text from "./components/Text"
import Twitter from "./components/Icon/Twitter"
import Github from "./components/Icon/Github"
import Icon from "./components/Icon"
import Grid from "./components/Grid"

const App = () => {
  return (
    <div className={globals}>
      <Grid
        direction="column"
        alignItems="center"
        justify="center"
        height="100%"
      >
        <Grid alignItems="center">
          <Text size="1.5rem">はりたそ</Text>
        </Grid>
        <Grid alignItems="center" margin="0.75rem 0">
          <Text size="1rem">web業界で飯を食べようとしているwebエンジニア</Text>
        </Grid>
        <Grid alignItems="center">
          <Icon
            size={3}
            href={`https://twitter.com/haritaso`}
            compoent={<Twitter />}
          />
          <Icon
            size={3}
            href={`https://github.com/Haritaso`}
            compoent={<Github />}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
