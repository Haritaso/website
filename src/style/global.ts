import { css } from "linaria"

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
      font-size: 1rem;
      line-height: 1.42857;
      --emerald-green: #93ff8c;
      --sky-blue: #5ee7df;
      --yellow: #fffd78;
      --purple: #8a57ff;
      --blue: #4b95eb;
      --black: #04080d;
      --white: #ffffff;
      background-color: var(--black);
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    #root > div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`
