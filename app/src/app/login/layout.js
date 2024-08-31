'use client'

import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();
  
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <>
          <h1>Common layout for Login Users</h1>
          <h2>hello123</h2>
          <button className="border bg-black">Hello</button>
          {children}
        </>
      ) : (
        <>
          <h2>helloxxx</h2>
          <button className="border bg-yellow">Hello</button>
          {children}
        </>
      )}
    </div>
  );
}

export default Layout;


