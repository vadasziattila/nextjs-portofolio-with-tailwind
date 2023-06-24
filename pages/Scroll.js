import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down 200 pixels
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 bg-teal-500 text-white rounded-full p-2 shadow-md hover:bg-teal-600 dark:bg-white text-gray-800"
          onClick={scrollToTop}
        >
          <AiOutlineArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
