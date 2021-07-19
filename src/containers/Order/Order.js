import React from "react";
import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout/index";
import { Breed } from "../../components/MaterialUI";
import Card from "../../components/UI/Card";
import { generatePublicUrl } from "../../urlconfig";
import './style.css'

function Order() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <Layout />
      <div style={{maxWidth:'1160px', margin:'5px auto'}}>
        <Breed
          breed={[
            {name: 'Home' , href:'/'},
            {name: 'My Account' ,href:'/account'},
            {name:'My Orders',href:'/account/orders'}
          ]}
          breedIcon={<IoIosArrowForward/>}
        ></Breed>
      </div>
      {user.orders.map((order) => {
        return order.items.map((item) => (
          <Card style={{ margin: "5px auto"}}>
            <div className="orderItemContainer">
              <div
                style={{
                  width: 80,
                  height: 80,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                <img
                  style={{ maxWidth: 80, maxHeight: 80 }}
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                ></img>
              </div>
              <div>{item.productId.name}</div>
              <div>{item.payablePrice}</div>
              <div>{order.paymentStatus}</div>
            </div>
          </Card>
        ));
      })}
    </>
  );
}

export default Order;
