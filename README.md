# AirbnbFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


- [Introduction](#introduction)
- [Requirement](#requirement)
- [Notes](#notes)
- [Expectations](#expectations)
- [Problem Statement](#problem-statement)
  - [Interface](#interface)
- [API interface](#api-interface)
  - [Get Listing information](#get-listing-information)
  - [Calculate Reservation Cost](#calculate-reservation-cost)
  - [Confirm Reservation](#confirm-reservation)

## Introduction

As a software engineer, you have to provide a reliable **frontend** application to clients.
Your task here is to implement a listing and checkout SPA app for a small **Airbnb** like rest api.

## Requirement

1. We value a **clean**, **simple** working solution.
2. Solution must work on all modern browsers (IE excluded).
3. The solution must be production ready.
4. Good understanding of project architecture and design patterns.
5. Good understanding of **REST API's** and **Http Clients**.

## Notes

- The Source code must be pushed in the provided project repository.
- (Optional) Deploy as a public api to your own host.

## Expectations

- This challenge should take around **4** to **6** hours to complete.
- Your code should be modular, each module should focus on doing one thing and do it well.
- Avoid over-engineering.
- Be cautious of **third-party** library usage. Don't include a 300KB library only for 1 helper function.

## Problem Statement

The web is quickly evolving and most of companies are switching their projects from jQuery-ish apps to **single page apps**.

As a frontend engineer **Your Mission, Should You Choose To Accept It** 💻 is to build a checkout page,
with at most 4 components for an **Airbnb** like website, where hosts can list their homes for rent,
and guests later can visit our website and book this homes for a specific duration called **Trip Duration**. [See Wireframe](#interface)

### Interface

_For reference only, you can be creative with design and UI/UX features._

![Interface Review](assets/listings.png)
![Interface Confirmation](assets/checkout.png)

Following this low fidelity wireframe we want to implement this checkout page as follows:

1. **Must** be a single page app (SPA).
2. **Must** implement 3 components as specified in the wireframe.

   - One Component for the navbar.
   - One Component to show the listings
   - One Component to show the listing info
     - This Component **Must** provide a div to show all reservation related info.
   - One Component to check availability and calculate reservation cost.
     - This Component **Must** provide a date picker to select checkin and checkout dates with range.
     - This Component **Must** provide a div to show the reservation cost when the user changes the date inputs above.

**[⬆ back to top](#introduction)**

## API interface

### Get Listing information

- Method: `GET`
- URL path: `/api/listings/:uuid`
- Header: `HTTP 200`
- Body:

  ```json
  {
    "id": "28eed9aa-c27d-4217-ab21-ad65ead3a2aa",
    "owner_id": "59f6d752-97cf-414e-a794-42794ac7511a",
    "name": "Warner",
    "slug": "revolutionize-warner",
    "description": "Maecenas ut massa quis augue luctus tincidunt.",
    "adults": 10,
    "children": 2,
    "is_pets_allowed": true,
    "base_price": 95.38,
    "cleaning_fee": 4.33,
    "image_url": "http://dummyimage.com/241x240.jpg/ff4444/ffffff",
    "weekly_discount": 0.13,
    "monthly_discount": 0.23,
    "special_prices": [
      {
        "date": "2019-10-12",
        "base_price": 40.51
      },
      {
        "date": "2019-10-13",
        "base_price": 80
      }
    ]
  }
  ```

**[⬆ back to top](#introduction)**

### Calculate Reservation Cost

- Method: `POST`
- URL path: `/api/listings/:uuid/checkout`

- Request body:

  ```json
  {
    "checkin": "2019-12-06",
    "checkout": "2019-12-10"
  }
  ```

- Response:
  Header: `HTTP 200`
  Body:

  ```json
  {
    "nights_count": 4,
    "nights_cost": 95.82,
    "discount": 13.82,
    "cleaning_fee": 3.82,
    "total": 112.95
  }
  ```

**[⬆ back to top](#introduction)**

