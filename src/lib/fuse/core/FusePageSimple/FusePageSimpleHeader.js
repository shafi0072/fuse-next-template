import clsx from 'clsx';
import React from 'react';

function FusePageSimpleHeader(props) {
  return (
    <div className={clsx('FusePageSimple-header', props.className)}>
      <div className="container">{props.header && props.header}</div>
    </div>
  );
}

export default FusePageSimpleHeader;
