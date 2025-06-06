import useDebounce from './useDebounce';
const useThrottle = (func, time = 500, isUseDebounce = false, debounceTime = 500) => {
  let startTime = performance.now();
  const handleThrottle = (...arg) => {
    const currentTime = performance.now();
    if (currentTime - startTime > time) {
      startTime = performance.now();
      return func(...arg);
    }
  };

  return handleThrottle;
};
export default useThrottle;
