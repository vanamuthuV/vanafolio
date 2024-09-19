import { useRef, useState } from "react";
import axios from "../../api/axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { AlertColor } from "@mui/material/Alert";

export const ContactUs = () => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const messages = useRef<HTMLTextAreaElement>(null);

  interface AlertMessage {
    message: string;
    variant: AlertColor;
  }

  const [alert, setAlert] = useState<boolean>(false);
  const [alertmessage, setAlertMessage] = useState<AlertMessage>({
    variant: "info",
    message: "",
  });

  const isValidAlertColor = (value: string): value is AlertColor => {
    return ["success", "info", "warning", "error"].includes(value);
  };

  const SubmitHandler = async () => {
    if (
      messages.current?.value &&
      email.current?.value &&
      name.current?.value
    ) {
      try {
        const response = await axios.post("/contact", {
          name: name.current.value,
          email: email.current.value,
          message: messages.current.value,
        });
        console.log(response?.data);
        const { message, variant } = response?.data;
        setAlert(false);
        setAlertMessage((prev) => ({
          ...prev, // Spread the previous state to keep any other properties intact
          message: message,
          variant: isValidAlertColor(variant) ? variant : "info",
        }));

        setAlert(true);
        name.current.value = "";
        email.current.value = "";
        messages.current.value = "";
      } catch (error: any) {
        console.log(error.message);
        setAlert(false);
        setAlertMessage((prev) => ({
          ...prev, // Spread the previous state to keep any other properties intact
          message:
            "Error sending message. Please try again or email us at vanamuthuvjob@gmail.com.",
          variant: "error",
        }));

        setAlert(true);
      }
    } else {
      setAlert(false);
      setAlertMessage((prev) => ({
        ...prev, // Spread the previous state to keep any other properties intact
        message: "Please fill the form completely",
        variant: "warning",
      }));
      setAlert(true);
    }
  };

  alert &&
    (() => {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    });

  return (
    <div
      id="contact"
      className="bg-[#eaecec]  flex flex-col items-center justify-center py-10 pb-20"
    >
      <h1 className="text-[40px] font-bold tracking-wider max-md:text-[35px]">
        {" "}
        CONTACT
      </h1>
      <div className="w-10 mt-4 h-1 rounded-full bg-[#7843e9]"></div>
      <div className="w-6/12 mt-4 max-md:w-11/12">
        <p className="text-xl font-medium text-center text-[#5c5a5a] max-md:text-base">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <form className="flex flex-col items-start justify-center w-6/12 p-10 mt-10 bg-white rounded-md shadow-xl max-md:p-6 max-md:w-11/12">
        <label className="text-[#7c7d7d] font-semibold mb-2 tracking-wider text-base max-md:text-sm">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-5 py-4 focus:outline-none bg-[#eaecec] w-full rounded-md placeholder:font-semibold font-semibold mb-10 max-md:py-3 
          max-md:px-3 max-md:text-sm max-md:mb-5"
          ref={name}
          required
        />
        <label
          htmlFor=" "
          className="text-[#7c7d7d] font-semibold mb-2 tracking-wider text-base max-md:text-sm"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="px-5 py-5 focus:outline-none bg-[#eaecec] w-full rounded-md placeholder:font-semibold font-semibold mb-10 max-md:py-3 
          max-md:px-3 max-md:text-sm max-md:mb-5"
          ref={email}
          required
        />
        <label
          htmlFor=""
          className="text-[#7c7d7d] font-semibold mb-2 tracking-wider text-base max-md:text-sm"
        >
          Message
        </label>
        <textarea
          name=""
          id=""
          placeholder="Enter Your Message"
          className="px-5 py-5 focus:outline-none bg-[#eaecec] w-full rounded-md placeholder:font-semibold font-semibold mb-2 h-[240px] resize-none max-md:py-3 
          max-md:px-3 max-md:text-sm max-md:mb-5"
          ref={messages}
          required
        ></textarea>
        <div className="flex flex-row items-center justify-end w-full">
          <button
            type="button"
            onClick={SubmitHandler}
            className="py-3.5 px-12 bg-[#7742e7] text-[#fbfaf9] tracking-wider font-bold rounded-md mt-5 max-md:mt-2.5 max-md:py-2 max-md:px-8"
          >
            SUBMIT
          </button>
        </div>
      </form>
      {alert && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => setAlert(false)}
        >
          <Alert
            onClose={() => setAlert(false)}
            severity={alertmessage.variant}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alertmessage.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
