/* import react component from typescript */
@genType.import(("./TSRocket", "default")) @react.component
external make: _ => React.element = "make"

/* export as typescript component */
@genType
let default = make
