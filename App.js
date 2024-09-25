const heading = [
  React.createElement("div",{},
  [
    React.createElement("h1",{id:"heading"},"Hello Universe, this is react project"),
    React.createElement("h2",{id:"heading2"},"Hello galaxy, this is react project")
  ]),
  React.createElement("div",{},
      [
        React.createElement("h3",{id:"heading"},"Hello milky way, this is react project"),
        React.createElement("h4",{id:"heading2"},"Hello light year, this is react project")
      ])]

{/* <div>
<h1>hahhhs</h1>
<h2>jjjsjsj</h2>
</div>
<div>
  <h3>jfjfjjf</h3>
  <h4>hfhhfhf</h4>
</div> */}
const root  = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)