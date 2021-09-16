import React from 'react';
import styled from 'styled-components';
import { TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import { render } from 'react-dom';

class Embed extends React.Component {
  constructor() {
    this.data = this.props.data;
  }

  render() {
    return (
      <Container>
        <Iframe
          src={this.data.embed}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
        {Boolean(this.data.caption) && (
          <TextSecondary tid={this.data.caption} />
        )}
      </Container>
    );
  }
}

export default Embed;

const Container = styled.div`
  width: 100%;
  height: 320px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
