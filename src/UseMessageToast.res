open Belt

@genType
type message = {
  expires: float,
  text: string,
}

let defaultTimeToLive = 3000.
let not_ = (fn, x) => !fn(x)
let expired = (now, message) => now > message.expires
let nextExpire = messages => messages->List.get(0)

@genType
let hook = () => {
  let (messages, setMessages) = React.useState(() => list{})
  let now = Js.Date.now
  let ttl = defaultTimeToLive
  React.useEffect1(() =>
    switch nextExpire(messages) {
    | None => None
    | Some(nextTimeoutMilis) =>
      let timeoutId = Js.Global.setTimeout(
        () => setMessages(messages => messages->List.keep(not_(expired(now())))),
        int_of_float(nextTimeoutMilis.expires -. now()),
      )
      Some(() => Js.Global.clearTimeout(timeoutId))
    }
  , [messages])

  let addMessage = text =>
    setMessages(messages =>
      List.concat(messages, list{{expires: Js.Date.now() +. ttl, text: text}})
    )
  (List.toArray(messages), addMessage)
}
