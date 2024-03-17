import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState(" ");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleDpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClrClick = () => {
    let newText = "";
    setText(newText);
  }

  const handleCopyClick = () => {
    const copyText = document.getElementById('myBox');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied the text: ' + copyText.value);
  }

  // const handleBoldClick = () => {
  //   const selectedText = text.substring(selectionStart, selectionEnd);
  //   const newText =
  //     text.slice(0, selectionStart) +
  //     '<span style="font-weight: bold; color: blue;">' +
  //     selectedText +
  //     '</span>' +
  //     text.slice(selectionEnd);

  //   setText(newText);
  // };

  const handleExtraClick = () => {
    let newText = text.replace(/\s+/g, ' '); // Replace multiple spaces with single space
    setText(newText);
  }

  return (
    <>
      <div className="mb-3" >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: "black", color: "white" }}></textarea>
        <div className="my-2">
          <button className='btn btn-primary mx-2 md-2' onClick={handleUpClick}>UpperCase</button>
          <button className='btn btn-primary mx-2 md-2' onClick={handleDpClick}>LowerCase</button>
          <button className='btn btn-primary mx-2 md-2' onClick={handleClrClick}>Clear</button>
          <button className='btn btn-primary mx-2 md-2' onClick={handleCopyClick}>Copy</button>
          {/* <button className='btn btn-primary mx-2 md-2' onClick={handleBoldClick}>Bold</button> */}
          <button className='btn btn-primary mx-2 md-2' onClick={handleExtraClick}>Remove Extra Space</button>
        </div>
      </div>
    </>
  );
}

export default TextForm;
