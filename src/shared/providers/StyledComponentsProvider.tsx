'use client';

import React, { FC, PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const StyledComponentsProvider: FC<PropsWithChildren> = (props) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{props.children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {props.children}
    </StyleSheetManager>
  );
};

export default StyledComponentsProvider;
