export default function NestedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
     <nav>
      This is Navigation area
      {children}
     </nav>
       
 )
}