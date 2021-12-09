const data = `
# This is a heading

## This is a subheading

- list item 1
- list item 2

This is a paragraph

**This is bold text**

>A life well lived is worth living

[Visit freecodecamp](https://freecodecamp.org)

this is an inline \`<h1></h1>\`

Block of code
\`\`\`
const data = [1,2,3]
for(let i=0; i<5; i++){
console.log(i)
}
\`\`\`
![react](https://snack-web-player.s3.us-west-1.amazonaws.com/v2/42/static/media/react-native-logo.79778b9e.png)
`;
const MarkdownPreviewer = () => {
  const [text, setText] = React.useState(data);
  const markdown = marked(text, { breaks: true });
  return /*#__PURE__*/(
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("h1", { className: "text-center" }, "Markdown"), /*#__PURE__*/
    React.createElement("div", { className: "col-6" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-center" }, "Enter Mark Down:"), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      className: "form-control p-3",
      value: text,
      onChange: e => setText(e.target.value) })), /*#__PURE__*/


    React.createElement("div", { className: "col-6" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-center font-weight-bold" }, "Results:"), /*#__PURE__*/
    React.createElement(Previewer, {
      markdown: markdown }))));




};
const Previewer = ({ markdown }) => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: markdown },

      id: "preview",
      className: "rounded p-3" }));

};

ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.querySelector("#app"));