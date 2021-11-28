import { Countries } from "../../api/countries/countries";

const insertCountry = (name) => {
  Countries.insert({
    name,
  });
}

if (Countries.find().count() === 0) {
    insertCountry("Afghanistan");
    insertCountry("Albania");
    insertCountry("Algeria");
    insertCountry("Andorra");
    insertCountry("Nigeria");
}