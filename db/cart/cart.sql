drop table if exists cart;

create table cart(
    cart_id serial primary key,
    product_id integer REFERENCES products(product_id),
    quantity integer
);
