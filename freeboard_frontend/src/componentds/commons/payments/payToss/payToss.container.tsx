import { useEffect } from "react";

const PayTossPaymentPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.tosspayments.com/v1";
    document.head.appendChild(script);

    script.onload = () => {
      const clientKey = "test_ck_YZ1aOwX7K8mXd6aXQLBryQxzvNPG";
      const tossPayments = "test_ck_YZ1aOwX7K8mXd6aXQLBryQxzvNPG";

      tossPayments.requestPayment("카드", {
        amount: 15000,
        orderId: "ranWMwfI3WbTBDuPO4AM-",
        orderName: "토스 티셔츠 외 2건",
        customerName: "박토스",
        successUrl: "http://localhost:8080/success",
        failUrl: "http://localhost:8080/fail",
      });
    };
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default PayTossPaymentPage;
