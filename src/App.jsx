import lang from './data/language.json'
import { Header , Input} from './components'
import { useEffect, useState } from 'react'
import { useTranslate } from './useTranslate/useTranslate';

function App() {

  const [text, setText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [language, setLangauge] = useState('');
  const translatedText = useTranslate(language, text);

  useEffect(()=>{
    setOutputText(translatedText);
  },[translatedText]);

  // const handleTransalate = (e) =>
  // {
  //   e.preventDefault();
  //   const data = {
  //     text,
  //     outputText,
  //     language
  //   }
  //   console.log(data)
  // }

  return (
    <div className='max-w-7xl px-4 w-full mx-auto'>
     <Header />
     <div className='flex mt-20 flex-col max-w-7xl sm:flex-row justify-center gap-4'>
      <Input 
      label="Text"
      languages={lang} 
      text={text} 
      // language={language} 
      // onLanguageChange={setLangauge}
      onTextChange={setText} />

      <Input 
      label="Result" 
      readOnly={true} 
      languages={lang} 
      language={language} 
      onLanguageChange={setLangauge}
      text={translatedText} />
     </div>
     {/* <button onClick={handleTransalate} className='w-full bg-black text-white rounded-2xl  py-2'>Translate</button> */}

    </div>
  )
}

export default App
