/* TypeScript file generated from CountDown.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// @ts-ignore: Implicit any on import
import * as CountDownBS__Es6Import from './CountDown.bs';
const CountDownBS: any = CountDownBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly interval: number; 
  readonly onFinished: () => void; 
  readonly run: boolean
};

export const $$default: React.ComponentType<{
  readonly interval: number; 
  readonly onFinished: () => void; 
  readonly run: boolean
}> = CountDownBS.default;

export default $$default;
