import React, { useState } from 'react';

function ReadMore({ children, maxCharacterCount = 100 }) {
  const text = children;

  const [isShow, setIsShow] = useState(true);
  const result = isShow ? text.slice(0, maxCharacterCount) : text;

  function toggle() {
    setIsShow(!isShow);
  }

  return (
    <p>
      {result}
      <span onClick={toggle}>{isShow ? 'Read more' : 'Read less'}</span>
    </p>
  );
}



function ServicesList() {
  return (
    <div>
      <ReadMore>

      </ReadMore>
    </div>
  );
}
export default ServicesList;
