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
      <Text>aaa</Text>
      <Grid alignItems="center">
        <Icon size={120} compoent={<Twitter />} />
        <Icon size={120} compoent={<Github />} />
      </Grid>
    </div>
  )
}

export default App
