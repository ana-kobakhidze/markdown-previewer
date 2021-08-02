import React, { Component } from "react";
import "./App.css";

let marked = require("marked");

const placeHolderText = `# Welcome to my React Markdown Previewer!

// ## This is a sub-heading...
// ### And here's some other cool stuff:

// Heres some code, \`<div></div>\`, between 2 backticks.

// \`\`\`
// // this is multi-line code:

// function anotherExample(firstLine, lastLine) {
//   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
//     return multiLineCode;
//   }
// }
// \`\`\`

// You can also make text **bold**... whoa!
// Or _italic_.
// Or... wait for it... **_both!_**
// And feel free to go crazy ~~crossing stuff out~~.

// There's also [links](https://www.freecodecamp.org), and
// > Block Quotes!

// And if you want to get really crazy, even tables:

// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | -------------
// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.

// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.

// 1. And there are numbered lists too.
// 1. Use just 1s if you want!
// 1. And last but not least, let's not forget embedded images:`;

class App extends Component {
  state = {
    markdown: placeHolderText,
  };

  changeHandler = (markdown) => {
    this.setState({ markdown });
  };
  render() {
    return (
      <div className="App">

        <div className="flex-container">
          <div className="input">
            <h3 className="inputHeader">Input</h3>
            <label htmlFor="area"></label>
            <textarea
              name="area"
              className="area"
              rows="35"
              cols="50"
              onChange={(e) => {
                this.changeHandler(e.target.value);
              }}
            >
              {placeHolderText}
            </textarea>
          </div>

          <div className="markdown">
            <h3 className="inputHeader">Preview</h3>
            <div className="preview">
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
