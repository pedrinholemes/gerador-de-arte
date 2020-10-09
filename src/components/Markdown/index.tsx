import React from 'react';
import ReactMarkdown from 'react-markdown'

import CodeBlock from '../../lib/syntax-highlight'

interface Props {
  source: string
}
const Markdown: React.FC<Props> = ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      renderers={{ code: CodeBlock }}
      escapeHtml={false}
    />
  );
}

export default Markdown;
