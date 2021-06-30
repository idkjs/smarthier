module TSApp = {
  [@genType.import ("./TSApp", "default")] [@react.component]
  external make: _ => React.element = "make";
};

ReactDOMRe.renderToElementWithId(<TSApp />, "root");
