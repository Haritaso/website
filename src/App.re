%raw "import 'modern-css-reset'";
%raw "import { css } from 'linaria'";

module Styles = {
  let text = [%raw {| css`
    color: red;
  `|}];
}

[@react.component]
let make = () =>
  <div>
    <div className=Styles.text>
      {React.string("App")}
    </div>
    <Card />
  </div>;
