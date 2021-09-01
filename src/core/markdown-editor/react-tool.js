import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';

const ReactComponent = ({ className, text }) => {
  useEffect(() => console.log('ReactComponent mounted ✌🏻'), []);
  return (
    <div className={className}>
      <h3>React Component</h3>
      {text}
    </div>
  );
};

export default class ReactTool {
  constructor({ data, api, config }) {
    this.api = api;
    this.config = config;
    this.data = data;
    this.container = undefined;
    this._CSS = {
      block: this.api.styles.block,
      react: 'react-component',
    };
    this.blockId = uuidv4();
  }

  render() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.classList.add(this._CSS.block);

      ReactDOM.render(
        <ReactComponent
          {...this.data}
          className={this._CSS.react}
          blockId={this.blockId}
        />,
        this.container,
      );
    }
    return this.container;
  }
  rendered() {
    console.log('ReactTool was rendered');
  }

  moved() {
    console.log('ReactTool was moved');
  }

  removed() {
    console.log('ReactTool was removed');
    ReactDOM.unmountComponentAtNode(this.container);
  }
  save(element) {
    return {
      text: element.innerText,
    };
  }
}
