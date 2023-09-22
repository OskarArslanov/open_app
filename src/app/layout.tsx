import { PropsWithChildren } from 'react';
import './globals.css';
import '@sberid/js-sdk/dist/styles/common.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
