import { forwardRef } from "react";
import { motion } from "framer-motion"; // 👈 إضافة framer-motion
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faTiktok ,faFacebook  } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export const Footer = forwardRef((props, ref) => {

    return (
        <motion.div 
            ref={ref} 
            className={classes.footerContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // يجعل الحركة تحدث مرة واحدة فقط عند التمرير
        >

<div className={classes.footerContent}>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
<FontAwesomeIcon icon={faPhone} className={classes.socialIcon}/>
<p>
    <span className={classes.telNumber}>+20 128 754 8945</span>
  </p>
</div>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
<FontAwesomeIcon icon={faEnvelope} className={classes.socialIcon} />
<p className={classes.telNumber}>ataa.aqiqa@outlook.com</p>
</div>

<div className={`${classes.footerItem} ${classes.socialsBlock}`}>
  <div 
    className={classes.socialLogos} 
  >
    <a href={"https://www.instagram.com/ataa.aqiqa"} target="blanc" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} />
    </a>
    <a href="https://www.facebook.com/ataa.aqiqa" target="blanc" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className={classes.socialIcon} />
    </a>
   
  </div>
  <p  className={classes.telNumber}>تابعنا على منصات التواصل الاجتماعي</p>

</div>

</div>


<div className={classes.brandBlock}>
<motion.p 
  
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  &copy; 2025 جميع الحقوق محفوظة مؤسسة عطاء
</motion.p>
</div>


        </motion.div>
    );
});
