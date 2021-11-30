import dynamic from 'next/dynamic';

const languages = [
  'javascript',
  'java',
  'python',
  'ruby',
  'mysql',
  'html',
  'golang',
  'csharp',
  'typescript',
];

const themes = ['monokai'];

const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');

    languages.forEach((lang) => {
      require(`ace-builds/src-noconflict/mode-${lang}`);
      require(`ace-builds/src-noconflict/snippets/${lang}`);
    });

    themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));

    require('ace-builds/src-min-noconflict/ext-searchbox');
    require('ace-builds/src-min-noconflict/ext-language_tools');

    return ace;
  },
  {
    loading: () => <>Loading...</>,
    ssr: false,
  },
);

const defaultValue = `(function () {
    console.log('Hello World!')
})();`;

const CodeEditor = ({ readOnly = true }) => (
  <AceEditor
    name="code-editor"
    mode="javascript"
    theme="monokai"
    height="35vh"
    width="100%"
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      useWorker: false,
    }}
    defaultValue={defaultValue}
    readOnly={readOnly}
  />
);

export default CodeEditor;
