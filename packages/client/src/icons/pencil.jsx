import * as React from 'react';
import {Icon} from 'baseui/icon';

import {SvgOverrides} from './overrides';

function Pencil(props, ref) {
  const {title = 'Pencil', size, color, ...restProps} = props;

  return (
    <Icon
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={SvgOverrides}
      {...restProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </Icon>
  );
}

export default React.forwardRef(Pencil);

