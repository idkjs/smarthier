module TSApp = {
  @genType.import(("./TSApp", "default")) @react.component
  external make: _ => React.element = "make"
}

switch(ReactDOM.querySelector("#root")){
| Some(root) => ReactDOM.render(<TSApp />, root)
| None => ()
}
