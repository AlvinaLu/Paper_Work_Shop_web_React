import React, {useContext, useEffect, useState} from 'react';
import {
  Badge,
  makeStyles,

} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {CountContext} from "../../context/CountContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  badge: {},
  cartButton: {
    color: theme.palette.primary.dark,
  }
}));


export const CartButton = () => {
  const {count, setCount} = useContext(CountContext);
  const classes = useStyles();
  let cart: any;



  useEffect(() => {
    if (window.localStorage.getItem("cart") != null) {
      let countGood=0
      cart = JSON.parse(window.localStorage.getItem("cart")!!)
      console.log(cart);
      for (const [key, value] of Object.entries<number>(cart)) {
        console.log(key, value);
        countGood += value;
      }
      setCount(countGood);
    }
  }, []);

  return (
    <>
      <Badge className={classes.badge} badgeContent={count} color="primary"><ShoppingCartOutlinedIcon
        className={classes.cartButton}></ShoppingCartOutlinedIcon></Badge>


    </>
  );
};




