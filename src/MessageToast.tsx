import * as React from "react";
import { make as App } from "./App.gen";

const MessageToast = ({ header}: {header: string})=> (
  <>
    <div>
      <h1>{header}</h1>
    </div>
    <App header="App Header" />
  </>
);

export default MessageToast;