function RenderIf({ when = false, children }) {
  return <>{when && <>{children}</>}</>;
}

export default RenderIf;
