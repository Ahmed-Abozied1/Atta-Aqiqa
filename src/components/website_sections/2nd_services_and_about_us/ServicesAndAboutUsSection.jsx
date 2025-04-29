import { forwardRef } from "react";
import { motion } from "framer-motion";

import { serviceCards, values } from "./constants";
import photo from "./images/second-background.jpg";
import classes from "./ServicesAndAboutUsSection.module.css";

export const ServicesAndAboutUsSection = forwardRef(
    (props, ref) => {
        return (
            <motion.div
                ref={ref}
                className={classes.sectionContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Title */}
                <div className={classes.sectionTitle}>
                    <motion.div
                        className={classes.bigText}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        خـــدمــاتــنـــــا
                    </motion.div>

                    <motion.div
                        className={classes.smallText}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
في عطاء، إحنا بنساعدك توصل صدقتك عقيقتك أو النذر بتاعك للي يستحقه في أفريقيا. بنقوم بالدبح والتوزيع عنك، وكل ده بثقة وشفافية عشان تضمن إن الخير يوصل صح، وإنت مرتاح البال.                    </motion.div>
                </div>

                {/* Cards Section */}
                <div className={classes.cardsBlock}>
                    {serviceCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={classes.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className={classes.cardTitle}>{card.title}</div>
                            <div className={classes.cardBrief}>{card.brief}</div>
                        </motion.div>
                    ))}
                </div>

                {/* About Us Section */}
                <AboutUsSection />
            </motion.div>
        );
    }
);

export default function AboutUsSection() {
    return (
        <motion.div
            className={classes.aboutUs}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className={classes.aboutUsTextBlock}>
                <div className={classes.aboutUsDesc}>
                    <p className={classes.aboutUsTitle}>مـــن نـــحــــن</p>
                    <div className={classes.aboutUsDescText}> 
                    منذ أكثر من سنتين، في "عطاء"، أخذنا على عاتقنا تنفيذ العقائق والنذور والصدقات والأضاحي بكل أمانة وسهولة, بفضل الله وثقة عملائنا، نفذنا أكثر من 2000 طلب , وحرصنا دائمًا أن نكون حلقة وصل بين الخير ومستحقيه                    </div>
                </div>

                <div className={classes.aboutUsValues}>
                    {values.map((value, index) => (
                        <motion.div
                            key={value.id}
                            className={classes.aboutUsValue}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img className={classes.valueSymbol} src={value.symbol} alt="symbol" />
                            <p className={classes.valueTitle}>{value.title}</p>
                            <div className={classes.valueDesc}>
                                {value.desc.map((str, idx) => (
                                    <p key={idx}>
                                        {str.startsWith("\u2022") ? <>&#8226; {str.substring(1)}</> : str}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className={classes.aboutUsImg}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <img src={photo} alt="img" />
            </motion.div>
        </motion.div>
    );
}
