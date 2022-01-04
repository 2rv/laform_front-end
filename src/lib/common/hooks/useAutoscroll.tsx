import React, { useEffect, useRef } from 'react';

export function AutoScrollBottom<T>(trigger: T) {
  const messageRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (messageRef.current?.parentElement) {
      messageRef.current.parentElement.scrollTop = messageRef.current.offsetTop;
    }
  }, [trigger]);

  return <div ref={messageRef} />;
}
