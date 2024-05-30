import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import { useContext, useEffect, useState } from 'react';
import { RiCollapseDiagonalFill } from "react-icons/ri";
import { IoExpandSharp } from "react-icons/io5";
import { DataContext } from './Context';

const Editor = (props) => {
    const [open, setOpen] = useState(true);
    const { theme } = useContext(DataContext);
    const [them, setThem] = useState('cobalt')
    const { language, value, displayName, onChange } = props;

    function handleChange(newValue) {
        if (onChange) {
            onChange(newValue);
        }
    }

    useEffect(() => {
        setThem(theme)
    }, [theme]);

    return (
        <div className={`${open ? "flex-1" : ""}`}>
            <div className="flex justify-between gap-1 text-start p-1 lg:p-2 bg-[#3D3D45]">
                <p className='text-[#fff]'>{displayName}</p>
                <button onClick={() => setOpen(prevOpen => !prevOpen)} className='text-[#fff] pl-2 text-lg'>
                    {open ? <RiCollapseDiagonalFill /> : <IoExpandSharp />}
                </button>
            </div>
            <AceEditor
                className='w-full h-full overflow-hidden'
                mode={language}
                theme={them}
                value={value}
                onChange={handleChange}
                name="code-editor"
                fontSize={14}
                width='100%'
                height="100%"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
};

export default Editor;
