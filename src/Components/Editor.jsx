import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import { useState } from 'react';
import { RiCollapseDiagonalFill } from "react-icons/ri";
import { IoExpandSharp } from "react-icons/io5";



const Editor = (props) => {

    const [open, setOpen] = useState(true);

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
            <div className={` ${open ? " flex-1" : ""}`}>
                <div className="flex justify-between gap-1 text-start p-2 bg-[#3D3D45]">
                    <p className='text-[#fff]'>{displayName}</p>
                    {
                        open? <button onClick={() => setOpen(prevOpen => !prevOpen)} className='text-[#fff] pl-2 text-lg'>
                        <RiCollapseDiagonalFill />
                    </button> :
                    <button onClick={() => setOpen(prevOpen => !prevOpen)} className='text-[#fff] pl-2 text-lg'>
                    <IoExpandSharp />
                </button>
                    }
                </div>
                <AceEditor
                    className='absolute'
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
