import React, { useEffect, useState } from "react";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/Common/MainImage";
import { fetchCarts } from "../reducks/carts/operations";

const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
      console.log(items);
    }
  }, []);

  return (
    <>
      <MainImage />
      <section class="main">
        <div class="item-list">
          {items &&
            items.map((item) => (
              <div class="item">
                <Item key={item.id} item={item} />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
