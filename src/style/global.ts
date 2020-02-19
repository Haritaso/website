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
      height: 100%;
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
      font-size: 20px;
      line-height: 1.42857;
      --emerald-green: #93ff8c;
      --sky-blue: #46ffd3;
      --yellow: #fffd78;
      --purple: #8a57ff;
      --blue: #4b95eb;
      --bg: #04080d;
      background-color: var(--bg);
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`
