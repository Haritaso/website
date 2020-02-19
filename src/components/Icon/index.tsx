import { h, ComponentChildren } from "preact"
import { styled } from "linaria/react"

type Props = {
  size: number
  compoent?: ComponentChildren
}

const IconWrapper = styled.div<{ size: number }>`
  border-radius: 50%;
  border: 4px solid var(--yellow);

  div {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    padding: ${({ size }) => size / 8}px;
    border-radius: 50%;
    background: linear-gradient(
      to right,
      var(--sky-blue),
      var(--emerald-green) 50%,
      var(--yellow)
    );

    &:hover {
      animation: rotate 1s ease-out;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }
`

const Icon = (props: Props) => {
  return (
    <IconWrapper size={props.size}>
      <div>{props.compoent}</div>
    </IconWrapper>
  )
}

export default Icon
