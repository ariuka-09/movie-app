"use client";
import { useState } from "react";

export function Search() {
  const [text, setText] = useState("");
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
