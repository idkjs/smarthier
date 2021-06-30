/* TypeScript file generated from UseMessageToast.re by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as UseMessageToastBS__Es6Import from './UseMessageToast.bs';
const UseMessageToastBS: any = UseMessageToastBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type message = { readonly expires: number; readonly text: string };

export const hook: () => [message[], (_1:string) => void] = UseMessageToastBS.hook;
