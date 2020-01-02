%raw "import { css } from 'linaria'";

module Styles = {
  let card = [%raw {| css`
    color: red;
  `|}];
}

[@react.component]
let make = () => <div className=Styles.card>{React.string("Card")}</div>;
