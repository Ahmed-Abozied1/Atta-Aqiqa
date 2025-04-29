import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'; // تأكد من استيراد الستايل الأساسي
import classes from "./CustomPhoneInput.module.css";

export const CustomPhoneInput = ({ getValues, bgColor }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const phoneNumberInputHandler = (value) => {
        setPhoneNumber(value);
        getValues(value, value.length > 0); // نرسل الرقم بدون شروط
    };

    return (
        <div style={{ direction: "ltr" }}> {/* اتجاه الشمال لليمين */}
            <PhoneInput
                country={'sa'} // مثلاً الافتراضي السعودية، غيرها حسب رغبتك
                value={phoneNumber}
                onChange={phoneNumberInputHandler}
                specialLabel={false}
                placeholder="رقـم الهاتـف"
                inputClass={classes.phoneInput}
                inputStyle={{
                    direction: "ltr", // كمان هنا تأكيد
                    textAlign: "left" ,// يخلي الرقم يبدأ من الشمال
                    width: "100%",
                    borderRadius: "8px",
                    border:" 1px solid #ccc"
                }}
                enableSearch={true} // تفعيل البحث عن الدول
            />
        </div>
    );
}
