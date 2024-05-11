import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';

const Editor = (props) => {

    const {
        language,
        value,
        displayName,
        onChange,
    } = props;

    function handleChange(newValue) {
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <>
            <div className='editor-container w-full'>
                <div className="flex gap-1 text-start py-2 bg-[#3D3D45]">
                        <p className='text-[#fff] pl-2'>{displayName}</p>
                        <button className='text-[#fff] pl-2'>O/C</button>
                </div>
                <AceEditor
                    mode={language}
                    theme="twilight"
                    value={value}
                    onChange={handleChange}
                    name="code-editor"
                    fontSize={14}
                    width="100%"
                    height="300px"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </>
    );
}

export default Editor;
