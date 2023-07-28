create TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    status VARCHAR(255),
    creationTime timestamp
);

create TABLE products(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    article VARCHAR(255),
    price INTEGER,
    breadcrumbs JSON ARRAY,
    images JSON ARRAY,
    colors JSON ARRAY,
    sizes JSON ARRAY,
    description TEXT,
    details TEXT,
    tags VARCHAR(255) ARRAY,
    creationTime timestamp
);

create TABLE orders(
    id SERIAL PRIMARY KEY,
    customerName VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    selectedProducts INTEGER ARRAY,
    status VARCHAR(255),
    comment TEXT,
    creationTime timestamp
);