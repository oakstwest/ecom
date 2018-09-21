drop table if exists products;

create table products(
product_id serial primary key,
title text,
price float(2),
quantity integer
);

select * 
from products;
