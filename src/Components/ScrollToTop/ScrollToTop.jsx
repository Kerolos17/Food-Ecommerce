/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // إظهار الزر عند التمرير لأسفل
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // العودة إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // تنظيف الحدث عند إلغاء المكون
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={styles}>
          ⬆
        </button>
      )}
    </div>
  );
};

const styles = {
  position: 'fixed',
  bottom: '50px',
  right: '30px',
  backgroundColor: 'tomato',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width:"30px",
  height:"30px",
  cursor: 'pointer',
  fontSize: '18px',
};

export default ScrollToTop;
