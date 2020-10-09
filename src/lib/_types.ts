export interface StyleType {
  'code[class*="language-"]': CodeClasslanguage;
  'pre[class*="language-"]': PreClasslanguage;
  ':not(pre) > code[class*="language-"]': NotpreCodeClasslanguage;
  comment: Comment;
  prolog: Comment;
  doctype: Comment;
  cdata: Comment;
  punctuation: Comment;
  '.namespace': Namespace;
  property: Comment;
  tag: Comment;
  constant: Comment;
  symbol: Comment;
  deleted: Comment;
  boolean: Comment;
  number: Comment;
  selector: Comment;
  'attr-name': Comment;
  string: Comment;
  char: Comment;
  builtin: Comment;
  inserted: Comment;
  operator: Comment;
  entity: Entity;
  url: Comment;
  '.language-css .token.string': Comment;
  '.style .token.string': Comment;
  variable: Comment;
  atrule: Comment;
  'attr-value': Comment;
  function: Comment;
  'class-name': Comment;
  keyword: Comment;
  regex: Comment;
  important: Important;
  bold: Bold;
  italic: Italic;
}

export interface Italic {
  fontStyle: string;
}

export interface Bold {
  fontWeight: string;
}

export interface Important {
  color: string;
  fontWeight: string;
}

export interface Entity {
  color: string;
  cursor: string;
}

export interface Namespace {
  Opacity: string;
}

export interface Comment {
  color: string;
}

export interface NotpreCodeClasslanguage {
  background: string;
  padding: string;
  borderRadius: string;
  whiteSpace: string;
}

export interface PreClasslanguage {
  color: string;
  background: string;
  textShadow: string;
  fontFamily: string;
  textAlign: string;
  whiteSpace: string;
  wordSpacing: string;
  wordBreak: string;
  wordWrap: string;
  lineHeight: string;
  MozTabSize: string;
  OTabSize: string;
  tabSize: string;
  WebkitHyphens: string;
  MozHyphens: string;
  msHyphens: string;
  hyphens: string;
  padding: string;
  margin: string;
  overflow: string;
  borderRadius: string;
}

export interface CodeClasslanguage {
  color: string;
  background: string;
  textShadow: string;
  fontFamily: string;
  textAlign: string;
  whiteSpace: string;
  wordSpacing: string;
  wordBreak: string;
  wordWrap: string;
  lineHeight: string;
  MozTabSize: string;
  OTabSize: string;
  tabSize: string;
  WebkitHyphens: string;
  MozHyphens: string;
  msHyphens: string;
  hyphens: string;
}
