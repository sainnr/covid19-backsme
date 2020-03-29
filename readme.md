# BacksMe
A proud member of COVID-19 Global Hackathon.

https://drive.google.com/file/d/1FwdoSco4Kug2FmxSHAsqZZcqHQgQH8HV/view?usp=sharing

## Message to end users
Support your local businesses by purchasing their products in advance. 
In hard times including the COVID-19 pandemic, small & medium enterprises you like are in real danger of bankrupcy or closure and need your back.
Many of them can't provide you a service due to lockdown & public life ban, but would be happy to open doors and welcome you a few months later when the situation normalises.

The BacksMe platform gives them a chance to provide you, a buyer, with a coupon to receive their goods or services after the specific future date.
By purchasing the coupons now, you help SMEs registered with the platform to overcome the hard time and survive till they open back again for you. 

## Message to SMEs
BacksMe gives you a technical way to leverage your customers base and gain their support by offering coupons for your goods & services to be provided when lockdowns are over.
Simply put, the customers buy coupons today, you deliver them services when you are open back again.
It is completely up to you as a business to set up the price or discount for the products, however, the customer is the one to give you help.

BacksMe also helps businesses with little to no IT infrastructure, like many of the entirely offline organisations, to make online payments with Stripe for your customers and lets you redeem coupons later on with the simple QR-code scanner available nearly on every smartphone.

Under the hood, the platform relies on the blockchain technology to cryptographically guarantee a proven track record of coupon purchases and redemptions.
The history of all transactions made is completely transparent and distributed among blockchain peers, reducing to zero the chance to cheat with the coupons you have issued.

## Hackathon scope
Since a full-fledged blockchain-based service implemention isn't feasible within 1-2 days & also the fact that it doesn't block the main user-faced functionality, the scope is limited to the proof-of-concept kind of product. 
The hackathon goal is to show a workable service that could issue & redeem coupons so that SMEs could express interest and register for the service to go live with blockchain.

Hence, the scope includes:
* a demonstration service to issue & redeem coupons
* a landing to provide necessary information & collect SME leads

Possible next steps:
* add payments with Stripe
* add blockchain support
* add business accounts so they could manage their coupons
* with two above, make a two-side confirmation of the completed transaction when goods are received

## API

URL: https://frozen-sea-24199.herokuapp.com/api

### `Products`
- `GET /products` lists all registered products with their SKUs
- `POST /products` creates a new product
```
{
  "ownerUuid": "<account UID>",
  "sku": "E213",
  "title": "N95 Mask",
  "price": 213.3
}
```
- `GET /products/:id` retrieves a product by its UID

### `Coupons`
- `GET /products/:productId/coupons` lists all issued coupons for the product `productId`
- `POST /products/:productId/coupons` issues a new coupon (empty JSON body is fine)
- `GET /products/:productId/coupons/:id` retrieves a product's coupon by its UID
- `DELETE /products/:productId/coupons/:id` redeems a coupon by its UID (can't be redeemed more than once)

