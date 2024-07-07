import { BookingFormComponent } from "../components/BookingFormComponent"
import { FooterComponent } from "../components/FooterComponent"
import { HeaderComponent } from "../components/HeaderComponent"

export const BookingPage = () => {
    return (
        <div>
            <HeaderComponent />
                <BookingFormComponent />
            <FooterComponent />
        </div>
    )
}