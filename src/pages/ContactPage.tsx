import { ContactFormComponent } from "../components/ContactFormComponent"
import { FooterComponent } from "../components/FooterComponent"
import { HeaderComponent } from "../components/HeaderComponent"

export const ContactPage = () => {
    return (
        <div>
            <HeaderComponent />
                <ContactFormComponent />
            <FooterComponent />
        </div>
    )
}