import React, { useState } from "react";

import "./App.css";
import NavBar from "./NavBar";
import { Controlled as CodeMirror } from "react-codemirror2";
// core css
require("codemirror/lib/codemirror.css");
// theme
require("codemirror/theme/material.css");
require("codemirror/theme/material-palenight.css");
require("codemirror/theme/neat.css");
// keymap
require("codemirror/keymap/sublime");
require("codemirror/keymap/emacs");
require("codemirror/keymap/vim");
// language
require("codemirror/mode/javascript/javascript.js");
require("codemirror/mode/python/python.js");

const App = () => {
  const [code, setCode] = useState("");
  const [sending, setSending] = useState(false);
  const [mode, setMode] = useState("python");
  const [keyMap, setKeyMap] = useState("sublime");
  const [theme, setTheme] = useState("material");
  const [output, setOutput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSending(true);
    setOutput("Compiling please wait....");

    fetch(`http://localhost:8000/editor`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, mode }),
    })
      .then((response) => response.json())
      .then((result) => {
        setSending(false);
        let op = "";
        if (result.err) {
          op = `System Error\n${result.err}`;
        } else if (result.stderr) {
          op = `Compiler Error\n${result.stderr}`;
        } else {
          op = `SuccessFully Compiled...\n${result.stdout}`;
        }

        setOutput(op);
      })
      .catch((err) => {
        setSending(false);
        console.log(err);

        let op = `Server Error\nUnable to get response from server`;

        setOutput(op);
      });
  };

  return (
    <div className="wrapper">
      <NavBar
        setMode={setMode}
        mode={mode}
        keyMap={keyMap}
        setKeyMap={setKeyMap}
        theme={theme}
        setTheme={setTheme}
      />

      <div className="editor-area">
        <div className="code">
          <CodeMirror
            value={code}
            options={{
              mode,
              theme,
              lineNumbers: true,
              lineWrapping: true,
              autofocus: true,
              keyMap,
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
            }}
            onChange={(editor, value) => {}}
          />
        </div>
        <div className="output">
          <CodeMirror
            value={output}
            options={{
              theme,
              lineNumbers: true,
              lineWrapping: true,
              readOnly: true,
              cursorHeight: 0,
            }}
          />
        </div>
      </div>

      <button
        className="btn"
        onClick={handleClick}
        disabled={sending ? true : false}
      >
        Run
      </button>
    </div>
  );
};

export default App;
