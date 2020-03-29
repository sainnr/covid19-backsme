import React from "react";

export const Landing = () =>
  (
    <>
      <header className="jumbotron jumbotron-fluid hero-bg" >
        <div className="container-fluid text-center hero-overlay">
          <h1 className="display-3">Protect SMEs During Coronavirus</h1>
          <p className="lead pb-4">
            BackSME platform helps small & medium sized enterprises to leverage their customer communities
            during Coronavirus lockdowns.<br/> Issue coupons for future goods & services to be offered to your
            dear customers so they could back you in this hard moment by purchasing them now.
            All you need is a Stripe account, as simple as that.
          </p>
          <p>
            <a href="/demo/account" className="btn btn-light btn-lg" role="button">Show Demo</a>
            <a href="https://forms.gle/476ihv8QAcWy3uxc8"
               className="btn btn-outline-light btn-lg ml-3" target="_blank" role="button"
            >
              Register Interest
            </a>
          </p>
        </div>
      </header>
      <section id="services" className="container mb-5">
        <h2 className="display-4 text-center mt-5 mb-4">How It Works</h2>
        <div className="row text-center">
          <div className="col-4 mb-4">
            <h1 className="display-5 text-center">1. Register with Stripe</h1>
            <p>
              BackSME integrates with Stripe using so-called client-only one-time payments.
              That means, you manage all your moneys within the Stripe account so all customer payments
              land to your account directly, meaning that you don't wait for us to pay back.
            </p>
            <a href="https://stripe.com/docs/payments/checkout/client"
               className="btn btn-outline-primary"
               role="button" target="_blank"
            >
              Learn More
            </a>
          </div>
          <div className="col-4 mb-4">
            <h1 className="display-5 text-center">2. Prepare Your Products</h1>
            <p>
              Once you have an account, you can start preparing your products.
              Organize them in Stripe first and then just confirm them with BackSME so you could issue coupons.
              Don't worry, you will always have full control over them through Stripe.
            </p>
            <a href="/demo/account" className="btn btn-primary" role="button">Try Demo</a>
          </div>
          <div className="col-4 mb-4">
            <h1 className="display-5 text-center">3. Customers to Help You</h1>
            <p>
              Send your customers the direct link to purchase a coupon for the future product, be it any good or service
              that your business offers. They will be securely sent to the payment form and receive a coupon afterwards.
              Redeem the coupon later in exchange for the product, when the time comes.
            </p>
            <a href="https://forms.gle/476ihv8QAcWy3uxc8"
               className="btn btn-outline-primary"
               target="_blank" role="button"
            >
              Register Interest
            </a>
          </div>
        </div>
      </section>
      <hr/>
      <section className="container-fluid text-center py-4 mt-4 mb-4" id="contact">
        <h2 className="display-4 pb-4">Get in Touch</h2>
        <p className="text-center">Whilst we don't have 24h support, you can reach us in social media:</p>
        <a target="_blank" href="https://twitter.com/sainnr">
          <img className="contact-icon" src="images/twitter.png"  alt="Twitter"/>
        </a>
        <a target="_blank" href="https://github.com/sainnr/covid19-backsme">
          <img className="contact-icon" src="images/gh.png" alt="GitHub" />
        </a>
      </section>
      <footer className="py-3 bg-dark text-light">
        <div className="container">
          <p className="text-center">
            This is an open-source project. See us on <a target="_blank" href="https://github.com/sainnr/covid19-backsme">GitHub</a>.
          </p>
          <p className="text-center">Idea & prototype: Vladimir Salin &copy; 2020</p>
        </div>
      </footer>
    </>
  )