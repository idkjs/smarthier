/* TypeScript file generated from UseCountDown.re by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'bs-platform/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// @ts-ignore: Implicit any on import
import * as UseCountDownBS__Es6Import from './UseCountDown.bs';
const UseCountDownBS: any = UseCountDownBS__Es6Import;

export const $$default: (interval:number, run:boolean, onFinished:(() => void)) => number = function (Arg1: any, Arg2: any, Arg3: any) {
  const result = Curry._3(UseCountDownBS.default, Arg1, Arg2, Arg3);
  return result
};

export default $$default;
