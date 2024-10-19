import { PropsWithChildren } from 'react';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default App;
