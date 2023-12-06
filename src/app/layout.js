import CommonLayout from "@/layout/CommonLayout";
import localFont from 'next/font/local'
import "@/styles/main.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700","800"],
    style: ["normal"],
    subsets: ["latin"],
    fallback: "",
});
const myFont = localFont({
    src: [
        {
            path: "../../public/font/amsterdam.regular.woff2",
            weight: "400"
        }
    ]
})



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}
                style={{ "--font-family": `${montserrat.style.fontFamily}`, "--font-secondary": `${myFont.style.fontFamily}` }}>
                <CommonLayout>{children}</CommonLayout>
            </body>
        </html>
    )
}