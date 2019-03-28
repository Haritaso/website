import { h } from 'hyperapp';

export default (props) => {
  const {
    src: {
      icon: [
        iconWidth,
        iconHeight,
        , ,
        iconPath,
      ],
      iconName,
      prefix: iconPrefix,
    },
    name = iconName,
    className = 'icon',
    viewBox = `0 0 ${iconWidth} ${iconHeight}`,
    prefix = iconPrefix,
    path = iconPath,
  } = props;

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    data-icon={ name }
    data-prefix={ prefix }
    class={ className }
    viewBox={ viewBox }
    >
      <path fill="currentColor" d={path}></path>
    </svg>;
};