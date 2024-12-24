import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    console.log($title);
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
