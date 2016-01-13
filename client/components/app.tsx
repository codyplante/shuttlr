/// <reference path="../../typings/react/react-global.d.ts" />

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h2>Herro App!</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)