import React from 'react'

function Input({
    readOnly = false,
    language = "english",
    label,
    text,
    languages = [],
    onLanguageChange,
    onTextChange
}) {
  return (
    <div className='flex w-full flex-col justify-start gap-2 my-8'>
        <div className='flex flex-row justify-between items-center '>
            <label htmlFor="" className='font-medium text-xl'>{label}</label>
            <select 
            className='w-[100px] border-2 bg-black text-white py-1 px-2  border-black rounded-md '
            onChange={(e)=>(onLanguageChange && onLanguageChange(e.currentTarget.value))} 
            >
                {!readOnly ?  
                (<option className='auto'>auto</option>) : (
                    languages.map((lang) => (
                        <option key={lang.language} value={lang.code}>{lang.language}</option>
                    ))
                ) }
            </select>
        </div>
        <textarea 
        readOnly={readOnly} 
        onChange={(e)=>onTextChange(e.target.value)} 
        value={text} placeholder='enter text' 
        className='p-2 hide-scrollbar bg-transparent border-2 w-full h-40 h-full overflow-y-scroll border-black rounded-md max-w-[620px]'></textarea>
    </div>
  )
}

export default Input