import React, { useEffect, useRef } from 'react';

import { Container, Canvas, LoadingContainer, LoadingElement } from './styles';

interface Props {
  url?: string
}
const Preview: React.FC<Props> = ({ url }) => {
  const previewRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.src = ''
      setTimeout(() => { previewRef.current.src = url }, 100)
    }
  }, [url])
  return (
    <Container>
      <Canvas width="300" height="300" ref={previewRef} />
      <LoadingContainer>
        <LoadingElement type='spin' />
      </LoadingContainer>
    </Container>
  );
};

export default Preview;
