namespace com.demo.capfirst.db;

entity Products {
    key prodId : String(6);
    prodName : String(30);
    prodDesc : String(50);
    prodPrice : Decimal(9,2);
    prodDiscount : Integer;
    prodStock : Integer;
}