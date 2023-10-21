'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
