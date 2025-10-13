"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Search() {
  const [text, setText] = useState("");
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
const router = useRouter();

  const handleEnterButton = (e: any) => {
    if(e.key === 'Enter'){
      
      router.push(`/searchPage?value=${text}&page=1`)
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnterButton}
      />
    </div>
  );
}
