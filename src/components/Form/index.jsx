import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CountryList } from "../../assets/countryList";

function Index({rows, setrows}) {
  const [CountryName, setCountryName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [PostalCode, setPostalCode] = useState("");

  function createData(fullname, email, city, state, postal) {
    return { fullname, email, city, state, postal };
  }

  const onSave=()=>{
    setrows([...rows,createData(FirstName+" "+LastName,Email,City,State+","+CountryName,PostalCode)]);
  }

  return (
    <div style={{ border: "1px solid #eee" }}>
      <div class="mt-10 sm:mt-0"></div>
      <div class="">
        <div class="mt-5 md:col-span-2 md:mt-0">
          <div>
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 md:gap-6">
                  <div class="md:col-span-3 col-span-6">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={FirstName}
                    />
                  </div>

                  <div class="md:col-span-3 col-span-6">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="LastName"
                      variant="outlined"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      value={LastName}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-6">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={Email}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-12 sm:col-span-12">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      value={Address}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-8 gap-x-6">
                  <div class="col-span-4 md:col-span-2">
                    <Autocomplete
                      disableClearable
                      options={CountryList}
                      className="w-full mt-4"
                      onChange={(e, v) => {
                        setCountryName(v);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="select country" />
                      )}
                    />
                  </div>
                  <div class="col-span-4 md:col-span-2">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      value={City}
                    />
                  </div>
                  <div class="col-span-4 md:col-span-2">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      value={State}
                    />
                  </div>
                  <div class="col-span-4 md:col-span-2">
                    <TextField
                      className="w-full !mt-4"
                      id="outlined-basic"
                      label="Postal Code"
                      variant="outlined"
                      onChange={(e) => {
                        setPostalCode(e.target.value);
                      }}
                      value={PostalCode}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
