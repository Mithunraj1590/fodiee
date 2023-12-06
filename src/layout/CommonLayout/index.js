import Footer from "@/components/Footer";
import Menu from "@/components/Menu";


 
export default function CommonLayout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer/>
    </>
  )
}