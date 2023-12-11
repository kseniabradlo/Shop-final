import './Contact.css';
function Contact(){
    return(
        <div className="contact">
            <div className="formGoogle">
            <form method="post" target="_blank">
                <div className="formdiv">
                    <p>Contact us</p>
                    <input type="text" name="username" required placeholder="Name"/>
                    <input type="text" name="email" required placeholder="E-mail"/>
                    <textarea name="message" placeholder="enter your text..."></textarea>
                    <input type="submit" value="Send"/>
                    <input type="reset" value="Reset"/>
                </div>

            </form>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d78199.43628901817!2d20.920286916449218!3d52.23007971245354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x471ecc8da58f0dd5%3A0xcaca645489a6cb25!2sZ%C5%82ota%2059%2C%2000-120%20parter!3m2!1d52.2301084!2d21.0026871!5e0!3m2!1sru!2spl!4v1698414775563!5m2!1sru!2spl"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>

            <div className="googleMapsContacts">



                <div className="contactsdiv">
                    <h3>OUR CONTACTS</h3>

                    <div className="address">
                        <p>Poland, Warsaw</p>

                                <p>Złota 59, 00-120 parter</p>


                                        <p>Mon-Fri: 8:00 - 22:00</p>

                                            <p>Sat: 10:00 - 20:00</p>

                                               <p>Sun: closed</p>
                    </div>


                            <div className="phone">
                                <p>22 222 01 63 | 22 434 23 53</p>
                            </div>

                            <div class="collab">
                                <p>
                                    collaboration: marketing@clinique.pl
                                </p>

                            </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;