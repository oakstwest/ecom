delete from cart
where cart_id = $1;

select *
from cart;