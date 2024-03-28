import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE }).base(
  "appsHIDPN0KHEbJFf"
);

export const getRecords = async (page) => {
  const data = base(page).select({
    maxRecords: 3,
    view: "Grid View",
  });
  console.log(data);
};

export const createRecord = (page, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const inquiry = formData.get("inquiry");

  base(page).create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Inquiry: inquiry,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.log(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
};
