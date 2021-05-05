const smBreakpoint = 640;

export const onMobile = (): boolean => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );

  return vw <= smBreakpoint;
};

export const getScreenHeight = (): number => {
  return Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
};
