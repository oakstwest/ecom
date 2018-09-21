drop table if exists images;
create table images
(
img_id serial primary key,
img text,
product_id integer 
);

select *
from images;

insert into images
(img, product_id)
values
("https://via.placeholder.com/350x150",1),
("https://via.placeholder.com/350x150",2),
("https://via.placeholder.com/350x150",3);
