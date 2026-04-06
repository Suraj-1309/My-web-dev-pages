import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // useRef hook give refernece to a place or tag
  const passwordRef = useRef(null);


  // useCalllback memorize the function and optimize it
  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "1234567890";
      if (charAllowed) str += "!@#$%^&*(),./<>?;:'\"{}[]=+-_";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }
      setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword]
  );

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  
// call the fucntion whenever page load or depency change
useEffect(() => {
  passwordGenerator()
},
[length, numberAllowed, charAllowed, passwordGenerator] 
);
  
return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-gray-900"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 text-orange-500">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
  );
}

export default App;
