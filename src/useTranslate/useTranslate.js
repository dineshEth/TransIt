import { useEffect, useState } from "react";
import axios from "axios";

import { conf } from "../conf/conf";

export function useTranslate (language, text) {

  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': `${language}`,
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': `${conf.api_key}`,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    data: [
      {
        Text: `${text}`
      }
    ]
  };
    const [data, setData] = useState('');
    useEffect(()=>{
        axios.request(options)
        .then((res) => res.data)
        .then((data) => data[0])
        .then((translation) => translation.translations)
        .then((text)=> {
          setData(text[0].text)
        })
        .catch((error)=>{
          console.log(error)
        })
        .finally()

    },[language,text])

    return data
}
