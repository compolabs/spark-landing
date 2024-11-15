
export default function useCookiePolicy() {
  const getCookieStatus = () => {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      let [key, value] = cookie.split('=');
      if (key === 'CookiePolicy') {
        return value;
      }
    }
    return null;
  }
  const setChangeCookie = (status: string) => {
    document.cookie = `CookiePolicy=${status}; path=/; max-age=31536000`; // max-age=31536000 - это 1 год
  }
  return {
    getCookieStatus,
    setChangeCookie
  };
}
