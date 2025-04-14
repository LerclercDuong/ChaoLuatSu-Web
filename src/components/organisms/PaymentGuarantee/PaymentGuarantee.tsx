import React from "react";
import styles from "./PaymentGuarantee.module.scss";
import { Box, Typography, Divider } from "@mui/material";
import { CreditCard, LocalShipping, Store, Refresh } from "@mui/icons-material";

const PaymentGuarantee: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Terms & Security */}
      <Typography variant="body2" className={styles.underline}>
        Delivery Terms & Condition
      </Typography>

      <Typography variant="h6" className={styles.title}>
        Secure your payment guarantee.
      </Typography>

      {/* Payment Methods */}
      <div className={styles.paymentMethods}>
        <div className={`${styles.chip} ${styles.visa}`}>
          <CreditCard fontSize="small" /> VISA
        </div>
        <div className={`${styles.chip} ${styles.mastercard}`}>
          <CreditCard fontSize="small" /> MasterCard
        </div>
        <div className={`${styles.chip} ${styles.paypal}`}>
          <CreditCard fontSize="small" /> PayPal
        </div>
      </div>

      <Divider sx={{ my: 2 }} />

      {/* Return Policy */}
      <Box className={styles.returnPolicy}>
        <Typography variant="h6" className={styles.title}>
          <Refresh fontSize="small" style={{ verticalAlign: "middle", marginRight: 6 }} />
          Return
        </Typography>

        <Typography variant="body2" color="text.secondary">
          You have <strong>60 days</strong> to return the item(s) using any of the following methods:
        </Typography>

        <ul>
          <li>
            Free store return <Store fontSize="small" style={{ verticalAlign: "middle", marginLeft: 4 }} />
          </li>
          <li>
            Free returns via USPS Dropoff Service{" "}
            <LocalShipping fontSize="small" style={{ verticalAlign: "middle", marginLeft: 4 }} />
          </li>
        </ul>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Social Share */}
      {/* <div className={styles.socialShare}>Social Share:</div> */}
    </div>
  );
};

export default PaymentGuarantee;
