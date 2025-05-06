import { motion } from "framer-motion";
import classes from "./RealEstateAgentsSection.module.css";
import backgroundImage from "./images/first-background.jpg"; // تأكد من صحة المسار

export const RealEstateAgentsSection = () => {
  return (
    <motion.div
      className={classes.sectionContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={classes.overlay}>
        <motion.div
          className={classes.textBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <h1 className={classes.titleBig}>
            <span className={classes.orangeTitleText2}>
            خلي فرحة العقيقة توصل لبعيد, {" "}
              <span className={classes.orangeTitleText}> </span>
              دي كمان خير بيوصل لقلوب ناس محتاجين في أفريقيا            </span> 
          </h1>
          <p className={classes.littleheader}>
          مَع كُلِّ عَطاءٍ، تُرْسَمُ بَسْمَةٌ تَغْمُرُ الإِنْسانَ دِفْئًا وَأَمَلًا
             </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
