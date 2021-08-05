end# VW-Booking-System

The personal test product.

## Setup

```
git clone git@github.com:digivizer/frontend.git

cd frontend && npm install

cp .env.example .env
```

## Development Server

This launches a reactive hot-reloadable development server/client environment on `localhost:8000`.

```
npm start
```

## Production Build

This generates server-ready code in `lib` and client-ready assets in `dist`.

```
npm run build
```

## Production Server

This launches the server in production mode (requires the production files to be built first).

```
npm run server
```

## Development Notes

1.  This would remove the check and improve the UX too.
2.  refactoring to remove this discrepency.
