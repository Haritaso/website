import { ComponentClass, FunctionComponent } from "preact"

export {
  Attributes,
  FunctionalComponent as SFC,
  AnyComponent as ComponentType,
  AnyComponent as JSXElementConstructor,
  VNode as ReactElement,
  VNode as ReactNode,
  FunctionalComponent as StatelessComponent,
  JSX,
} from "preact"

export type ReactType<P = {}> = ComponentClass<P, {}> | FunctionComponent<P>
