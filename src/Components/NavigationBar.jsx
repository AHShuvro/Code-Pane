import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from './Context';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-ambiance';
import 'ace-builds/src-noconflict/theme-chaos';
import 'ace-builds/src-noconflict/theme-clouds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-dracula';


const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = [
        'monokai', 'dracula', 'github', 'ambiance', 'chaos', 'clouds',
        'clouds_midnight', 'cobalt', 'tomorrow',
    ];

    const { theme, setTheme } = useContext(DataContext);

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);


    return (

        <div className='sticky top-0 z-50'>
            <div className='flex items-center justify-between px-10 h-16 bg-[#232323] '>
                <div>
                    <h1 className='text-white text-2xl'>Code Pane</h1>
                </div>
                <div>
                    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
                        <button onClick={() => setOpen((prev) => !prev)} className="rounded-sm w-24">Theme</button>
                        <ul className={`${open ? 'visible' : 'invisible'} py-2 bg-[#3D3D45] absolute top-12 z-50 w-full space-y-1 rounded-sm shadow-md`}>
                            {items.map((item, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => { setOpen((prev) => !prev); setTheme(item) }}
                                    className={`rounded-sm px-2 cursor-pointer ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-[#232323]`}
                                    style={{ transform: `translateY(${open ? 0 : (idx + 1) * 10}px)` }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavigationBar;