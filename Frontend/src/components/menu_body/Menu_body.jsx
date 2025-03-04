import Special_eachitem from "./Special_eachitem";
import Veg_eachitem from "./Veg_eachitem";
import Nonveg_eachitem from "./Nonveg_eachitem";
import Drinks_eachitem from "./Drinks_eachitem";

export default function Menu_body({ value }) {
  return (
    <>
      {/* In this a value 0,1,2,3 comes according to the btn clicked.And as the
      btn clicked the wanted components are rendered using tersary operators
      which is used to operate multiple conditions.The values comes from the
      "Menu_swiper.jsx" file. */}
      {value === 0 ? (
        <div className="Drinks_eachitem-container flex flex-wrap">
          <Special_eachitem
            name={"veg puff"}
            price={"50"}
            image={"/images/drinks.jfif"}
          />
          <Special_eachitem
            name={"French Fry"}
            price={"180"}
            image={"/images/drinks.jfif"}
          />
          <Special_eachitem
            name={"Sekuwa"}
            price={"350"}
            image={"/images/Nonveg.jfif"}
          />
        </div>
      ) : value === 1 ? (
        <div className="vegitems-container flex flex-wrap">
          <Veg_eachitem
            name={"Veg Khana set"}
            price={"120"}
            image={"/images/v.jfif"}
          />
          <Veg_eachitem
            name={"mushroom pizza"}
            price={"400"}
            image={"/images/v.jfif"}
          />
          <Veg_eachitem
            name={"veg sandwitch"}
            price={"150"}
            image={"/images/v.jfif"}
          />
        </div>
      ) : value === 2 ? (
        <div className="vegitems-container flex flex-wrap">
          <Nonveg_eachitem
            name={"Chicken Khana set"}
            price={"180"}
            image={"/images/Nonveg.jfif"}
          />
        </div>
      ) : value === 3 ? (
        <div className="vegitems-container flex flex-wrap">
          <Drinks_eachitem
            name={"Hot lemon juice"}
            price={"160"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"Hot lemon tea"}
            price={"50"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"coffee1"}
            price={"200"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"coffee2"}
            price={"100"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"coffee3"}
            price={"220"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"coffee4"}
            price={"400"}
            image={"/images/drinks.jfif"}
          />
          <Drinks_eachitem
            name={"coffee5"}
            price={"500"}
            image={"/images/drinks.jfif"}
          />
        </div>
      ) : null}
    </>
  );
}
