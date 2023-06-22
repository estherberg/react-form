import "./index.css";
import React from "react";
import valid from "./valid.jpg";  // Importing an image for the "valid" state
import invalid from "./invalid.jpg";  // Importing an image for the "invalid" state
import { ToastContainer, toast } from "react-toastify";  // Importing toast notification components and styles
import "react-toastify/dist/ReactToastify.css";

let clickImageEmail = false;  // Variable to track the click state of the email button
let clickImageTelegram = true;  // Variable to track the click state of the Telegram button

const notify = () => toast("Your information has been saved!");  // Function to display a toast notification

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgEmail: valid,  // Initial image state for the email button
      imgTelegram: invalid,  // Initial image state for the Telegram button
    };
    this.clickEmail = this.clickEmail.bind(this);
    this.clickTelegram = this.clickTelegram.bind(this);
  }

  // Function to handle click events on the email button
  clickEmail(event) {
    clickImageEmail = !clickImageEmail;  // Toggling the click state
    event.preventDefault();
    this.setState({ imgEmail: clickImageEmail ? invalid : valid });  // Updating the image state based on the click state
  }

  // Function to handle click events on the Telegram button
  clickTelegram(event) {
    clickImageTelegram = !clickImageTelegram;  // Toggling the click state
    event.preventDefault();
    this.setState({ imgTelegram: clickImageTelegram ? invalid : valid });  // Updating the image state based on the click state
  }

  // Function to handle form submission
  validForm = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = e.target.elements;  // Retrieving form input values
    console.log(
      "First name: " + firstName.value,
      "\nLast Name: " + lastName.value + "\nEmail: " + email.value
    );
    notify();  // Displaying a toast notification
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.validForm} className="form">
          {/* Title */}
          <div className="flex justify-start">
            <h1 className="title">Your profile</h1>
          </div>

          {/* First name / Last name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="flex justify-start block tracking-wide text-gray-1000 text-sm font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Test"
                required
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="flex justify-start block tracking-wide text-gray-1000 text-sm font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="User"
                required
              ></input>
            </div>
          </div>

          {/* Email */}
          <div className="w-full">
            <label
              className="flex justify-start block tracking-wide text-gray-2500 text-sm font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-2500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="@ test@user.com"
              required
            ></input>
          </div>

          {/* Notifications */}
          <div className="grid grid-cols-2 lg:grid-flow-col pt-5">
            <div className="notif">
              <p className="flex justify-start text-sm font-bold">
                Communication channel
              </p>
            </div>
            <div className="notif">
              <p className="flex justify-end text-sm font-bold">
                Notifications
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-flow-col pt-2">
            <div className="">
              <p className="flex justify-start text-sm pb-2">Email</p>
              <p className="flex justify-start text-sm">Telegram</p>
            </div>
            <div>
              <div className="flex justify-end pr-8 pb-2">
                <button className="btn">
                  <img
                    src={this.state.imgEmail}
                    className="App-logo"
                    alt="logo"
                    width="25"
                    onClick={this.clickEmail}
                  />
                </button>
              </div>
              <div className="flex justify-end pr-8">
                <button className="btn">
                  <img
                    src={this.state.imgTelegram}
                    className="App-logo"
                    alt="logo"
                    width="25"
                    onClick={this.clickTelegram}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="w-full">
            <div className="md:items-center py-6 px-3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>

          <div>
            <ToastContainer />  // Container for toast notifications
          </div>
        </form>
      </div>
    );
  }
}

export default App;
