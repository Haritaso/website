import { styled } from "linaria/react"

type Property =
  | "justify"
  | "alignItems"
  | "direction"
  | "height"
  | "width"
  | "margin"
  | "padding"

type Props = {
  [P in Property]: string
}

export default styled.div<Partial<Props>>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  flex-direction: ${({ direction }) => direction || "row"};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  flex-wrap: wrap;
`
