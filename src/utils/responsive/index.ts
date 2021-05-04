const smBreakpoint = 640;

export const onMobile = (): boolean => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );

  return vw <= smBreakpoint;
};
