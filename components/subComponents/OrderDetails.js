import React from "react";
import { View, Text } from "react-native";
import HeaderComp from "../molecules/HeaderComp";

function OrderDetails({ setToOrderDet }) {
    return (
        <>
            <HeaderComp handleNavigate={() => setToOrderDet(false)} title={"Oder Detils"} />
        </>
    )
}

export default OrderDetails;