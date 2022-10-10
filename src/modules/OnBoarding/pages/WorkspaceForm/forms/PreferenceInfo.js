import PreferenceForm from "../components/PreferenceForm";

const PreferenceInfo = {
  form_id: 3,
  title: "How are you planning to use Eden?",
  caption: "We'll streamline your setup experience accordingly.",
  fields: [
    {
      custom: true,
      id: "preference",
      required: true,
      component: PreferenceForm,
      errorMsg: "Please select any of the 2 options",
    },
  ],
};

export default PreferenceInfo;
